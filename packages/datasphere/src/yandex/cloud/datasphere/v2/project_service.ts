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
import { Struct } from "@yandex-cloud/core/dist/generated/google/protobuf/struct";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
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
import { Project, Project_Limits, Project_Settings } from "./project";
import { ResourceType, resourceTypeFromJSON, resourceTypeToJSON } from "./resource_types";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export enum ExecutionStatus {
  EXECUTION_STATUS_UNSPECIFIED = 0,
  /** OK - Execution finished successfully. */
  OK = 1,
  /** ERROR - Execution ended with error. */
  ERROR = 2,
  /** ABORTED - Execution was aborted. */
  ABORTED = 3,
  UNRECOGNIZED = -1,
}

export function executionStatusFromJSON(object: any): ExecutionStatus {
  switch (object) {
    case 0:
    case "EXECUTION_STATUS_UNSPECIFIED":
      return ExecutionStatus.EXECUTION_STATUS_UNSPECIFIED;
    case 1:
    case "OK":
      return ExecutionStatus.OK;
    case 2:
    case "ERROR":
      return ExecutionStatus.ERROR;
    case 3:
    case "ABORTED":
      return ExecutionStatus.ABORTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExecutionStatus.UNRECOGNIZED;
  }
}

export function executionStatusToJSON(object: ExecutionStatus): string {
  switch (object) {
    case ExecutionStatus.EXECUTION_STATUS_UNSPECIFIED:
      return "EXECUTION_STATUS_UNSPECIFIED";
    case ExecutionStatus.OK:
      return "OK";
    case ExecutionStatus.ERROR:
      return "ERROR";
    case ExecutionStatus.ABORTED:
      return "ABORTED";
    case ExecutionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CreateProjectRequest {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest";
  /** ID of the community to create a project in. */
  communityId: string;
  /** Name of the project. 0-63 characters long. */
  name: string;
  /** Description of the project. 0-256 characters long. */
  description: string;
  /** Labels of the project. */
  labels: { [key: string]: string };
  /** Settings of the project. */
  settings?:
    | Project_Settings
    | undefined;
  /** Limits of the project. */
  limits?: Project_Limits | undefined;
}

export interface CreateProjectRequest_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateProjectMetadata {
  $type: "yandex.cloud.datasphere.v2.CreateProjectMetadata";
  /** ID of the project that is being created. */
  projectId: string;
}

export interface UpdateProjectRequest {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest";
  /**
   * ID of the Project resource to update.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
  /** Field mask that specifies which fields of the Project resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the project. 0-63 characters long. */
  name: string;
  /** Description of the project. 0-256 characters long. */
  description: string;
  /** Labels of the project. */
  labels: { [key: string]: string };
  /** Settings of the project. */
  settings?:
    | Project_Settings
    | undefined;
  /** Limits of the project. */
  limits?: Project_Limits | undefined;
}

export interface UpdateProjectRequest_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateProjectMetadata {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectMetadata";
  /** ID of the project that is being updated. */
  projectId: string;
}

export interface DeleteProjectRequest {
  $type: "yandex.cloud.datasphere.v2.DeleteProjectRequest";
  /**
   * ID of the Project resource to delete.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface DeleteProjectMetadata {
  $type: "yandex.cloud.datasphere.v2.DeleteProjectMetadata";
  /** ID of the project that is being deleted. */
  projectId: string;
}

export interface OpenProjectRequest {
  $type: "yandex.cloud.datasphere.v2.OpenProjectRequest";
  /**
   * ID of the Project resource to open.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface OpenProjectMetadata {
  $type: "yandex.cloud.datasphere.v2.OpenProjectMetadata";
  /** ID of the project that is being opened. */
  projectId: string;
  /** Project opening status. */
  status: OpenProjectMetadata_OpenProjectStatus;
}

export enum OpenProjectMetadata_OpenProjectStatus {
  OPEN_PROJECT_STATUS_UNSPECIFIED = 0,
  /** OPEN_PROJECT_STATUS_CLOSING_IDE - Closing previous IDE instance. */
  OPEN_PROJECT_STATUS_CLOSING_IDE = 1,
  /** OPEN_PROJECT_STATUS_UNZIPPING_PROJECT - Unzipping project. */
  OPEN_PROJECT_STATUS_UNZIPPING_PROJECT = 2,
  /** OPEN_PROJECT_STATUS_ALLOCATING_VM - Allocating VM for the project. */
  OPEN_PROJECT_STATUS_ALLOCATING_VM = 3,
  /** OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES - Allocating resources for the project. */
  OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES = 4,
  /** OPEN_PROJECT_STATUS_STARTING_IDE - Starting IDE. */
  OPEN_PROJECT_STATUS_STARTING_IDE = 5,
  /** OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT - Applying checkpoint to project. */
  OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT = 6,
  /** OPEN_PROJECT_STATUS_UNKNOWN - Unknown open project status. */
  OPEN_PROJECT_STATUS_UNKNOWN = 7,
  UNRECOGNIZED = -1,
}

export function openProjectMetadata_OpenProjectStatusFromJSON(object: any): OpenProjectMetadata_OpenProjectStatus {
  switch (object) {
    case 0:
    case "OPEN_PROJECT_STATUS_UNSPECIFIED":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNSPECIFIED;
    case 1:
    case "OPEN_PROJECT_STATUS_CLOSING_IDE":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_CLOSING_IDE;
    case 2:
    case "OPEN_PROJECT_STATUS_UNZIPPING_PROJECT":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNZIPPING_PROJECT;
    case 3:
    case "OPEN_PROJECT_STATUS_ALLOCATING_VM":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_VM;
    case 4:
    case "OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES;
    case 5:
    case "OPEN_PROJECT_STATUS_STARTING_IDE":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_STARTING_IDE;
    case 6:
    case "OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT;
    case 7:
    case "OPEN_PROJECT_STATUS_UNKNOWN":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OpenProjectMetadata_OpenProjectStatus.UNRECOGNIZED;
  }
}

export function openProjectMetadata_OpenProjectStatusToJSON(object: OpenProjectMetadata_OpenProjectStatus): string {
  switch (object) {
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNSPECIFIED:
      return "OPEN_PROJECT_STATUS_UNSPECIFIED";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_CLOSING_IDE:
      return "OPEN_PROJECT_STATUS_CLOSING_IDE";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNZIPPING_PROJECT:
      return "OPEN_PROJECT_STATUS_UNZIPPING_PROJECT";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_VM:
      return "OPEN_PROJECT_STATUS_ALLOCATING_VM";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES:
      return "OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_STARTING_IDE:
      return "OPEN_PROJECT_STATUS_STARTING_IDE";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT:
      return "OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNKNOWN:
      return "OPEN_PROJECT_STATUS_UNKNOWN";
    case OpenProjectMetadata_OpenProjectStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface OpenProjectResponse {
  $type: "yandex.cloud.datasphere.v2.OpenProjectResponse";
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
  $type: "yandex.cloud.datasphere.v2.GetProjectRequest";
  /**
   * ID of the Project resource to return.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface ListProjectsRequest {
  $type: "yandex.cloud.datasphere.v2.ListProjectsRequest";
  /** ID of the community to list projects in. */
  communityId: string;
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
  /**
   * Name pattern to filter projects that are returned.
   * Only projects with names matching the pattern will be returned.
   */
  projectNamePattern: string;
  /**
   * User ID to filter projects that are returned.
   * Only projects that are owned by specified user will be returned.
   */
  ownedById: string;
}

export interface ListProjectsResponse {
  $type: "yandex.cloud.datasphere.v2.ListProjectsResponse";
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
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceRequest";
  /** ID of the project to return the unit balance for. */
  projectId: string;
}

export interface GetUnitBalanceResponse {
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceResponse";
  /** The number of units available to the project. */
  unitBalance?: number | undefined;
}

export interface SetUnitBalanceRequest {
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceRequest";
  /** ID of the project to set the unit balance for. */
  projectId: string;
  /** The number of units available to the project. */
  unitBalance?: number | undefined;
}

export interface SetUnitBalanceMetadata {
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceMetadata";
  /** ID of the project which unit balance is set. */
  projectId: string;
}

export interface ProjectExecutionRequest {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionRequest";
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
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionMetadata";
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
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionResponse";
  /** ID of the checkpoint resulting from the execution. */
  checkpointId: string;
  /** Values of output variables resulting from the execution. */
  outputVariables?:
    | { [key: string]: any }
    | undefined;
  /** Execution final status. */
  executionStatus: ExecutionStatus;
}

export interface CellOutputsRequest {
  $type: "yandex.cloud.datasphere.v2.CellOutputsRequest";
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
  $type: "yandex.cloud.datasphere.v2.CellOutputsResponse";
  /** List of outputs. */
  outputs: string[];
}

export interface GetStateVariablesRequest {
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesRequest";
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
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesResponse";
  /** Values of the specified variables. */
  variables?: { [key: string]: any } | undefined;
}

export interface SetProjectAccessBindingsMetadata {
  $type: "yandex.cloud.datasphere.v2.SetProjectAccessBindingsMetadata";
  /** ID of the project which access bindings are set. */
  projectId: string;
}

export interface UpdateProjectAccessBindingsMetadata {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectAccessBindingsMetadata";
  /** ID of the project which access bindings are updated. */
  projectId: string;
}

export interface AddResourceToProjectRequest {
  $type: "yandex.cloud.datasphere.v2.AddResourceToProjectRequest";
  projectId: string;
  resourceType: ResourceType;
  resourceId: string;
}

export interface RemoveResourceFromProjectRequest {
  $type: "yandex.cloud.datasphere.v2.RemoveResourceFromProjectRequest";
  projectId: string;
  resourceType: ResourceType;
  resourceId: string;
}

function createBaseCreateProjectRequest(): CreateProjectRequest {
  return {
    $type: "yandex.cloud.datasphere.v2.CreateProjectRequest",
    communityId: "",
    name: "",
    description: "",
    labels: {},
    settings: undefined,
    limits: undefined,
  };
}

export const CreateProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest" as const,

  encode(message: CreateProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateProjectRequest_LabelsEntry.encode({
        $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.settings !== undefined) {
      Project_Settings.encode(message.settings, writer.uint32(42).fork()).ldelim();
    }
    if (message.limits !== undefined) {
      Project_Limits.encode(message.limits, writer.uint32(50).fork()).ldelim();
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

          message.communityId = reader.string();
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

          const entry4 = CreateProjectRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
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

  fromJSON(object: any): CreateProjectRequest {
    return {
      $type: CreateProjectRequest.$type,
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      settings: isSet(object.settings) ? Project_Settings.fromJSON(object.settings) : undefined,
      limits: isSet(object.limits) ? Project_Limits.fromJSON(object.limits) : undefined,
    };
  },

  toJSON(message: CreateProjectRequest): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
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
    message.communityId = object.communityId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
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

function createBaseCreateProjectRequest_LabelsEntry(): CreateProjectRequest_LabelsEntry {
  return { $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry", key: "", value: "" };
}

export const CreateProjectRequest_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry" as const,

  encode(message: CreateProjectRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectRequest_LabelsEntry();
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

  fromJSON(object: any): CreateProjectRequest_LabelsEntry {
    return {
      $type: CreateProjectRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateProjectRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateProjectRequest_LabelsEntry {
    return CreateProjectRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProjectRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateProjectRequest_LabelsEntry {
    const message = createBaseCreateProjectRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateProjectRequest_LabelsEntry.$type, CreateProjectRequest_LabelsEntry);

function createBaseCreateProjectMetadata(): CreateProjectMetadata {
  return { $type: "yandex.cloud.datasphere.v2.CreateProjectMetadata", projectId: "" };
}

export const CreateProjectMetadata = {
  $type: "yandex.cloud.datasphere.v2.CreateProjectMetadata" as const,

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
    $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest",
    projectId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    settings: undefined,
    limits: undefined,
  };
}

export const UpdateProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest" as const,

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
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateProjectRequest_LabelsEntry.encode({
        $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.settings !== undefined) {
      Project_Settings.encode(message.settings, writer.uint32(50).fork()).ldelim();
    }
    if (message.limits !== undefined) {
      Project_Limits.encode(message.limits, writer.uint32(58).fork()).ldelim();
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

          const entry5 = UpdateProjectRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.settings = Project_Settings.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
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
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
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
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
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
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
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

function createBaseUpdateProjectRequest_LabelsEntry(): UpdateProjectRequest_LabelsEntry {
  return { $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateProjectRequest_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry" as const,

  encode(message: UpdateProjectRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateProjectRequest_LabelsEntry {
    return {
      $type: UpdateProjectRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateProjectRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProjectRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateProjectRequest_LabelsEntry {
    return UpdateProjectRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProjectRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateProjectRequest_LabelsEntry {
    const message = createBaseUpdateProjectRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateProjectRequest_LabelsEntry.$type, UpdateProjectRequest_LabelsEntry);

function createBaseUpdateProjectMetadata(): UpdateProjectMetadata {
  return { $type: "yandex.cloud.datasphere.v2.UpdateProjectMetadata", projectId: "" };
}

export const UpdateProjectMetadata = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectMetadata" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.DeleteProjectRequest", projectId: "" };
}

export const DeleteProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.DeleteProjectRequest" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.DeleteProjectMetadata", projectId: "" };
}

export const DeleteProjectMetadata = {
  $type: "yandex.cloud.datasphere.v2.DeleteProjectMetadata" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.OpenProjectRequest", projectId: "" };
}

export const OpenProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.OpenProjectRequest" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.OpenProjectMetadata", projectId: "", status: 0 };
}

export const OpenProjectMetadata = {
  $type: "yandex.cloud.datasphere.v2.OpenProjectMetadata" as const,

  encode(message: OpenProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
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
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
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
      status: isSet(object.status) ? openProjectMetadata_OpenProjectStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: OpenProjectMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.status !== 0) {
      obj.status = openProjectMetadata_OpenProjectStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenProjectMetadata>, I>>(base?: I): OpenProjectMetadata {
    return OpenProjectMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpenProjectMetadata>, I>>(object: I): OpenProjectMetadata {
    const message = createBaseOpenProjectMetadata();
    message.projectId = object.projectId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(OpenProjectMetadata.$type, OpenProjectMetadata);

function createBaseOpenProjectResponse(): OpenProjectResponse {
  return { $type: "yandex.cloud.datasphere.v2.OpenProjectResponse", projectUrl: "", sessionToken: "" };
}

export const OpenProjectResponse = {
  $type: "yandex.cloud.datasphere.v2.OpenProjectResponse" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.GetProjectRequest", projectId: "" };
}

export const GetProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.GetProjectRequest" as const,

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
  return {
    $type: "yandex.cloud.datasphere.v2.ListProjectsRequest",
    communityId: "",
    pageSize: 0,
    pageToken: "",
    projectNamePattern: "",
    ownedById: "",
  };
}

export const ListProjectsRequest = {
  $type: "yandex.cloud.datasphere.v2.ListProjectsRequest" as const,

  encode(message: ListProjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.projectNamePattern !== "") {
      writer.uint32(34).string(message.projectNamePattern);
    }
    if (message.ownedById !== "") {
      writer.uint32(42).string(message.ownedById);
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

          message.communityId = reader.string();
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

          message.projectNamePattern = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ownedById = reader.string();
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
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      projectNamePattern: isSet(object.projectNamePattern) ? globalThis.String(object.projectNamePattern) : "",
      ownedById: isSet(object.ownedById) ? globalThis.String(object.ownedById) : "",
    };
  },

  toJSON(message: ListProjectsRequest): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.projectNamePattern !== "") {
      obj.projectNamePattern = message.projectNamePattern;
    }
    if (message.ownedById !== "") {
      obj.ownedById = message.ownedById;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProjectsRequest>, I>>(base?: I): ListProjectsRequest {
    return ListProjectsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProjectsRequest>, I>>(object: I): ListProjectsRequest {
    const message = createBaseListProjectsRequest();
    message.communityId = object.communityId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.projectNamePattern = object.projectNamePattern ?? "";
    message.ownedById = object.ownedById ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProjectsRequest.$type, ListProjectsRequest);

function createBaseListProjectsResponse(): ListProjectsResponse {
  return { $type: "yandex.cloud.datasphere.v2.ListProjectsResponse", projects: [], nextPageToken: "" };
}

export const ListProjectsResponse = {
  $type: "yandex.cloud.datasphere.v2.ListProjectsResponse" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.GetUnitBalanceRequest", projectId: "" };
}

export const GetUnitBalanceRequest = {
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceRequest" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.GetUnitBalanceResponse", unitBalance: undefined };
}

export const GetUnitBalanceResponse = {
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceResponse" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.SetUnitBalanceRequest", projectId: "", unitBalance: undefined };
}

export const SetUnitBalanceRequest = {
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceRequest" as const,

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

function createBaseSetUnitBalanceMetadata(): SetUnitBalanceMetadata {
  return { $type: "yandex.cloud.datasphere.v2.SetUnitBalanceMetadata", projectId: "" };
}

export const SetUnitBalanceMetadata = {
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceMetadata" as const,

  encode(message: SetUnitBalanceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUnitBalanceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUnitBalanceMetadata();
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

  fromJSON(object: any): SetUnitBalanceMetadata {
    return {
      $type: SetUnitBalanceMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: SetUnitBalanceMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUnitBalanceMetadata>, I>>(base?: I): SetUnitBalanceMetadata {
    return SetUnitBalanceMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetUnitBalanceMetadata>, I>>(object: I): SetUnitBalanceMetadata {
    const message = createBaseSetUnitBalanceMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetUnitBalanceMetadata.$type, SetUnitBalanceMetadata);

function createBaseProjectExecutionRequest(): ProjectExecutionRequest {
  return {
    $type: "yandex.cloud.datasphere.v2.ProjectExecutionRequest",
    projectId: "",
    notebookId: undefined,
    cellId: undefined,
    inputVariables: undefined,
    outputVariableNames: [],
  };
}

export const ProjectExecutionRequest = {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionRequest" as const,

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
    $type: "yandex.cloud.datasphere.v2.ProjectExecutionMetadata",
    projectId: "",
    notebookId: undefined,
    cellId: undefined,
  };
}

export const ProjectExecutionMetadata = {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionMetadata" as const,

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
  return {
    $type: "yandex.cloud.datasphere.v2.ProjectExecutionResponse",
    checkpointId: "",
    outputVariables: undefined,
    executionStatus: 0,
  };
}

export const ProjectExecutionResponse = {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionResponse" as const,

  encode(message: ProjectExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkpointId !== "") {
      writer.uint32(10).string(message.checkpointId);
    }
    if (message.outputVariables !== undefined) {
      Struct.encode(Struct.wrap(message.outputVariables), writer.uint32(18).fork()).ldelim();
    }
    if (message.executionStatus !== 0) {
      writer.uint32(24).int32(message.executionStatus);
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.executionStatus = reader.int32() as any;
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
      executionStatus: isSet(object.executionStatus) ? executionStatusFromJSON(object.executionStatus) : 0,
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
    if (message.executionStatus !== 0) {
      obj.executionStatus = executionStatusToJSON(message.executionStatus);
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
    message.executionStatus = object.executionStatus ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ProjectExecutionResponse.$type, ProjectExecutionResponse);

function createBaseCellOutputsRequest(): CellOutputsRequest {
  return {
    $type: "yandex.cloud.datasphere.v2.CellOutputsRequest",
    projectId: "",
    cellId: "",
    checkpointId: "",
    startAt: undefined,
  };
}

export const CellOutputsRequest = {
  $type: "yandex.cloud.datasphere.v2.CellOutputsRequest" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.CellOutputsResponse", outputs: [] };
}

export const CellOutputsResponse = {
  $type: "yandex.cloud.datasphere.v2.CellOutputsResponse" as const,

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
    $type: "yandex.cloud.datasphere.v2.GetStateVariablesRequest",
    projectId: "",
    notebookId: "",
    variableNames: [],
    checkpointId: "",
  };
}

export const GetStateVariablesRequest = {
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesRequest" as const,

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
  return { $type: "yandex.cloud.datasphere.v2.GetStateVariablesResponse", variables: undefined };
}

export const GetStateVariablesResponse = {
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesResponse" as const,

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

function createBaseSetProjectAccessBindingsMetadata(): SetProjectAccessBindingsMetadata {
  return { $type: "yandex.cloud.datasphere.v2.SetProjectAccessBindingsMetadata", projectId: "" };
}

export const SetProjectAccessBindingsMetadata = {
  $type: "yandex.cloud.datasphere.v2.SetProjectAccessBindingsMetadata" as const,

  encode(message: SetProjectAccessBindingsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetProjectAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProjectAccessBindingsMetadata();
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

  fromJSON(object: any): SetProjectAccessBindingsMetadata {
    return {
      $type: SetProjectAccessBindingsMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: SetProjectAccessBindingsMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetProjectAccessBindingsMetadata>, I>>(
    base?: I,
  ): SetProjectAccessBindingsMetadata {
    return SetProjectAccessBindingsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetProjectAccessBindingsMetadata>, I>>(
    object: I,
  ): SetProjectAccessBindingsMetadata {
    const message = createBaseSetProjectAccessBindingsMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetProjectAccessBindingsMetadata.$type, SetProjectAccessBindingsMetadata);

function createBaseUpdateProjectAccessBindingsMetadata(): UpdateProjectAccessBindingsMetadata {
  return { $type: "yandex.cloud.datasphere.v2.UpdateProjectAccessBindingsMetadata", projectId: "" };
}

export const UpdateProjectAccessBindingsMetadata = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectAccessBindingsMetadata" as const,

  encode(message: UpdateProjectAccessBindingsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectAccessBindingsMetadata();
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

  fromJSON(object: any): UpdateProjectAccessBindingsMetadata {
    return {
      $type: UpdateProjectAccessBindingsMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: UpdateProjectAccessBindingsMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProjectAccessBindingsMetadata>, I>>(
    base?: I,
  ): UpdateProjectAccessBindingsMetadata {
    return UpdateProjectAccessBindingsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProjectAccessBindingsMetadata>, I>>(
    object: I,
  ): UpdateProjectAccessBindingsMetadata {
    const message = createBaseUpdateProjectAccessBindingsMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateProjectAccessBindingsMetadata.$type, UpdateProjectAccessBindingsMetadata);

function createBaseAddResourceToProjectRequest(): AddResourceToProjectRequest {
  return {
    $type: "yandex.cloud.datasphere.v2.AddResourceToProjectRequest",
    projectId: "",
    resourceType: 0,
    resourceId: "",
  };
}

export const AddResourceToProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.AddResourceToProjectRequest" as const,

  encode(message: AddResourceToProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.resourceType !== 0) {
      writer.uint32(16).int32(message.resourceType);
    }
    if (message.resourceId !== "") {
      writer.uint32(26).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddResourceToProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddResourceToProjectRequest();
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
          if (tag !== 16) {
            break;
          }

          message.resourceType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddResourceToProjectRequest {
    return {
      $type: AddResourceToProjectRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      resourceType: isSet(object.resourceType) ? resourceTypeFromJSON(object.resourceType) : 0,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: AddResourceToProjectRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.resourceType !== 0) {
      obj.resourceType = resourceTypeToJSON(message.resourceType);
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddResourceToProjectRequest>, I>>(base?: I): AddResourceToProjectRequest {
    return AddResourceToProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddResourceToProjectRequest>, I>>(object: I): AddResourceToProjectRequest {
    const message = createBaseAddResourceToProjectRequest();
    message.projectId = object.projectId ?? "";
    message.resourceType = object.resourceType ?? 0;
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddResourceToProjectRequest.$type, AddResourceToProjectRequest);

function createBaseRemoveResourceFromProjectRequest(): RemoveResourceFromProjectRequest {
  return {
    $type: "yandex.cloud.datasphere.v2.RemoveResourceFromProjectRequest",
    projectId: "",
    resourceType: 0,
    resourceId: "",
  };
}

export const RemoveResourceFromProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.RemoveResourceFromProjectRequest" as const,

  encode(message: RemoveResourceFromProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.resourceType !== 0) {
      writer.uint32(16).int32(message.resourceType);
    }
    if (message.resourceId !== "") {
      writer.uint32(26).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveResourceFromProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveResourceFromProjectRequest();
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
          if (tag !== 16) {
            break;
          }

          message.resourceType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveResourceFromProjectRequest {
    return {
      $type: RemoveResourceFromProjectRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      resourceType: isSet(object.resourceType) ? resourceTypeFromJSON(object.resourceType) : 0,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: RemoveResourceFromProjectRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.resourceType !== 0) {
      obj.resourceType = resourceTypeToJSON(message.resourceType);
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveResourceFromProjectRequest>, I>>(
    base?: I,
  ): RemoveResourceFromProjectRequest {
    return RemoveResourceFromProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveResourceFromProjectRequest>, I>>(
    object: I,
  ): RemoveResourceFromProjectRequest {
    const message = createBaseRemoveResourceFromProjectRequest();
    message.projectId = object.projectId ?? "";
    message.resourceType = object.resourceType ?? 0;
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveResourceFromProjectRequest.$type, RemoveResourceFromProjectRequest);

/** A set of methods for managing Project resources. */
export type ProjectServiceService = typeof ProjectServiceService;
export const ProjectServiceService = {
  /** Creates a project in the specified folder. */
  create: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectRequest) => Buffer.from(CreateProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified project. */
  update: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateProjectRequest) => Buffer.from(UpdateProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified project. */
  delete: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProjectRequest) => Buffer.from(DeleteProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Opens the specified project. */
  open: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/Open",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: OpenProjectRequest) => Buffer.from(OpenProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => OpenProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified project. */
  get: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectRequest) => Buffer.from(GetProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectRequest.decode(value),
    responseSerialize: (value: Project) => Buffer.from(Project.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Project.decode(value),
  },
  /** Lists projects for the specified community. */
  list: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListProjectsRequest) => Buffer.from(ListProjectsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListProjectsRequest.decode(value),
    responseSerialize: (value: ListProjectsResponse) => Buffer.from(ListProjectsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListProjectsResponse.decode(value),
  },
  /** Returns the unit balance of the specified project. */
  getUnitBalance: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/GetUnitBalance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUnitBalanceRequest) => Buffer.from(GetUnitBalanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUnitBalanceRequest.decode(value),
    responseSerialize: (value: GetUnitBalanceResponse) => Buffer.from(GetUnitBalanceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUnitBalanceResponse.decode(value),
  },
  /** Sets the unit balance of the specified project. */
  setUnitBalance: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/SetUnitBalance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetUnitBalanceRequest) => Buffer.from(SetUnitBalanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetUnitBalanceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Executes code in the specified cell or notebook. */
  execute: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/Execute",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ProjectExecutionRequest) => Buffer.from(ProjectExecutionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ProjectExecutionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns outputs of the specified cell. */
  getCellOutputs: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/GetCellOutputs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CellOutputsRequest) => Buffer.from(CellOutputsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CellOutputsRequest.decode(value),
    responseSerialize: (value: CellOutputsResponse) => Buffer.from(CellOutputsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CellOutputsResponse.decode(value),
  },
  /** Returns state variables of the specified notebook. */
  getStateVariables: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/GetStateVariables",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStateVariablesRequest) => Buffer.from(GetStateVariablesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStateVariablesRequest.decode(value),
    responseSerialize: (value: GetStateVariablesResponse) =>
      Buffer.from(GetStateVariablesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetStateVariablesResponse.decode(value),
  },
  /** Lists access bindings for the project. */
  listAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the project. */
  setAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the project. */
  updateAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds shared resource to project */
  addResource: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/AddResource",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddResourceToProjectRequest) =>
      Buffer.from(AddResourceToProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddResourceToProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes shared resource from project */
  removeResource: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/RemoveResource",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveResourceFromProjectRequest) =>
      Buffer.from(RemoveResourceFromProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveResourceFromProjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
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
  /** Lists projects for the specified community. */
  list: handleUnaryCall<ListProjectsRequest, ListProjectsResponse>;
  /** Returns the unit balance of the specified project. */
  getUnitBalance: handleUnaryCall<GetUnitBalanceRequest, GetUnitBalanceResponse>;
  /** Sets the unit balance of the specified project. */
  setUnitBalance: handleUnaryCall<SetUnitBalanceRequest, Operation>;
  /** Executes code in the specified cell or notebook. */
  execute: handleUnaryCall<ProjectExecutionRequest, Operation>;
  /** Returns outputs of the specified cell. */
  getCellOutputs: handleUnaryCall<CellOutputsRequest, CellOutputsResponse>;
  /** Returns state variables of the specified notebook. */
  getStateVariables: handleUnaryCall<GetStateVariablesRequest, GetStateVariablesResponse>;
  /** Lists access bindings for the project. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the project. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the project. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /** Adds shared resource to project */
  addResource: handleUnaryCall<AddResourceToProjectRequest, Operation>;
  /** Removes shared resource from project */
  removeResource: handleUnaryCall<RemoveResourceFromProjectRequest, Operation>;
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
  /** Lists projects for the specified community. */
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
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setUnitBalance(
    request: SetUnitBalanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setUnitBalance(
    request: SetUnitBalanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
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
  /** Lists access bindings for the project. */
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
  /** Sets access bindings for the project. */
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
  /** Updates access bindings for the project. */
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
  /** Adds shared resource to project */
  addResource(
    request: AddResourceToProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addResource(
    request: AddResourceToProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addResource(
    request: AddResourceToProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Removes shared resource from project */
  removeResource(
    request: RemoveResourceFromProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeResource(
    request: RemoveResourceFromProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeResource(
    request: RemoveResourceFromProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ProjectServiceClient = makeGenericClientConstructor(
  ProjectServiceService,
  "yandex.cloud.datasphere.v2.ProjectService",
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
