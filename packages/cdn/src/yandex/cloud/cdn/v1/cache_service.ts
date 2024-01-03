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

export const protobufPackage = "yandex.cloud.cdn.v1";

export interface PurgeCacheRequest {
  $type: "yandex.cloud.cdn.v1.PurgeCacheRequest";
  /** ID of the resource to perform purge operation on. */
  resourceId: string;
  /**
   * Set of paths:
   * Paths of the files to remove from the cache.
   *
   * You may use asterisk (`*`) as a wildcard character that substitutes any number of characters.
   *
   * If an empty array of paths is specified, the cache is purged entirely.
   */
  paths: string[];
}

export interface PurgeCacheMetadata {
  $type: "yandex.cloud.cdn.v1.PurgeCacheMetadata";
  /** ID of the resource. */
  resourceId: string;
}

export interface PrefetchCacheRequest {
  $type: "yandex.cloud.cdn.v1.PrefetchCacheRequest";
  /** ID of the resource to perform prefetch operation on. */
  resourceId: string;
  /** Set of paths to prefetch. */
  paths: string[];
}

export interface PrefetchCacheMetadata {
  $type: "yandex.cloud.cdn.v1.PrefetchCacheMetadata";
  /** ID of the resource. */
  resourceId: string;
}

function createBasePurgeCacheRequest(): PurgeCacheRequest {
  return { $type: "yandex.cloud.cdn.v1.PurgeCacheRequest", resourceId: "", paths: [] };
}

export const PurgeCacheRequest = {
  $type: "yandex.cloud.cdn.v1.PurgeCacheRequest" as const,

  encode(message: PurgeCacheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PurgeCacheRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePurgeCacheRequest();
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

          message.paths.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PurgeCacheRequest {
    return {
      $type: PurgeCacheRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      paths: globalThis.Array.isArray(object?.paths) ? object.paths.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: PurgeCacheRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.paths?.length) {
      obj.paths = message.paths;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PurgeCacheRequest>, I>>(base?: I): PurgeCacheRequest {
    return PurgeCacheRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PurgeCacheRequest>, I>>(object: I): PurgeCacheRequest {
    const message = createBasePurgeCacheRequest();
    message.resourceId = object.resourceId ?? "";
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(PurgeCacheRequest.$type, PurgeCacheRequest);

function createBasePurgeCacheMetadata(): PurgeCacheMetadata {
  return { $type: "yandex.cloud.cdn.v1.PurgeCacheMetadata", resourceId: "" };
}

export const PurgeCacheMetadata = {
  $type: "yandex.cloud.cdn.v1.PurgeCacheMetadata" as const,

  encode(message: PurgeCacheMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PurgeCacheMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePurgeCacheMetadata();
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

  fromJSON(object: any): PurgeCacheMetadata {
    return {
      $type: PurgeCacheMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: PurgeCacheMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PurgeCacheMetadata>, I>>(base?: I): PurgeCacheMetadata {
    return PurgeCacheMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PurgeCacheMetadata>, I>>(object: I): PurgeCacheMetadata {
    const message = createBasePurgeCacheMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PurgeCacheMetadata.$type, PurgeCacheMetadata);

function createBasePrefetchCacheRequest(): PrefetchCacheRequest {
  return { $type: "yandex.cloud.cdn.v1.PrefetchCacheRequest", resourceId: "", paths: [] };
}

export const PrefetchCacheRequest = {
  $type: "yandex.cloud.cdn.v1.PrefetchCacheRequest" as const,

  encode(message: PrefetchCacheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrefetchCacheRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrefetchCacheRequest();
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

          message.paths.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrefetchCacheRequest {
    return {
      $type: PrefetchCacheRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      paths: globalThis.Array.isArray(object?.paths) ? object.paths.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: PrefetchCacheRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.paths?.length) {
      obj.paths = message.paths;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrefetchCacheRequest>, I>>(base?: I): PrefetchCacheRequest {
    return PrefetchCacheRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrefetchCacheRequest>, I>>(object: I): PrefetchCacheRequest {
    const message = createBasePrefetchCacheRequest();
    message.resourceId = object.resourceId ?? "";
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(PrefetchCacheRequest.$type, PrefetchCacheRequest);

function createBasePrefetchCacheMetadata(): PrefetchCacheMetadata {
  return { $type: "yandex.cloud.cdn.v1.PrefetchCacheMetadata", resourceId: "" };
}

export const PrefetchCacheMetadata = {
  $type: "yandex.cloud.cdn.v1.PrefetchCacheMetadata" as const,

  encode(message: PrefetchCacheMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrefetchCacheMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrefetchCacheMetadata();
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

  fromJSON(object: any): PrefetchCacheMetadata {
    return {
      $type: PrefetchCacheMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: PrefetchCacheMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrefetchCacheMetadata>, I>>(base?: I): PrefetchCacheMetadata {
    return PrefetchCacheMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrefetchCacheMetadata>, I>>(object: I): PrefetchCacheMetadata {
    const message = createBasePrefetchCacheMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PrefetchCacheMetadata.$type, PrefetchCacheMetadata);

/** A set of methods for managing Cache Service resources. */
export type CacheServiceService = typeof CacheServiceService;
export const CacheServiceService = {
  /**
   * Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge).
   *
   * Purging may take up to 15 minutes.
   */
  purge: {
    path: "/yandex.cloud.cdn.v1.CacheService/Purge",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PurgeCacheRequest) => Buffer.from(PurgeCacheRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PurgeCacheRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
  prefetch: {
    path: "/yandex.cloud.cdn.v1.CacheService/Prefetch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PrefetchCacheRequest) => Buffer.from(PrefetchCacheRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PrefetchCacheRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface CacheServiceServer extends UntypedServiceImplementation {
  /**
   * Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge).
   *
   * Purging may take up to 15 minutes.
   */
  purge: handleUnaryCall<PurgeCacheRequest, Operation>;
  /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
  prefetch: handleUnaryCall<PrefetchCacheRequest, Operation>;
}

export interface CacheServiceClient extends Client {
  /**
   * Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge).
   *
   * Purging may take up to 15 minutes.
   */
  purge(
    request: PurgeCacheRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  purge(
    request: PurgeCacheRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  purge(
    request: PurgeCacheRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
  prefetch(
    request: PrefetchCacheRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  prefetch(
    request: PrefetchCacheRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  prefetch(
    request: PrefetchCacheRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const CacheServiceClient = makeGenericClientConstructor(
  CacheServiceService,
  "yandex.cloud.cdn.v1.CacheService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): CacheServiceClient;
  service: typeof CacheServiceService;
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
