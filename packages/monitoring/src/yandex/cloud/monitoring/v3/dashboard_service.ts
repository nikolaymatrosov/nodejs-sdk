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
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Dashboard } from "./dashboard";
import { Parametrization } from "./parametrization";
import { Widget } from "./widget";

export const protobufPackage = "yandex.cloud.monitoring.v3";

export interface GetDashboardRequest {
  $type: "yandex.cloud.monitoring.v3.GetDashboardRequest";
  /** Required. Dashboard ID. */
  dashboardId: string;
}

export interface ListDashboardsRequest {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest";
  /** Required. Folder ID. */
  folderId?:
    | string
    | undefined;
  /**
   * The maximum number of dashboards to return.
   * If unspecified, at most 100 dashboards will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDashboardResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [Dashboard.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example: name="abc"
   */
  filter: string;
}

export interface ListDashboardsResponse {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse";
  /** List of dashboards. */
  dashboards: Dashboard[];
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken: string;
}

export interface CreateDashboardRequest {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest";
  /** Required. Folder ID. */
  folderId?:
    | string
    | undefined;
  /** Required. Dashboard name. */
  name: string;
  /** Dashboard description. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Dashboard title. */
  title: string;
  /** List of dashboard widgets. */
  widgets: Widget[];
  /** Dashboard parametrization. */
  parametrization?: Parametrization | undefined;
}

export interface CreateDashboardRequest_LabelsEntry {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateDashboardMetadata {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata";
  /** Dashboard ID. */
  dashboardId: string;
}

export interface UpdateDashboardRequest {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest";
  /** Required. Dashboard ID. */
  dashboardId: string;
  /** Required. Dashboard name. */
  name: string;
  /** Dashboard description. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /** Dashboard title. */
  title: string;
  /** List of dashboard widgets. */
  widgets: Widget[];
  /** Dashboard parametrization. */
  parametrization?:
    | Parametrization
    | undefined;
  /** The current etag of the dashboard. */
  etag: string;
}

export interface UpdateDashboardRequest_LabelsEntry {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateDashboardMetadata {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata";
  /** Dashboard ID. */
  dashboardId: string;
}

export interface DeleteDashboardRequest {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest";
  /** Required. Dashboard ID. */
  dashboardId: string;
  /** The current etag of the dashboard. */
  etag: string;
}

export interface DeleteDashboardMetadata {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata";
  /** Dashboard ID. */
  dashboardId: string;
}

export interface ListDashboardOperationsRequest {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest";
  /** ID of the dashboard to list operations for. */
  dashboardId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListDashboardOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDashboardOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListDashboardOperationsResponse {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse";
  /** List of operations for the specified dashboard. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDashboardOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListDashboardOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetDashboardRequest(): GetDashboardRequest {
  return { $type: "yandex.cloud.monitoring.v3.GetDashboardRequest", dashboardId: "" };
}

export const GetDashboardRequest = {
  $type: "yandex.cloud.monitoring.v3.GetDashboardRequest" as const,

  encode(message: GetDashboardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDashboardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDashboardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dashboardId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDashboardRequest {
    return {
      $type: GetDashboardRequest.$type,
      dashboardId: isSet(object.dashboardId) ? globalThis.String(object.dashboardId) : "",
    };
  },

  toJSON(message: GetDashboardRequest): unknown {
    const obj: any = {};
    if (message.dashboardId !== "") {
      obj.dashboardId = message.dashboardId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDashboardRequest>, I>>(base?: I): GetDashboardRequest {
    return GetDashboardRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDashboardRequest>, I>>(object: I): GetDashboardRequest {
    const message = createBaseGetDashboardRequest();
    message.dashboardId = object.dashboardId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetDashboardRequest.$type, GetDashboardRequest);

function createBaseListDashboardsRequest(): ListDashboardsRequest {
  return {
    $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest",
    folderId: undefined,
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListDashboardsRequest = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest" as const,

  encode(message: ListDashboardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(152).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(162).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(170).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDashboardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDashboardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDashboardsRequest {
    return {
      $type: ListDashboardsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListDashboardsRequest): unknown {
    const obj: any = {};
    if (message.folderId !== undefined) {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDashboardsRequest>, I>>(base?: I): ListDashboardsRequest {
    return ListDashboardsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDashboardsRequest>, I>>(object: I): ListDashboardsRequest {
    const message = createBaseListDashboardsRequest();
    message.folderId = object.folderId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDashboardsRequest.$type, ListDashboardsRequest);

function createBaseListDashboardsResponse(): ListDashboardsResponse {
  return { $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse", dashboards: [], nextPageToken: "" };
}

export const ListDashboardsResponse = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse" as const,

  encode(message: ListDashboardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dashboards) {
      Dashboard.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDashboardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDashboardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dashboards.push(Dashboard.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDashboardsResponse {
    return {
      $type: ListDashboardsResponse.$type,
      dashboards: globalThis.Array.isArray(object?.dashboards)
        ? object.dashboards.map((e: any) => Dashboard.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDashboardsResponse): unknown {
    const obj: any = {};
    if (message.dashboards?.length) {
      obj.dashboards = message.dashboards.map((e) => Dashboard.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDashboardsResponse>, I>>(base?: I): ListDashboardsResponse {
    return ListDashboardsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDashboardsResponse>, I>>(object: I): ListDashboardsResponse {
    const message = createBaseListDashboardsResponse();
    message.dashboards = object.dashboards?.map((e) => Dashboard.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDashboardsResponse.$type, ListDashboardsResponse);

function createBaseCreateDashboardRequest(): CreateDashboardRequest {
  return {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest",
    folderId: undefined,
    name: "",
    description: "",
    labels: {},
    title: "",
    widgets: [],
    parametrization: undefined,
  };
}

export const CreateDashboardRequest = {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest" as const,

  encode(message: CreateDashboardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(154).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(162).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateDashboardRequest_LabelsEntry.encode({
        $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(170).fork()).ldelim();
    });
    if (message.title !== "") {
      writer.uint32(178).string(message.title);
    }
    for (const v of message.widgets) {
      Widget.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    if (message.parametrization !== undefined) {
      Parametrization.encode(message.parametrization, writer.uint32(194).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDashboardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDashboardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.name = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.description = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          const entry21 = CreateDashboardRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry21.value !== undefined) {
            message.labels[entry21.key] = entry21.value;
          }
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.title = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.widgets.push(Widget.decode(reader, reader.uint32()));
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.parametrization = Parametrization.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDashboardRequest {
    return {
      $type: CreateDashboardRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      widgets: globalThis.Array.isArray(object?.widgets) ? object.widgets.map((e: any) => Widget.fromJSON(e)) : [],
      parametrization: isSet(object.parametrization) ? Parametrization.fromJSON(object.parametrization) : undefined,
    };
  },

  toJSON(message: CreateDashboardRequest): unknown {
    const obj: any = {};
    if (message.folderId !== undefined) {
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
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.widgets?.length) {
      obj.widgets = message.widgets.map((e) => Widget.toJSON(e));
    }
    if (message.parametrization !== undefined) {
      obj.parametrization = Parametrization.toJSON(message.parametrization);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDashboardRequest>, I>>(base?: I): CreateDashboardRequest {
    return CreateDashboardRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDashboardRequest>, I>>(object: I): CreateDashboardRequest {
    const message = createBaseCreateDashboardRequest();
    message.folderId = object.folderId ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.title = object.title ?? "";
    message.widgets = object.widgets?.map((e) => Widget.fromPartial(e)) || [];
    message.parametrization = (object.parametrization !== undefined && object.parametrization !== null)
      ? Parametrization.fromPartial(object.parametrization)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateDashboardRequest.$type, CreateDashboardRequest);

function createBaseCreateDashboardRequest_LabelsEntry(): CreateDashboardRequest_LabelsEntry {
  return { $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry", key: "", value: "" };
}

export const CreateDashboardRequest_LabelsEntry = {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry" as const,

  encode(message: CreateDashboardRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDashboardRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDashboardRequest_LabelsEntry();
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

  fromJSON(object: any): CreateDashboardRequest_LabelsEntry {
    return {
      $type: CreateDashboardRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateDashboardRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDashboardRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateDashboardRequest_LabelsEntry {
    return CreateDashboardRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDashboardRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateDashboardRequest_LabelsEntry {
    const message = createBaseCreateDashboardRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDashboardRequest_LabelsEntry.$type, CreateDashboardRequest_LabelsEntry);

function createBaseCreateDashboardMetadata(): CreateDashboardMetadata {
  return { $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata", dashboardId: "" };
}

export const CreateDashboardMetadata = {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata" as const,

  encode(message: CreateDashboardMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDashboardMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDashboardMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dashboardId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDashboardMetadata {
    return {
      $type: CreateDashboardMetadata.$type,
      dashboardId: isSet(object.dashboardId) ? globalThis.String(object.dashboardId) : "",
    };
  },

  toJSON(message: CreateDashboardMetadata): unknown {
    const obj: any = {};
    if (message.dashboardId !== "") {
      obj.dashboardId = message.dashboardId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDashboardMetadata>, I>>(base?: I): CreateDashboardMetadata {
    return CreateDashboardMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDashboardMetadata>, I>>(object: I): CreateDashboardMetadata {
    const message = createBaseCreateDashboardMetadata();
    message.dashboardId = object.dashboardId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDashboardMetadata.$type, CreateDashboardMetadata);

function createBaseUpdateDashboardRequest(): UpdateDashboardRequest {
  return {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest",
    dashboardId: "",
    name: "",
    description: "",
    labels: {},
    title: "",
    widgets: [],
    parametrization: undefined,
    etag: "",
  };
}

export const UpdateDashboardRequest = {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest" as const,

  encode(message: UpdateDashboardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateDashboardRequest_LabelsEntry.encode({
        $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    for (const v of message.widgets) {
      Widget.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.parametrization !== undefined) {
      Parametrization.encode(message.parametrization, writer.uint32(58).fork()).ldelim();
    }
    if (message.etag !== "") {
      writer.uint32(66).string(message.etag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDashboardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDashboardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dashboardId = reader.string();
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

          const entry4 = UpdateDashboardRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.title = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.widgets.push(Widget.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.parametrization = Parametrization.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.etag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDashboardRequest {
    return {
      $type: UpdateDashboardRequest.$type,
      dashboardId: isSet(object.dashboardId) ? globalThis.String(object.dashboardId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      widgets: globalThis.Array.isArray(object?.widgets) ? object.widgets.map((e: any) => Widget.fromJSON(e)) : [],
      parametrization: isSet(object.parametrization) ? Parametrization.fromJSON(object.parametrization) : undefined,
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: UpdateDashboardRequest): unknown {
    const obj: any = {};
    if (message.dashboardId !== "") {
      obj.dashboardId = message.dashboardId;
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
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.widgets?.length) {
      obj.widgets = message.widgets.map((e) => Widget.toJSON(e));
    }
    if (message.parametrization !== undefined) {
      obj.parametrization = Parametrization.toJSON(message.parametrization);
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDashboardRequest>, I>>(base?: I): UpdateDashboardRequest {
    return UpdateDashboardRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDashboardRequest>, I>>(object: I): UpdateDashboardRequest {
    const message = createBaseUpdateDashboardRequest();
    message.dashboardId = object.dashboardId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.title = object.title ?? "";
    message.widgets = object.widgets?.map((e) => Widget.fromPartial(e)) || [];
    message.parametrization = (object.parametrization !== undefined && object.parametrization !== null)
      ? Parametrization.fromPartial(object.parametrization)
      : undefined;
    message.etag = object.etag ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDashboardRequest.$type, UpdateDashboardRequest);

function createBaseUpdateDashboardRequest_LabelsEntry(): UpdateDashboardRequest_LabelsEntry {
  return { $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateDashboardRequest_LabelsEntry = {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry" as const,

  encode(message: UpdateDashboardRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDashboardRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDashboardRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateDashboardRequest_LabelsEntry {
    return {
      $type: UpdateDashboardRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateDashboardRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDashboardRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateDashboardRequest_LabelsEntry {
    return UpdateDashboardRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDashboardRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateDashboardRequest_LabelsEntry {
    const message = createBaseUpdateDashboardRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDashboardRequest_LabelsEntry.$type, UpdateDashboardRequest_LabelsEntry);

function createBaseUpdateDashboardMetadata(): UpdateDashboardMetadata {
  return { $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata", dashboardId: "" };
}

export const UpdateDashboardMetadata = {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata" as const,

  encode(message: UpdateDashboardMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDashboardMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDashboardMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dashboardId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDashboardMetadata {
    return {
      $type: UpdateDashboardMetadata.$type,
      dashboardId: isSet(object.dashboardId) ? globalThis.String(object.dashboardId) : "",
    };
  },

  toJSON(message: UpdateDashboardMetadata): unknown {
    const obj: any = {};
    if (message.dashboardId !== "") {
      obj.dashboardId = message.dashboardId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDashboardMetadata>, I>>(base?: I): UpdateDashboardMetadata {
    return UpdateDashboardMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDashboardMetadata>, I>>(object: I): UpdateDashboardMetadata {
    const message = createBaseUpdateDashboardMetadata();
    message.dashboardId = object.dashboardId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDashboardMetadata.$type, UpdateDashboardMetadata);

function createBaseDeleteDashboardRequest(): DeleteDashboardRequest {
  return { $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest", dashboardId: "", etag: "" };
}

export const DeleteDashboardRequest = {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest" as const,

  encode(message: DeleteDashboardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    if (message.etag !== "") {
      writer.uint32(18).string(message.etag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDashboardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDashboardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dashboardId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.etag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDashboardRequest {
    return {
      $type: DeleteDashboardRequest.$type,
      dashboardId: isSet(object.dashboardId) ? globalThis.String(object.dashboardId) : "",
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: DeleteDashboardRequest): unknown {
    const obj: any = {};
    if (message.dashboardId !== "") {
      obj.dashboardId = message.dashboardId;
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDashboardRequest>, I>>(base?: I): DeleteDashboardRequest {
    return DeleteDashboardRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDashboardRequest>, I>>(object: I): DeleteDashboardRequest {
    const message = createBaseDeleteDashboardRequest();
    message.dashboardId = object.dashboardId ?? "";
    message.etag = object.etag ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDashboardRequest.$type, DeleteDashboardRequest);

function createBaseDeleteDashboardMetadata(): DeleteDashboardMetadata {
  return { $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata", dashboardId: "" };
}

export const DeleteDashboardMetadata = {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata" as const,

  encode(message: DeleteDashboardMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDashboardMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDashboardMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dashboardId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDashboardMetadata {
    return {
      $type: DeleteDashboardMetadata.$type,
      dashboardId: isSet(object.dashboardId) ? globalThis.String(object.dashboardId) : "",
    };
  },

  toJSON(message: DeleteDashboardMetadata): unknown {
    const obj: any = {};
    if (message.dashboardId !== "") {
      obj.dashboardId = message.dashboardId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDashboardMetadata>, I>>(base?: I): DeleteDashboardMetadata {
    return DeleteDashboardMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDashboardMetadata>, I>>(object: I): DeleteDashboardMetadata {
    const message = createBaseDeleteDashboardMetadata();
    message.dashboardId = object.dashboardId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDashboardMetadata.$type, DeleteDashboardMetadata);

function createBaseListDashboardOperationsRequest(): ListDashboardOperationsRequest {
  return {
    $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest",
    dashboardId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListDashboardOperationsRequest = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest" as const,

  encode(message: ListDashboardOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDashboardOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDashboardOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dashboardId = reader.string();
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

  fromJSON(object: any): ListDashboardOperationsRequest {
    return {
      $type: ListDashboardOperationsRequest.$type,
      dashboardId: isSet(object.dashboardId) ? globalThis.String(object.dashboardId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListDashboardOperationsRequest): unknown {
    const obj: any = {};
    if (message.dashboardId !== "") {
      obj.dashboardId = message.dashboardId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDashboardOperationsRequest>, I>>(base?: I): ListDashboardOperationsRequest {
    return ListDashboardOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDashboardOperationsRequest>, I>>(
    object: I,
  ): ListDashboardOperationsRequest {
    const message = createBaseListDashboardOperationsRequest();
    message.dashboardId = object.dashboardId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDashboardOperationsRequest.$type, ListDashboardOperationsRequest);

function createBaseListDashboardOperationsResponse(): ListDashboardOperationsResponse {
  return { $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListDashboardOperationsResponse = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse" as const,

  encode(message: ListDashboardOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDashboardOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDashboardOperationsResponse();
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

  fromJSON(object: any): ListDashboardOperationsResponse {
    return {
      $type: ListDashboardOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDashboardOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDashboardOperationsResponse>, I>>(base?: I): ListDashboardOperationsResponse {
    return ListDashboardOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDashboardOperationsResponse>, I>>(
    object: I,
  ): ListDashboardOperationsResponse {
    const message = createBaseListDashboardOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDashboardOperationsResponse.$type, ListDashboardOperationsResponse);

/** A set of methods for managing dashboards. */
export type DashboardServiceService = typeof DashboardServiceService;
export const DashboardServiceService = {
  /** Returns the specified dashboard. */
  get: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDashboardRequest) => Buffer.from(GetDashboardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDashboardRequest.decode(value),
    responseSerialize: (value: Dashboard) => Buffer.from(Dashboard.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Dashboard.decode(value),
  },
  /** Retrieves the list of dashboards in the specified folder. */
  list: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDashboardsRequest) => Buffer.from(ListDashboardsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDashboardsRequest.decode(value),
    responseSerialize: (value: ListDashboardsResponse) => Buffer.from(ListDashboardsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDashboardsResponse.decode(value),
  },
  /** Creates a new dashboard in the specified folder. */
  create: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDashboardRequest) => Buffer.from(CreateDashboardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDashboardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified dashboard. */
  update: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDashboardRequest) => Buffer.from(UpdateDashboardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateDashboardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified dashboard. */
  delete: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDashboardRequest) => Buffer.from(DeleteDashboardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDashboardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified dashboard. */
  listOperations: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDashboardOperationsRequest) =>
      Buffer.from(ListDashboardOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDashboardOperationsRequest.decode(value),
    responseSerialize: (value: ListDashboardOperationsResponse) =>
      Buffer.from(ListDashboardOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDashboardOperationsResponse.decode(value),
  },
} as const;

export interface DashboardServiceServer extends UntypedServiceImplementation {
  /** Returns the specified dashboard. */
  get: handleUnaryCall<GetDashboardRequest, Dashboard>;
  /** Retrieves the list of dashboards in the specified folder. */
  list: handleUnaryCall<ListDashboardsRequest, ListDashboardsResponse>;
  /** Creates a new dashboard in the specified folder. */
  create: handleUnaryCall<CreateDashboardRequest, Operation>;
  /** Updates the specified dashboard. */
  update: handleUnaryCall<UpdateDashboardRequest, Operation>;
  /** Deletes the specified dashboard. */
  delete: handleUnaryCall<DeleteDashboardRequest, Operation>;
  /** Lists operations for the specified dashboard. */
  listOperations: handleUnaryCall<ListDashboardOperationsRequest, ListDashboardOperationsResponse>;
}

export interface DashboardServiceClient extends Client {
  /** Returns the specified dashboard. */
  get(
    request: GetDashboardRequest,
    callback: (error: ServiceError | null, response: Dashboard) => void,
  ): ClientUnaryCall;
  get(
    request: GetDashboardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Dashboard) => void,
  ): ClientUnaryCall;
  get(
    request: GetDashboardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Dashboard) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of dashboards in the specified folder. */
  list(
    request: ListDashboardsRequest,
    callback: (error: ServiceError | null, response: ListDashboardsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDashboardsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDashboardsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDashboardsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDashboardsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a new dashboard in the specified folder. */
  create(
    request: CreateDashboardRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDashboardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDashboardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified dashboard. */
  update(
    request: UpdateDashboardRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateDashboardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateDashboardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified dashboard. */
  delete(
    request: DeleteDashboardRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDashboardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDashboardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified dashboard. */
  listOperations(
    request: ListDashboardOperationsRequest,
    callback: (error: ServiceError | null, response: ListDashboardOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListDashboardOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDashboardOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListDashboardOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDashboardOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const DashboardServiceClient = makeGenericClientConstructor(
  DashboardServiceService,
  "yandex.cloud.monitoring.v3.DashboardService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DashboardServiceClient;
  service: typeof DashboardServiceService;
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
