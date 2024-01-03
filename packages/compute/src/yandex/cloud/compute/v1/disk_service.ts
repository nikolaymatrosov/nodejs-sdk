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
import { Disk, DiskPlacementPolicy } from "./disk";
import { SnapshotSchedule } from "./snapshot_schedule";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetDiskRequest {
  $type: "yandex.cloud.compute.v1.GetDiskRequest";
  /**
   * ID of the Disk resource to return.
   * To get the disk ID use a [DiskService.List] request.
   */
  diskId: string;
}

export interface ListDisksRequest {
  $type: "yandex.cloud.compute.v1.ListDisksRequest";
  /**
   * ID of the folder to list disks in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListDisksResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDisksResponse.next_page_token] returned by a previous list request.
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

export interface ListDisksResponse {
  $type: "yandex.cloud.compute.v1.ListDisksResponse";
  /** List of Disk resources. */
  disks: Disk[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDisksRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListDisksRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateDiskRequest {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest";
  /**
   * ID of the folder to create a disk in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the disk. */
  name: string;
  /** Description of the disk. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * ID of the disk type.
   * To get a list of available disk types use the [yandex.cloud.compute.v1.DiskTypeService.List] request.
   */
  typeId: string;
  /**
   * ID of the availability zone where the disk resides.
   * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /**
   * Size of the disk, specified in bytes.
   * If the disk was created from a image, this value should be more than the
   * [yandex.cloud.compute.v1.Image.min_disk_size] value.
   */
  size: number;
  /** ID of the image to create the disk from. */
  imageId?:
    | string
    | undefined;
  /** ID of the snapshot to restore the disk from. */
  snapshotId?:
    | string
    | undefined;
  /** Block size used for disk, specified in bytes. The default is 4096. */
  blockSize: number;
  /** Placement policy configuration. */
  diskPlacementPolicy?:
    | DiskPlacementPolicy
    | undefined;
  /** List of IDs of the snapshot schedules to attach the disk to. */
  snapshotScheduleIds: string[];
}

export interface CreateDiskRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateDiskMetadata {
  $type: "yandex.cloud.compute.v1.CreateDiskMetadata";
  /** ID of the disk that is being created. */
  diskId: string;
}

export interface UpdateDiskRequest {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest";
  /**
   * ID of the Disk resource to update.
   * To get the disk ID use a [DiskService.List] request.
   */
  diskId: string;
  /** Field mask that specifies which fields of the Disk resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the disk. */
  name: string;
  /** Description of the disk. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /** Size of the disk, specified in bytes. */
  size: number;
  /** Placement policy configuration. */
  diskPlacementPolicy?: DiskPlacementPolicy | undefined;
}

export interface UpdateDiskRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateDiskMetadata {
  $type: "yandex.cloud.compute.v1.UpdateDiskMetadata";
  /** ID of the Disk resource that is being updated. */
  diskId: string;
}

export interface DeleteDiskRequest {
  $type: "yandex.cloud.compute.v1.DeleteDiskRequest";
  /**
   * ID of the disk to delete.
   * To get the disk ID use a [DiskService.List] request.
   */
  diskId: string;
}

export interface DeleteDiskMetadata {
  $type: "yandex.cloud.compute.v1.DeleteDiskMetadata";
  /** ID of the disk that is being deleted. */
  diskId: string;
}

export interface ListDiskOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest";
  /** ID of the Disk resource to list operations for. */
  diskId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListDiskOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDiskOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListDiskOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse";
  /** List of operations for the specified disk. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDiskOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListDiskOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MoveDiskRequest {
  $type: "yandex.cloud.compute.v1.MoveDiskRequest";
  /**
   * ID of the disk to move.
   *
   * To get the disk ID, make a [DiskService.List] request.
   */
  diskId: string;
  /**
   * ID of the folder to move the disk to.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  destinationFolderId: string;
}

export interface MoveDiskMetadata {
  $type: "yandex.cloud.compute.v1.MoveDiskMetadata";
  /** ID of the disk that is being moved. */
  diskId: string;
  /** ID of the folder that the disk is being moved from. */
  sourceFolderId: string;
  /** ID of the folder that the disk is being moved to. */
  destinationFolderId: string;
}

export interface RelocateDiskRequest {
  $type: "yandex.cloud.compute.v1.RelocateDiskRequest";
  /**
   * ID of the disk to move.
   *
   * To get the disk ID, make a [DiskService.List] request.
   */
  diskId: string;
  /**
   * ID of the availability zone to move the disk to.
   *
   * To get the zone ID, make a [ZoneService.List] request.
   */
  destinationZoneId: string;
}

export interface RelocateDiskMetadata {
  $type: "yandex.cloud.compute.v1.RelocateDiskMetadata";
  /** ID of the disk that is being moved. */
  diskId: string;
  /** ID of the availability zone that the disk is being moved from. */
  sourceZoneId: string;
  /** ID of the availability zone that the disk is being moved to. */
  destinationZoneId: string;
}

export interface ListDiskSnapshotSchedulesRequest {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest";
  /** ID of the disk to list snapshot schedules for. */
  diskId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListDiskSnapshotSchedulesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDiskSnapshotSchedulesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListDiskSnapshotSchedulesResponse {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse";
  /** List of snapshot schedules the specified disk is attached to. */
  snapshotSchedules: SnapshotSchedule[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDiskSnapshotSchedulesRequest.page_size], use `next_page_token` as the value
   * for the [ListDiskSnapshotSchedulesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetDiskRequest(): GetDiskRequest {
  return { $type: "yandex.cloud.compute.v1.GetDiskRequest", diskId: "" };
}

export const GetDiskRequest = {
  $type: "yandex.cloud.compute.v1.GetDiskRequest" as const,

  encode(message: GetDiskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDiskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDiskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): GetDiskRequest {
    return { $type: GetDiskRequest.$type, diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "" };
  },

  toJSON(message: GetDiskRequest): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDiskRequest>, I>>(base?: I): GetDiskRequest {
    return GetDiskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDiskRequest>, I>>(object: I): GetDiskRequest {
    const message = createBaseGetDiskRequest();
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetDiskRequest.$type, GetDiskRequest);

function createBaseListDisksRequest(): ListDisksRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListDisksRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListDisksRequest = {
  $type: "yandex.cloud.compute.v1.ListDisksRequest" as const,

  encode(message: ListDisksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDisksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDisksRequest();
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

  fromJSON(object: any): ListDisksRequest {
    return {
      $type: ListDisksRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListDisksRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListDisksRequest>, I>>(base?: I): ListDisksRequest {
    return ListDisksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDisksRequest>, I>>(object: I): ListDisksRequest {
    const message = createBaseListDisksRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDisksRequest.$type, ListDisksRequest);

function createBaseListDisksResponse(): ListDisksResponse {
  return { $type: "yandex.cloud.compute.v1.ListDisksResponse", disks: [], nextPageToken: "" };
}

export const ListDisksResponse = {
  $type: "yandex.cloud.compute.v1.ListDisksResponse" as const,

  encode(message: ListDisksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.disks) {
      Disk.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDisksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDisksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.disks.push(Disk.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDisksResponse {
    return {
      $type: ListDisksResponse.$type,
      disks: globalThis.Array.isArray(object?.disks) ? object.disks.map((e: any) => Disk.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDisksResponse): unknown {
    const obj: any = {};
    if (message.disks?.length) {
      obj.disks = message.disks.map((e) => Disk.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDisksResponse>, I>>(base?: I): ListDisksResponse {
    return ListDisksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDisksResponse>, I>>(object: I): ListDisksResponse {
    const message = createBaseListDisksResponse();
    message.disks = object.disks?.map((e) => Disk.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDisksResponse.$type, ListDisksResponse);

function createBaseCreateDiskRequest(): CreateDiskRequest {
  return {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    typeId: "",
    zoneId: "",
    size: 0,
    imageId: undefined,
    snapshotId: undefined,
    blockSize: 0,
    diskPlacementPolicy: undefined,
    snapshotScheduleIds: [],
  };
}

export const CreateDiskRequest = {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest" as const,

  encode(message: CreateDiskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateDiskRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry",
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
    if (message.imageId !== undefined) {
      writer.uint32(66).string(message.imageId);
    }
    if (message.snapshotId !== undefined) {
      writer.uint32(74).string(message.snapshotId);
    }
    if (message.blockSize !== 0) {
      writer.uint32(80).int64(message.blockSize);
    }
    if (message.diskPlacementPolicy !== undefined) {
      DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.snapshotScheduleIds) {
      writer.uint32(98).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDiskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDiskRequest();
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

          const entry4 = CreateDiskRequest_LabelsEntry.decode(reader, reader.uint32());
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
          if (tag !== 66) {
            break;
          }

          message.imageId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.snapshotId = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.blockSize = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.diskPlacementPolicy = DiskPlacementPolicy.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.snapshotScheduleIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDiskRequest {
    return {
      $type: CreateDiskRequest.$type,
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
      imageId: isSet(object.imageId) ? globalThis.String(object.imageId) : undefined,
      snapshotId: isSet(object.snapshotId) ? globalThis.String(object.snapshotId) : undefined,
      blockSize: isSet(object.blockSize) ? globalThis.Number(object.blockSize) : 0,
      diskPlacementPolicy: isSet(object.diskPlacementPolicy)
        ? DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
        : undefined,
      snapshotScheduleIds: globalThis.Array.isArray(object?.snapshotScheduleIds)
        ? object.snapshotScheduleIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: CreateDiskRequest): unknown {
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
    if (message.imageId !== undefined) {
      obj.imageId = message.imageId;
    }
    if (message.snapshotId !== undefined) {
      obj.snapshotId = message.snapshotId;
    }
    if (message.blockSize !== 0) {
      obj.blockSize = Math.round(message.blockSize);
    }
    if (message.diskPlacementPolicy !== undefined) {
      obj.diskPlacementPolicy = DiskPlacementPolicy.toJSON(message.diskPlacementPolicy);
    }
    if (message.snapshotScheduleIds?.length) {
      obj.snapshotScheduleIds = message.snapshotScheduleIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDiskRequest>, I>>(base?: I): CreateDiskRequest {
    return CreateDiskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDiskRequest>, I>>(object: I): CreateDiskRequest {
    const message = createBaseCreateDiskRequest();
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
    message.imageId = object.imageId ?? undefined;
    message.snapshotId = object.snapshotId ?? undefined;
    message.blockSize = object.blockSize ?? 0;
    message.diskPlacementPolicy = (object.diskPlacementPolicy !== undefined && object.diskPlacementPolicy !== null)
      ? DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
      : undefined;
    message.snapshotScheduleIds = object.snapshotScheduleIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateDiskRequest.$type, CreateDiskRequest);

function createBaseCreateDiskRequest_LabelsEntry(): CreateDiskRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry", key: "", value: "" };
}

export const CreateDiskRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry" as const,

  encode(message: CreateDiskRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDiskRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDiskRequest_LabelsEntry();
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

  fromJSON(object: any): CreateDiskRequest_LabelsEntry {
    return {
      $type: CreateDiskRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateDiskRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDiskRequest_LabelsEntry>, I>>(base?: I): CreateDiskRequest_LabelsEntry {
    return CreateDiskRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDiskRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateDiskRequest_LabelsEntry {
    const message = createBaseCreateDiskRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDiskRequest_LabelsEntry.$type, CreateDiskRequest_LabelsEntry);

function createBaseCreateDiskMetadata(): CreateDiskMetadata {
  return { $type: "yandex.cloud.compute.v1.CreateDiskMetadata", diskId: "" };
}

export const CreateDiskMetadata = {
  $type: "yandex.cloud.compute.v1.CreateDiskMetadata" as const,

  encode(message: CreateDiskMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDiskMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): CreateDiskMetadata {
    return { $type: CreateDiskMetadata.$type, diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "" };
  },

  toJSON(message: CreateDiskMetadata): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDiskMetadata>, I>>(base?: I): CreateDiskMetadata {
    return CreateDiskMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDiskMetadata>, I>>(object: I): CreateDiskMetadata {
    const message = createBaseCreateDiskMetadata();
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDiskMetadata.$type, CreateDiskMetadata);

function createBaseUpdateDiskRequest(): UpdateDiskRequest {
  return {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest",
    diskId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    size: 0,
    diskPlacementPolicy: undefined,
  };
}

export const UpdateDiskRequest = {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest" as const,

  encode(message: UpdateDiskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
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
      UpdateDiskRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
    }
    if (message.diskPlacementPolicy !== undefined) {
      DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDiskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDiskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskId = reader.string();
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

          const entry5 = UpdateDiskRequest_LabelsEntry.decode(reader, reader.uint32());
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
        case 7:
          if (tag !== 58) {
            break;
          }

          message.diskPlacementPolicy = DiskPlacementPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDiskRequest {
    return {
      $type: UpdateDiskRequest.$type,
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
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
      diskPlacementPolicy: isSet(object.diskPlacementPolicy)
        ? DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
        : undefined,
    };
  },

  toJSON(message: UpdateDiskRequest): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
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
    if (message.diskPlacementPolicy !== undefined) {
      obj.diskPlacementPolicy = DiskPlacementPolicy.toJSON(message.diskPlacementPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDiskRequest>, I>>(base?: I): UpdateDiskRequest {
    return UpdateDiskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDiskRequest>, I>>(object: I): UpdateDiskRequest {
    const message = createBaseUpdateDiskRequest();
    message.diskId = object.diskId ?? "";
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
    message.diskPlacementPolicy = (object.diskPlacementPolicy !== undefined && object.diskPlacementPolicy !== null)
      ? DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateDiskRequest.$type, UpdateDiskRequest);

function createBaseUpdateDiskRequest_LabelsEntry(): UpdateDiskRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateDiskRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry" as const,

  encode(message: UpdateDiskRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDiskRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDiskRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateDiskRequest_LabelsEntry {
    return {
      $type: UpdateDiskRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateDiskRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDiskRequest_LabelsEntry>, I>>(base?: I): UpdateDiskRequest_LabelsEntry {
    return UpdateDiskRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDiskRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateDiskRequest_LabelsEntry {
    const message = createBaseUpdateDiskRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDiskRequest_LabelsEntry.$type, UpdateDiskRequest_LabelsEntry);

function createBaseUpdateDiskMetadata(): UpdateDiskMetadata {
  return { $type: "yandex.cloud.compute.v1.UpdateDiskMetadata", diskId: "" };
}

export const UpdateDiskMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateDiskMetadata" as const,

  encode(message: UpdateDiskMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDiskMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): UpdateDiskMetadata {
    return { $type: UpdateDiskMetadata.$type, diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "" };
  },

  toJSON(message: UpdateDiskMetadata): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDiskMetadata>, I>>(base?: I): UpdateDiskMetadata {
    return UpdateDiskMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDiskMetadata>, I>>(object: I): UpdateDiskMetadata {
    const message = createBaseUpdateDiskMetadata();
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDiskMetadata.$type, UpdateDiskMetadata);

function createBaseDeleteDiskRequest(): DeleteDiskRequest {
  return { $type: "yandex.cloud.compute.v1.DeleteDiskRequest", diskId: "" };
}

export const DeleteDiskRequest = {
  $type: "yandex.cloud.compute.v1.DeleteDiskRequest" as const,

  encode(message: DeleteDiskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDiskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDiskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): DeleteDiskRequest {
    return { $type: DeleteDiskRequest.$type, diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "" };
  },

  toJSON(message: DeleteDiskRequest): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDiskRequest>, I>>(base?: I): DeleteDiskRequest {
    return DeleteDiskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDiskRequest>, I>>(object: I): DeleteDiskRequest {
    const message = createBaseDeleteDiskRequest();
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDiskRequest.$type, DeleteDiskRequest);

function createBaseDeleteDiskMetadata(): DeleteDiskMetadata {
  return { $type: "yandex.cloud.compute.v1.DeleteDiskMetadata", diskId: "" };
}

export const DeleteDiskMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteDiskMetadata" as const,

  encode(message: DeleteDiskMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDiskMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): DeleteDiskMetadata {
    return { $type: DeleteDiskMetadata.$type, diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "" };
  },

  toJSON(message: DeleteDiskMetadata): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDiskMetadata>, I>>(base?: I): DeleteDiskMetadata {
    return DeleteDiskMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDiskMetadata>, I>>(object: I): DeleteDiskMetadata {
    const message = createBaseDeleteDiskMetadata();
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDiskMetadata.$type, DeleteDiskMetadata);

function createBaseListDiskOperationsRequest(): ListDiskOperationsRequest {
  return { $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest", diskId: "", pageSize: 0, pageToken: "" };
}

export const ListDiskOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest" as const,

  encode(message: ListDiskOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDiskOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDiskOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskId = reader.string();
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

  fromJSON(object: any): ListDiskOperationsRequest {
    return {
      $type: ListDiskOperationsRequest.$type,
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListDiskOperationsRequest): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDiskOperationsRequest>, I>>(base?: I): ListDiskOperationsRequest {
    return ListDiskOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDiskOperationsRequest>, I>>(object: I): ListDiskOperationsRequest {
    const message = createBaseListDiskOperationsRequest();
    message.diskId = object.diskId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDiskOperationsRequest.$type, ListDiskOperationsRequest);

function createBaseListDiskOperationsResponse(): ListDiskOperationsResponse {
  return { $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListDiskOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse" as const,

  encode(message: ListDiskOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDiskOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDiskOperationsResponse();
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

  fromJSON(object: any): ListDiskOperationsResponse {
    return {
      $type: ListDiskOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDiskOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDiskOperationsResponse>, I>>(base?: I): ListDiskOperationsResponse {
    return ListDiskOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDiskOperationsResponse>, I>>(object: I): ListDiskOperationsResponse {
    const message = createBaseListDiskOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDiskOperationsResponse.$type, ListDiskOperationsResponse);

function createBaseMoveDiskRequest(): MoveDiskRequest {
  return { $type: "yandex.cloud.compute.v1.MoveDiskRequest", diskId: "", destinationFolderId: "" };
}

export const MoveDiskRequest = {
  $type: "yandex.cloud.compute.v1.MoveDiskRequest" as const,

  encode(message: MoveDiskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveDiskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveDiskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destinationFolderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveDiskRequest {
    return {
      $type: MoveDiskRequest.$type,
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveDiskRequest): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveDiskRequest>, I>>(base?: I): MoveDiskRequest {
    return MoveDiskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveDiskRequest>, I>>(object: I): MoveDiskRequest {
    const message = createBaseMoveDiskRequest();
    message.diskId = object.diskId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveDiskRequest.$type, MoveDiskRequest);

function createBaseMoveDiskMetadata(): MoveDiskMetadata {
  return { $type: "yandex.cloud.compute.v1.MoveDiskMetadata", diskId: "", sourceFolderId: "", destinationFolderId: "" };
}

export const MoveDiskMetadata = {
  $type: "yandex.cloud.compute.v1.MoveDiskMetadata" as const,

  encode(message: MoveDiskMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.sourceFolderId !== "") {
      writer.uint32(18).string(message.sourceFolderId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(26).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveDiskMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceFolderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.destinationFolderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveDiskMetadata {
    return {
      $type: MoveDiskMetadata.$type,
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
      sourceFolderId: isSet(object.sourceFolderId) ? globalThis.String(object.sourceFolderId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveDiskMetadata): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    if (message.sourceFolderId !== "") {
      obj.sourceFolderId = message.sourceFolderId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveDiskMetadata>, I>>(base?: I): MoveDiskMetadata {
    return MoveDiskMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveDiskMetadata>, I>>(object: I): MoveDiskMetadata {
    const message = createBaseMoveDiskMetadata();
    message.diskId = object.diskId ?? "";
    message.sourceFolderId = object.sourceFolderId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveDiskMetadata.$type, MoveDiskMetadata);

function createBaseRelocateDiskRequest(): RelocateDiskRequest {
  return { $type: "yandex.cloud.compute.v1.RelocateDiskRequest", diskId: "", destinationZoneId: "" };
}

export const RelocateDiskRequest = {
  $type: "yandex.cloud.compute.v1.RelocateDiskRequest" as const,

  encode(message: RelocateDiskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.destinationZoneId !== "") {
      writer.uint32(18).string(message.destinationZoneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelocateDiskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelocateDiskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destinationZoneId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RelocateDiskRequest {
    return {
      $type: RelocateDiskRequest.$type,
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
      destinationZoneId: isSet(object.destinationZoneId) ? globalThis.String(object.destinationZoneId) : "",
    };
  },

  toJSON(message: RelocateDiskRequest): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    if (message.destinationZoneId !== "") {
      obj.destinationZoneId = message.destinationZoneId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RelocateDiskRequest>, I>>(base?: I): RelocateDiskRequest {
    return RelocateDiskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RelocateDiskRequest>, I>>(object: I): RelocateDiskRequest {
    const message = createBaseRelocateDiskRequest();
    message.diskId = object.diskId ?? "";
    message.destinationZoneId = object.destinationZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RelocateDiskRequest.$type, RelocateDiskRequest);

function createBaseRelocateDiskMetadata(): RelocateDiskMetadata {
  return { $type: "yandex.cloud.compute.v1.RelocateDiskMetadata", diskId: "", sourceZoneId: "", destinationZoneId: "" };
}

export const RelocateDiskMetadata = {
  $type: "yandex.cloud.compute.v1.RelocateDiskMetadata" as const,

  encode(message: RelocateDiskMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.sourceZoneId !== "") {
      writer.uint32(18).string(message.sourceZoneId);
    }
    if (message.destinationZoneId !== "") {
      writer.uint32(26).string(message.destinationZoneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelocateDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelocateDiskMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceZoneId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.destinationZoneId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RelocateDiskMetadata {
    return {
      $type: RelocateDiskMetadata.$type,
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
      sourceZoneId: isSet(object.sourceZoneId) ? globalThis.String(object.sourceZoneId) : "",
      destinationZoneId: isSet(object.destinationZoneId) ? globalThis.String(object.destinationZoneId) : "",
    };
  },

  toJSON(message: RelocateDiskMetadata): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    if (message.sourceZoneId !== "") {
      obj.sourceZoneId = message.sourceZoneId;
    }
    if (message.destinationZoneId !== "") {
      obj.destinationZoneId = message.destinationZoneId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RelocateDiskMetadata>, I>>(base?: I): RelocateDiskMetadata {
    return RelocateDiskMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RelocateDiskMetadata>, I>>(object: I): RelocateDiskMetadata {
    const message = createBaseRelocateDiskMetadata();
    message.diskId = object.diskId ?? "";
    message.sourceZoneId = object.sourceZoneId ?? "";
    message.destinationZoneId = object.destinationZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RelocateDiskMetadata.$type, RelocateDiskMetadata);

function createBaseListDiskSnapshotSchedulesRequest(): ListDiskSnapshotSchedulesRequest {
  return { $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest", diskId: "", pageSize: 0, pageToken: "" };
}

export const ListDiskSnapshotSchedulesRequest = {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest" as const,

  encode(message: ListDiskSnapshotSchedulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDiskSnapshotSchedulesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDiskSnapshotSchedulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskId = reader.string();
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

  fromJSON(object: any): ListDiskSnapshotSchedulesRequest {
    return {
      $type: ListDiskSnapshotSchedulesRequest.$type,
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListDiskSnapshotSchedulesRequest): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDiskSnapshotSchedulesRequest>, I>>(
    base?: I,
  ): ListDiskSnapshotSchedulesRequest {
    return ListDiskSnapshotSchedulesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDiskSnapshotSchedulesRequest>, I>>(
    object: I,
  ): ListDiskSnapshotSchedulesRequest {
    const message = createBaseListDiskSnapshotSchedulesRequest();
    message.diskId = object.diskId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDiskSnapshotSchedulesRequest.$type, ListDiskSnapshotSchedulesRequest);

function createBaseListDiskSnapshotSchedulesResponse(): ListDiskSnapshotSchedulesResponse {
  return {
    $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse",
    snapshotSchedules: [],
    nextPageToken: "",
  };
}

export const ListDiskSnapshotSchedulesResponse = {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse" as const,

  encode(message: ListDiskSnapshotSchedulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.snapshotSchedules) {
      SnapshotSchedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDiskSnapshotSchedulesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDiskSnapshotSchedulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotSchedules.push(SnapshotSchedule.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDiskSnapshotSchedulesResponse {
    return {
      $type: ListDiskSnapshotSchedulesResponse.$type,
      snapshotSchedules: globalThis.Array.isArray(object?.snapshotSchedules)
        ? object.snapshotSchedules.map((e: any) => SnapshotSchedule.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDiskSnapshotSchedulesResponse): unknown {
    const obj: any = {};
    if (message.snapshotSchedules?.length) {
      obj.snapshotSchedules = message.snapshotSchedules.map((e) => SnapshotSchedule.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDiskSnapshotSchedulesResponse>, I>>(
    base?: I,
  ): ListDiskSnapshotSchedulesResponse {
    return ListDiskSnapshotSchedulesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDiskSnapshotSchedulesResponse>, I>>(
    object: I,
  ): ListDiskSnapshotSchedulesResponse {
    const message = createBaseListDiskSnapshotSchedulesResponse();
    message.snapshotSchedules = object.snapshotSchedules?.map((e) => SnapshotSchedule.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDiskSnapshotSchedulesResponse.$type, ListDiskSnapshotSchedulesResponse);

/** A set of methods for managing Disk resources. */
export type DiskServiceService = typeof DiskServiceService;
export const DiskServiceService = {
  /**
   * Returns the specified Disk resource.
   *
   * To get the list of available Disk resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.DiskService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDiskRequest) => Buffer.from(GetDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDiskRequest.decode(value),
    responseSerialize: (value: Disk) => Buffer.from(Disk.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Disk.decode(value),
  },
  /** Retrieves the list of Disk resources in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.DiskService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDisksRequest) => Buffer.from(ListDisksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDisksRequest.decode(value),
    responseSerialize: (value: ListDisksResponse) => Buffer.from(ListDisksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDisksResponse.decode(value),
  },
  /**
   * Creates a disk in the specified folder.
   *
   * You can create an empty disk or restore it from a snapshot or an image.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: {
    path: "/yandex.cloud.compute.v1.DiskService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDiskRequest) => Buffer.from(CreateDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDiskRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified disk. */
  update: {
    path: "/yandex.cloud.compute.v1.DiskService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDiskRequest) => Buffer.from(UpdateDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateDiskRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified disk.
   *
   * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
   * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
   *
   * It is not possible to delete a disk that is attached to an instance.
   */
  delete: {
    path: "/yandex.cloud.compute.v1.DiskService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDiskRequest) => Buffer.from(DeleteDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDiskRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified disk. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.DiskService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDiskOperationsRequest) =>
      Buffer.from(ListDiskOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDiskOperationsRequest.decode(value),
    responseSerialize: (value: ListDiskOperationsResponse) =>
      Buffer.from(ListDiskOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDiskOperationsResponse.decode(value),
  },
  /** Moves the specified disk to another folder of the same cloud. */
  move: {
    path: "/yandex.cloud.compute.v1.DiskService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveDiskRequest) => Buffer.from(MoveDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveDiskRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Moves the specified disk to another availability zone
   *
   * Disk must be detached from instances. To move attached
   * disk use [InstanceService.Relocate] request.
   */
  relocate: {
    path: "/yandex.cloud.compute.v1.DiskService/Relocate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RelocateDiskRequest) => Buffer.from(RelocateDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RelocateDiskRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of snapshot schedules the specified disk is attached to. */
  listSnapshotSchedules: {
    path: "/yandex.cloud.compute.v1.DiskService/ListSnapshotSchedules",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDiskSnapshotSchedulesRequest) =>
      Buffer.from(ListDiskSnapshotSchedulesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDiskSnapshotSchedulesRequest.decode(value),
    responseSerialize: (value: ListDiskSnapshotSchedulesResponse) =>
      Buffer.from(ListDiskSnapshotSchedulesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDiskSnapshotSchedulesResponse.decode(value),
  },
} as const;

export interface DiskServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Disk resource.
   *
   * To get the list of available Disk resources, make a [List] request.
   */
  get: handleUnaryCall<GetDiskRequest, Disk>;
  /** Retrieves the list of Disk resources in the specified folder. */
  list: handleUnaryCall<ListDisksRequest, ListDisksResponse>;
  /**
   * Creates a disk in the specified folder.
   *
   * You can create an empty disk or restore it from a snapshot or an image.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: handleUnaryCall<CreateDiskRequest, Operation>;
  /** Updates the specified disk. */
  update: handleUnaryCall<UpdateDiskRequest, Operation>;
  /**
   * Deletes the specified disk.
   *
   * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
   * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
   *
   * It is not possible to delete a disk that is attached to an instance.
   */
  delete: handleUnaryCall<DeleteDiskRequest, Operation>;
  /** Lists operations for the specified disk. */
  listOperations: handleUnaryCall<ListDiskOperationsRequest, ListDiskOperationsResponse>;
  /** Moves the specified disk to another folder of the same cloud. */
  move: handleUnaryCall<MoveDiskRequest, Operation>;
  /**
   * Moves the specified disk to another availability zone
   *
   * Disk must be detached from instances. To move attached
   * disk use [InstanceService.Relocate] request.
   */
  relocate: handleUnaryCall<RelocateDiskRequest, Operation>;
  /** Retrieves the list of snapshot schedules the specified disk is attached to. */
  listSnapshotSchedules: handleUnaryCall<ListDiskSnapshotSchedulesRequest, ListDiskSnapshotSchedulesResponse>;
}

export interface DiskServiceClient extends Client {
  /**
   * Returns the specified Disk resource.
   *
   * To get the list of available Disk resources, make a [List] request.
   */
  get(request: GetDiskRequest, callback: (error: ServiceError | null, response: Disk) => void): ClientUnaryCall;
  get(
    request: GetDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Disk) => void,
  ): ClientUnaryCall;
  get(
    request: GetDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Disk) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Disk resources in the specified folder. */
  list(
    request: ListDisksRequest,
    callback: (error: ServiceError | null, response: ListDisksResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDisksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDisksResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDisksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDisksResponse) => void,
  ): ClientUnaryCall;
  /**
   * Creates a disk in the specified folder.
   *
   * You can create an empty disk or restore it from a snapshot or an image.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create(
    request: CreateDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified disk. */
  update(
    request: UpdateDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified disk.
   *
   * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
   * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
   *
   * It is not possible to delete a disk that is attached to an instance.
   */
  delete(
    request: DeleteDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified disk. */
  listOperations(
    request: ListDiskOperationsRequest,
    callback: (error: ServiceError | null, response: ListDiskOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListDiskOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDiskOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListDiskOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDiskOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Moves the specified disk to another folder of the same cloud. */
  move(request: MoveDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
  move(
    request: MoveDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Moves the specified disk to another availability zone
   *
   * Disk must be detached from instances. To move attached
   * disk use [InstanceService.Relocate] request.
   */
  relocate(
    request: RelocateDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  relocate(
    request: RelocateDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  relocate(
    request: RelocateDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of snapshot schedules the specified disk is attached to. */
  listSnapshotSchedules(
    request: ListDiskSnapshotSchedulesRequest,
    callback: (error: ServiceError | null, response: ListDiskSnapshotSchedulesResponse) => void,
  ): ClientUnaryCall;
  listSnapshotSchedules(
    request: ListDiskSnapshotSchedulesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDiskSnapshotSchedulesResponse) => void,
  ): ClientUnaryCall;
  listSnapshotSchedules(
    request: ListDiskSnapshotSchedulesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDiskSnapshotSchedulesResponse) => void,
  ): ClientUnaryCall;
}

export const DiskServiceClient = makeGenericClientConstructor(
  DiskServiceService,
  "yandex.cloud.compute.v1.DiskService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DiskServiceClient;
  service: typeof DiskServiceService;
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
