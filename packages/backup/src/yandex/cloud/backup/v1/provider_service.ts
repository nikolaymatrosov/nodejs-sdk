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

export const protobufPackage = "yandex.cloud.backup.v1";

export interface ActivateProviderRequest {
  $type: "yandex.cloud.backup.v1.ActivateProviderRequest";
  /** Activate provider for Folder iD. */
  folderId: string;
  /**
   * Activate specific provider by name.
   *
   * For more information, please see [activate-provider](/docs/backup/quickstart#activate-provider)
   */
  name: string;
}

export interface ActivateProviderMetadata {
  $type: "yandex.cloud.backup.v1.ActivateProviderMetadata";
  /** Activate provider for folder specified by ID. */
  folderId: string;
}

export interface ListActivatedProvidersRequest {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest";
  /** ID of the folder to find out the backup provider. */
  folderId: string;
}

export interface ListActivatedProvidersResponse {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse";
  /** Folder ID. */
  folderId: string;
  /** Name of the backup provider. */
  names: string[];
}

function createBaseActivateProviderRequest(): ActivateProviderRequest {
  return { $type: "yandex.cloud.backup.v1.ActivateProviderRequest", folderId: "", name: "" };
}

export const ActivateProviderRequest = {
  $type: "yandex.cloud.backup.v1.ActivateProviderRequest" as const,

  encode(message: ActivateProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateProviderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ActivateProviderRequest {
    return {
      $type: ActivateProviderRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: ActivateProviderRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateProviderRequest>, I>>(base?: I): ActivateProviderRequest {
    return ActivateProviderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateProviderRequest>, I>>(object: I): ActivateProviderRequest {
    const message = createBaseActivateProviderRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateProviderRequest.$type, ActivateProviderRequest);

function createBaseActivateProviderMetadata(): ActivateProviderMetadata {
  return { $type: "yandex.cloud.backup.v1.ActivateProviderMetadata", folderId: "" };
}

export const ActivateProviderMetadata = {
  $type: "yandex.cloud.backup.v1.ActivateProviderMetadata" as const,

  encode(message: ActivateProviderMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateProviderMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateProviderMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateProviderMetadata {
    return {
      $type: ActivateProviderMetadata.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: ActivateProviderMetadata): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateProviderMetadata>, I>>(base?: I): ActivateProviderMetadata {
    return ActivateProviderMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateProviderMetadata>, I>>(object: I): ActivateProviderMetadata {
    const message = createBaseActivateProviderMetadata();
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateProviderMetadata.$type, ActivateProviderMetadata);

function createBaseListActivatedProvidersRequest(): ListActivatedProvidersRequest {
  return { $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest", folderId: "" };
}

export const ListActivatedProvidersRequest = {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest" as const,

  encode(message: ListActivatedProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListActivatedProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListActivatedProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListActivatedProvidersRequest {
    return {
      $type: ListActivatedProvidersRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: ListActivatedProvidersRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListActivatedProvidersRequest>, I>>(base?: I): ListActivatedProvidersRequest {
    return ListActivatedProvidersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListActivatedProvidersRequest>, I>>(
    object: I,
  ): ListActivatedProvidersRequest {
    const message = createBaseListActivatedProvidersRequest();
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListActivatedProvidersRequest.$type, ListActivatedProvidersRequest);

function createBaseListActivatedProvidersResponse(): ListActivatedProvidersResponse {
  return { $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse", folderId: "", names: [] };
}

export const ListActivatedProvidersResponse = {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse" as const,

  encode(message: ListActivatedProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    for (const v of message.names) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListActivatedProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListActivatedProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ListActivatedProvidersResponse {
    return {
      $type: ListActivatedProvidersResponse.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      names: globalThis.Array.isArray(object?.names) ? object.names.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ListActivatedProvidersResponse): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.names?.length) {
      obj.names = message.names;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListActivatedProvidersResponse>, I>>(base?: I): ListActivatedProvidersResponse {
    return ListActivatedProvidersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListActivatedProvidersResponse>, I>>(
    object: I,
  ): ListActivatedProvidersResponse {
    const message = createBaseListActivatedProvidersResponse();
    message.folderId = object.folderId ?? "";
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ListActivatedProvidersResponse.$type, ListActivatedProvidersResponse);

/** A set of methods for managing [backup providers](/docs/backup/concepts/#providers). */
export type ProviderServiceService = typeof ProviderServiceService;
export const ProviderServiceService = {
  /** Activate provider for specified client. */
  activate: {
    path: "/yandex.cloud.backup.v1.ProviderService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateProviderRequest) => Buffer.from(ActivateProviderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateProviderRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List activated providers for specified client. */
  listActivated: {
    path: "/yandex.cloud.backup.v1.ProviderService/ListActivated",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListActivatedProvidersRequest) =>
      Buffer.from(ListActivatedProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListActivatedProvidersRequest.decode(value),
    responseSerialize: (value: ListActivatedProvidersResponse) =>
      Buffer.from(ListActivatedProvidersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListActivatedProvidersResponse.decode(value),
  },
} as const;

export interface ProviderServiceServer extends UntypedServiceImplementation {
  /** Activate provider for specified client. */
  activate: handleUnaryCall<ActivateProviderRequest, Operation>;
  /** List activated providers for specified client. */
  listActivated: handleUnaryCall<ListActivatedProvidersRequest, ListActivatedProvidersResponse>;
}

export interface ProviderServiceClient extends Client {
  /** Activate provider for specified client. */
  activate(
    request: ActivateProviderRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateProviderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateProviderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** List activated providers for specified client. */
  listActivated(
    request: ListActivatedProvidersRequest,
    callback: (error: ServiceError | null, response: ListActivatedProvidersResponse) => void,
  ): ClientUnaryCall;
  listActivated(
    request: ListActivatedProvidersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListActivatedProvidersResponse) => void,
  ): ClientUnaryCall;
  listActivated(
    request: ListActivatedProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListActivatedProvidersResponse) => void,
  ): ClientUnaryCall;
}

export const ProviderServiceClient = makeGenericClientConstructor(
  ProviderServiceService,
  "yandex.cloud.backup.v1.ProviderService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProviderServiceClient;
  service: typeof ProviderServiceService;
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
