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
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Disk } from "./disk";
import { Snapshot } from "./snapshot";
import { SchedulePolicy, SnapshotSchedule, SnapshotSpec } from "./snapshot_schedule";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetSnapshotScheduleRequest {
  $type: "yandex.cloud.compute.v1.GetSnapshotScheduleRequest";
  /**
   * ID of the snapshot schedule to return.
   *
   * To get a schedule ID, make a [SnapshotScheduleService.List] request.
   */
  snapshotScheduleId: string;
}

export interface ListSnapshotSchedulesRequest {
  $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesRequest";
  /**
   * ID of the folder to list snapshot schedules in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListSnapshotSchedulesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSnapshotSchedulesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters snapshot schedules listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [SnapshotSchedule.name] field.
   * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-schedule`.
   */
  filter: string;
  /**
   * A sorting expression that sorts snapshot schedules listed in the response.
   *
   * The expression must specify the field name from [SnapshotSchedule] and `asc`ending or `desc`ending order,
   * e.g. `createdAt desc`.
   *
   * Default value: `id asc`.
   */
  orderBy: string;
}

export interface ListSnapshotSchedulesResponse {
  $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesResponse";
  /** List of snapshot schedules in the specified folder. */
  snapshotSchedules: SnapshotSchedule[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListSnapshotSchedulesRequest.page_size], use `next_page_token` as the value
   * for the [ListSnapshotSchedulesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSnapshotScheduleRequest {
  $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest";
  /**
   * ID of the folder to create a snapshot schedule in.
   *
   * Snapshots are created in the same folder as the schedule, even if disks from other folders are attached
   * to the schedule.
   *
   * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the snapshot schedule.
   *
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the snapshot schedule. */
  description: string;
  /** Snapshot schedule labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Frequency settings of the snapshot schedule. */
  schedulePolicy?:
    | SchedulePolicy
    | undefined;
  /**
   * Retention period of the snapshot schedule. Once a snapshot created by the schedule reaches this age, it is
   * automatically deleted.
   */
  retentionPeriod?:
    | Duration
    | undefined;
  /**
   * Retention count of the snapshot schedule. Once the number of snapshots created by the schedule exceeds this
   * number, the oldest ones are automatically deleted. E.g. if the number is 5, the first snapshot is deleted
   * after the sixth one is created, the second is deleted after the seventh one is created, and so on.
   */
  snapshotCount?:
    | number
    | undefined;
  /** Attributes of snapshots created by the snapshot schedule. */
  snapshotSpec?:
    | SnapshotSpec
    | undefined;
  /**
   * List of IDs of the disks attached to the snapshot schedule.
   *
   * To get a disk ID, make a [yandex.cloud.compute.v1.DiskService.List] request.
   */
  diskIds: string[];
}

export interface CreateSnapshotScheduleRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSnapshotScheduleMetadata {
  $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleMetadata";
  /** ID of the snapshot schedule that is being created. */
  snapshotScheduleId: string;
}

export interface UpdateSnapshotScheduleRequest {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest";
  /**
   * ID of the snapshot schedule to update.
   *
   * To get the snapshot schedule ID, make a [SnapshotScheduleService.List] request.
   */
  snapshotScheduleId: string;
  /** Field mask that specifies which attributes of the snapshot schedule should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the snapshot schedule.
   *
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the snapshot schedule. */
  description: string;
  /**
   * Snapshot schedule labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [SnapshotScheduleService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /** New frequency settings of the snapshot schedule. */
  schedulePolicy?:
    | SchedulePolicy
    | undefined;
  /**
   * Retention period of the snapshot schedule. Once a snapshot created by the schedule reaches this age, it is
   * automatically deleted.
   */
  retentionPeriod?:
    | Duration
    | undefined;
  /**
   * Retention count of the snapshot schedule. Once the number of snapshots created by the schedule exceeds this
   * number, the oldest ones are automatically deleted. E.g. if the number is 5, the first snapshot is deleted
   * after the sixth one is created, the second is deleted after the seventh one is created, and so on.
   */
  snapshotCount?:
    | number
    | undefined;
  /** New attributes of snapshots created by the snapshot schedule. */
  snapshotSpec?: SnapshotSpec | undefined;
}

export interface UpdateSnapshotScheduleRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSnapshotScheduleMetadata {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleMetadata";
  /** ID of the snapshot schedule that is being updated. */
  snapshotScheduleId: string;
}

export interface DeleteSnapshotScheduleRequest {
  $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleRequest";
  /**
   * ID of the snapshot schedule to delete.
   *
   * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
   */
  snapshotScheduleId: string;
}

export interface DeleteSnapshotScheduleMetadata {
  $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleMetadata";
  /** ID of the snapshot schedule that is being deleted. */
  snapshotScheduleId: string;
}

export interface DisableSnapshotScheduleRequest {
  $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleRequest";
  /**
   * ID of the snapshot schedule to disable.
   *
   * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
   */
  snapshotScheduleId: string;
}

export interface DisableSnapshotScheduleMetadata {
  $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleMetadata";
  /** ID of the snapshot schedule that is being disabled. */
  snapshotScheduleId: string;
}

export interface EnableSnapshotScheduleRequest {
  $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleRequest";
  /**
   * ID of the snapshot schedule to enable.
   *
   * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
   */
  snapshotScheduleId: string;
}

export interface EnableSnapshotScheduleMetadata {
  $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleMetadata";
  /** ID of the snapshot schedule that is being enabled. */
  snapshotScheduleId: string;
}

export interface ListSnapshotScheduleOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsRequest";
  /**
   * ID of the snapshot schedule to list operations for.
   *
   * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
   */
  snapshotScheduleId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListSnapshotScheduleOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSnapshotScheduleOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSnapshotScheduleOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsResponse";
  /** List of operations for the specified snapshot schedule. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListSnapshotScheduleOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListSnapshotScheduleOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListSnapshotScheduleSnapshotsRequest {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsRequest";
  /**
   * ID of the snapshot schedule to list created snapshots for.
   *
   * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
   */
  snapshotScheduleId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListSnapshotScheduleOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSnapshotScheduleOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSnapshotScheduleSnapshotsResponse {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsResponse";
  /** List of snapshots created by the specified snapshot schedule. */
  snapshots: Snapshot[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListSnapshotScheduleSnapshotsRequest.page_size], use `next_page_token` as the value
   * for the [ListSnapshotScheduleSnapshotsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListSnapshotScheduleDisksRequest {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksRequest";
  /**
   * ID of the snapshot schedule to list attached disks for.
   *
   * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
   */
  snapshotScheduleId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListSnapshotScheduleDisksResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSnapshotScheduleDisksResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSnapshotScheduleDisksResponse {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksResponse";
  /** List of disks attached to the specified snapshot schedule. */
  disks: Disk[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListSnapshotScheduleDisksRequest.page_size], use `next_page_token` as the value
   * for the [ListSnapshotScheduleDisksRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateSnapshotScheduleDisksRequest {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksRequest";
  /**
   * ID of the snapshot schedule to update.
   *
   * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
   */
  snapshotScheduleId: string;
  /**
   * List of IDs of the disks to detach from the specified schedule.
   *
   * To get an ID of a disk attached to the schedule, make a [SnapshotScheduleService.ListDisks] request.
   */
  remove: string[];
  /**
   * List of IDs of the disks to attach to the specified schedule.
   *
   * To get a disk ID, make a [yandex.cloud.compute.v1.DiskService.List] request.
   */
  add: string[];
}

export interface UpdateSnapshotScheduleDisksMetadata {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksMetadata";
  /** ID of the snapshot schedule that is being updated. */
  snapshotScheduleId: string;
}

function createBaseGetSnapshotScheduleRequest(): GetSnapshotScheduleRequest {
  return { $type: "yandex.cloud.compute.v1.GetSnapshotScheduleRequest", snapshotScheduleId: "" };
}

export const GetSnapshotScheduleRequest = {
  $type: "yandex.cloud.compute.v1.GetSnapshotScheduleRequest" as const,

  encode(message: GetSnapshotScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSnapshotScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSnapshotScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSnapshotScheduleRequest {
    return {
      $type: GetSnapshotScheduleRequest.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: GetSnapshotScheduleRequest): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSnapshotScheduleRequest>, I>>(base?: I): GetSnapshotScheduleRequest {
    return GetSnapshotScheduleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSnapshotScheduleRequest>, I>>(object: I): GetSnapshotScheduleRequest {
    const message = createBaseGetSnapshotScheduleRequest();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSnapshotScheduleRequest.$type, GetSnapshotScheduleRequest);

function createBaseListSnapshotSchedulesRequest(): ListSnapshotSchedulesRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListSnapshotSchedulesRequest = {
  $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesRequest" as const,

  encode(message: ListSnapshotSchedulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotSchedulesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotSchedulesRequest();
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

  fromJSON(object: any): ListSnapshotSchedulesRequest {
    return {
      $type: ListSnapshotSchedulesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListSnapshotSchedulesRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListSnapshotSchedulesRequest>, I>>(base?: I): ListSnapshotSchedulesRequest {
    return ListSnapshotSchedulesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotSchedulesRequest>, I>>(object: I): ListSnapshotSchedulesRequest {
    const message = createBaseListSnapshotSchedulesRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotSchedulesRequest.$type, ListSnapshotSchedulesRequest);

function createBaseListSnapshotSchedulesResponse(): ListSnapshotSchedulesResponse {
  return { $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesResponse", snapshotSchedules: [], nextPageToken: "" };
}

export const ListSnapshotSchedulesResponse = {
  $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesResponse" as const,

  encode(message: ListSnapshotSchedulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.snapshotSchedules) {
      SnapshotSchedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotSchedulesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotSchedulesResponse();
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

  fromJSON(object: any): ListSnapshotSchedulesResponse {
    return {
      $type: ListSnapshotSchedulesResponse.$type,
      snapshotSchedules: globalThis.Array.isArray(object?.snapshotSchedules)
        ? object.snapshotSchedules.map((e: any) => SnapshotSchedule.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSnapshotSchedulesResponse): unknown {
    const obj: any = {};
    if (message.snapshotSchedules?.length) {
      obj.snapshotSchedules = message.snapshotSchedules.map((e) => SnapshotSchedule.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotSchedulesResponse>, I>>(base?: I): ListSnapshotSchedulesResponse {
    return ListSnapshotSchedulesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotSchedulesResponse>, I>>(
    object: I,
  ): ListSnapshotSchedulesResponse {
    const message = createBaseListSnapshotSchedulesResponse();
    message.snapshotSchedules = object.snapshotSchedules?.map((e) => SnapshotSchedule.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotSchedulesResponse.$type, ListSnapshotSchedulesResponse);

function createBaseCreateSnapshotScheduleRequest(): CreateSnapshotScheduleRequest {
  return {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    schedulePolicy: undefined,
    retentionPeriod: undefined,
    snapshotCount: undefined,
    snapshotSpec: undefined,
    diskIds: [],
  };
}

export const CreateSnapshotScheduleRequest = {
  $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest" as const,

  encode(message: CreateSnapshotScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateSnapshotScheduleRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.schedulePolicy !== undefined) {
      SchedulePolicy.encode(message.schedulePolicy, writer.uint32(42).fork()).ldelim();
    }
    if (message.retentionPeriod !== undefined) {
      Duration.encode(message.retentionPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.snapshotCount !== undefined) {
      writer.uint32(56).int64(message.snapshotCount);
    }
    if (message.snapshotSpec !== undefined) {
      SnapshotSpec.encode(message.snapshotSpec, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.diskIds) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSnapshotScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSnapshotScheduleRequest();
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

          const entry4 = CreateSnapshotScheduleRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.schedulePolicy = SchedulePolicy.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.retentionPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.snapshotCount = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.snapshotSpec = SnapshotSpec.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.diskIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSnapshotScheduleRequest {
    return {
      $type: CreateSnapshotScheduleRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      schedulePolicy: isSet(object.schedulePolicy) ? SchedulePolicy.fromJSON(object.schedulePolicy) : undefined,
      retentionPeriod: isSet(object.retentionPeriod) ? Duration.fromJSON(object.retentionPeriod) : undefined,
      snapshotCount: isSet(object.snapshotCount) ? globalThis.Number(object.snapshotCount) : undefined,
      snapshotSpec: isSet(object.snapshotSpec) ? SnapshotSpec.fromJSON(object.snapshotSpec) : undefined,
      diskIds: globalThis.Array.isArray(object?.diskIds) ? object.diskIds.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: CreateSnapshotScheduleRequest): unknown {
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
    if (message.schedulePolicy !== undefined) {
      obj.schedulePolicy = SchedulePolicy.toJSON(message.schedulePolicy);
    }
    if (message.retentionPeriod !== undefined) {
      obj.retentionPeriod = Duration.toJSON(message.retentionPeriod);
    }
    if (message.snapshotCount !== undefined) {
      obj.snapshotCount = Math.round(message.snapshotCount);
    }
    if (message.snapshotSpec !== undefined) {
      obj.snapshotSpec = SnapshotSpec.toJSON(message.snapshotSpec);
    }
    if (message.diskIds?.length) {
      obj.diskIds = message.diskIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSnapshotScheduleRequest>, I>>(base?: I): CreateSnapshotScheduleRequest {
    return CreateSnapshotScheduleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSnapshotScheduleRequest>, I>>(
    object: I,
  ): CreateSnapshotScheduleRequest {
    const message = createBaseCreateSnapshotScheduleRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.schedulePolicy = (object.schedulePolicy !== undefined && object.schedulePolicy !== null)
      ? SchedulePolicy.fromPartial(object.schedulePolicy)
      : undefined;
    message.retentionPeriod = (object.retentionPeriod !== undefined && object.retentionPeriod !== null)
      ? Duration.fromPartial(object.retentionPeriod)
      : undefined;
    message.snapshotCount = object.snapshotCount ?? undefined;
    message.snapshotSpec = (object.snapshotSpec !== undefined && object.snapshotSpec !== null)
      ? SnapshotSpec.fromPartial(object.snapshotSpec)
      : undefined;
    message.diskIds = object.diskIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateSnapshotScheduleRequest.$type, CreateSnapshotScheduleRequest);

function createBaseCreateSnapshotScheduleRequest_LabelsEntry(): CreateSnapshotScheduleRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest.LabelsEntry", key: "", value: "" };
}

export const CreateSnapshotScheduleRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest.LabelsEntry" as const,

  encode(message: CreateSnapshotScheduleRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSnapshotScheduleRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSnapshotScheduleRequest_LabelsEntry();
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

  fromJSON(object: any): CreateSnapshotScheduleRequest_LabelsEntry {
    return {
      $type: CreateSnapshotScheduleRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateSnapshotScheduleRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSnapshotScheduleRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateSnapshotScheduleRequest_LabelsEntry {
    return CreateSnapshotScheduleRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSnapshotScheduleRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateSnapshotScheduleRequest_LabelsEntry {
    const message = createBaseCreateSnapshotScheduleRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSnapshotScheduleRequest_LabelsEntry.$type, CreateSnapshotScheduleRequest_LabelsEntry);

function createBaseCreateSnapshotScheduleMetadata(): CreateSnapshotScheduleMetadata {
  return { $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleMetadata", snapshotScheduleId: "" };
}

export const CreateSnapshotScheduleMetadata = {
  $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleMetadata" as const,

  encode(message: CreateSnapshotScheduleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSnapshotScheduleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSnapshotScheduleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSnapshotScheduleMetadata {
    return {
      $type: CreateSnapshotScheduleMetadata.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: CreateSnapshotScheduleMetadata): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSnapshotScheduleMetadata>, I>>(base?: I): CreateSnapshotScheduleMetadata {
    return CreateSnapshotScheduleMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSnapshotScheduleMetadata>, I>>(
    object: I,
  ): CreateSnapshotScheduleMetadata {
    const message = createBaseCreateSnapshotScheduleMetadata();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSnapshotScheduleMetadata.$type, CreateSnapshotScheduleMetadata);

function createBaseUpdateSnapshotScheduleRequest(): UpdateSnapshotScheduleRequest {
  return {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest",
    snapshotScheduleId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    schedulePolicy: undefined,
    retentionPeriod: undefined,
    snapshotCount: undefined,
    snapshotSpec: undefined,
  };
}

export const UpdateSnapshotScheduleRequest = {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest" as const,

  encode(message: UpdateSnapshotScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
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
      UpdateSnapshotScheduleRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.schedulePolicy !== undefined) {
      SchedulePolicy.encode(message.schedulePolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.retentionPeriod !== undefined) {
      Duration.encode(message.retentionPeriod, writer.uint32(58).fork()).ldelim();
    }
    if (message.snapshotCount !== undefined) {
      writer.uint32(64).int64(message.snapshotCount);
    }
    if (message.snapshotSpec !== undefined) {
      SnapshotSpec.encode(message.snapshotSpec, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSnapshotScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSnapshotScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
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

          const entry5 = UpdateSnapshotScheduleRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.schedulePolicy = SchedulePolicy.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.retentionPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.snapshotCount = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.snapshotSpec = SnapshotSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSnapshotScheduleRequest {
    return {
      $type: UpdateSnapshotScheduleRequest.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      schedulePolicy: isSet(object.schedulePolicy) ? SchedulePolicy.fromJSON(object.schedulePolicy) : undefined,
      retentionPeriod: isSet(object.retentionPeriod) ? Duration.fromJSON(object.retentionPeriod) : undefined,
      snapshotCount: isSet(object.snapshotCount) ? globalThis.Number(object.snapshotCount) : undefined,
      snapshotSpec: isSet(object.snapshotSpec) ? SnapshotSpec.fromJSON(object.snapshotSpec) : undefined,
    };
  },

  toJSON(message: UpdateSnapshotScheduleRequest): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
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
    if (message.schedulePolicy !== undefined) {
      obj.schedulePolicy = SchedulePolicy.toJSON(message.schedulePolicy);
    }
    if (message.retentionPeriod !== undefined) {
      obj.retentionPeriod = Duration.toJSON(message.retentionPeriod);
    }
    if (message.snapshotCount !== undefined) {
      obj.snapshotCount = Math.round(message.snapshotCount);
    }
    if (message.snapshotSpec !== undefined) {
      obj.snapshotSpec = SnapshotSpec.toJSON(message.snapshotSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSnapshotScheduleRequest>, I>>(base?: I): UpdateSnapshotScheduleRequest {
    return UpdateSnapshotScheduleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSnapshotScheduleRequest>, I>>(
    object: I,
  ): UpdateSnapshotScheduleRequest {
    const message = createBaseUpdateSnapshotScheduleRequest();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.schedulePolicy = (object.schedulePolicy !== undefined && object.schedulePolicy !== null)
      ? SchedulePolicy.fromPartial(object.schedulePolicy)
      : undefined;
    message.retentionPeriod = (object.retentionPeriod !== undefined && object.retentionPeriod !== null)
      ? Duration.fromPartial(object.retentionPeriod)
      : undefined;
    message.snapshotCount = object.snapshotCount ?? undefined;
    message.snapshotSpec = (object.snapshotSpec !== undefined && object.snapshotSpec !== null)
      ? SnapshotSpec.fromPartial(object.snapshotSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateSnapshotScheduleRequest.$type, UpdateSnapshotScheduleRequest);

function createBaseUpdateSnapshotScheduleRequest_LabelsEntry(): UpdateSnapshotScheduleRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateSnapshotScheduleRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest.LabelsEntry" as const,

  encode(message: UpdateSnapshotScheduleRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSnapshotScheduleRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSnapshotScheduleRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateSnapshotScheduleRequest_LabelsEntry {
    return {
      $type: UpdateSnapshotScheduleRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateSnapshotScheduleRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSnapshotScheduleRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateSnapshotScheduleRequest_LabelsEntry {
    return UpdateSnapshotScheduleRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSnapshotScheduleRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateSnapshotScheduleRequest_LabelsEntry {
    const message = createBaseUpdateSnapshotScheduleRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSnapshotScheduleRequest_LabelsEntry.$type, UpdateSnapshotScheduleRequest_LabelsEntry);

function createBaseUpdateSnapshotScheduleMetadata(): UpdateSnapshotScheduleMetadata {
  return { $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleMetadata", snapshotScheduleId: "" };
}

export const UpdateSnapshotScheduleMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleMetadata" as const,

  encode(message: UpdateSnapshotScheduleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSnapshotScheduleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSnapshotScheduleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSnapshotScheduleMetadata {
    return {
      $type: UpdateSnapshotScheduleMetadata.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: UpdateSnapshotScheduleMetadata): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSnapshotScheduleMetadata>, I>>(base?: I): UpdateSnapshotScheduleMetadata {
    return UpdateSnapshotScheduleMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSnapshotScheduleMetadata>, I>>(
    object: I,
  ): UpdateSnapshotScheduleMetadata {
    const message = createBaseUpdateSnapshotScheduleMetadata();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSnapshotScheduleMetadata.$type, UpdateSnapshotScheduleMetadata);

function createBaseDeleteSnapshotScheduleRequest(): DeleteSnapshotScheduleRequest {
  return { $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleRequest", snapshotScheduleId: "" };
}

export const DeleteSnapshotScheduleRequest = {
  $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleRequest" as const,

  encode(message: DeleteSnapshotScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSnapshotScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSnapshotScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSnapshotScheduleRequest {
    return {
      $type: DeleteSnapshotScheduleRequest.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: DeleteSnapshotScheduleRequest): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSnapshotScheduleRequest>, I>>(base?: I): DeleteSnapshotScheduleRequest {
    return DeleteSnapshotScheduleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSnapshotScheduleRequest>, I>>(
    object: I,
  ): DeleteSnapshotScheduleRequest {
    const message = createBaseDeleteSnapshotScheduleRequest();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSnapshotScheduleRequest.$type, DeleteSnapshotScheduleRequest);

function createBaseDeleteSnapshotScheduleMetadata(): DeleteSnapshotScheduleMetadata {
  return { $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleMetadata", snapshotScheduleId: "" };
}

export const DeleteSnapshotScheduleMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleMetadata" as const,

  encode(message: DeleteSnapshotScheduleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSnapshotScheduleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSnapshotScheduleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSnapshotScheduleMetadata {
    return {
      $type: DeleteSnapshotScheduleMetadata.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: DeleteSnapshotScheduleMetadata): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSnapshotScheduleMetadata>, I>>(base?: I): DeleteSnapshotScheduleMetadata {
    return DeleteSnapshotScheduleMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSnapshotScheduleMetadata>, I>>(
    object: I,
  ): DeleteSnapshotScheduleMetadata {
    const message = createBaseDeleteSnapshotScheduleMetadata();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSnapshotScheduleMetadata.$type, DeleteSnapshotScheduleMetadata);

function createBaseDisableSnapshotScheduleRequest(): DisableSnapshotScheduleRequest {
  return { $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleRequest", snapshotScheduleId: "" };
}

export const DisableSnapshotScheduleRequest = {
  $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleRequest" as const,

  encode(message: DisableSnapshotScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisableSnapshotScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableSnapshotScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DisableSnapshotScheduleRequest {
    return {
      $type: DisableSnapshotScheduleRequest.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: DisableSnapshotScheduleRequest): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DisableSnapshotScheduleRequest>, I>>(base?: I): DisableSnapshotScheduleRequest {
    return DisableSnapshotScheduleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DisableSnapshotScheduleRequest>, I>>(
    object: I,
  ): DisableSnapshotScheduleRequest {
    const message = createBaseDisableSnapshotScheduleRequest();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DisableSnapshotScheduleRequest.$type, DisableSnapshotScheduleRequest);

function createBaseDisableSnapshotScheduleMetadata(): DisableSnapshotScheduleMetadata {
  return { $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleMetadata", snapshotScheduleId: "" };
}

export const DisableSnapshotScheduleMetadata = {
  $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleMetadata" as const,

  encode(message: DisableSnapshotScheduleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisableSnapshotScheduleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableSnapshotScheduleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DisableSnapshotScheduleMetadata {
    return {
      $type: DisableSnapshotScheduleMetadata.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: DisableSnapshotScheduleMetadata): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DisableSnapshotScheduleMetadata>, I>>(base?: I): DisableSnapshotScheduleMetadata {
    return DisableSnapshotScheduleMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DisableSnapshotScheduleMetadata>, I>>(
    object: I,
  ): DisableSnapshotScheduleMetadata {
    const message = createBaseDisableSnapshotScheduleMetadata();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DisableSnapshotScheduleMetadata.$type, DisableSnapshotScheduleMetadata);

function createBaseEnableSnapshotScheduleRequest(): EnableSnapshotScheduleRequest {
  return { $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleRequest", snapshotScheduleId: "" };
}

export const EnableSnapshotScheduleRequest = {
  $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleRequest" as const,

  encode(message: EnableSnapshotScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableSnapshotScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableSnapshotScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnableSnapshotScheduleRequest {
    return {
      $type: EnableSnapshotScheduleRequest.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: EnableSnapshotScheduleRequest): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnableSnapshotScheduleRequest>, I>>(base?: I): EnableSnapshotScheduleRequest {
    return EnableSnapshotScheduleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnableSnapshotScheduleRequest>, I>>(
    object: I,
  ): EnableSnapshotScheduleRequest {
    const message = createBaseEnableSnapshotScheduleRequest();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnableSnapshotScheduleRequest.$type, EnableSnapshotScheduleRequest);

function createBaseEnableSnapshotScheduleMetadata(): EnableSnapshotScheduleMetadata {
  return { $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleMetadata", snapshotScheduleId: "" };
}

export const EnableSnapshotScheduleMetadata = {
  $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleMetadata" as const,

  encode(message: EnableSnapshotScheduleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableSnapshotScheduleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableSnapshotScheduleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnableSnapshotScheduleMetadata {
    return {
      $type: EnableSnapshotScheduleMetadata.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: EnableSnapshotScheduleMetadata): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnableSnapshotScheduleMetadata>, I>>(base?: I): EnableSnapshotScheduleMetadata {
    return EnableSnapshotScheduleMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnableSnapshotScheduleMetadata>, I>>(
    object: I,
  ): EnableSnapshotScheduleMetadata {
    const message = createBaseEnableSnapshotScheduleMetadata();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnableSnapshotScheduleMetadata.$type, EnableSnapshotScheduleMetadata);

function createBaseListSnapshotScheduleOperationsRequest(): ListSnapshotScheduleOperationsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsRequest",
    snapshotScheduleId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListSnapshotScheduleOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsRequest" as const,

  encode(message: ListSnapshotScheduleOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotScheduleOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotScheduleOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
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

  fromJSON(object: any): ListSnapshotScheduleOperationsRequest {
    return {
      $type: ListSnapshotScheduleOperationsRequest.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSnapshotScheduleOperationsRequest): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotScheduleOperationsRequest>, I>>(
    base?: I,
  ): ListSnapshotScheduleOperationsRequest {
    return ListSnapshotScheduleOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotScheduleOperationsRequest>, I>>(
    object: I,
  ): ListSnapshotScheduleOperationsRequest {
    const message = createBaseListSnapshotScheduleOperationsRequest();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotScheduleOperationsRequest.$type, ListSnapshotScheduleOperationsRequest);

function createBaseListSnapshotScheduleOperationsResponse(): ListSnapshotScheduleOperationsResponse {
  return { $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListSnapshotScheduleOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsResponse" as const,

  encode(message: ListSnapshotScheduleOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotScheduleOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotScheduleOperationsResponse();
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

  fromJSON(object: any): ListSnapshotScheduleOperationsResponse {
    return {
      $type: ListSnapshotScheduleOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSnapshotScheduleOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotScheduleOperationsResponse>, I>>(
    base?: I,
  ): ListSnapshotScheduleOperationsResponse {
    return ListSnapshotScheduleOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotScheduleOperationsResponse>, I>>(
    object: I,
  ): ListSnapshotScheduleOperationsResponse {
    const message = createBaseListSnapshotScheduleOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotScheduleOperationsResponse.$type, ListSnapshotScheduleOperationsResponse);

function createBaseListSnapshotScheduleSnapshotsRequest(): ListSnapshotScheduleSnapshotsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsRequest",
    snapshotScheduleId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListSnapshotScheduleSnapshotsRequest = {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsRequest" as const,

  encode(message: ListSnapshotScheduleSnapshotsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotScheduleSnapshotsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotScheduleSnapshotsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
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

  fromJSON(object: any): ListSnapshotScheduleSnapshotsRequest {
    return {
      $type: ListSnapshotScheduleSnapshotsRequest.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSnapshotScheduleSnapshotsRequest): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotScheduleSnapshotsRequest>, I>>(
    base?: I,
  ): ListSnapshotScheduleSnapshotsRequest {
    return ListSnapshotScheduleSnapshotsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotScheduleSnapshotsRequest>, I>>(
    object: I,
  ): ListSnapshotScheduleSnapshotsRequest {
    const message = createBaseListSnapshotScheduleSnapshotsRequest();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotScheduleSnapshotsRequest.$type, ListSnapshotScheduleSnapshotsRequest);

function createBaseListSnapshotScheduleSnapshotsResponse(): ListSnapshotScheduleSnapshotsResponse {
  return { $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsResponse", snapshots: [], nextPageToken: "" };
}

export const ListSnapshotScheduleSnapshotsResponse = {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsResponse" as const,

  encode(message: ListSnapshotScheduleSnapshotsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotScheduleSnapshotsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotScheduleSnapshotsResponse();
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

  fromJSON(object: any): ListSnapshotScheduleSnapshotsResponse {
    return {
      $type: ListSnapshotScheduleSnapshotsResponse.$type,
      snapshots: globalThis.Array.isArray(object?.snapshots)
        ? object.snapshots.map((e: any) => Snapshot.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSnapshotScheduleSnapshotsResponse): unknown {
    const obj: any = {};
    if (message.snapshots?.length) {
      obj.snapshots = message.snapshots.map((e) => Snapshot.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotScheduleSnapshotsResponse>, I>>(
    base?: I,
  ): ListSnapshotScheduleSnapshotsResponse {
    return ListSnapshotScheduleSnapshotsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotScheduleSnapshotsResponse>, I>>(
    object: I,
  ): ListSnapshotScheduleSnapshotsResponse {
    const message = createBaseListSnapshotScheduleSnapshotsResponse();
    message.snapshots = object.snapshots?.map((e) => Snapshot.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotScheduleSnapshotsResponse.$type, ListSnapshotScheduleSnapshotsResponse);

function createBaseListSnapshotScheduleDisksRequest(): ListSnapshotScheduleDisksRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksRequest",
    snapshotScheduleId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListSnapshotScheduleDisksRequest = {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksRequest" as const,

  encode(message: ListSnapshotScheduleDisksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotScheduleDisksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotScheduleDisksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
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

  fromJSON(object: any): ListSnapshotScheduleDisksRequest {
    return {
      $type: ListSnapshotScheduleDisksRequest.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSnapshotScheduleDisksRequest): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotScheduleDisksRequest>, I>>(
    base?: I,
  ): ListSnapshotScheduleDisksRequest {
    return ListSnapshotScheduleDisksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotScheduleDisksRequest>, I>>(
    object: I,
  ): ListSnapshotScheduleDisksRequest {
    const message = createBaseListSnapshotScheduleDisksRequest();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotScheduleDisksRequest.$type, ListSnapshotScheduleDisksRequest);

function createBaseListSnapshotScheduleDisksResponse(): ListSnapshotScheduleDisksResponse {
  return { $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksResponse", disks: [], nextPageToken: "" };
}

export const ListSnapshotScheduleDisksResponse = {
  $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksResponse" as const,

  encode(message: ListSnapshotScheduleDisksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.disks) {
      Disk.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSnapshotScheduleDisksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSnapshotScheduleDisksResponse();
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

  fromJSON(object: any): ListSnapshotScheduleDisksResponse {
    return {
      $type: ListSnapshotScheduleDisksResponse.$type,
      disks: globalThis.Array.isArray(object?.disks) ? object.disks.map((e: any) => Disk.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSnapshotScheduleDisksResponse): unknown {
    const obj: any = {};
    if (message.disks?.length) {
      obj.disks = message.disks.map((e) => Disk.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSnapshotScheduleDisksResponse>, I>>(
    base?: I,
  ): ListSnapshotScheduleDisksResponse {
    return ListSnapshotScheduleDisksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSnapshotScheduleDisksResponse>, I>>(
    object: I,
  ): ListSnapshotScheduleDisksResponse {
    const message = createBaseListSnapshotScheduleDisksResponse();
    message.disks = object.disks?.map((e) => Disk.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSnapshotScheduleDisksResponse.$type, ListSnapshotScheduleDisksResponse);

function createBaseUpdateSnapshotScheduleDisksRequest(): UpdateSnapshotScheduleDisksRequest {
  return {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksRequest",
    snapshotScheduleId: "",
    remove: [],
    add: [],
  };
}

export const UpdateSnapshotScheduleDisksRequest = {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksRequest" as const,

  encode(message: UpdateSnapshotScheduleDisksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    for (const v of message.remove) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.add) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSnapshotScheduleDisksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSnapshotScheduleDisksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remove.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.add.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSnapshotScheduleDisksRequest {
    return {
      $type: UpdateSnapshotScheduleDisksRequest.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
      remove: globalThis.Array.isArray(object?.remove) ? object.remove.map((e: any) => globalThis.String(e)) : [],
      add: globalThis.Array.isArray(object?.add) ? object.add.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: UpdateSnapshotScheduleDisksRequest): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    if (message.remove?.length) {
      obj.remove = message.remove;
    }
    if (message.add?.length) {
      obj.add = message.add;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSnapshotScheduleDisksRequest>, I>>(
    base?: I,
  ): UpdateSnapshotScheduleDisksRequest {
    return UpdateSnapshotScheduleDisksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSnapshotScheduleDisksRequest>, I>>(
    object: I,
  ): UpdateSnapshotScheduleDisksRequest {
    const message = createBaseUpdateSnapshotScheduleDisksRequest();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    message.remove = object.remove?.map((e) => e) || [];
    message.add = object.add?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateSnapshotScheduleDisksRequest.$type, UpdateSnapshotScheduleDisksRequest);

function createBaseUpdateSnapshotScheduleDisksMetadata(): UpdateSnapshotScheduleDisksMetadata {
  return { $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksMetadata", snapshotScheduleId: "" };
}

export const UpdateSnapshotScheduleDisksMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksMetadata" as const,

  encode(message: UpdateSnapshotScheduleDisksMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotScheduleId !== "") {
      writer.uint32(10).string(message.snapshotScheduleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSnapshotScheduleDisksMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSnapshotScheduleDisksMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshotScheduleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSnapshotScheduleDisksMetadata {
    return {
      $type: UpdateSnapshotScheduleDisksMetadata.$type,
      snapshotScheduleId: isSet(object.snapshotScheduleId) ? globalThis.String(object.snapshotScheduleId) : "",
    };
  },

  toJSON(message: UpdateSnapshotScheduleDisksMetadata): unknown {
    const obj: any = {};
    if (message.snapshotScheduleId !== "") {
      obj.snapshotScheduleId = message.snapshotScheduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSnapshotScheduleDisksMetadata>, I>>(
    base?: I,
  ): UpdateSnapshotScheduleDisksMetadata {
    return UpdateSnapshotScheduleDisksMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSnapshotScheduleDisksMetadata>, I>>(
    object: I,
  ): UpdateSnapshotScheduleDisksMetadata {
    const message = createBaseUpdateSnapshotScheduleDisksMetadata();
    message.snapshotScheduleId = object.snapshotScheduleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSnapshotScheduleDisksMetadata.$type, UpdateSnapshotScheduleDisksMetadata);

/** A set of methods for managing snapshot schedules. */
export type SnapshotScheduleServiceService = typeof SnapshotScheduleServiceService;
export const SnapshotScheduleServiceService = {
  /**
   * Returns the specified snapshot schedule.
   *
   * To get the list of available snapshot schedules, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSnapshotScheduleRequest) =>
      Buffer.from(GetSnapshotScheduleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSnapshotScheduleRequest.decode(value),
    responseSerialize: (value: SnapshotSchedule) => Buffer.from(SnapshotSchedule.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SnapshotSchedule.decode(value),
  },
  /** Retrieves the list of snapshot schedules in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSnapshotSchedulesRequest) =>
      Buffer.from(ListSnapshotSchedulesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSnapshotSchedulesRequest.decode(value),
    responseSerialize: (value: ListSnapshotSchedulesResponse) =>
      Buffer.from(ListSnapshotSchedulesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSnapshotSchedulesResponse.decode(value),
  },
  /** Creates a snapshot schedule in the specified folder. */
  create: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSnapshotScheduleRequest) =>
      Buffer.from(CreateSnapshotScheduleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSnapshotScheduleRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified snapshot schedule.
   *
   * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  update: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSnapshotScheduleRequest) =>
      Buffer.from(UpdateSnapshotScheduleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSnapshotScheduleRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified snapshot schedule.
   *
   * Deleting a snapshot schedule removes its data permanently and is irreversible. However, deleting a schedule
   * does not delete any snapshots created by the schedule. You must delete snapshots separately.
   *
   * The schedule is deleted only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  delete: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSnapshotScheduleRequest) =>
      Buffer.from(DeleteSnapshotScheduleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSnapshotScheduleRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the list of disks attached to the specified schedule.
   *
   * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  updateDisks: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/UpdateDisks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSnapshotScheduleDisksRequest) =>
      Buffer.from(UpdateSnapshotScheduleDisksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSnapshotScheduleDisksRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Disables the specified snapshot schedule.
   *
   * The [SnapshotSchedule.status] is changed to `INACTIVE`: the schedule is interrupted, snapshots won't be created
   * or deleted.
   *
   * The schedule is disabled only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  disable: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Disable",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DisableSnapshotScheduleRequest) =>
      Buffer.from(DisableSnapshotScheduleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DisableSnapshotScheduleRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Enables the specified snapshot schedule.
   *
   * The [SnapshotSchedule.status] is changed to `ACTIVE`: new disk snapshots will be created, old ones deleted
   * (if [SnapshotSchedule.retention_policy] is specified).
   */
  enable: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Enable",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EnableSnapshotScheduleRequest) =>
      Buffer.from(EnableSnapshotScheduleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EnableSnapshotScheduleRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified snapshot schedule. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSnapshotScheduleOperationsRequest) =>
      Buffer.from(ListSnapshotScheduleOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSnapshotScheduleOperationsRequest.decode(value),
    responseSerialize: (value: ListSnapshotScheduleOperationsResponse) =>
      Buffer.from(ListSnapshotScheduleOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSnapshotScheduleOperationsResponse.decode(value),
  },
  /** Retrieves the list of snapshots created by the specified snapshot schedule. */
  listSnapshots: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListSnapshots",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSnapshotScheduleSnapshotsRequest) =>
      Buffer.from(ListSnapshotScheduleSnapshotsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSnapshotScheduleSnapshotsRequest.decode(value),
    responseSerialize: (value: ListSnapshotScheduleSnapshotsResponse) =>
      Buffer.from(ListSnapshotScheduleSnapshotsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSnapshotScheduleSnapshotsResponse.decode(value),
  },
  /** Retrieves the list of disks attached to the specified snapshot schedule. */
  listDisks: {
    path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListDisks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSnapshotScheduleDisksRequest) =>
      Buffer.from(ListSnapshotScheduleDisksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSnapshotScheduleDisksRequest.decode(value),
    responseSerialize: (value: ListSnapshotScheduleDisksResponse) =>
      Buffer.from(ListSnapshotScheduleDisksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSnapshotScheduleDisksResponse.decode(value),
  },
} as const;

export interface SnapshotScheduleServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified snapshot schedule.
   *
   * To get the list of available snapshot schedules, make a [List] request.
   */
  get: handleUnaryCall<GetSnapshotScheduleRequest, SnapshotSchedule>;
  /** Retrieves the list of snapshot schedules in the specified folder. */
  list: handleUnaryCall<ListSnapshotSchedulesRequest, ListSnapshotSchedulesResponse>;
  /** Creates a snapshot schedule in the specified folder. */
  create: handleUnaryCall<CreateSnapshotScheduleRequest, Operation>;
  /**
   * Updates the specified snapshot schedule.
   *
   * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  update: handleUnaryCall<UpdateSnapshotScheduleRequest, Operation>;
  /**
   * Deletes the specified snapshot schedule.
   *
   * Deleting a snapshot schedule removes its data permanently and is irreversible. However, deleting a schedule
   * does not delete any snapshots created by the schedule. You must delete snapshots separately.
   *
   * The schedule is deleted only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  delete: handleUnaryCall<DeleteSnapshotScheduleRequest, Operation>;
  /**
   * Updates the list of disks attached to the specified schedule.
   *
   * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  updateDisks: handleUnaryCall<UpdateSnapshotScheduleDisksRequest, Operation>;
  /**
   * Disables the specified snapshot schedule.
   *
   * The [SnapshotSchedule.status] is changed to `INACTIVE`: the schedule is interrupted, snapshots won't be created
   * or deleted.
   *
   * The schedule is disabled only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  disable: handleUnaryCall<DisableSnapshotScheduleRequest, Operation>;
  /**
   * Enables the specified snapshot schedule.
   *
   * The [SnapshotSchedule.status] is changed to `ACTIVE`: new disk snapshots will be created, old ones deleted
   * (if [SnapshotSchedule.retention_policy] is specified).
   */
  enable: handleUnaryCall<EnableSnapshotScheduleRequest, Operation>;
  /** Lists operations for the specified snapshot schedule. */
  listOperations: handleUnaryCall<ListSnapshotScheduleOperationsRequest, ListSnapshotScheduleOperationsResponse>;
  /** Retrieves the list of snapshots created by the specified snapshot schedule. */
  listSnapshots: handleUnaryCall<ListSnapshotScheduleSnapshotsRequest, ListSnapshotScheduleSnapshotsResponse>;
  /** Retrieves the list of disks attached to the specified snapshot schedule. */
  listDisks: handleUnaryCall<ListSnapshotScheduleDisksRequest, ListSnapshotScheduleDisksResponse>;
}

export interface SnapshotScheduleServiceClient extends Client {
  /**
   * Returns the specified snapshot schedule.
   *
   * To get the list of available snapshot schedules, make a [List] request.
   */
  get(
    request: GetSnapshotScheduleRequest,
    callback: (error: ServiceError | null, response: SnapshotSchedule) => void,
  ): ClientUnaryCall;
  get(
    request: GetSnapshotScheduleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SnapshotSchedule) => void,
  ): ClientUnaryCall;
  get(
    request: GetSnapshotScheduleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SnapshotSchedule) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of snapshot schedules in the specified folder. */
  list(
    request: ListSnapshotSchedulesRequest,
    callback: (error: ServiceError | null, response: ListSnapshotSchedulesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSnapshotSchedulesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSnapshotSchedulesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSnapshotSchedulesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSnapshotSchedulesResponse) => void,
  ): ClientUnaryCall;
  /** Creates a snapshot schedule in the specified folder. */
  create(
    request: CreateSnapshotScheduleRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSnapshotScheduleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSnapshotScheduleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified snapshot schedule.
   *
   * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  update(
    request: UpdateSnapshotScheduleRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSnapshotScheduleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSnapshotScheduleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified snapshot schedule.
   *
   * Deleting a snapshot schedule removes its data permanently and is irreversible. However, deleting a schedule
   * does not delete any snapshots created by the schedule. You must delete snapshots separately.
   *
   * The schedule is deleted only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  delete(
    request: DeleteSnapshotScheduleRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSnapshotScheduleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSnapshotScheduleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the list of disks attached to the specified schedule.
   *
   * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  updateDisks(
    request: UpdateSnapshotScheduleDisksRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateDisks(
    request: UpdateSnapshotScheduleDisksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateDisks(
    request: UpdateSnapshotScheduleDisksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Disables the specified snapshot schedule.
   *
   * The [SnapshotSchedule.status] is changed to `INACTIVE`: the schedule is interrupted, snapshots won't be created
   * or deleted.
   *
   * The schedule is disabled only after all snapshot creations and deletions triggered by the schedule are completed.
   */
  disable(
    request: DisableSnapshotScheduleRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  disable(
    request: DisableSnapshotScheduleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  disable(
    request: DisableSnapshotScheduleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Enables the specified snapshot schedule.
   *
   * The [SnapshotSchedule.status] is changed to `ACTIVE`: new disk snapshots will be created, old ones deleted
   * (if [SnapshotSchedule.retention_policy] is specified).
   */
  enable(
    request: EnableSnapshotScheduleRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  enable(
    request: EnableSnapshotScheduleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  enable(
    request: EnableSnapshotScheduleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified snapshot schedule. */
  listOperations(
    request: ListSnapshotScheduleOperationsRequest,
    callback: (error: ServiceError | null, response: ListSnapshotScheduleOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSnapshotScheduleOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSnapshotScheduleOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSnapshotScheduleOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSnapshotScheduleOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of snapshots created by the specified snapshot schedule. */
  listSnapshots(
    request: ListSnapshotScheduleSnapshotsRequest,
    callback: (error: ServiceError | null, response: ListSnapshotScheduleSnapshotsResponse) => void,
  ): ClientUnaryCall;
  listSnapshots(
    request: ListSnapshotScheduleSnapshotsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSnapshotScheduleSnapshotsResponse) => void,
  ): ClientUnaryCall;
  listSnapshots(
    request: ListSnapshotScheduleSnapshotsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSnapshotScheduleSnapshotsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of disks attached to the specified snapshot schedule. */
  listDisks(
    request: ListSnapshotScheduleDisksRequest,
    callback: (error: ServiceError | null, response: ListSnapshotScheduleDisksResponse) => void,
  ): ClientUnaryCall;
  listDisks(
    request: ListSnapshotScheduleDisksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSnapshotScheduleDisksResponse) => void,
  ): ClientUnaryCall;
  listDisks(
    request: ListSnapshotScheduleDisksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSnapshotScheduleDisksResponse) => void,
  ): ClientUnaryCall;
}

export const SnapshotScheduleServiceClient = makeGenericClientConstructor(
  SnapshotScheduleServiceService,
  "yandex.cloud.compute.v1.SnapshotScheduleService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): SnapshotScheduleServiceClient;
  service: typeof SnapshotScheduleServiceService;
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
