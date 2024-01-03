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
import { Gateway } from "./gateway";

export const protobufPackage = "yandex.cloud.vpc.v1";

export interface GetGatewayRequest {
  $type: "yandex.cloud.vpc.v1.GetGatewayRequest";
  /**
   * ID of the Gateway resource to return.
   *
   * To get Gateway resource ID make a [GatewayService.List] request.
   */
  gatewayId: string;
}

export interface ListGatewaysRequest {
  $type: "yandex.cloud.vpc.v1.ListGatewaysRequest";
  /**
   * ID of the folder to list gateways in.
   *
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListGatewaysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListGatewaysResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters Gateway listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Gateway.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-gateway`.
   */
  filter: string;
}

export interface ListGatewaysResponse {
  $type: "yandex.cloud.vpc.v1.ListGatewaysResponse";
  /** List of gateways. */
  gateways: Gateway[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListGatewaysRequest.page_size], use `next_page_token` as the value
   * for the [ListGatewaysRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListGatewayOperationsRequest {
  $type: "yandex.cloud.vpc.v1.ListGatewayOperationsRequest";
  /**
   * ID of the gateway to list operations for.
   *
   * To get a gateway ID make a [GatewayService.List] request.
   */
  gatewayId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListGatewayOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListGatewayOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListGatewayOperationsResponse {
  $type: "yandex.cloud.vpc.v1.ListGatewayOperationsResponse";
  /** List of operations for the specified gateway. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListGatewayOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListGatewayOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface SharedEgressGatewaySpec {
  $type: "yandex.cloud.vpc.v1.SharedEgressGatewaySpec";
}

export interface CreateGatewayRequest {
  $type: "yandex.cloud.vpc.v1.CreateGatewayRequest";
  /**
   * ID of the folder to create a gateway in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the gateway.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the gateway. */
  description: string;
  /** Gateway labels as `key:value` pairs. */
  labels: { [key: string]: string };
  sharedEgressGatewaySpec?: SharedEgressGatewaySpec | undefined;
}

export interface CreateGatewayRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.CreateGatewayRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateGatewayMetadata {
  $type: "yandex.cloud.vpc.v1.CreateGatewayMetadata";
  /** ID of the gateway that is being created. */
  gatewayId: string;
}

export interface UpdateGatewayRequest {
  $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest";
  /**
   * ID of the gateway to update.
   *
   * To get the gateway ID make a [GatewayService.List] request.
   */
  gatewayId: string;
  /** Field mask that specifies which attributes of the Gateway should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the gateway.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the gateway. */
  description: string;
  /**
   * Gateway labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [GatewayService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  sharedEgressGatewaySpec?: SharedEgressGatewaySpec | undefined;
}

export interface UpdateGatewayRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateGatewayMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateGatewayMetadata";
  /** ID of the Gateway that is being updated. */
  gatewayId: string;
}

export interface DeleteGatewayRequest {
  $type: "yandex.cloud.vpc.v1.DeleteGatewayRequest";
  /**
   * ID of the gateway to delete.
   *
   * To get a gateway ID make a [GatewayService.List] request.
   */
  gatewayId: string;
}

export interface DeleteGatewayMetadata {
  $type: "yandex.cloud.vpc.v1.DeleteGatewayMetadata";
  /** ID of the gateway that is being deleted. */
  gatewayId: string;
}

export interface MoveGatewayRequest {
  $type: "yandex.cloud.vpc.v1.MoveGatewayRequest";
  gatewayId: string;
  destinationFolderId: string;
}

export interface MoveGatewayMetadata {
  $type: "yandex.cloud.vpc.v1.MoveGatewayMetadata";
  gatewayId: string;
}

function createBaseGetGatewayRequest(): GetGatewayRequest {
  return { $type: "yandex.cloud.vpc.v1.GetGatewayRequest", gatewayId: "" };
}

export const GetGatewayRequest = {
  $type: "yandex.cloud.vpc.v1.GetGatewayRequest" as const,

  encode(message: GetGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gatewayId !== "") {
      writer.uint32(10).string(message.gatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGatewayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGatewayRequest {
    return {
      $type: GetGatewayRequest.$type,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
    };
  },

  toJSON(message: GetGatewayRequest): unknown {
    const obj: any = {};
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGatewayRequest>, I>>(base?: I): GetGatewayRequest {
    return GetGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGatewayRequest>, I>>(object: I): GetGatewayRequest {
    const message = createBaseGetGatewayRequest();
    message.gatewayId = object.gatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetGatewayRequest.$type, GetGatewayRequest);

function createBaseListGatewaysRequest(): ListGatewaysRequest {
  return { $type: "yandex.cloud.vpc.v1.ListGatewaysRequest", folderId: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListGatewaysRequest = {
  $type: "yandex.cloud.vpc.v1.ListGatewaysRequest" as const,

  encode(message: ListGatewaysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGatewaysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGatewaysRequest();
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

  fromJSON(object: any): ListGatewaysRequest {
    return {
      $type: ListGatewaysRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListGatewaysRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListGatewaysRequest>, I>>(base?: I): ListGatewaysRequest {
    return ListGatewaysRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGatewaysRequest>, I>>(object: I): ListGatewaysRequest {
    const message = createBaseListGatewaysRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGatewaysRequest.$type, ListGatewaysRequest);

function createBaseListGatewaysResponse(): ListGatewaysResponse {
  return { $type: "yandex.cloud.vpc.v1.ListGatewaysResponse", gateways: [], nextPageToken: "" };
}

export const ListGatewaysResponse = {
  $type: "yandex.cloud.vpc.v1.ListGatewaysResponse" as const,

  encode(message: ListGatewaysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gateways) {
      Gateway.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGatewaysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGatewaysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gateways.push(Gateway.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListGatewaysResponse {
    return {
      $type: ListGatewaysResponse.$type,
      gateways: globalThis.Array.isArray(object?.gateways) ? object.gateways.map((e: any) => Gateway.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListGatewaysResponse): unknown {
    const obj: any = {};
    if (message.gateways?.length) {
      obj.gateways = message.gateways.map((e) => Gateway.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGatewaysResponse>, I>>(base?: I): ListGatewaysResponse {
    return ListGatewaysResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGatewaysResponse>, I>>(object: I): ListGatewaysResponse {
    const message = createBaseListGatewaysResponse();
    message.gateways = object.gateways?.map((e) => Gateway.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGatewaysResponse.$type, ListGatewaysResponse);

function createBaseListGatewayOperationsRequest(): ListGatewayOperationsRequest {
  return { $type: "yandex.cloud.vpc.v1.ListGatewayOperationsRequest", gatewayId: "", pageSize: 0, pageToken: "" };
}

export const ListGatewayOperationsRequest = {
  $type: "yandex.cloud.vpc.v1.ListGatewayOperationsRequest" as const,

  encode(message: ListGatewayOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gatewayId !== "") {
      writer.uint32(10).string(message.gatewayId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGatewayOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGatewayOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gatewayId = reader.string();
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

  fromJSON(object: any): ListGatewayOperationsRequest {
    return {
      $type: ListGatewayOperationsRequest.$type,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListGatewayOperationsRequest): unknown {
    const obj: any = {};
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGatewayOperationsRequest>, I>>(base?: I): ListGatewayOperationsRequest {
    return ListGatewayOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGatewayOperationsRequest>, I>>(object: I): ListGatewayOperationsRequest {
    const message = createBaseListGatewayOperationsRequest();
    message.gatewayId = object.gatewayId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGatewayOperationsRequest.$type, ListGatewayOperationsRequest);

function createBaseListGatewayOperationsResponse(): ListGatewayOperationsResponse {
  return { $type: "yandex.cloud.vpc.v1.ListGatewayOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListGatewayOperationsResponse = {
  $type: "yandex.cloud.vpc.v1.ListGatewayOperationsResponse" as const,

  encode(message: ListGatewayOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGatewayOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGatewayOperationsResponse();
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

  fromJSON(object: any): ListGatewayOperationsResponse {
    return {
      $type: ListGatewayOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListGatewayOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGatewayOperationsResponse>, I>>(base?: I): ListGatewayOperationsResponse {
    return ListGatewayOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGatewayOperationsResponse>, I>>(
    object: I,
  ): ListGatewayOperationsResponse {
    const message = createBaseListGatewayOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGatewayOperationsResponse.$type, ListGatewayOperationsResponse);

function createBaseSharedEgressGatewaySpec(): SharedEgressGatewaySpec {
  return { $type: "yandex.cloud.vpc.v1.SharedEgressGatewaySpec" };
}

export const SharedEgressGatewaySpec = {
  $type: "yandex.cloud.vpc.v1.SharedEgressGatewaySpec" as const,

  encode(_: SharedEgressGatewaySpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SharedEgressGatewaySpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSharedEgressGatewaySpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SharedEgressGatewaySpec {
    return { $type: SharedEgressGatewaySpec.$type };
  },

  toJSON(_: SharedEgressGatewaySpec): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedEgressGatewaySpec>, I>>(base?: I): SharedEgressGatewaySpec {
    return SharedEgressGatewaySpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SharedEgressGatewaySpec>, I>>(_: I): SharedEgressGatewaySpec {
    const message = createBaseSharedEgressGatewaySpec();
    return message;
  },
};

messageTypeRegistry.set(SharedEgressGatewaySpec.$type, SharedEgressGatewaySpec);

function createBaseCreateGatewayRequest(): CreateGatewayRequest {
  return {
    $type: "yandex.cloud.vpc.v1.CreateGatewayRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    sharedEgressGatewaySpec: undefined,
  };
}

export const CreateGatewayRequest = {
  $type: "yandex.cloud.vpc.v1.CreateGatewayRequest" as const,

  encode(message: CreateGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateGatewayRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.CreateGatewayRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.sharedEgressGatewaySpec !== undefined) {
      SharedEgressGatewaySpec.encode(message.sharedEgressGatewaySpec, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGatewayRequest();
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

          const entry4 = CreateGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sharedEgressGatewaySpec = SharedEgressGatewaySpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGatewayRequest {
    return {
      $type: CreateGatewayRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      sharedEgressGatewaySpec: isSet(object.sharedEgressGatewaySpec)
        ? SharedEgressGatewaySpec.fromJSON(object.sharedEgressGatewaySpec)
        : undefined,
    };
  },

  toJSON(message: CreateGatewayRequest): unknown {
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
    if (message.sharedEgressGatewaySpec !== undefined) {
      obj.sharedEgressGatewaySpec = SharedEgressGatewaySpec.toJSON(message.sharedEgressGatewaySpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGatewayRequest>, I>>(base?: I): CreateGatewayRequest {
    return CreateGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGatewayRequest>, I>>(object: I): CreateGatewayRequest {
    const message = createBaseCreateGatewayRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.sharedEgressGatewaySpec =
      (object.sharedEgressGatewaySpec !== undefined && object.sharedEgressGatewaySpec !== null)
        ? SharedEgressGatewaySpec.fromPartial(object.sharedEgressGatewaySpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateGatewayRequest.$type, CreateGatewayRequest);

function createBaseCreateGatewayRequest_LabelsEntry(): CreateGatewayRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.CreateGatewayRequest.LabelsEntry", key: "", value: "" };
}

export const CreateGatewayRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.CreateGatewayRequest.LabelsEntry" as const,

  encode(message: CreateGatewayRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGatewayRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGatewayRequest_LabelsEntry();
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

  fromJSON(object: any): CreateGatewayRequest_LabelsEntry {
    return {
      $type: CreateGatewayRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateGatewayRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGatewayRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateGatewayRequest_LabelsEntry {
    return CreateGatewayRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGatewayRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateGatewayRequest_LabelsEntry {
    const message = createBaseCreateGatewayRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateGatewayRequest_LabelsEntry.$type, CreateGatewayRequest_LabelsEntry);

function createBaseCreateGatewayMetadata(): CreateGatewayMetadata {
  return { $type: "yandex.cloud.vpc.v1.CreateGatewayMetadata", gatewayId: "" };
}

export const CreateGatewayMetadata = {
  $type: "yandex.cloud.vpc.v1.CreateGatewayMetadata" as const,

  encode(message: CreateGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gatewayId !== "") {
      writer.uint32(10).string(message.gatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGatewayMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGatewayMetadata {
    return {
      $type: CreateGatewayMetadata.$type,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
    };
  },

  toJSON(message: CreateGatewayMetadata): unknown {
    const obj: any = {};
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGatewayMetadata>, I>>(base?: I): CreateGatewayMetadata {
    return CreateGatewayMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGatewayMetadata>, I>>(object: I): CreateGatewayMetadata {
    const message = createBaseCreateGatewayMetadata();
    message.gatewayId = object.gatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateGatewayMetadata.$type, CreateGatewayMetadata);

function createBaseUpdateGatewayRequest(): UpdateGatewayRequest {
  return {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest",
    gatewayId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    sharedEgressGatewaySpec: undefined,
  };
}

export const UpdateGatewayRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest" as const,

  encode(message: UpdateGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gatewayId !== "") {
      writer.uint32(10).string(message.gatewayId);
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
      UpdateGatewayRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.sharedEgressGatewaySpec !== undefined) {
      SharedEgressGatewaySpec.encode(message.sharedEgressGatewaySpec, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGatewayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gatewayId = reader.string();
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

          const entry5 = UpdateGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sharedEgressGatewaySpec = SharedEgressGatewaySpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGatewayRequest {
    return {
      $type: UpdateGatewayRequest.$type,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      sharedEgressGatewaySpec: isSet(object.sharedEgressGatewaySpec)
        ? SharedEgressGatewaySpec.fromJSON(object.sharedEgressGatewaySpec)
        : undefined,
    };
  },

  toJSON(message: UpdateGatewayRequest): unknown {
    const obj: any = {};
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
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
    if (message.sharedEgressGatewaySpec !== undefined) {
      obj.sharedEgressGatewaySpec = SharedEgressGatewaySpec.toJSON(message.sharedEgressGatewaySpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGatewayRequest>, I>>(base?: I): UpdateGatewayRequest {
    return UpdateGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGatewayRequest>, I>>(object: I): UpdateGatewayRequest {
    const message = createBaseUpdateGatewayRequest();
    message.gatewayId = object.gatewayId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.sharedEgressGatewaySpec =
      (object.sharedEgressGatewaySpec !== undefined && object.sharedEgressGatewaySpec !== null)
        ? SharedEgressGatewaySpec.fromPartial(object.sharedEgressGatewaySpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateGatewayRequest.$type, UpdateGatewayRequest);

function createBaseUpdateGatewayRequest_LabelsEntry(): UpdateGatewayRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateGatewayRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest.LabelsEntry" as const,

  encode(message: UpdateGatewayRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGatewayRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGatewayRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateGatewayRequest_LabelsEntry {
    return {
      $type: UpdateGatewayRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateGatewayRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGatewayRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateGatewayRequest_LabelsEntry {
    return UpdateGatewayRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGatewayRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateGatewayRequest_LabelsEntry {
    const message = createBaseUpdateGatewayRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateGatewayRequest_LabelsEntry.$type, UpdateGatewayRequest_LabelsEntry);

function createBaseUpdateGatewayMetadata(): UpdateGatewayMetadata {
  return { $type: "yandex.cloud.vpc.v1.UpdateGatewayMetadata", gatewayId: "" };
}

export const UpdateGatewayMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateGatewayMetadata" as const,

  encode(message: UpdateGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gatewayId !== "") {
      writer.uint32(10).string(message.gatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGatewayMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGatewayMetadata {
    return {
      $type: UpdateGatewayMetadata.$type,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
    };
  },

  toJSON(message: UpdateGatewayMetadata): unknown {
    const obj: any = {};
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGatewayMetadata>, I>>(base?: I): UpdateGatewayMetadata {
    return UpdateGatewayMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGatewayMetadata>, I>>(object: I): UpdateGatewayMetadata {
    const message = createBaseUpdateGatewayMetadata();
    message.gatewayId = object.gatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateGatewayMetadata.$type, UpdateGatewayMetadata);

function createBaseDeleteGatewayRequest(): DeleteGatewayRequest {
  return { $type: "yandex.cloud.vpc.v1.DeleteGatewayRequest", gatewayId: "" };
}

export const DeleteGatewayRequest = {
  $type: "yandex.cloud.vpc.v1.DeleteGatewayRequest" as const,

  encode(message: DeleteGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gatewayId !== "") {
      writer.uint32(10).string(message.gatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGatewayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGatewayRequest {
    return {
      $type: DeleteGatewayRequest.$type,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
    };
  },

  toJSON(message: DeleteGatewayRequest): unknown {
    const obj: any = {};
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGatewayRequest>, I>>(base?: I): DeleteGatewayRequest {
    return DeleteGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGatewayRequest>, I>>(object: I): DeleteGatewayRequest {
    const message = createBaseDeleteGatewayRequest();
    message.gatewayId = object.gatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteGatewayRequest.$type, DeleteGatewayRequest);

function createBaseDeleteGatewayMetadata(): DeleteGatewayMetadata {
  return { $type: "yandex.cloud.vpc.v1.DeleteGatewayMetadata", gatewayId: "" };
}

export const DeleteGatewayMetadata = {
  $type: "yandex.cloud.vpc.v1.DeleteGatewayMetadata" as const,

  encode(message: DeleteGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gatewayId !== "") {
      writer.uint32(10).string(message.gatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGatewayMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGatewayMetadata {
    return {
      $type: DeleteGatewayMetadata.$type,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
    };
  },

  toJSON(message: DeleteGatewayMetadata): unknown {
    const obj: any = {};
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGatewayMetadata>, I>>(base?: I): DeleteGatewayMetadata {
    return DeleteGatewayMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGatewayMetadata>, I>>(object: I): DeleteGatewayMetadata {
    const message = createBaseDeleteGatewayMetadata();
    message.gatewayId = object.gatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteGatewayMetadata.$type, DeleteGatewayMetadata);

function createBaseMoveGatewayRequest(): MoveGatewayRequest {
  return { $type: "yandex.cloud.vpc.v1.MoveGatewayRequest", gatewayId: "", destinationFolderId: "" };
}

export const MoveGatewayRequest = {
  $type: "yandex.cloud.vpc.v1.MoveGatewayRequest" as const,

  encode(message: MoveGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gatewayId !== "") {
      writer.uint32(10).string(message.gatewayId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveGatewayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gatewayId = reader.string();
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

  fromJSON(object: any): MoveGatewayRequest {
    return {
      $type: MoveGatewayRequest.$type,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveGatewayRequest): unknown {
    const obj: any = {};
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveGatewayRequest>, I>>(base?: I): MoveGatewayRequest {
    return MoveGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveGatewayRequest>, I>>(object: I): MoveGatewayRequest {
    const message = createBaseMoveGatewayRequest();
    message.gatewayId = object.gatewayId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveGatewayRequest.$type, MoveGatewayRequest);

function createBaseMoveGatewayMetadata(): MoveGatewayMetadata {
  return { $type: "yandex.cloud.vpc.v1.MoveGatewayMetadata", gatewayId: "" };
}

export const MoveGatewayMetadata = {
  $type: "yandex.cloud.vpc.v1.MoveGatewayMetadata" as const,

  encode(message: MoveGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gatewayId !== "") {
      writer.uint32(10).string(message.gatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveGatewayMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveGatewayMetadata {
    return {
      $type: MoveGatewayMetadata.$type,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
    };
  },

  toJSON(message: MoveGatewayMetadata): unknown {
    const obj: any = {};
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveGatewayMetadata>, I>>(base?: I): MoveGatewayMetadata {
    return MoveGatewayMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveGatewayMetadata>, I>>(object: I): MoveGatewayMetadata {
    const message = createBaseMoveGatewayMetadata();
    message.gatewayId = object.gatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveGatewayMetadata.$type, MoveGatewayMetadata);

export type GatewayServiceService = typeof GatewayServiceService;
export const GatewayServiceService = {
  /**
   * Returns the specified Gateway resource.
   *
   * To get the list of all available Gateway resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.vpc.v1.GatewayService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGatewayRequest) => Buffer.from(GetGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGatewayRequest.decode(value),
    responseSerialize: (value: Gateway) => Buffer.from(Gateway.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Gateway.decode(value),
  },
  /** Retrieves the list of Gateway resources in the specified folder. */
  list: {
    path: "/yandex.cloud.vpc.v1.GatewayService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGatewaysRequest) => Buffer.from(ListGatewaysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGatewaysRequest.decode(value),
    responseSerialize: (value: ListGatewaysResponse) => Buffer.from(ListGatewaysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListGatewaysResponse.decode(value),
  },
  /** Creates a gateway in the specified folder. */
  create: {
    path: "/yandex.cloud.vpc.v1.GatewayService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGatewayRequest) => Buffer.from(CreateGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateGatewayRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified gateway. */
  update: {
    path: "/yandex.cloud.vpc.v1.GatewayService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateGatewayRequest) => Buffer.from(UpdateGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateGatewayRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified gateway. */
  delete: {
    path: "/yandex.cloud.vpc.v1.GatewayService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteGatewayRequest) => Buffer.from(DeleteGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteGatewayRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List operations for the specified gateway. */
  listOperations: {
    path: "/yandex.cloud.vpc.v1.GatewayService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGatewayOperationsRequest) =>
      Buffer.from(ListGatewayOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGatewayOperationsRequest.decode(value),
    responseSerialize: (value: ListGatewayOperationsResponse) =>
      Buffer.from(ListGatewayOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListGatewayOperationsResponse.decode(value),
  },
  /** Move a gateway to another folder */
  move: {
    path: "/yandex.cloud.vpc.v1.GatewayService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveGatewayRequest) => Buffer.from(MoveGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveGatewayRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface GatewayServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Gateway resource.
   *
   * To get the list of all available Gateway resources, make a [List] request.
   */
  get: handleUnaryCall<GetGatewayRequest, Gateway>;
  /** Retrieves the list of Gateway resources in the specified folder. */
  list: handleUnaryCall<ListGatewaysRequest, ListGatewaysResponse>;
  /** Creates a gateway in the specified folder. */
  create: handleUnaryCall<CreateGatewayRequest, Operation>;
  /** Updates the specified gateway. */
  update: handleUnaryCall<UpdateGatewayRequest, Operation>;
  /** Deletes the specified gateway. */
  delete: handleUnaryCall<DeleteGatewayRequest, Operation>;
  /** List operations for the specified gateway. */
  listOperations: handleUnaryCall<ListGatewayOperationsRequest, ListGatewayOperationsResponse>;
  /** Move a gateway to another folder */
  move: handleUnaryCall<MoveGatewayRequest, Operation>;
}

export interface GatewayServiceClient extends Client {
  /**
   * Returns the specified Gateway resource.
   *
   * To get the list of all available Gateway resources, make a [List] request.
   */
  get(request: GetGatewayRequest, callback: (error: ServiceError | null, response: Gateway) => void): ClientUnaryCall;
  get(
    request: GetGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Gateway) => void,
  ): ClientUnaryCall;
  get(
    request: GetGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Gateway) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Gateway resources in the specified folder. */
  list(
    request: ListGatewaysRequest,
    callback: (error: ServiceError | null, response: ListGatewaysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListGatewaysRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListGatewaysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListGatewaysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListGatewaysResponse) => void,
  ): ClientUnaryCall;
  /** Creates a gateway in the specified folder. */
  create(
    request: CreateGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified gateway. */
  update(
    request: UpdateGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified gateway. */
  delete(
    request: DeleteGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** List operations for the specified gateway. */
  listOperations(
    request: ListGatewayOperationsRequest,
    callback: (error: ServiceError | null, response: ListGatewayOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListGatewayOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListGatewayOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListGatewayOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListGatewayOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Move a gateway to another folder */
  move(
    request: MoveGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const GatewayServiceClient = makeGenericClientConstructor(
  GatewayServiceService,
  "yandex.cloud.vpc.v1.GatewayService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GatewayServiceClient;
  service: typeof GatewayServiceService;
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
