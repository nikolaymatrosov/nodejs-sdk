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
import { AcceptedUsageRecord, RejectedUsageRecord, UsageRecord } from "./usage_record";

export const protobufPackage = "yandex.cloud.marketplace.v1.metering";

export interface WriteImageProductUsageRequest {
  $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageRequest";
  /** Checks whether you have the access required for the emit usage. */
  validateOnly: boolean;
  /** Marketplace Product's ID. */
  productId: string;
  /** List of product usage records (up to 25 per request). */
  usageRecords: UsageRecord[];
}

export interface WriteImageProductUsageResponse {
  $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageResponse";
  /** List of accepted product usage records. */
  accepted: AcceptedUsageRecord[];
  /** List of rejected product usage records (with reason). */
  rejected: RejectedUsageRecord[];
}

function createBaseWriteImageProductUsageRequest(): WriteImageProductUsageRequest {
  return {
    $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageRequest",
    validateOnly: false,
    productId: "",
    usageRecords: [],
  };
}

export const WriteImageProductUsageRequest = {
  $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageRequest" as const,

  encode(message: WriteImageProductUsageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validateOnly === true) {
      writer.uint32(8).bool(message.validateOnly);
    }
    if (message.productId !== "") {
      writer.uint32(18).string(message.productId);
    }
    for (const v of message.usageRecords) {
      UsageRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteImageProductUsageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteImageProductUsageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.productId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.usageRecords.push(UsageRecord.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteImageProductUsageRequest {
    return {
      $type: WriteImageProductUsageRequest.$type,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
      usageRecords: globalThis.Array.isArray(object?.usageRecords)
        ? object.usageRecords.map((e: any) => UsageRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WriteImageProductUsageRequest): unknown {
    const obj: any = {};
    if (message.validateOnly === true) {
      obj.validateOnly = message.validateOnly;
    }
    if (message.productId !== "") {
      obj.productId = message.productId;
    }
    if (message.usageRecords?.length) {
      obj.usageRecords = message.usageRecords.map((e) => UsageRecord.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteImageProductUsageRequest>, I>>(base?: I): WriteImageProductUsageRequest {
    return WriteImageProductUsageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteImageProductUsageRequest>, I>>(
    object: I,
  ): WriteImageProductUsageRequest {
    const message = createBaseWriteImageProductUsageRequest();
    message.validateOnly = object.validateOnly ?? false;
    message.productId = object.productId ?? "";
    message.usageRecords = object.usageRecords?.map((e) => UsageRecord.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(WriteImageProductUsageRequest.$type, WriteImageProductUsageRequest);

function createBaseWriteImageProductUsageResponse(): WriteImageProductUsageResponse {
  return { $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageResponse", accepted: [], rejected: [] };
}

export const WriteImageProductUsageResponse = {
  $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageResponse" as const,

  encode(message: WriteImageProductUsageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accepted) {
      AcceptedUsageRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rejected) {
      RejectedUsageRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteImageProductUsageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteImageProductUsageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accepted.push(AcceptedUsageRecord.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rejected.push(RejectedUsageRecord.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteImageProductUsageResponse {
    return {
      $type: WriteImageProductUsageResponse.$type,
      accepted: globalThis.Array.isArray(object?.accepted)
        ? object.accepted.map((e: any) => AcceptedUsageRecord.fromJSON(e))
        : [],
      rejected: globalThis.Array.isArray(object?.rejected)
        ? object.rejected.map((e: any) => RejectedUsageRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WriteImageProductUsageResponse): unknown {
    const obj: any = {};
    if (message.accepted?.length) {
      obj.accepted = message.accepted.map((e) => AcceptedUsageRecord.toJSON(e));
    }
    if (message.rejected?.length) {
      obj.rejected = message.rejected.map((e) => RejectedUsageRecord.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteImageProductUsageResponse>, I>>(base?: I): WriteImageProductUsageResponse {
    return WriteImageProductUsageResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteImageProductUsageResponse>, I>>(
    object: I,
  ): WriteImageProductUsageResponse {
    const message = createBaseWriteImageProductUsageResponse();
    message.accepted = object.accepted?.map((e) => AcceptedUsageRecord.fromPartial(e)) || [];
    message.rejected = object.rejected?.map((e) => RejectedUsageRecord.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(WriteImageProductUsageResponse.$type, WriteImageProductUsageResponse);

/** A set of methods for managing image product's usage. */
export type ImageProductUsageServiceService = typeof ImageProductUsageServiceService;
export const ImageProductUsageServiceService = {
  /** Writes image product's usage. Authentication is by user's service account. */
  write: {
    path: "/yandex.cloud.marketplace.v1.metering.ImageProductUsageService/Write",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: WriteImageProductUsageRequest) =>
      Buffer.from(WriteImageProductUsageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => WriteImageProductUsageRequest.decode(value),
    responseSerialize: (value: WriteImageProductUsageResponse) =>
      Buffer.from(WriteImageProductUsageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => WriteImageProductUsageResponse.decode(value),
  },
} as const;

export interface ImageProductUsageServiceServer extends UntypedServiceImplementation {
  /** Writes image product's usage. Authentication is by user's service account. */
  write: handleUnaryCall<WriteImageProductUsageRequest, WriteImageProductUsageResponse>;
}

export interface ImageProductUsageServiceClient extends Client {
  /** Writes image product's usage. Authentication is by user's service account. */
  write(
    request: WriteImageProductUsageRequest,
    callback: (error: ServiceError | null, response: WriteImageProductUsageResponse) => void,
  ): ClientUnaryCall;
  write(
    request: WriteImageProductUsageRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: WriteImageProductUsageResponse) => void,
  ): ClientUnaryCall;
  write(
    request: WriteImageProductUsageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: WriteImageProductUsageResponse) => void,
  ): ClientUnaryCall;
}

export const ImageProductUsageServiceClient = makeGenericClientConstructor(
  ImageProductUsageServiceService,
  "yandex.cloud.marketplace.v1.metering.ImageProductUsageService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): ImageProductUsageServiceClient;
  service: typeof ImageProductUsageServiceService;
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
