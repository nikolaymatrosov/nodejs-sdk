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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Instance } from "./instance";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface GetInstanceRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetInstanceRequest";
  instanceId: string;
}

export interface ListInstancesRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesRequest";
  folderId: string;
  pageSize: number;
  pageToken: string;
  filter: string;
  orderBy: string;
}

export interface ListInstancesResponse {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesResponse";
  instances: Instance[];
  nextPageToken: string;
}

function createBaseGetInstanceRequest(): GetInstanceRequest {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.GetInstanceRequest", instanceId: "" };
}

export const GetInstanceRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetInstanceRequest" as const,

  encode(message: GetInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetInstanceRequest {
    return {
      $type: GetInstanceRequest.$type,
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
    };
  },

  toJSON(message: GetInstanceRequest): unknown {
    const obj: any = {};
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetInstanceRequest>, I>>(base?: I): GetInstanceRequest {
    return GetInstanceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetInstanceRequest>, I>>(object: I): GetInstanceRequest {
    const message = createBaseGetInstanceRequest();
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetInstanceRequest.$type, GetInstanceRequest);

function createBaseListInstancesRequest(): ListInstancesRequest {
  return {
    $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListInstancesRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesRequest" as const,

  encode(message: ListInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstancesRequest();
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
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListInstancesRequest {
    return {
      $type: ListInstancesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListInstancesRequest): unknown {
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
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListInstancesRequest>, I>>(base?: I): ListInstancesRequest {
    return ListInstancesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstancesRequest>, I>>(object: I): ListInstancesRequest {
    const message = createBaseListInstancesRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstancesRequest.$type, ListInstancesRequest);

function createBaseListInstancesResponse(): ListInstancesResponse {
  return {
    $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesResponse",
    instances: [],
    nextPageToken: "",
  };
}

export const ListInstancesResponse = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesResponse" as const,

  encode(message: ListInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instances.push(Instance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListInstancesResponse {
    return {
      $type: ListInstancesResponse.$type,
      instances: globalThis.Array.isArray(object?.instances)
        ? object.instances.map((e: any) => Instance.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances?.length) {
      obj.instances = message.instances.map((e) => Instance.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListInstancesResponse>, I>>(base?: I): ListInstancesResponse {
    return ListInstancesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstancesResponse>, I>>(object: I): ListInstancesResponse {
    const message = createBaseListInstancesResponse();
    message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstancesResponse.$type, ListInstancesResponse);

export type InstanceServiceService = typeof InstanceServiceService;
export const InstanceServiceService = {
  get: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.InstanceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetInstanceRequest) => Buffer.from(GetInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetInstanceRequest.decode(value),
    responseSerialize: (value: Instance) => Buffer.from(Instance.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Instance.decode(value),
  },
  list: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.InstanceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstancesRequest) => Buffer.from(ListInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListInstancesRequest.decode(value),
    responseSerialize: (value: ListInstancesResponse) => Buffer.from(ListInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListInstancesResponse.decode(value),
  },
} as const;

export interface InstanceServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetInstanceRequest, Instance>;
  list: handleUnaryCall<ListInstancesRequest, ListInstancesResponse>;
}

export interface InstanceServiceClient extends Client {
  get(request: GetInstanceRequest, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
  get(
    request: GetInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Instance) => void,
  ): ClientUnaryCall;
  get(
    request: GetInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Instance) => void,
  ): ClientUnaryCall;
  list(
    request: ListInstancesRequest,
    callback: (error: ServiceError | null, response: ListInstancesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListInstancesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListInstancesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListInstancesResponse) => void,
  ): ClientUnaryCall;
}

export const InstanceServiceClient = makeGenericClientConstructor(
  InstanceServiceService,
  "yandex.cloud.marketplace.licensemanager.v1.InstanceService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): InstanceServiceClient;
  service: typeof InstanceServiceService;
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
