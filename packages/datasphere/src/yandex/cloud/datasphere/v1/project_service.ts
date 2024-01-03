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
import { Empty } from "@yandex-cloud/core/dist/generated/google/protobuf/empty";
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Struct } from "@yandex-cloud/core/dist/generated/google/protobuf/struct";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Project, Project_Limits, Project_Settings } from "./project";

export const protobufPackage = "yandex.cloud.datasphere.v1";

export interface CreateProjectRequest {
  $type: "yandex.cloud.datasphere.v1.CreateProjectRequest";
  /**
   * ID of the folder to create a project in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the project. */
  name: string;
  /** Description of the project. */
  description: string;
  /** Settings of the project. */
  settings?:
    | Project_Settings
    | undefined;
  /** Limits of the project. */
  limits?: Project_Limits | undefined;
}

export interface CreateProjectMetadata {
  $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata";
  /** ID of the project that is being created. */
  projectId: string;
}

export interface UpdateProjectRequest {
  $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest";
  /**
   * ID of the Project resource to update.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
  /** Field mask that specifies which fields of the Project resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the project. */
  name: string;
  /** Description of the project. */
  description: string;
  /** Settings of the project. */
  settings?:
    | Project_Settings
    | undefined;
  /** Limits of the project. */
  limits?: Project_Limits | undefined;
}

export interface UpdateProjectMetadata {
  $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata";
  /** ID of the project that is being updated. */
  projectId: string;
}

export interface DeleteProjectRequest {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest";
  /**
   * ID of the Project resource to delete.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface DeleteProjectMetadata {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata";
  /** ID of the project that is being deleted. */
  projectId: string;
}

export interface OpenProjectRequest {
  $type: "yandex.cloud.datasphere.v1.OpenProjectRequest";
  /**
   * ID of the Project resource to open.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface OpenProjectMetadata {
  $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata";
  /** ID of the project that is being opened. */
  projectId: string;
}

export interface OpenProjectResponse {
  $type: "yandex.cloud.datasphere.v1.OpenProjectResponse";
  /**
   * URL of the project that is being opened.
   * Make GET request to [project_url] with sessionToken query parameter equals to [session_token]
   * or POST request to [project_url] with sessionToken body parameter equals to [session_token]
   * to fetch Datasphere web interface.
   */
  projectUrl: string;
  /** Session token of the project that is being opened. */
  sessionToken: string;
}

export interface GetProjectRequest {
  $type: "yandex.cloud.datasphere.v1.GetProjectRequest";
  /**
   * ID of the Project resource to return.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface ListProjectsRequest {
  $type: "yandex.cloud.datasphere.v1.ListProjectsRequest";
  /**
   * ID of the folder to list projects in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListProjectsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListProjectsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListProjectsResponse {
  $type: "yandex.cloud.datasphere.v1.ListProjectsResponse";
  /** List of Project resources. */
  projects: Project[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListProjectsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListProjectsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface GetUnitBalanceRequest {
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest";
  /** ID of the project to return the unit balance for. */
  projectId: string;
}

export interface GetUnitBalanceResponse {
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse";
  /** The number of units available to the project. */
  unitBalance?: number | undefined;
}

export interface SetUnitBalanceRequest {
  $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest";
  /** ID of the project to set the unit balance for. */
  projectId: string;
  /** The number of units available to the project. */
  unitBalance?: number | undefined;
}

export interface ProjectExecutionRequest {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest";
  /** ID of the project to execute notebook/cell in. */
  projectId: string;
  /** ID of the notebook to execute. */
  notebookId?:
    | string
    | undefined;
  /** ID of the cell to execute. */
  cellId?:
    | string
    | undefined;
  /** Values of input variables. */
  inputVariables?:
    | { [key: string]: any }
    | undefined;
  /** Names of output variables. */
  outputVariableNames: string[];
}

export interface ProjectExecutionMetadata {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata";
  /** ID of the project in which notebook is being executed. */
  projectId: string;
  /** ID of the notebook that is being executed */
  notebookId?:
    | string
    | undefined;
  /** ID of the cell that is being executed */
  cellId?: string | undefined;
}

export interface ProjectExecutionResponse {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse";
  /** ID of the checkpoint resulting from the execution. */
  checkpointId: string;
  /** Values of output variables resulting from the execution. */
  outputVariables?: { [key: string]: any } | undefined;
}

export interface CellOutputsRequest {
  $type: "yandex.cloud.datasphere.v1.CellOutputsRequest";
  /** ID of the project to return cell outputs for. */
  projectId: string;
  /** ID of the cell to return outputs for. */
  cellId: string;
  /** ID of the checkpoint to return cell outputs for. */
  checkpointId: string;
  /** Timestamp from which to return outputs. */
  startAt?: Date | undefined;
}

export interface CellOutputsResponse {
  $type: "yandex.cloud.datasphere.v1.CellOutputsResponse";
  /** List of outputs. */
  outputs: string[];
}

export interface GetStateVariablesRequest {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest";
  /** ID of the project, for which to return state variables. */
  projectId: string;
  /** ID of the notebook, for which to return state variables. */
  notebookId: string;
  /** Names of variables to return. */
  variableNames: string[];
  /** ID of the checkpoint, for which to return state variables. */
  checkpointId: string;
}

export interface GetStateVariablesResponse {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse";
  /** Values of the specified variables. */
  variables?: { [key: string]: any } | undefined;
}

export interface GetNotebookMetadataRequest {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest";
  /** ID of the project, for which to return notebook metadata. */
  projectId: string;
  /** Path of the notebook to get metadata. */
  notebookPath: string;
}

export interface GetNotebookMetadataResponse {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse";
  /** ID of the specified notebook. */
  notebookId: string;
  /** The time the notebook was created. */
  createdAt?:
    | Date
    | undefined;
  /** The time the notebook was modified last time. */
  modifiedAt?:
    | Date
    | undefined;
  /** Content length of the specified notebook. */
  contentLength: number;
  /** Cell ids of the specified notebook. */
  cellIds: string[];
}

function createBaseCreateProjectRequest(): CreateProjectRequest {
  return {
    $type: "yandex.cloud.datasphere.v1.CreateProjectRequest",
    folderId: "",
    name: "",
    description: "",
    settings: undefined,
    limits: undefined,
  };
}

export const CreateProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.CreateProjectRequest" as const,

  encode(message: CreateProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.settings !== undefined) {
      Project_Settings.encode(message.settings, writer.uint32(34).fork()).ldelim();
    }
    if (message.limits !== undefined) {
      Project_Limits.encode(message.limits, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectRequest();
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

          message.settings = Project_Settings.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.limits = Project_Limits.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProjectRequest {
    return {
      $type: CreateProjectRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      settings: isSet(object.settings) ? Project_Settings.fromJSON(object.settings) : undefined,
      limits: isSet(object.limits) ? Project_Limits.fromJSON(object.limits) : undefined,
    };
  },

  toJSON(message: CreateProjectRequest): unknown {
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
    if (message.settings !== undefined) {
      obj.settings = Project_Settings.toJSON(message.settings);
    }
    if (message.limits !== undefined) {
      obj.limits = Project_Limits.toJSON(message.limits);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectRequest>, I>>(base?: I): CreateProjectRequest {
    return CreateProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProjectRequest>, I>>(object: I): CreateProjectRequest {
    const message = createBaseCreateProjectRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? Project_Settings.fromPartial(object.settings)
      : undefined;
    message.limits = (object.limits !== undefined && object.limits !== null)
      ? Project_Limits.fromPartial(object.limits)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateProjectRequest.$type, CreateProjectRequest);

function createBaseCreateProjectMetadata(): CreateProjectMetadata {
  return { $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata", projectId: "" };
}

export const CreateProjectMetadata = {
  $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata" as const,

  encode(message: CreateProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProjectMetadata {
    return {
      $type: CreateProjectMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: CreateProjectMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectMetadata>, I>>(base?: I): CreateProjectMetadata {
    return CreateProjectMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProjectMetadata>, I>>(object: I): CreateProjectMetadata {
    const message = createBaseCreateProjectMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateProjectMetadata.$type, CreateProjectMetadata);

function createBaseUpdateProjectRequest(): UpdateProjectRequest {
  return {
    $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest",
    projectId: "",
    updateMask: undefined,
    name: "",
    description: "",
    settings: undefined,
    limits: undefined,
  };
}

export const UpdateProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest" as const,

  encode(message: UpdateProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
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
    if (message.settings !== undefined) {
      Project_Settings.encode(message.settings, writer.uint32(42).fork()).ldelim();
    }
    if (message.limits !== undefined) {
      Project_Limits.encode(message.limits, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectRequest();
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

          message.settings = Project_Settings.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.limits = Project_Limits.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProjectRequest {
    return {
      $type: UpdateProjectRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      settings: isSet(object.settings) ? Project_Settings.fromJSON(object.settings) : undefined,
      limits: isSet(object.limits) ? Project_Limits.fromJSON(object.limits) : undefined,
    };
  },

  toJSON(message: UpdateProjectRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
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
    if (message.settings !== undefined) {
      obj.settings = Project_Settings.toJSON(message.settings);
    }
    if (message.limits !== undefined) {
      obj.limits = Project_Limits.toJSON(message.limits);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProjectRequest>, I>>(base?: I): UpdateProjectRequest {
    return UpdateProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProjectRequest>, I>>(object: I): UpdateProjectRequest {
    const message = createBaseUpdateProjectRequest();
    message.projectId = object.projectId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? Project_Settings.fromPartial(object.settings)
      : undefined;
    message.limits = (object.limits !== undefined && object.limits !== null)
      ? Project_Limits.fromPartial(object.limits)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateProjectRequest.$type, UpdateProjectRequest);

function createBaseUpdateProjectMetadata(): UpdateProjectMetadata {
  return { $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata", projectId: "" };
}

export const UpdateProjectMetadata = {
  $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata" as const,

  encode(message: UpdateProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProjectMetadata {
    return {
      $type: UpdateProjectMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: UpdateProjectMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProjectMetadata>, I>>(base?: I): UpdateProjectMetadata {
    return UpdateProjectMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProjectMetadata>, I>>(object: I): UpdateProjectMetadata {
    const message = createBaseUpdateProjectMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateProjectMetadata.$type, UpdateProjectMetadata);

function createBaseDeleteProjectRequest(): DeleteProjectRequest {
  return { $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest", projectId: "" };
}

export const DeleteProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest" as const,

  encode(message: DeleteProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectRequest {
    return {
      $type: DeleteProjectRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: DeleteProjectRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProjectRequest>, I>>(base?: I): DeleteProjectRequest {
    return DeleteProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteProjectRequest>, I>>(object: I): DeleteProjectRequest {
    const message = createBaseDeleteProjectRequest();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteProjectRequest.$type, DeleteProjectRequest);

function createBaseDeleteProjectMetadata(): DeleteProjectMetadata {
  return { $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata", projectId: "" };
}

export const DeleteProjectMetadata = {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata" as const,

  encode(message: DeleteProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectMetadata {
    return {
      $type: DeleteProjectMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: DeleteProjectMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProjectMetadata>, I>>(base?: I): DeleteProjectMetadata {
    return DeleteProjectMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteProjectMetadata>, I>>(object: I): DeleteProjectMetadata {
    const message = createBaseDeleteProjectMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteProjectMetadata.$type, DeleteProjectMetadata);

function createBaseOpenProjectRequest(): OpenProjectRequest {
  return { $type: "yandex.cloud.datasphere.v1.OpenProjectRequest", projectId: "" };
}

export const OpenProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.OpenProjectRequest" as const,

  encode(message: OpenProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenProjectRequest {
    return {
      $type: OpenProjectRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: OpenProjectRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenProjectRequest>, I>>(base?: I): OpenProjectRequest {
    return OpenProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpenProjectRequest>, I>>(object: I): OpenProjectRequest {
    const message = createBaseOpenProjectRequest();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(OpenProjectRequest.$type, OpenProjectRequest);

function createBaseOpenProjectMetadata(): OpenProjectMetadata {
  return { $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata", projectId: "" };
}

export const OpenProjectMetadata = {
  $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata" as const,

  encode(message: OpenProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenProjectMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenProjectMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenProjectMetadata {
    return {
      $type: OpenProjectMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: OpenProjectMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenProjectMetadata>, I>>(base?: I): OpenProjectMetadata {
    return OpenProjectMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpenProjectMetadata>, I>>(object: I): OpenProjectMetadata {
    const message = createBaseOpenProjectMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(OpenProjectMetadata.$type, OpenProjectMetadata);

function createBaseOpenProjectResponse(): OpenProjectResponse {
  return { $type: "yandex.cloud.datasphere.v1.OpenProjectResponse", projectUrl: "", sessionToken: "" };
}

export const OpenProjectResponse = {
  $type: "yandex.cloud.datasphere.v1.OpenProjectResponse" as const,

  encode(message: OpenProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectUrl !== "") {
      writer.uint32(10).string(message.projectUrl);
    }
    if (message.sessionToken !== "") {
      writer.uint32(18).string(message.sessionToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenProjectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectUrl = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sessionToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenProjectResponse {
    return {
      $type: OpenProjectResponse.$type,
      projectUrl: isSet(object.projectUrl) ? globalThis.String(object.projectUrl) : "",
      sessionToken: isSet(object.sessionToken) ? globalThis.String(object.sessionToken) : "",
    };
  },

  toJSON(message: OpenProjectResponse): unknown {
    const obj: any = {};
    if (message.projectUrl !== "") {
      obj.projectUrl = message.projectUrl;
    }
    if (message.sessionToken !== "") {
      obj.sessionToken = message.sessionToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenProjectResponse>, I>>(base?: I): OpenProjectResponse {
    return OpenProjectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpenProjectResponse>, I>>(object: I): OpenProjectResponse {
    const message = createBaseOpenProjectResponse();
    message.projectUrl = object.projectUrl ?? "";
    message.sessionToken = object.sessionToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(OpenProjectResponse.$type, OpenProjectResponse);

function createBaseGetProjectRequest(): GetProjectRequest {
  return { $type: "yandex.cloud.datasphere.v1.GetProjectRequest", projectId: "" };
}

export const GetProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.GetProjectRequest" as const,

  encode(message: GetProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProjectRequest {
    return {
      $type: GetProjectRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: GetProjectRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectRequest>, I>>(base?: I): GetProjectRequest {
    return GetProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProjectRequest>, I>>(object: I): GetProjectRequest {
    const message = createBaseGetProjectRequest();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetProjectRequest.$type, GetProjectRequest);

function createBaseListProjectsRequest(): ListProjectsRequest {
  return { $type: "yandex.cloud.datasphere.v1.ListProjectsRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListProjectsRequest = {
  $type: "yandex.cloud.datasphere.v1.ListProjectsRequest" as const,

  encode(message: ListProjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProjectsRequest();
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

  fromJSON(object: any): ListProjectsRequest {
    return {
      $type: ListProjectsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListProjectsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListProjectsRequest>, I>>(base?: I): ListProjectsRequest {
    return ListProjectsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProjectsRequest>, I>>(object: I): ListProjectsRequest {
    const message = createBaseListProjectsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProjectsRequest.$type, ListProjectsRequest);

function createBaseListProjectsResponse(): ListProjectsResponse {
  return { $type: "yandex.cloud.datasphere.v1.ListProjectsResponse", projects: [], nextPageToken: "" };
}

export const ListProjectsResponse = {
  $type: "yandex.cloud.datasphere.v1.ListProjectsResponse" as const,

  encode(message: ListProjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projects) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProjectsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projects.push(Project.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListProjectsResponse {
    return {
      $type: ListProjectsResponse.$type,
      projects: globalThis.Array.isArray(object?.projects) ? object.projects.map((e: any) => Project.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListProjectsResponse): unknown {
    const obj: any = {};
    if (message.projects?.length) {
      obj.projects = message.projects.map((e) => Project.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProjectsResponse>, I>>(base?: I): ListProjectsResponse {
    return ListProjectsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProjectsResponse>, I>>(object: I): ListProjectsResponse {
    const message = createBaseListProjectsResponse();
    message.projects = object.projects?.map((e) => Project.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProjectsResponse.$type, ListProjectsResponse);

function createBaseGetUnitBalanceRequest(): GetUnitBalanceRequest {
  return { $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest", projectId: "" };
}

export const GetUnitBalanceRequest = {
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest" as const,

  encode(message: GetUnitBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUnitBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUnitBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUnitBalanceRequest {
    return {
      $type: GetUnitBalanceRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: GetUnitBalanceRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUnitBalanceRequest>, I>>(base?: I): GetUnitBalanceRequest {
    return GetUnitBalanceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUnitBalanceRequest>, I>>(object: I): GetUnitBalanceRequest {
    const message = createBaseGetUnitBalanceRequest();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUnitBalanceRequest.$type, GetUnitBalanceRequest);

function createBaseGetUnitBalanceResponse(): GetUnitBalanceResponse {
  return { $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse", unitBalance: undefined };
}

export const GetUnitBalanceResponse = {
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse" as const,

  encode(message: GetUnitBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unitBalance !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.unitBalance! }, writer.uint32(10).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUnitBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUnitBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unitBalance = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUnitBalanceResponse {
    return {
      $type: GetUnitBalanceResponse.$type,
      unitBalance: isSet(object.unitBalance) ? Number(object.unitBalance) : undefined,
    };
  },

  toJSON(message: GetUnitBalanceResponse): unknown {
    const obj: any = {};
    if (message.unitBalance !== undefined) {
      obj.unitBalance = message.unitBalance;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUnitBalanceResponse>, I>>(base?: I): GetUnitBalanceResponse {
    return GetUnitBalanceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUnitBalanceResponse>, I>>(object: I): GetUnitBalanceResponse {
    const message = createBaseGetUnitBalanceResponse();
    message.unitBalance = object.unitBalance ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GetUnitBalanceResponse.$type, GetUnitBalanceResponse);

function createBaseSetUnitBalanceRequest(): SetUnitBalanceRequest {
  return { $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest", projectId: "", unitBalance: undefined };
}

export const SetUnitBalanceRequest = {
  $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest" as const,

  encode(message: SetUnitBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.unitBalance !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.unitBalance! }, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUnitBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUnitBalanceRequest();
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

          message.unitBalance = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetUnitBalanceRequest {
    return {
      $type: SetUnitBalanceRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      unitBalance: isSet(object.unitBalance) ? Number(object.unitBalance) : undefined,
    };
  },

  toJSON(message: SetUnitBalanceRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.unitBalance !== undefined) {
      obj.unitBalance = message.unitBalance;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUnitBalanceRequest>, I>>(base?: I): SetUnitBalanceRequest {
    return SetUnitBalanceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetUnitBalanceRequest>, I>>(object: I): SetUnitBalanceRequest {
    const message = createBaseSetUnitBalanceRequest();
    message.projectId = object.projectId ?? "";
    message.unitBalance = object.unitBalance ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SetUnitBalanceRequest.$type, SetUnitBalanceRequest);

function createBaseProjectExecutionRequest(): ProjectExecutionRequest {
  return {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest",
    projectId: "",
    notebookId: undefined,
    cellId: undefined,
    inputVariables: undefined,
    outputVariableNames: [],
  };
}

export const ProjectExecutionRequest = {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest" as const,

  encode(message: ProjectExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.notebookId !== undefined) {
      writer.uint32(18).string(message.notebookId);
    }
    if (message.cellId !== undefined) {
      writer.uint32(26).string(message.cellId);
    }
    if (message.inputVariables !== undefined) {
      Struct.encode(Struct.wrap(message.inputVariables), writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.outputVariableNames) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectExecutionRequest();
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

          message.notebookId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cellId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.inputVariables = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.outputVariableNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectExecutionRequest {
    return {
      $type: ProjectExecutionRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      notebookId: isSet(object.notebookId) ? globalThis.String(object.notebookId) : undefined,
      cellId: isSet(object.cellId) ? globalThis.String(object.cellId) : undefined,
      inputVariables: isObject(object.inputVariables) ? object.inputVariables : undefined,
      outputVariableNames: globalThis.Array.isArray(object?.outputVariableNames)
        ? object.outputVariableNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ProjectExecutionRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.notebookId !== undefined) {
      obj.notebookId = message.notebookId;
    }
    if (message.cellId !== undefined) {
      obj.cellId = message.cellId;
    }
    if (message.inputVariables !== undefined) {
      obj.inputVariables = message.inputVariables;
    }
    if (message.outputVariableNames?.length) {
      obj.outputVariableNames = message.outputVariableNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectExecutionRequest>, I>>(base?: I): ProjectExecutionRequest {
    return ProjectExecutionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectExecutionRequest>, I>>(object: I): ProjectExecutionRequest {
    const message = createBaseProjectExecutionRequest();
    message.projectId = object.projectId ?? "";
    message.notebookId = object.notebookId ?? undefined;
    message.cellId = object.cellId ?? undefined;
    message.inputVariables = object.inputVariables ?? undefined;
    message.outputVariableNames = object.outputVariableNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ProjectExecutionRequest.$type, ProjectExecutionRequest);

function createBaseProjectExecutionMetadata(): ProjectExecutionMetadata {
  return {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata",
    projectId: "",
    notebookId: undefined,
    cellId: undefined,
  };
}

export const ProjectExecutionMetadata = {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata" as const,

  encode(message: ProjectExecutionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.notebookId !== undefined) {
      writer.uint32(18).string(message.notebookId);
    }
    if (message.cellId !== undefined) {
      writer.uint32(26).string(message.cellId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectExecutionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectExecutionMetadata();
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

          message.notebookId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cellId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectExecutionMetadata {
    return {
      $type: ProjectExecutionMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      notebookId: isSet(object.notebookId) ? globalThis.String(object.notebookId) : undefined,
      cellId: isSet(object.cellId) ? globalThis.String(object.cellId) : undefined,
    };
  },

  toJSON(message: ProjectExecutionMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.notebookId !== undefined) {
      obj.notebookId = message.notebookId;
    }
    if (message.cellId !== undefined) {
      obj.cellId = message.cellId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectExecutionMetadata>, I>>(base?: I): ProjectExecutionMetadata {
    return ProjectExecutionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectExecutionMetadata>, I>>(object: I): ProjectExecutionMetadata {
    const message = createBaseProjectExecutionMetadata();
    message.projectId = object.projectId ?? "";
    message.notebookId = object.notebookId ?? undefined;
    message.cellId = object.cellId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ProjectExecutionMetadata.$type, ProjectExecutionMetadata);

function createBaseProjectExecutionResponse(): ProjectExecutionResponse {
  return { $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse", checkpointId: "", outputVariables: undefined };
}

export const ProjectExecutionResponse = {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse" as const,

  encode(message: ProjectExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkpointId !== "") {
      writer.uint32(10).string(message.checkpointId);
    }
    if (message.outputVariables !== undefined) {
      Struct.encode(Struct.wrap(message.outputVariables), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectExecutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.checkpointId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outputVariables = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectExecutionResponse {
    return {
      $type: ProjectExecutionResponse.$type,
      checkpointId: isSet(object.checkpointId) ? globalThis.String(object.checkpointId) : "",
      outputVariables: isObject(object.outputVariables) ? object.outputVariables : undefined,
    };
  },

  toJSON(message: ProjectExecutionResponse): unknown {
    const obj: any = {};
    if (message.checkpointId !== "") {
      obj.checkpointId = message.checkpointId;
    }
    if (message.outputVariables !== undefined) {
      obj.outputVariables = message.outputVariables;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectExecutionResponse>, I>>(base?: I): ProjectExecutionResponse {
    return ProjectExecutionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectExecutionResponse>, I>>(object: I): ProjectExecutionResponse {
    const message = createBaseProjectExecutionResponse();
    message.checkpointId = object.checkpointId ?? "";
    message.outputVariables = object.outputVariables ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ProjectExecutionResponse.$type, ProjectExecutionResponse);

function createBaseCellOutputsRequest(): CellOutputsRequest {
  return {
    $type: "yandex.cloud.datasphere.v1.CellOutputsRequest",
    projectId: "",
    cellId: "",
    checkpointId: "",
    startAt: undefined,
  };
}

export const CellOutputsRequest = {
  $type: "yandex.cloud.datasphere.v1.CellOutputsRequest" as const,

  encode(message: CellOutputsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.cellId !== "") {
      writer.uint32(18).string(message.cellId);
    }
    if (message.checkpointId !== "") {
      writer.uint32(26).string(message.checkpointId);
    }
    if (message.startAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellOutputsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellOutputsRequest();
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

          message.cellId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.checkpointId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellOutputsRequest {
    return {
      $type: CellOutputsRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      cellId: isSet(object.cellId) ? globalThis.String(object.cellId) : "",
      checkpointId: isSet(object.checkpointId) ? globalThis.String(object.checkpointId) : "",
      startAt: isSet(object.startAt) ? fromJsonTimestamp(object.startAt) : undefined,
    };
  },

  toJSON(message: CellOutputsRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.cellId !== "") {
      obj.cellId = message.cellId;
    }
    if (message.checkpointId !== "") {
      obj.checkpointId = message.checkpointId;
    }
    if (message.startAt !== undefined) {
      obj.startAt = message.startAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellOutputsRequest>, I>>(base?: I): CellOutputsRequest {
    return CellOutputsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellOutputsRequest>, I>>(object: I): CellOutputsRequest {
    const message = createBaseCellOutputsRequest();
    message.projectId = object.projectId ?? "";
    message.cellId = object.cellId ?? "";
    message.checkpointId = object.checkpointId ?? "";
    message.startAt = object.startAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CellOutputsRequest.$type, CellOutputsRequest);

function createBaseCellOutputsResponse(): CellOutputsResponse {
  return { $type: "yandex.cloud.datasphere.v1.CellOutputsResponse", outputs: [] };
}

export const CellOutputsResponse = {
  $type: "yandex.cloud.datasphere.v1.CellOutputsResponse" as const,

  encode(message: CellOutputsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outputs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellOutputsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellOutputsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outputs.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellOutputsResponse {
    return {
      $type: CellOutputsResponse.$type,
      outputs: globalThis.Array.isArray(object?.outputs) ? object.outputs.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: CellOutputsResponse): unknown {
    const obj: any = {};
    if (message.outputs?.length) {
      obj.outputs = message.outputs;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellOutputsResponse>, I>>(base?: I): CellOutputsResponse {
    return CellOutputsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellOutputsResponse>, I>>(object: I): CellOutputsResponse {
    const message = createBaseCellOutputsResponse();
    message.outputs = object.outputs?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CellOutputsResponse.$type, CellOutputsResponse);

function createBaseGetStateVariablesRequest(): GetStateVariablesRequest {
  return {
    $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest",
    projectId: "",
    notebookId: "",
    variableNames: [],
    checkpointId: "",
  };
}

export const GetStateVariablesRequest = {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest" as const,

  encode(message: GetStateVariablesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.notebookId !== "") {
      writer.uint32(18).string(message.notebookId);
    }
    for (const v of message.variableNames) {
      writer.uint32(26).string(v!);
    }
    if (message.checkpointId !== "") {
      writer.uint32(34).string(message.checkpointId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStateVariablesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStateVariablesRequest();
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

          message.notebookId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.variableNames.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.checkpointId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStateVariablesRequest {
    return {
      $type: GetStateVariablesRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      notebookId: isSet(object.notebookId) ? globalThis.String(object.notebookId) : "",
      variableNames: globalThis.Array.isArray(object?.variableNames)
        ? object.variableNames.map((e: any) => globalThis.String(e))
        : [],
      checkpointId: isSet(object.checkpointId) ? globalThis.String(object.checkpointId) : "",
    };
  },

  toJSON(message: GetStateVariablesRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.notebookId !== "") {
      obj.notebookId = message.notebookId;
    }
    if (message.variableNames?.length) {
      obj.variableNames = message.variableNames;
    }
    if (message.checkpointId !== "") {
      obj.checkpointId = message.checkpointId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStateVariablesRequest>, I>>(base?: I): GetStateVariablesRequest {
    return GetStateVariablesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStateVariablesRequest>, I>>(object: I): GetStateVariablesRequest {
    const message = createBaseGetStateVariablesRequest();
    message.projectId = object.projectId ?? "";
    message.notebookId = object.notebookId ?? "";
    message.variableNames = object.variableNames?.map((e) => e) || [];
    message.checkpointId = object.checkpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetStateVariablesRequest.$type, GetStateVariablesRequest);

function createBaseGetStateVariablesResponse(): GetStateVariablesResponse {
  return { $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse", variables: undefined };
}

export const GetStateVariablesResponse = {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse" as const,

  encode(message: GetStateVariablesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.variables !== undefined) {
      Struct.encode(Struct.wrap(message.variables), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStateVariablesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStateVariablesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.variables = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStateVariablesResponse {
    return {
      $type: GetStateVariablesResponse.$type,
      variables: isObject(object.variables) ? object.variables : undefined,
    };
  },

  toJSON(message: GetStateVariablesResponse): unknown {
    const obj: any = {};
    if (message.variables !== undefined) {
      obj.variables = message.variables;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStateVariablesResponse>, I>>(base?: I): GetStateVariablesResponse {
    return GetStateVariablesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStateVariablesResponse>, I>>(object: I): GetStateVariablesResponse {
    const message = createBaseGetStateVariablesResponse();
    message.variables = object.variables ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GetStateVariablesResponse.$type, GetStateVariablesResponse);

function createBaseGetNotebookMetadataRequest(): GetNotebookMetadataRequest {
  return { $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest", projectId: "", notebookPath: "" };
}

export const GetNotebookMetadataRequest = {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest" as const,

  encode(message: GetNotebookMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.notebookPath !== "") {
      writer.uint32(18).string(message.notebookPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotebookMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotebookMetadataRequest();
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

          message.notebookPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNotebookMetadataRequest {
    return {
      $type: GetNotebookMetadataRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      notebookPath: isSet(object.notebookPath) ? globalThis.String(object.notebookPath) : "",
    };
  },

  toJSON(message: GetNotebookMetadataRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.notebookPath !== "") {
      obj.notebookPath = message.notebookPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetNotebookMetadataRequest>, I>>(base?: I): GetNotebookMetadataRequest {
    return GetNotebookMetadataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetNotebookMetadataRequest>, I>>(object: I): GetNotebookMetadataRequest {
    const message = createBaseGetNotebookMetadataRequest();
    message.projectId = object.projectId ?? "";
    message.notebookPath = object.notebookPath ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetNotebookMetadataRequest.$type, GetNotebookMetadataRequest);

function createBaseGetNotebookMetadataResponse(): GetNotebookMetadataResponse {
  return {
    $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse",
    notebookId: "",
    createdAt: undefined,
    modifiedAt: undefined,
    contentLength: 0,
    cellIds: [],
  };
}

export const GetNotebookMetadataResponse = {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse" as const,

  encode(message: GetNotebookMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notebookId !== "") {
      writer.uint32(10).string(message.notebookId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.contentLength !== 0) {
      writer.uint32(32).int64(message.contentLength);
    }
    for (const v of message.cellIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotebookMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotebookMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notebookId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.contentLength = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cellIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNotebookMetadataResponse {
    return {
      $type: GetNotebookMetadataResponse.$type,
      notebookId: isSet(object.notebookId) ? globalThis.String(object.notebookId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      modifiedAt: isSet(object.modifiedAt) ? fromJsonTimestamp(object.modifiedAt) : undefined,
      contentLength: isSet(object.contentLength) ? globalThis.Number(object.contentLength) : 0,
      cellIds: globalThis.Array.isArray(object?.cellIds) ? object.cellIds.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: GetNotebookMetadataResponse): unknown {
    const obj: any = {};
    if (message.notebookId !== "") {
      obj.notebookId = message.notebookId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.modifiedAt !== undefined) {
      obj.modifiedAt = message.modifiedAt.toISOString();
    }
    if (message.contentLength !== 0) {
      obj.contentLength = Math.round(message.contentLength);
    }
    if (message.cellIds?.length) {
      obj.cellIds = message.cellIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetNotebookMetadataResponse>, I>>(base?: I): GetNotebookMetadataResponse {
    return GetNotebookMetadataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetNotebookMetadataResponse>, I>>(object: I): GetNotebookMetadataResponse {
    const message = createBaseGetNotebookMetadataResponse();
    message.notebookId = object.notebookId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.modifiedAt = object.modifiedAt ?? undefined;
    message.contentLength = object.contentLength ?? 0;
    message.cellIds = object.cellIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(GetNotebookMetadataResponse.$type, GetNotebookMetadataResponse);

/** A set of methods for managing Project resources. */
export type ProjectServiceService = typeof ProjectServiceService;
export const ProjectServiceService = {
  /** Creates a project in the specified folder. */
  create: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectRequest) => Buffer.from(CreateProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified project. */
  update: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateProjectRequest) => Buffer.from(UpdateProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified project. */
  delete: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProjectRequest) => Buffer.from(DeleteProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Opens the specified project. */
  open: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Open",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: OpenProjectRequest) => Buffer.from(OpenProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => OpenProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified project. */
  get: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectRequest) => Buffer.from(GetProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectRequest.decode(value),
    responseSerialize: (value: Project) => Buffer.from(Project.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Project.decode(value),
  },
  /** Lists projects for the specified folder. */
  list: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListProjectsRequest) => Buffer.from(ListProjectsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListProjectsRequest.decode(value),
    responseSerialize: (value: ListProjectsResponse) => Buffer.from(ListProjectsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListProjectsResponse.decode(value),
  },
  /** Returns the unit balance of the specified project. */
  getUnitBalance: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetUnitBalance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUnitBalanceRequest) => Buffer.from(GetUnitBalanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUnitBalanceRequest.decode(value),
    responseSerialize: (value: GetUnitBalanceResponse) => Buffer.from(GetUnitBalanceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUnitBalanceResponse.decode(value),
  },
  /** Sets the unit balance of the specified project. */
  setUnitBalance: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/SetUnitBalance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetUnitBalanceRequest) => Buffer.from(SetUnitBalanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetUnitBalanceRequest.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Executes code in the specified cell or notebook. */
  execute: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Execute",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ProjectExecutionRequest) => Buffer.from(ProjectExecutionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ProjectExecutionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns outputs of the specified cell. */
  getCellOutputs: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetCellOutputs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CellOutputsRequest) => Buffer.from(CellOutputsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CellOutputsRequest.decode(value),
    responseSerialize: (value: CellOutputsResponse) => Buffer.from(CellOutputsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CellOutputsResponse.decode(value),
  },
  /** Returns state variables of the specified notebook. */
  getStateVariables: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetStateVariables",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStateVariablesRequest) => Buffer.from(GetStateVariablesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStateVariablesRequest.decode(value),
    responseSerialize: (value: GetStateVariablesResponse) =>
      Buffer.from(GetStateVariablesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetStateVariablesResponse.decode(value),
  },
  /** Returns metadata of the specified notebook. */
  getNotebookMetadata: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetNotebookMetadata",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetNotebookMetadataRequest) =>
      Buffer.from(GetNotebookMetadataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetNotebookMetadataRequest.decode(value),
    responseSerialize: (value: GetNotebookMetadataResponse) =>
      Buffer.from(GetNotebookMetadataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetNotebookMetadataResponse.decode(value),
  },
} as const;

export interface ProjectServiceServer extends UntypedServiceImplementation {
  /** Creates a project in the specified folder. */
  create: handleUnaryCall<CreateProjectRequest, Operation>;
  /** Updates the specified project. */
  update: handleUnaryCall<UpdateProjectRequest, Operation>;
  /** Deletes the specified project. */
  delete: handleUnaryCall<DeleteProjectRequest, Operation>;
  /** Opens the specified project. */
  open: handleUnaryCall<OpenProjectRequest, Operation>;
  /** Returns the specified project. */
  get: handleUnaryCall<GetProjectRequest, Project>;
  /** Lists projects for the specified folder. */
  list: handleUnaryCall<ListProjectsRequest, ListProjectsResponse>;
  /** Returns the unit balance of the specified project. */
  getUnitBalance: handleUnaryCall<GetUnitBalanceRequest, GetUnitBalanceResponse>;
  /** Sets the unit balance of the specified project. */
  setUnitBalance: handleUnaryCall<SetUnitBalanceRequest, Empty>;
  /** Executes code in the specified cell or notebook. */
  execute: handleUnaryCall<ProjectExecutionRequest, Operation>;
  /** Returns outputs of the specified cell. */
  getCellOutputs: handleUnaryCall<CellOutputsRequest, CellOutputsResponse>;
  /** Returns state variables of the specified notebook. */
  getStateVariables: handleUnaryCall<GetStateVariablesRequest, GetStateVariablesResponse>;
  /** Returns metadata of the specified notebook. */
  getNotebookMetadata: handleUnaryCall<GetNotebookMetadataRequest, GetNotebookMetadataResponse>;
}

export interface ProjectServiceClient extends Client {
  /** Creates a project in the specified folder. */
  create(
    request: CreateProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified project. */
  update(
    request: UpdateProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified project. */
  delete(
    request: DeleteProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Opens the specified project. */
  open(
    request: OpenProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  open(
    request: OpenProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  open(
    request: OpenProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns the specified project. */
  get(request: GetProjectRequest, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
  get(
    request: GetProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Project) => void,
  ): ClientUnaryCall;
  get(
    request: GetProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Project) => void,
  ): ClientUnaryCall;
  /** Lists projects for the specified folder. */
  list(
    request: ListProjectsRequest,
    callback: (error: ServiceError | null, response: ListProjectsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListProjectsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListProjectsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListProjectsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListProjectsResponse) => void,
  ): ClientUnaryCall;
  /** Returns the unit balance of the specified project. */
  getUnitBalance(
    request: GetUnitBalanceRequest,
    callback: (error: ServiceError | null, response: GetUnitBalanceResponse) => void,
  ): ClientUnaryCall;
  getUnitBalance(
    request: GetUnitBalanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetUnitBalanceResponse) => void,
  ): ClientUnaryCall;
  getUnitBalance(
    request: GetUnitBalanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetUnitBalanceResponse) => void,
  ): ClientUnaryCall;
  /** Sets the unit balance of the specified project. */
  setUnitBalance(
    request: SetUnitBalanceRequest,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  setUnitBalance(
    request: SetUnitBalanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  setUnitBalance(
    request: SetUnitBalanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  /** Executes code in the specified cell or notebook. */
  execute(
    request: ProjectExecutionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  execute(
    request: ProjectExecutionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  execute(
    request: ProjectExecutionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns outputs of the specified cell. */
  getCellOutputs(
    request: CellOutputsRequest,
    callback: (error: ServiceError | null, response: CellOutputsResponse) => void,
  ): ClientUnaryCall;
  getCellOutputs(
    request: CellOutputsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CellOutputsResponse) => void,
  ): ClientUnaryCall;
  getCellOutputs(
    request: CellOutputsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CellOutputsResponse) => void,
  ): ClientUnaryCall;
  /** Returns state variables of the specified notebook. */
  getStateVariables(
    request: GetStateVariablesRequest,
    callback: (error: ServiceError | null, response: GetStateVariablesResponse) => void,
  ): ClientUnaryCall;
  getStateVariables(
    request: GetStateVariablesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetStateVariablesResponse) => void,
  ): ClientUnaryCall;
  getStateVariables(
    request: GetStateVariablesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetStateVariablesResponse) => void,
  ): ClientUnaryCall;
  /** Returns metadata of the specified notebook. */
  getNotebookMetadata(
    request: GetNotebookMetadataRequest,
    callback: (error: ServiceError | null, response: GetNotebookMetadataResponse) => void,
  ): ClientUnaryCall;
  getNotebookMetadata(
    request: GetNotebookMetadataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetNotebookMetadataResponse) => void,
  ): ClientUnaryCall;
  getNotebookMetadata(
    request: GetNotebookMetadataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetNotebookMetadataResponse) => void,
  ): ClientUnaryCall;
}

export const ProjectServiceClient = makeGenericClientConstructor(
  ProjectServiceService,
  "yandex.cloud.datasphere.v1.ProjectService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectServiceClient;
  service: typeof ProjectServiceService;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
