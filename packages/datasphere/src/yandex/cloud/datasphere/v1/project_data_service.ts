/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientReadableStream,
  ClientWritableStream,
  handleClientStreamingCall,
  handleServerStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type { CallOptions, ClientOptions, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datasphere.v1";

export interface FileMetadata {
  $type: "yandex.cloud.datasphere.v1.FileMetadata";
  /** ID of the Project resource associated with the file. */
  projectId: string;
  /** File path. */
  path: string;
  /** File size in bytes. */
  sizeBytes: number;
}

export interface UploadFileRequest {
  $type: "yandex.cloud.datasphere.v1.UploadFileRequest";
  /** Metadata of the file to upload. */
  metadata?:
    | FileMetadata
    | undefined;
  /** Byte chunk of the file to upload. */
  chunk?: Buffer | undefined;
}

export interface UploadFileResponse {
  $type: "yandex.cloud.datasphere.v1.UploadFileResponse";
  /** Metadata of the uploaded file. */
  metadata?: FileMetadata | undefined;
}

export interface DownloadFileRequest {
  $type: "yandex.cloud.datasphere.v1.DownloadFileRequest";
  /** ID of the Project resource to download the file from. */
  projectId: string;
  /** Path of the file to download. */
  filePath: string;
}

export interface DownloadFileResponse {
  $type: "yandex.cloud.datasphere.v1.DownloadFileResponse";
  /** Metadata of the downloaded file. */
  metadata?:
    | FileMetadata
    | undefined;
  /** Byte chunk of the downloaded file. */
  chunk?: Buffer | undefined;
}

function createBaseFileMetadata(): FileMetadata {
  return { $type: "yandex.cloud.datasphere.v1.FileMetadata", projectId: "", path: "", sizeBytes: 0 };
}

export const FileMetadata = {
  $type: "yandex.cloud.datasphere.v1.FileMetadata" as const,

  encode(message: FileMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.sizeBytes !== 0) {
      writer.uint32(24).int64(message.sizeBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sizeBytes = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileMetadata {
    return {
      $type: FileMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      sizeBytes: isSet(object.sizeBytes) ? globalThis.Number(object.sizeBytes) : 0,
    };
  },

  toJSON(message: FileMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.sizeBytes !== 0) {
      obj.sizeBytes = Math.round(message.sizeBytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileMetadata>, I>>(base?: I): FileMetadata {
    return FileMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileMetadata>, I>>(object: I): FileMetadata {
    const message = createBaseFileMetadata();
    message.projectId = object.projectId ?? "";
    message.path = object.path ?? "";
    message.sizeBytes = object.sizeBytes ?? 0;
    return message;
  },
};

messageTypeRegistry.set(FileMetadata.$type, FileMetadata);

function createBaseUploadFileRequest(): UploadFileRequest {
  return { $type: "yandex.cloud.datasphere.v1.UploadFileRequest", metadata: undefined, chunk: undefined };
}

export const UploadFileRequest = {
  $type: "yandex.cloud.datasphere.v1.UploadFileRequest" as const,

  encode(message: UploadFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      FileMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.chunk !== undefined) {
      writer.uint32(18).bytes(message.chunk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadFileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = FileMetadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chunk = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadFileRequest {
    return {
      $type: UploadFileRequest.$type,
      metadata: isSet(object.metadata) ? FileMetadata.fromJSON(object.metadata) : undefined,
      chunk: isSet(object.chunk) ? Buffer.from(bytesFromBase64(object.chunk)) : undefined,
    };
  },

  toJSON(message: UploadFileRequest): unknown {
    const obj: any = {};
    if (message.metadata !== undefined) {
      obj.metadata = FileMetadata.toJSON(message.metadata);
    }
    if (message.chunk !== undefined) {
      obj.chunk = base64FromBytes(message.chunk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UploadFileRequest>, I>>(base?: I): UploadFileRequest {
    return UploadFileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UploadFileRequest>, I>>(object: I): UploadFileRequest {
    const message = createBaseUploadFileRequest();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? FileMetadata.fromPartial(object.metadata)
      : undefined;
    message.chunk = object.chunk ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UploadFileRequest.$type, UploadFileRequest);

function createBaseUploadFileResponse(): UploadFileResponse {
  return { $type: "yandex.cloud.datasphere.v1.UploadFileResponse", metadata: undefined };
}

export const UploadFileResponse = {
  $type: "yandex.cloud.datasphere.v1.UploadFileResponse" as const,

  encode(message: UploadFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      FileMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = FileMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadFileResponse {
    return {
      $type: UploadFileResponse.$type,
      metadata: isSet(object.metadata) ? FileMetadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: UploadFileResponse): unknown {
    const obj: any = {};
    if (message.metadata !== undefined) {
      obj.metadata = FileMetadata.toJSON(message.metadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UploadFileResponse>, I>>(base?: I): UploadFileResponse {
    return UploadFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UploadFileResponse>, I>>(object: I): UploadFileResponse {
    const message = createBaseUploadFileResponse();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? FileMetadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UploadFileResponse.$type, UploadFileResponse);

function createBaseDownloadFileRequest(): DownloadFileRequest {
  return { $type: "yandex.cloud.datasphere.v1.DownloadFileRequest", projectId: "", filePath: "" };
}

export const DownloadFileRequest = {
  $type: "yandex.cloud.datasphere.v1.DownloadFileRequest" as const,

  encode(message: DownloadFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.filePath !== "") {
      writer.uint32(18).string(message.filePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadFileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filePath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadFileRequest {
    return {
      $type: DownloadFileRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      filePath: isSet(object.filePath) ? globalThis.String(object.filePath) : "",
    };
  },

  toJSON(message: DownloadFileRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadFileRequest>, I>>(base?: I): DownloadFileRequest {
    return DownloadFileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadFileRequest>, I>>(object: I): DownloadFileRequest {
    const message = createBaseDownloadFileRequest();
    message.projectId = object.projectId ?? "";
    message.filePath = object.filePath ?? "";
    return message;
  },
};

messageTypeRegistry.set(DownloadFileRequest.$type, DownloadFileRequest);

function createBaseDownloadFileResponse(): DownloadFileResponse {
  return { $type: "yandex.cloud.datasphere.v1.DownloadFileResponse", metadata: undefined, chunk: undefined };
}

export const DownloadFileResponse = {
  $type: "yandex.cloud.datasphere.v1.DownloadFileResponse" as const,

  encode(message: DownloadFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      FileMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.chunk !== undefined) {
      writer.uint32(18).bytes(message.chunk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = FileMetadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chunk = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadFileResponse {
    return {
      $type: DownloadFileResponse.$type,
      metadata: isSet(object.metadata) ? FileMetadata.fromJSON(object.metadata) : undefined,
      chunk: isSet(object.chunk) ? Buffer.from(bytesFromBase64(object.chunk)) : undefined,
    };
  },

  toJSON(message: DownloadFileResponse): unknown {
    const obj: any = {};
    if (message.metadata !== undefined) {
      obj.metadata = FileMetadata.toJSON(message.metadata);
    }
    if (message.chunk !== undefined) {
      obj.chunk = base64FromBytes(message.chunk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadFileResponse>, I>>(base?: I): DownloadFileResponse {
    return DownloadFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadFileResponse>, I>>(object: I): DownloadFileResponse {
    const message = createBaseDownloadFileResponse();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? FileMetadata.fromPartial(object.metadata)
      : undefined;
    message.chunk = object.chunk ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DownloadFileResponse.$type, DownloadFileResponse);

/** A set of methods for managing data of the Project resource. */
export type ProjectDataServiceService = typeof ProjectDataServiceService;
export const ProjectDataServiceService = {
  /** Uploads a file to the specified project. */
  uploadFile: {
    path: "/yandex.cloud.datasphere.v1.ProjectDataService/UploadFile",
    requestStream: true,
    responseStream: false,
    requestSerialize: (value: UploadFileRequest) => Buffer.from(UploadFileRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UploadFileRequest.decode(value),
    responseSerialize: (value: UploadFileResponse) => Buffer.from(UploadFileResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UploadFileResponse.decode(value),
  },
  /** Downloads the specified file from the specified project. */
  downloadFile: {
    path: "/yandex.cloud.datasphere.v1.ProjectDataService/DownloadFile",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: DownloadFileRequest) => Buffer.from(DownloadFileRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DownloadFileRequest.decode(value),
    responseSerialize: (value: DownloadFileResponse) => Buffer.from(DownloadFileResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DownloadFileResponse.decode(value),
  },
} as const;

export interface ProjectDataServiceServer extends UntypedServiceImplementation {
  /** Uploads a file to the specified project. */
  uploadFile: handleClientStreamingCall<UploadFileRequest, UploadFileResponse>;
  /** Downloads the specified file from the specified project. */
  downloadFile: handleServerStreamingCall<DownloadFileRequest, DownloadFileResponse>;
}

export interface ProjectDataServiceClient extends Client {
  /** Uploads a file to the specified project. */
  uploadFile(
    callback: (error: ServiceError | null, response: UploadFileResponse) => void,
  ): ClientWritableStream<UploadFileRequest>;
  uploadFile(
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UploadFileResponse) => void,
  ): ClientWritableStream<UploadFileRequest>;
  uploadFile(
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UploadFileResponse) => void,
  ): ClientWritableStream<UploadFileRequest>;
  uploadFile(
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UploadFileResponse) => void,
  ): ClientWritableStream<UploadFileRequest>;
  /** Downloads the specified file from the specified project. */
  downloadFile(
    request: DownloadFileRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<DownloadFileResponse>;
  downloadFile(
    request: DownloadFileRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<DownloadFileResponse>;
}

export const ProjectDataServiceClient = makeGenericClientConstructor(
  ProjectDataServiceService,
  "yandex.cloud.datasphere.v1.ProjectDataService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectDataServiceClient;
  service: typeof ProjectDataServiceService;
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
