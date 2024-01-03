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
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Transfer, TransferType, transferTypeFromJSON, transferTypeToJSON } from "./transfer";

export const protobufPackage = "yandex.cloud.datatransfer.v1";

export interface CreateTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest";
  sourceId: string;
  targetId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  folderId: string;
  type: TransferType;
}

export interface CreateTransferRequest_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata";
  transferId: string;
}

export interface UpdateTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest";
  /** Identifier of the transfer to be updated. */
  transferId: string;
  /** The new description for the transfer. */
  description: string;
  labels: { [key: string]: string };
  /** The new transfer name. Must be unique within the folder. */
  name: string;
  /**
   * Field mask specifying transfer fields to be updated. Semantics for this field is
   * described here:
   * <https://pkg.go.dev/google.golang.org/protobuf/types/known/fieldmaskpb#FieldMask>
   * The only exception: if the repeated field is specified in the mask, then
   * the new value replaces the old one instead of being appended to the old one.
   */
  updateMask?: string[] | undefined;
}

export interface UpdateTransferRequest_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata";
  transferId: string;
}

export interface DeleteTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest";
  transferId: string;
}

export interface DeleteTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata";
  transferId: string;
}

export interface ListTransfersRequest {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest";
  /** Identifier of the folder containing the transfers to be listed. */
  folderId: string;
  /**
   * The maximum number of transfers to be sent in the response message. If the
   * folder contains more transfers than `page_size`, `next_page_token` will be
   * included
   * in the response message. Include it into the subsequent `ListTransfersRequest`
   * to
   * fetch the next page. Defaults to `100` if not specified. The maximum allowed
   * value
   * for this field is `500`.
   */
  pageSize: number;
  /**
   * Opaque value identifying the transfers page to be fetched. Should be empty in
   * the first `ListTransfersRequest`. Subsequent requests should have this field
   * filled
   * with the `next_page_token` from the previous `ListTransfersResponse`.
   */
  pageToken: string;
}

export interface ListTransfersResponse {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse";
  /**
   * The list of transfers. If there are more transfers in the folder, then
   * `next_page_token` is a non-empty string to be included into the subsequent
   * `ListTransfersRequest` to fetch the next transfers page.
   */
  transfers: Transfer[];
  /**
   * Opaque value identifying the next transfers page. This field is empty if there
   * are no more transfers in the folder. Otherwise it is non-empty and should be
   * included in the subsequent `ListTransfersRequest` to fetch the next transfers
   * page.
   */
  nextPageToken: string;
}

export interface GetTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.GetTransferRequest";
  transferId: string;
}

export interface DeactivateTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest";
  transferId: string;
}

export interface DeactivateTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata";
  transferId: string;
}

export interface ActivateTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest";
  transferId: string;
}

export interface ActivateTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata";
  transferId: string;
}

function createBaseCreateTransferRequest(): CreateTransferRequest {
  return {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest",
    sourceId: "",
    targetId: "",
    name: "",
    description: "",
    labels: {},
    folderId: "",
    type: 0,
  };
}

export const CreateTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest" as const,

  encode(message: CreateTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceId !== "") {
      writer.uint32(10).string(message.sourceId);
    }
    if (message.targetId !== "") {
      writer.uint32(18).string(message.targetId);
    }
    if (message.name !== "") {
      writer.uint32(58).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateTransferRequest_LabelsEntry.encode({
        $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(66).fork()).ldelim();
    });
    if (message.folderId !== "") {
      writer.uint32(34).string(message.folderId);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = CreateTransferRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTransferRequest {
    return {
      $type: CreateTransferRequest.$type,
      sourceId: isSet(object.sourceId) ? globalThis.String(object.sourceId) : "",
      targetId: isSet(object.targetId) ? globalThis.String(object.targetId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      type: isSet(object.type) ? transferTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: CreateTransferRequest): unknown {
    const obj: any = {};
    if (message.sourceId !== "") {
      obj.sourceId = message.sourceId;
    }
    if (message.targetId !== "") {
      obj.targetId = message.targetId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.type !== 0) {
      obj.type = transferTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTransferRequest>, I>>(base?: I): CreateTransferRequest {
    return CreateTransferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTransferRequest>, I>>(object: I): CreateTransferRequest {
    const message = createBaseCreateTransferRequest();
    message.sourceId = object.sourceId ?? "";
    message.targetId = object.targetId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.folderId = object.folderId ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateTransferRequest.$type, CreateTransferRequest);

function createBaseCreateTransferRequest_LabelsEntry(): CreateTransferRequest_LabelsEntry {
  return { $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry", key: "", value: "" };
}

export const CreateTransferRequest_LabelsEntry = {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry" as const,

  encode(message: CreateTransferRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferRequest_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTransferRequest_LabelsEntry {
    return {
      $type: CreateTransferRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateTransferRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTransferRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateTransferRequest_LabelsEntry {
    return CreateTransferRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTransferRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateTransferRequest_LabelsEntry {
    const message = createBaseCreateTransferRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTransferRequest_LabelsEntry.$type, CreateTransferRequest_LabelsEntry);

function createBaseCreateTransferMetadata(): CreateTransferMetadata {
  return { $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata", transferId: "" };
}

export const CreateTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata" as const,

  encode(message: CreateTransferMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTransferMetadata {
    return {
      $type: CreateTransferMetadata.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
    };
  },

  toJSON(message: CreateTransferMetadata): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTransferMetadata>, I>>(base?: I): CreateTransferMetadata {
    return CreateTransferMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTransferMetadata>, I>>(object: I): CreateTransferMetadata {
    const message = createBaseCreateTransferMetadata();
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTransferMetadata.$type, CreateTransferMetadata);

function createBaseUpdateTransferRequest(): UpdateTransferRequest {
  return {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest",
    transferId: "",
    description: "",
    labels: {},
    name: "",
    updateMask: undefined,
  };
}

export const UpdateTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest" as const,

  encode(message: UpdateTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateTransferRequest_LabelsEntry.encode({
        $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTransferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = UpdateTransferRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTransferRequest {
    return {
      $type: UpdateTransferRequest.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateTransferRequest): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTransferRequest>, I>>(base?: I): UpdateTransferRequest {
    return UpdateTransferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTransferRequest>, I>>(object: I): UpdateTransferRequest {
    const message = createBaseUpdateTransferRequest();
    message.transferId = object.transferId ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.name = object.name ?? "";
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateTransferRequest.$type, UpdateTransferRequest);

function createBaseUpdateTransferRequest_LabelsEntry(): UpdateTransferRequest_LabelsEntry {
  return { $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateTransferRequest_LabelsEntry = {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry" as const,

  encode(message: UpdateTransferRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTransferRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTransferRequest_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTransferRequest_LabelsEntry {
    return {
      $type: UpdateTransferRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateTransferRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTransferRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateTransferRequest_LabelsEntry {
    return UpdateTransferRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTransferRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateTransferRequest_LabelsEntry {
    const message = createBaseUpdateTransferRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTransferRequest_LabelsEntry.$type, UpdateTransferRequest_LabelsEntry);

function createBaseUpdateTransferMetadata(): UpdateTransferMetadata {
  return { $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata", transferId: "" };
}

export const UpdateTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata" as const,

  encode(message: UpdateTransferMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTransferMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTransferMetadata {
    return {
      $type: UpdateTransferMetadata.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
    };
  },

  toJSON(message: UpdateTransferMetadata): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTransferMetadata>, I>>(base?: I): UpdateTransferMetadata {
    return UpdateTransferMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTransferMetadata>, I>>(object: I): UpdateTransferMetadata {
    const message = createBaseUpdateTransferMetadata();
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTransferMetadata.$type, UpdateTransferMetadata);

function createBaseDeleteTransferRequest(): DeleteTransferRequest {
  return { $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest", transferId: "" };
}

export const DeleteTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest" as const,

  encode(message: DeleteTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTransferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTransferRequest {
    return {
      $type: DeleteTransferRequest.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
    };
  },

  toJSON(message: DeleteTransferRequest): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTransferRequest>, I>>(base?: I): DeleteTransferRequest {
    return DeleteTransferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTransferRequest>, I>>(object: I): DeleteTransferRequest {
    const message = createBaseDeleteTransferRequest();
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTransferRequest.$type, DeleteTransferRequest);

function createBaseDeleteTransferMetadata(): DeleteTransferMetadata {
  return { $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata", transferId: "" };
}

export const DeleteTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata" as const,

  encode(message: DeleteTransferMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTransferMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTransferMetadata {
    return {
      $type: DeleteTransferMetadata.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
    };
  },

  toJSON(message: DeleteTransferMetadata): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTransferMetadata>, I>>(base?: I): DeleteTransferMetadata {
    return DeleteTransferMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTransferMetadata>, I>>(object: I): DeleteTransferMetadata {
    const message = createBaseDeleteTransferMetadata();
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTransferMetadata.$type, DeleteTransferMetadata);

function createBaseListTransfersRequest(): ListTransfersRequest {
  return { $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListTransfersRequest = {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest" as const,

  encode(message: ListTransfersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTransfersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTransfersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTransfersRequest {
    return {
      $type: ListTransfersRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListTransfersRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTransfersRequest>, I>>(base?: I): ListTransfersRequest {
    return ListTransfersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTransfersRequest>, I>>(object: I): ListTransfersRequest {
    const message = createBaseListTransfersRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTransfersRequest.$type, ListTransfersRequest);

function createBaseListTransfersResponse(): ListTransfersResponse {
  return { $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse", transfers: [], nextPageToken: "" };
}

export const ListTransfersResponse = {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse" as const,

  encode(message: ListTransfersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transfers) {
      Transfer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTransfersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTransfersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transfers.push(Transfer.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTransfersResponse {
    return {
      $type: ListTransfersResponse.$type,
      transfers: globalThis.Array.isArray(object?.transfers)
        ? object.transfers.map((e: any) => Transfer.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTransfersResponse): unknown {
    const obj: any = {};
    if (message.transfers?.length) {
      obj.transfers = message.transfers.map((e) => Transfer.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTransfersResponse>, I>>(base?: I): ListTransfersResponse {
    return ListTransfersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTransfersResponse>, I>>(object: I): ListTransfersResponse {
    const message = createBaseListTransfersResponse();
    message.transfers = object.transfers?.map((e) => Transfer.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTransfersResponse.$type, ListTransfersResponse);

function createBaseGetTransferRequest(): GetTransferRequest {
  return { $type: "yandex.cloud.datatransfer.v1.GetTransferRequest", transferId: "" };
}

export const GetTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.GetTransferRequest" as const,

  encode(message: GetTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTransferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTransferRequest {
    return {
      $type: GetTransferRequest.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
    };
  },

  toJSON(message: GetTransferRequest): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTransferRequest>, I>>(base?: I): GetTransferRequest {
    return GetTransferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTransferRequest>, I>>(object: I): GetTransferRequest {
    const message = createBaseGetTransferRequest();
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTransferRequest.$type, GetTransferRequest);

function createBaseDeactivateTransferRequest(): DeactivateTransferRequest {
  return { $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest", transferId: "" };
}

export const DeactivateTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest" as const,

  encode(message: DeactivateTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateTransferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeactivateTransferRequest {
    return {
      $type: DeactivateTransferRequest.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
    };
  },

  toJSON(message: DeactivateTransferRequest): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateTransferRequest>, I>>(base?: I): DeactivateTransferRequest {
    return DeactivateTransferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateTransferRequest>, I>>(object: I): DeactivateTransferRequest {
    const message = createBaseDeactivateTransferRequest();
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateTransferRequest.$type, DeactivateTransferRequest);

function createBaseDeactivateTransferMetadata(): DeactivateTransferMetadata {
  return { $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata", transferId: "" };
}

export const DeactivateTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata" as const,

  encode(message: DeactivateTransferMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateTransferMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeactivateTransferMetadata {
    return {
      $type: DeactivateTransferMetadata.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
    };
  },

  toJSON(message: DeactivateTransferMetadata): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateTransferMetadata>, I>>(base?: I): DeactivateTransferMetadata {
    return DeactivateTransferMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateTransferMetadata>, I>>(object: I): DeactivateTransferMetadata {
    const message = createBaseDeactivateTransferMetadata();
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateTransferMetadata.$type, DeactivateTransferMetadata);

function createBaseActivateTransferRequest(): ActivateTransferRequest {
  return { $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest", transferId: "" };
}

export const ActivateTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest" as const,

  encode(message: ActivateTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateTransferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateTransferRequest {
    return {
      $type: ActivateTransferRequest.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
    };
  },

  toJSON(message: ActivateTransferRequest): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateTransferRequest>, I>>(base?: I): ActivateTransferRequest {
    return ActivateTransferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateTransferRequest>, I>>(object: I): ActivateTransferRequest {
    const message = createBaseActivateTransferRequest();
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateTransferRequest.$type, ActivateTransferRequest);

function createBaseActivateTransferMetadata(): ActivateTransferMetadata {
  return { $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata", transferId: "" };
}

export const ActivateTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata" as const,

  encode(message: ActivateTransferMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateTransferMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transferId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateTransferMetadata {
    return {
      $type: ActivateTransferMetadata.$type,
      transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
    };
  },

  toJSON(message: ActivateTransferMetadata): unknown {
    const obj: any = {};
    if (message.transferId !== "") {
      obj.transferId = message.transferId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateTransferMetadata>, I>>(base?: I): ActivateTransferMetadata {
    return ActivateTransferMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateTransferMetadata>, I>>(object: I): ActivateTransferMetadata {
    const message = createBaseActivateTransferMetadata();
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateTransferMetadata.$type, ActivateTransferMetadata);

export type TransferServiceService = typeof TransferServiceService;
export const TransferServiceService = {
  create: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTransferRequest) => Buffer.from(CreateTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTransferRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  update: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTransferRequest) => Buffer.from(UpdateTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTransferRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  delete: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteTransferRequest) => Buffer.from(DeleteTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteTransferRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  list: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTransfersRequest) => Buffer.from(ListTransfersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTransfersRequest.decode(value),
    responseSerialize: (value: ListTransfersResponse) => Buffer.from(ListTransfersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTransfersResponse.decode(value),
  },
  get: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTransferRequest) => Buffer.from(GetTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTransferRequest.decode(value),
    responseSerialize: (value: Transfer) => Buffer.from(Transfer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Transfer.decode(value),
  },
  deactivate: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Deactivate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeactivateTransferRequest) =>
      Buffer.from(DeactivateTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeactivateTransferRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  activate: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateTransferRequest) => Buffer.from(ActivateTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateTransferRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface TransferServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateTransferRequest, Operation>;
  update: handleUnaryCall<UpdateTransferRequest, Operation>;
  delete: handleUnaryCall<DeleteTransferRequest, Operation>;
  list: handleUnaryCall<ListTransfersRequest, ListTransfersResponse>;
  get: handleUnaryCall<GetTransferRequest, Transfer>;
  deactivate: handleUnaryCall<DeactivateTransferRequest, Operation>;
  activate: handleUnaryCall<ActivateTransferRequest, Operation>;
}

export interface TransferServiceClient extends Client {
  create(
    request: CreateTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  list(
    request: ListTransfersRequest,
    callback: (error: ServiceError | null, response: ListTransfersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTransfersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTransfersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTransfersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTransfersResponse) => void,
  ): ClientUnaryCall;
  get(request: GetTransferRequest, callback: (error: ServiceError | null, response: Transfer) => void): ClientUnaryCall;
  get(
    request: GetTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Transfer) => void,
  ): ClientUnaryCall;
  get(
    request: GetTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Transfer) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const TransferServiceClient = makeGenericClientConstructor(
  TransferServiceService,
  "yandex.cloud.datatransfer.v1.TransferService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TransferServiceClient;
  service: typeof TransferServiceService;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
