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
import { Image } from "./image";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface ListImagesRequest {
  $type: "yandex.cloud.containerregistry.v1.ListImagesRequest";
  /**
   * ID of the registry to list Docker images in.
   *
   * [registry_id] is ignored if a [ListImagesRequest.repository_name] is specified in the request.
   *
   * To get the registry ID use a [RegistryService.List] request.
   */
  registryId: string;
  /**
   * Name of the repository to list Docker images in.
   *
   * To get the repository name use a [RepositoryService.List] request.
   */
  repositoryName: string;
  /**
   * ID of the folder to list Docker images in.
   *
   * [folder_id] is ignored if a [ListImagesRequest.repository_name] or a [ListImagesRequest.registry_id] are specified in the request.
   *
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListImagesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListImagesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Image.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be a maximum of 256 characters long and match the regular expression `[a-z0-9]+(?:[._-][a-z0-9]+)*(/([a-z0-9]+(?:[._-][a-z0-9]+)*))`.
   */
  filter: string;
  orderBy: string;
}

export interface ListImagesResponse {
  $type: "yandex.cloud.containerregistry.v1.ListImagesResponse";
  /** List of Image resources. */
  images: Image[];
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

export interface GetImageRequest {
  $type: "yandex.cloud.containerregistry.v1.GetImageRequest";
  /**
   * ID of the Docker image resource to return.
   *
   * To get the Docker image ID use a [ImageService.List] request.
   */
  imageId: string;
}

export interface DeleteImageRequest {
  $type: "yandex.cloud.containerregistry.v1.DeleteImageRequest";
  /**
   * ID of the Docker image to delete.
   *
   * To get Docker image ID use a [ImageService.List] request.
   */
  imageId: string;
}

export interface DeleteImageMetadata {
  $type: "yandex.cloud.containerregistry.v1.DeleteImageMetadata";
  /** ID of the Docker image that is being deleted. */
  imageId: string;
}

function createBaseListImagesRequest(): ListImagesRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListImagesRequest",
    registryId: "",
    repositoryName: "",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListImagesRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListImagesRequest" as const,

  encode(message: ListImagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.folderId !== "") {
      writer.uint32(58).string(message.folderId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListImagesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.repositoryName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.folderId = reader.string();
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

  fromJSON(object: any): ListImagesRequest {
    return {
      $type: ListImagesRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      repositoryName: isSet(object.repositoryName) ? globalThis.String(object.repositoryName) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListImagesRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.repositoryName !== "") {
      obj.repositoryName = message.repositoryName;
    }
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
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListImagesRequest>, I>>(base?: I): ListImagesRequest {
    return ListImagesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListImagesRequest>, I>>(object: I): ListImagesRequest {
    const message = createBaseListImagesRequest();
    message.registryId = object.registryId ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListImagesRequest.$type, ListImagesRequest);

function createBaseListImagesResponse(): ListImagesResponse {
  return { $type: "yandex.cloud.containerregistry.v1.ListImagesResponse", images: [], nextPageToken: "" };
}

export const ListImagesResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListImagesResponse" as const,

  encode(message: ListImagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.images) {
      Image.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListImagesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImagesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.images.push(Image.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListImagesResponse {
    return {
      $type: ListImagesResponse.$type,
      images: globalThis.Array.isArray(object?.images) ? object.images.map((e: any) => Image.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListImagesResponse): unknown {
    const obj: any = {};
    if (message.images?.length) {
      obj.images = message.images.map((e) => Image.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListImagesResponse>, I>>(base?: I): ListImagesResponse {
    return ListImagesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListImagesResponse>, I>>(object: I): ListImagesResponse {
    const message = createBaseListImagesResponse();
    message.images = object.images?.map((e) => Image.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListImagesResponse.$type, ListImagesResponse);

function createBaseGetImageRequest(): GetImageRequest {
  return { $type: "yandex.cloud.containerregistry.v1.GetImageRequest", imageId: "" };
}

export const GetImageRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetImageRequest" as const,

  encode(message: GetImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageId !== "") {
      writer.uint32(10).string(message.imageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetImageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetImageRequest();
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

  fromJSON(object: any): GetImageRequest {
    return { $type: GetImageRequest.$type, imageId: isSet(object.imageId) ? globalThis.String(object.imageId) : "" };
  },

  toJSON(message: GetImageRequest): unknown {
    const obj: any = {};
    if (message.imageId !== "") {
      obj.imageId = message.imageId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetImageRequest>, I>>(base?: I): GetImageRequest {
    return GetImageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetImageRequest>, I>>(object: I): GetImageRequest {
    const message = createBaseGetImageRequest();
    message.imageId = object.imageId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetImageRequest.$type, GetImageRequest);

function createBaseDeleteImageRequest(): DeleteImageRequest {
  return { $type: "yandex.cloud.containerregistry.v1.DeleteImageRequest", imageId: "" };
}

export const DeleteImageRequest = {
  $type: "yandex.cloud.containerregistry.v1.DeleteImageRequest" as const,

  encode(message: DeleteImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageId !== "") {
      writer.uint32(10).string(message.imageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteImageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteImageRequest();
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

  fromJSON(object: any): DeleteImageRequest {
    return { $type: DeleteImageRequest.$type, imageId: isSet(object.imageId) ? globalThis.String(object.imageId) : "" };
  },

  toJSON(message: DeleteImageRequest): unknown {
    const obj: any = {};
    if (message.imageId !== "") {
      obj.imageId = message.imageId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteImageRequest>, I>>(base?: I): DeleteImageRequest {
    return DeleteImageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteImageRequest>, I>>(object: I): DeleteImageRequest {
    const message = createBaseDeleteImageRequest();
    message.imageId = object.imageId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteImageRequest.$type, DeleteImageRequest);

function createBaseDeleteImageMetadata(): DeleteImageMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.DeleteImageMetadata", imageId: "" };
}

export const DeleteImageMetadata = {
  $type: "yandex.cloud.containerregistry.v1.DeleteImageMetadata" as const,

  encode(message: DeleteImageMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageId !== "") {
      writer.uint32(10).string(message.imageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteImageMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteImageMetadata();
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

  fromJSON(object: any): DeleteImageMetadata {
    return {
      $type: DeleteImageMetadata.$type,
      imageId: isSet(object.imageId) ? globalThis.String(object.imageId) : "",
    };
  },

  toJSON(message: DeleteImageMetadata): unknown {
    const obj: any = {};
    if (message.imageId !== "") {
      obj.imageId = message.imageId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteImageMetadata>, I>>(base?: I): DeleteImageMetadata {
    return DeleteImageMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteImageMetadata>, I>>(object: I): DeleteImageMetadata {
    const message = createBaseDeleteImageMetadata();
    message.imageId = object.imageId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteImageMetadata.$type, DeleteImageMetadata);

/** A set of methods for managing Image resources. */
export type ImageServiceService = typeof ImageServiceService;
export const ImageServiceService = {
  /** Retrieves the list of Image resources in the specified registry or repository. */
  list: {
    path: "/yandex.cloud.containerregistry.v1.ImageService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListImagesRequest) => Buffer.from(ListImagesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListImagesRequest.decode(value),
    responseSerialize: (value: ListImagesResponse) => Buffer.from(ListImagesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListImagesResponse.decode(value),
  },
  /**
   * Returns the specified Image resource.
   *
   * To get the list of available Image resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.containerregistry.v1.ImageService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetImageRequest) => Buffer.from(GetImageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetImageRequest.decode(value),
    responseSerialize: (value: Image) => Buffer.from(Image.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Image.decode(value),
  },
  /** Deletes the specified Docker image. */
  delete: {
    path: "/yandex.cloud.containerregistry.v1.ImageService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteImageRequest) => Buffer.from(DeleteImageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteImageRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ImageServiceServer extends UntypedServiceImplementation {
  /** Retrieves the list of Image resources in the specified registry or repository. */
  list: handleUnaryCall<ListImagesRequest, ListImagesResponse>;
  /**
   * Returns the specified Image resource.
   *
   * To get the list of available Image resources, make a [List] request.
   */
  get: handleUnaryCall<GetImageRequest, Image>;
  /** Deletes the specified Docker image. */
  delete: handleUnaryCall<DeleteImageRequest, Operation>;
}

export interface ImageServiceClient extends Client {
  /** Retrieves the list of Image resources in the specified registry or repository. */
  list(
    request: ListImagesRequest,
    callback: (error: ServiceError | null, response: ListImagesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListImagesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListImagesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListImagesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListImagesResponse) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified Image resource.
   *
   * To get the list of available Image resources, make a [List] request.
   */
  get(request: GetImageRequest, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
  get(
    request: GetImageRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Image) => void,
  ): ClientUnaryCall;
  get(
    request: GetImageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Image) => void,
  ): ClientUnaryCall;
  /** Deletes the specified Docker image. */
  delete(
    request: DeleteImageRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteImageRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteImageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ImageServiceClient = makeGenericClientConstructor(
  ImageServiceService,
  "yandex.cloud.containerregistry.v1.ImageService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ImageServiceClient;
  service: typeof ImageServiceService;
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
