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
import { messageTypeRegistry } from "../../../typeRegistry";
import { ApiEndpoint } from "./api_endpoint";

export const protobufPackage = "yandex.cloud.endpoint";

export interface GetApiEndpointRequest {
  $type: "yandex.cloud.endpoint.GetApiEndpointRequest";
  apiEndpointId: string;
}

export interface ListApiEndpointsRequest {
  $type: "yandex.cloud.endpoint.ListApiEndpointsRequest";
  pageSize: number;
  pageToken: string;
}

export interface ListApiEndpointsResponse {
  $type: "yandex.cloud.endpoint.ListApiEndpointsResponse";
  endpoints: ApiEndpoint[];
  nextPageToken: string;
}

function createBaseGetApiEndpointRequest(): GetApiEndpointRequest {
  return { $type: "yandex.cloud.endpoint.GetApiEndpointRequest", apiEndpointId: "" };
}

export const GetApiEndpointRequest = {
  $type: "yandex.cloud.endpoint.GetApiEndpointRequest" as const,

  encode(message: GetApiEndpointRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiEndpointId !== "") {
      writer.uint32(10).string(message.apiEndpointId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetApiEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetApiEndpointRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiEndpointId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetApiEndpointRequest {
    return {
      $type: GetApiEndpointRequest.$type,
      apiEndpointId: isSet(object.apiEndpointId) ? globalThis.String(object.apiEndpointId) : "",
    };
  },

  toJSON(message: GetApiEndpointRequest): unknown {
    const obj: any = {};
    if (message.apiEndpointId !== "") {
      obj.apiEndpointId = message.apiEndpointId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetApiEndpointRequest>): GetApiEndpointRequest {
    return GetApiEndpointRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetApiEndpointRequest>): GetApiEndpointRequest {
    const message = createBaseGetApiEndpointRequest();
    message.apiEndpointId = object.apiEndpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetApiEndpointRequest.$type, GetApiEndpointRequest);

function createBaseListApiEndpointsRequest(): ListApiEndpointsRequest {
  return { $type: "yandex.cloud.endpoint.ListApiEndpointsRequest", pageSize: 0, pageToken: "" };
}

export const ListApiEndpointsRequest = {
  $type: "yandex.cloud.endpoint.ListApiEndpointsRequest" as const,

  encode(message: ListApiEndpointsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiEndpointsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListApiEndpointsRequest();
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

  fromJSON(object: any): ListApiEndpointsRequest {
    return {
      $type: ListApiEndpointsRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListApiEndpointsRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListApiEndpointsRequest>): ListApiEndpointsRequest {
    return ListApiEndpointsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListApiEndpointsRequest>): ListApiEndpointsRequest {
    const message = createBaseListApiEndpointsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiEndpointsRequest.$type, ListApiEndpointsRequest);

function createBaseListApiEndpointsResponse(): ListApiEndpointsResponse {
  return { $type: "yandex.cloud.endpoint.ListApiEndpointsResponse", endpoints: [], nextPageToken: "" };
}

export const ListApiEndpointsResponse = {
  $type: "yandex.cloud.endpoint.ListApiEndpointsResponse" as const,

  encode(message: ListApiEndpointsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.endpoints) {
      ApiEndpoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiEndpointsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListApiEndpointsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpoints.push(ApiEndpoint.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListApiEndpointsResponse {
    return {
      $type: ListApiEndpointsResponse.$type,
      endpoints: globalThis.Array.isArray(object?.endpoints)
        ? object.endpoints.map((e: any) => ApiEndpoint.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListApiEndpointsResponse): unknown {
    const obj: any = {};
    if (message.endpoints?.length) {
      obj.endpoints = message.endpoints.map((e) => ApiEndpoint.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListApiEndpointsResponse>): ListApiEndpointsResponse {
    return ListApiEndpointsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListApiEndpointsResponse>): ListApiEndpointsResponse {
    const message = createBaseListApiEndpointsResponse();
    message.endpoints = object.endpoints?.map((e) => ApiEndpoint.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiEndpointsResponse.$type, ListApiEndpointsResponse);

export type ApiEndpointServiceService = typeof ApiEndpointServiceService;
export const ApiEndpointServiceService = {
  get: {
    path: "/yandex.cloud.endpoint.ApiEndpointService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetApiEndpointRequest) => Buffer.from(GetApiEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetApiEndpointRequest.decode(value),
    responseSerialize: (value: ApiEndpoint) => Buffer.from(ApiEndpoint.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ApiEndpoint.decode(value),
  },
  list: {
    path: "/yandex.cloud.endpoint.ApiEndpointService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListApiEndpointsRequest) => Buffer.from(ListApiEndpointsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListApiEndpointsRequest.decode(value),
    responseSerialize: (value: ListApiEndpointsResponse) =>
      Buffer.from(ListApiEndpointsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListApiEndpointsResponse.decode(value),
  },
} as const;

export interface ApiEndpointServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetApiEndpointRequest, ApiEndpoint>;
  list: handleUnaryCall<ListApiEndpointsRequest, ListApiEndpointsResponse>;
}

export interface ApiEndpointServiceClient extends Client {
  get(
    request: GetApiEndpointRequest,
    callback: (error: ServiceError | null, response: ApiEndpoint) => void,
  ): ClientUnaryCall;
  get(
    request: GetApiEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ApiEndpoint) => void,
  ): ClientUnaryCall;
  get(
    request: GetApiEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ApiEndpoint) => void,
  ): ClientUnaryCall;
  list(
    request: ListApiEndpointsRequest,
    callback: (error: ServiceError | null, response: ListApiEndpointsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListApiEndpointsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListApiEndpointsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListApiEndpointsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListApiEndpointsResponse) => void,
  ): ClientUnaryCall;
}

export const ApiEndpointServiceClient = makeGenericClientConstructor(
  ApiEndpointServiceService,
  "yandex.cloud.endpoint.ApiEndpointService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ApiEndpointServiceClient;
  service: typeof ApiEndpointServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
