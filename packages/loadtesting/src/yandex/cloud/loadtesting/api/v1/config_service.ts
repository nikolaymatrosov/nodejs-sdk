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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Config } from "./config/config";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1";

export interface CreateConfigRequest {
  $type: "yandex.cloud.loadtesting.api.v1.CreateConfigRequest";
  /** ID of the folder to create a config in. */
  folderId: string;
  /** Config content provided as a string in YAML format. */
  yamlString?: string | undefined;
}

export interface CreateConfigMetadata {
  $type: "yandex.cloud.loadtesting.api.v1.CreateConfigMetadata";
  /** ID of the config that is being created. */
  configId: string;
}

export interface GetConfigRequest {
  $type: "yandex.cloud.loadtesting.api.v1.GetConfigRequest";
  /** ID of the config to return. */
  configId: string;
}

export interface ListConfigsRequest {
  $type: "yandex.cloud.loadtesting.api.v1.ListConfigsRequest";
  /** ID of the folder to list configs in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListConfigsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListConfigsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListConfigsResponse {
  $type: "yandex.cloud.loadtesting.api.v1.ListConfigsResponse";
  /** List of configs in the specified folder. */
  configs: Config[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListConfigsRequest.page_size], use `next_page_token` as the value
   * for the [ListConfigsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseCreateConfigRequest(): CreateConfigRequest {
  return { $type: "yandex.cloud.loadtesting.api.v1.CreateConfigRequest", folderId: "", yamlString: undefined };
}

export const CreateConfigRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.CreateConfigRequest" as const,

  encode(message: CreateConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.yamlString !== undefined) {
      writer.uint32(18).string(message.yamlString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConfigRequest();
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

          message.yamlString = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateConfigRequest {
    return {
      $type: CreateConfigRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      yamlString: isSet(object.yamlString) ? globalThis.String(object.yamlString) : undefined,
    };
  },

  toJSON(message: CreateConfigRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.yamlString !== undefined) {
      obj.yamlString = message.yamlString;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateConfigRequest>, I>>(base?: I): CreateConfigRequest {
    return CreateConfigRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateConfigRequest>, I>>(object: I): CreateConfigRequest {
    const message = createBaseCreateConfigRequest();
    message.folderId = object.folderId ?? "";
    message.yamlString = object.yamlString ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateConfigRequest.$type, CreateConfigRequest);

function createBaseCreateConfigMetadata(): CreateConfigMetadata {
  return { $type: "yandex.cloud.loadtesting.api.v1.CreateConfigMetadata", configId: "" };
}

export const CreateConfigMetadata = {
  $type: "yandex.cloud.loadtesting.api.v1.CreateConfigMetadata" as const,

  encode(message: CreateConfigMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configId !== "") {
      writer.uint32(10).string(message.configId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateConfigMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConfigMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateConfigMetadata {
    return {
      $type: CreateConfigMetadata.$type,
      configId: isSet(object.configId) ? globalThis.String(object.configId) : "",
    };
  },

  toJSON(message: CreateConfigMetadata): unknown {
    const obj: any = {};
    if (message.configId !== "") {
      obj.configId = message.configId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateConfigMetadata>, I>>(base?: I): CreateConfigMetadata {
    return CreateConfigMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateConfigMetadata>, I>>(object: I): CreateConfigMetadata {
    const message = createBaseCreateConfigMetadata();
    message.configId = object.configId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateConfigMetadata.$type, CreateConfigMetadata);

function createBaseGetConfigRequest(): GetConfigRequest {
  return { $type: "yandex.cloud.loadtesting.api.v1.GetConfigRequest", configId: "" };
}

export const GetConfigRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.GetConfigRequest" as const,

  encode(message: GetConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configId !== "") {
      writer.uint32(10).string(message.configId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetConfigRequest {
    return {
      $type: GetConfigRequest.$type,
      configId: isSet(object.configId) ? globalThis.String(object.configId) : "",
    };
  },

  toJSON(message: GetConfigRequest): unknown {
    const obj: any = {};
    if (message.configId !== "") {
      obj.configId = message.configId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetConfigRequest>, I>>(base?: I): GetConfigRequest {
    return GetConfigRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetConfigRequest>, I>>(object: I): GetConfigRequest {
    const message = createBaseGetConfigRequest();
    message.configId = object.configId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetConfigRequest.$type, GetConfigRequest);

function createBaseListConfigsRequest(): ListConfigsRequest {
  return { $type: "yandex.cloud.loadtesting.api.v1.ListConfigsRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListConfigsRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.ListConfigsRequest" as const,

  encode(message: ListConfigsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListConfigsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConfigsRequest();
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

  fromJSON(object: any): ListConfigsRequest {
    return {
      $type: ListConfigsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListConfigsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListConfigsRequest>, I>>(base?: I): ListConfigsRequest {
    return ListConfigsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListConfigsRequest>, I>>(object: I): ListConfigsRequest {
    const message = createBaseListConfigsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListConfigsRequest.$type, ListConfigsRequest);

function createBaseListConfigsResponse(): ListConfigsResponse {
  return { $type: "yandex.cloud.loadtesting.api.v1.ListConfigsResponse", configs: [], nextPageToken: "" };
}

export const ListConfigsResponse = {
  $type: "yandex.cloud.loadtesting.api.v1.ListConfigsResponse" as const,

  encode(message: ListConfigsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.configs) {
      Config.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListConfigsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConfigsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configs.push(Config.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListConfigsResponse {
    return {
      $type: ListConfigsResponse.$type,
      configs: globalThis.Array.isArray(object?.configs) ? object.configs.map((e: any) => Config.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListConfigsResponse): unknown {
    const obj: any = {};
    if (message.configs?.length) {
      obj.configs = message.configs.map((e) => Config.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListConfigsResponse>, I>>(base?: I): ListConfigsResponse {
    return ListConfigsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListConfigsResponse>, I>>(object: I): ListConfigsResponse {
    const message = createBaseListConfigsResponse();
    message.configs = object.configs?.map((e) => Config.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListConfigsResponse.$type, ListConfigsResponse);

/** A set of methods for managing test configurations. */
export type ConfigServiceService = typeof ConfigServiceService;
export const ConfigServiceService = {
  /** Creates a test config in the specified folder. */
  create: {
    path: "/yandex.cloud.loadtesting.api.v1.ConfigService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateConfigRequest) => Buffer.from(CreateConfigRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateConfigRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified config.
   *
   * To get the list of all available configs, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.loadtesting.api.v1.ConfigService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetConfigRequest) => Buffer.from(GetConfigRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetConfigRequest.decode(value),
    responseSerialize: (value: Config) => Buffer.from(Config.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Config.decode(value),
  },
  /** Retrieves the list of configs in the specified folder. */
  list: {
    path: "/yandex.cloud.loadtesting.api.v1.ConfigService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListConfigsRequest) => Buffer.from(ListConfigsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListConfigsRequest.decode(value),
    responseSerialize: (value: ListConfigsResponse) => Buffer.from(ListConfigsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListConfigsResponse.decode(value),
  },
} as const;

export interface ConfigServiceServer extends UntypedServiceImplementation {
  /** Creates a test config in the specified folder. */
  create: handleUnaryCall<CreateConfigRequest, Operation>;
  /**
   * Returns the specified config.
   *
   * To get the list of all available configs, make a [List] request.
   */
  get: handleUnaryCall<GetConfigRequest, Config>;
  /** Retrieves the list of configs in the specified folder. */
  list: handleUnaryCall<ListConfigsRequest, ListConfigsResponse>;
}

export interface ConfigServiceClient extends Client {
  /** Creates a test config in the specified folder. */
  create(
    request: CreateConfigRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateConfigRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateConfigRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified config.
   *
   * To get the list of all available configs, make a [List] request.
   */
  get(request: GetConfigRequest, callback: (error: ServiceError | null, response: Config) => void): ClientUnaryCall;
  get(
    request: GetConfigRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Config) => void,
  ): ClientUnaryCall;
  get(
    request: GetConfigRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Config) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of configs in the specified folder. */
  list(
    request: ListConfigsRequest,
    callback: (error: ServiceError | null, response: ListConfigsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListConfigsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListConfigsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListConfigsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListConfigsResponse) => void,
  ): ClientUnaryCall;
}

export const ConfigServiceClient = makeGenericClientConstructor(
  ConfigServiceService,
  "yandex.cloud.loadtesting.api.v1.ConfigService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ConfigServiceClient;
  service: typeof ConfigServiceService;
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
