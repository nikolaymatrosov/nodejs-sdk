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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Broker, BrokerCertificate, BrokerPassword } from "./broker";

export const protobufPackage = "yandex.cloud.iot.broker.v1";

export interface GetBrokerRequest {
  $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest";
  /**
   * ID of the broker to return.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
}

export interface ListBrokersRequest {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest";
  /**
   * ID of the folder to list brokers in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListBrokersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListBrokersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListBrokersResponse {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse";
  /** List of brokers. */
  brokers: Broker[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListBrokersRequest.page_size], use `next_page_token` as the value
   * for the [ListBrokersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateBrokerRequest {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest";
  /**
   * ID of the folder to create a broker in.
   *
   * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the broker. The name must be unique within the folder. */
  name: string;
  /** Description of the broker. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Broker certificates. */
  certificates: CreateBrokerRequest_Certificate[];
  /**
   * Broker passwords.
   *
   * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
   */
  password: string;
}

export interface CreateBrokerRequest_LabelsEntry {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry";
  key: string;
  value: string;
}

/** Specification of a broker certificate. */
export interface CreateBrokerRequest_Certificate {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate";
  /** Public part of the broker certificate. */
  certificateData: string;
}

export interface CreateBrokerMetadata {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata";
  /** ID of the broker that is being created. */
  brokerId: string;
}

export interface UpdateBrokerRequest {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest";
  /**
   * ID of the broker to update.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /** Field mask that specifies which fields of the broker are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the broker. The name must be unique within the folder. */
  name: string;
  /** Description of the broker. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
}

export interface UpdateBrokerRequest_LabelsEntry {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateBrokerMetadata {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata";
  /** ID of the broker that is being updated. */
  brokerId: string;
}

export interface DeleteBrokerRequest {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest";
  /**
   * ID of the broker to delete.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
}

export interface DeleteBrokerMetadata {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata";
  /** ID of the broker that is being deleted. */
  brokerId: string;
}

export interface ListBrokerCertificatesRequest {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest";
  /** ID of the broker to list certificates for. */
  brokerId: string;
}

export interface ListBrokerCertificatesResponse {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse";
  /** List of certificates for the specified broker. */
  certificates: BrokerCertificate[];
}

export interface AddBrokerCertificateRequest {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest";
  /**
   * ID of the broker for which the certificate is being added.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /** Public part of the certificate that is being added. */
  certificateData: string;
}

export interface AddBrokerCertificateMetadata {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata";
  /** ID of the broker certificate that is being added. */
  brokerId: string;
  /** Fingerprint of the certificate that is being added. */
  fingerprint: string;
}

export interface DeleteBrokerCertificateRequest {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest";
  /**
   * ID of the broker to delete a certificate for.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /** Fingerprint of the certificate that is being deleted. */
  fingerprint: string;
}

export interface DeleteBrokerCertificateMetadata {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata";
  /** ID of a broker for which the certificate is being delete. */
  brokerId: string;
  /** Fingerprint of the certificate to deleted. */
  fingerprint: string;
}

export interface ListBrokerPasswordsRequest {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest";
  /**
   * ID of the broker to list passwords in.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
}

export interface ListBrokerPasswordsResponse {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse";
  /** List of passwords for the specified broker. */
  passwords: BrokerPassword[];
}

export interface AddBrokerPasswordRequest {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest";
  /**
   * ID of the broker to add a password for.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /**
   * Passwords for the broker.
   *
   * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
   */
  password: string;
}

export interface AddBrokerPasswordMetadata {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata";
  /** ID of the broker for which the password is being added. */
  brokerId: string;
  /** ID of a password that is being added. */
  passwordId: string;
}

export interface DeleteBrokerPasswordRequest {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest";
  /**
   * ID of the broker to delete a password for.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /**
   * ID of the password to delete.
   *
   * To get a password ID make a [BrokerService.ListPasswords] request.
   */
  passwordId: string;
}

export interface DeleteBrokerPasswordMetadata {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata";
  /** ID of a broker for which the password is being delete. */
  brokerId: string;
  /**
   * ID of the password to delete.
   *
   * To get a password ID make a [BrokerService.ListPasswords] request.
   */
  passwordId: string;
}

export interface ListBrokerOperationsRequest {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest";
  /** ID of the broker to list operations for. */
  brokerId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListBrokerOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListBrokerOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [Broker.name] field.
   */
  filter: string;
}

export interface ListBrokerOperationsResponse {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse";
  /** List of operations for the specified broker. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListBrokerOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListBrokerOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetBrokerRequest(): GetBrokerRequest {
  return { $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest", brokerId: "" };
}

export const GetBrokerRequest = {
  $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest" as const,

  encode(message: GetBrokerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrokerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrokerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBrokerRequest {
    return {
      $type: GetBrokerRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
    };
  },

  toJSON(message: GetBrokerRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBrokerRequest>, I>>(base?: I): GetBrokerRequest {
    return GetBrokerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBrokerRequest>, I>>(object: I): GetBrokerRequest {
    const message = createBaseGetBrokerRequest();
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBrokerRequest.$type, GetBrokerRequest);

function createBaseListBrokersRequest(): ListBrokersRequest {
  return { $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListBrokersRequest = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest" as const,

  encode(message: ListBrokersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBrokersRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBrokersRequest {
    return {
      $type: ListBrokersRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListBrokersRequest): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBrokersRequest>, I>>(base?: I): ListBrokersRequest {
    return ListBrokersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBrokersRequest>, I>>(object: I): ListBrokersRequest {
    const message = createBaseListBrokersRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBrokersRequest.$type, ListBrokersRequest);

function createBaseListBrokersResponse(): ListBrokersResponse {
  return { $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse", brokers: [], nextPageToken: "" };
}

export const ListBrokersResponse = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse" as const,

  encode(message: ListBrokersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.brokers) {
      Broker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBrokersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokers.push(Broker.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListBrokersResponse {
    return {
      $type: ListBrokersResponse.$type,
      brokers: globalThis.Array.isArray(object?.brokers) ? object.brokers.map((e: any) => Broker.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBrokersResponse): unknown {
    const obj: any = {};
    if (message.brokers?.length) {
      obj.brokers = message.brokers.map((e) => Broker.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBrokersResponse>, I>>(base?: I): ListBrokersResponse {
    return ListBrokersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBrokersResponse>, I>>(object: I): ListBrokersResponse {
    const message = createBaseListBrokersResponse();
    message.brokers = object.brokers?.map((e) => Broker.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBrokersResponse.$type, ListBrokersResponse);

function createBaseCreateBrokerRequest(): CreateBrokerRequest {
  return {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    certificates: [],
    password: "",
  };
}

export const CreateBrokerRequest = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest" as const,

  encode(message: CreateBrokerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateBrokerRequest_LabelsEntry.encode({
        $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    for (const v of message.certificates) {
      CreateBrokerRequest_Certificate.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBrokerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBrokerRequest();
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

          const entry4 = CreateBrokerRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.certificates.push(CreateBrokerRequest_Certificate.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateBrokerRequest {
    return {
      $type: CreateBrokerRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      certificates: globalThis.Array.isArray(object?.certificates)
        ? object.certificates.map((e: any) => CreateBrokerRequest_Certificate.fromJSON(e))
        : [],
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: CreateBrokerRequest): unknown {
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
    if (message.certificates?.length) {
      obj.certificates = message.certificates.map((e) => CreateBrokerRequest_Certificate.toJSON(e));
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBrokerRequest>, I>>(base?: I): CreateBrokerRequest {
    return CreateBrokerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateBrokerRequest>, I>>(object: I): CreateBrokerRequest {
    const message = createBaseCreateBrokerRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.certificates = object.certificates?.map((e) => CreateBrokerRequest_Certificate.fromPartial(e)) || [];
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBrokerRequest.$type, CreateBrokerRequest);

function createBaseCreateBrokerRequest_LabelsEntry(): CreateBrokerRequest_LabelsEntry {
  return { $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry", key: "", value: "" };
}

export const CreateBrokerRequest_LabelsEntry = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry" as const,

  encode(message: CreateBrokerRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBrokerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBrokerRequest_LabelsEntry();
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

  fromJSON(object: any): CreateBrokerRequest_LabelsEntry {
    return {
      $type: CreateBrokerRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateBrokerRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBrokerRequest_LabelsEntry>, I>>(base?: I): CreateBrokerRequest_LabelsEntry {
    return CreateBrokerRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateBrokerRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateBrokerRequest_LabelsEntry {
    const message = createBaseCreateBrokerRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBrokerRequest_LabelsEntry.$type, CreateBrokerRequest_LabelsEntry);

function createBaseCreateBrokerRequest_Certificate(): CreateBrokerRequest_Certificate {
  return { $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate", certificateData: "" };
}

export const CreateBrokerRequest_Certificate = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate" as const,

  encode(message: CreateBrokerRequest_Certificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateData !== "") {
      writer.uint32(10).string(message.certificateData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBrokerRequest_Certificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBrokerRequest_Certificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateData = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateBrokerRequest_Certificate {
    return {
      $type: CreateBrokerRequest_Certificate.$type,
      certificateData: isSet(object.certificateData) ? globalThis.String(object.certificateData) : "",
    };
  },

  toJSON(message: CreateBrokerRequest_Certificate): unknown {
    const obj: any = {};
    if (message.certificateData !== "") {
      obj.certificateData = message.certificateData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBrokerRequest_Certificate>, I>>(base?: I): CreateBrokerRequest_Certificate {
    return CreateBrokerRequest_Certificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateBrokerRequest_Certificate>, I>>(
    object: I,
  ): CreateBrokerRequest_Certificate {
    const message = createBaseCreateBrokerRequest_Certificate();
    message.certificateData = object.certificateData ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBrokerRequest_Certificate.$type, CreateBrokerRequest_Certificate);

function createBaseCreateBrokerMetadata(): CreateBrokerMetadata {
  return { $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata", brokerId: "" };
}

export const CreateBrokerMetadata = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata" as const,

  encode(message: CreateBrokerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBrokerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBrokerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateBrokerMetadata {
    return {
      $type: CreateBrokerMetadata.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
    };
  },

  toJSON(message: CreateBrokerMetadata): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBrokerMetadata>, I>>(base?: I): CreateBrokerMetadata {
    return CreateBrokerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateBrokerMetadata>, I>>(object: I): CreateBrokerMetadata {
    const message = createBaseCreateBrokerMetadata();
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBrokerMetadata.$type, CreateBrokerMetadata);

function createBaseUpdateBrokerRequest(): UpdateBrokerRequest {
  return {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest",
    brokerId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
  };
}

export const UpdateBrokerRequest = {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest" as const,

  encode(message: UpdateBrokerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
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
      UpdateBrokerRequest_LabelsEntry.encode({
        $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBrokerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBrokerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
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

          const entry5 = UpdateBrokerRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateBrokerRequest {
    return {
      $type: UpdateBrokerRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
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

  toJSON(message: UpdateBrokerRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
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

  create<I extends Exact<DeepPartial<UpdateBrokerRequest>, I>>(base?: I): UpdateBrokerRequest {
    return UpdateBrokerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateBrokerRequest>, I>>(object: I): UpdateBrokerRequest {
    const message = createBaseUpdateBrokerRequest();
    message.brokerId = object.brokerId ?? "";
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

messageTypeRegistry.set(UpdateBrokerRequest.$type, UpdateBrokerRequest);

function createBaseUpdateBrokerRequest_LabelsEntry(): UpdateBrokerRequest_LabelsEntry {
  return { $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateBrokerRequest_LabelsEntry = {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry" as const,

  encode(message: UpdateBrokerRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBrokerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBrokerRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateBrokerRequest_LabelsEntry {
    return {
      $type: UpdateBrokerRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateBrokerRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBrokerRequest_LabelsEntry>, I>>(base?: I): UpdateBrokerRequest_LabelsEntry {
    return UpdateBrokerRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateBrokerRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateBrokerRequest_LabelsEntry {
    const message = createBaseUpdateBrokerRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateBrokerRequest_LabelsEntry.$type, UpdateBrokerRequest_LabelsEntry);

function createBaseUpdateBrokerMetadata(): UpdateBrokerMetadata {
  return { $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata", brokerId: "" };
}

export const UpdateBrokerMetadata = {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata" as const,

  encode(message: UpdateBrokerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBrokerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBrokerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateBrokerMetadata {
    return {
      $type: UpdateBrokerMetadata.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
    };
  },

  toJSON(message: UpdateBrokerMetadata): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBrokerMetadata>, I>>(base?: I): UpdateBrokerMetadata {
    return UpdateBrokerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateBrokerMetadata>, I>>(object: I): UpdateBrokerMetadata {
    const message = createBaseUpdateBrokerMetadata();
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateBrokerMetadata.$type, UpdateBrokerMetadata);

function createBaseDeleteBrokerRequest(): DeleteBrokerRequest {
  return { $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest", brokerId: "" };
}

export const DeleteBrokerRequest = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest" as const,

  encode(message: DeleteBrokerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBrokerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBrokerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerRequest {
    return {
      $type: DeleteBrokerRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
    };
  },

  toJSON(message: DeleteBrokerRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBrokerRequest>, I>>(base?: I): DeleteBrokerRequest {
    return DeleteBrokerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBrokerRequest>, I>>(object: I): DeleteBrokerRequest {
    const message = createBaseDeleteBrokerRequest();
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBrokerRequest.$type, DeleteBrokerRequest);

function createBaseDeleteBrokerMetadata(): DeleteBrokerMetadata {
  return { $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata", brokerId: "" };
}

export const DeleteBrokerMetadata = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata" as const,

  encode(message: DeleteBrokerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBrokerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBrokerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerMetadata {
    return {
      $type: DeleteBrokerMetadata.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
    };
  },

  toJSON(message: DeleteBrokerMetadata): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBrokerMetadata>, I>>(base?: I): DeleteBrokerMetadata {
    return DeleteBrokerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBrokerMetadata>, I>>(object: I): DeleteBrokerMetadata {
    const message = createBaseDeleteBrokerMetadata();
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBrokerMetadata.$type, DeleteBrokerMetadata);

function createBaseListBrokerCertificatesRequest(): ListBrokerCertificatesRequest {
  return { $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest", brokerId: "" };
}

export const ListBrokerCertificatesRequest = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest" as const,

  encode(message: ListBrokerCertificatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokerCertificatesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBrokerCertificatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBrokerCertificatesRequest {
    return {
      $type: ListBrokerCertificatesRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
    };
  },

  toJSON(message: ListBrokerCertificatesRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBrokerCertificatesRequest>, I>>(base?: I): ListBrokerCertificatesRequest {
    return ListBrokerCertificatesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBrokerCertificatesRequest>, I>>(
    object: I,
  ): ListBrokerCertificatesRequest {
    const message = createBaseListBrokerCertificatesRequest();
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBrokerCertificatesRequest.$type, ListBrokerCertificatesRequest);

function createBaseListBrokerCertificatesResponse(): ListBrokerCertificatesResponse {
  return { $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse", certificates: [] };
}

export const ListBrokerCertificatesResponse = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse" as const,

  encode(message: ListBrokerCertificatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.certificates) {
      BrokerCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokerCertificatesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBrokerCertificatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificates.push(BrokerCertificate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBrokerCertificatesResponse {
    return {
      $type: ListBrokerCertificatesResponse.$type,
      certificates: globalThis.Array.isArray(object?.certificates)
        ? object.certificates.map((e: any) => BrokerCertificate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListBrokerCertificatesResponse): unknown {
    const obj: any = {};
    if (message.certificates?.length) {
      obj.certificates = message.certificates.map((e) => BrokerCertificate.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBrokerCertificatesResponse>, I>>(base?: I): ListBrokerCertificatesResponse {
    return ListBrokerCertificatesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBrokerCertificatesResponse>, I>>(
    object: I,
  ): ListBrokerCertificatesResponse {
    const message = createBaseListBrokerCertificatesResponse();
    message.certificates = object.certificates?.map((e) => BrokerCertificate.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListBrokerCertificatesResponse.$type, ListBrokerCertificatesResponse);

function createBaseAddBrokerCertificateRequest(): AddBrokerCertificateRequest {
  return { $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest", brokerId: "", certificateData: "" };
}

export const AddBrokerCertificateRequest = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest" as const,

  encode(message: AddBrokerCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.certificateData !== "") {
      writer.uint32(26).string(message.certificateData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBrokerCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddBrokerCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.certificateData = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddBrokerCertificateRequest {
    return {
      $type: AddBrokerCertificateRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      certificateData: isSet(object.certificateData) ? globalThis.String(object.certificateData) : "",
    };
  },

  toJSON(message: AddBrokerCertificateRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.certificateData !== "") {
      obj.certificateData = message.certificateData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddBrokerCertificateRequest>, I>>(base?: I): AddBrokerCertificateRequest {
    return AddBrokerCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddBrokerCertificateRequest>, I>>(object: I): AddBrokerCertificateRequest {
    const message = createBaseAddBrokerCertificateRequest();
    message.brokerId = object.brokerId ?? "";
    message.certificateData = object.certificateData ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddBrokerCertificateRequest.$type, AddBrokerCertificateRequest);

function createBaseAddBrokerCertificateMetadata(): AddBrokerCertificateMetadata {
  return { $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata", brokerId: "", fingerprint: "" };
}

export const AddBrokerCertificateMetadata = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata" as const,

  encode(message: AddBrokerCertificateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBrokerCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddBrokerCertificateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fingerprint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddBrokerCertificateMetadata {
    return {
      $type: AddBrokerCertificateMetadata.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
    };
  },

  toJSON(message: AddBrokerCertificateMetadata): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.fingerprint !== "") {
      obj.fingerprint = message.fingerprint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddBrokerCertificateMetadata>, I>>(base?: I): AddBrokerCertificateMetadata {
    return AddBrokerCertificateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddBrokerCertificateMetadata>, I>>(object: I): AddBrokerCertificateMetadata {
    const message = createBaseAddBrokerCertificateMetadata();
    message.brokerId = object.brokerId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddBrokerCertificateMetadata.$type, AddBrokerCertificateMetadata);

function createBaseDeleteBrokerCertificateRequest(): DeleteBrokerCertificateRequest {
  return { $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest", brokerId: "", fingerprint: "" };
}

export const DeleteBrokerCertificateRequest = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest" as const,

  encode(message: DeleteBrokerCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBrokerCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBrokerCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fingerprint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerCertificateRequest {
    return {
      $type: DeleteBrokerCertificateRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
    };
  },

  toJSON(message: DeleteBrokerCertificateRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.fingerprint !== "") {
      obj.fingerprint = message.fingerprint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBrokerCertificateRequest>, I>>(base?: I): DeleteBrokerCertificateRequest {
    return DeleteBrokerCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBrokerCertificateRequest>, I>>(
    object: I,
  ): DeleteBrokerCertificateRequest {
    const message = createBaseDeleteBrokerCertificateRequest();
    message.brokerId = object.brokerId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBrokerCertificateRequest.$type, DeleteBrokerCertificateRequest);

function createBaseDeleteBrokerCertificateMetadata(): DeleteBrokerCertificateMetadata {
  return { $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata", brokerId: "", fingerprint: "" };
}

export const DeleteBrokerCertificateMetadata = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata" as const,

  encode(message: DeleteBrokerCertificateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBrokerCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBrokerCertificateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fingerprint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerCertificateMetadata {
    return {
      $type: DeleteBrokerCertificateMetadata.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
    };
  },

  toJSON(message: DeleteBrokerCertificateMetadata): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.fingerprint !== "") {
      obj.fingerprint = message.fingerprint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBrokerCertificateMetadata>, I>>(base?: I): DeleteBrokerCertificateMetadata {
    return DeleteBrokerCertificateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBrokerCertificateMetadata>, I>>(
    object: I,
  ): DeleteBrokerCertificateMetadata {
    const message = createBaseDeleteBrokerCertificateMetadata();
    message.brokerId = object.brokerId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBrokerCertificateMetadata.$type, DeleteBrokerCertificateMetadata);

function createBaseListBrokerPasswordsRequest(): ListBrokerPasswordsRequest {
  return { $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest", brokerId: "" };
}

export const ListBrokerPasswordsRequest = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest" as const,

  encode(message: ListBrokerPasswordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokerPasswordsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBrokerPasswordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBrokerPasswordsRequest {
    return {
      $type: ListBrokerPasswordsRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
    };
  },

  toJSON(message: ListBrokerPasswordsRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBrokerPasswordsRequest>, I>>(base?: I): ListBrokerPasswordsRequest {
    return ListBrokerPasswordsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBrokerPasswordsRequest>, I>>(object: I): ListBrokerPasswordsRequest {
    const message = createBaseListBrokerPasswordsRequest();
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBrokerPasswordsRequest.$type, ListBrokerPasswordsRequest);

function createBaseListBrokerPasswordsResponse(): ListBrokerPasswordsResponse {
  return { $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse", passwords: [] };
}

export const ListBrokerPasswordsResponse = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse" as const,

  encode(message: ListBrokerPasswordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.passwords) {
      BrokerPassword.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokerPasswordsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBrokerPasswordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.passwords.push(BrokerPassword.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBrokerPasswordsResponse {
    return {
      $type: ListBrokerPasswordsResponse.$type,
      passwords: globalThis.Array.isArray(object?.passwords)
        ? object.passwords.map((e: any) => BrokerPassword.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListBrokerPasswordsResponse): unknown {
    const obj: any = {};
    if (message.passwords?.length) {
      obj.passwords = message.passwords.map((e) => BrokerPassword.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBrokerPasswordsResponse>, I>>(base?: I): ListBrokerPasswordsResponse {
    return ListBrokerPasswordsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBrokerPasswordsResponse>, I>>(object: I): ListBrokerPasswordsResponse {
    const message = createBaseListBrokerPasswordsResponse();
    message.passwords = object.passwords?.map((e) => BrokerPassword.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListBrokerPasswordsResponse.$type, ListBrokerPasswordsResponse);

function createBaseAddBrokerPasswordRequest(): AddBrokerPasswordRequest {
  return { $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest", brokerId: "", password: "" };
}

export const AddBrokerPasswordRequest = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest" as const,

  encode(message: AddBrokerPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBrokerPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddBrokerPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddBrokerPasswordRequest {
    return {
      $type: AddBrokerPasswordRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: AddBrokerPasswordRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddBrokerPasswordRequest>, I>>(base?: I): AddBrokerPasswordRequest {
    return AddBrokerPasswordRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddBrokerPasswordRequest>, I>>(object: I): AddBrokerPasswordRequest {
    const message = createBaseAddBrokerPasswordRequest();
    message.brokerId = object.brokerId ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddBrokerPasswordRequest.$type, AddBrokerPasswordRequest);

function createBaseAddBrokerPasswordMetadata(): AddBrokerPasswordMetadata {
  return { $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata", brokerId: "", passwordId: "" };
}

export const AddBrokerPasswordMetadata = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata" as const,

  encode(message: AddBrokerPasswordMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBrokerPasswordMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddBrokerPasswordMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passwordId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddBrokerPasswordMetadata {
    return {
      $type: AddBrokerPasswordMetadata.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      passwordId: isSet(object.passwordId) ? globalThis.String(object.passwordId) : "",
    };
  },

  toJSON(message: AddBrokerPasswordMetadata): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.passwordId !== "") {
      obj.passwordId = message.passwordId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddBrokerPasswordMetadata>, I>>(base?: I): AddBrokerPasswordMetadata {
    return AddBrokerPasswordMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddBrokerPasswordMetadata>, I>>(object: I): AddBrokerPasswordMetadata {
    const message = createBaseAddBrokerPasswordMetadata();
    message.brokerId = object.brokerId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddBrokerPasswordMetadata.$type, AddBrokerPasswordMetadata);

function createBaseDeleteBrokerPasswordRequest(): DeleteBrokerPasswordRequest {
  return { $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest", brokerId: "", passwordId: "" };
}

export const DeleteBrokerPasswordRequest = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest" as const,

  encode(message: DeleteBrokerPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBrokerPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBrokerPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passwordId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerPasswordRequest {
    return {
      $type: DeleteBrokerPasswordRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      passwordId: isSet(object.passwordId) ? globalThis.String(object.passwordId) : "",
    };
  },

  toJSON(message: DeleteBrokerPasswordRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.passwordId !== "") {
      obj.passwordId = message.passwordId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBrokerPasswordRequest>, I>>(base?: I): DeleteBrokerPasswordRequest {
    return DeleteBrokerPasswordRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBrokerPasswordRequest>, I>>(object: I): DeleteBrokerPasswordRequest {
    const message = createBaseDeleteBrokerPasswordRequest();
    message.brokerId = object.brokerId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBrokerPasswordRequest.$type, DeleteBrokerPasswordRequest);

function createBaseDeleteBrokerPasswordMetadata(): DeleteBrokerPasswordMetadata {
  return { $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata", brokerId: "", passwordId: "" };
}

export const DeleteBrokerPasswordMetadata = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata" as const,

  encode(message: DeleteBrokerPasswordMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBrokerPasswordMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBrokerPasswordMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passwordId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerPasswordMetadata {
    return {
      $type: DeleteBrokerPasswordMetadata.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      passwordId: isSet(object.passwordId) ? globalThis.String(object.passwordId) : "",
    };
  },

  toJSON(message: DeleteBrokerPasswordMetadata): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.passwordId !== "") {
      obj.passwordId = message.passwordId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBrokerPasswordMetadata>, I>>(base?: I): DeleteBrokerPasswordMetadata {
    return DeleteBrokerPasswordMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBrokerPasswordMetadata>, I>>(object: I): DeleteBrokerPasswordMetadata {
    const message = createBaseDeleteBrokerPasswordMetadata();
    message.brokerId = object.brokerId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBrokerPasswordMetadata.$type, DeleteBrokerPasswordMetadata);

function createBaseListBrokerOperationsRequest(): ListBrokerOperationsRequest {
  return {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest",
    brokerId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListBrokerOperationsRequest = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest" as const,

  encode(message: ListBrokerOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokerOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBrokerOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
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

  fromJSON(object: any): ListBrokerOperationsRequest {
    return {
      $type: ListBrokerOperationsRequest.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListBrokerOperationsRequest): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
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

  create<I extends Exact<DeepPartial<ListBrokerOperationsRequest>, I>>(base?: I): ListBrokerOperationsRequest {
    return ListBrokerOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBrokerOperationsRequest>, I>>(object: I): ListBrokerOperationsRequest {
    const message = createBaseListBrokerOperationsRequest();
    message.brokerId = object.brokerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBrokerOperationsRequest.$type, ListBrokerOperationsRequest);

function createBaseListBrokerOperationsResponse(): ListBrokerOperationsResponse {
  return { $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListBrokerOperationsResponse = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse" as const,

  encode(message: ListBrokerOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokerOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBrokerOperationsResponse();
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

  fromJSON(object: any): ListBrokerOperationsResponse {
    return {
      $type: ListBrokerOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBrokerOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBrokerOperationsResponse>, I>>(base?: I): ListBrokerOperationsResponse {
    return ListBrokerOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBrokerOperationsResponse>, I>>(object: I): ListBrokerOperationsResponse {
    const message = createBaseListBrokerOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBrokerOperationsResponse.$type, ListBrokerOperationsResponse);

/** A set of methods for managing broker. */
export type BrokerServiceService = typeof BrokerServiceService;
export const BrokerServiceService = {
  /**
   * Returns the specified broker.
   *
   * To get the list of available brokers, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBrokerRequest) => Buffer.from(GetBrokerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBrokerRequest.decode(value),
    responseSerialize: (value: Broker) => Buffer.from(Broker.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Broker.decode(value),
  },
  /** Retrieves the list of brokers in the specified folder. */
  list: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBrokersRequest) => Buffer.from(ListBrokersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBrokersRequest.decode(value),
    responseSerialize: (value: ListBrokersResponse) => Buffer.from(ListBrokersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBrokersResponse.decode(value),
  },
  /** Creates a broker in the specified folder. */
  create: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateBrokerRequest) => Buffer.from(CreateBrokerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateBrokerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified broker. */
  update: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateBrokerRequest) => Buffer.from(UpdateBrokerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateBrokerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified broker. */
  delete: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBrokerRequest) => Buffer.from(DeleteBrokerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBrokerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of broker certificates for the specified broker. */
  listCertificates: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/ListCertificates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBrokerCertificatesRequest) =>
      Buffer.from(ListBrokerCertificatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBrokerCertificatesRequest.decode(value),
    responseSerialize: (value: ListBrokerCertificatesResponse) =>
      Buffer.from(ListBrokerCertificatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBrokerCertificatesResponse.decode(value),
  },
  /** Adds a certificate. */
  addCertificate: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/AddCertificate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddBrokerCertificateRequest) =>
      Buffer.from(AddBrokerCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddBrokerCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified broker certificate. */
  deleteCertificate: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/DeleteCertificate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBrokerCertificateRequest) =>
      Buffer.from(DeleteBrokerCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBrokerCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of passwords for the specified broker. */
  listPasswords: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/ListPasswords",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBrokerPasswordsRequest) =>
      Buffer.from(ListBrokerPasswordsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBrokerPasswordsRequest.decode(value),
    responseSerialize: (value: ListBrokerPasswordsResponse) =>
      Buffer.from(ListBrokerPasswordsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBrokerPasswordsResponse.decode(value),
  },
  /** Adds password for the specified broker. */
  addPassword: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/AddPassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddBrokerPasswordRequest) => Buffer.from(AddBrokerPasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddBrokerPasswordRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified password. */
  deletePassword: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/DeletePassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBrokerPasswordRequest) =>
      Buffer.from(DeleteBrokerPasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBrokerPasswordRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified broker. */
  listOperations: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBrokerOperationsRequest) =>
      Buffer.from(ListBrokerOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBrokerOperationsRequest.decode(value),
    responseSerialize: (value: ListBrokerOperationsResponse) =>
      Buffer.from(ListBrokerOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBrokerOperationsResponse.decode(value),
  },
} as const;

export interface BrokerServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified broker.
   *
   * To get the list of available brokers, make a [List] request.
   */
  get: handleUnaryCall<GetBrokerRequest, Broker>;
  /** Retrieves the list of brokers in the specified folder. */
  list: handleUnaryCall<ListBrokersRequest, ListBrokersResponse>;
  /** Creates a broker in the specified folder. */
  create: handleUnaryCall<CreateBrokerRequest, Operation>;
  /** Updates the specified broker. */
  update: handleUnaryCall<UpdateBrokerRequest, Operation>;
  /** Deletes the specified broker. */
  delete: handleUnaryCall<DeleteBrokerRequest, Operation>;
  /** Retrieves the list of broker certificates for the specified broker. */
  listCertificates: handleUnaryCall<ListBrokerCertificatesRequest, ListBrokerCertificatesResponse>;
  /** Adds a certificate. */
  addCertificate: handleUnaryCall<AddBrokerCertificateRequest, Operation>;
  /** Deletes the specified broker certificate. */
  deleteCertificate: handleUnaryCall<DeleteBrokerCertificateRequest, Operation>;
  /** Retrieves the list of passwords for the specified broker. */
  listPasswords: handleUnaryCall<ListBrokerPasswordsRequest, ListBrokerPasswordsResponse>;
  /** Adds password for the specified broker. */
  addPassword: handleUnaryCall<AddBrokerPasswordRequest, Operation>;
  /** Deletes the specified password. */
  deletePassword: handleUnaryCall<DeleteBrokerPasswordRequest, Operation>;
  /** Lists operations for the specified broker. */
  listOperations: handleUnaryCall<ListBrokerOperationsRequest, ListBrokerOperationsResponse>;
}

export interface BrokerServiceClient extends Client {
  /**
   * Returns the specified broker.
   *
   * To get the list of available brokers, make a [List] request.
   */
  get(request: GetBrokerRequest, callback: (error: ServiceError | null, response: Broker) => void): ClientUnaryCall;
  get(
    request: GetBrokerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Broker) => void,
  ): ClientUnaryCall;
  get(
    request: GetBrokerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Broker) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of brokers in the specified folder. */
  list(
    request: ListBrokersRequest,
    callback: (error: ServiceError | null, response: ListBrokersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBrokersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBrokersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBrokersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBrokersResponse) => void,
  ): ClientUnaryCall;
  /** Creates a broker in the specified folder. */
  create(
    request: CreateBrokerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateBrokerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateBrokerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified broker. */
  update(
    request: UpdateBrokerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateBrokerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateBrokerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified broker. */
  delete(
    request: DeleteBrokerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteBrokerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteBrokerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of broker certificates for the specified broker. */
  listCertificates(
    request: ListBrokerCertificatesRequest,
    callback: (error: ServiceError | null, response: ListBrokerCertificatesResponse) => void,
  ): ClientUnaryCall;
  listCertificates(
    request: ListBrokerCertificatesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBrokerCertificatesResponse) => void,
  ): ClientUnaryCall;
  listCertificates(
    request: ListBrokerCertificatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBrokerCertificatesResponse) => void,
  ): ClientUnaryCall;
  /** Adds a certificate. */
  addCertificate(
    request: AddBrokerCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addCertificate(
    request: AddBrokerCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addCertificate(
    request: AddBrokerCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified broker certificate. */
  deleteCertificate(
    request: DeleteBrokerCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteCertificate(
    request: DeleteBrokerCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteCertificate(
    request: DeleteBrokerCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of passwords for the specified broker. */
  listPasswords(
    request: ListBrokerPasswordsRequest,
    callback: (error: ServiceError | null, response: ListBrokerPasswordsResponse) => void,
  ): ClientUnaryCall;
  listPasswords(
    request: ListBrokerPasswordsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBrokerPasswordsResponse) => void,
  ): ClientUnaryCall;
  listPasswords(
    request: ListBrokerPasswordsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBrokerPasswordsResponse) => void,
  ): ClientUnaryCall;
  /** Adds password for the specified broker. */
  addPassword(
    request: AddBrokerPasswordRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addPassword(
    request: AddBrokerPasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addPassword(
    request: AddBrokerPasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified password. */
  deletePassword(
    request: DeleteBrokerPasswordRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deletePassword(
    request: DeleteBrokerPasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deletePassword(
    request: DeleteBrokerPasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified broker. */
  listOperations(
    request: ListBrokerOperationsRequest,
    callback: (error: ServiceError | null, response: ListBrokerOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListBrokerOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBrokerOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListBrokerOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBrokerOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const BrokerServiceClient = makeGenericClientConstructor(
  BrokerServiceService,
  "yandex.cloud.iot.broker.v1.BrokerService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BrokerServiceClient;
  service: typeof BrokerServiceService;
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
