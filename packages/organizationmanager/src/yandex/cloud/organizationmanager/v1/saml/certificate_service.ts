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
import { Certificate } from "./certificate";

export const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";

export interface GetCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.GetCertificateRequest";
  /**
   * ID of the certificate to return.
   * To get the certificate ID, make a [CertificateService.List] request.
   */
  certificateId: string;
}

export interface ListCertificatesRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesRequest";
  /**
   * ID of the federation to list certificates in.
   * To get the federation ID make a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request.
   */
  federationId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListCertificatesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListCertificatesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Certificate.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListCertificatesResponse {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesResponse";
  /** List of certificates. */
  certificates: Certificate[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCertificatesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListCertificatesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateRequest";
  /**
   * ID of the federation to add new certificate.
   * To get the federation ID make a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request.
   */
  federationId: string;
  /**
   * Name of the certificate.
   * The name must be unique within the federation.
   */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Certificate data in PEM format. */
  data: string;
}

export interface CreateCertificateMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateMetadata";
  /** ID of the certificate that is being created. */
  certificateId: string;
}

export interface UpdateCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateRequest";
  /**
   * ID of the certificate to update.
   * To get the certificate ID, make a [CertificateService.List] request.
   */
  certificateId: string;
  /** Field mask that specifies which fields of the certificate are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the certificate.
   * The name must be unique within the federation.
   */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Certificate data in PEM format. */
  data: string;
}

export interface UpdateCertificateMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateMetadata";
  /** ID of the certificate that is being updated. */
  certificateId: string;
}

export interface DeleteCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateRequest";
  /**
   * ID of the certificate to delete.
   * To get the certificate ID, make a [CertificateService.List] request.
   */
  certificateId: string;
}

export interface DeleteCertificateMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateMetadata";
  /** ID of the certificate that is being deleted. */
  certificateId: string;
}

export interface ListCertificateOperationsRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsRequest";
  /** ID of the certificate to list operations for. */
  certificateId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListCertificateOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListCertificateOperationsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListCertificateOperationsResponse {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsResponse";
  /** List of operations for the specified certificate. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCertificateOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListCertificateOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetCertificateRequest(): GetCertificateRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.saml.GetCertificateRequest", certificateId: "" };
}

export const GetCertificateRequest = {
  $type: "yandex.cloud.organizationmanager.v1.saml.GetCertificateRequest" as const,

  encode(message: GetCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCertificateRequest {
    return {
      $type: GetCertificateRequest.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
    };
  },

  toJSON(message: GetCertificateRequest): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCertificateRequest>, I>>(base?: I): GetCertificateRequest {
    return GetCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCertificateRequest>, I>>(object: I): GetCertificateRequest {
    const message = createBaseGetCertificateRequest();
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetCertificateRequest.$type, GetCertificateRequest);

function createBaseListCertificatesRequest(): ListCertificatesRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesRequest",
    federationId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListCertificatesRequest = {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesRequest" as const,

  encode(message: ListCertificatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCertificatesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCertificatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
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

  fromJSON(object: any): ListCertificatesRequest {
    return {
      $type: ListCertificatesRequest.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListCertificatesRequest): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
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

  create<I extends Exact<DeepPartial<ListCertificatesRequest>, I>>(base?: I): ListCertificatesRequest {
    return ListCertificatesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCertificatesRequest>, I>>(object: I): ListCertificatesRequest {
    const message = createBaseListCertificatesRequest();
    message.federationId = object.federationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCertificatesRequest.$type, ListCertificatesRequest);

function createBaseListCertificatesResponse(): ListCertificatesResponse {
  return {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesResponse",
    certificates: [],
    nextPageToken: "",
  };
}

export const ListCertificatesResponse = {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesResponse" as const,

  encode(message: ListCertificatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.certificates) {
      Certificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCertificatesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCertificatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificates.push(Certificate.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListCertificatesResponse {
    return {
      $type: ListCertificatesResponse.$type,
      certificates: globalThis.Array.isArray(object?.certificates)
        ? object.certificates.map((e: any) => Certificate.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListCertificatesResponse): unknown {
    const obj: any = {};
    if (message.certificates?.length) {
      obj.certificates = message.certificates.map((e) => Certificate.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCertificatesResponse>, I>>(base?: I): ListCertificatesResponse {
    return ListCertificatesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCertificatesResponse>, I>>(object: I): ListCertificatesResponse {
    const message = createBaseListCertificatesResponse();
    message.certificates = object.certificates?.map((e) => Certificate.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCertificatesResponse.$type, ListCertificatesResponse);

function createBaseCreateCertificateRequest(): CreateCertificateRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateRequest",
    federationId: "",
    name: "",
    description: "",
    data: "",
  };
}

export const CreateCertificateRequest = {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateRequest" as const,

  encode(message: CreateCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
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

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCertificateRequest {
    return {
      $type: CreateCertificateRequest.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      data: isSet(object.data) ? globalThis.String(object.data) : "",
    };
  },

  toJSON(message: CreateCertificateRequest): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCertificateRequest>, I>>(base?: I): CreateCertificateRequest {
    return CreateCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCertificateRequest>, I>>(object: I): CreateCertificateRequest {
    const message = createBaseCreateCertificateRequest();
    message.federationId = object.federationId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateCertificateRequest.$type, CreateCertificateRequest);

function createBaseCreateCertificateMetadata(): CreateCertificateMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateMetadata", certificateId: "" };
}

export const CreateCertificateMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateMetadata" as const,

  encode(message: CreateCertificateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCertificateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCertificateMetadata {
    return {
      $type: CreateCertificateMetadata.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
    };
  },

  toJSON(message: CreateCertificateMetadata): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCertificateMetadata>, I>>(base?: I): CreateCertificateMetadata {
    return CreateCertificateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCertificateMetadata>, I>>(object: I): CreateCertificateMetadata {
    const message = createBaseCreateCertificateMetadata();
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateCertificateMetadata.$type, CreateCertificateMetadata);

function createBaseUpdateCertificateRequest(): UpdateCertificateRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateRequest",
    certificateId: "",
    updateMask: undefined,
    name: "",
    description: "",
    data: "",
  };
}

export const UpdateCertificateRequest = {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateRequest" as const,

  encode(message: UpdateCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
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
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateId = reader.string();
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

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCertificateRequest {
    return {
      $type: UpdateCertificateRequest.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      data: isSet(object.data) ? globalThis.String(object.data) : "",
    };
  },

  toJSON(message: UpdateCertificateRequest): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
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
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCertificateRequest>, I>>(base?: I): UpdateCertificateRequest {
    return UpdateCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCertificateRequest>, I>>(object: I): UpdateCertificateRequest {
    const message = createBaseUpdateCertificateRequest();
    message.certificateId = object.certificateId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateCertificateRequest.$type, UpdateCertificateRequest);

function createBaseUpdateCertificateMetadata(): UpdateCertificateMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateMetadata", certificateId: "" };
}

export const UpdateCertificateMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateMetadata" as const,

  encode(message: UpdateCertificateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCertificateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCertificateMetadata {
    return {
      $type: UpdateCertificateMetadata.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
    };
  },

  toJSON(message: UpdateCertificateMetadata): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCertificateMetadata>, I>>(base?: I): UpdateCertificateMetadata {
    return UpdateCertificateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCertificateMetadata>, I>>(object: I): UpdateCertificateMetadata {
    const message = createBaseUpdateCertificateMetadata();
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateCertificateMetadata.$type, UpdateCertificateMetadata);

function createBaseDeleteCertificateRequest(): DeleteCertificateRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateRequest", certificateId: "" };
}

export const DeleteCertificateRequest = {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateRequest" as const,

  encode(message: DeleteCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteCertificateRequest {
    return {
      $type: DeleteCertificateRequest.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
    };
  },

  toJSON(message: DeleteCertificateRequest): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCertificateRequest>, I>>(base?: I): DeleteCertificateRequest {
    return DeleteCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteCertificateRequest>, I>>(object: I): DeleteCertificateRequest {
    const message = createBaseDeleteCertificateRequest();
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteCertificateRequest.$type, DeleteCertificateRequest);

function createBaseDeleteCertificateMetadata(): DeleteCertificateMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateMetadata", certificateId: "" };
}

export const DeleteCertificateMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateMetadata" as const,

  encode(message: DeleteCertificateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCertificateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteCertificateMetadata {
    return {
      $type: DeleteCertificateMetadata.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
    };
  },

  toJSON(message: DeleteCertificateMetadata): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCertificateMetadata>, I>>(base?: I): DeleteCertificateMetadata {
    return DeleteCertificateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteCertificateMetadata>, I>>(object: I): DeleteCertificateMetadata {
    const message = createBaseDeleteCertificateMetadata();
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteCertificateMetadata.$type, DeleteCertificateMetadata);

function createBaseListCertificateOperationsRequest(): ListCertificateOperationsRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsRequest",
    certificateId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListCertificateOperationsRequest = {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsRequest" as const,

  encode(message: ListCertificateOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCertificateOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCertificateOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateId = reader.string();
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

  fromJSON(object: any): ListCertificateOperationsRequest {
    return {
      $type: ListCertificateOperationsRequest.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListCertificateOperationsRequest): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCertificateOperationsRequest>, I>>(
    base?: I,
  ): ListCertificateOperationsRequest {
    return ListCertificateOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCertificateOperationsRequest>, I>>(
    object: I,
  ): ListCertificateOperationsRequest {
    const message = createBaseListCertificateOperationsRequest();
    message.certificateId = object.certificateId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCertificateOperationsRequest.$type, ListCertificateOperationsRequest);

function createBaseListCertificateOperationsResponse(): ListCertificateOperationsResponse {
  return {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListCertificateOperationsResponse = {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsResponse" as const,

  encode(message: ListCertificateOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCertificateOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCertificateOperationsResponse();
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

  fromJSON(object: any): ListCertificateOperationsResponse {
    return {
      $type: ListCertificateOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListCertificateOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCertificateOperationsResponse>, I>>(
    base?: I,
  ): ListCertificateOperationsResponse {
    return ListCertificateOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCertificateOperationsResponse>, I>>(
    object: I,
  ): ListCertificateOperationsResponse {
    const message = createBaseListCertificateOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCertificateOperationsResponse.$type, ListCertificateOperationsResponse);

/** A set of methods for managing certificates. */
export type CertificateServiceService = typeof CertificateServiceService;
export const CertificateServiceService = {
  /**
   * Returns the specified certificate.
   *
   * To get the list of available certificates, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCertificateRequest) => Buffer.from(GetCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCertificateRequest.decode(value),
    responseSerialize: (value: Certificate) => Buffer.from(Certificate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Certificate.decode(value),
  },
  /** Retrieves the list of certificates in the specified federation. */
  list: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCertificatesRequest) => Buffer.from(ListCertificatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCertificatesRequest.decode(value),
    responseSerialize: (value: ListCertificatesResponse) =>
      Buffer.from(ListCertificatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListCertificatesResponse.decode(value),
  },
  /** Creates a certificate in the specified federation. */
  create: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateCertificateRequest) => Buffer.from(CreateCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified certificate. */
  update: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateCertificateRequest) => Buffer.from(UpdateCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified certificate. */
  delete: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteCertificateRequest) => Buffer.from(DeleteCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified certificate. */
  listOperations: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCertificateOperationsRequest) =>
      Buffer.from(ListCertificateOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCertificateOperationsRequest.decode(value),
    responseSerialize: (value: ListCertificateOperationsResponse) =>
      Buffer.from(ListCertificateOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListCertificateOperationsResponse.decode(value),
  },
} as const;

export interface CertificateServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified certificate.
   *
   * To get the list of available certificates, make a [List] request.
   */
  get: handleUnaryCall<GetCertificateRequest, Certificate>;
  /** Retrieves the list of certificates in the specified federation. */
  list: handleUnaryCall<ListCertificatesRequest, ListCertificatesResponse>;
  /** Creates a certificate in the specified federation. */
  create: handleUnaryCall<CreateCertificateRequest, Operation>;
  /** Updates the specified certificate. */
  update: handleUnaryCall<UpdateCertificateRequest, Operation>;
  /** Deletes the specified certificate. */
  delete: handleUnaryCall<DeleteCertificateRequest, Operation>;
  /** Lists operations for the specified certificate. */
  listOperations: handleUnaryCall<ListCertificateOperationsRequest, ListCertificateOperationsResponse>;
}

export interface CertificateServiceClient extends Client {
  /**
   * Returns the specified certificate.
   *
   * To get the list of available certificates, make a [List] request.
   */
  get(
    request: GetCertificateRequest,
    callback: (error: ServiceError | null, response: Certificate) => void,
  ): ClientUnaryCall;
  get(
    request: GetCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Certificate) => void,
  ): ClientUnaryCall;
  get(
    request: GetCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Certificate) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of certificates in the specified federation. */
  list(
    request: ListCertificatesRequest,
    callback: (error: ServiceError | null, response: ListCertificatesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListCertificatesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListCertificatesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListCertificatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListCertificatesResponse) => void,
  ): ClientUnaryCall;
  /** Creates a certificate in the specified federation. */
  create(
    request: CreateCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified certificate. */
  update(
    request: UpdateCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified certificate. */
  delete(
    request: DeleteCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified certificate. */
  listOperations(
    request: ListCertificateOperationsRequest,
    callback: (error: ServiceError | null, response: ListCertificateOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListCertificateOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListCertificateOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListCertificateOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListCertificateOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const CertificateServiceClient = makeGenericClientConstructor(
  CertificateServiceService,
  "yandex.cloud.organizationmanager.v1.saml.CertificateService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): CertificateServiceClient;
  service: typeof CertificateServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
