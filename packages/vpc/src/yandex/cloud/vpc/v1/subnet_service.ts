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
import { Reference } from "@yandex-cloud/core/dist/generated/yandex/cloud/reference/reference";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { DhcpOptions, IpVersion, ipVersionFromJSON, ipVersionToJSON, Subnet } from "./subnet";

export const protobufPackage = "yandex.cloud.vpc.v1";

export interface GetSubnetRequest {
  $type: "yandex.cloud.vpc.v1.GetSubnetRequest";
  /**
   * ID of the Subnet resource to return.
   * To get the subnet ID use a [SubnetService.List] request.
   */
  subnetId: string;
}

export interface ListSubnetsRequest {
  $type: "yandex.cloud.vpc.v1.ListSubnetsRequest";
  /**
   * ID of the folder to list subnets in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListSubnetsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSubnetsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Subnet.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListSubnetsResponse {
  $type: "yandex.cloud.vpc.v1.ListSubnetsResponse";
  /** List of Subnet resources. */
  subnets: Subnet[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSubnetsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListSubnetsRequest.page_token] query parameter
   * in the next list request. Subsequent list requests will have their own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSubnetRequest {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest";
  /**
   * ID of the folder to create a subnet in.
   * To get folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the subnet.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the subnet. */
  description: string;
  /** Resource labels, `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** ID of the network to create subnet in. */
  networkId: string;
  /**
   * ID of the availability zone where the subnet resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /**
   * CIDR block.
   * The range of internal addresses that are defined for this subnet.
   * This field can be set only at Subnet resource creation time and cannot be changed.
   * For example, 10.0.0.0/22 or 192.168.0.0/24.
   * Minimum subnet size is /28, maximum subnet size is /16.
   */
  v4CidrBlocks: string[];
  /** ID of route table the subnet is linked to. */
  routeTableId: string;
  dhcpOptions?: DhcpOptions | undefined;
}

export interface CreateSubnetRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSubnetMetadata {
  $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata";
  /** ID of the subnet that is being created. */
  subnetId: string;
}

export interface UpdateSubnetRequest {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest";
  /** ID of the Subnet resource to update. */
  subnetId: string;
  /** Field mask that specifies which fields of the Subnet resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the subnet.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the subnet. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** ID of route table the subnet is linked to. */
  routeTableId: string;
  dhcpOptions?: DhcpOptions | undefined;
}

export interface UpdateSubnetRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSubnetMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
}

export interface AddSubnetCidrBlocksRequest {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
  /**
   * CIDR block.
   * The range of internal addresses that should be added to this subnet.
   * For example, 10.0.0.0/22 or 192.168.0.0/24.
   * Minimum subnet size is /28, maximum subnet size is /16.
   */
  v4CidrBlocks: string[];
}

export interface AddSubnetCidrBlocksMetadata {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
}

export interface RemoveSubnetCidrBlocksRequest {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
  /**
   * CIDR block.
   * The range of internal addresses that are removed from this subnet.
   */
  v4CidrBlocks: string[];
}

export interface RemoveSubnetCidrBlocksMetadata {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
}

export interface DeleteSubnetRequest {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest";
  /**
   * ID of the subnet to delete.
   * To get the subnet ID use a [SubnetService.List] request.
   */
  subnetId: string;
}

export interface DeleteSubnetMetadata {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata";
  /** ID of the Subnet resource that is being deleted. */
  subnetId: string;
}

export interface ListSubnetOperationsRequest {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest";
  /** ID of the Subnet resource to list operations for. */
  subnetId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListSubnetOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSubnetOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSubnetOperationsResponse {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse";
  /** List of operations for the specified Subnet resource. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSubnetOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListSubnetOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MoveSubnetRequest {
  $type: "yandex.cloud.vpc.v1.MoveSubnetRequest";
  /** ID of the Subnet resource to move. */
  subnetId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveSubnetMetadata {
  $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata";
  /** ID of the Subnet resource that is being moved. */
  subnetId: string;
}

export interface ListUsedAddressesRequest {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest";
  subnetId: string;
  pageSize: number;
  pageToken: string;
  filter: string;
}

export interface ListUsedAddressesResponse {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse";
  addresses: UsedAddress[];
  nextPageToken: string;
}

export interface UsedAddress {
  $type: "yandex.cloud.vpc.v1.UsedAddress";
  address: string;
  ipVersion: IpVersion;
  references: Reference[];
}

function createBaseGetSubnetRequest(): GetSubnetRequest {
  return { $type: "yandex.cloud.vpc.v1.GetSubnetRequest", subnetId: "" };
}

export const GetSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.GetSubnetRequest" as const,

  encode(message: GetSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubnetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSubnetRequest {
    return {
      $type: GetSubnetRequest.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: GetSubnetRequest): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSubnetRequest>, I>>(base?: I): GetSubnetRequest {
    return GetSubnetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSubnetRequest>, I>>(object: I): GetSubnetRequest {
    const message = createBaseGetSubnetRequest();
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSubnetRequest.$type, GetSubnetRequest);

function createBaseListSubnetsRequest(): ListSubnetsRequest {
  return { $type: "yandex.cloud.vpc.v1.ListSubnetsRequest", folderId: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListSubnetsRequest = {
  $type: "yandex.cloud.vpc.v1.ListSubnetsRequest" as const,

  encode(message: ListSubnetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetsRequest();
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

  fromJSON(object: any): ListSubnetsRequest {
    return {
      $type: ListSubnetsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListSubnetsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListSubnetsRequest>, I>>(base?: I): ListSubnetsRequest {
    return ListSubnetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSubnetsRequest>, I>>(object: I): ListSubnetsRequest {
    const message = createBaseListSubnetsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSubnetsRequest.$type, ListSubnetsRequest);

function createBaseListSubnetsResponse(): ListSubnetsResponse {
  return { $type: "yandex.cloud.vpc.v1.ListSubnetsResponse", subnets: [], nextPageToken: "" };
}

export const ListSubnetsResponse = {
  $type: "yandex.cloud.vpc.v1.ListSubnetsResponse" as const,

  encode(message: ListSubnetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subnets) {
      Subnet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnets.push(Subnet.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSubnetsResponse {
    return {
      $type: ListSubnetsResponse.$type,
      subnets: globalThis.Array.isArray(object?.subnets) ? object.subnets.map((e: any) => Subnet.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSubnetsResponse): unknown {
    const obj: any = {};
    if (message.subnets?.length) {
      obj.subnets = message.subnets.map((e) => Subnet.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSubnetsResponse>, I>>(base?: I): ListSubnetsResponse {
    return ListSubnetsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSubnetsResponse>, I>>(object: I): ListSubnetsResponse {
    const message = createBaseListSubnetsResponse();
    message.subnets = object.subnets?.map((e) => Subnet.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSubnetsResponse.$type, ListSubnetsResponse);

function createBaseCreateSubnetRequest(): CreateSubnetRequest {
  return {
    $type: "yandex.cloud.vpc.v1.CreateSubnetRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    networkId: "",
    zoneId: "",
    v4CidrBlocks: [],
    routeTableId: "",
    dhcpOptions: undefined,
  };
}

export const CreateSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest" as const,

  encode(message: CreateSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateSubnetRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(42).string(message.networkId);
    }
    if (message.zoneId !== "") {
      writer.uint32(50).string(message.zoneId);
    }
    for (const v of message.v4CidrBlocks) {
      writer.uint32(58).string(v!);
    }
    if (message.routeTableId !== "") {
      writer.uint32(74).string(message.routeTableId);
    }
    if (message.dhcpOptions !== undefined) {
      DhcpOptions.encode(message.dhcpOptions, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubnetRequest();
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

          const entry4 = CreateSubnetRequest_LabelsEntry.decode(reader, reader.uint32());
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

          message.zoneId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.v4CidrBlocks.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.routeTableId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dhcpOptions = DhcpOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSubnetRequest {
    return {
      $type: CreateSubnetRequest.$type,
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
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      v4CidrBlocks: globalThis.Array.isArray(object?.v4CidrBlocks)
        ? object.v4CidrBlocks.map((e: any) => globalThis.String(e))
        : [],
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
      dhcpOptions: isSet(object.dhcpOptions) ? DhcpOptions.fromJSON(object.dhcpOptions) : undefined,
    };
  },

  toJSON(message: CreateSubnetRequest): unknown {
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
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.v4CidrBlocks?.length) {
      obj.v4CidrBlocks = message.v4CidrBlocks;
    }
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    if (message.dhcpOptions !== undefined) {
      obj.dhcpOptions = DhcpOptions.toJSON(message.dhcpOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubnetRequest>, I>>(base?: I): CreateSubnetRequest {
    return CreateSubnetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSubnetRequest>, I>>(object: I): CreateSubnetRequest {
    const message = createBaseCreateSubnetRequest();
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
    message.zoneId = object.zoneId ?? "";
    message.v4CidrBlocks = object.v4CidrBlocks?.map((e) => e) || [];
    message.routeTableId = object.routeTableId ?? "";
    message.dhcpOptions = (object.dhcpOptions !== undefined && object.dhcpOptions !== null)
      ? DhcpOptions.fromPartial(object.dhcpOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateSubnetRequest.$type, CreateSubnetRequest);

function createBaseCreateSubnetRequest_LabelsEntry(): CreateSubnetRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry", key: "", value: "" };
}

export const CreateSubnetRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry" as const,

  encode(message: CreateSubnetRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubnetRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubnetRequest_LabelsEntry();
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

  fromJSON(object: any): CreateSubnetRequest_LabelsEntry {
    return {
      $type: CreateSubnetRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateSubnetRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubnetRequest_LabelsEntry>, I>>(base?: I): CreateSubnetRequest_LabelsEntry {
    return CreateSubnetRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSubnetRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateSubnetRequest_LabelsEntry {
    const message = createBaseCreateSubnetRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSubnetRequest_LabelsEntry.$type, CreateSubnetRequest_LabelsEntry);

function createBaseCreateSubnetMetadata(): CreateSubnetMetadata {
  return { $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata", subnetId: "" };
}

export const CreateSubnetMetadata = {
  $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata" as const,

  encode(message: CreateSubnetMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubnetMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubnetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSubnetMetadata {
    return {
      $type: CreateSubnetMetadata.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: CreateSubnetMetadata): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubnetMetadata>, I>>(base?: I): CreateSubnetMetadata {
    return CreateSubnetMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSubnetMetadata>, I>>(object: I): CreateSubnetMetadata {
    const message = createBaseCreateSubnetMetadata();
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSubnetMetadata.$type, CreateSubnetMetadata);

function createBaseUpdateSubnetRequest(): UpdateSubnetRequest {
  return {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest",
    subnetId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    routeTableId: "",
    dhcpOptions: undefined,
  };
}

export const UpdateSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest" as const,

  encode(message: UpdateSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
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
      UpdateSubnetRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.routeTableId !== "") {
      writer.uint32(50).string(message.routeTableId);
    }
    if (message.dhcpOptions !== undefined) {
      DhcpOptions.encode(message.dhcpOptions, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubnetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
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

          const entry5 = UpdateSubnetRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.routeTableId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.dhcpOptions = DhcpOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSubnetRequest {
    return {
      $type: UpdateSubnetRequest.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
      dhcpOptions: isSet(object.dhcpOptions) ? DhcpOptions.fromJSON(object.dhcpOptions) : undefined,
    };
  },

  toJSON(message: UpdateSubnetRequest): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
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
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    if (message.dhcpOptions !== undefined) {
      obj.dhcpOptions = DhcpOptions.toJSON(message.dhcpOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSubnetRequest>, I>>(base?: I): UpdateSubnetRequest {
    return UpdateSubnetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSubnetRequest>, I>>(object: I): UpdateSubnetRequest {
    const message = createBaseUpdateSubnetRequest();
    message.subnetId = object.subnetId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.routeTableId = object.routeTableId ?? "";
    message.dhcpOptions = (object.dhcpOptions !== undefined && object.dhcpOptions !== null)
      ? DhcpOptions.fromPartial(object.dhcpOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateSubnetRequest.$type, UpdateSubnetRequest);

function createBaseUpdateSubnetRequest_LabelsEntry(): UpdateSubnetRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateSubnetRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry" as const,

  encode(message: UpdateSubnetRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubnetRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubnetRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateSubnetRequest_LabelsEntry {
    return {
      $type: UpdateSubnetRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateSubnetRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSubnetRequest_LabelsEntry>, I>>(base?: I): UpdateSubnetRequest_LabelsEntry {
    return UpdateSubnetRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSubnetRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateSubnetRequest_LabelsEntry {
    const message = createBaseUpdateSubnetRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSubnetRequest_LabelsEntry.$type, UpdateSubnetRequest_LabelsEntry);

function createBaseUpdateSubnetMetadata(): UpdateSubnetMetadata {
  return { $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata", subnetId: "" };
}

export const UpdateSubnetMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata" as const,

  encode(message: UpdateSubnetMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubnetMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubnetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSubnetMetadata {
    return {
      $type: UpdateSubnetMetadata.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: UpdateSubnetMetadata): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSubnetMetadata>, I>>(base?: I): UpdateSubnetMetadata {
    return UpdateSubnetMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSubnetMetadata>, I>>(object: I): UpdateSubnetMetadata {
    const message = createBaseUpdateSubnetMetadata();
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSubnetMetadata.$type, UpdateSubnetMetadata);

function createBaseAddSubnetCidrBlocksRequest(): AddSubnetCidrBlocksRequest {
  return { $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest", subnetId: "", v4CidrBlocks: [] };
}

export const AddSubnetCidrBlocksRequest = {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest" as const,

  encode(message: AddSubnetCidrBlocksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    for (const v of message.v4CidrBlocks) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSubnetCidrBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSubnetCidrBlocksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.v4CidrBlocks.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddSubnetCidrBlocksRequest {
    return {
      $type: AddSubnetCidrBlocksRequest.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      v4CidrBlocks: globalThis.Array.isArray(object?.v4CidrBlocks)
        ? object.v4CidrBlocks.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: AddSubnetCidrBlocksRequest): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.v4CidrBlocks?.length) {
      obj.v4CidrBlocks = message.v4CidrBlocks;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddSubnetCidrBlocksRequest>, I>>(base?: I): AddSubnetCidrBlocksRequest {
    return AddSubnetCidrBlocksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddSubnetCidrBlocksRequest>, I>>(object: I): AddSubnetCidrBlocksRequest {
    const message = createBaseAddSubnetCidrBlocksRequest();
    message.subnetId = object.subnetId ?? "";
    message.v4CidrBlocks = object.v4CidrBlocks?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AddSubnetCidrBlocksRequest.$type, AddSubnetCidrBlocksRequest);

function createBaseAddSubnetCidrBlocksMetadata(): AddSubnetCidrBlocksMetadata {
  return { $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata", subnetId: "" };
}

export const AddSubnetCidrBlocksMetadata = {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata" as const,

  encode(message: AddSubnetCidrBlocksMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSubnetCidrBlocksMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSubnetCidrBlocksMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddSubnetCidrBlocksMetadata {
    return {
      $type: AddSubnetCidrBlocksMetadata.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: AddSubnetCidrBlocksMetadata): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddSubnetCidrBlocksMetadata>, I>>(base?: I): AddSubnetCidrBlocksMetadata {
    return AddSubnetCidrBlocksMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddSubnetCidrBlocksMetadata>, I>>(object: I): AddSubnetCidrBlocksMetadata {
    const message = createBaseAddSubnetCidrBlocksMetadata();
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddSubnetCidrBlocksMetadata.$type, AddSubnetCidrBlocksMetadata);

function createBaseRemoveSubnetCidrBlocksRequest(): RemoveSubnetCidrBlocksRequest {
  return { $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest", subnetId: "", v4CidrBlocks: [] };
}

export const RemoveSubnetCidrBlocksRequest = {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest" as const,

  encode(message: RemoveSubnetCidrBlocksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    for (const v of message.v4CidrBlocks) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSubnetCidrBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSubnetCidrBlocksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.v4CidrBlocks.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveSubnetCidrBlocksRequest {
    return {
      $type: RemoveSubnetCidrBlocksRequest.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      v4CidrBlocks: globalThis.Array.isArray(object?.v4CidrBlocks)
        ? object.v4CidrBlocks.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RemoveSubnetCidrBlocksRequest): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.v4CidrBlocks?.length) {
      obj.v4CidrBlocks = message.v4CidrBlocks;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveSubnetCidrBlocksRequest>, I>>(base?: I): RemoveSubnetCidrBlocksRequest {
    return RemoveSubnetCidrBlocksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveSubnetCidrBlocksRequest>, I>>(
    object: I,
  ): RemoveSubnetCidrBlocksRequest {
    const message = createBaseRemoveSubnetCidrBlocksRequest();
    message.subnetId = object.subnetId ?? "";
    message.v4CidrBlocks = object.v4CidrBlocks?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RemoveSubnetCidrBlocksRequest.$type, RemoveSubnetCidrBlocksRequest);

function createBaseRemoveSubnetCidrBlocksMetadata(): RemoveSubnetCidrBlocksMetadata {
  return { $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata", subnetId: "" };
}

export const RemoveSubnetCidrBlocksMetadata = {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata" as const,

  encode(message: RemoveSubnetCidrBlocksMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSubnetCidrBlocksMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSubnetCidrBlocksMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveSubnetCidrBlocksMetadata {
    return {
      $type: RemoveSubnetCidrBlocksMetadata.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: RemoveSubnetCidrBlocksMetadata): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveSubnetCidrBlocksMetadata>, I>>(base?: I): RemoveSubnetCidrBlocksMetadata {
    return RemoveSubnetCidrBlocksMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveSubnetCidrBlocksMetadata>, I>>(
    object: I,
  ): RemoveSubnetCidrBlocksMetadata {
    const message = createBaseRemoveSubnetCidrBlocksMetadata();
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveSubnetCidrBlocksMetadata.$type, RemoveSubnetCidrBlocksMetadata);

function createBaseDeleteSubnetRequest(): DeleteSubnetRequest {
  return { $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest", subnetId: "" };
}

export const DeleteSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest" as const,

  encode(message: DeleteSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSubnetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSubnetRequest {
    return {
      $type: DeleteSubnetRequest.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: DeleteSubnetRequest): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSubnetRequest>, I>>(base?: I): DeleteSubnetRequest {
    return DeleteSubnetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSubnetRequest>, I>>(object: I): DeleteSubnetRequest {
    const message = createBaseDeleteSubnetRequest();
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSubnetRequest.$type, DeleteSubnetRequest);

function createBaseDeleteSubnetMetadata(): DeleteSubnetMetadata {
  return { $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata", subnetId: "" };
}

export const DeleteSubnetMetadata = {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata" as const,

  encode(message: DeleteSubnetMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSubnetMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSubnetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSubnetMetadata {
    return {
      $type: DeleteSubnetMetadata.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: DeleteSubnetMetadata): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSubnetMetadata>, I>>(base?: I): DeleteSubnetMetadata {
    return DeleteSubnetMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSubnetMetadata>, I>>(object: I): DeleteSubnetMetadata {
    const message = createBaseDeleteSubnetMetadata();
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSubnetMetadata.$type, DeleteSubnetMetadata);

function createBaseListSubnetOperationsRequest(): ListSubnetOperationsRequest {
  return { $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest", subnetId: "", pageSize: 0, pageToken: "" };
}

export const ListSubnetOperationsRequest = {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest" as const,

  encode(message: ListSubnetOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
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

  fromJSON(object: any): ListSubnetOperationsRequest {
    return {
      $type: ListSubnetOperationsRequest.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSubnetOperationsRequest): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSubnetOperationsRequest>, I>>(base?: I): ListSubnetOperationsRequest {
    return ListSubnetOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSubnetOperationsRequest>, I>>(object: I): ListSubnetOperationsRequest {
    const message = createBaseListSubnetOperationsRequest();
    message.subnetId = object.subnetId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSubnetOperationsRequest.$type, ListSubnetOperationsRequest);

function createBaseListSubnetOperationsResponse(): ListSubnetOperationsResponse {
  return { $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListSubnetOperationsResponse = {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse" as const,

  encode(message: ListSubnetOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetOperationsResponse();
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

  fromJSON(object: any): ListSubnetOperationsResponse {
    return {
      $type: ListSubnetOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSubnetOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSubnetOperationsResponse>, I>>(base?: I): ListSubnetOperationsResponse {
    return ListSubnetOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSubnetOperationsResponse>, I>>(object: I): ListSubnetOperationsResponse {
    const message = createBaseListSubnetOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSubnetOperationsResponse.$type, ListSubnetOperationsResponse);

function createBaseMoveSubnetRequest(): MoveSubnetRequest {
  return { $type: "yandex.cloud.vpc.v1.MoveSubnetRequest", subnetId: "", destinationFolderId: "" };
}

export const MoveSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.MoveSubnetRequest" as const,

  encode(message: MoveSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveSubnetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
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

  fromJSON(object: any): MoveSubnetRequest {
    return {
      $type: MoveSubnetRequest.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveSubnetRequest): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveSubnetRequest>, I>>(base?: I): MoveSubnetRequest {
    return MoveSubnetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveSubnetRequest>, I>>(object: I): MoveSubnetRequest {
    const message = createBaseMoveSubnetRequest();
    message.subnetId = object.subnetId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveSubnetRequest.$type, MoveSubnetRequest);

function createBaseMoveSubnetMetadata(): MoveSubnetMetadata {
  return { $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata", subnetId: "" };
}

export const MoveSubnetMetadata = {
  $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata" as const,

  encode(message: MoveSubnetMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveSubnetMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveSubnetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveSubnetMetadata {
    return {
      $type: MoveSubnetMetadata.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: MoveSubnetMetadata): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveSubnetMetadata>, I>>(base?: I): MoveSubnetMetadata {
    return MoveSubnetMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveSubnetMetadata>, I>>(object: I): MoveSubnetMetadata {
    const message = createBaseMoveSubnetMetadata();
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveSubnetMetadata.$type, MoveSubnetMetadata);

function createBaseListUsedAddressesRequest(): ListUsedAddressesRequest {
  return {
    $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest",
    subnetId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListUsedAddressesRequest = {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest" as const,

  encode(message: ListUsedAddressesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsedAddressesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsedAddressesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
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

  fromJSON(object: any): ListUsedAddressesRequest {
    return {
      $type: ListUsedAddressesRequest.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListUsedAddressesRequest): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
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

  create<I extends Exact<DeepPartial<ListUsedAddressesRequest>, I>>(base?: I): ListUsedAddressesRequest {
    return ListUsedAddressesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUsedAddressesRequest>, I>>(object: I): ListUsedAddressesRequest {
    const message = createBaseListUsedAddressesRequest();
    message.subnetId = object.subnetId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListUsedAddressesRequest.$type, ListUsedAddressesRequest);

function createBaseListUsedAddressesResponse(): ListUsedAddressesResponse {
  return { $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse", addresses: [], nextPageToken: "" };
}

export const ListUsedAddressesResponse = {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse" as const,

  encode(message: ListUsedAddressesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      UsedAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsedAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsedAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addresses.push(UsedAddress.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListUsedAddressesResponse {
    return {
      $type: ListUsedAddressesResponse.$type,
      addresses: globalThis.Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => UsedAddress.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListUsedAddressesResponse): unknown {
    const obj: any = {};
    if (message.addresses?.length) {
      obj.addresses = message.addresses.map((e) => UsedAddress.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUsedAddressesResponse>, I>>(base?: I): ListUsedAddressesResponse {
    return ListUsedAddressesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUsedAddressesResponse>, I>>(object: I): ListUsedAddressesResponse {
    const message = createBaseListUsedAddressesResponse();
    message.addresses = object.addresses?.map((e) => UsedAddress.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListUsedAddressesResponse.$type, ListUsedAddressesResponse);

function createBaseUsedAddress(): UsedAddress {
  return { $type: "yandex.cloud.vpc.v1.UsedAddress", address: "", ipVersion: 0, references: [] };
}

export const UsedAddress = {
  $type: "yandex.cloud.vpc.v1.UsedAddress" as const,

  encode(message: UsedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(16).int32(message.ipVersion);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsedAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ipVersion = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.references.push(Reference.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UsedAddress {
    return {
      $type: UsedAddress.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      ipVersion: isSet(object.ipVersion) ? ipVersionFromJSON(object.ipVersion) : 0,
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UsedAddress): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.ipVersion !== 0) {
      obj.ipVersion = ipVersionToJSON(message.ipVersion);
    }
    if (message.references?.length) {
      obj.references = message.references.map((e) => Reference.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UsedAddress>, I>>(base?: I): UsedAddress {
    return UsedAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UsedAddress>, I>>(object: I): UsedAddress {
    const message = createBaseUsedAddress();
    message.address = object.address ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UsedAddress.$type, UsedAddress);

/** A set of methods for managing Subnet resources. */
export type SubnetServiceService = typeof SubnetServiceService;
export const SubnetServiceService = {
  /**
   * Returns the specified Subnet resource.
   *
   * To get the list of available Subnet resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSubnetRequest) => Buffer.from(GetSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSubnetRequest.decode(value),
    responseSerialize: (value: Subnet) => Buffer.from(Subnet.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Subnet.decode(value),
  },
  /** Retrieves the list of Subnet resources in the specified folder. */
  list: {
    path: "/yandex.cloud.vpc.v1.SubnetService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSubnetsRequest) => Buffer.from(ListSubnetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSubnetsRequest.decode(value),
    responseSerialize: (value: ListSubnetsResponse) => Buffer.from(ListSubnetsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSubnetsResponse.decode(value),
  },
  /**
   * Creates a subnet in the specified folder and network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSubnetRequest) => Buffer.from(CreateSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSubnetRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSubnetRequest) => Buffer.from(UpdateSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSubnetRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Adds CIDR blocks to the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  addCidrBlocks: {
    path: "/yandex.cloud.vpc.v1.SubnetService/AddCidrBlocks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddSubnetCidrBlocksRequest) =>
      Buffer.from(AddSubnetCidrBlocksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddSubnetCidrBlocksRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Removes CIDR blocks from the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  removeCidrBlocks: {
    path: "/yandex.cloud.vpc.v1.SubnetService/RemoveCidrBlocks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveSubnetCidrBlocksRequest) =>
      Buffer.from(RemoveSubnetCidrBlocksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveSubnetCidrBlocksRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified subnet. */
  delete: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSubnetRequest) => Buffer.from(DeleteSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSubnetRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List operations for the specified subnet. */
  listOperations: {
    path: "/yandex.cloud.vpc.v1.SubnetService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSubnetOperationsRequest) =>
      Buffer.from(ListSubnetOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSubnetOperationsRequest.decode(value),
    responseSerialize: (value: ListSubnetOperationsResponse) =>
      Buffer.from(ListSubnetOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSubnetOperationsResponse.decode(value),
  },
  /** Move subnet to another folder. */
  move: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveSubnetRequest) => Buffer.from(MoveSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveSubnetRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List used addresses in specified subnet. */
  listUsedAddresses: {
    path: "/yandex.cloud.vpc.v1.SubnetService/ListUsedAddresses",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListUsedAddressesRequest) => Buffer.from(ListUsedAddressesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListUsedAddressesRequest.decode(value),
    responseSerialize: (value: ListUsedAddressesResponse) =>
      Buffer.from(ListUsedAddressesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListUsedAddressesResponse.decode(value),
  },
} as const;

export interface SubnetServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Subnet resource.
   *
   * To get the list of available Subnet resources, make a [List] request.
   */
  get: handleUnaryCall<GetSubnetRequest, Subnet>;
  /** Retrieves the list of Subnet resources in the specified folder. */
  list: handleUnaryCall<ListSubnetsRequest, ListSubnetsResponse>;
  /**
   * Creates a subnet in the specified folder and network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: handleUnaryCall<CreateSubnetRequest, Operation>;
  /**
   * Updates the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update: handleUnaryCall<UpdateSubnetRequest, Operation>;
  /**
   * Adds CIDR blocks to the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  addCidrBlocks: handleUnaryCall<AddSubnetCidrBlocksRequest, Operation>;
  /**
   * Removes CIDR blocks from the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  removeCidrBlocks: handleUnaryCall<RemoveSubnetCidrBlocksRequest, Operation>;
  /** Deletes the specified subnet. */
  delete: handleUnaryCall<DeleteSubnetRequest, Operation>;
  /** List operations for the specified subnet. */
  listOperations: handleUnaryCall<ListSubnetOperationsRequest, ListSubnetOperationsResponse>;
  /** Move subnet to another folder. */
  move: handleUnaryCall<MoveSubnetRequest, Operation>;
  /** List used addresses in specified subnet. */
  listUsedAddresses: handleUnaryCall<ListUsedAddressesRequest, ListUsedAddressesResponse>;
}

export interface SubnetServiceClient extends Client {
  /**
   * Returns the specified Subnet resource.
   *
   * To get the list of available Subnet resources, make a [List] request.
   */
  get(request: GetSubnetRequest, callback: (error: ServiceError | null, response: Subnet) => void): ClientUnaryCall;
  get(
    request: GetSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Subnet) => void,
  ): ClientUnaryCall;
  get(
    request: GetSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Subnet) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Subnet resources in the specified folder. */
  list(
    request: ListSubnetsRequest,
    callback: (error: ServiceError | null, response: ListSubnetsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSubnetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSubnetsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSubnetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSubnetsResponse) => void,
  ): ClientUnaryCall;
  /**
   * Creates a subnet in the specified folder and network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create(
    request: CreateSubnetRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update(
    request: UpdateSubnetRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Adds CIDR blocks to the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  addCidrBlocks(
    request: AddSubnetCidrBlocksRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addCidrBlocks(
    request: AddSubnetCidrBlocksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addCidrBlocks(
    request: AddSubnetCidrBlocksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Removes CIDR blocks from the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  removeCidrBlocks(
    request: RemoveSubnetCidrBlocksRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeCidrBlocks(
    request: RemoveSubnetCidrBlocksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeCidrBlocks(
    request: RemoveSubnetCidrBlocksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified subnet. */
  delete(
    request: DeleteSubnetRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** List operations for the specified subnet. */
  listOperations(
    request: ListSubnetOperationsRequest,
    callback: (error: ServiceError | null, response: ListSubnetOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSubnetOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSubnetOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSubnetOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSubnetOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Move subnet to another folder. */
  move(
    request: MoveSubnetRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** List used addresses in specified subnet. */
  listUsedAddresses(
    request: ListUsedAddressesRequest,
    callback: (error: ServiceError | null, response: ListUsedAddressesResponse) => void,
  ): ClientUnaryCall;
  listUsedAddresses(
    request: ListUsedAddressesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListUsedAddressesResponse) => void,
  ): ClientUnaryCall;
  listUsedAddresses(
    request: ListUsedAddressesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListUsedAddressesResponse) => void,
  ): ClientUnaryCall;
}

export const SubnetServiceClient = makeGenericClientConstructor(
  SubnetServiceService,
  "yandex.cloud.vpc.v1.SubnetService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SubnetServiceClient;
  service: typeof SubnetServiceService;
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
