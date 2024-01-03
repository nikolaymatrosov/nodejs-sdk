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
import { Filesystem } from "./filesystem";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetFilesystemRequest {
  $type: "yandex.cloud.compute.v1.GetFilesystemRequest";
  /**
   * ID of the filesystem to return.
   *
   * To get the filesystem ID, make a [FilesystemService.List] request.
   */
  filesystemId: string;
}

export interface ListFilesystemsRequest {
  $type: "yandex.cloud.compute.v1.ListFilesystemsRequest";
  /**
   * ID of the folder to list filesystems in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`,
   * the service returns a [ListFilesystemsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListFilesystemsResponse.next_page_token] returned by a previous list request.
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

export interface ListFilesystemsResponse {
  $type: "yandex.cloud.compute.v1.ListFilesystemsResponse";
  /** List of filesystems in the specified folder. */
  filesystems: Filesystem[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFilesystemsRequest.page_size], use `next_page_token` as the value
   * for the [ListFilesystemsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateFilesystemRequest {
  $type: "yandex.cloud.compute.v1.CreateFilesystemRequest";
  /**
   * ID of the folder to create a filesystem in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the filesystem. The name must be unique within the folder. */
  name: string;
  /** Description of the filesystem. */
  description: string;
  /**
   * Filesystem labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /**
   * ID of the filesystem type.
   *
   * To get a list of available filesystem types, make a [yandex.cloud.compute.v1.DiskTypeService.List] request.
   *
   * The filesystem type cannot be updated after the filesystem creation.
   */
  typeId: string;
  /**
   * ID of the availability zone where the filesystem resides.
   *
   * To get a list of available zones, make a [yandex.cloud.compute.v1.ZoneService.List] request.
   *
   * A filesystem can be attached only to virtual machines residing in the same availability zone.
   * The filesystem availability zone cannot be updated after the filesystem creation.
   */
  zoneId: string;
  /**
   * Size of the filesystem, specified in bytes.
   *
   * The size of the filesystem cannot be updated after the filesystem creation.
   */
  size: number;
  /**
   * Block size used for the filesystem, specified in bytes.
   *
   * The block size cannot be updated after the filesystem creation.
   *
   * Default value: 4096.
   */
  blockSize: number;
}

export interface CreateFilesystemRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateFilesystemMetadata {
  $type: "yandex.cloud.compute.v1.CreateFilesystemMetadata";
  /** ID of the filesystem that is being created. */
  filesystemId: string;
}

export interface UpdateFilesystemRequest {
  $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest";
  /**
   * ID of the filesystem to update.
   *
   * To get the filesystem ID, make a [FilesystemService.List] request.
   */
  filesystemId: string;
  /** Field mask that specifies which attributes of the filesystem should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New name of the filesystem. The name must be unique within the folder. */
  name: string;
  /** New description of the filesystem. */
  description: string;
  /**
   * New filesystem labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [FilesystemService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /** Size of the filesystem, specified in bytes. */
  size: number;
}

export interface UpdateFilesystemRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateFilesystemMetadata {
  $type: "yandex.cloud.compute.v1.UpdateFilesystemMetadata";
  /** ID of the filesystem that is being updated. */
  filesystemId: string;
}

export interface DeleteFilesystemRequest {
  $type: "yandex.cloud.compute.v1.DeleteFilesystemRequest";
  /**
   * ID of the filesystem to delete.
   *
   * To get the filesystem ID, make a [FilesystemService.List] request.
   */
  filesystemId: string;
}

export interface DeleteFilesystemMetadata {
  $type: "yandex.cloud.compute.v1.DeleteFilesystemMetadata";
  /** ID of the filesystem that is being deleted. */
  filesystemId: string;
}

export interface ListFilesystemOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListFilesystemOperationsRequest";
  /**
   * ID of the filesystem to list operations for.
   *
   * To get the filesystem ID, make a [FilesystemService.List] request.
   */
  filesystemId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListFilesystemOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListFilesystemOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListFilesystemOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListFilesystemOperationsResponse";
  /** List of operations for the specified filesystem. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFilesystemOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListFilesystemOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetFilesystemRequest(): GetFilesystemRequest {
  return { $type: "yandex.cloud.compute.v1.GetFilesystemRequest", filesystemId: "" };
}

export const GetFilesystemRequest = {
  $type: "yandex.cloud.compute.v1.GetFilesystemRequest" as const,

  encode(message: GetFilesystemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filesystemId !== "") {
      writer.uint32(10).string(message.filesystemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFilesystemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFilesystemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filesystemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFilesystemRequest {
    return {
      $type: GetFilesystemRequest.$type,
      filesystemId: isSet(object.filesystemId) ? globalThis.String(object.filesystemId) : "",
    };
  },

  toJSON(message: GetFilesystemRequest): unknown {
    const obj: any = {};
    if (message.filesystemId !== "") {
      obj.filesystemId = message.filesystemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFilesystemRequest>, I>>(base?: I): GetFilesystemRequest {
    return GetFilesystemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFilesystemRequest>, I>>(object: I): GetFilesystemRequest {
    const message = createBaseGetFilesystemRequest();
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFilesystemRequest.$type, GetFilesystemRequest);

function createBaseListFilesystemsRequest(): ListFilesystemsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListFilesystemsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListFilesystemsRequest = {
  $type: "yandex.cloud.compute.v1.ListFilesystemsRequest" as const,

  encode(message: ListFilesystemsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesystemsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesystemsRequest();
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

  fromJSON(object: any): ListFilesystemsRequest {
    return {
      $type: ListFilesystemsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListFilesystemsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListFilesystemsRequest>, I>>(base?: I): ListFilesystemsRequest {
    return ListFilesystemsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFilesystemsRequest>, I>>(object: I): ListFilesystemsRequest {
    const message = createBaseListFilesystemsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFilesystemsRequest.$type, ListFilesystemsRequest);

function createBaseListFilesystemsResponse(): ListFilesystemsResponse {
  return { $type: "yandex.cloud.compute.v1.ListFilesystemsResponse", filesystems: [], nextPageToken: "" };
}

export const ListFilesystemsResponse = {
  $type: "yandex.cloud.compute.v1.ListFilesystemsResponse" as const,

  encode(message: ListFilesystemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filesystems) {
      Filesystem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesystemsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesystemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filesystems.push(Filesystem.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListFilesystemsResponse {
    return {
      $type: ListFilesystemsResponse.$type,
      filesystems: globalThis.Array.isArray(object?.filesystems)
        ? object.filesystems.map((e: any) => Filesystem.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFilesystemsResponse): unknown {
    const obj: any = {};
    if (message.filesystems?.length) {
      obj.filesystems = message.filesystems.map((e) => Filesystem.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFilesystemsResponse>, I>>(base?: I): ListFilesystemsResponse {
    return ListFilesystemsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFilesystemsResponse>, I>>(object: I): ListFilesystemsResponse {
    const message = createBaseListFilesystemsResponse();
    message.filesystems = object.filesystems?.map((e) => Filesystem.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFilesystemsResponse.$type, ListFilesystemsResponse);

function createBaseCreateFilesystemRequest(): CreateFilesystemRequest {
  return {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    typeId: "",
    zoneId: "",
    size: 0,
    blockSize: 0,
  };
}

export const CreateFilesystemRequest = {
  $type: "yandex.cloud.compute.v1.CreateFilesystemRequest" as const,

  encode(message: CreateFilesystemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateFilesystemRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.typeId !== "") {
      writer.uint32(42).string(message.typeId);
    }
    if (message.zoneId !== "") {
      writer.uint32(50).string(message.zoneId);
    }
    if (message.size !== 0) {
      writer.uint32(56).int64(message.size);
    }
    if (message.blockSize !== 0) {
      writer.uint32(64).int64(message.blockSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFilesystemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFilesystemRequest();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = CreateFilesystemRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.blockSize = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFilesystemRequest {
    return {
      $type: CreateFilesystemRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      typeId: isSet(object.typeId) ? globalThis.String(object.typeId) : "",
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      blockSize: isSet(object.blockSize) ? globalThis.Number(object.blockSize) : 0,
    };
  },

  toJSON(message: CreateFilesystemRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
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
    if (message.typeId !== "") {
      obj.typeId = message.typeId;
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.blockSize !== 0) {
      obj.blockSize = Math.round(message.blockSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFilesystemRequest>, I>>(base?: I): CreateFilesystemRequest {
    return CreateFilesystemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFilesystemRequest>, I>>(object: I): CreateFilesystemRequest {
    const message = createBaseCreateFilesystemRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.typeId = object.typeId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.size = object.size ?? 0;
    message.blockSize = object.blockSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateFilesystemRequest.$type, CreateFilesystemRequest);

function createBaseCreateFilesystemRequest_LabelsEntry(): CreateFilesystemRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry", key: "", value: "" };
}

export const CreateFilesystemRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry" as const,

  encode(message: CreateFilesystemRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFilesystemRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFilesystemRequest_LabelsEntry();
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

  fromJSON(object: any): CreateFilesystemRequest_LabelsEntry {
    return {
      $type: CreateFilesystemRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateFilesystemRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFilesystemRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateFilesystemRequest_LabelsEntry {
    return CreateFilesystemRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFilesystemRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateFilesystemRequest_LabelsEntry {
    const message = createBaseCreateFilesystemRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFilesystemRequest_LabelsEntry.$type, CreateFilesystemRequest_LabelsEntry);

function createBaseCreateFilesystemMetadata(): CreateFilesystemMetadata {
  return { $type: "yandex.cloud.compute.v1.CreateFilesystemMetadata", filesystemId: "" };
}

export const CreateFilesystemMetadata = {
  $type: "yandex.cloud.compute.v1.CreateFilesystemMetadata" as const,

  encode(message: CreateFilesystemMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filesystemId !== "") {
      writer.uint32(10).string(message.filesystemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFilesystemMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFilesystemMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filesystemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFilesystemMetadata {
    return {
      $type: CreateFilesystemMetadata.$type,
      filesystemId: isSet(object.filesystemId) ? globalThis.String(object.filesystemId) : "",
    };
  },

  toJSON(message: CreateFilesystemMetadata): unknown {
    const obj: any = {};
    if (message.filesystemId !== "") {
      obj.filesystemId = message.filesystemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFilesystemMetadata>, I>>(base?: I): CreateFilesystemMetadata {
    return CreateFilesystemMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFilesystemMetadata>, I>>(object: I): CreateFilesystemMetadata {
    const message = createBaseCreateFilesystemMetadata();
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFilesystemMetadata.$type, CreateFilesystemMetadata);

function createBaseUpdateFilesystemRequest(): UpdateFilesystemRequest {
  return {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest",
    filesystemId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    size: 0,
  };
}

export const UpdateFilesystemRequest = {
  $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest" as const,

  encode(message: UpdateFilesystemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filesystemId !== "") {
      writer.uint32(10).string(message.filesystemId);
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
      UpdateFilesystemRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFilesystemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFilesystemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filesystemId = reader.string();
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

          const entry5 = UpdateFilesystemRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFilesystemRequest {
    return {
      $type: UpdateFilesystemRequest.$type,
      filesystemId: isSet(object.filesystemId) ? globalThis.String(object.filesystemId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
    };
  },

  toJSON(message: UpdateFilesystemRequest): unknown {
    const obj: any = {};
    if (message.filesystemId !== "") {
      obj.filesystemId = message.filesystemId;
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
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFilesystemRequest>, I>>(base?: I): UpdateFilesystemRequest {
    return UpdateFilesystemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFilesystemRequest>, I>>(object: I): UpdateFilesystemRequest {
    const message = createBaseUpdateFilesystemRequest();
    message.filesystemId = object.filesystemId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UpdateFilesystemRequest.$type, UpdateFilesystemRequest);

function createBaseUpdateFilesystemRequest_LabelsEntry(): UpdateFilesystemRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateFilesystemRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry" as const,

  encode(message: UpdateFilesystemRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFilesystemRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFilesystemRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateFilesystemRequest_LabelsEntry {
    return {
      $type: UpdateFilesystemRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateFilesystemRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFilesystemRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateFilesystemRequest_LabelsEntry {
    return UpdateFilesystemRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFilesystemRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateFilesystemRequest_LabelsEntry {
    const message = createBaseUpdateFilesystemRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFilesystemRequest_LabelsEntry.$type, UpdateFilesystemRequest_LabelsEntry);

function createBaseUpdateFilesystemMetadata(): UpdateFilesystemMetadata {
  return { $type: "yandex.cloud.compute.v1.UpdateFilesystemMetadata", filesystemId: "" };
}

export const UpdateFilesystemMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateFilesystemMetadata" as const,

  encode(message: UpdateFilesystemMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filesystemId !== "") {
      writer.uint32(10).string(message.filesystemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFilesystemMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFilesystemMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filesystemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFilesystemMetadata {
    return {
      $type: UpdateFilesystemMetadata.$type,
      filesystemId: isSet(object.filesystemId) ? globalThis.String(object.filesystemId) : "",
    };
  },

  toJSON(message: UpdateFilesystemMetadata): unknown {
    const obj: any = {};
    if (message.filesystemId !== "") {
      obj.filesystemId = message.filesystemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFilesystemMetadata>, I>>(base?: I): UpdateFilesystemMetadata {
    return UpdateFilesystemMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFilesystemMetadata>, I>>(object: I): UpdateFilesystemMetadata {
    const message = createBaseUpdateFilesystemMetadata();
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFilesystemMetadata.$type, UpdateFilesystemMetadata);

function createBaseDeleteFilesystemRequest(): DeleteFilesystemRequest {
  return { $type: "yandex.cloud.compute.v1.DeleteFilesystemRequest", filesystemId: "" };
}

export const DeleteFilesystemRequest = {
  $type: "yandex.cloud.compute.v1.DeleteFilesystemRequest" as const,

  encode(message: DeleteFilesystemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filesystemId !== "") {
      writer.uint32(10).string(message.filesystemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFilesystemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFilesystemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filesystemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFilesystemRequest {
    return {
      $type: DeleteFilesystemRequest.$type,
      filesystemId: isSet(object.filesystemId) ? globalThis.String(object.filesystemId) : "",
    };
  },

  toJSON(message: DeleteFilesystemRequest): unknown {
    const obj: any = {};
    if (message.filesystemId !== "") {
      obj.filesystemId = message.filesystemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFilesystemRequest>, I>>(base?: I): DeleteFilesystemRequest {
    return DeleteFilesystemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteFilesystemRequest>, I>>(object: I): DeleteFilesystemRequest {
    const message = createBaseDeleteFilesystemRequest();
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFilesystemRequest.$type, DeleteFilesystemRequest);

function createBaseDeleteFilesystemMetadata(): DeleteFilesystemMetadata {
  return { $type: "yandex.cloud.compute.v1.DeleteFilesystemMetadata", filesystemId: "" };
}

export const DeleteFilesystemMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteFilesystemMetadata" as const,

  encode(message: DeleteFilesystemMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filesystemId !== "") {
      writer.uint32(10).string(message.filesystemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFilesystemMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFilesystemMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filesystemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFilesystemMetadata {
    return {
      $type: DeleteFilesystemMetadata.$type,
      filesystemId: isSet(object.filesystemId) ? globalThis.String(object.filesystemId) : "",
    };
  },

  toJSON(message: DeleteFilesystemMetadata): unknown {
    const obj: any = {};
    if (message.filesystemId !== "") {
      obj.filesystemId = message.filesystemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFilesystemMetadata>, I>>(base?: I): DeleteFilesystemMetadata {
    return DeleteFilesystemMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteFilesystemMetadata>, I>>(object: I): DeleteFilesystemMetadata {
    const message = createBaseDeleteFilesystemMetadata();
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFilesystemMetadata.$type, DeleteFilesystemMetadata);

function createBaseListFilesystemOperationsRequest(): ListFilesystemOperationsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsRequest",
    filesystemId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListFilesystemOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListFilesystemOperationsRequest" as const,

  encode(message: ListFilesystemOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filesystemId !== "") {
      writer.uint32(10).string(message.filesystemId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesystemOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesystemOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filesystemId = reader.string();
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

  fromJSON(object: any): ListFilesystemOperationsRequest {
    return {
      $type: ListFilesystemOperationsRequest.$type,
      filesystemId: isSet(object.filesystemId) ? globalThis.String(object.filesystemId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListFilesystemOperationsRequest): unknown {
    const obj: any = {};
    if (message.filesystemId !== "") {
      obj.filesystemId = message.filesystemId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFilesystemOperationsRequest>, I>>(base?: I): ListFilesystemOperationsRequest {
    return ListFilesystemOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFilesystemOperationsRequest>, I>>(
    object: I,
  ): ListFilesystemOperationsRequest {
    const message = createBaseListFilesystemOperationsRequest();
    message.filesystemId = object.filesystemId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFilesystemOperationsRequest.$type, ListFilesystemOperationsRequest);

function createBaseListFilesystemOperationsResponse(): ListFilesystemOperationsResponse {
  return { $type: "yandex.cloud.compute.v1.ListFilesystemOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListFilesystemOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListFilesystemOperationsResponse" as const,

  encode(message: ListFilesystemOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesystemOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesystemOperationsResponse();
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

  fromJSON(object: any): ListFilesystemOperationsResponse {
    return {
      $type: ListFilesystemOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFilesystemOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFilesystemOperationsResponse>, I>>(
    base?: I,
  ): ListFilesystemOperationsResponse {
    return ListFilesystemOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFilesystemOperationsResponse>, I>>(
    object: I,
  ): ListFilesystemOperationsResponse {
    const message = createBaseListFilesystemOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFilesystemOperationsResponse.$type, ListFilesystemOperationsResponse);

/** A set of methods for managing filesystems. */
export type FilesystemServiceService = typeof FilesystemServiceService;
export const FilesystemServiceService = {
  /**
   * Returns the specified filesystem.
   *
   * To get the list of available filesystems, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.FilesystemService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFilesystemRequest) => Buffer.from(GetFilesystemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFilesystemRequest.decode(value),
    responseSerialize: (value: Filesystem) => Buffer.from(Filesystem.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Filesystem.decode(value),
  },
  /** Lists filesystems in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.FilesystemService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFilesystemsRequest) => Buffer.from(ListFilesystemsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFilesystemsRequest.decode(value),
    responseSerialize: (value: ListFilesystemsResponse) => Buffer.from(ListFilesystemsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFilesystemsResponse.decode(value),
  },
  /** Creates a filesystem in the specified folder. */
  create: {
    path: "/yandex.cloud.compute.v1.FilesystemService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFilesystemRequest) => Buffer.from(CreateFilesystemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateFilesystemRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified filesystem. */
  update: {
    path: "/yandex.cloud.compute.v1.FilesystemService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateFilesystemRequest) => Buffer.from(UpdateFilesystemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateFilesystemRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified filesystem.
   *
   * Deleting a filesystem removes its data permanently and is irreversible.
   *
   * It is not possible to delete a filesystem that is attached to an instance.
   */
  delete: {
    path: "/yandex.cloud.compute.v1.FilesystemService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFilesystemRequest) => Buffer.from(DeleteFilesystemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteFilesystemRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified filesystem. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.FilesystemService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFilesystemOperationsRequest) =>
      Buffer.from(ListFilesystemOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFilesystemOperationsRequest.decode(value),
    responseSerialize: (value: ListFilesystemOperationsResponse) =>
      Buffer.from(ListFilesystemOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFilesystemOperationsResponse.decode(value),
  },
} as const;

export interface FilesystemServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified filesystem.
   *
   * To get the list of available filesystems, make a [List] request.
   */
  get: handleUnaryCall<GetFilesystemRequest, Filesystem>;
  /** Lists filesystems in the specified folder. */
  list: handleUnaryCall<ListFilesystemsRequest, ListFilesystemsResponse>;
  /** Creates a filesystem in the specified folder. */
  create: handleUnaryCall<CreateFilesystemRequest, Operation>;
  /** Updates the specified filesystem. */
  update: handleUnaryCall<UpdateFilesystemRequest, Operation>;
  /**
   * Deletes the specified filesystem.
   *
   * Deleting a filesystem removes its data permanently and is irreversible.
   *
   * It is not possible to delete a filesystem that is attached to an instance.
   */
  delete: handleUnaryCall<DeleteFilesystemRequest, Operation>;
  /** Lists operations for the specified filesystem. */
  listOperations: handleUnaryCall<ListFilesystemOperationsRequest, ListFilesystemOperationsResponse>;
}

export interface FilesystemServiceClient extends Client {
  /**
   * Returns the specified filesystem.
   *
   * To get the list of available filesystems, make a [List] request.
   */
  get(
    request: GetFilesystemRequest,
    callback: (error: ServiceError | null, response: Filesystem) => void,
  ): ClientUnaryCall;
  get(
    request: GetFilesystemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Filesystem) => void,
  ): ClientUnaryCall;
  get(
    request: GetFilesystemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Filesystem) => void,
  ): ClientUnaryCall;
  /** Lists filesystems in the specified folder. */
  list(
    request: ListFilesystemsRequest,
    callback: (error: ServiceError | null, response: ListFilesystemsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListFilesystemsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFilesystemsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListFilesystemsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFilesystemsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a filesystem in the specified folder. */
  create(
    request: CreateFilesystemRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateFilesystemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateFilesystemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified filesystem. */
  update(
    request: UpdateFilesystemRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateFilesystemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateFilesystemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified filesystem.
   *
   * Deleting a filesystem removes its data permanently and is irreversible.
   *
   * It is not possible to delete a filesystem that is attached to an instance.
   */
  delete(
    request: DeleteFilesystemRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteFilesystemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteFilesystemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified filesystem. */
  listOperations(
    request: ListFilesystemOperationsRequest,
    callback: (error: ServiceError | null, response: ListFilesystemOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListFilesystemOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFilesystemOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListFilesystemOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFilesystemOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const FilesystemServiceClient = makeGenericClientConstructor(
  FilesystemServiceService,
  "yandex.cloud.compute.v1.FilesystemService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FilesystemServiceClient;
  service: typeof FilesystemServiceService;
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
