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

export interface PublishDeviceDataRequest {
  $type: "yandex.cloud.iot.devices.v1.PublishDeviceDataRequest";
  /** ID of device publishing message */
  deviceId: string;
  /** Topic where message should be published */
  topic: string;
  /** Content of the message */
  data: Buffer;
}

export interface PublishDeviceDataResponse {
  $type: "yandex.cloud.iot.devices.v1.PublishDeviceDataResponse";
}

function createBasePublishDeviceDataRequest(): PublishDeviceDataRequest {
  return {
    $type: "yandex.cloud.iot.devices.v1.PublishDeviceDataRequest",
    deviceId: "",
    topic: "",
    data: Buffer.alloc(0),
  };
}

export const PublishDeviceDataRequest = {
  $type: "yandex.cloud.iot.devices.v1.PublishDeviceDataRequest" as const,

  encode(message: PublishDeviceDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishDeviceDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishDeviceDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
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

  fromJSON(object: any): PublishDeviceDataRequest {
    return {
      $type: PublishDeviceDataRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      topic: isSet(object.topic) ? globalThis.String(object.topic) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: PublishDeviceDataRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.topic !== "") {
      obj.topic = message.topic;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishDeviceDataRequest>, I>>(base?: I): PublishDeviceDataRequest {
    return PublishDeviceDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishDeviceDataRequest>, I>>(object: I): PublishDeviceDataRequest {
    const message = createBasePublishDeviceDataRequest();
    message.deviceId = object.deviceId ?? "";
    message.topic = object.topic ?? "";
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(PublishDeviceDataRequest.$type, PublishDeviceDataRequest);

function createBasePublishDeviceDataResponse(): PublishDeviceDataResponse {
  return { $type: "yandex.cloud.iot.devices.v1.PublishDeviceDataResponse" };
}

export const PublishDeviceDataResponse = {
  $type: "yandex.cloud.iot.devices.v1.PublishDeviceDataResponse" as const,

  encode(_: PublishDeviceDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishDeviceDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishDeviceDataResponse();
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

  fromJSON(_: any): PublishDeviceDataResponse {
    return { $type: PublishDeviceDataResponse.$type };
  },

  toJSON(_: PublishDeviceDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishDeviceDataResponse>, I>>(base?: I): PublishDeviceDataResponse {
    return PublishDeviceDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishDeviceDataResponse>, I>>(_: I): PublishDeviceDataResponse {
    const message = createBasePublishDeviceDataResponse();
    return message;
  },
};

messageTypeRegistry.set(PublishDeviceDataResponse.$type, PublishDeviceDataResponse);

/** A set of methods to work with IoT Core messages on behalf of device */
export type DeviceDataServiceService = typeof DeviceDataServiceService;
export const DeviceDataServiceService = {
  /** Publishes message on behalf of specified device */
  publish: {
    path: "/yandex.cloud.iot.devices.v1.DeviceDataService/Publish",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PublishDeviceDataRequest) => Buffer.from(PublishDeviceDataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PublishDeviceDataRequest.decode(value),
    responseSerialize: (value: PublishDeviceDataResponse) =>
      Buffer.from(PublishDeviceDataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PublishDeviceDataResponse.decode(value),
  },
} as const;

export interface DeviceDataServiceServer extends UntypedServiceImplementation {
  /** Publishes message on behalf of specified device */
  publish: handleUnaryCall<PublishDeviceDataRequest, PublishDeviceDataResponse>;
}

export interface DeviceDataServiceClient extends Client {
  /** Publishes message on behalf of specified device */
  publish(
    request: PublishDeviceDataRequest,
    callback: (error: ServiceError | null, response: PublishDeviceDataResponse) => void,
  ): ClientUnaryCall;
  publish(
    request: PublishDeviceDataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PublishDeviceDataResponse) => void,
  ): ClientUnaryCall;
  publish(
    request: PublishDeviceDataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PublishDeviceDataResponse) => void,
  ): ClientUnaryCall;
}

export const DeviceDataServiceClient = makeGenericClientConstructor(
  DeviceDataServiceService,
  "yandex.cloud.iot.devices.v1.DeviceDataService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DeviceDataServiceClient;
  service: typeof DeviceDataServiceService;
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
