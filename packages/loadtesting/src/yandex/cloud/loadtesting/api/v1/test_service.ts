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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Details } from "./test/details";
import { SingleAgentConfiguration } from "./test/single_agent_configuration";
import { Test } from "./test/test";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1";

export interface CreateTestRequest {
  $type: "yandex.cloud.loadtesting.api.v1.CreateTestRequest";
  /** ID of the folder to create a test in. */
  folderId: string;
  /**
   * Test configuration associated with agents on which they will be executed.
   * In case of multiple configurations, a multitest will be created.
   */
  configurations: SingleAgentConfiguration[];
  /** Test details. Name, tags etc. */
  testDetails?: Details | undefined;
}

export interface CreateTestMetadata {
  $type: "yandex.cloud.loadtesting.api.v1.CreateTestMetadata";
  /** ID of the test that is being created. */
  testId: string;
}

export interface GetTestRequest {
  $type: "yandex.cloud.loadtesting.api.v1.GetTestRequest";
  /** ID of the test to return. */
  testId: string;
}

export interface StopTestRequest {
  $type: "yandex.cloud.loadtesting.api.v1.StopTestRequest";
  /** ID of the test to stop. */
  testId: string;
}

export interface StopTestMetadata {
  $type: "yandex.cloud.loadtesting.api.v1.StopTestMetadata";
  /** ID of the test that is being stopped. */
  testId: string;
}

export interface DeleteTestRequest {
  $type: "yandex.cloud.loadtesting.api.v1.DeleteTestRequest";
  /** ID of the test to delete. */
  testId: string;
}

export interface DeleteTestMetadata {
  $type: "yandex.cloud.loadtesting.api.v1.DeleteTestMetadata";
  /** ID of the test that is being deleted. */
  testId: string;
}

export interface ListTestsRequest {
  $type: "yandex.cloud.loadtesting.api.v1.ListTestsRequest";
  /** ID of the folder to list tests in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListTestsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListTestsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters tests listed in the response.
   *
   * The filter expression may contain multiple field expressions joined by `AND`.
   * The field expression must specify:
   * 1. The field name.
   * 2. An operator:
   *    - `=`, `!=`, `<`, `<=`, `>`, `>=`, `CONTAINS`, `:` for single values.
   *    - `IN` or `NOT IN` for lists of values.
   * 3. The value. String values must be encosed in `"`, boolean values are {`true`, `false`}, timestamp values in ISO-8601.
   *
   * Currently supported fields:
   * - `id` [yandex.cloud.loadtesting.api.v1.test.Test.id]
   *   - operators: `=`, `!=`, `IN`, `NOT IN`
   * - `details.name` [yandex.cloud.loadtesting.api.v1.test.Details.name]
   *   - operators: `=`, `!=`, `IN`, `NOT IN`, `CONTAINS`
   * - `details.tags.<TAG_NAME>` [yandex.cloud.loadtesting.api.v1.test.Details.tags]
   *   - operators: `:`
   * - `summary.status` [yandex.cloud.loadtesting.api.v1.test.Summary.status]
   *   - operators: `=`, `!=`, `IN`, `NOT IN`
   * - `summary.is_finished` [yandex.cloud.loadtesting.api.v1.test.Summary.is_finished]
   *   - operators: `=`
   * - `summary.created_at` [yandex.cloud.loadtesting.api.v1.test.Summary.created_at]
   *   - operators: `<`, `<=`, `>`, `>=`
   * - `summary.created_by` [yandex.cloud.loadtesting.api.v1.test.Summary.created_by]
   *   - operators: `=`, `!=`, `IN`, `NOT IN`
   *
   * Examples:
   * - `summary.status IN ("DONE", "ERROR") AND details.tags.author:"yandex"`
   * - `summary.is_finished = true AND details.name CONTAINS "nightly-test"`
   */
  filter: string;
}

export interface ListTestsResponse {
  $type: "yandex.cloud.loadtesting.api.v1.ListTestsResponse";
  /** List of tests in the specified folder. */
  tests: Test[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListTestsRequest.page_size], use `next_page_token` as the value
   * for the [ListTestsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseCreateTestRequest(): CreateTestRequest {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.CreateTestRequest",
    folderId: "",
    configurations: [],
    testDetails: undefined,
  };
}

export const CreateTestRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.CreateTestRequest" as const,

  encode(message: CreateTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    for (const v of message.configurations) {
      SingleAgentConfiguration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.testDetails !== undefined) {
      Details.encode(message.testDetails, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTestRequest();
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

          message.configurations.push(SingleAgentConfiguration.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.testDetails = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTestRequest {
    return {
      $type: CreateTestRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      configurations: globalThis.Array.isArray(object?.configurations)
        ? object.configurations.map((e: any) => SingleAgentConfiguration.fromJSON(e))
        : [],
      testDetails: isSet(object.testDetails) ? Details.fromJSON(object.testDetails) : undefined,
    };
  },

  toJSON(message: CreateTestRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.configurations?.length) {
      obj.configurations = message.configurations.map((e) => SingleAgentConfiguration.toJSON(e));
    }
    if (message.testDetails !== undefined) {
      obj.testDetails = Details.toJSON(message.testDetails);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTestRequest>, I>>(base?: I): CreateTestRequest {
    return CreateTestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTestRequest>, I>>(object: I): CreateTestRequest {
    const message = createBaseCreateTestRequest();
    message.folderId = object.folderId ?? "";
    message.configurations = object.configurations?.map((e) => SingleAgentConfiguration.fromPartial(e)) || [];
    message.testDetails = (object.testDetails !== undefined && object.testDetails !== null)
      ? Details.fromPartial(object.testDetails)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateTestRequest.$type, CreateTestRequest);

function createBaseCreateTestMetadata(): CreateTestMetadata {
  return { $type: "yandex.cloud.loadtesting.api.v1.CreateTestMetadata", testId: "" };
}

export const CreateTestMetadata = {
  $type: "yandex.cloud.loadtesting.api.v1.CreateTestMetadata" as const,

  encode(message: CreateTestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTestMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTestMetadata {
    return { $type: CreateTestMetadata.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: CreateTestMetadata): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTestMetadata>, I>>(base?: I): CreateTestMetadata {
    return CreateTestMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTestMetadata>, I>>(object: I): CreateTestMetadata {
    const message = createBaseCreateTestMetadata();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTestMetadata.$type, CreateTestMetadata);

function createBaseGetTestRequest(): GetTestRequest {
  return { $type: "yandex.cloud.loadtesting.api.v1.GetTestRequest", testId: "" };
}

export const GetTestRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.GetTestRequest" as const,

  encode(message: GetTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTestRequest {
    return { $type: GetTestRequest.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: GetTestRequest): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTestRequest>, I>>(base?: I): GetTestRequest {
    return GetTestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTestRequest>, I>>(object: I): GetTestRequest {
    const message = createBaseGetTestRequest();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTestRequest.$type, GetTestRequest);

function createBaseStopTestRequest(): StopTestRequest {
  return { $type: "yandex.cloud.loadtesting.api.v1.StopTestRequest", testId: "" };
}

export const StopTestRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.StopTestRequest" as const,

  encode(message: StopTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopTestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopTestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopTestRequest {
    return { $type: StopTestRequest.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: StopTestRequest): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopTestRequest>, I>>(base?: I): StopTestRequest {
    return StopTestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopTestRequest>, I>>(object: I): StopTestRequest {
    const message = createBaseStopTestRequest();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopTestRequest.$type, StopTestRequest);

function createBaseStopTestMetadata(): StopTestMetadata {
  return { $type: "yandex.cloud.loadtesting.api.v1.StopTestMetadata", testId: "" };
}

export const StopTestMetadata = {
  $type: "yandex.cloud.loadtesting.api.v1.StopTestMetadata" as const,

  encode(message: StopTestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopTestMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopTestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopTestMetadata {
    return { $type: StopTestMetadata.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: StopTestMetadata): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopTestMetadata>, I>>(base?: I): StopTestMetadata {
    return StopTestMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopTestMetadata>, I>>(object: I): StopTestMetadata {
    const message = createBaseStopTestMetadata();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopTestMetadata.$type, StopTestMetadata);

function createBaseDeleteTestRequest(): DeleteTestRequest {
  return { $type: "yandex.cloud.loadtesting.api.v1.DeleteTestRequest", testId: "" };
}

export const DeleteTestRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.DeleteTestRequest" as const,

  encode(message: DeleteTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTestRequest {
    return { $type: DeleteTestRequest.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: DeleteTestRequest): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTestRequest>, I>>(base?: I): DeleteTestRequest {
    return DeleteTestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTestRequest>, I>>(object: I): DeleteTestRequest {
    const message = createBaseDeleteTestRequest();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTestRequest.$type, DeleteTestRequest);

function createBaseDeleteTestMetadata(): DeleteTestMetadata {
  return { $type: "yandex.cloud.loadtesting.api.v1.DeleteTestMetadata", testId: "" };
}

export const DeleteTestMetadata = {
  $type: "yandex.cloud.loadtesting.api.v1.DeleteTestMetadata" as const,

  encode(message: DeleteTestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTestMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTestMetadata {
    return { $type: DeleteTestMetadata.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: DeleteTestMetadata): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTestMetadata>, I>>(base?: I): DeleteTestMetadata {
    return DeleteTestMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTestMetadata>, I>>(object: I): DeleteTestMetadata {
    const message = createBaseDeleteTestMetadata();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTestMetadata.$type, DeleteTestMetadata);

function createBaseListTestsRequest(): ListTestsRequest {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.ListTestsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListTestsRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.ListTestsRequest" as const,

  encode(message: ListTestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTestsRequest();
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

  fromJSON(object: any): ListTestsRequest {
    return {
      $type: ListTestsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListTestsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListTestsRequest>, I>>(base?: I): ListTestsRequest {
    return ListTestsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTestsRequest>, I>>(object: I): ListTestsRequest {
    const message = createBaseListTestsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTestsRequest.$type, ListTestsRequest);

function createBaseListTestsResponse(): ListTestsResponse {
  return { $type: "yandex.cloud.loadtesting.api.v1.ListTestsResponse", tests: [], nextPageToken: "" };
}

export const ListTestsResponse = {
  $type: "yandex.cloud.loadtesting.api.v1.ListTestsResponse" as const,

  encode(message: ListTestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tests) {
      Test.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tests.push(Test.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTestsResponse {
    return {
      $type: ListTestsResponse.$type,
      tests: globalThis.Array.isArray(object?.tests) ? object.tests.map((e: any) => Test.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTestsResponse): unknown {
    const obj: any = {};
    if (message.tests?.length) {
      obj.tests = message.tests.map((e) => Test.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTestsResponse>, I>>(base?: I): ListTestsResponse {
    return ListTestsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTestsResponse>, I>>(object: I): ListTestsResponse {
    const message = createBaseListTestsResponse();
    message.tests = object.tests?.map((e) => Test.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTestsResponse.$type, ListTestsResponse);

/** A set of methods for managing tests. */
export type TestServiceService = typeof TestServiceService;
export const TestServiceService = {
  /** Creates (runs) a test in the specified folder. */
  create: {
    path: "/yandex.cloud.loadtesting.api.v1.TestService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTestRequest) => Buffer.from(CreateTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTestRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified test.
   *
   * To get the list of all available tests, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.loadtesting.api.v1.TestService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTestRequest) => Buffer.from(GetTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTestRequest.decode(value),
    responseSerialize: (value: Test) => Buffer.from(Test.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Test.decode(value),
  },
  /** Stops the specified test. */
  stop: {
    path: "/yandex.cloud.loadtesting.api.v1.TestService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopTestRequest) => Buffer.from(StopTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopTestRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes specified tests. */
  delete: {
    path: "/yandex.cloud.loadtesting.api.v1.TestService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteTestRequest) => Buffer.from(DeleteTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteTestRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of test in the specified folder. */
  list: {
    path: "/yandex.cloud.loadtesting.api.v1.TestService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTestsRequest) => Buffer.from(ListTestsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTestsRequest.decode(value),
    responseSerialize: (value: ListTestsResponse) => Buffer.from(ListTestsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTestsResponse.decode(value),
  },
} as const;

export interface TestServiceServer extends UntypedServiceImplementation {
  /** Creates (runs) a test in the specified folder. */
  create: handleUnaryCall<CreateTestRequest, Operation>;
  /**
   * Returns the specified test.
   *
   * To get the list of all available tests, make a [List] request.
   */
  get: handleUnaryCall<GetTestRequest, Test>;
  /** Stops the specified test. */
  stop: handleUnaryCall<StopTestRequest, Operation>;
  /** Deletes specified tests. */
  delete: handleUnaryCall<DeleteTestRequest, Operation>;
  /** Retrieves the list of test in the specified folder. */
  list: handleUnaryCall<ListTestsRequest, ListTestsResponse>;
}

export interface TestServiceClient extends Client {
  /** Creates (runs) a test in the specified folder. */
  create(
    request: CreateTestRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified test.
   *
   * To get the list of all available tests, make a [List] request.
   */
  get(request: GetTestRequest, callback: (error: ServiceError | null, response: Test) => void): ClientUnaryCall;
  get(
    request: GetTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Test) => void,
  ): ClientUnaryCall;
  get(
    request: GetTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Test) => void,
  ): ClientUnaryCall;
  /** Stops the specified test. */
  stop(request: StopTestRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
  stop(
    request: StopTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes specified tests. */
  delete(
    request: DeleteTestRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of test in the specified folder. */
  list(
    request: ListTestsRequest,
    callback: (error: ServiceError | null, response: ListTestsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTestsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTestsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTestsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTestsResponse) => void,
  ): ClientUnaryCall;
}

export const TestServiceClient = makeGenericClientConstructor(
  TestServiceService,
  "yandex.cloud.loadtesting.api.v1.TestService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TestServiceClient;
  service: typeof TestServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
