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
import { RouteTable, StaticRoute } from "./route_table";

export const protobufPackage = "yandex.cloud.vpc.v1";

export interface GetRouteTableRequest {
  $type: "yandex.cloud.vpc.v1.GetRouteTableRequest";
  /**
   * ID of the RouteTable resource to return.
   * To get the route table ID use a [RouteTableService.List] request.
   */
  routeTableId: string;
}

export interface ListRouteTablesRequest {
  $type: "yandex.cloud.vpc.v1.ListRouteTablesRequest";
  /**
   * ID of the folder that the route table belongs to.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListRouteTablesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListRouteTablesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [RouteTable.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListRouteTablesResponse {
  $type: "yandex.cloud.vpc.v1.ListRouteTablesResponse";
  /** List of RouteTable resources. */
  routeTables: RouteTable[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListRouteTablesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListRouteTablesRequest.page_token] query parameter
   * in the next list request. Subsequent list requests will have their own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateRouteTableRequest {
  $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest";
  /**
   * ID of the folder that the route table belongs to.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the route table.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the route table. */
  description: string;
  /** Resource labels, `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** ID of the network the route table belongs to. */
  networkId: string;
  /** List of static routes. */
  staticRoutes: StaticRoute[];
}

export interface CreateRouteTableRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateRouteTableMetadata {
  $type: "yandex.cloud.vpc.v1.CreateRouteTableMetadata";
  /** ID of the route table that is being created. */
  routeTableId: string;
}

export interface UpdateRouteTableRequest {
  $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest";
  /** ID of the RouteTable resource to update. */
  routeTableId: string;
  /** Field mask that specifies which fields of the RouteTable resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the route table.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the route table. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** List of static routes. */
  staticRoutes: StaticRoute[];
}

export interface UpdateRouteTableRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateRouteTableMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateRouteTableMetadata";
  /** ID of the RouteTable resource that is being updated. */
  routeTableId: string;
}

export interface DeleteRouteTableRequest {
  $type: "yandex.cloud.vpc.v1.DeleteRouteTableRequest";
  /**
   * ID of the route table to delete.
   * To get the route table ID use a [RouteTableService.List] request.
   */
  routeTableId: string;
}

export interface DeleteRouteTableMetadata {
  $type: "yandex.cloud.vpc.v1.DeleteRouteTableMetadata";
  /** ID of the RouteTable resource that is being deleted. */
  routeTableId: string;
}

export interface ListRouteTableOperationsRequest {
  $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsRequest";
  /** ID of the RouteTable resource to list operations for. */
  routeTableId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListRouteTableOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListRouteTableOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListRouteTableOperationsResponse {
  $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsResponse";
  /** List of operations for the specified RouteTable resource. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListRouteTableOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListRouteTableOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MoveRouteTableRequest {
  $type: "yandex.cloud.vpc.v1.MoveRouteTableRequest";
  /** ID of the RouteTable resource to move. */
  routeTableId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveRouteTableMetadata {
  $type: "yandex.cloud.vpc.v1.MoveRouteTableMetadata";
  /** ID of the RouteTable resource that is being moved. */
  routeTableId: string;
}

function createBaseGetRouteTableRequest(): GetRouteTableRequest {
  return { $type: "yandex.cloud.vpc.v1.GetRouteTableRequest", routeTableId: "" };
}

export const GetRouteTableRequest = {
  $type: "yandex.cloud.vpc.v1.GetRouteTableRequest" as const,

  encode(message: GetRouteTableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routeTableId !== "") {
      writer.uint32(10).string(message.routeTableId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRouteTableRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRouteTableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTableId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRouteTableRequest {
    return {
      $type: GetRouteTableRequest.$type,
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
    };
  },

  toJSON(message: GetRouteTableRequest): unknown {
    const obj: any = {};
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRouteTableRequest>, I>>(base?: I): GetRouteTableRequest {
    return GetRouteTableRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRouteTableRequest>, I>>(object: I): GetRouteTableRequest {
    const message = createBaseGetRouteTableRequest();
    message.routeTableId = object.routeTableId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetRouteTableRequest.$type, GetRouteTableRequest);

function createBaseListRouteTablesRequest(): ListRouteTablesRequest {
  return { $type: "yandex.cloud.vpc.v1.ListRouteTablesRequest", folderId: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListRouteTablesRequest = {
  $type: "yandex.cloud.vpc.v1.ListRouteTablesRequest" as const,

  encode(message: ListRouteTablesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRouteTablesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRouteTablesRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRouteTablesRequest {
    return {
      $type: ListRouteTablesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListRouteTablesRequest): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRouteTablesRequest>, I>>(base?: I): ListRouteTablesRequest {
    return ListRouteTablesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRouteTablesRequest>, I>>(object: I): ListRouteTablesRequest {
    const message = createBaseListRouteTablesRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRouteTablesRequest.$type, ListRouteTablesRequest);

function createBaseListRouteTablesResponse(): ListRouteTablesResponse {
  return { $type: "yandex.cloud.vpc.v1.ListRouteTablesResponse", routeTables: [], nextPageToken: "" };
}

export const ListRouteTablesResponse = {
  $type: "yandex.cloud.vpc.v1.ListRouteTablesResponse" as const,

  encode(message: ListRouteTablesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.routeTables) {
      RouteTable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRouteTablesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRouteTablesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTables.push(RouteTable.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListRouteTablesResponse {
    return {
      $type: ListRouteTablesResponse.$type,
      routeTables: globalThis.Array.isArray(object?.routeTables)
        ? object.routeTables.map((e: any) => RouteTable.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListRouteTablesResponse): unknown {
    const obj: any = {};
    if (message.routeTables?.length) {
      obj.routeTables = message.routeTables.map((e) => RouteTable.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRouteTablesResponse>, I>>(base?: I): ListRouteTablesResponse {
    return ListRouteTablesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRouteTablesResponse>, I>>(object: I): ListRouteTablesResponse {
    const message = createBaseListRouteTablesResponse();
    message.routeTables = object.routeTables?.map((e) => RouteTable.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRouteTablesResponse.$type, ListRouteTablesResponse);

function createBaseCreateRouteTableRequest(): CreateRouteTableRequest {
  return {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    networkId: "",
    staticRoutes: [],
  };
}

export const CreateRouteTableRequest = {
  $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest" as const,

  encode(message: CreateRouteTableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateRouteTableRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(42).string(message.networkId);
    }
    for (const v of message.staticRoutes) {
      StaticRoute.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRouteTableRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRouteTableRequest();
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

          const entry4 = CreateRouteTableRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.staticRoutes.push(StaticRoute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateRouteTableRequest {
    return {
      $type: CreateRouteTableRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      staticRoutes: globalThis.Array.isArray(object?.staticRoutes)
        ? object.staticRoutes.map((e: any) => StaticRoute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateRouteTableRequest): unknown {
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
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.staticRoutes?.length) {
      obj.staticRoutes = message.staticRoutes.map((e) => StaticRoute.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRouteTableRequest>, I>>(base?: I): CreateRouteTableRequest {
    return CreateRouteTableRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRouteTableRequest>, I>>(object: I): CreateRouteTableRequest {
    const message = createBaseCreateRouteTableRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.networkId = object.networkId ?? "";
    message.staticRoutes = object.staticRoutes?.map((e) => StaticRoute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateRouteTableRequest.$type, CreateRouteTableRequest);

function createBaseCreateRouteTableRequest_LabelsEntry(): CreateRouteTableRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest.LabelsEntry", key: "", value: "" };
}

export const CreateRouteTableRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest.LabelsEntry" as const,

  encode(message: CreateRouteTableRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRouteTableRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRouteTableRequest_LabelsEntry();
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

  fromJSON(object: any): CreateRouteTableRequest_LabelsEntry {
    return {
      $type: CreateRouteTableRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateRouteTableRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRouteTableRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateRouteTableRequest_LabelsEntry {
    return CreateRouteTableRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRouteTableRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateRouteTableRequest_LabelsEntry {
    const message = createBaseCreateRouteTableRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateRouteTableRequest_LabelsEntry.$type, CreateRouteTableRequest_LabelsEntry);

function createBaseCreateRouteTableMetadata(): CreateRouteTableMetadata {
  return { $type: "yandex.cloud.vpc.v1.CreateRouteTableMetadata", routeTableId: "" };
}

export const CreateRouteTableMetadata = {
  $type: "yandex.cloud.vpc.v1.CreateRouteTableMetadata" as const,

  encode(message: CreateRouteTableMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routeTableId !== "") {
      writer.uint32(10).string(message.routeTableId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRouteTableMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRouteTableMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTableId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateRouteTableMetadata {
    return {
      $type: CreateRouteTableMetadata.$type,
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
    };
  },

  toJSON(message: CreateRouteTableMetadata): unknown {
    const obj: any = {};
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRouteTableMetadata>, I>>(base?: I): CreateRouteTableMetadata {
    return CreateRouteTableMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRouteTableMetadata>, I>>(object: I): CreateRouteTableMetadata {
    const message = createBaseCreateRouteTableMetadata();
    message.routeTableId = object.routeTableId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateRouteTableMetadata.$type, CreateRouteTableMetadata);

function createBaseUpdateRouteTableRequest(): UpdateRouteTableRequest {
  return {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest",
    routeTableId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    staticRoutes: [],
  };
}

export const UpdateRouteTableRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest" as const,

  encode(message: UpdateRouteTableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routeTableId !== "") {
      writer.uint32(10).string(message.routeTableId);
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
      UpdateRouteTableRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    for (const v of message.staticRoutes) {
      StaticRoute.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRouteTableRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRouteTableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTableId = reader.string();
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

          const entry5 = UpdateRouteTableRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.staticRoutes.push(StaticRoute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateRouteTableRequest {
    return {
      $type: UpdateRouteTableRequest.$type,
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      staticRoutes: globalThis.Array.isArray(object?.staticRoutes)
        ? object.staticRoutes.map((e: any) => StaticRoute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateRouteTableRequest): unknown {
    const obj: any = {};
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
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
    if (message.staticRoutes?.length) {
      obj.staticRoutes = message.staticRoutes.map((e) => StaticRoute.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRouteTableRequest>, I>>(base?: I): UpdateRouteTableRequest {
    return UpdateRouteTableRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRouteTableRequest>, I>>(object: I): UpdateRouteTableRequest {
    const message = createBaseUpdateRouteTableRequest();
    message.routeTableId = object.routeTableId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.staticRoutes = object.staticRoutes?.map((e) => StaticRoute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateRouteTableRequest.$type, UpdateRouteTableRequest);

function createBaseUpdateRouteTableRequest_LabelsEntry(): UpdateRouteTableRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateRouteTableRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest.LabelsEntry" as const,

  encode(message: UpdateRouteTableRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRouteTableRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRouteTableRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateRouteTableRequest_LabelsEntry {
    return {
      $type: UpdateRouteTableRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateRouteTableRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRouteTableRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateRouteTableRequest_LabelsEntry {
    return UpdateRouteTableRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRouteTableRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateRouteTableRequest_LabelsEntry {
    const message = createBaseUpdateRouteTableRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateRouteTableRequest_LabelsEntry.$type, UpdateRouteTableRequest_LabelsEntry);

function createBaseUpdateRouteTableMetadata(): UpdateRouteTableMetadata {
  return { $type: "yandex.cloud.vpc.v1.UpdateRouteTableMetadata", routeTableId: "" };
}

export const UpdateRouteTableMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateRouteTableMetadata" as const,

  encode(message: UpdateRouteTableMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routeTableId !== "") {
      writer.uint32(10).string(message.routeTableId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRouteTableMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRouteTableMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTableId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateRouteTableMetadata {
    return {
      $type: UpdateRouteTableMetadata.$type,
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
    };
  },

  toJSON(message: UpdateRouteTableMetadata): unknown {
    const obj: any = {};
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRouteTableMetadata>, I>>(base?: I): UpdateRouteTableMetadata {
    return UpdateRouteTableMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRouteTableMetadata>, I>>(object: I): UpdateRouteTableMetadata {
    const message = createBaseUpdateRouteTableMetadata();
    message.routeTableId = object.routeTableId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateRouteTableMetadata.$type, UpdateRouteTableMetadata);

function createBaseDeleteRouteTableRequest(): DeleteRouteTableRequest {
  return { $type: "yandex.cloud.vpc.v1.DeleteRouteTableRequest", routeTableId: "" };
}

export const DeleteRouteTableRequest = {
  $type: "yandex.cloud.vpc.v1.DeleteRouteTableRequest" as const,

  encode(message: DeleteRouteTableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routeTableId !== "") {
      writer.uint32(10).string(message.routeTableId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRouteTableRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRouteTableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTableId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteRouteTableRequest {
    return {
      $type: DeleteRouteTableRequest.$type,
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
    };
  },

  toJSON(message: DeleteRouteTableRequest): unknown {
    const obj: any = {};
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRouteTableRequest>, I>>(base?: I): DeleteRouteTableRequest {
    return DeleteRouteTableRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRouteTableRequest>, I>>(object: I): DeleteRouteTableRequest {
    const message = createBaseDeleteRouteTableRequest();
    message.routeTableId = object.routeTableId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteRouteTableRequest.$type, DeleteRouteTableRequest);

function createBaseDeleteRouteTableMetadata(): DeleteRouteTableMetadata {
  return { $type: "yandex.cloud.vpc.v1.DeleteRouteTableMetadata", routeTableId: "" };
}

export const DeleteRouteTableMetadata = {
  $type: "yandex.cloud.vpc.v1.DeleteRouteTableMetadata" as const,

  encode(message: DeleteRouteTableMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routeTableId !== "") {
      writer.uint32(10).string(message.routeTableId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRouteTableMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRouteTableMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTableId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteRouteTableMetadata {
    return {
      $type: DeleteRouteTableMetadata.$type,
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
    };
  },

  toJSON(message: DeleteRouteTableMetadata): unknown {
    const obj: any = {};
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRouteTableMetadata>, I>>(base?: I): DeleteRouteTableMetadata {
    return DeleteRouteTableMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRouteTableMetadata>, I>>(object: I): DeleteRouteTableMetadata {
    const message = createBaseDeleteRouteTableMetadata();
    message.routeTableId = object.routeTableId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteRouteTableMetadata.$type, DeleteRouteTableMetadata);

function createBaseListRouteTableOperationsRequest(): ListRouteTableOperationsRequest {
  return { $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsRequest", routeTableId: "", pageSize: 0, pageToken: "" };
}

export const ListRouteTableOperationsRequest = {
  $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsRequest" as const,

  encode(message: ListRouteTableOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routeTableId !== "") {
      writer.uint32(10).string(message.routeTableId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRouteTableOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRouteTableOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTableId = reader.string();
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

  fromJSON(object: any): ListRouteTableOperationsRequest {
    return {
      $type: ListRouteTableOperationsRequest.$type,
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListRouteTableOperationsRequest): unknown {
    const obj: any = {};
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRouteTableOperationsRequest>, I>>(base?: I): ListRouteTableOperationsRequest {
    return ListRouteTableOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRouteTableOperationsRequest>, I>>(
    object: I,
  ): ListRouteTableOperationsRequest {
    const message = createBaseListRouteTableOperationsRequest();
    message.routeTableId = object.routeTableId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRouteTableOperationsRequest.$type, ListRouteTableOperationsRequest);

function createBaseListRouteTableOperationsResponse(): ListRouteTableOperationsResponse {
  return { $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListRouteTableOperationsResponse = {
  $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsResponse" as const,

  encode(message: ListRouteTableOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRouteTableOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRouteTableOperationsResponse();
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

  fromJSON(object: any): ListRouteTableOperationsResponse {
    return {
      $type: ListRouteTableOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListRouteTableOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRouteTableOperationsResponse>, I>>(
    base?: I,
  ): ListRouteTableOperationsResponse {
    return ListRouteTableOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRouteTableOperationsResponse>, I>>(
    object: I,
  ): ListRouteTableOperationsResponse {
    const message = createBaseListRouteTableOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRouteTableOperationsResponse.$type, ListRouteTableOperationsResponse);

function createBaseMoveRouteTableRequest(): MoveRouteTableRequest {
  return { $type: "yandex.cloud.vpc.v1.MoveRouteTableRequest", routeTableId: "", destinationFolderId: "" };
}

export const MoveRouteTableRequest = {
  $type: "yandex.cloud.vpc.v1.MoveRouteTableRequest" as const,

  encode(message: MoveRouteTableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routeTableId !== "") {
      writer.uint32(10).string(message.routeTableId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveRouteTableRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveRouteTableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTableId = reader.string();
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

  fromJSON(object: any): MoveRouteTableRequest {
    return {
      $type: MoveRouteTableRequest.$type,
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveRouteTableRequest): unknown {
    const obj: any = {};
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveRouteTableRequest>, I>>(base?: I): MoveRouteTableRequest {
    return MoveRouteTableRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveRouteTableRequest>, I>>(object: I): MoveRouteTableRequest {
    const message = createBaseMoveRouteTableRequest();
    message.routeTableId = object.routeTableId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveRouteTableRequest.$type, MoveRouteTableRequest);

function createBaseMoveRouteTableMetadata(): MoveRouteTableMetadata {
  return { $type: "yandex.cloud.vpc.v1.MoveRouteTableMetadata", routeTableId: "" };
}

export const MoveRouteTableMetadata = {
  $type: "yandex.cloud.vpc.v1.MoveRouteTableMetadata" as const,

  encode(message: MoveRouteTableMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routeTableId !== "") {
      writer.uint32(10).string(message.routeTableId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveRouteTableMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveRouteTableMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTableId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveRouteTableMetadata {
    return {
      $type: MoveRouteTableMetadata.$type,
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
    };
  },

  toJSON(message: MoveRouteTableMetadata): unknown {
    const obj: any = {};
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveRouteTableMetadata>, I>>(base?: I): MoveRouteTableMetadata {
    return MoveRouteTableMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveRouteTableMetadata>, I>>(object: I): MoveRouteTableMetadata {
    const message = createBaseMoveRouteTableMetadata();
    message.routeTableId = object.routeTableId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveRouteTableMetadata.$type, MoveRouteTableMetadata);

/** A set of methods for managing RouteTable resources. */
export type RouteTableServiceService = typeof RouteTableServiceService;
export const RouteTableServiceService = {
  /**
   * Returns the specified RouteTable resource.
   *
   * To get the list of available RouteTable resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRouteTableRequest) => Buffer.from(GetRouteTableRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRouteTableRequest.decode(value),
    responseSerialize: (value: RouteTable) => Buffer.from(RouteTable.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RouteTable.decode(value),
  },
  /** Retrieves the list of RouteTable resources in the specified folder. */
  list: {
    path: "/yandex.cloud.vpc.v1.RouteTableService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRouteTablesRequest) => Buffer.from(ListRouteTablesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListRouteTablesRequest.decode(value),
    responseSerialize: (value: ListRouteTablesResponse) => Buffer.from(ListRouteTablesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListRouteTablesResponse.decode(value),
  },
  /**
   * Creates a route table in the specified folder and network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateRouteTableRequest) => Buffer.from(CreateRouteTableRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateRouteTableRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified route table.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update: {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateRouteTableRequest) => Buffer.from(UpdateRouteTableRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateRouteTableRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified route table. */
  delete: {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteRouteTableRequest) => Buffer.from(DeleteRouteTableRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteRouteTableRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List operations for the specified route table. */
  listOperations: {
    path: "/yandex.cloud.vpc.v1.RouteTableService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRouteTableOperationsRequest) =>
      Buffer.from(ListRouteTableOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListRouteTableOperationsRequest.decode(value),
    responseSerialize: (value: ListRouteTableOperationsResponse) =>
      Buffer.from(ListRouteTableOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListRouteTableOperationsResponse.decode(value),
  },
  /** Move route table to another folder. */
  move: {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveRouteTableRequest) => Buffer.from(MoveRouteTableRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveRouteTableRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface RouteTableServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified RouteTable resource.
   *
   * To get the list of available RouteTable resources, make a [List] request.
   */
  get: handleUnaryCall<GetRouteTableRequest, RouteTable>;
  /** Retrieves the list of RouteTable resources in the specified folder. */
  list: handleUnaryCall<ListRouteTablesRequest, ListRouteTablesResponse>;
  /**
   * Creates a route table in the specified folder and network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: handleUnaryCall<CreateRouteTableRequest, Operation>;
  /**
   * Updates the specified route table.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update: handleUnaryCall<UpdateRouteTableRequest, Operation>;
  /** Deletes the specified route table. */
  delete: handleUnaryCall<DeleteRouteTableRequest, Operation>;
  /** List operations for the specified route table. */
  listOperations: handleUnaryCall<ListRouteTableOperationsRequest, ListRouteTableOperationsResponse>;
  /** Move route table to another folder. */
  move: handleUnaryCall<MoveRouteTableRequest, Operation>;
}

export interface RouteTableServiceClient extends Client {
  /**
   * Returns the specified RouteTable resource.
   *
   * To get the list of available RouteTable resources, make a [List] request.
   */
  get(
    request: GetRouteTableRequest,
    callback: (error: ServiceError | null, response: RouteTable) => void,
  ): ClientUnaryCall;
  get(
    request: GetRouteTableRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RouteTable) => void,
  ): ClientUnaryCall;
  get(
    request: GetRouteTableRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RouteTable) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of RouteTable resources in the specified folder. */
  list(
    request: ListRouteTablesRequest,
    callback: (error: ServiceError | null, response: ListRouteTablesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListRouteTablesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListRouteTablesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListRouteTablesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListRouteTablesResponse) => void,
  ): ClientUnaryCall;
  /**
   * Creates a route table in the specified folder and network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create(
    request: CreateRouteTableRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateRouteTableRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateRouteTableRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified route table.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update(
    request: UpdateRouteTableRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRouteTableRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRouteTableRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified route table. */
  delete(
    request: DeleteRouteTableRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteRouteTableRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteRouteTableRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** List operations for the specified route table. */
  listOperations(
    request: ListRouteTableOperationsRequest,
    callback: (error: ServiceError | null, response: ListRouteTableOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListRouteTableOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListRouteTableOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListRouteTableOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListRouteTableOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Move route table to another folder. */
  move(
    request: MoveRouteTableRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveRouteTableRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveRouteTableRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const RouteTableServiceClient = makeGenericClientConstructor(
  RouteTableServiceService,
  "yandex.cloud.vpc.v1.RouteTableService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RouteTableServiceClient;
  service: typeof RouteTableServiceService;
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
