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
import { Address, AddressRequirements } from "./address";

export const protobufPackage = "yandex.cloud.vpc.v1";

export interface GetAddressRequest {
  $type: "yandex.cloud.vpc.v1.GetAddressRequest";
  /**
   * ID of the Address resource to return.
   *
   * To get Address resource ID make a [AddressService.List] request.
   */
  addressId: string;
}

export interface GetAddressByValueRequest {
  $type: "yandex.cloud.vpc.v1.GetAddressByValueRequest";
  externalIpv4Address?: string | undefined;
}

export interface ListAddressesRequest {
  $type: "yandex.cloud.vpc.v1.ListAddressesRequest";
  /**
   * ID of the folder to list addresses in.
   *
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListAddressesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListAddressesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters Address listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Address.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-address`.
   */
  filter: string;
}

export interface ListAddressesResponse {
  $type: "yandex.cloud.vpc.v1.ListAddressesResponse";
  /** List of addresses. */
  addresses: Address[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListAddressesRequest.page_size], use `next_page_token` as the value
   * for the [ListAddressesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateAddressRequest {
  $type: "yandex.cloud.vpc.v1.CreateAddressRequest";
  /**
   * ID of the folder to create a address in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the address.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the address. */
  description: string;
  /** Address labels as `key:value` pairs. */
  labels: { [key: string]: string };
  externalIpv4AddressSpec?:
    | ExternalIpv4AddressSpec
    | undefined;
  /** Specifies if address protected from deletion. */
  deletionProtection: boolean;
}

export interface CreateAddressRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.CreateAddressRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface ExternalIpv4AddressSpec {
  $type: "yandex.cloud.vpc.v1.ExternalIpv4AddressSpec";
  /** Value of address. */
  address: string;
  /** Availability zone from which the address will be allocated. */
  zoneId: string;
  /** Parameters of the allocated address, for example DDoS Protection. */
  requirements?: AddressRequirements | undefined;
}

export interface CreateAddressMetadata {
  $type: "yandex.cloud.vpc.v1.CreateAddressMetadata";
  /** ID of the address that is being created. */
  addressId: string;
}

export interface UpdateAddressRequest {
  $type: "yandex.cloud.vpc.v1.UpdateAddressRequest";
  /**
   * ID of the address to update.
   *
   * To get the address ID make a [AddressService.List] request.
   */
  addressId: string;
  /** Field mask that specifies which attributes of the Address should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the address.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the address. */
  description: string;
  /**
   * Address labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [AddressService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /** Specifies if address is reserved or not. */
  reserved: boolean;
  /** Specifies if address protected from deletion. */
  deletionProtection: boolean;
}

export interface UpdateAddressRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateAddressRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateAddressMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateAddressMetadata";
  /** ID of the Address that is being updated. */
  addressId: string;
}

export interface DeleteAddressRequest {
  $type: "yandex.cloud.vpc.v1.DeleteAddressRequest";
  /**
   * ID of the address to delete.
   *
   * To get a address ID make a [AddressService.List] request.
   */
  addressId: string;
}

export interface DeleteAddressMetadata {
  $type: "yandex.cloud.vpc.v1.DeleteAddressMetadata";
  /** ID of the address that is being deleted. */
  addressId: string;
}

export interface ListAddressOperationsRequest {
  $type: "yandex.cloud.vpc.v1.ListAddressOperationsRequest";
  /**
   * ID of the address to list operations for.
   *
   * To get a address ID make a [AddressService.List] request.
   */
  addressId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListAddressOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListAddressOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListAddressOperationsResponse {
  $type: "yandex.cloud.vpc.v1.ListAddressOperationsResponse";
  /** List of operations for the specified address. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListAddressOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListAddressOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MoveAddressRequest {
  $type: "yandex.cloud.vpc.v1.MoveAddressRequest";
  addressId: string;
  destinationFolderId: string;
}

export interface MoveAddressMetadata {
  $type: "yandex.cloud.vpc.v1.MoveAddressMetadata";
  addressId: string;
}

function createBaseGetAddressRequest(): GetAddressRequest {
  return { $type: "yandex.cloud.vpc.v1.GetAddressRequest", addressId: "" };
}

export const GetAddressRequest = {
  $type: "yandex.cloud.vpc.v1.GetAddressRequest" as const,

  encode(message: GetAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressId !== "") {
      writer.uint32(10).string(message.addressId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAddressRequest {
    return {
      $type: GetAddressRequest.$type,
      addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
    };
  },

  toJSON(message: GetAddressRequest): unknown {
    const obj: any = {};
    if (message.addressId !== "") {
      obj.addressId = message.addressId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAddressRequest>, I>>(base?: I): GetAddressRequest {
    return GetAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAddressRequest>, I>>(object: I): GetAddressRequest {
    const message = createBaseGetAddressRequest();
    message.addressId = object.addressId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetAddressRequest.$type, GetAddressRequest);

function createBaseGetAddressByValueRequest(): GetAddressByValueRequest {
  return { $type: "yandex.cloud.vpc.v1.GetAddressByValueRequest", externalIpv4Address: undefined };
}

export const GetAddressByValueRequest = {
  $type: "yandex.cloud.vpc.v1.GetAddressByValueRequest" as const,

  encode(message: GetAddressByValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalIpv4Address !== undefined) {
      writer.uint32(10).string(message.externalIpv4Address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAddressByValueRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAddressByValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalIpv4Address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAddressByValueRequest {
    return {
      $type: GetAddressByValueRequest.$type,
      externalIpv4Address: isSet(object.externalIpv4Address)
        ? globalThis.String(object.externalIpv4Address)
        : undefined,
    };
  },

  toJSON(message: GetAddressByValueRequest): unknown {
    const obj: any = {};
    if (message.externalIpv4Address !== undefined) {
      obj.externalIpv4Address = message.externalIpv4Address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAddressByValueRequest>, I>>(base?: I): GetAddressByValueRequest {
    return GetAddressByValueRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAddressByValueRequest>, I>>(object: I): GetAddressByValueRequest {
    const message = createBaseGetAddressByValueRequest();
    message.externalIpv4Address = object.externalIpv4Address ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GetAddressByValueRequest.$type, GetAddressByValueRequest);

function createBaseListAddressesRequest(): ListAddressesRequest {
  return { $type: "yandex.cloud.vpc.v1.ListAddressesRequest", folderId: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListAddressesRequest = {
  $type: "yandex.cloud.vpc.v1.ListAddressesRequest" as const,

  encode(message: ListAddressesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAddressesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAddressesRequest();
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

  fromJSON(object: any): ListAddressesRequest {
    return {
      $type: ListAddressesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListAddressesRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListAddressesRequest>, I>>(base?: I): ListAddressesRequest {
    return ListAddressesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAddressesRequest>, I>>(object: I): ListAddressesRequest {
    const message = createBaseListAddressesRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAddressesRequest.$type, ListAddressesRequest);

function createBaseListAddressesResponse(): ListAddressesResponse {
  return { $type: "yandex.cloud.vpc.v1.ListAddressesResponse", addresses: [], nextPageToken: "" };
}

export const ListAddressesResponse = {
  $type: "yandex.cloud.vpc.v1.ListAddressesResponse" as const,

  encode(message: ListAddressesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addresses.push(Address.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListAddressesResponse {
    return {
      $type: ListAddressesResponse.$type,
      addresses: globalThis.Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => Address.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListAddressesResponse): unknown {
    const obj: any = {};
    if (message.addresses?.length) {
      obj.addresses = message.addresses.map((e) => Address.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAddressesResponse>, I>>(base?: I): ListAddressesResponse {
    return ListAddressesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAddressesResponse>, I>>(object: I): ListAddressesResponse {
    const message = createBaseListAddressesResponse();
    message.addresses = object.addresses?.map((e) => Address.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAddressesResponse.$type, ListAddressesResponse);

function createBaseCreateAddressRequest(): CreateAddressRequest {
  return {
    $type: "yandex.cloud.vpc.v1.CreateAddressRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    externalIpv4AddressSpec: undefined,
    deletionProtection: false,
  };
}

export const CreateAddressRequest = {
  $type: "yandex.cloud.vpc.v1.CreateAddressRequest" as const,

  encode(message: CreateAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateAddressRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.CreateAddressRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.externalIpv4AddressSpec !== undefined) {
      ExternalIpv4AddressSpec.encode(message.externalIpv4AddressSpec, writer.uint32(42).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(80).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAddressRequest();
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

          const entry4 = CreateAddressRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.externalIpv4AddressSpec = ExternalIpv4AddressSpec.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAddressRequest {
    return {
      $type: CreateAddressRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      externalIpv4AddressSpec: isSet(object.externalIpv4AddressSpec)
        ? ExternalIpv4AddressSpec.fromJSON(object.externalIpv4AddressSpec)
        : undefined,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: CreateAddressRequest): unknown {
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
    if (message.externalIpv4AddressSpec !== undefined) {
      obj.externalIpv4AddressSpec = ExternalIpv4AddressSpec.toJSON(message.externalIpv4AddressSpec);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAddressRequest>, I>>(base?: I): CreateAddressRequest {
    return CreateAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAddressRequest>, I>>(object: I): CreateAddressRequest {
    const message = createBaseCreateAddressRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.externalIpv4AddressSpec =
      (object.externalIpv4AddressSpec !== undefined && object.externalIpv4AddressSpec !== null)
        ? ExternalIpv4AddressSpec.fromPartial(object.externalIpv4AddressSpec)
        : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateAddressRequest.$type, CreateAddressRequest);

function createBaseCreateAddressRequest_LabelsEntry(): CreateAddressRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.CreateAddressRequest.LabelsEntry", key: "", value: "" };
}

export const CreateAddressRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.CreateAddressRequest.LabelsEntry" as const,

  encode(message: CreateAddressRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAddressRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAddressRequest_LabelsEntry();
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

  fromJSON(object: any): CreateAddressRequest_LabelsEntry {
    return {
      $type: CreateAddressRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateAddressRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAddressRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateAddressRequest_LabelsEntry {
    return CreateAddressRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAddressRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateAddressRequest_LabelsEntry {
    const message = createBaseCreateAddressRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateAddressRequest_LabelsEntry.$type, CreateAddressRequest_LabelsEntry);

function createBaseExternalIpv4AddressSpec(): ExternalIpv4AddressSpec {
  return { $type: "yandex.cloud.vpc.v1.ExternalIpv4AddressSpec", address: "", zoneId: "", requirements: undefined };
}

export const ExternalIpv4AddressSpec = {
  $type: "yandex.cloud.vpc.v1.ExternalIpv4AddressSpec" as const,

  encode(message: ExternalIpv4AddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.zoneId !== "") {
      writer.uint32(18).string(message.zoneId);
    }
    if (message.requirements !== undefined) {
      AddressRequirements.encode(message.requirements, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIpv4AddressSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalIpv4AddressSpec();
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
          if (tag !== 18) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requirements = AddressRequirements.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalIpv4AddressSpec {
    return {
      $type: ExternalIpv4AddressSpec.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      requirements: isSet(object.requirements) ? AddressRequirements.fromJSON(object.requirements) : undefined,
    };
  },

  toJSON(message: ExternalIpv4AddressSpec): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.requirements !== undefined) {
      obj.requirements = AddressRequirements.toJSON(message.requirements);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalIpv4AddressSpec>, I>>(base?: I): ExternalIpv4AddressSpec {
    return ExternalIpv4AddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalIpv4AddressSpec>, I>>(object: I): ExternalIpv4AddressSpec {
    const message = createBaseExternalIpv4AddressSpec();
    message.address = object.address ?? "";
    message.zoneId = object.zoneId ?? "";
    message.requirements = (object.requirements !== undefined && object.requirements !== null)
      ? AddressRequirements.fromPartial(object.requirements)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv4AddressSpec.$type, ExternalIpv4AddressSpec);

function createBaseCreateAddressMetadata(): CreateAddressMetadata {
  return { $type: "yandex.cloud.vpc.v1.CreateAddressMetadata", addressId: "" };
}

export const CreateAddressMetadata = {
  $type: "yandex.cloud.vpc.v1.CreateAddressMetadata" as const,

  encode(message: CreateAddressMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressId !== "") {
      writer.uint32(10).string(message.addressId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAddressMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAddressMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAddressMetadata {
    return {
      $type: CreateAddressMetadata.$type,
      addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
    };
  },

  toJSON(message: CreateAddressMetadata): unknown {
    const obj: any = {};
    if (message.addressId !== "") {
      obj.addressId = message.addressId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAddressMetadata>, I>>(base?: I): CreateAddressMetadata {
    return CreateAddressMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAddressMetadata>, I>>(object: I): CreateAddressMetadata {
    const message = createBaseCreateAddressMetadata();
    message.addressId = object.addressId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateAddressMetadata.$type, CreateAddressMetadata);

function createBaseUpdateAddressRequest(): UpdateAddressRequest {
  return {
    $type: "yandex.cloud.vpc.v1.UpdateAddressRequest",
    addressId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    reserved: false,
    deletionProtection: false,
  };
}

export const UpdateAddressRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateAddressRequest" as const,

  encode(message: UpdateAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressId !== "") {
      writer.uint32(10).string(message.addressId);
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
      UpdateAddressRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.UpdateAddressRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.reserved === true) {
      writer.uint32(48).bool(message.reserved);
    }
    if (message.deletionProtection === true) {
      writer.uint32(56).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressId = reader.string();
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

          const entry5 = UpdateAddressRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.reserved = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAddressRequest {
    return {
      $type: UpdateAddressRequest.$type,
      addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      reserved: isSet(object.reserved) ? globalThis.Boolean(object.reserved) : false,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: UpdateAddressRequest): unknown {
    const obj: any = {};
    if (message.addressId !== "") {
      obj.addressId = message.addressId;
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
    if (message.reserved === true) {
      obj.reserved = message.reserved;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAddressRequest>, I>>(base?: I): UpdateAddressRequest {
    return UpdateAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAddressRequest>, I>>(object: I): UpdateAddressRequest {
    const message = createBaseUpdateAddressRequest();
    message.addressId = object.addressId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.reserved = object.reserved ?? false;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateAddressRequest.$type, UpdateAddressRequest);

function createBaseUpdateAddressRequest_LabelsEntry(): UpdateAddressRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.UpdateAddressRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateAddressRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.UpdateAddressRequest.LabelsEntry" as const,

  encode(message: UpdateAddressRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAddressRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAddressRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateAddressRequest_LabelsEntry {
    return {
      $type: UpdateAddressRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateAddressRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAddressRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateAddressRequest_LabelsEntry {
    return UpdateAddressRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAddressRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateAddressRequest_LabelsEntry {
    const message = createBaseUpdateAddressRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateAddressRequest_LabelsEntry.$type, UpdateAddressRequest_LabelsEntry);

function createBaseUpdateAddressMetadata(): UpdateAddressMetadata {
  return { $type: "yandex.cloud.vpc.v1.UpdateAddressMetadata", addressId: "" };
}

export const UpdateAddressMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateAddressMetadata" as const,

  encode(message: UpdateAddressMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressId !== "") {
      writer.uint32(10).string(message.addressId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAddressMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAddressMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAddressMetadata {
    return {
      $type: UpdateAddressMetadata.$type,
      addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
    };
  },

  toJSON(message: UpdateAddressMetadata): unknown {
    const obj: any = {};
    if (message.addressId !== "") {
      obj.addressId = message.addressId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAddressMetadata>, I>>(base?: I): UpdateAddressMetadata {
    return UpdateAddressMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAddressMetadata>, I>>(object: I): UpdateAddressMetadata {
    const message = createBaseUpdateAddressMetadata();
    message.addressId = object.addressId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateAddressMetadata.$type, UpdateAddressMetadata);

function createBaseDeleteAddressRequest(): DeleteAddressRequest {
  return { $type: "yandex.cloud.vpc.v1.DeleteAddressRequest", addressId: "" };
}

export const DeleteAddressRequest = {
  $type: "yandex.cloud.vpc.v1.DeleteAddressRequest" as const,

  encode(message: DeleteAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressId !== "") {
      writer.uint32(10).string(message.addressId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAddressRequest {
    return {
      $type: DeleteAddressRequest.$type,
      addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
    };
  },

  toJSON(message: DeleteAddressRequest): unknown {
    const obj: any = {};
    if (message.addressId !== "") {
      obj.addressId = message.addressId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAddressRequest>, I>>(base?: I): DeleteAddressRequest {
    return DeleteAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAddressRequest>, I>>(object: I): DeleteAddressRequest {
    const message = createBaseDeleteAddressRequest();
    message.addressId = object.addressId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteAddressRequest.$type, DeleteAddressRequest);

function createBaseDeleteAddressMetadata(): DeleteAddressMetadata {
  return { $type: "yandex.cloud.vpc.v1.DeleteAddressMetadata", addressId: "" };
}

export const DeleteAddressMetadata = {
  $type: "yandex.cloud.vpc.v1.DeleteAddressMetadata" as const,

  encode(message: DeleteAddressMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressId !== "") {
      writer.uint32(10).string(message.addressId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAddressMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAddressMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAddressMetadata {
    return {
      $type: DeleteAddressMetadata.$type,
      addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
    };
  },

  toJSON(message: DeleteAddressMetadata): unknown {
    const obj: any = {};
    if (message.addressId !== "") {
      obj.addressId = message.addressId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAddressMetadata>, I>>(base?: I): DeleteAddressMetadata {
    return DeleteAddressMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAddressMetadata>, I>>(object: I): DeleteAddressMetadata {
    const message = createBaseDeleteAddressMetadata();
    message.addressId = object.addressId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteAddressMetadata.$type, DeleteAddressMetadata);

function createBaseListAddressOperationsRequest(): ListAddressOperationsRequest {
  return { $type: "yandex.cloud.vpc.v1.ListAddressOperationsRequest", addressId: "", pageSize: 0, pageToken: "" };
}

export const ListAddressOperationsRequest = {
  $type: "yandex.cloud.vpc.v1.ListAddressOperationsRequest" as const,

  encode(message: ListAddressOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressId !== "") {
      writer.uint32(10).string(message.addressId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAddressOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAddressOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressId = reader.string();
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

  fromJSON(object: any): ListAddressOperationsRequest {
    return {
      $type: ListAddressOperationsRequest.$type,
      addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListAddressOperationsRequest): unknown {
    const obj: any = {};
    if (message.addressId !== "") {
      obj.addressId = message.addressId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAddressOperationsRequest>, I>>(base?: I): ListAddressOperationsRequest {
    return ListAddressOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAddressOperationsRequest>, I>>(object: I): ListAddressOperationsRequest {
    const message = createBaseListAddressOperationsRequest();
    message.addressId = object.addressId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAddressOperationsRequest.$type, ListAddressOperationsRequest);

function createBaseListAddressOperationsResponse(): ListAddressOperationsResponse {
  return { $type: "yandex.cloud.vpc.v1.ListAddressOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListAddressOperationsResponse = {
  $type: "yandex.cloud.vpc.v1.ListAddressOperationsResponse" as const,

  encode(message: ListAddressOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAddressOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAddressOperationsResponse();
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

  fromJSON(object: any): ListAddressOperationsResponse {
    return {
      $type: ListAddressOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListAddressOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAddressOperationsResponse>, I>>(base?: I): ListAddressOperationsResponse {
    return ListAddressOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAddressOperationsResponse>, I>>(
    object: I,
  ): ListAddressOperationsResponse {
    const message = createBaseListAddressOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAddressOperationsResponse.$type, ListAddressOperationsResponse);

function createBaseMoveAddressRequest(): MoveAddressRequest {
  return { $type: "yandex.cloud.vpc.v1.MoveAddressRequest", addressId: "", destinationFolderId: "" };
}

export const MoveAddressRequest = {
  $type: "yandex.cloud.vpc.v1.MoveAddressRequest" as const,

  encode(message: MoveAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressId !== "") {
      writer.uint32(10).string(message.addressId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressId = reader.string();
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

  fromJSON(object: any): MoveAddressRequest {
    return {
      $type: MoveAddressRequest.$type,
      addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveAddressRequest): unknown {
    const obj: any = {};
    if (message.addressId !== "") {
      obj.addressId = message.addressId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveAddressRequest>, I>>(base?: I): MoveAddressRequest {
    return MoveAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveAddressRequest>, I>>(object: I): MoveAddressRequest {
    const message = createBaseMoveAddressRequest();
    message.addressId = object.addressId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveAddressRequest.$type, MoveAddressRequest);

function createBaseMoveAddressMetadata(): MoveAddressMetadata {
  return { $type: "yandex.cloud.vpc.v1.MoveAddressMetadata", addressId: "" };
}

export const MoveAddressMetadata = {
  $type: "yandex.cloud.vpc.v1.MoveAddressMetadata" as const,

  encode(message: MoveAddressMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressId !== "") {
      writer.uint32(10).string(message.addressId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveAddressMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveAddressMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveAddressMetadata {
    return {
      $type: MoveAddressMetadata.$type,
      addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
    };
  },

  toJSON(message: MoveAddressMetadata): unknown {
    const obj: any = {};
    if (message.addressId !== "") {
      obj.addressId = message.addressId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveAddressMetadata>, I>>(base?: I): MoveAddressMetadata {
    return MoveAddressMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveAddressMetadata>, I>>(object: I): MoveAddressMetadata {
    const message = createBaseMoveAddressMetadata();
    message.addressId = object.addressId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveAddressMetadata.$type, MoveAddressMetadata);

/** A set of methods for managing Address resources. */
export type AddressServiceService = typeof AddressServiceService;
export const AddressServiceService = {
  /**
   * Returns the specified Address resource.
   *
   * To get the list of all available Address resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.vpc.v1.AddressService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAddressRequest) => Buffer.from(GetAddressRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAddressRequest.decode(value),
    responseSerialize: (value: Address) => Buffer.from(Address.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Address.decode(value),
  },
  /**
   * Returns the specified Address resource by a given value.
   *
   * To get the list of all available Address resources, make a [List] request.
   */
  getByValue: {
    path: "/yandex.cloud.vpc.v1.AddressService/GetByValue",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAddressByValueRequest) => Buffer.from(GetAddressByValueRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAddressByValueRequest.decode(value),
    responseSerialize: (value: Address) => Buffer.from(Address.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Address.decode(value),
  },
  /** Retrieves the list of Address resources in the specified folder. */
  list: {
    path: "/yandex.cloud.vpc.v1.AddressService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAddressesRequest) => Buffer.from(ListAddressesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAddressesRequest.decode(value),
    responseSerialize: (value: ListAddressesResponse) => Buffer.from(ListAddressesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAddressesResponse.decode(value),
  },
  /** Creates an address in the specified folder and network. */
  create: {
    path: "/yandex.cloud.vpc.v1.AddressService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateAddressRequest) => Buffer.from(CreateAddressRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateAddressRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified address. */
  update: {
    path: "/yandex.cloud.vpc.v1.AddressService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAddressRequest) => Buffer.from(UpdateAddressRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAddressRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified address. */
  delete: {
    path: "/yandex.cloud.vpc.v1.AddressService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAddressRequest) => Buffer.from(DeleteAddressRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteAddressRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List operations for the specified address. */
  listOperations: {
    path: "/yandex.cloud.vpc.v1.AddressService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAddressOperationsRequest) =>
      Buffer.from(ListAddressOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAddressOperationsRequest.decode(value),
    responseSerialize: (value: ListAddressOperationsResponse) =>
      Buffer.from(ListAddressOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAddressOperationsResponse.decode(value),
  },
  /** Move an address to another folder */
  move: {
    path: "/yandex.cloud.vpc.v1.AddressService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveAddressRequest) => Buffer.from(MoveAddressRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveAddressRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface AddressServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Address resource.
   *
   * To get the list of all available Address resources, make a [List] request.
   */
  get: handleUnaryCall<GetAddressRequest, Address>;
  /**
   * Returns the specified Address resource by a given value.
   *
   * To get the list of all available Address resources, make a [List] request.
   */
  getByValue: handleUnaryCall<GetAddressByValueRequest, Address>;
  /** Retrieves the list of Address resources in the specified folder. */
  list: handleUnaryCall<ListAddressesRequest, ListAddressesResponse>;
  /** Creates an address in the specified folder and network. */
  create: handleUnaryCall<CreateAddressRequest, Operation>;
  /** Updates the specified address. */
  update: handleUnaryCall<UpdateAddressRequest, Operation>;
  /** Deletes the specified address. */
  delete: handleUnaryCall<DeleteAddressRequest, Operation>;
  /** List operations for the specified address. */
  listOperations: handleUnaryCall<ListAddressOperationsRequest, ListAddressOperationsResponse>;
  /** Move an address to another folder */
  move: handleUnaryCall<MoveAddressRequest, Operation>;
}

export interface AddressServiceClient extends Client {
  /**
   * Returns the specified Address resource.
   *
   * To get the list of all available Address resources, make a [List] request.
   */
  get(request: GetAddressRequest, callback: (error: ServiceError | null, response: Address) => void): ClientUnaryCall;
  get(
    request: GetAddressRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Address) => void,
  ): ClientUnaryCall;
  get(
    request: GetAddressRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Address) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified Address resource by a given value.
   *
   * To get the list of all available Address resources, make a [List] request.
   */
  getByValue(
    request: GetAddressByValueRequest,
    callback: (error: ServiceError | null, response: Address) => void,
  ): ClientUnaryCall;
  getByValue(
    request: GetAddressByValueRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Address) => void,
  ): ClientUnaryCall;
  getByValue(
    request: GetAddressByValueRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Address) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Address resources in the specified folder. */
  list(
    request: ListAddressesRequest,
    callback: (error: ServiceError | null, response: ListAddressesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListAddressesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAddressesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListAddressesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAddressesResponse) => void,
  ): ClientUnaryCall;
  /** Creates an address in the specified folder and network. */
  create(
    request: CreateAddressRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAddressRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAddressRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified address. */
  update(
    request: UpdateAddressRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateAddressRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateAddressRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified address. */
  delete(
    request: DeleteAddressRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteAddressRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteAddressRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** List operations for the specified address. */
  listOperations(
    request: ListAddressOperationsRequest,
    callback: (error: ServiceError | null, response: ListAddressOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListAddressOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAddressOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListAddressOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAddressOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Move an address to another folder */
  move(
    request: MoveAddressRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveAddressRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveAddressRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const AddressServiceClient = makeGenericClientConstructor(
  AddressServiceService,
  "yandex.cloud.vpc.v1.AddressService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AddressServiceClient;
  service: typeof AddressServiceService;
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
