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

export interface ActivateDatasetRequest {
  $type: "yandex.cloud.datasphere.v2.ActivateDatasetRequest";
  datasetId: string;
  projectId: string;
}

export interface DeactivateDatasetRequest {
  $type: "yandex.cloud.datasphere.v2.DeactivateDatasetRequest";
  datasetId: string;
  projectId: string;
}

function createBaseActivateDatasetRequest(): ActivateDatasetRequest {
  return { $type: "yandex.cloud.datasphere.v2.ActivateDatasetRequest", datasetId: "", projectId: "" };
}

export const ActivateDatasetRequest = {
  $type: "yandex.cloud.datasphere.v2.ActivateDatasetRequest" as const,

  encode(message: ActivateDatasetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.datasetId !== "") {
      writer.uint32(10).string(message.datasetId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateDatasetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateDatasetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.datasetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateDatasetRequest {
    return {
      $type: ActivateDatasetRequest.$type,
      datasetId: isSet(object.datasetId) ? globalThis.String(object.datasetId) : "",
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: ActivateDatasetRequest): unknown {
    const obj: any = {};
    if (message.datasetId !== "") {
      obj.datasetId = message.datasetId;
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateDatasetRequest>, I>>(base?: I): ActivateDatasetRequest {
    return ActivateDatasetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateDatasetRequest>, I>>(object: I): ActivateDatasetRequest {
    const message = createBaseActivateDatasetRequest();
    message.datasetId = object.datasetId ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateDatasetRequest.$type, ActivateDatasetRequest);

function createBaseDeactivateDatasetRequest(): DeactivateDatasetRequest {
  return { $type: "yandex.cloud.datasphere.v2.DeactivateDatasetRequest", datasetId: "", projectId: "" };
}

export const DeactivateDatasetRequest = {
  $type: "yandex.cloud.datasphere.v2.DeactivateDatasetRequest" as const,

  encode(message: DeactivateDatasetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.datasetId !== "") {
      writer.uint32(10).string(message.datasetId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateDatasetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateDatasetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.datasetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeactivateDatasetRequest {
    return {
      $type: DeactivateDatasetRequest.$type,
      datasetId: isSet(object.datasetId) ? globalThis.String(object.datasetId) : "",
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: DeactivateDatasetRequest): unknown {
    const obj: any = {};
    if (message.datasetId !== "") {
      obj.datasetId = message.datasetId;
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateDatasetRequest>, I>>(base?: I): DeactivateDatasetRequest {
    return DeactivateDatasetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateDatasetRequest>, I>>(object: I): DeactivateDatasetRequest {
    const message = createBaseDeactivateDatasetRequest();
    message.datasetId = object.datasetId ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateDatasetRequest.$type, DeactivateDatasetRequest);

export type DatasetServiceService = typeof DatasetServiceService;
export const DatasetServiceService = {
  /** Activates shared dataset for project */
  activate: {
    path: "/yandex.cloud.datasphere.v2.DatasetService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateDatasetRequest) => Buffer.from(ActivateDatasetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateDatasetRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deactivates shared dataset for project */
  deactivate: {
    path: "/yandex.cloud.datasphere.v2.DatasetService/Deactivate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeactivateDatasetRequest) => Buffer.from(DeactivateDatasetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeactivateDatasetRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface DatasetServiceServer extends UntypedServiceImplementation {
  /** Activates shared dataset for project */
  activate: handleUnaryCall<ActivateDatasetRequest, Operation>;
  /** Deactivates shared dataset for project */
  deactivate: handleUnaryCall<DeactivateDatasetRequest, Operation>;
}

export interface DatasetServiceClient extends Client {
  /** Activates shared dataset for project */
  activate(
    request: ActivateDatasetRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateDatasetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateDatasetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deactivates shared dataset for project */
  deactivate(
    request: DeactivateDatasetRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateDatasetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateDatasetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const DatasetServiceClient = makeGenericClientConstructor(
  DatasetServiceService,
  "yandex.cloud.datasphere.v2.DatasetService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DatasetServiceClient;
  service: typeof DatasetServiceService;
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
