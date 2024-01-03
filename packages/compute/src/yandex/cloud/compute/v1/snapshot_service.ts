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
import { Snapshot } from "./snapshot";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetSnapshotRequest {
  $type: "yandex.cloud.compute.v1.GetSnapshotRequest";
  /**
   * ID of the Snapshot resource to return.
   * To get the snapshot ID, use a [SnapshotService.List] request.
   */
  snapshotId: string;
}

export interface ListSnapshotsRequest {
  $type: "yandex.cloud.compute.v1.ListSnapshotsRequest";
  /**
   * ID of the folder to list snapshots in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListSnapshotsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSnapshotsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
   *
   * Each condition has the form `<field> <operator> <value>`, where:
   * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
   * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
   * 3. `<value>` represents a value.
   * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
   */
  filter: string;
  /**
   * By which column the listing should be ordered and in which direction,
   * format is "createdAt desc". "id asc" if omitted.
   * The default sorting order is ascending
   */
  orderBy: string;
}

export interface ListSnapshotsResponse {
  $type: "yandex.cloud.compute.v1.ListSnapshotsResponse";
  /** List of snapshots. */
  snapshots: Snapshot[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSnapshotsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListSnapshotsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSnapshotRequest {
  $type: "yandex.cloud.compute.v1.CreateSnapshotRequest";
  /**
   * ID of the folder to create a snapshot in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * ID of the disk to create the snapshot from.
   * To get the disk ID use a [yandex.cloud.compute.v1.DiskService.List] request.
   */
  diskId: string;
  /** Name of the snapshot. */
  name: string;
  /** Description of the snapshot. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface CreateSnapshotRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateSnapshotRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSnapshotMetadata {
  $type: "yandex.cloud.compute.v1.CreateSnapshotMetadata";
  /** ID of the snapshot that is being created. */
  snapshotId: string;
  /** ID of the source disk used to create this snapshot. */
  diskId: string;
}

export interface UpdateSnapshotRequest {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest";
  /**
   * ID of the Snapshot resource to update.
   * To get the snapshot ID use a [SnapshotService.List] request.
   */
  snapshotId: string;
  /** Field mask that specifies which fields of the Snapshot resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the snapshot. */
  name: string;
  /** Description of the snapshot. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
}

export interface UpdateSnapshotRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSnapshotMetadata {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotMetadata";
  /** ID of the Snapshot resource that is being updated. */
  snapshotId: string;
}

export interface DeleteSnapshotRequest {
  $type: "yandex.cloud.compute.v1.DeleteSnapshotRequest";
  /**
   * ID of the snapshot to delete.
   * To get the snapshot ID, use a [SnapshotService.List] request.
   */
  snapshotId: string;
}

export interface DeleteSnapshotMetadata {
  $type: "yandex.cloud.compute.v1.DeleteSnapshotMetadata";
  /** ID of the snapshot that is being deleted. */
  snapshotId: string;
}

export interface ListSnapshotOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListSnapshotOperationsRequest";
  /** ID of the Snapshot resource to list operations for. */
  snapshotId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListSnapshotOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSnapshotOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSnapshotOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListSnapshotOperationsResponse";
  /** List of operations for the specified snapshot. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSnapshotOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListSnapshotOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetSnapshotRequest(): GetSnapshotRequest {
  return { $type: "yandex.cloud.compute.v1.GetSnapshotRequest", snapshotId: "" };
}

export const GetSnapshotRequest = {
  $type: "yandex.cloud.compute.v1.GetSnapshotRequest" as const,

  encode(message: GetSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotId !== "") {
      writer.uint32(10).string(message.snapshotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSnapshotRequest {
    return {
      $type: GetSnapshotRequest.$type,
      snapshotId: isSet(object.snapshotId) ? globalThis.String(object.snapshotId) : "",
    };
  },

  toJSON(message: GetSnapshotRequest): unknown {
    const obj: any = {};
    if (message.snapshotId !== "") {
      obj.snapshotId = message.snapshotId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSnapshotRequest>, I>>(base?: I): GetSnapshotRequest {
    return GetSnapshotRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSnapshotRequest>, I>>(object: I): GetSnapshotRequest {
    const message = createBaseGetSnapshotRequest();
    message.snapshotId = object.snapshotId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSnapshotRequest.$type, GetSnapshotRequest);

function createBaseListSnapshotsRequest(): ListSnapshotsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListSnapshotsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListSnapshotsRequest = {
  $type: "yandex.cloud.compute.v1.ListSnapshotsRequest" as const,

  encode(message: ListSnapshotsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotsRequest();
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
          if (tag !== 16) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ListSnapshotsRequest {
    return {
      $type: ListSnapshotsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListSnapshotsRequest): unknown {
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
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotsRequest>, I>>(base?: I): ListSnapshotsRequest {
    return ListSnapshotsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotsRequest>, I>>(object: I): ListSnapshotsRequest {
    const message = createBaseListSnapshotsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotsRequest.$type, ListSnapshotsRequest);

function createBaseListSnapshotsResponse(): ListSnapshotsResponse {
  return { $type: "yandex.cloud.compute.v1.ListSnapshotsResponse", snapshots: [], nextPageToken: "" };
}

export const ListSnapshotsResponse = {
  $type: "yandex.cloud.compute.v1.ListSnapshotsResponse" as const,

  encode(message: ListSnapshotsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSnapshotsResponse {
    return {
      $type: ListSnapshotsResponse.$type,
      snapshots: globalThis.Array.isArray(object?.snapshots)
        ? object.snapshots.map((e: any) => Snapshot.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSnapshotsResponse): unknown {
    const obj: any = {};
    if (message.snapshots?.length) {
      obj.snapshots = message.snapshots.map((e) => Snapshot.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotsResponse>, I>>(base?: I): ListSnapshotsResponse {
    return ListSnapshotsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotsResponse>, I>>(object: I): ListSnapshotsResponse {
    const message = createBaseListSnapshotsResponse();
    message.snapshots = object.snapshots?.map((e) => Snapshot.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotsResponse.$type, ListSnapshotsResponse);

function createBaseCreateSnapshotRequest(): CreateSnapshotRequest {
  return {
    $type: "yandex.cloud.compute.v1.CreateSnapshotRequest",
    folderId: "",
    diskId: "",
    name: "",
    description: "",
    labels: {},
  };
}

export const CreateSnapshotRequest = {
  $type: "yandex.cloud.compute.v1.CreateSnapshotRequest" as const,

  encode(message: CreateSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.diskId !== "") {
      writer.uint32(18).string(message.diskId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateSnapshotRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.CreateSnapshotRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSnapshotRequest();
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

          message.diskId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = CreateSnapshotRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSnapshotRequest {
    return {
      $type: CreateSnapshotRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateSnapshotRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSnapshotRequest>, I>>(base?: I): CreateSnapshotRequest {
    return CreateSnapshotRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSnapshotRequest>, I>>(object: I): CreateSnapshotRequest {
    const message = createBaseCreateSnapshotRequest();
    message.folderId = object.folderId ?? "";
    message.diskId = object.diskId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(CreateSnapshotRequest.$type, CreateSnapshotRequest);

function createBaseCreateSnapshotRequest_LabelsEntry(): CreateSnapshotRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.CreateSnapshotRequest.LabelsEntry", key: "", value: "" };
}

export const CreateSnapshotRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreateSnapshotRequest.LabelsEntry" as const,

  encode(message: CreateSnapshotRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSnapshotRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSnapshotRequest_LabelsEntry();
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

  fromJSON(object: any): CreateSnapshotRequest_LabelsEntry {
    return {
      $type: CreateSnapshotRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateSnapshotRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSnapshotRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateSnapshotRequest_LabelsEntry {
    return CreateSnapshotRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSnapshotRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateSnapshotRequest_LabelsEntry {
    const message = createBaseCreateSnapshotRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSnapshotRequest_LabelsEntry.$type, CreateSnapshotRequest_LabelsEntry);

function createBaseCreateSnapshotMetadata(): CreateSnapshotMetadata {
  return { $type: "yandex.cloud.compute.v1.CreateSnapshotMetadata", snapshotId: "", diskId: "" };
}

export const CreateSnapshotMetadata = {
  $type: "yandex.cloud.compute.v1.CreateSnapshotMetadata" as const,

  encode(message: CreateSnapshotMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotId !== "") {
      writer.uint32(10).string(message.snapshotId);
    }
    if (message.diskId !== "") {
      writer.uint32(18).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSnapshotMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSnapshotMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.diskId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSnapshotMetadata {
    return {
      $type: CreateSnapshotMetadata.$type,
      snapshotId: isSet(object.snapshotId) ? globalThis.String(object.snapshotId) : "",
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
    };
  },

  toJSON(message: CreateSnapshotMetadata): unknown {
    const obj: any = {};
    if (message.snapshotId !== "") {
      obj.snapshotId = message.snapshotId;
    }
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSnapshotMetadata>, I>>(base?: I): CreateSnapshotMetadata {
    return CreateSnapshotMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSnapshotMetadata>, I>>(object: I): CreateSnapshotMetadata {
    const message = createBaseCreateSnapshotMetadata();
    message.snapshotId = object.snapshotId ?? "";
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSnapshotMetadata.$type, CreateSnapshotMetadata);

function createBaseUpdateSnapshotRequest(): UpdateSnapshotRequest {
  return {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest",
    snapshotId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
  };
}

export const UpdateSnapshotRequest = {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest" as const,

  encode(message: UpdateSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotId !== "") {
      writer.uint32(10).string(message.snapshotId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateSnapshotRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = UpdateSnapshotRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSnapshotRequest {
    return {
      $type: UpdateSnapshotRequest.$type,
      snapshotId: isSet(object.snapshotId) ? globalThis.String(object.snapshotId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpdateSnapshotRequest): unknown {
    const obj: any = {};
    if (message.snapshotId !== "") {
      obj.snapshotId = message.snapshotId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
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
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSnapshotRequest>, I>>(base?: I): UpdateSnapshotRequest {
    return UpdateSnapshotRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSnapshotRequest>, I>>(object: I): UpdateSnapshotRequest {
    const message = createBaseUpdateSnapshotRequest();
    message.snapshotId = object.snapshotId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(UpdateSnapshotRequest.$type, UpdateSnapshotRequest);

function createBaseUpdateSnapshotRequest_LabelsEntry(): UpdateSnapshotRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateSnapshotRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest.LabelsEntry" as const,

  encode(message: UpdateSnapshotRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSnapshotRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSnapshotRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateSnapshotRequest_LabelsEntry {
    return {
      $type: UpdateSnapshotRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateSnapshotRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSnapshotRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateSnapshotRequest_LabelsEntry {
    return UpdateSnapshotRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSnapshotRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateSnapshotRequest_LabelsEntry {
    const message = createBaseUpdateSnapshotRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSnapshotRequest_LabelsEntry.$type, UpdateSnapshotRequest_LabelsEntry);

function createBaseUpdateSnapshotMetadata(): UpdateSnapshotMetadata {
  return { $type: "yandex.cloud.compute.v1.UpdateSnapshotMetadata", snapshotId: "" };
}

export const UpdateSnapshotMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotMetadata" as const,

  encode(message: UpdateSnapshotMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotId !== "") {
      writer.uint32(10).string(message.snapshotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSnapshotMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSnapshotMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSnapshotMetadata {
    return {
      $type: UpdateSnapshotMetadata.$type,
      snapshotId: isSet(object.snapshotId) ? globalThis.String(object.snapshotId) : "",
    };
  },

  toJSON(message: UpdateSnapshotMetadata): unknown {
    const obj: any = {};
    if (message.snapshotId !== "") {
      obj.snapshotId = message.snapshotId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSnapshotMetadata>, I>>(base?: I): UpdateSnapshotMetadata {
    return UpdateSnapshotMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSnapshotMetadata>, I>>(object: I): UpdateSnapshotMetadata {
    const message = createBaseUpdateSnapshotMetadata();
    message.snapshotId = object.snapshotId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSnapshotMetadata.$type, UpdateSnapshotMetadata);

function createBaseDeleteSnapshotRequest(): DeleteSnapshotRequest {
  return { $type: "yandex.cloud.compute.v1.DeleteSnapshotRequest", snapshotId: "" };
}

export const DeleteSnapshotRequest = {
  $type: "yandex.cloud.compute.v1.DeleteSnapshotRequest" as const,

  encode(message: DeleteSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotId !== "") {
      writer.uint32(10).string(message.snapshotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSnapshotRequest {
    return {
      $type: DeleteSnapshotRequest.$type,
      snapshotId: isSet(object.snapshotId) ? globalThis.String(object.snapshotId) : "",
    };
  },

  toJSON(message: DeleteSnapshotRequest): unknown {
    const obj: any = {};
    if (message.snapshotId !== "") {
      obj.snapshotId = message.snapshotId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSnapshotRequest>, I>>(base?: I): DeleteSnapshotRequest {
    return DeleteSnapshotRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSnapshotRequest>, I>>(object: I): DeleteSnapshotRequest {
    const message = createBaseDeleteSnapshotRequest();
    message.snapshotId = object.snapshotId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSnapshotRequest.$type, DeleteSnapshotRequest);

function createBaseDeleteSnapshotMetadata(): DeleteSnapshotMetadata {
  return { $type: "yandex.cloud.compute.v1.DeleteSnapshotMetadata", snapshotId: "" };
}

export const DeleteSnapshotMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteSnapshotMetadata" as const,

  encode(message: DeleteSnapshotMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotId !== "") {
      writer.uint32(10).string(message.snapshotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSnapshotMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSnapshotMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSnapshotMetadata {
    return {
      $type: DeleteSnapshotMetadata.$type,
      snapshotId: isSet(object.snapshotId) ? globalThis.String(object.snapshotId) : "",
    };
  },

  toJSON(message: DeleteSnapshotMetadata): unknown {
    const obj: any = {};
    if (message.snapshotId !== "") {
      obj.snapshotId = message.snapshotId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSnapshotMetadata>, I>>(base?: I): DeleteSnapshotMetadata {
    return DeleteSnapshotMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSnapshotMetadata>, I>>(object: I): DeleteSnapshotMetadata {
    const message = createBaseDeleteSnapshotMetadata();
    message.snapshotId = object.snapshotId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSnapshotMetadata.$type, DeleteSnapshotMetadata);

function createBaseListSnapshotOperationsRequest(): ListSnapshotOperationsRequest {
  return { $type: "yandex.cloud.compute.v1.ListSnapshotOperationsRequest", snapshotId: "", pageSize: 0, pageToken: "" };
}

export const ListSnapshotOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListSnapshotOperationsRequest" as const,

  encode(message: ListSnapshotOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotId !== "") {
      writer.uint32(10).string(message.snapshotId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ListSnapshotOperationsRequest {
    return {
      $type: ListSnapshotOperationsRequest.$type,
      snapshotId: isSet(object.snapshotId) ? globalThis.String(object.snapshotId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSnapshotOperationsRequest): unknown {
    const obj: any = {};
    if (message.snapshotId !== "") {
      obj.snapshotId = message.snapshotId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotOperationsRequest>, I>>(base?: I): ListSnapshotOperationsRequest {
    return ListSnapshotOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotOperationsRequest>, I>>(
    object: I,
  ): ListSnapshotOperationsRequest {
    const message = createBaseListSnapshotOperationsRequest();
    message.snapshotId = object.snapshotId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotOperationsRequest.$type, ListSnapshotOperationsRequest);

function createBaseListSnapshotOperationsResponse(): ListSnapshotOperationsResponse {
  return { $type: "yandex.cloud.compute.v1.ListSnapshotOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListSnapshotOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListSnapshotOperationsResponse" as const,

  encode(message: ListSnapshotOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operations.push(Operation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSnapshotOperationsResponse {
    return {
      $type: ListSnapshotOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSnapshotOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotOperationsResponse>, I>>(base?: I): ListSnapshotOperationsResponse {
    return ListSnapshotOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotOperationsResponse>, I>>(
    object: I,
  ): ListSnapshotOperationsResponse {
    const message = createBaseListSnapshotOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotOperationsResponse.$type, ListSnapshotOperationsResponse);

/** A set of methods for managing Snapshot resources. */
export type SnapshotServiceService = typeof SnapshotServiceService;
export const SnapshotServiceService = {
  /**
   * Returns the specified Snapshot resource.
   *
   * To get the list of available Snapshot resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.SnapshotService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSnapshotRequest) => Buffer.from(GetSnapshotRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSnapshotRequest.decode(value),
    responseSerialize: (value: Snapshot) => Buffer.from(Snapshot.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Snapshot.decode(value),
  },
  /** Retrieves the list of Snapshot resources in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.SnapshotService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSnapshotsRequest) => Buffer.from(ListSnapshotsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSnapshotsRequest.decode(value),
    responseSerialize: (value: ListSnapshotsResponse) => Buffer.from(ListSnapshotsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSnapshotsResponse.decode(value),
  },
  /** Creates a snapshot of the specified disk. */
  create: {
    path: "/yandex.cloud.compute.v1.SnapshotService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSnapshotRequest) => Buffer.from(CreateSnapshotRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSnapshotRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified snapshot.
   *
   * Values of omitted parameters are not changed.
   */
  update: {
    path: "/yandex.cloud.compute.v1.SnapshotService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSnapshotRequest) => Buffer.from(UpdateSnapshotRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSnapshotRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified snapshot.
   *
   * Deleting a snapshot removes its data permanently and is irreversible.
   */
  delete: {
    path: "/yandex.cloud.compute.v1.SnapshotService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSnapshotRequest) => Buffer.from(DeleteSnapshotRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSnapshotRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified snapshot. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.SnapshotService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSnapshotOperationsRequest) =>
      Buffer.from(ListSnapshotOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSnapshotOperationsRequest.decode(value),
    responseSerialize: (value: ListSnapshotOperationsResponse) =>
      Buffer.from(ListSnapshotOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSnapshotOperationsResponse.decode(value),
  },
} as const;

export interface SnapshotServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Snapshot resource.
   *
   * To get the list of available Snapshot resources, make a [List] request.
   */
  get: handleUnaryCall<GetSnapshotRequest, Snapshot>;
  /** Retrieves the list of Snapshot resources in the specified folder. */
  list: handleUnaryCall<ListSnapshotsRequest, ListSnapshotsResponse>;
  /** Creates a snapshot of the specified disk. */
  create: handleUnaryCall<CreateSnapshotRequest, Operation>;
  /**
   * Updates the specified snapshot.
   *
   * Values of omitted parameters are not changed.
   */
  update: handleUnaryCall<UpdateSnapshotRequest, Operation>;
  /**
   * Deletes the specified snapshot.
   *
   * Deleting a snapshot removes its data permanently and is irreversible.
   */
  delete: handleUnaryCall<DeleteSnapshotRequest, Operation>;
  /** Lists operations for the specified snapshot. */
  listOperations: handleUnaryCall<ListSnapshotOperationsRequest, ListSnapshotOperationsResponse>;
}

export interface SnapshotServiceClient extends Client {
  /**
   * Returns the specified Snapshot resource.
   *
   * To get the list of available Snapshot resources, make a [List] request.
   */
  get(request: GetSnapshotRequest, callback: (error: ServiceError | null, response: Snapshot) => void): ClientUnaryCall;
  get(
    request: GetSnapshotRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Snapshot) => void,
  ): ClientUnaryCall;
  get(
    request: GetSnapshotRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Snapshot) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Snapshot resources in the specified folder. */
  list(
    request: ListSnapshotsRequest,
    callback: (error: ServiceError | null, response: ListSnapshotsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSnapshotsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSnapshotsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSnapshotsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSnapshotsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a snapshot of the specified disk. */
  create(
    request: CreateSnapshotRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSnapshotRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSnapshotRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified snapshot.
   *
   * Values of omitted parameters are not changed.
   */
  update(
    request: UpdateSnapshotRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSnapshotRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSnapshotRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified snapshot.
   *
   * Deleting a snapshot removes its data permanently and is irreversible.
   */
  delete(
    request: DeleteSnapshotRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSnapshotRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSnapshotRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified snapshot. */
  listOperations(
    request: ListSnapshotOperationsRequest,
    callback: (error: ServiceError | null, response: ListSnapshotOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSnapshotOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSnapshotOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSnapshotOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSnapshotOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const SnapshotServiceClient = makeGenericClientConstructor(
  SnapshotServiceService,
  "yandex.cloud.compute.v1.SnapshotService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SnapshotServiceClient;
  service: typeof SnapshotServiceService;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
