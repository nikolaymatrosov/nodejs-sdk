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
import { HttpRouter } from "./http_router";
import { RouteOptions, VirtualHost } from "./virtual_host";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

export interface GetHttpRouterRequest {
  $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest";
  /**
   * ID of the HTTP router to return.
   *
   * To get the HTTP router ID, make a [HttpRouterService.List] request.
   */
  httpRouterId: string;
}

export interface ListHttpRoutersRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest";
  /**
   * ID of the folder to list HTTP routers in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListHttpRoutersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListHttpRoutersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters HTTP routers listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [HttpRouter.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-http-router`.
   */
  filter: string;
}

export interface ListHttpRoutersResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse";
  /** List of HTTP routers in the specified folder. */
  httpRouters: HttpRouter[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListHttpRoutersRequest.page_size], use `next_page_token` as the value
   * for the [ListHttpRoutersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteHttpRouterRequest {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest";
  /**
   * ID of the HTTP router to delete.
   *
   * To get the HTTP router ID, make a [HttpRouterService.List] request.
   */
  httpRouterId: string;
}

export interface DeleteHttpRouterMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata";
  /** ID of the HTTP router that is being deleted. */
  httpRouterId: string;
}

export interface UpdateHttpRouterRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest";
  /**
   * ID of the HTTP router to update.
   *
   * To get the HTTP router ID, make a [HttpRouterService.List] request.
   */
  httpRouterId: string;
  /** Field mask that specifies which attributes of the HTTP router should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the HTTP router.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the HTTP router. */
  description: string;
  /**
   * HTTP router labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [HttpRouterService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /**
   * New virtual hosts that combine routes inside the router.
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
   *
   * Only one virtual host with no authority (default match) can be specified.
   *
   * Existing list of virtual hosts is completely replaced by the specified list, so if you just want to add or remove
   * a virtual host, make a [VirtualHostService.Create] request or a [VirtualHostService.Delete] request.
   */
  virtualHosts: VirtualHost[];
  /** New route options for the HTTP router. */
  routeOptions?: RouteOptions | undefined;
}

export interface UpdateHttpRouterRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateHttpRouterMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata";
  /** ID of the HTTP router that is being updated. */
  httpRouterId: string;
}

export interface CreateHttpRouterRequest {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest";
  /**
   * ID of the folder to create an HTTP router in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the HTTP router.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the HTTP router. */
  description: string;
  /**
   * HTTP router labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /**
   * Virtual hosts that combine routes inside the router.
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
   *
   * Only one virtual host with no authority (default match) can be specified.
   */
  virtualHosts: VirtualHost[];
  /** Route options for the HTTP router. */
  routeOptions?: RouteOptions | undefined;
}

export interface CreateHttpRouterRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateHttpRouterMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata";
  /** ID of the HTTP router that is being created. */
  httpRouterId: string;
}

export interface ListHttpRouterOperationsRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest";
  /**
   * ID of the HTTP router to get operations for.
   *
   * To get the HTTP router ID, use a [HttpRouterService.List] request.
   */
  httpRouterId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListHttpRouterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListHttpRouterOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListHttpRouterOperationsResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse";
  /** List of operations for the specified HTTP router. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListHttpRouterOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListHttpRouterOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetHttpRouterRequest(): GetHttpRouterRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest", httpRouterId: "" };
}

export const GetHttpRouterRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest" as const,

  encode(message: GetHttpRouterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHttpRouterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHttpRouterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRouterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetHttpRouterRequest {
    return {
      $type: GetHttpRouterRequest.$type,
      httpRouterId: isSet(object.httpRouterId) ? globalThis.String(object.httpRouterId) : "",
    };
  },

  toJSON(message: GetHttpRouterRequest): unknown {
    const obj: any = {};
    if (message.httpRouterId !== "") {
      obj.httpRouterId = message.httpRouterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetHttpRouterRequest>, I>>(base?: I): GetHttpRouterRequest {
    return GetHttpRouterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHttpRouterRequest>, I>>(object: I): GetHttpRouterRequest {
    const message = createBaseGetHttpRouterRequest();
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetHttpRouterRequest.$type, GetHttpRouterRequest);

function createBaseListHttpRoutersRequest(): ListHttpRoutersRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListHttpRoutersRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest" as const,

  encode(message: ListHttpRoutersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHttpRoutersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHttpRoutersRequest();
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

  fromJSON(object: any): ListHttpRoutersRequest {
    return {
      $type: ListHttpRoutersRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListHttpRoutersRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListHttpRoutersRequest>, I>>(base?: I): ListHttpRoutersRequest {
    return ListHttpRoutersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHttpRoutersRequest>, I>>(object: I): ListHttpRoutersRequest {
    const message = createBaseListHttpRoutersRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHttpRoutersRequest.$type, ListHttpRoutersRequest);

function createBaseListHttpRoutersResponse(): ListHttpRoutersResponse {
  return { $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse", httpRouters: [], nextPageToken: "" };
}

export const ListHttpRoutersResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse" as const,

  encode(message: ListHttpRoutersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.httpRouters) {
      HttpRouter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHttpRoutersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHttpRoutersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRouters.push(HttpRouter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListHttpRoutersResponse {
    return {
      $type: ListHttpRoutersResponse.$type,
      httpRouters: globalThis.Array.isArray(object?.httpRouters)
        ? object.httpRouters.map((e: any) => HttpRouter.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListHttpRoutersResponse): unknown {
    const obj: any = {};
    if (message.httpRouters?.length) {
      obj.httpRouters = message.httpRouters.map((e) => HttpRouter.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHttpRoutersResponse>, I>>(base?: I): ListHttpRoutersResponse {
    return ListHttpRoutersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHttpRoutersResponse>, I>>(object: I): ListHttpRoutersResponse {
    const message = createBaseListHttpRoutersResponse();
    message.httpRouters = object.httpRouters?.map((e) => HttpRouter.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHttpRoutersResponse.$type, ListHttpRoutersResponse);

function createBaseDeleteHttpRouterRequest(): DeleteHttpRouterRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest", httpRouterId: "" };
}

export const DeleteHttpRouterRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest" as const,

  encode(message: DeleteHttpRouterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteHttpRouterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteHttpRouterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRouterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteHttpRouterRequest {
    return {
      $type: DeleteHttpRouterRequest.$type,
      httpRouterId: isSet(object.httpRouterId) ? globalThis.String(object.httpRouterId) : "",
    };
  },

  toJSON(message: DeleteHttpRouterRequest): unknown {
    const obj: any = {};
    if (message.httpRouterId !== "") {
      obj.httpRouterId = message.httpRouterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteHttpRouterRequest>, I>>(base?: I): DeleteHttpRouterRequest {
    return DeleteHttpRouterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteHttpRouterRequest>, I>>(object: I): DeleteHttpRouterRequest {
    const message = createBaseDeleteHttpRouterRequest();
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteHttpRouterRequest.$type, DeleteHttpRouterRequest);

function createBaseDeleteHttpRouterMetadata(): DeleteHttpRouterMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata", httpRouterId: "" };
}

export const DeleteHttpRouterMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata" as const,

  encode(message: DeleteHttpRouterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteHttpRouterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteHttpRouterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRouterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteHttpRouterMetadata {
    return {
      $type: DeleteHttpRouterMetadata.$type,
      httpRouterId: isSet(object.httpRouterId) ? globalThis.String(object.httpRouterId) : "",
    };
  },

  toJSON(message: DeleteHttpRouterMetadata): unknown {
    const obj: any = {};
    if (message.httpRouterId !== "") {
      obj.httpRouterId = message.httpRouterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteHttpRouterMetadata>, I>>(base?: I): DeleteHttpRouterMetadata {
    return DeleteHttpRouterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteHttpRouterMetadata>, I>>(object: I): DeleteHttpRouterMetadata {
    const message = createBaseDeleteHttpRouterMetadata();
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteHttpRouterMetadata.$type, DeleteHttpRouterMetadata);

function createBaseUpdateHttpRouterRequest(): UpdateHttpRouterRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest",
    httpRouterId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    virtualHosts: [],
    routeOptions: undefined,
  };
}

export const UpdateHttpRouterRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest" as const,

  encode(message: UpdateHttpRouterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
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
      UpdateHttpRouterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    for (const v of message.virtualHosts) {
      VirtualHost.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.routeOptions !== undefined) {
      RouteOptions.encode(message.routeOptions, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHttpRouterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateHttpRouterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRouterId = reader.string();
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

          const entry5 = UpdateHttpRouterRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.virtualHosts.push(VirtualHost.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.routeOptions = RouteOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateHttpRouterRequest {
    return {
      $type: UpdateHttpRouterRequest.$type,
      httpRouterId: isSet(object.httpRouterId) ? globalThis.String(object.httpRouterId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      virtualHosts: globalThis.Array.isArray(object?.virtualHosts)
        ? object.virtualHosts.map((e: any) => VirtualHost.fromJSON(e))
        : [],
      routeOptions: isSet(object.routeOptions) ? RouteOptions.fromJSON(object.routeOptions) : undefined,
    };
  },

  toJSON(message: UpdateHttpRouterRequest): unknown {
    const obj: any = {};
    if (message.httpRouterId !== "") {
      obj.httpRouterId = message.httpRouterId;
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
    if (message.virtualHosts?.length) {
      obj.virtualHosts = message.virtualHosts.map((e) => VirtualHost.toJSON(e));
    }
    if (message.routeOptions !== undefined) {
      obj.routeOptions = RouteOptions.toJSON(message.routeOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateHttpRouterRequest>, I>>(base?: I): UpdateHttpRouterRequest {
    return UpdateHttpRouterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateHttpRouterRequest>, I>>(object: I): UpdateHttpRouterRequest {
    const message = createBaseUpdateHttpRouterRequest();
    message.httpRouterId = object.httpRouterId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.virtualHosts = object.virtualHosts?.map((e) => VirtualHost.fromPartial(e)) || [];
    message.routeOptions = (object.routeOptions !== undefined && object.routeOptions !== null)
      ? RouteOptions.fromPartial(object.routeOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateHttpRouterRequest.$type, UpdateHttpRouterRequest);

function createBaseUpdateHttpRouterRequest_LabelsEntry(): UpdateHttpRouterRequest_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateHttpRouterRequest_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry" as const,

  encode(message: UpdateHttpRouterRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHttpRouterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateHttpRouterRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateHttpRouterRequest_LabelsEntry {
    return {
      $type: UpdateHttpRouterRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateHttpRouterRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateHttpRouterRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateHttpRouterRequest_LabelsEntry {
    return UpdateHttpRouterRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateHttpRouterRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateHttpRouterRequest_LabelsEntry {
    const message = createBaseUpdateHttpRouterRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateHttpRouterRequest_LabelsEntry.$type, UpdateHttpRouterRequest_LabelsEntry);

function createBaseUpdateHttpRouterMetadata(): UpdateHttpRouterMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata", httpRouterId: "" };
}

export const UpdateHttpRouterMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata" as const,

  encode(message: UpdateHttpRouterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHttpRouterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateHttpRouterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRouterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateHttpRouterMetadata {
    return {
      $type: UpdateHttpRouterMetadata.$type,
      httpRouterId: isSet(object.httpRouterId) ? globalThis.String(object.httpRouterId) : "",
    };
  },

  toJSON(message: UpdateHttpRouterMetadata): unknown {
    const obj: any = {};
    if (message.httpRouterId !== "") {
      obj.httpRouterId = message.httpRouterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateHttpRouterMetadata>, I>>(base?: I): UpdateHttpRouterMetadata {
    return UpdateHttpRouterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateHttpRouterMetadata>, I>>(object: I): UpdateHttpRouterMetadata {
    const message = createBaseUpdateHttpRouterMetadata();
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateHttpRouterMetadata.$type, UpdateHttpRouterMetadata);

function createBaseCreateHttpRouterRequest(): CreateHttpRouterRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    virtualHosts: [],
    routeOptions: undefined,
  };
}

export const CreateHttpRouterRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest" as const,

  encode(message: CreateHttpRouterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateHttpRouterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    for (const v of message.virtualHosts) {
      VirtualHost.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.routeOptions !== undefined) {
      RouteOptions.encode(message.routeOptions, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateHttpRouterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateHttpRouterRequest();
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

          const entry4 = CreateHttpRouterRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.virtualHosts.push(VirtualHost.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.routeOptions = RouteOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateHttpRouterRequest {
    return {
      $type: CreateHttpRouterRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      virtualHosts: globalThis.Array.isArray(object?.virtualHosts)
        ? object.virtualHosts.map((e: any) => VirtualHost.fromJSON(e))
        : [],
      routeOptions: isSet(object.routeOptions) ? RouteOptions.fromJSON(object.routeOptions) : undefined,
    };
  },

  toJSON(message: CreateHttpRouterRequest): unknown {
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
    if (message.virtualHosts?.length) {
      obj.virtualHosts = message.virtualHosts.map((e) => VirtualHost.toJSON(e));
    }
    if (message.routeOptions !== undefined) {
      obj.routeOptions = RouteOptions.toJSON(message.routeOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateHttpRouterRequest>, I>>(base?: I): CreateHttpRouterRequest {
    return CreateHttpRouterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateHttpRouterRequest>, I>>(object: I): CreateHttpRouterRequest {
    const message = createBaseCreateHttpRouterRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.virtualHosts = object.virtualHosts?.map((e) => VirtualHost.fromPartial(e)) || [];
    message.routeOptions = (object.routeOptions !== undefined && object.routeOptions !== null)
      ? RouteOptions.fromPartial(object.routeOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateHttpRouterRequest.$type, CreateHttpRouterRequest);

function createBaseCreateHttpRouterRequest_LabelsEntry(): CreateHttpRouterRequest_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateHttpRouterRequest_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry" as const,

  encode(message: CreateHttpRouterRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateHttpRouterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateHttpRouterRequest_LabelsEntry();
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

  fromJSON(object: any): CreateHttpRouterRequest_LabelsEntry {
    return {
      $type: CreateHttpRouterRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateHttpRouterRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateHttpRouterRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateHttpRouterRequest_LabelsEntry {
    return CreateHttpRouterRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateHttpRouterRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateHttpRouterRequest_LabelsEntry {
    const message = createBaseCreateHttpRouterRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateHttpRouterRequest_LabelsEntry.$type, CreateHttpRouterRequest_LabelsEntry);

function createBaseCreateHttpRouterMetadata(): CreateHttpRouterMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata", httpRouterId: "" };
}

export const CreateHttpRouterMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata" as const,

  encode(message: CreateHttpRouterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateHttpRouterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateHttpRouterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRouterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateHttpRouterMetadata {
    return {
      $type: CreateHttpRouterMetadata.$type,
      httpRouterId: isSet(object.httpRouterId) ? globalThis.String(object.httpRouterId) : "",
    };
  },

  toJSON(message: CreateHttpRouterMetadata): unknown {
    const obj: any = {};
    if (message.httpRouterId !== "") {
      obj.httpRouterId = message.httpRouterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateHttpRouterMetadata>, I>>(base?: I): CreateHttpRouterMetadata {
    return CreateHttpRouterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateHttpRouterMetadata>, I>>(object: I): CreateHttpRouterMetadata {
    const message = createBaseCreateHttpRouterMetadata();
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateHttpRouterMetadata.$type, CreateHttpRouterMetadata);

function createBaseListHttpRouterOperationsRequest(): ListHttpRouterOperationsRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest",
    httpRouterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListHttpRouterOperationsRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest" as const,

  encode(message: ListHttpRouterOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHttpRouterOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHttpRouterOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRouterId = reader.string();
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

  fromJSON(object: any): ListHttpRouterOperationsRequest {
    return {
      $type: ListHttpRouterOperationsRequest.$type,
      httpRouterId: isSet(object.httpRouterId) ? globalThis.String(object.httpRouterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListHttpRouterOperationsRequest): unknown {
    const obj: any = {};
    if (message.httpRouterId !== "") {
      obj.httpRouterId = message.httpRouterId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHttpRouterOperationsRequest>, I>>(base?: I): ListHttpRouterOperationsRequest {
    return ListHttpRouterOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHttpRouterOperationsRequest>, I>>(
    object: I,
  ): ListHttpRouterOperationsRequest {
    const message = createBaseListHttpRouterOperationsRequest();
    message.httpRouterId = object.httpRouterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHttpRouterOperationsRequest.$type, ListHttpRouterOperationsRequest);

function createBaseListHttpRouterOperationsResponse(): ListHttpRouterOperationsResponse {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListHttpRouterOperationsResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse" as const,

  encode(message: ListHttpRouterOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHttpRouterOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHttpRouterOperationsResponse();
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

  fromJSON(object: any): ListHttpRouterOperationsResponse {
    return {
      $type: ListHttpRouterOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListHttpRouterOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHttpRouterOperationsResponse>, I>>(
    base?: I,
  ): ListHttpRouterOperationsResponse {
    return ListHttpRouterOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHttpRouterOperationsResponse>, I>>(
    object: I,
  ): ListHttpRouterOperationsResponse {
    const message = createBaseListHttpRouterOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHttpRouterOperationsResponse.$type, ListHttpRouterOperationsResponse);

/** A set of methods for managing HTTP routers. */
export type HttpRouterServiceService = typeof HttpRouterServiceService;
export const HttpRouterServiceService = {
  /**
   * Returns the specified HTTP router.
   *
   * To get the list of all available HTTP routers, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetHttpRouterRequest) => Buffer.from(GetHttpRouterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetHttpRouterRequest.decode(value),
    responseSerialize: (value: HttpRouter) => Buffer.from(HttpRouter.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HttpRouter.decode(value),
  },
  /** Lists HTTP routers in the specified folder. */
  list: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHttpRoutersRequest) => Buffer.from(ListHttpRoutersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListHttpRoutersRequest.decode(value),
    responseSerialize: (value: ListHttpRoutersResponse) => Buffer.from(ListHttpRoutersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListHttpRoutersResponse.decode(value),
  },
  /** Creates an HTTP router in the specified folder. */
  create: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateHttpRouterRequest) => Buffer.from(CreateHttpRouterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateHttpRouterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified HTTP router. */
  update: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateHttpRouterRequest) => Buffer.from(UpdateHttpRouterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateHttpRouterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified HTTP router. */
  delete: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteHttpRouterRequest) => Buffer.from(DeleteHttpRouterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteHttpRouterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified HTTP router. */
  listOperations: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHttpRouterOperationsRequest) =>
      Buffer.from(ListHttpRouterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListHttpRouterOperationsRequest.decode(value),
    responseSerialize: (value: ListHttpRouterOperationsResponse) =>
      Buffer.from(ListHttpRouterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListHttpRouterOperationsResponse.decode(value),
  },
} as const;

export interface HttpRouterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified HTTP router.
   *
   * To get the list of all available HTTP routers, make a [List] request.
   */
  get: handleUnaryCall<GetHttpRouterRequest, HttpRouter>;
  /** Lists HTTP routers in the specified folder. */
  list: handleUnaryCall<ListHttpRoutersRequest, ListHttpRoutersResponse>;
  /** Creates an HTTP router in the specified folder. */
  create: handleUnaryCall<CreateHttpRouterRequest, Operation>;
  /** Updates the specified HTTP router. */
  update: handleUnaryCall<UpdateHttpRouterRequest, Operation>;
  /** Deletes the specified HTTP router. */
  delete: handleUnaryCall<DeleteHttpRouterRequest, Operation>;
  /** Lists operations for the specified HTTP router. */
  listOperations: handleUnaryCall<ListHttpRouterOperationsRequest, ListHttpRouterOperationsResponse>;
}

export interface HttpRouterServiceClient extends Client {
  /**
   * Returns the specified HTTP router.
   *
   * To get the list of all available HTTP routers, make a [List] request.
   */
  get(
    request: GetHttpRouterRequest,
    callback: (error: ServiceError | null, response: HttpRouter) => void,
  ): ClientUnaryCall;
  get(
    request: GetHttpRouterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HttpRouter) => void,
  ): ClientUnaryCall;
  get(
    request: GetHttpRouterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HttpRouter) => void,
  ): ClientUnaryCall;
  /** Lists HTTP routers in the specified folder. */
  list(
    request: ListHttpRoutersRequest,
    callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListHttpRoutersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListHttpRoutersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void,
  ): ClientUnaryCall;
  /** Creates an HTTP router in the specified folder. */
  create(
    request: CreateHttpRouterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateHttpRouterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateHttpRouterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified HTTP router. */
  update(
    request: UpdateHttpRouterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateHttpRouterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateHttpRouterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified HTTP router. */
  delete(
    request: DeleteHttpRouterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteHttpRouterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteHttpRouterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified HTTP router. */
  listOperations(
    request: ListHttpRouterOperationsRequest,
    callback: (error: ServiceError | null, response: ListHttpRouterOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListHttpRouterOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListHttpRouterOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListHttpRouterOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListHttpRouterOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const HttpRouterServiceClient = makeGenericClientConstructor(
  HttpRouterServiceService,
  "yandex.cloud.apploadbalancer.v1.HttpRouterService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): HttpRouterServiceClient;
  service: typeof HttpRouterServiceService;
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
