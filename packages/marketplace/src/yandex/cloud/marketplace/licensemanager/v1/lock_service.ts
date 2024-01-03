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
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Lock } from "./lock";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface GetLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest";
  /** ID of the subscription lock. */
  lockId: string;
}

export interface CreateLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest";
  /** ID of the subscription instance. */
  instanceId: string;
  /** ID of the resource to which the subscription will be locked. */
  resourceId: string;
}

export interface EnsureLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest";
  /** ID of the subscription instance. */
  instanceId: string;
  /** ID of the resource to which the subscription will be locked. */
  resourceId: string;
}

export interface CreateLockMetadata {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata";
  /** ID of the subscription lock. */
  lockId: string;
}

export interface EnsureLockMetadata {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata";
  /** ID of the subscription lock. */
  lockId: string;
}

export interface DeleteLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest";
  /** ID of the subscription lock. */
  lockId: string;
}

export interface DeleteLockMetadata {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata";
  /** ID of the subscription lock. */
  lockId: string;
}

export interface GetLockByInstanceAndResourceRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest";
  /** ID of the subscription instance. */
  instanceId: string;
  /** ID of the resource to which the subscription will be locked. */
  resourceId: string;
}

export interface ListLocksRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListLocksRequest";
  /** ID of the resource that the subscription locks belong to. */
  resourceId: string;
  /** ID of the folder that the subscription locks belong to. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListLocksResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListLocksResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters subscription locks listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Lock.product_id] field.
   * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   * 3. The value. Must be in double quotes `""`. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `product_id="my-product-id"`.
   */
  filter: string;
  /** Sorting order for the list of subscription locks. */
  orderBy: string;
}

export interface ListLocksResponse {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListLocksResponse";
  /** List of subscription locks. */
  locks: Lock[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListLocksRequest.page_size], use `next_page_token` as the value
   * for the [ListLocksRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetLockRequest(): GetLockRequest {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest", lockId: "" };
}

export const GetLockRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest" as const,

  encode(message: GetLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLockRequest {
    return { $type: GetLockRequest.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: GetLockRequest): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLockRequest>, I>>(base?: I): GetLockRequest {
    return GetLockRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLockRequest>, I>>(object: I): GetLockRequest {
    const message = createBaseGetLockRequest();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLockRequest.$type, GetLockRequest);

function createBaseCreateLockRequest(): CreateLockRequest {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest", instanceId: "", resourceId: "" };
}

export const CreateLockRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest" as const,

  encode(message: CreateLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): CreateLockRequest {
    return {
      $type: CreateLockRequest.$type,
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: CreateLockRequest): unknown {
    const obj: any = {};
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLockRequest>, I>>(base?: I): CreateLockRequest {
    return CreateLockRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLockRequest>, I>>(object: I): CreateLockRequest {
    const message = createBaseCreateLockRequest();
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLockRequest.$type, CreateLockRequest);

function createBaseEnsureLockRequest(): EnsureLockRequest {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest", instanceId: "", resourceId: "" };
}

export const EnsureLockRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest" as const,

  encode(message: EnsureLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnsureLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): EnsureLockRequest {
    return {
      $type: EnsureLockRequest.$type,
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: EnsureLockRequest): unknown {
    const obj: any = {};
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnsureLockRequest>, I>>(base?: I): EnsureLockRequest {
    return EnsureLockRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnsureLockRequest>, I>>(object: I): EnsureLockRequest {
    const message = createBaseEnsureLockRequest();
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnsureLockRequest.$type, EnsureLockRequest);

function createBaseCreateLockMetadata(): CreateLockMetadata {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata", lockId: "" };
}

export const CreateLockMetadata = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata" as const,

  encode(message: CreateLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLockMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLockMetadata {
    return { $type: CreateLockMetadata.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: CreateLockMetadata): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLockMetadata>, I>>(base?: I): CreateLockMetadata {
    return CreateLockMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLockMetadata>, I>>(object: I): CreateLockMetadata {
    const message = createBaseCreateLockMetadata();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLockMetadata.$type, CreateLockMetadata);

function createBaseEnsureLockMetadata(): EnsureLockMetadata {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata", lockId: "" };
}

export const EnsureLockMetadata = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata" as const,

  encode(message: EnsureLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnsureLockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnsureLockMetadata {
    return { $type: EnsureLockMetadata.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: EnsureLockMetadata): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnsureLockMetadata>, I>>(base?: I): EnsureLockMetadata {
    return EnsureLockMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnsureLockMetadata>, I>>(object: I): EnsureLockMetadata {
    const message = createBaseEnsureLockMetadata();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnsureLockMetadata.$type, EnsureLockMetadata);

function createBaseDeleteLockRequest(): DeleteLockRequest {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest", lockId: "" };
}

export const DeleteLockRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest" as const,

  encode(message: DeleteLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLockRequest {
    return { $type: DeleteLockRequest.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: DeleteLockRequest): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLockRequest>, I>>(base?: I): DeleteLockRequest {
    return DeleteLockRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLockRequest>, I>>(object: I): DeleteLockRequest {
    const message = createBaseDeleteLockRequest();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLockRequest.$type, DeleteLockRequest);

function createBaseDeleteLockMetadata(): DeleteLockMetadata {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata", lockId: "" };
}

export const DeleteLockMetadata = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata" as const,

  encode(message: DeleteLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLockMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLockMetadata {
    return { $type: DeleteLockMetadata.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: DeleteLockMetadata): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLockMetadata>, I>>(base?: I): DeleteLockMetadata {
    return DeleteLockMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLockMetadata>, I>>(object: I): DeleteLockMetadata {
    const message = createBaseDeleteLockMetadata();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLockMetadata.$type, DeleteLockMetadata);

function createBaseGetLockByInstanceAndResourceRequest(): GetLockByInstanceAndResourceRequest {
  return {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest",
    instanceId: "",
    resourceId: "",
  };
}

export const GetLockByInstanceAndResourceRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest" as const,

  encode(message: GetLockByInstanceAndResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockByInstanceAndResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockByInstanceAndResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): GetLockByInstanceAndResourceRequest {
    return {
      $type: GetLockByInstanceAndResourceRequest.$type,
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: GetLockByInstanceAndResourceRequest): unknown {
    const obj: any = {};
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLockByInstanceAndResourceRequest>, I>>(
    base?: I,
  ): GetLockByInstanceAndResourceRequest {
    return GetLockByInstanceAndResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLockByInstanceAndResourceRequest>, I>>(
    object: I,
  ): GetLockByInstanceAndResourceRequest {
    const message = createBaseGetLockByInstanceAndResourceRequest();
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLockByInstanceAndResourceRequest.$type, GetLockByInstanceAndResourceRequest);

function createBaseListLocksRequest(): ListLocksRequest {
  return {
    $type: "yandex.cloud.marketplace.licensemanager.v1.ListLocksRequest",
    resourceId: "",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListLocksRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListLocksRequest" as const,

  encode(message: ListLocksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(50).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLocksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLocksRequest();
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

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListLocksRequest {
    return {
      $type: ListLocksRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListLocksRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLocksRequest>, I>>(base?: I): ListLocksRequest {
    return ListLocksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLocksRequest>, I>>(object: I): ListLocksRequest {
    const message = createBaseListLocksRequest();
    message.resourceId = object.resourceId ?? "";
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLocksRequest.$type, ListLocksRequest);

function createBaseListLocksResponse(): ListLocksResponse {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.ListLocksResponse", locks: [], nextPageToken: "" };
}

export const ListLocksResponse = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListLocksResponse" as const,

  encode(message: ListLocksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      Lock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLocksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLocksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.locks.push(Lock.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListLocksResponse {
    return {
      $type: ListLocksResponse.$type,
      locks: globalThis.Array.isArray(object?.locks) ? object.locks.map((e: any) => Lock.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListLocksResponse): unknown {
    const obj: any = {};
    if (message.locks?.length) {
      obj.locks = message.locks.map((e) => Lock.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLocksResponse>, I>>(base?: I): ListLocksResponse {
    return ListLocksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLocksResponse>, I>>(object: I): ListLocksResponse {
    const message = createBaseListLocksResponse();
    message.locks = object.locks?.map((e) => Lock.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLocksResponse.$type, ListLocksResponse);

/** A set of methods for managing subscription locks. */
export type LockServiceService = typeof LockServiceService;
export const LockServiceService = {
  /** Returns the specified subscription lock. */
  get: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLockRequest) => Buffer.from(GetLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLockRequest.decode(value),
    responseSerialize: (value: Lock) => Buffer.from(Lock.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lock.decode(value),
  },
  /** Returns the subscription lock for specified subscription instance and resource. */
  getByInstanceAndResource: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/GetByInstanceAndResource",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLockByInstanceAndResourceRequest) =>
      Buffer.from(GetLockByInstanceAndResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLockByInstanceAndResourceRequest.decode(value),
    responseSerialize: (value: Lock) => Buffer.from(Lock.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lock.decode(value),
  },
  /** Returns subscriptions locks for specified resource and folder. */
  list: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLocksRequest) => Buffer.from(ListLocksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListLocksRequest.decode(value),
    responseSerialize: (value: ListLocksResponse) => Buffer.from(ListLocksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListLocksResponse.decode(value),
  },
  /** Locks the specified subscription instance to the resource. */
  create: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLockRequest) => Buffer.from(CreateLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLockRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Checks if the she specified subscription is already locked to the specified resource.
   * If it is not locked, locks the subscription to the resource.
   */
  ensure: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Ensure",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EnsureLockRequest) => Buffer.from(EnsureLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EnsureLockRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Unlocks the specified subscription lock. */
  delete: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteLockRequest) => Buffer.from(DeleteLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteLockRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface LockServiceServer extends UntypedServiceImplementation {
  /** Returns the specified subscription lock. */
  get: handleUnaryCall<GetLockRequest, Lock>;
  /** Returns the subscription lock for specified subscription instance and resource. */
  getByInstanceAndResource: handleUnaryCall<GetLockByInstanceAndResourceRequest, Lock>;
  /** Returns subscriptions locks for specified resource and folder. */
  list: handleUnaryCall<ListLocksRequest, ListLocksResponse>;
  /** Locks the specified subscription instance to the resource. */
  create: handleUnaryCall<CreateLockRequest, Operation>;
  /**
   * Checks if the she specified subscription is already locked to the specified resource.
   * If it is not locked, locks the subscription to the resource.
   */
  ensure: handleUnaryCall<EnsureLockRequest, Operation>;
  /** Unlocks the specified subscription lock. */
  delete: handleUnaryCall<DeleteLockRequest, Operation>;
}

export interface LockServiceClient extends Client {
  /** Returns the specified subscription lock. */
  get(request: GetLockRequest, callback: (error: ServiceError | null, response: Lock) => void): ClientUnaryCall;
  get(
    request: GetLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  get(
    request: GetLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  /** Returns the subscription lock for specified subscription instance and resource. */
  getByInstanceAndResource(
    request: GetLockByInstanceAndResourceRequest,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  getByInstanceAndResource(
    request: GetLockByInstanceAndResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  getByInstanceAndResource(
    request: GetLockByInstanceAndResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  /** Returns subscriptions locks for specified resource and folder. */
  list(
    request: ListLocksRequest,
    callback: (error: ServiceError | null, response: ListLocksResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLocksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListLocksResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLocksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListLocksResponse) => void,
  ): ClientUnaryCall;
  /** Locks the specified subscription instance to the resource. */
  create(
    request: CreateLockRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Checks if the she specified subscription is already locked to the specified resource.
   * If it is not locked, locks the subscription to the resource.
   */
  ensure(
    request: EnsureLockRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  ensure(
    request: EnsureLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  ensure(
    request: EnsureLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Unlocks the specified subscription lock. */
  delete(
    request: DeleteLockRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const LockServiceClient = makeGenericClientConstructor(
  LockServiceService,
  "yandex.cloud.marketplace.licensemanager.v1.LockService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LockServiceClient;
  service: typeof LockServiceService;
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
