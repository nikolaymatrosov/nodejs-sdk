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
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { ResourcePreset } from "./resource_preset";

export const protobufPackage = "yandex.cloud.ydb.v1";

export interface GetResourcePresetRequest {
  $type: "yandex.cloud.ydb.v1.GetResourcePresetRequest";
  /** Required. ID of the resource preset to return. */
  resourcePresetId: string;
}

export interface ListResourcePresetsRequest {
  $type: "yandex.cloud.ydb.v1.ListResourcePresetsRequest";
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a `next_page_token` that can be used
   * to get the next page of results in subsequent ListResourcePresets requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set `page_token` to the `next_page_token` returned by a previous ListResourcePresets
   * request to get the next page of results.
   */
  pageToken: string;
}

export interface ListResourcePresetsResponse {
  $type: "yandex.cloud.ydb.v1.ListResourcePresetsResponse";
  /** Requested list of resource presets. */
  resourcePresets: ResourcePreset[];
  /**
   * This token allows you to get the next page of results for ListResourcePresets requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListResourcePresets request. Subsequent ListResourcePresets
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetResourcePresetRequest(): GetResourcePresetRequest {
  return { $type: "yandex.cloud.ydb.v1.GetResourcePresetRequest", resourcePresetId: "" };
}

export const GetResourcePresetRequest = {
  $type: "yandex.cloud.ydb.v1.GetResourcePresetRequest" as const,

  encode(message: GetResourcePresetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcePresetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourcePresetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourcePresetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResourcePresetRequest {
    return {
      $type: GetResourcePresetRequest.$type,
      resourcePresetId: isSet(object.resourcePresetId) ? globalThis.String(object.resourcePresetId) : "",
    };
  },

  toJSON(message: GetResourcePresetRequest): unknown {
    const obj: any = {};
    if (message.resourcePresetId !== "") {
      obj.resourcePresetId = message.resourcePresetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourcePresetRequest>, I>>(base?: I): GetResourcePresetRequest {
    return GetResourcePresetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourcePresetRequest>, I>>(object: I): GetResourcePresetRequest {
    const message = createBaseGetResourcePresetRequest();
    message.resourcePresetId = object.resourcePresetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetResourcePresetRequest.$type, GetResourcePresetRequest);

function createBaseListResourcePresetsRequest(): ListResourcePresetsRequest {
  return { $type: "yandex.cloud.ydb.v1.ListResourcePresetsRequest", pageSize: 0, pageToken: "" };
}

export const ListResourcePresetsRequest = {
  $type: "yandex.cloud.ydb.v1.ListResourcePresetsRequest" as const,

  encode(message: ListResourcePresetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourcePresetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourcePresetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): ListResourcePresetsRequest {
    return {
      $type: ListResourcePresetsRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListResourcePresetsRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourcePresetsRequest>, I>>(base?: I): ListResourcePresetsRequest {
    return ListResourcePresetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourcePresetsRequest>, I>>(object: I): ListResourcePresetsRequest {
    const message = createBaseListResourcePresetsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcePresetsRequest.$type, ListResourcePresetsRequest);

function createBaseListResourcePresetsResponse(): ListResourcePresetsResponse {
  return { $type: "yandex.cloud.ydb.v1.ListResourcePresetsResponse", resourcePresets: [], nextPageToken: "" };
}

export const ListResourcePresetsResponse = {
  $type: "yandex.cloud.ydb.v1.ListResourcePresetsResponse" as const,

  encode(message: ListResourcePresetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourcePresets) {
      ResourcePreset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourcePresetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourcePresetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourcePresets.push(ResourcePreset.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListResourcePresetsResponse {
    return {
      $type: ListResourcePresetsResponse.$type,
      resourcePresets: globalThis.Array.isArray(object?.resourcePresets)
        ? object.resourcePresets.map((e: any) => ResourcePreset.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListResourcePresetsResponse): unknown {
    const obj: any = {};
    if (message.resourcePresets?.length) {
      obj.resourcePresets = message.resourcePresets.map((e) => ResourcePreset.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourcePresetsResponse>, I>>(base?: I): ListResourcePresetsResponse {
    return ListResourcePresetsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourcePresetsResponse>, I>>(object: I): ListResourcePresetsResponse {
    const message = createBaseListResourcePresetsResponse();
    message.resourcePresets = object.resourcePresets?.map((e) => ResourcePreset.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcePresetsResponse.$type, ListResourcePresetsResponse);

export type ResourcePresetServiceService = typeof ResourcePresetServiceService;
export const ResourcePresetServiceService = {
  /** Returns the specified resource preset. */
  get: {
    path: "/yandex.cloud.ydb.v1.ResourcePresetService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetResourcePresetRequest) => Buffer.from(GetResourcePresetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetResourcePresetRequest.decode(value),
    responseSerialize: (value: ResourcePreset) => Buffer.from(ResourcePreset.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResourcePreset.decode(value),
  },
  /** Returns the list of available resource presets. */
  list: {
    path: "/yandex.cloud.ydb.v1.ResourcePresetService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListResourcePresetsRequest) =>
      Buffer.from(ListResourcePresetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListResourcePresetsRequest.decode(value),
    responseSerialize: (value: ListResourcePresetsResponse) =>
      Buffer.from(ListResourcePresetsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListResourcePresetsResponse.decode(value),
  },
} as const;

export interface ResourcePresetServiceServer extends UntypedServiceImplementation {
  /** Returns the specified resource preset. */
  get: handleUnaryCall<GetResourcePresetRequest, ResourcePreset>;
  /** Returns the list of available resource presets. */
  list: handleUnaryCall<ListResourcePresetsRequest, ListResourcePresetsResponse>;
}

export interface ResourcePresetServiceClient extends Client {
  /** Returns the specified resource preset. */
  get(
    request: GetResourcePresetRequest,
    callback: (error: ServiceError | null, response: ResourcePreset) => void,
  ): ClientUnaryCall;
  get(
    request: GetResourcePresetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResourcePreset) => void,
  ): ClientUnaryCall;
  get(
    request: GetResourcePresetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResourcePreset) => void,
  ): ClientUnaryCall;
  /** Returns the list of available resource presets. */
  list(
    request: ListResourcePresetsRequest,
    callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListResourcePresetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListResourcePresetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void,
  ): ClientUnaryCall;
}

export const ResourcePresetServiceClient = makeGenericClientConstructor(
  ResourcePresetServiceService,
  "yandex.cloud.ydb.v1.ResourcePresetService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ResourcePresetServiceClient;
  service: typeof ResourcePresetServiceService;
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
