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
import { ScanResult, Vulnerability } from "./scanner";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface ScanRequest {
  $type: "yandex.cloud.containerregistry.v1.ScanRequest";
  /** ID of the Image to be scanned for vulnerabilities. */
  imageId: string;
}

export interface ScanMetadata {
  $type: "yandex.cloud.containerregistry.v1.ScanMetadata";
  /** ID of the ScanResult that is being created. */
  scanResultId: string;
}

export interface GetScanResultRequest {
  $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest";
  /** ID of the ScanResult to return. */
  scanResultId: string;
}

export interface GetLastScanResultRequest {
  $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest";
  /** ID of the Image to get last finished ScanResult. */
  imageId: string;
}

export interface ListScanResultsRequest {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest";
  imageId?: string | undefined;
  repositoryId?:
    | string
    | undefined;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListRegistriesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListRegistriesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [ScanResult.status] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`).
   */
  filter: string;
  /**
   * An order expression that orders resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [ScanResult.status] field.
   * 2. Order selector. Currently you can use ordering only on `ScanResult.status` field (critical first).
   */
  orderBy: string;
}

export interface ListScanResultsResponse {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse";
  /** List of ScanResult resources. */
  scanResults: ScanResult[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListImagesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListImagesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListVulnerabilitiesRequest {
  $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest";
  /** ID of the ScanResult to get list of vulnerabilities for. */
  scanResultId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListRegistriesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListRegistriesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Vulnerability.severity] and [PackageVulnerability.name] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`).
   */
  filter: string;
  /**
   * An order expression that orders resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Vulnerability.severity] and [PackageVulnerability.name] fields.
   * 2. Order selector. Currently you can use ordering only on `Vulnerability.severity` field (recent first).
   */
  orderBy: string;
}

export interface ListVulnerabilitiesResponse {
  $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse";
  /** List of Vulnerability resources. */
  vulnerabilities: Vulnerability[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListImagesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListImagesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseScanRequest(): ScanRequest {
  return { $type: "yandex.cloud.containerregistry.v1.ScanRequest", imageId: "" };
}

export const ScanRequest = {
  $type: "yandex.cloud.containerregistry.v1.ScanRequest" as const,

  encode(message: ScanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageId !== "") {
      writer.uint32(10).string(message.imageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.imageId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanRequest {
    return { $type: ScanRequest.$type, imageId: isSet(object.imageId) ? globalThis.String(object.imageId) : "" };
  },

  toJSON(message: ScanRequest): unknown {
    const obj: any = {};
    if (message.imageId !== "") {
      obj.imageId = message.imageId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScanRequest>, I>>(base?: I): ScanRequest {
    return ScanRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScanRequest>, I>>(object: I): ScanRequest {
    const message = createBaseScanRequest();
    message.imageId = object.imageId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ScanRequest.$type, ScanRequest);

function createBaseScanMetadata(): ScanMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.ScanMetadata", scanResultId: "" };
}

export const ScanMetadata = {
  $type: "yandex.cloud.containerregistry.v1.ScanMetadata" as const,

  encode(message: ScanMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scanResultId !== "") {
      writer.uint32(10).string(message.scanResultId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanResultId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanMetadata {
    return {
      $type: ScanMetadata.$type,
      scanResultId: isSet(object.scanResultId) ? globalThis.String(object.scanResultId) : "",
    };
  },

  toJSON(message: ScanMetadata): unknown {
    const obj: any = {};
    if (message.scanResultId !== "") {
      obj.scanResultId = message.scanResultId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScanMetadata>, I>>(base?: I): ScanMetadata {
    return ScanMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScanMetadata>, I>>(object: I): ScanMetadata {
    const message = createBaseScanMetadata();
    message.scanResultId = object.scanResultId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ScanMetadata.$type, ScanMetadata);

function createBaseGetScanResultRequest(): GetScanResultRequest {
  return { $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest", scanResultId: "" };
}

export const GetScanResultRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest" as const,

  encode(message: GetScanResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scanResultId !== "") {
      writer.uint32(10).string(message.scanResultId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScanResultRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScanResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanResultId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetScanResultRequest {
    return {
      $type: GetScanResultRequest.$type,
      scanResultId: isSet(object.scanResultId) ? globalThis.String(object.scanResultId) : "",
    };
  },

  toJSON(message: GetScanResultRequest): unknown {
    const obj: any = {};
    if (message.scanResultId !== "") {
      obj.scanResultId = message.scanResultId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScanResultRequest>, I>>(base?: I): GetScanResultRequest {
    return GetScanResultRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetScanResultRequest>, I>>(object: I): GetScanResultRequest {
    const message = createBaseGetScanResultRequest();
    message.scanResultId = object.scanResultId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetScanResultRequest.$type, GetScanResultRequest);

function createBaseGetLastScanResultRequest(): GetLastScanResultRequest {
  return { $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest", imageId: "" };
}

export const GetLastScanResultRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest" as const,

  encode(message: GetLastScanResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageId !== "") {
      writer.uint32(10).string(message.imageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLastScanResultRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastScanResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.imageId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLastScanResultRequest {
    return {
      $type: GetLastScanResultRequest.$type,
      imageId: isSet(object.imageId) ? globalThis.String(object.imageId) : "",
    };
  },

  toJSON(message: GetLastScanResultRequest): unknown {
    const obj: any = {};
    if (message.imageId !== "") {
      obj.imageId = message.imageId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLastScanResultRequest>, I>>(base?: I): GetLastScanResultRequest {
    return GetLastScanResultRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLastScanResultRequest>, I>>(object: I): GetLastScanResultRequest {
    const message = createBaseGetLastScanResultRequest();
    message.imageId = object.imageId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLastScanResultRequest.$type, GetLastScanResultRequest);

function createBaseListScanResultsRequest(): ListScanResultsRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest",
    imageId: undefined,
    repositoryId: undefined,
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListScanResultsRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest" as const,

  encode(message: ListScanResultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageId !== undefined) {
      writer.uint32(10).string(message.imageId);
    }
    if (message.repositoryId !== undefined) {
      writer.uint32(18).string(message.repositoryId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(50).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListScanResultsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListScanResultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.imageId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.repositoryId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): ListScanResultsRequest {
    return {
      $type: ListScanResultsRequest.$type,
      imageId: isSet(object.imageId) ? globalThis.String(object.imageId) : undefined,
      repositoryId: isSet(object.repositoryId) ? globalThis.String(object.repositoryId) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListScanResultsRequest): unknown {
    const obj: any = {};
    if (message.imageId !== undefined) {
      obj.imageId = message.imageId;
    }
    if (message.repositoryId !== undefined) {
      obj.repositoryId = message.repositoryId;
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

  create<I extends Exact<DeepPartial<ListScanResultsRequest>, I>>(base?: I): ListScanResultsRequest {
    return ListScanResultsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListScanResultsRequest>, I>>(object: I): ListScanResultsRequest {
    const message = createBaseListScanResultsRequest();
    message.imageId = object.imageId ?? undefined;
    message.repositoryId = object.repositoryId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListScanResultsRequest.$type, ListScanResultsRequest);

function createBaseListScanResultsResponse(): ListScanResultsResponse {
  return { $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse", scanResults: [], nextPageToken: "" };
}

export const ListScanResultsResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse" as const,

  encode(message: ListScanResultsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.scanResults) {
      ScanResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListScanResultsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListScanResultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanResults.push(ScanResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListScanResultsResponse {
    return {
      $type: ListScanResultsResponse.$type,
      scanResults: globalThis.Array.isArray(object?.scanResults)
        ? object.scanResults.map((e: any) => ScanResult.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListScanResultsResponse): unknown {
    const obj: any = {};
    if (message.scanResults?.length) {
      obj.scanResults = message.scanResults.map((e) => ScanResult.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListScanResultsResponse>, I>>(base?: I): ListScanResultsResponse {
    return ListScanResultsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListScanResultsResponse>, I>>(object: I): ListScanResultsResponse {
    const message = createBaseListScanResultsResponse();
    message.scanResults = object.scanResults?.map((e) => ScanResult.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListScanResultsResponse.$type, ListScanResultsResponse);

function createBaseListVulnerabilitiesRequest(): ListVulnerabilitiesRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest",
    scanResultId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListVulnerabilitiesRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest" as const,

  encode(message: ListVulnerabilitiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scanResultId !== "") {
      writer.uint32(10).string(message.scanResultId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVulnerabilitiesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVulnerabilitiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanResultId = reader.string();
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

  fromJSON(object: any): ListVulnerabilitiesRequest {
    return {
      $type: ListVulnerabilitiesRequest.$type,
      scanResultId: isSet(object.scanResultId) ? globalThis.String(object.scanResultId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListVulnerabilitiesRequest): unknown {
    const obj: any = {};
    if (message.scanResultId !== "") {
      obj.scanResultId = message.scanResultId;
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

  create<I extends Exact<DeepPartial<ListVulnerabilitiesRequest>, I>>(base?: I): ListVulnerabilitiesRequest {
    return ListVulnerabilitiesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListVulnerabilitiesRequest>, I>>(object: I): ListVulnerabilitiesRequest {
    const message = createBaseListVulnerabilitiesRequest();
    message.scanResultId = object.scanResultId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVulnerabilitiesRequest.$type, ListVulnerabilitiesRequest);

function createBaseListVulnerabilitiesResponse(): ListVulnerabilitiesResponse {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse",
    vulnerabilities: [],
    nextPageToken: "",
  };
}

export const ListVulnerabilitiesResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse" as const,

  encode(message: ListVulnerabilitiesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vulnerabilities) {
      Vulnerability.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVulnerabilitiesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVulnerabilitiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vulnerabilities.push(Vulnerability.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListVulnerabilitiesResponse {
    return {
      $type: ListVulnerabilitiesResponse.$type,
      vulnerabilities: globalThis.Array.isArray(object?.vulnerabilities)
        ? object.vulnerabilities.map((e: any) => Vulnerability.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListVulnerabilitiesResponse): unknown {
    const obj: any = {};
    if (message.vulnerabilities?.length) {
      obj.vulnerabilities = message.vulnerabilities.map((e) => Vulnerability.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListVulnerabilitiesResponse>, I>>(base?: I): ListVulnerabilitiesResponse {
    return ListVulnerabilitiesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListVulnerabilitiesResponse>, I>>(object: I): ListVulnerabilitiesResponse {
    const message = createBaseListVulnerabilitiesResponse();
    message.vulnerabilities = object.vulnerabilities?.map((e) => Vulnerability.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVulnerabilitiesResponse.$type, ListVulnerabilitiesResponse);

/** A set of methods for scanning Docker images. */
export type ScannerServiceService = typeof ScannerServiceService;
export const ScannerServiceService = {
  /** Executes scanning of specified image. */
  scan: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified ScanResult resource.
   *
   * To get the list of ScanResults for specified Image, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetScanResultRequest) => Buffer.from(GetScanResultRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetScanResultRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  /** Returns the last finished ScanResult for the specified Image. */
  getLast: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/GetLast",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLastScanResultRequest) => Buffer.from(GetLastScanResultRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLastScanResultRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  /** Retrieves the list of ScanResults for specified Image. */
  list: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListScanResultsRequest) => Buffer.from(ListScanResultsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListScanResultsRequest.decode(value),
    responseSerialize: (value: ListScanResultsResponse) => Buffer.from(ListScanResultsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListScanResultsResponse.decode(value),
  },
  /** Retrieves the list of vulnerabilities found in particular scan. */
  listVulnerabilities: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/ListVulnerabilities",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListVulnerabilitiesRequest) =>
      Buffer.from(ListVulnerabilitiesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListVulnerabilitiesRequest.decode(value),
    responseSerialize: (value: ListVulnerabilitiesResponse) =>
      Buffer.from(ListVulnerabilitiesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListVulnerabilitiesResponse.decode(value),
  },
} as const;

export interface ScannerServiceServer extends UntypedServiceImplementation {
  /** Executes scanning of specified image. */
  scan: handleUnaryCall<ScanRequest, Operation>;
  /**
   * Returns the specified ScanResult resource.
   *
   * To get the list of ScanResults for specified Image, make a [List] request.
   */
  get: handleUnaryCall<GetScanResultRequest, ScanResult>;
  /** Returns the last finished ScanResult for the specified Image. */
  getLast: handleUnaryCall<GetLastScanResultRequest, ScanResult>;
  /** Retrieves the list of ScanResults for specified Image. */
  list: handleUnaryCall<ListScanResultsRequest, ListScanResultsResponse>;
  /** Retrieves the list of vulnerabilities found in particular scan. */
  listVulnerabilities: handleUnaryCall<ListVulnerabilitiesRequest, ListVulnerabilitiesResponse>;
}

export interface ScannerServiceClient extends Client {
  /** Executes scanning of specified image. */
  scan(request: ScanRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified ScanResult resource.
   *
   * To get the list of ScanResults for specified Image, make a [List] request.
   */
  get(
    request: GetScanResultRequest,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  get(
    request: GetScanResultRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  get(
    request: GetScanResultRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  /** Returns the last finished ScanResult for the specified Image. */
  getLast(
    request: GetLastScanResultRequest,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  getLast(
    request: GetLastScanResultRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  getLast(
    request: GetLastScanResultRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of ScanResults for specified Image. */
  list(
    request: ListScanResultsRequest,
    callback: (error: ServiceError | null, response: ListScanResultsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListScanResultsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListScanResultsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListScanResultsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListScanResultsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of vulnerabilities found in particular scan. */
  listVulnerabilities(
    request: ListVulnerabilitiesRequest,
    callback: (error: ServiceError | null, response: ListVulnerabilitiesResponse) => void,
  ): ClientUnaryCall;
  listVulnerabilities(
    request: ListVulnerabilitiesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListVulnerabilitiesResponse) => void,
  ): ClientUnaryCall;
  listVulnerabilities(
    request: ListVulnerabilitiesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListVulnerabilitiesResponse) => void,
  ): ClientUnaryCall;
}

export const ScannerServiceClient = makeGenericClientConstructor(
  ScannerServiceService,
  "yandex.cloud.containerregistry.v1.ScannerService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ScannerServiceClient;
  service: typeof ScannerServiceService;
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
