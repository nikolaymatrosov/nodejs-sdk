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
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { ReleaseChannel, releaseChannelFromJSON, releaseChannelToJSON } from "./cluster";

export const protobufPackage = "yandex.cloud.k8s.v1";

export interface ListVersionsRequest {
  $type: "yandex.cloud.k8s.v1.ListVersionsRequest";
}

export interface ListVersionsResponse {
  $type: "yandex.cloud.k8s.v1.ListVersionsResponse";
  /** Versions available in the specified release channel. */
  availableVersions: AvailableVersions[];
}

export interface AvailableVersions {
  $type: "yandex.cloud.k8s.v1.AvailableVersions";
  /** Release channel: `RAPID`, `REGULAR` or `STABLE`. For more details see [documentation](https://cloud.yandex.ru/docs/managed-kubernetes/concepts/release-channels-and-updates). */
  releaseChannel: ReleaseChannel;
  /** Version of Kubernetes components. */
  versions: string[];
}

function createBaseListVersionsRequest(): ListVersionsRequest {
  return { $type: "yandex.cloud.k8s.v1.ListVersionsRequest" };
}

export const ListVersionsRequest = {
  $type: "yandex.cloud.k8s.v1.ListVersionsRequest" as const,

  encode(_: ListVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListVersionsRequest {
    return { $type: ListVersionsRequest.$type };
  },

  toJSON(_: ListVersionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListVersionsRequest>, I>>(base?: I): ListVersionsRequest {
    return ListVersionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListVersionsRequest>, I>>(_: I): ListVersionsRequest {
    const message = createBaseListVersionsRequest();
    return message;
  },
};

messageTypeRegistry.set(ListVersionsRequest.$type, ListVersionsRequest);

function createBaseListVersionsResponse(): ListVersionsResponse {
  return { $type: "yandex.cloud.k8s.v1.ListVersionsResponse", availableVersions: [] };
}

export const ListVersionsResponse = {
  $type: "yandex.cloud.k8s.v1.ListVersionsResponse" as const,

  encode(message: ListVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.availableVersions) {
      AvailableVersions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.availableVersions.push(AvailableVersions.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListVersionsResponse {
    return {
      $type: ListVersionsResponse.$type,
      availableVersions: globalThis.Array.isArray(object?.availableVersions)
        ? object.availableVersions.map((e: any) => AvailableVersions.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListVersionsResponse): unknown {
    const obj: any = {};
    if (message.availableVersions?.length) {
      obj.availableVersions = message.availableVersions.map((e) => AvailableVersions.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListVersionsResponse>, I>>(base?: I): ListVersionsResponse {
    return ListVersionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListVersionsResponse>, I>>(object: I): ListVersionsResponse {
    const message = createBaseListVersionsResponse();
    message.availableVersions = object.availableVersions?.map((e) => AvailableVersions.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListVersionsResponse.$type, ListVersionsResponse);

function createBaseAvailableVersions(): AvailableVersions {
  return { $type: "yandex.cloud.k8s.v1.AvailableVersions", releaseChannel: 0, versions: [] };
}

export const AvailableVersions = {
  $type: "yandex.cloud.k8s.v1.AvailableVersions" as const,

  encode(message: AvailableVersions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.releaseChannel !== 0) {
      writer.uint32(8).int32(message.releaseChannel);
    }
    for (const v of message.versions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AvailableVersions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvailableVersions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.releaseChannel = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.versions.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AvailableVersions {
    return {
      $type: AvailableVersions.$type,
      releaseChannel: isSet(object.releaseChannel) ? releaseChannelFromJSON(object.releaseChannel) : 0,
      versions: globalThis.Array.isArray(object?.versions) ? object.versions.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: AvailableVersions): unknown {
    const obj: any = {};
    if (message.releaseChannel !== 0) {
      obj.releaseChannel = releaseChannelToJSON(message.releaseChannel);
    }
    if (message.versions?.length) {
      obj.versions = message.versions;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AvailableVersions>, I>>(base?: I): AvailableVersions {
    return AvailableVersions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AvailableVersions>, I>>(object: I): AvailableVersions {
    const message = createBaseAvailableVersions();
    message.releaseChannel = object.releaseChannel ?? 0;
    message.versions = object.versions?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AvailableVersions.$type, AvailableVersions);

/** A set of methods for managing Kubernetes versions. */
export type VersionServiceService = typeof VersionServiceService;
export const VersionServiceService = {
  /** Retrieves the list of versions in the specified release channel. */
  list: {
    path: "/yandex.cloud.k8s.v1.VersionService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListVersionsRequest) => Buffer.from(ListVersionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListVersionsRequest.decode(value),
    responseSerialize: (value: ListVersionsResponse) => Buffer.from(ListVersionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListVersionsResponse.decode(value),
  },
} as const;

export interface VersionServiceServer extends UntypedServiceImplementation {
  /** Retrieves the list of versions in the specified release channel. */
  list: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
}

export interface VersionServiceClient extends Client {
  /** Retrieves the list of versions in the specified release channel. */
  list(
    request: ListVersionsRequest,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListVersionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListVersionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
}

export const VersionServiceClient = makeGenericClientConstructor(
  VersionServiceService,
  "yandex.cloud.k8s.v1.VersionService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): VersionServiceClient;
  service: typeof VersionServiceService;
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
