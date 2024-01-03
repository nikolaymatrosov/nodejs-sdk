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
import { Empty } from "@yandex-cloud/core/dist/generated/google/protobuf/empty";
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datasphere.v1";

export interface GetFolderBudgetRequest {
  $type: "yandex.cloud.datasphere.v1.GetFolderBudgetRequest";
  /** ID of the folder to get a budget for. */
  folderId: string;
}

export interface GetFolderBudgetResponse {
  $type: "yandex.cloud.datasphere.v1.GetFolderBudgetResponse";
  /** The number of units available in the folder. */
  unitBalance?:
    | number
    | undefined;
  /** The number of units that can be spent per hour. */
  maxUnitsPerHour?:
    | number
    | undefined;
  /** The number of units that can be spent on one execution. */
  maxUnitsPerExecution?: number | undefined;
}

export interface SetFolderBudgetRequest {
  $type: "yandex.cloud.datasphere.v1.SetFolderBudgetRequest";
  /** ID of the folder to set a budget for. */
  folderId: string;
  /** Field mask that specifies which fields of the budget are going to be set. */
  setMask?:
    | string[]
    | undefined;
  /** The number of units available in the folder. */
  unitBalance?:
    | number
    | undefined;
  /** The number of units that can be spent per hour. */
  maxUnitsPerHour?:
    | number
    | undefined;
  /** The number of units that can be spent on one execution. */
  maxUnitsPerExecution?: number | undefined;
}

function createBaseGetFolderBudgetRequest(): GetFolderBudgetRequest {
  return { $type: "yandex.cloud.datasphere.v1.GetFolderBudgetRequest", folderId: "" };
}

export const GetFolderBudgetRequest = {
  $type: "yandex.cloud.datasphere.v1.GetFolderBudgetRequest" as const,

  encode(message: GetFolderBudgetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFolderBudgetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFolderBudgetRequest();
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

  fromJSON(object: any): GetFolderBudgetRequest {
    return {
      $type: GetFolderBudgetRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: GetFolderBudgetRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFolderBudgetRequest>, I>>(base?: I): GetFolderBudgetRequest {
    return GetFolderBudgetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFolderBudgetRequest>, I>>(object: I): GetFolderBudgetRequest {
    const message = createBaseGetFolderBudgetRequest();
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFolderBudgetRequest.$type, GetFolderBudgetRequest);

function createBaseGetFolderBudgetResponse(): GetFolderBudgetResponse {
  return {
    $type: "yandex.cloud.datasphere.v1.GetFolderBudgetResponse",
    unitBalance: undefined,
    maxUnitsPerHour: undefined,
    maxUnitsPerExecution: undefined,
  };
}

export const GetFolderBudgetResponse = {
  $type: "yandex.cloud.datasphere.v1.GetFolderBudgetResponse" as const,

  encode(message: GetFolderBudgetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unitBalance !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.unitBalance! }, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.maxUnitsPerHour !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxUnitsPerHour! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.maxUnitsPerExecution !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxUnitsPerExecution! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFolderBudgetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFolderBudgetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unitBalance = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxUnitsPerHour = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxUnitsPerExecution = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFolderBudgetResponse {
    return {
      $type: GetFolderBudgetResponse.$type,
      unitBalance: isSet(object.unitBalance) ? Number(object.unitBalance) : undefined,
      maxUnitsPerHour: isSet(object.maxUnitsPerHour) ? Number(object.maxUnitsPerHour) : undefined,
      maxUnitsPerExecution: isSet(object.maxUnitsPerExecution) ? Number(object.maxUnitsPerExecution) : undefined,
    };
  },

  toJSON(message: GetFolderBudgetResponse): unknown {
    const obj: any = {};
    if (message.unitBalance !== undefined) {
      obj.unitBalance = message.unitBalance;
    }
    if (message.maxUnitsPerHour !== undefined) {
      obj.maxUnitsPerHour = message.maxUnitsPerHour;
    }
    if (message.maxUnitsPerExecution !== undefined) {
      obj.maxUnitsPerExecution = message.maxUnitsPerExecution;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFolderBudgetResponse>, I>>(base?: I): GetFolderBudgetResponse {
    return GetFolderBudgetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFolderBudgetResponse>, I>>(object: I): GetFolderBudgetResponse {
    const message = createBaseGetFolderBudgetResponse();
    message.unitBalance = object.unitBalance ?? undefined;
    message.maxUnitsPerHour = object.maxUnitsPerHour ?? undefined;
    message.maxUnitsPerExecution = object.maxUnitsPerExecution ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GetFolderBudgetResponse.$type, GetFolderBudgetResponse);

function createBaseSetFolderBudgetRequest(): SetFolderBudgetRequest {
  return {
    $type: "yandex.cloud.datasphere.v1.SetFolderBudgetRequest",
    folderId: "",
    setMask: undefined,
    unitBalance: undefined,
    maxUnitsPerHour: undefined,
    maxUnitsPerExecution: undefined,
  };
}

export const SetFolderBudgetRequest = {
  $type: "yandex.cloud.datasphere.v1.SetFolderBudgetRequest" as const,

  encode(message: SetFolderBudgetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.setMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.setMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.unitBalance !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.unitBalance! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.maxUnitsPerHour !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxUnitsPerHour! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.maxUnitsPerExecution !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxUnitsPerExecution! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFolderBudgetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFolderBudgetRequest();
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
          if (tag !== 18) {
            break;
          }

          message.setMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unitBalance = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxUnitsPerHour = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.maxUnitsPerExecution = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetFolderBudgetRequest {
    return {
      $type: SetFolderBudgetRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      setMask: isSet(object.setMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.setMask)) : undefined,
      unitBalance: isSet(object.unitBalance) ? Number(object.unitBalance) : undefined,
      maxUnitsPerHour: isSet(object.maxUnitsPerHour) ? Number(object.maxUnitsPerHour) : undefined,
      maxUnitsPerExecution: isSet(object.maxUnitsPerExecution) ? Number(object.maxUnitsPerExecution) : undefined,
    };
  },

  toJSON(message: SetFolderBudgetRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.setMask !== undefined) {
      obj.setMask = FieldMask.toJSON(FieldMask.wrap(message.setMask));
    }
    if (message.unitBalance !== undefined) {
      obj.unitBalance = message.unitBalance;
    }
    if (message.maxUnitsPerHour !== undefined) {
      obj.maxUnitsPerHour = message.maxUnitsPerHour;
    }
    if (message.maxUnitsPerExecution !== undefined) {
      obj.maxUnitsPerExecution = message.maxUnitsPerExecution;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetFolderBudgetRequest>, I>>(base?: I): SetFolderBudgetRequest {
    return SetFolderBudgetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetFolderBudgetRequest>, I>>(object: I): SetFolderBudgetRequest {
    const message = createBaseSetFolderBudgetRequest();
    message.folderId = object.folderId ?? "";
    message.setMask = object.setMask ?? undefined;
    message.unitBalance = object.unitBalance ?? undefined;
    message.maxUnitsPerHour = object.maxUnitsPerHour ?? undefined;
    message.maxUnitsPerExecution = object.maxUnitsPerExecution ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SetFolderBudgetRequest.$type, SetFolderBudgetRequest);

/** A set of methods for managing Datasphere folder budgets. */
export type FolderBudgetServiceService = typeof FolderBudgetServiceService;
export const FolderBudgetServiceService = {
  /** Returns the specified folder budget. */
  get: {
    path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFolderBudgetRequest) => Buffer.from(GetFolderBudgetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFolderBudgetRequest.decode(value),
    responseSerialize: (value: GetFolderBudgetResponse) => Buffer.from(GetFolderBudgetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetFolderBudgetResponse.decode(value),
  },
  /** Sets the unit balance and the limits of the specified folder budget. */
  set: {
    path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Set",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetFolderBudgetRequest) => Buffer.from(SetFolderBudgetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetFolderBudgetRequest.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface FolderBudgetServiceServer extends UntypedServiceImplementation {
  /** Returns the specified folder budget. */
  get: handleUnaryCall<GetFolderBudgetRequest, GetFolderBudgetResponse>;
  /** Sets the unit balance and the limits of the specified folder budget. */
  set: handleUnaryCall<SetFolderBudgetRequest, Empty>;
}

export interface FolderBudgetServiceClient extends Client {
  /** Returns the specified folder budget. */
  get(
    request: GetFolderBudgetRequest,
    callback: (error: ServiceError | null, response: GetFolderBudgetResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetFolderBudgetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetFolderBudgetResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetFolderBudgetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetFolderBudgetResponse) => void,
  ): ClientUnaryCall;
  /** Sets the unit balance and the limits of the specified folder budget. */
  set(
    request: SetFolderBudgetRequest,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  set(
    request: SetFolderBudgetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  set(
    request: SetFolderBudgetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
}

export const FolderBudgetServiceClient = makeGenericClientConstructor(
  FolderBudgetServiceService,
  "yandex.cloud.datasphere.v1.FolderBudgetService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FolderBudgetServiceClient;
  service: typeof FolderBudgetServiceService;
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
