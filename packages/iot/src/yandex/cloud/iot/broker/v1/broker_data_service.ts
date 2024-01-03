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

export const protobufPackage = "yandex.cloud.iot.broker.v1";

export interface PublishBrokerDataRequest {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest";
  /** ID of broker publishing message */
  brokerId: string;
  /** Topic where message should be published */
  topic: string;
  /** Content of the message */
  data: Buffer;
}

export interface PublishBrokerDataResponse {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse";
}

function createBasePublishBrokerDataRequest(): PublishBrokerDataRequest {
  return {
    $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest",
    brokerId: "",
    topic: "",
    data: Buffer.alloc(0),
  };
}

export const PublishBrokerDataRequest = {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest" as const,

  encode(message: PublishBrokerDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishBrokerDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishBrokerDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
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

  fromJSON(object: any): PublishBrokerDataRequest {
    return {
      $type: PublishBrokerDataRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      topic: isSet(object.topic) ? globalThis.String(object.topic) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: PublishBrokerDataRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.topic !== "") {
      obj.topic = message.topic;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishBrokerDataRequest>, I>>(base?: I): PublishBrokerDataRequest {
    return PublishBrokerDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishBrokerDataRequest>, I>>(object: I): PublishBrokerDataRequest {
    const message = createBasePublishBrokerDataRequest();
    message.brokerId = object.brokerId ?? "";
    message.topic = object.topic ?? "";
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(PublishBrokerDataRequest.$type, PublishBrokerDataRequest);

function createBasePublishBrokerDataResponse(): PublishBrokerDataResponse {
  return { $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse" };
}

export const PublishBrokerDataResponse = {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse" as const,

  encode(_: PublishBrokerDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishBrokerDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishBrokerDataResponse();
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

  fromJSON(_: any): PublishBrokerDataResponse {
    return { $type: PublishBrokerDataResponse.$type };
  },

  toJSON(_: PublishBrokerDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishBrokerDataResponse>, I>>(base?: I): PublishBrokerDataResponse {
    return PublishBrokerDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishBrokerDataResponse>, I>>(_: I): PublishBrokerDataResponse {
    const message = createBasePublishBrokerDataResponse();
    return message;
  },
};

messageTypeRegistry.set(PublishBrokerDataResponse.$type, PublishBrokerDataResponse);

/** A set of methods to work with IoT Core messages on behalf of broker */
export type BrokerDataServiceService = typeof BrokerDataServiceService;
export const BrokerDataServiceService = {
  /** Publishes message on behalf of specified broker */
  publish: {
    path: "/yandex.cloud.iot.broker.v1.BrokerDataService/Publish",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PublishBrokerDataRequest) => Buffer.from(PublishBrokerDataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PublishBrokerDataRequest.decode(value),
    responseSerialize: (value: PublishBrokerDataResponse) =>
      Buffer.from(PublishBrokerDataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PublishBrokerDataResponse.decode(value),
  },
} as const;

export interface BrokerDataServiceServer extends UntypedServiceImplementation {
  /** Publishes message on behalf of specified broker */
  publish: handleUnaryCall<PublishBrokerDataRequest, PublishBrokerDataResponse>;
}

export interface BrokerDataServiceClient extends Client {
  /** Publishes message on behalf of specified broker */
  publish(
    request: PublishBrokerDataRequest,
    callback: (error: ServiceError | null, response: PublishBrokerDataResponse) => void,
  ): ClientUnaryCall;
  publish(
    request: PublishBrokerDataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PublishBrokerDataResponse) => void,
  ): ClientUnaryCall;
  publish(
    request: PublishBrokerDataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PublishBrokerDataResponse) => void,
  ): ClientUnaryCall;
}

export const BrokerDataServiceClient = makeGenericClientConstructor(
  BrokerDataServiceService,
  "yandex.cloud.iot.broker.v1.BrokerDataService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BrokerDataServiceClient;
  service: typeof BrokerDataServiceService;
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
