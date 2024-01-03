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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { AuthProvider } from "./auth";

export const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";

export interface ListAuthProvidersRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
}

export interface ListAuthProvidersResponse {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse";
  /** List of auth providers of the Elasticsearch cluster. */
  providers: AuthProvider[];
}

export interface GetAuthProviderRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. Name of the provider to delete. */
  name: string;
}

export interface AddAuthProvidersRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. List of providers to add. */
  providers: AuthProvider[];
}

export interface UpdateAuthProvidersRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. List of providers to set. */
  providers: AuthProvider[];
}

export interface DeleteAuthProvidersRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. List of providers to delete. */
  providerNames: string[];
}

export interface UpdateAuthProviderRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. Name of the provider to update. */
  name: string;
  /** Required. New provider defenition. */
  provider?: AuthProvider | undefined;
}

export interface DeleteAuthProviderRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. Name of the provider to delete. */
  name: string;
}

export interface AddAuthProvidersMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata";
  /** ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Names of the providers being added. */
  names: string[];
}

export interface UpdateAuthProvidersMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata";
  /** ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Names of the providers being added. */
  names: string[];
}

export interface DeleteAuthProvidersMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata";
  /** ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Names of the providers being removed. */
  names: string[];
}

function createBaseListAuthProvidersRequest(): ListAuthProvidersRequest {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest", clusterId: "" };
}

export const ListAuthProvidersRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest" as const,

  encode(message: ListAuthProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuthProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAuthProvidersRequest {
    return {
      $type: ListAuthProvidersRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: ListAuthProvidersRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<ListAuthProvidersRequest>): ListAuthProvidersRequest {
    return ListAuthProvidersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAuthProvidersRequest>): ListAuthProvidersRequest {
    const message = createBaseListAuthProvidersRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAuthProvidersRequest.$type, ListAuthProvidersRequest);

function createBaseListAuthProvidersResponse(): ListAuthProvidersResponse {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse", providers: [] };
}

export const ListAuthProvidersResponse = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse" as const,

  encode(message: ListAuthProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuthProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAuthProvidersResponse {
    return {
      $type: ListAuthProvidersResponse.$type,
      providers: globalThis.Array.isArray(object?.providers)
        ? object.providers.map((e: any) => AuthProvider.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListAuthProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => AuthProvider.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListAuthProvidersResponse>): ListAuthProvidersResponse {
    return ListAuthProvidersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAuthProvidersResponse>): ListAuthProvidersResponse {
    const message = createBaseListAuthProvidersResponse();
    message.providers = object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListAuthProvidersResponse.$type, ListAuthProvidersResponse);

function createBaseGetAuthProviderRequest(): GetAuthProviderRequest {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest", clusterId: "", name: "" };
}

export const GetAuthProviderRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest" as const,

  encode(message: GetAuthProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthProviderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAuthProviderRequest {
    return {
      $type: GetAuthProviderRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: GetAuthProviderRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetAuthProviderRequest>): GetAuthProviderRequest {
    return GetAuthProviderRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAuthProviderRequest>): GetAuthProviderRequest {
    const message = createBaseGetAuthProviderRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetAuthProviderRequest.$type, GetAuthProviderRequest);

function createBaseAddAuthProvidersRequest(): AddAuthProvidersRequest {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest", clusterId: "", providers: [] };
}

export const AddAuthProvidersRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest" as const,

  encode(message: AddAuthProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAuthProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAuthProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddAuthProvidersRequest {
    return {
      $type: AddAuthProvidersRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      providers: globalThis.Array.isArray(object?.providers)
        ? object.providers.map((e: any) => AuthProvider.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddAuthProvidersRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => AuthProvider.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AddAuthProvidersRequest>): AddAuthProvidersRequest {
    return AddAuthProvidersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddAuthProvidersRequest>): AddAuthProvidersRequest {
    const message = createBaseAddAuthProvidersRequest();
    message.clusterId = object.clusterId ?? "";
    message.providers = object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AddAuthProvidersRequest.$type, AddAuthProvidersRequest);

function createBaseUpdateAuthProvidersRequest(): UpdateAuthProvidersRequest {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest", clusterId: "", providers: [] };
}

export const UpdateAuthProvidersRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest" as const,

  encode(message: UpdateAuthProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAuthProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAuthProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthProvidersRequest {
    return {
      $type: UpdateAuthProvidersRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      providers: globalThis.Array.isArray(object?.providers)
        ? object.providers.map((e: any) => AuthProvider.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateAuthProvidersRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => AuthProvider.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAuthProvidersRequest>): UpdateAuthProvidersRequest {
    return UpdateAuthProvidersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAuthProvidersRequest>): UpdateAuthProvidersRequest {
    const message = createBaseUpdateAuthProvidersRequest();
    message.clusterId = object.clusterId ?? "";
    message.providers = object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateAuthProvidersRequest.$type, UpdateAuthProvidersRequest);

function createBaseDeleteAuthProvidersRequest(): DeleteAuthProvidersRequest {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest", clusterId: "", providerNames: [] };
}

export const DeleteAuthProvidersRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest" as const,

  encode(message: DeleteAuthProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.providerNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAuthProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAuthProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.providerNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAuthProvidersRequest {
    return {
      $type: DeleteAuthProvidersRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      providerNames: globalThis.Array.isArray(object?.providerNames)
        ? object.providerNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: DeleteAuthProvidersRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.providerNames?.length) {
      obj.providerNames = message.providerNames;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteAuthProvidersRequest>): DeleteAuthProvidersRequest {
    return DeleteAuthProvidersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteAuthProvidersRequest>): DeleteAuthProvidersRequest {
    const message = createBaseDeleteAuthProvidersRequest();
    message.clusterId = object.clusterId ?? "";
    message.providerNames = object.providerNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(DeleteAuthProvidersRequest.$type, DeleteAuthProvidersRequest);

function createBaseUpdateAuthProviderRequest(): UpdateAuthProviderRequest {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest",
    clusterId: "",
    name: "",
    provider: undefined,
  };
}

export const UpdateAuthProviderRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest" as const,

  encode(message: UpdateAuthProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.provider !== undefined) {
      AuthProvider.encode(message.provider, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAuthProviderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAuthProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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

          message.provider = AuthProvider.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthProviderRequest {
    return {
      $type: UpdateAuthProviderRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      provider: isSet(object.provider) ? AuthProvider.fromJSON(object.provider) : undefined,
    };
  },

  toJSON(message: UpdateAuthProviderRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.provider !== undefined) {
      obj.provider = AuthProvider.toJSON(message.provider);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAuthProviderRequest>): UpdateAuthProviderRequest {
    return UpdateAuthProviderRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAuthProviderRequest>): UpdateAuthProviderRequest {
    const message = createBaseUpdateAuthProviderRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.provider = (object.provider !== undefined && object.provider !== null)
      ? AuthProvider.fromPartial(object.provider)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateAuthProviderRequest.$type, UpdateAuthProviderRequest);

function createBaseDeleteAuthProviderRequest(): DeleteAuthProviderRequest {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest", clusterId: "", name: "" };
}

export const DeleteAuthProviderRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest" as const,

  encode(message: DeleteAuthProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAuthProviderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAuthProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAuthProviderRequest {
    return {
      $type: DeleteAuthProviderRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: DeleteAuthProviderRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteAuthProviderRequest>): DeleteAuthProviderRequest {
    return DeleteAuthProviderRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteAuthProviderRequest>): DeleteAuthProviderRequest {
    const message = createBaseDeleteAuthProviderRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteAuthProviderRequest.$type, DeleteAuthProviderRequest);

function createBaseAddAuthProvidersMetadata(): AddAuthProvidersMetadata {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata", clusterId: "", names: [] };
}

export const AddAuthProvidersMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata" as const,

  encode(message: AddAuthProvidersMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAuthProvidersMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAuthProvidersMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.names.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddAuthProvidersMetadata {
    return {
      $type: AddAuthProvidersMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      names: globalThis.Array.isArray(object?.names) ? object.names.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: AddAuthProvidersMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.names?.length) {
      obj.names = message.names;
    }
    return obj;
  },

  create(base?: DeepPartial<AddAuthProvidersMetadata>): AddAuthProvidersMetadata {
    return AddAuthProvidersMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddAuthProvidersMetadata>): AddAuthProvidersMetadata {
    const message = createBaseAddAuthProvidersMetadata();
    message.clusterId = object.clusterId ?? "";
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AddAuthProvidersMetadata.$type, AddAuthProvidersMetadata);

function createBaseUpdateAuthProvidersMetadata(): UpdateAuthProvidersMetadata {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata", clusterId: "", names: [] };
}

export const UpdateAuthProvidersMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata" as const,

  encode(message: UpdateAuthProvidersMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAuthProvidersMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAuthProvidersMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.names.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthProvidersMetadata {
    return {
      $type: UpdateAuthProvidersMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      names: globalThis.Array.isArray(object?.names) ? object.names.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: UpdateAuthProvidersMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.names?.length) {
      obj.names = message.names;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAuthProvidersMetadata>): UpdateAuthProvidersMetadata {
    return UpdateAuthProvidersMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAuthProvidersMetadata>): UpdateAuthProvidersMetadata {
    const message = createBaseUpdateAuthProvidersMetadata();
    message.clusterId = object.clusterId ?? "";
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateAuthProvidersMetadata.$type, UpdateAuthProvidersMetadata);

function createBaseDeleteAuthProvidersMetadata(): DeleteAuthProvidersMetadata {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata", clusterId: "", names: [] };
}

export const DeleteAuthProvidersMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata" as const,

  encode(message: DeleteAuthProvidersMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAuthProvidersMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAuthProvidersMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.names.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAuthProvidersMetadata {
    return {
      $type: DeleteAuthProvidersMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      names: globalThis.Array.isArray(object?.names) ? object.names.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: DeleteAuthProvidersMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.names?.length) {
      obj.names = message.names;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteAuthProvidersMetadata>): DeleteAuthProvidersMetadata {
    return DeleteAuthProvidersMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteAuthProvidersMetadata>): DeleteAuthProvidersMetadata {
    const message = createBaseDeleteAuthProvidersMetadata();
    message.clusterId = object.clusterId ?? "";
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(DeleteAuthProvidersMetadata.$type, DeleteAuthProvidersMetadata);

/** A set of methods for managing Elasticsearch Authentication resources. */
export type AuthServiceService = typeof AuthServiceService;
export const AuthServiceService = {
  /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
  listProviders: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/ListProviders",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAuthProvidersRequest) => Buffer.from(ListAuthProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAuthProvidersRequest.decode(value),
    responseSerialize: (value: ListAuthProvidersResponse) =>
      Buffer.from(ListAuthProvidersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAuthProvidersResponse.decode(value),
  },
  /** Returns registered auth provider by name. */
  getProvider: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/GetProvider",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAuthProviderRequest) => Buffer.from(GetAuthProviderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAuthProviderRequest.decode(value),
    responseSerialize: (value: AuthProvider) => Buffer.from(AuthProvider.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthProvider.decode(value),
  },
  /** Adds new auth providers to Elasticsearch cluster. */
  addProviders: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/AddProviders",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddAuthProvidersRequest) => Buffer.from(AddAuthProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddAuthProvidersRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Replase the list of auth providers. */
  updateProviders: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProviders",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAuthProvidersRequest) =>
      Buffer.from(UpdateAuthProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAuthProvidersRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes auth providers from Elasticsearch cluster by name. */
  deleteProviders: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProviders",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAuthProvidersRequest) =>
      Buffer.from(DeleteAuthProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteAuthProvidersRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates registered auth provider. */
  updateProvider: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProvider",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAuthProviderRequest) =>
      Buffer.from(UpdateAuthProviderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAuthProviderRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes auth provider from Elasticsearch cluster by name. */
  deleteProvider: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProvider",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAuthProviderRequest) =>
      Buffer.from(DeleteAuthProviderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteAuthProviderRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
  listProviders: handleUnaryCall<ListAuthProvidersRequest, ListAuthProvidersResponse>;
  /** Returns registered auth provider by name. */
  getProvider: handleUnaryCall<GetAuthProviderRequest, AuthProvider>;
  /** Adds new auth providers to Elasticsearch cluster. */
  addProviders: handleUnaryCall<AddAuthProvidersRequest, Operation>;
  /** Replase the list of auth providers. */
  updateProviders: handleUnaryCall<UpdateAuthProvidersRequest, Operation>;
  /** Removes auth providers from Elasticsearch cluster by name. */
  deleteProviders: handleUnaryCall<DeleteAuthProvidersRequest, Operation>;
  /** Updates registered auth provider. */
  updateProvider: handleUnaryCall<UpdateAuthProviderRequest, Operation>;
  /** Removes auth provider from Elasticsearch cluster by name. */
  deleteProvider: handleUnaryCall<DeleteAuthProviderRequest, Operation>;
}

export interface AuthServiceClient extends Client {
  /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
  listProviders(
    request: ListAuthProvidersRequest,
    callback: (error: ServiceError | null, response: ListAuthProvidersResponse) => void,
  ): ClientUnaryCall;
  listProviders(
    request: ListAuthProvidersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAuthProvidersResponse) => void,
  ): ClientUnaryCall;
  listProviders(
    request: ListAuthProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAuthProvidersResponse) => void,
  ): ClientUnaryCall;
  /** Returns registered auth provider by name. */
  getProvider(
    request: GetAuthProviderRequest,
    callback: (error: ServiceError | null, response: AuthProvider) => void,
  ): ClientUnaryCall;
  getProvider(
    request: GetAuthProviderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthProvider) => void,
  ): ClientUnaryCall;
  getProvider(
    request: GetAuthProviderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthProvider) => void,
  ): ClientUnaryCall;
  /** Adds new auth providers to Elasticsearch cluster. */
  addProviders(
    request: AddAuthProvidersRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addProviders(
    request: AddAuthProvidersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addProviders(
    request: AddAuthProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Replase the list of auth providers. */
  updateProviders(
    request: UpdateAuthProvidersRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateProviders(
    request: UpdateAuthProvidersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateProviders(
    request: UpdateAuthProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Removes auth providers from Elasticsearch cluster by name. */
  deleteProviders(
    request: DeleteAuthProvidersRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteProviders(
    request: DeleteAuthProvidersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteProviders(
    request: DeleteAuthProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates registered auth provider. */
  updateProvider(
    request: UpdateAuthProviderRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateProvider(
    request: UpdateAuthProviderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateProvider(
    request: UpdateAuthProviderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Removes auth provider from Elasticsearch cluster by name. */
  deleteProvider(
    request: DeleteAuthProviderRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteProvider(
    request: DeleteAuthProviderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteProvider(
    request: DeleteAuthProviderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const AuthServiceClient = makeGenericClientConstructor(
  AuthServiceService,
  "yandex.cloud.mdb.elasticsearch.v1.AuthService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
