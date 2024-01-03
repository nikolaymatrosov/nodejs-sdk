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
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.iot.devices.v1";

export interface PublishRegistryDataRequest {
  $type: "yandex.cloud.iot.devices.v1.PublishRegistryDataRequest";
  /** ID of registry publishing message */
  registryId: string;
  /** Topic where message should be published */
  topic: string;
  /** Content of the message */
  data: Buffer;
}

export interface PublishRegistryDataResponse {
  $type: "yandex.cloud.iot.devices.v1.PublishRegistryDataResponse";
}

function createBasePublishRegistryDataRequest(): PublishRegistryDataRequest {
  return {
    $type: "yandex.cloud.iot.devices.v1.PublishRegistryDataRequest",
    registryId: "",
    topic: "",
    data: Buffer.alloc(0),
  };
}

export const PublishRegistryDataRequest = {
  $type: "yandex.cloud.iot.devices.v1.PublishRegistryDataRequest" as const,

  encode(message: PublishRegistryDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishRegistryDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishRegistryDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.topic = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishRegistryDataRequest {
    return {
      $type: PublishRegistryDataRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      topic: isSet(object.topic) ? globalThis.String(object.topic) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: PublishRegistryDataRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.topic !== "") {
      obj.topic = message.topic;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishRegistryDataRequest>, I>>(base?: I): PublishRegistryDataRequest {
    return PublishRegistryDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishRegistryDataRequest>, I>>(object: I): PublishRegistryDataRequest {
    const message = createBasePublishRegistryDataRequest();
    message.registryId = object.registryId ?? "";
    message.topic = object.topic ?? "";
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(PublishRegistryDataRequest.$type, PublishRegistryDataRequest);

function createBasePublishRegistryDataResponse(): PublishRegistryDataResponse {
  return { $type: "yandex.cloud.iot.devices.v1.PublishRegistryDataResponse" };
}

export const PublishRegistryDataResponse = {
  $type: "yandex.cloud.iot.devices.v1.PublishRegistryDataResponse" as const,

  encode(_: PublishRegistryDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishRegistryDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishRegistryDataResponse();
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

  fromJSON(_: any): PublishRegistryDataResponse {
    return { $type: PublishRegistryDataResponse.$type };
  },

  toJSON(_: PublishRegistryDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishRegistryDataResponse>, I>>(base?: I): PublishRegistryDataResponse {
    return PublishRegistryDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishRegistryDataResponse>, I>>(_: I): PublishRegistryDataResponse {
    const message = createBasePublishRegistryDataResponse();
    return message;
  },
};

messageTypeRegistry.set(PublishRegistryDataResponse.$type, PublishRegistryDataResponse);

/** A set of methods to work with IoT Core messages on behalf of registry */
export type RegistryDataServiceService = typeof RegistryDataServiceService;
export const RegistryDataServiceService = {
  /** Publishes message on behalf of specified registry */
  publish: {
    path: "/yandex.cloud.iot.devices.v1.RegistryDataService/Publish",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PublishRegistryDataRequest) =>
      Buffer.from(PublishRegistryDataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PublishRegistryDataRequest.decode(value),
    responseSerialize: (value: PublishRegistryDataResponse) =>
      Buffer.from(PublishRegistryDataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PublishRegistryDataResponse.decode(value),
  },
} as const;

export interface RegistryDataServiceServer extends UntypedServiceImplementation {
  /** Publishes message on behalf of specified registry */
  publish: handleUnaryCall<PublishRegistryDataRequest, PublishRegistryDataResponse>;
}

export interface RegistryDataServiceClient extends Client {
  /** Publishes message on behalf of specified registry */
  publish(
    request: PublishRegistryDataRequest,
    callback: (error: ServiceError | null, response: PublishRegistryDataResponse) => void,
  ): ClientUnaryCall;
  publish(
    request: PublishRegistryDataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PublishRegistryDataResponse) => void,
  ): ClientUnaryCall;
  publish(
    request: PublishRegistryDataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PublishRegistryDataResponse) => void,
  ): ClientUnaryCall;
}

export const RegistryDataServiceClient = makeGenericClientConstructor(
  RegistryDataServiceService,
  "yandex.cloud.iot.devices.v1.RegistryDataService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RegistryDataServiceClient;
  service: typeof RegistryDataServiceService;
  serviceName: string;
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
