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
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "@yandex-cloud/core/dist/generated/yandex/cloud/access/access";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Certificate, ChallengeType, challengeTypeFromJSON, challengeTypeToJSON, Version } from "./certificate";

export const protobufPackage = "yandex.cloud.certificatemanager.v1";

export enum CertificateView {
  /** BASIC - Output basic information about the certificate. */
  BASIC = 0,
  /** FULL - Output full information about the certificate including domain challenges. */
  FULL = 1,
  UNRECOGNIZED = -1,
}

export function certificateViewFromJSON(object: any): CertificateView {
  switch (object) {
    case 0:
    case "BASIC":
      return CertificateView.BASIC;
    case 1:
    case "FULL":
      return CertificateView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CertificateView.UNRECOGNIZED;
  }
}

export function certificateViewToJSON(object: CertificateView): string {
  switch (object) {
    case CertificateView.BASIC:
      return "BASIC";
    case CertificateView.FULL:
      return "FULL";
    case CertificateView.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest";
  /**
   * ID of the certificate to return.
   *
   * To get the ID of a certificate use a [CertificateService.List] request.
   */
  certificateId: string;
  /** The output type of the certificate. */
  view: CertificateView;
}

export interface ListCertificatesRequest {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest";
  /** ID of the folder to list certificate in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListCertificatesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListCertificatesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /** The output type of the certificate. */
  view: CertificateView;
}

export interface ListCertificatesResponse {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse";
  /** List of certificates in the specified folder. */
  certificates: Certificate[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListCertificatesRequest.page_size], use
   * the `next_page_token` as the value for the [ListCertificatesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListVersionsRequest {
  $type: "yandex.cloud.certificatemanager.v1.ListVersionsRequest";
  /** ID of the certificate to list versions for. */
  certificateId: string;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListCertificatesResponse.next_page_token] returned by a previous list request.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListCertificatesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListVersionsResponse {
  $type: "yandex.cloud.certificatemanager.v1.ListVersionsResponse";
  /** List of versions for the specified certificate. */
  versions: Version[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListCertificatesRequest.page_size], use
   * the `next_page_token` as the value for the [ListCertificatesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest";
  /** ID of the folder to create a certificate in. */
  folderId: string;
  /**
   * Name of the certificate.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Labels for the certificate as `key:value` pairs. */
  labels: { [key: string]: string };
  /** PEM-encoded certificate content of the certificate. */
  certificate: string;
  /** PEM-encoded certificate chain content of the certificate. */
  chain: string;
  /** PEM-encoded private key content of the certificate. */
  privateKey: string;
  /** Flag that protects deletion of the certificate */
  deletionProtection: boolean;
}

export interface CreateCertificateRequest_LabelsEntry {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateCertificateMetadata {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata";
  /** ID of the certificate being created. */
  certificateId: string;
}

export interface UpdateCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest";
  /**
   * ID of the certificate to update.
   * To get the ID of a certificate use a [CertificateService.List] request.
   */
  certificateId: string;
  /** Field mask that specifies which attributes of the certificate are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New name for the certificate. */
  name: string;
  /** New description for the certificate. */
  description: string;
  /** New labels for the certificate as `key:value` pairs. */
  labels: { [key: string]: string };
  /** New PEM-encoded certificate content for the certificate. Used only for imported certificates. */
  certificate: string;
  /** New PEM-encoded certificate chain content for the certificate. Used only for imported certificates. */
  chain: string;
  /** New PEM-encoded private key content for the certificate. Used only for imported certificates. */
  privateKey: string;
  /** Flag that protects deletion of the certificate */
  deletionProtection: boolean;
}

export interface UpdateCertificateRequest_LabelsEntry {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateCertificateMetadata {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata";
  /** ID of the certificate being updated. */
  certificateId: string;
}

export interface DeleteCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest";
  /** ID of the certificate to be deleted. */
  certificateId: string;
}

export interface DeleteCertificateMetadata {
  $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata";
  /** ID of the certificate being deleted. */
  certificateId: string;
}

export interface RequestNewCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest";
  /** ID of the folder to create a certificate in. */
  folderId: string;
  /** Name of the certificate. */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Labels for the certificate as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Fully qualified domain names of the certificate. */
  domains: string[];
  /** Type of the domain validation challenge. */
  challengeType: ChallengeType;
  /** Flag that protects deletion of the certificate */
  deletionProtection: boolean;
}

export interface RequestNewCertificateRequest_LabelsEntry {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RequestNewCertificateMetadata {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata";
  /** ID of the certificate that is being requested. */
  certificateId: string;
}

export interface ListCertificateOperationsRequest {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest";
  /**
   * ID of the certificate to list operations for.
   *
   * To get the certificate ID, use a [CertificateService.List] request.
   */
  certificateId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListCertificateOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListCertificateOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListCertificateOperationsResponse {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse";
  /** List of operations for the specified certificate. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCertificateOperationsRequest.page_size], use the `next_page_token` as the value
   * for the [ListCertificateOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetCertificateRequest(): GetCertificateRequest {
  return { $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest", certificateId: "", view: 0 };
}

export const GetCertificateRequest = {
  $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest" as const,

  encode(message: GetCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
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
        case 2:
          if (tag !== 16) {
            break;
          }

          message.view = reader.int32() as any;
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
      view: isSet(object.view) ? certificateViewFromJSON(object.view) : 0,
    };
  },

  toJSON(message: GetCertificateRequest): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    if (message.view !== 0) {
      obj.view = certificateViewToJSON(message.view);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCertificateRequest>, I>>(base?: I): GetCertificateRequest {
    return GetCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCertificateRequest>, I>>(object: I): GetCertificateRequest {
    const message = createBaseGetCertificateRequest();
    message.certificateId = object.certificateId ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetCertificateRequest.$type, GetCertificateRequest);

function createBaseListCertificatesRequest(): ListCertificatesRequest {
  return {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    view: 0,
  };
}

export const ListCertificatesRequest = {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest" as const,

  encode(message: ListCertificatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.view !== 0) {
      writer.uint32(48).int32(message.view);
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
        case 6:
          if (tag !== 48) {
            break;
          }

          message.view = reader.int32() as any;
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
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      view: isSet(object.view) ? certificateViewFromJSON(object.view) : 0,
    };
  },

  toJSON(message: ListCertificatesRequest): unknown {
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
    if (message.view !== 0) {
      obj.view = certificateViewToJSON(message.view);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCertificatesRequest>, I>>(base?: I): ListCertificatesRequest {
    return ListCertificatesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCertificatesRequest>, I>>(object: I): ListCertificatesRequest {
    const message = createBaseListCertificatesRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListCertificatesRequest.$type, ListCertificatesRequest);

function createBaseListCertificatesResponse(): ListCertificatesResponse {
  return { $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse", certificates: [], nextPageToken: "" };
}

export const ListCertificatesResponse = {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse" as const,

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

function createBaseListVersionsRequest(): ListVersionsRequest {
  return {
    $type: "yandex.cloud.certificatemanager.v1.ListVersionsRequest",
    certificateId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListVersionsRequest = {
  $type: "yandex.cloud.certificatemanager.v1.ListVersionsRequest" as const,

  encode(message: ListVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsRequest();
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

  fromJSON(object: any): ListVersionsRequest {
    return {
      $type: ListVersionsRequest.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListVersionsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListVersionsRequest>, I>>(base?: I): ListVersionsRequest {
    return ListVersionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListVersionsRequest>, I>>(object: I): ListVersionsRequest {
    const message = createBaseListVersionsRequest();
    message.certificateId = object.certificateId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVersionsRequest.$type, ListVersionsRequest);

function createBaseListVersionsResponse(): ListVersionsResponse {
  return { $type: "yandex.cloud.certificatemanager.v1.ListVersionsResponse", versions: [], nextPageToken: "" };
}

export const ListVersionsResponse = {
  $type: "yandex.cloud.certificatemanager.v1.ListVersionsResponse" as const,

  encode(message: ListVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.versions.push(Version.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListVersionsResponse {
    return {
      $type: ListVersionsResponse.$type,
      versions: globalThis.Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListVersionsResponse): unknown {
    const obj: any = {};
    if (message.versions?.length) {
      obj.versions = message.versions.map((e) => Version.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListVersionsResponse>, I>>(base?: I): ListVersionsResponse {
    return ListVersionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListVersionsResponse>, I>>(object: I): ListVersionsResponse {
    const message = createBaseListVersionsResponse();
    message.versions = object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVersionsResponse.$type, ListVersionsResponse);

function createBaseCreateCertificateRequest(): CreateCertificateRequest {
  return {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    certificate: "",
    chain: "",
    privateKey: "",
    deletionProtection: false,
  };
}

export const CreateCertificateRequest = {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest" as const,

  encode(message: CreateCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateCertificateRequest_LabelsEntry.encode({
        $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.certificate !== "") {
      writer.uint32(42).string(message.certificate);
    }
    if (message.chain !== "") {
      writer.uint32(50).string(message.chain);
    }
    if (message.privateKey !== "") {
      writer.uint32(58).string(message.privateKey);
    }
    if (message.deletionProtection === true) {
      writer.uint32(64).bool(message.deletionProtection);
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

          const entry4 = CreateCertificateRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.certificate = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.chain = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.privateKey = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
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

  fromJSON(object: any): CreateCertificateRequest {
    return {
      $type: CreateCertificateRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      certificate: isSet(object.certificate) ? globalThis.String(object.certificate) : "",
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      privateKey: isSet(object.privateKey) ? globalThis.String(object.privateKey) : "",
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: CreateCertificateRequest): unknown {
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
    if (message.certificate !== "") {
      obj.certificate = message.certificate;
    }
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (message.privateKey !== "") {
      obj.privateKey = message.privateKey;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCertificateRequest>, I>>(base?: I): CreateCertificateRequest {
    return CreateCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCertificateRequest>, I>>(object: I): CreateCertificateRequest {
    const message = createBaseCreateCertificateRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.certificate = object.certificate ?? "";
    message.chain = object.chain ?? "";
    message.privateKey = object.privateKey ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateCertificateRequest.$type, CreateCertificateRequest);

function createBaseCreateCertificateRequest_LabelsEntry(): CreateCertificateRequest_LabelsEntry {
  return { $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry", key: "", value: "" };
}

export const CreateCertificateRequest_LabelsEntry = {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry" as const,

  encode(message: CreateCertificateRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCertificateRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCertificateRequest_LabelsEntry();
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

  fromJSON(object: any): CreateCertificateRequest_LabelsEntry {
    return {
      $type: CreateCertificateRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateCertificateRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCertificateRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateCertificateRequest_LabelsEntry {
    return CreateCertificateRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCertificateRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateCertificateRequest_LabelsEntry {
    const message = createBaseCreateCertificateRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateCertificateRequest_LabelsEntry.$type, CreateCertificateRequest_LabelsEntry);

function createBaseCreateCertificateMetadata(): CreateCertificateMetadata {
  return { $type: "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata", certificateId: "" };
}

export const CreateCertificateMetadata = {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata" as const,

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
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest",
    certificateId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    certificate: "",
    chain: "",
    privateKey: "",
    deletionProtection: false,
  };
}

export const UpdateCertificateRequest = {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest" as const,

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
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateCertificateRequest_LabelsEntry.encode({
        $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.certificate !== "") {
      writer.uint32(50).string(message.certificate);
    }
    if (message.chain !== "") {
      writer.uint32(58).string(message.chain);
    }
    if (message.privateKey !== "") {
      writer.uint32(66).string(message.privateKey);
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
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

          const entry5 = UpdateCertificateRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.certificate = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.chain = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.privateKey = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
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

  fromJSON(object: any): UpdateCertificateRequest {
    return {
      $type: UpdateCertificateRequest.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      certificate: isSet(object.certificate) ? globalThis.String(object.certificate) : "",
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      privateKey: isSet(object.privateKey) ? globalThis.String(object.privateKey) : "",
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
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
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.certificate !== "") {
      obj.certificate = message.certificate;
    }
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (message.privateKey !== "") {
      obj.privateKey = message.privateKey;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
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
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.certificate = object.certificate ?? "";
    message.chain = object.chain ?? "";
    message.privateKey = object.privateKey ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateCertificateRequest.$type, UpdateCertificateRequest);

function createBaseUpdateCertificateRequest_LabelsEntry(): UpdateCertificateRequest_LabelsEntry {
  return { $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateCertificateRequest_LabelsEntry = {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry" as const,

  encode(message: UpdateCertificateRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCertificateRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCertificateRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateCertificateRequest_LabelsEntry {
    return {
      $type: UpdateCertificateRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateCertificateRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCertificateRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateCertificateRequest_LabelsEntry {
    return UpdateCertificateRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCertificateRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateCertificateRequest_LabelsEntry {
    const message = createBaseUpdateCertificateRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateCertificateRequest_LabelsEntry.$type, UpdateCertificateRequest_LabelsEntry);

function createBaseUpdateCertificateMetadata(): UpdateCertificateMetadata {
  return { $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata", certificateId: "" };
}

export const UpdateCertificateMetadata = {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata" as const,

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
  return { $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest", certificateId: "" };
}

export const DeleteCertificateRequest = {
  $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest" as const,

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
  return { $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata", certificateId: "" };
}

export const DeleteCertificateMetadata = {
  $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata" as const,

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

function createBaseRequestNewCertificateRequest(): RequestNewCertificateRequest {
  return {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    domains: [],
    challengeType: 0,
    deletionProtection: false,
  };
}

export const RequestNewCertificateRequest = {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest" as const,

  encode(message: RequestNewCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      RequestNewCertificateRequest_LabelsEntry.encode({
        $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    for (const v of message.domains) {
      writer.uint32(42).string(v!);
    }
    if (message.challengeType !== 0) {
      writer.uint32(48).int32(message.challengeType);
    }
    if (message.deletionProtection === true) {
      writer.uint32(56).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestNewCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestNewCertificateRequest();
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

          const entry4 = RequestNewCertificateRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.domains.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.challengeType = reader.int32() as any;
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

  fromJSON(object: any): RequestNewCertificateRequest {
    return {
      $type: RequestNewCertificateRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      domains: globalThis.Array.isArray(object?.domains) ? object.domains.map((e: any) => globalThis.String(e)) : [],
      challengeType: isSet(object.challengeType) ? challengeTypeFromJSON(object.challengeType) : 0,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: RequestNewCertificateRequest): unknown {
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
    if (message.domains?.length) {
      obj.domains = message.domains;
    }
    if (message.challengeType !== 0) {
      obj.challengeType = challengeTypeToJSON(message.challengeType);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RequestNewCertificateRequest>, I>>(base?: I): RequestNewCertificateRequest {
    return RequestNewCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RequestNewCertificateRequest>, I>>(object: I): RequestNewCertificateRequest {
    const message = createBaseRequestNewCertificateRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.domains = object.domains?.map((e) => e) || [];
    message.challengeType = object.challengeType ?? 0;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(RequestNewCertificateRequest.$type, RequestNewCertificateRequest);

function createBaseRequestNewCertificateRequest_LabelsEntry(): RequestNewCertificateRequest_LabelsEntry {
  return { $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry", key: "", value: "" };
}

export const RequestNewCertificateRequest_LabelsEntry = {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry" as const,

  encode(message: RequestNewCertificateRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestNewCertificateRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestNewCertificateRequest_LabelsEntry();
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

  fromJSON(object: any): RequestNewCertificateRequest_LabelsEntry {
    return {
      $type: RequestNewCertificateRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: RequestNewCertificateRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RequestNewCertificateRequest_LabelsEntry>, I>>(
    base?: I,
  ): RequestNewCertificateRequest_LabelsEntry {
    return RequestNewCertificateRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RequestNewCertificateRequest_LabelsEntry>, I>>(
    object: I,
  ): RequestNewCertificateRequest_LabelsEntry {
    const message = createBaseRequestNewCertificateRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(RequestNewCertificateRequest_LabelsEntry.$type, RequestNewCertificateRequest_LabelsEntry);

function createBaseRequestNewCertificateMetadata(): RequestNewCertificateMetadata {
  return { $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata", certificateId: "" };
}

export const RequestNewCertificateMetadata = {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata" as const,

  encode(message: RequestNewCertificateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestNewCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestNewCertificateMetadata();
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

  fromJSON(object: any): RequestNewCertificateMetadata {
    return {
      $type: RequestNewCertificateMetadata.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
    };
  },

  toJSON(message: RequestNewCertificateMetadata): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RequestNewCertificateMetadata>, I>>(base?: I): RequestNewCertificateMetadata {
    return RequestNewCertificateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RequestNewCertificateMetadata>, I>>(
    object: I,
  ): RequestNewCertificateMetadata {
    const message = createBaseRequestNewCertificateMetadata();
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RequestNewCertificateMetadata.$type, RequestNewCertificateMetadata);

function createBaseListCertificateOperationsRequest(): ListCertificateOperationsRequest {
  return {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest",
    certificateId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListCertificateOperationsRequest = {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest" as const,

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
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListCertificateOperationsResponse = {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse" as const,

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
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCertificateRequest) => Buffer.from(GetCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCertificateRequest.decode(value),
    responseSerialize: (value: Certificate) => Buffer.from(Certificate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Certificate.decode(value),
  },
  /** Returns the list of certificates in the specified folder. */
  list: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCertificatesRequest) => Buffer.from(ListCertificatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCertificatesRequest.decode(value),
    responseSerialize: (value: ListCertificatesResponse) =>
      Buffer.from(ListCertificatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListCertificatesResponse.decode(value),
  },
  listVersions: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListVersions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListVersionsRequest) => Buffer.from(ListVersionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListVersionsRequest.decode(value),
    responseSerialize: (value: ListVersionsResponse) => Buffer.from(ListVersionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListVersionsResponse.decode(value),
  },
  /** Creates a certificate in the specified folder. */
  create: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateCertificateRequest) => Buffer.from(CreateCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified certificate. */
  update: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateCertificateRequest) => Buffer.from(UpdateCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified certificate. */
  delete: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteCertificateRequest) => Buffer.from(DeleteCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Request a certificate in the specified folder. */
  requestNew: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/RequestNew",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RequestNewCertificateRequest) =>
      Buffer.from(RequestNewCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RequestNewCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified certificate. */
  listOperations: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCertificateOperationsRequest) =>
      Buffer.from(ListCertificateOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCertificateOperationsRequest.decode(value),
    responseSerialize: (value: ListCertificateOperationsResponse) =>
      Buffer.from(ListCertificateOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListCertificateOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified certificate. */
  listAccessBindings: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the certificate. */
  setAccessBindings: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified certificate. */
  updateAccessBindings: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface CertificateServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified certificate.
   *
   * To get the list of available certificates, make a [List] request.
   */
  get: handleUnaryCall<GetCertificateRequest, Certificate>;
  /** Returns the list of certificates in the specified folder. */
  list: handleUnaryCall<ListCertificatesRequest, ListCertificatesResponse>;
  listVersions: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
  /** Creates a certificate in the specified folder. */
  create: handleUnaryCall<CreateCertificateRequest, Operation>;
  /** Updates the specified certificate. */
  update: handleUnaryCall<UpdateCertificateRequest, Operation>;
  /** Deletes the specified certificate. */
  delete: handleUnaryCall<DeleteCertificateRequest, Operation>;
  /** Request a certificate in the specified folder. */
  requestNew: handleUnaryCall<RequestNewCertificateRequest, Operation>;
  /** Lists operations for the specified certificate. */
  listOperations: handleUnaryCall<ListCertificateOperationsRequest, ListCertificateOperationsResponse>;
  /** Lists existing access bindings for the specified certificate. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the certificate. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified certificate. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
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
  /** Returns the list of certificates in the specified folder. */
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
  listVersions(
    request: ListVersionsRequest,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  listVersions(
    request: ListVersionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  listVersions(
    request: ListVersionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a certificate in the specified folder. */
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
  /** Request a certificate in the specified folder. */
  requestNew(
    request: RequestNewCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  requestNew(
    request: RequestNewCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  requestNew(
    request: RequestNewCertificateRequest,
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
  /** Lists existing access bindings for the specified certificate. */
  listAccessBindings(
    request: ListAccessBindingsRequest,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  /** Sets access bindings for the certificate. */
  setAccessBindings(
    request: SetAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates access bindings for the specified certificate. */
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const CertificateServiceClient = makeGenericClientConstructor(
  CertificateServiceService,
  "yandex.cloud.certificatemanager.v1.CertificateService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): CertificateServiceClient;
  service: typeof CertificateServiceService;
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
