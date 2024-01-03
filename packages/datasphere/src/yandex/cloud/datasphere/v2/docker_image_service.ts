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

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface ActivateDockerImageRequest {
  $type: "yandex.cloud.datasphere.v2.ActivateDockerImageRequest";
  projectId: string;
  dockerId: string;
}

function createBaseActivateDockerImageRequest(): ActivateDockerImageRequest {
  return { $type: "yandex.cloud.datasphere.v2.ActivateDockerImageRequest", projectId: "", dockerId: "" };
}

export const ActivateDockerImageRequest = {
  $type: "yandex.cloud.datasphere.v2.ActivateDockerImageRequest" as const,

  encode(message: ActivateDockerImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.dockerId !== "") {
      writer.uint32(18).string(message.dockerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateDockerImageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateDockerImageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dockerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateDockerImageRequest {
    return {
      $type: ActivateDockerImageRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      dockerId: isSet(object.dockerId) ? globalThis.String(object.dockerId) : "",
    };
  },

  toJSON(message: ActivateDockerImageRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.dockerId !== "") {
      obj.dockerId = message.dockerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateDockerImageRequest>, I>>(base?: I): ActivateDockerImageRequest {
    return ActivateDockerImageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateDockerImageRequest>, I>>(object: I): ActivateDockerImageRequest {
    const message = createBaseActivateDockerImageRequest();
    message.projectId = object.projectId ?? "";
    message.dockerId = object.dockerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateDockerImageRequest.$type, ActivateDockerImageRequest);

export type DockerImageServiceService = typeof DockerImageServiceService;
export const DockerImageServiceService = {
  /** Activates shared docker image in project */
  activate: {
    path: "/yandex.cloud.datasphere.v2.DockerImageService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateDockerImageRequest) =>
      Buffer.from(ActivateDockerImageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateDockerImageRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface DockerImageServiceServer extends UntypedServiceImplementation {
  /** Activates shared docker image in project */
  activate: handleUnaryCall<ActivateDockerImageRequest, Operation>;
}

export interface DockerImageServiceClient extends Client {
  /** Activates shared docker image in project */
  activate(
    request: ActivateDockerImageRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateDockerImageRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateDockerImageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const DockerImageServiceClient = makeGenericClientConstructor(
  DockerImageServiceService,
  "yandex.cloud.datasphere.v2.DockerImageService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DockerImageServiceClient;
  service: typeof DockerImageServiceService;
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
