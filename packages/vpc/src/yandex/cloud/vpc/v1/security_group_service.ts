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
import {
  CidrBlocks,
  PortRange,
  SecurityGroup,
  SecurityGroupRule_Direction,
  securityGroupRule_DirectionFromJSON,
  securityGroupRule_DirectionToJSON,
} from "./security_group";

export const protobufPackage = "yandex.cloud.vpc.v1";

export interface GetSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest";
  securityGroupId: string;
}

export interface ListSecurityGroupsRequest {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest";
  folderId: string;
  pageSize: number;
  pageToken: string;
  /** filter by network_id is here */
  filter: string;
}

export interface ListSecurityGroupsResponse {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse";
  securityGroups: SecurityGroup[];
  nextPageToken: string;
}

export interface CreateSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest";
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  networkId: string;
  ruleSpecs: SecurityGroupRuleSpec[];
}

export interface CreateSecurityGroupRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface SecurityGroupRuleSpec {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec";
  description: string;
  labels: { [key: string]: string };
  direction: SecurityGroupRule_Direction;
  /** null value means any port */
  ports?: PortRange | undefined;
  protocolName?: string | undefined;
  protocolNumber?: number | undefined;
  cidrBlocks?: CidrBlocks | undefined;
  securityGroupId?:
    | string
    | undefined;
  /** string subnet_id = .. ; */
  predefinedTarget?: string | undefined;
}

export interface SecurityGroupRuleSpec_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSecurityGroupMetadata {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata";
  securityGroupId: string;
}

export interface UpdateSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest";
  securityGroupId: string;
  updateMask?: string[] | undefined;
  name: string;
  description: string;
  labels: { [key: string]: string };
  /** all existing rules will be replaced with given list */
  ruleSpecs: SecurityGroupRuleSpec[];
}

export interface UpdateSecurityGroupRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSecurityGroupMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata";
  securityGroupId: string;
  addedRuleIds: string[];
}

export interface UpdateSecurityGroupRulesRequest {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest";
  securityGroupId: string;
  /** list of rules ids to delete */
  deletionRuleIds: string[];
  additionRuleSpecs: SecurityGroupRuleSpec[];
}

export interface UpdateSecurityGroupRuleRequest {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest";
  securityGroupId: string;
  ruleId: string;
  updateMask?: string[] | undefined;
  description: string;
  labels: { [key: string]: string };
}

export interface UpdateSecurityGroupRuleRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSecurityGroupRuleMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata";
  securityGroupId: string;
  ruleId: string;
}

export interface DeleteSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest";
  securityGroupId: string;
}

export interface DeleteSecurityGroupMetadata {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata";
  securityGroupId: string;
}

export interface ListSecurityGroupOperationsRequest {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest";
  securityGroupId: string;
  pageSize: number;
  pageToken: string;
}

export interface ListSecurityGroupOperationsResponse {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse";
  operations: Operation[];
  nextPageToken: string;
}

export interface MoveSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest";
  securityGroupId: string;
  destinationFolderId: string;
}

export interface MoveSecurityGroupMetadata {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata";
  securityGroupId: string;
}

function createBaseGetSecurityGroupRequest(): GetSecurityGroupRequest {
  return { $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest", securityGroupId: "" };
}

export const GetSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest" as const,

  encode(message: GetSecurityGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSecurityGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSecurityGroupRequest {
    return {
      $type: GetSecurityGroupRequest.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
    };
  },

  toJSON(message: GetSecurityGroupRequest): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSecurityGroupRequest>, I>>(base?: I): GetSecurityGroupRequest {
    return GetSecurityGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSecurityGroupRequest>, I>>(object: I): GetSecurityGroupRequest {
    const message = createBaseGetSecurityGroupRequest();
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSecurityGroupRequest.$type, GetSecurityGroupRequest);

function createBaseListSecurityGroupsRequest(): ListSecurityGroupsRequest {
  return {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListSecurityGroupsRequest = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest" as const,

  encode(message: ListSecurityGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecurityGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecurityGroupsRequest();
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

  fromJSON(object: any): ListSecurityGroupsRequest {
    return {
      $type: ListSecurityGroupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListSecurityGroupsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListSecurityGroupsRequest>, I>>(base?: I): ListSecurityGroupsRequest {
    return ListSecurityGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSecurityGroupsRequest>, I>>(object: I): ListSecurityGroupsRequest {
    const message = createBaseListSecurityGroupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecurityGroupsRequest.$type, ListSecurityGroupsRequest);

function createBaseListSecurityGroupsResponse(): ListSecurityGroupsResponse {
  return { $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse", securityGroups: [], nextPageToken: "" };
}

export const ListSecurityGroupsResponse = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse" as const,

  encode(message: ListSecurityGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.securityGroups) {
      SecurityGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecurityGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecurityGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroups.push(SecurityGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSecurityGroupsResponse {
    return {
      $type: ListSecurityGroupsResponse.$type,
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => SecurityGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSecurityGroupsResponse): unknown {
    const obj: any = {};
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups.map((e) => SecurityGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSecurityGroupsResponse>, I>>(base?: I): ListSecurityGroupsResponse {
    return ListSecurityGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSecurityGroupsResponse>, I>>(object: I): ListSecurityGroupsResponse {
    const message = createBaseListSecurityGroupsResponse();
    message.securityGroups = object.securityGroups?.map((e) => SecurityGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecurityGroupsResponse.$type, ListSecurityGroupsResponse);

function createBaseCreateSecurityGroupRequest(): CreateSecurityGroupRequest {
  return {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    networkId: "",
    ruleSpecs: [],
  };
}

export const CreateSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest" as const,

  encode(message: CreateSecurityGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateSecurityGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(42).string(message.networkId);
    }
    for (const v of message.ruleSpecs) {
      SecurityGroupRuleSpec.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSecurityGroupRequest();
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

          const entry4 = CreateSecurityGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.ruleSpecs.push(SecurityGroupRuleSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSecurityGroupRequest {
    return {
      $type: CreateSecurityGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      ruleSpecs: globalThis.Array.isArray(object?.ruleSpecs)
        ? object.ruleSpecs.map((e: any) => SecurityGroupRuleSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateSecurityGroupRequest): unknown {
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
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.ruleSpecs?.length) {
      obj.ruleSpecs = message.ruleSpecs.map((e) => SecurityGroupRuleSpec.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSecurityGroupRequest>, I>>(base?: I): CreateSecurityGroupRequest {
    return CreateSecurityGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSecurityGroupRequest>, I>>(object: I): CreateSecurityGroupRequest {
    const message = createBaseCreateSecurityGroupRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.networkId = object.networkId ?? "";
    message.ruleSpecs = object.ruleSpecs?.map((e) => SecurityGroupRuleSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateSecurityGroupRequest.$type, CreateSecurityGroupRequest);

function createBaseCreateSecurityGroupRequest_LabelsEntry(): CreateSecurityGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry", key: "", value: "" };
}

export const CreateSecurityGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry" as const,

  encode(message: CreateSecurityGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSecurityGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSecurityGroupRequest_LabelsEntry();
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

  fromJSON(object: any): CreateSecurityGroupRequest_LabelsEntry {
    return {
      $type: CreateSecurityGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateSecurityGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSecurityGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateSecurityGroupRequest_LabelsEntry {
    return CreateSecurityGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSecurityGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateSecurityGroupRequest_LabelsEntry {
    const message = createBaseCreateSecurityGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSecurityGroupRequest_LabelsEntry.$type, CreateSecurityGroupRequest_LabelsEntry);

function createBaseSecurityGroupRuleSpec(): SecurityGroupRuleSpec {
  return {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec",
    description: "",
    labels: {},
    direction: 0,
    ports: undefined,
    protocolName: undefined,
    protocolNumber: undefined,
    cidrBlocks: undefined,
    securityGroupId: undefined,
    predefinedTarget: undefined,
  };
}

export const SecurityGroupRuleSpec = {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec" as const,

  encode(message: SecurityGroupRuleSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      SecurityGroupRuleSpec_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(18).fork()).ldelim();
    });
    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction);
    }
    if (message.ports !== undefined) {
      PortRange.encode(message.ports, writer.uint32(34).fork()).ldelim();
    }
    if (message.protocolName !== undefined) {
      writer.uint32(42).string(message.protocolName);
    }
    if (message.protocolNumber !== undefined) {
      writer.uint32(48).int64(message.protocolNumber);
    }
    if (message.cidrBlocks !== undefined) {
      CidrBlocks.encode(message.cidrBlocks, writer.uint32(58).fork()).ldelim();
    }
    if (message.securityGroupId !== undefined) {
      writer.uint32(66).string(message.securityGroupId);
    }
    if (message.predefinedTarget !== undefined) {
      writer.uint32(74).string(message.predefinedTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityGroupRuleSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityGroupRuleSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = SecurityGroupRuleSpec_LabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ports = PortRange.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.protocolName = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.protocolNumber = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.cidrBlocks = CidrBlocks.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.predefinedTarget = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecurityGroupRuleSpec {
    return {
      $type: SecurityGroupRuleSpec.$type,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      direction: isSet(object.direction) ? securityGroupRule_DirectionFromJSON(object.direction) : 0,
      ports: isSet(object.ports) ? PortRange.fromJSON(object.ports) : undefined,
      protocolName: isSet(object.protocolName) ? globalThis.String(object.protocolName) : undefined,
      protocolNumber: isSet(object.protocolNumber) ? globalThis.Number(object.protocolNumber) : undefined,
      cidrBlocks: isSet(object.cidrBlocks) ? CidrBlocks.fromJSON(object.cidrBlocks) : undefined,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : undefined,
      predefinedTarget: isSet(object.predefinedTarget) ? globalThis.String(object.predefinedTarget) : undefined,
    };
  },

  toJSON(message: SecurityGroupRuleSpec): unknown {
    const obj: any = {};
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
    if (message.direction !== 0) {
      obj.direction = securityGroupRule_DirectionToJSON(message.direction);
    }
    if (message.ports !== undefined) {
      obj.ports = PortRange.toJSON(message.ports);
    }
    if (message.protocolName !== undefined) {
      obj.protocolName = message.protocolName;
    }
    if (message.protocolNumber !== undefined) {
      obj.protocolNumber = Math.round(message.protocolNumber);
    }
    if (message.cidrBlocks !== undefined) {
      obj.cidrBlocks = CidrBlocks.toJSON(message.cidrBlocks);
    }
    if (message.securityGroupId !== undefined) {
      obj.securityGroupId = message.securityGroupId;
    }
    if (message.predefinedTarget !== undefined) {
      obj.predefinedTarget = message.predefinedTarget;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SecurityGroupRuleSpec>, I>>(base?: I): SecurityGroupRuleSpec {
    return SecurityGroupRuleSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SecurityGroupRuleSpec>, I>>(object: I): SecurityGroupRuleSpec {
    const message = createBaseSecurityGroupRuleSpec();
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.direction = object.direction ?? 0;
    message.ports = (object.ports !== undefined && object.ports !== null)
      ? PortRange.fromPartial(object.ports)
      : undefined;
    message.protocolName = object.protocolName ?? undefined;
    message.protocolNumber = object.protocolNumber ?? undefined;
    message.cidrBlocks = (object.cidrBlocks !== undefined && object.cidrBlocks !== null)
      ? CidrBlocks.fromPartial(object.cidrBlocks)
      : undefined;
    message.securityGroupId = object.securityGroupId ?? undefined;
    message.predefinedTarget = object.predefinedTarget ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SecurityGroupRuleSpec.$type, SecurityGroupRuleSpec);

function createBaseSecurityGroupRuleSpec_LabelsEntry(): SecurityGroupRuleSpec_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry", key: "", value: "" };
}

export const SecurityGroupRuleSpec_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry" as const,

  encode(message: SecurityGroupRuleSpec_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityGroupRuleSpec_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityGroupRuleSpec_LabelsEntry();
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

  fromJSON(object: any): SecurityGroupRuleSpec_LabelsEntry {
    return {
      $type: SecurityGroupRuleSpec_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: SecurityGroupRuleSpec_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SecurityGroupRuleSpec_LabelsEntry>, I>>(
    base?: I,
  ): SecurityGroupRuleSpec_LabelsEntry {
    return SecurityGroupRuleSpec_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SecurityGroupRuleSpec_LabelsEntry>, I>>(
    object: I,
  ): SecurityGroupRuleSpec_LabelsEntry {
    const message = createBaseSecurityGroupRuleSpec_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(SecurityGroupRuleSpec_LabelsEntry.$type, SecurityGroupRuleSpec_LabelsEntry);

function createBaseCreateSecurityGroupMetadata(): CreateSecurityGroupMetadata {
  return { $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata", securityGroupId: "" };
}

export const CreateSecurityGroupMetadata = {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata" as const,

  encode(message: CreateSecurityGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSecurityGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSecurityGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSecurityGroupMetadata {
    return {
      $type: CreateSecurityGroupMetadata.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
    };
  },

  toJSON(message: CreateSecurityGroupMetadata): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSecurityGroupMetadata>, I>>(base?: I): CreateSecurityGroupMetadata {
    return CreateSecurityGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSecurityGroupMetadata>, I>>(object: I): CreateSecurityGroupMetadata {
    const message = createBaseCreateSecurityGroupMetadata();
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSecurityGroupMetadata.$type, CreateSecurityGroupMetadata);

function createBaseUpdateSecurityGroupRequest(): UpdateSecurityGroupRequest {
  return {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest",
    securityGroupId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    ruleSpecs: [],
  };
}

export const UpdateSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest" as const,

  encode(message: UpdateSecurityGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
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
      UpdateSecurityGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    for (const v of message.ruleSpecs) {
      SecurityGroupRuleSpec.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecurityGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
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

          const entry5 = UpdateSecurityGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.ruleSpecs.push(SecurityGroupRuleSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSecurityGroupRequest {
    return {
      $type: UpdateSecurityGroupRequest.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      ruleSpecs: globalThis.Array.isArray(object?.ruleSpecs)
        ? object.ruleSpecs.map((e: any) => SecurityGroupRuleSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateSecurityGroupRequest): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
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
    if (message.ruleSpecs?.length) {
      obj.ruleSpecs = message.ruleSpecs.map((e) => SecurityGroupRuleSpec.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSecurityGroupRequest>, I>>(base?: I): UpdateSecurityGroupRequest {
    return UpdateSecurityGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRequest>, I>>(object: I): UpdateSecurityGroupRequest {
    const message = createBaseUpdateSecurityGroupRequest();
    message.securityGroupId = object.securityGroupId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.ruleSpecs = object.ruleSpecs?.map((e) => SecurityGroupRuleSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateSecurityGroupRequest.$type, UpdateSecurityGroupRequest);

function createBaseUpdateSecurityGroupRequest_LabelsEntry(): UpdateSecurityGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateSecurityGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry" as const,

  encode(message: UpdateSecurityGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecurityGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecurityGroupRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateSecurityGroupRequest_LabelsEntry {
    return {
      $type: UpdateSecurityGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateSecurityGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSecurityGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateSecurityGroupRequest_LabelsEntry {
    return UpdateSecurityGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateSecurityGroupRequest_LabelsEntry {
    const message = createBaseUpdateSecurityGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSecurityGroupRequest_LabelsEntry.$type, UpdateSecurityGroupRequest_LabelsEntry);

function createBaseUpdateSecurityGroupMetadata(): UpdateSecurityGroupMetadata {
  return { $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata", securityGroupId: "", addedRuleIds: [] };
}

export const UpdateSecurityGroupMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata" as const,

  encode(message: UpdateSecurityGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    for (const v of message.addedRuleIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecurityGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecurityGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.addedRuleIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSecurityGroupMetadata {
    return {
      $type: UpdateSecurityGroupMetadata.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
      addedRuleIds: globalThis.Array.isArray(object?.addedRuleIds)
        ? object.addedRuleIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: UpdateSecurityGroupMetadata): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    if (message.addedRuleIds?.length) {
      obj.addedRuleIds = message.addedRuleIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSecurityGroupMetadata>, I>>(base?: I): UpdateSecurityGroupMetadata {
    return UpdateSecurityGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupMetadata>, I>>(object: I): UpdateSecurityGroupMetadata {
    const message = createBaseUpdateSecurityGroupMetadata();
    message.securityGroupId = object.securityGroupId ?? "";
    message.addedRuleIds = object.addedRuleIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateSecurityGroupMetadata.$type, UpdateSecurityGroupMetadata);

function createBaseUpdateSecurityGroupRulesRequest(): UpdateSecurityGroupRulesRequest {
  return {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest",
    securityGroupId: "",
    deletionRuleIds: [],
    additionRuleSpecs: [],
  };
}

export const UpdateSecurityGroupRulesRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest" as const,

  encode(message: UpdateSecurityGroupRulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    for (const v of message.deletionRuleIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.additionRuleSpecs) {
      SecurityGroupRuleSpec.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecurityGroupRulesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecurityGroupRulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deletionRuleIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.additionRuleSpecs.push(SecurityGroupRuleSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSecurityGroupRulesRequest {
    return {
      $type: UpdateSecurityGroupRulesRequest.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
      deletionRuleIds: globalThis.Array.isArray(object?.deletionRuleIds)
        ? object.deletionRuleIds.map((e: any) => globalThis.String(e))
        : [],
      additionRuleSpecs: globalThis.Array.isArray(object?.additionRuleSpecs)
        ? object.additionRuleSpecs.map((e: any) => SecurityGroupRuleSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateSecurityGroupRulesRequest): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    if (message.deletionRuleIds?.length) {
      obj.deletionRuleIds = message.deletionRuleIds;
    }
    if (message.additionRuleSpecs?.length) {
      obj.additionRuleSpecs = message.additionRuleSpecs.map((e) => SecurityGroupRuleSpec.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSecurityGroupRulesRequest>, I>>(base?: I): UpdateSecurityGroupRulesRequest {
    return UpdateSecurityGroupRulesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRulesRequest>, I>>(
    object: I,
  ): UpdateSecurityGroupRulesRequest {
    const message = createBaseUpdateSecurityGroupRulesRequest();
    message.securityGroupId = object.securityGroupId ?? "";
    message.deletionRuleIds = object.deletionRuleIds?.map((e) => e) || [];
    message.additionRuleSpecs = object.additionRuleSpecs?.map((e) => SecurityGroupRuleSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateSecurityGroupRulesRequest.$type, UpdateSecurityGroupRulesRequest);

function createBaseUpdateSecurityGroupRuleRequest(): UpdateSecurityGroupRuleRequest {
  return {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest",
    securityGroupId: "",
    ruleId: "",
    updateMask: undefined,
    description: "",
    labels: {},
  };
}

export const UpdateSecurityGroupRuleRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest" as const,

  encode(message: UpdateSecurityGroupRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    if (message.ruleId !== "") {
      writer.uint32(18).string(message.ruleId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateSecurityGroupRuleRequest_LabelsEntry.encode({
        $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecurityGroupRuleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecurityGroupRuleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ruleId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
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

          const entry5 = UpdateSecurityGroupRuleRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateSecurityGroupRuleRequest {
    return {
      $type: UpdateSecurityGroupRuleRequest.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
      ruleId: isSet(object.ruleId) ? globalThis.String(object.ruleId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpdateSecurityGroupRuleRequest): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    if (message.ruleId !== "") {
      obj.ruleId = message.ruleId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
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

  create<I extends Exact<DeepPartial<UpdateSecurityGroupRuleRequest>, I>>(base?: I): UpdateSecurityGroupRuleRequest {
    return UpdateSecurityGroupRuleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRuleRequest>, I>>(
    object: I,
  ): UpdateSecurityGroupRuleRequest {
    const message = createBaseUpdateSecurityGroupRuleRequest();
    message.securityGroupId = object.securityGroupId ?? "";
    message.ruleId = object.ruleId ?? "";
    message.updateMask = object.updateMask ?? undefined;
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

messageTypeRegistry.set(UpdateSecurityGroupRuleRequest.$type, UpdateSecurityGroupRuleRequest);

function createBaseUpdateSecurityGroupRuleRequest_LabelsEntry(): UpdateSecurityGroupRuleRequest_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateSecurityGroupRuleRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry" as const,

  encode(message: UpdateSecurityGroupRuleRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecurityGroupRuleRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecurityGroupRuleRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateSecurityGroupRuleRequest_LabelsEntry {
    return {
      $type: UpdateSecurityGroupRuleRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateSecurityGroupRuleRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSecurityGroupRuleRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateSecurityGroupRuleRequest_LabelsEntry {
    return UpdateSecurityGroupRuleRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRuleRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateSecurityGroupRuleRequest_LabelsEntry {
    const message = createBaseUpdateSecurityGroupRuleRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSecurityGroupRuleRequest_LabelsEntry.$type, UpdateSecurityGroupRuleRequest_LabelsEntry);

function createBaseUpdateSecurityGroupRuleMetadata(): UpdateSecurityGroupRuleMetadata {
  return { $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata", securityGroupId: "", ruleId: "" };
}

export const UpdateSecurityGroupRuleMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata" as const,

  encode(message: UpdateSecurityGroupRuleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    if (message.ruleId !== "") {
      writer.uint32(18).string(message.ruleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecurityGroupRuleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecurityGroupRuleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ruleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSecurityGroupRuleMetadata {
    return {
      $type: UpdateSecurityGroupRuleMetadata.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
      ruleId: isSet(object.ruleId) ? globalThis.String(object.ruleId) : "",
    };
  },

  toJSON(message: UpdateSecurityGroupRuleMetadata): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    if (message.ruleId !== "") {
      obj.ruleId = message.ruleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSecurityGroupRuleMetadata>, I>>(base?: I): UpdateSecurityGroupRuleMetadata {
    return UpdateSecurityGroupRuleMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRuleMetadata>, I>>(
    object: I,
  ): UpdateSecurityGroupRuleMetadata {
    const message = createBaseUpdateSecurityGroupRuleMetadata();
    message.securityGroupId = object.securityGroupId ?? "";
    message.ruleId = object.ruleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSecurityGroupRuleMetadata.$type, UpdateSecurityGroupRuleMetadata);

function createBaseDeleteSecurityGroupRequest(): DeleteSecurityGroupRequest {
  return { $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest", securityGroupId: "" };
}

export const DeleteSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest" as const,

  encode(message: DeleteSecurityGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSecurityGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSecurityGroupRequest {
    return {
      $type: DeleteSecurityGroupRequest.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
    };
  },

  toJSON(message: DeleteSecurityGroupRequest): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSecurityGroupRequest>, I>>(base?: I): DeleteSecurityGroupRequest {
    return DeleteSecurityGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSecurityGroupRequest>, I>>(object: I): DeleteSecurityGroupRequest {
    const message = createBaseDeleteSecurityGroupRequest();
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSecurityGroupRequest.$type, DeleteSecurityGroupRequest);

function createBaseDeleteSecurityGroupMetadata(): DeleteSecurityGroupMetadata {
  return { $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata", securityGroupId: "" };
}

export const DeleteSecurityGroupMetadata = {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata" as const,

  encode(message: DeleteSecurityGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecurityGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSecurityGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSecurityGroupMetadata {
    return {
      $type: DeleteSecurityGroupMetadata.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
    };
  },

  toJSON(message: DeleteSecurityGroupMetadata): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSecurityGroupMetadata>, I>>(base?: I): DeleteSecurityGroupMetadata {
    return DeleteSecurityGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSecurityGroupMetadata>, I>>(object: I): DeleteSecurityGroupMetadata {
    const message = createBaseDeleteSecurityGroupMetadata();
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSecurityGroupMetadata.$type, DeleteSecurityGroupMetadata);

function createBaseListSecurityGroupOperationsRequest(): ListSecurityGroupOperationsRequest {
  return {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest",
    securityGroupId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListSecurityGroupOperationsRequest = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest" as const,

  encode(message: ListSecurityGroupOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecurityGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecurityGroupOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
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

  fromJSON(object: any): ListSecurityGroupOperationsRequest {
    return {
      $type: ListSecurityGroupOperationsRequest.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSecurityGroupOperationsRequest): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSecurityGroupOperationsRequest>, I>>(
    base?: I,
  ): ListSecurityGroupOperationsRequest {
    return ListSecurityGroupOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSecurityGroupOperationsRequest>, I>>(
    object: I,
  ): ListSecurityGroupOperationsRequest {
    const message = createBaseListSecurityGroupOperationsRequest();
    message.securityGroupId = object.securityGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecurityGroupOperationsRequest.$type, ListSecurityGroupOperationsRequest);

function createBaseListSecurityGroupOperationsResponse(): ListSecurityGroupOperationsResponse {
  return { $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListSecurityGroupOperationsResponse = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse" as const,

  encode(message: ListSecurityGroupOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecurityGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecurityGroupOperationsResponse();
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

  fromJSON(object: any): ListSecurityGroupOperationsResponse {
    return {
      $type: ListSecurityGroupOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSecurityGroupOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSecurityGroupOperationsResponse>, I>>(
    base?: I,
  ): ListSecurityGroupOperationsResponse {
    return ListSecurityGroupOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSecurityGroupOperationsResponse>, I>>(
    object: I,
  ): ListSecurityGroupOperationsResponse {
    const message = createBaseListSecurityGroupOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecurityGroupOperationsResponse.$type, ListSecurityGroupOperationsResponse);

function createBaseMoveSecurityGroupRequest(): MoveSecurityGroupRequest {
  return { $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest", securityGroupId: "", destinationFolderId: "" };
}

export const MoveSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest" as const,

  encode(message: MoveSecurityGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveSecurityGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
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

  fromJSON(object: any): MoveSecurityGroupRequest {
    return {
      $type: MoveSecurityGroupRequest.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveSecurityGroupRequest): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveSecurityGroupRequest>, I>>(base?: I): MoveSecurityGroupRequest {
    return MoveSecurityGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveSecurityGroupRequest>, I>>(object: I): MoveSecurityGroupRequest {
    const message = createBaseMoveSecurityGroupRequest();
    message.securityGroupId = object.securityGroupId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveSecurityGroupRequest.$type, MoveSecurityGroupRequest);

function createBaseMoveSecurityGroupMetadata(): MoveSecurityGroupMetadata {
  return { $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata", securityGroupId: "" };
}

export const MoveSecurityGroupMetadata = {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata" as const,

  encode(message: MoveSecurityGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveSecurityGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveSecurityGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveSecurityGroupMetadata {
    return {
      $type: MoveSecurityGroupMetadata.$type,
      securityGroupId: isSet(object.securityGroupId) ? globalThis.String(object.securityGroupId) : "",
    };
  },

  toJSON(message: MoveSecurityGroupMetadata): unknown {
    const obj: any = {};
    if (message.securityGroupId !== "") {
      obj.securityGroupId = message.securityGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveSecurityGroupMetadata>, I>>(base?: I): MoveSecurityGroupMetadata {
    return MoveSecurityGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveSecurityGroupMetadata>, I>>(object: I): MoveSecurityGroupMetadata {
    const message = createBaseMoveSecurityGroupMetadata();
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveSecurityGroupMetadata.$type, MoveSecurityGroupMetadata);

export type SecurityGroupServiceService = typeof SecurityGroupServiceService;
export const SecurityGroupServiceService = {
  get: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSecurityGroupRequest) => Buffer.from(GetSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSecurityGroupRequest.decode(value),
    responseSerialize: (value: SecurityGroup) => Buffer.from(SecurityGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SecurityGroup.decode(value),
  },
  list: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSecurityGroupsRequest) =>
      Buffer.from(ListSecurityGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSecurityGroupsRequest.decode(value),
    responseSerialize: (value: ListSecurityGroupsResponse) =>
      Buffer.from(ListSecurityGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSecurityGroupsResponse.decode(value),
  },
  create: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSecurityGroupRequest) =>
      Buffer.from(CreateSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSecurityGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  update: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSecurityGroupRequest) =>
      Buffer.from(UpdateSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSecurityGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  updateRules: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSecurityGroupRulesRequest) =>
      Buffer.from(UpdateSecurityGroupRulesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSecurityGroupRulesRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** update rule description or labels */
  updateRule: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSecurityGroupRuleRequest) =>
      Buffer.from(UpdateSecurityGroupRuleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSecurityGroupRuleRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  delete: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSecurityGroupRequest) =>
      Buffer.from(DeleteSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSecurityGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  move: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveSecurityGroupRequest) => Buffer.from(MoveSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveSecurityGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  listOperations: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSecurityGroupOperationsRequest) =>
      Buffer.from(ListSecurityGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSecurityGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListSecurityGroupOperationsResponse) =>
      Buffer.from(ListSecurityGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSecurityGroupOperationsResponse.decode(value),
  },
} as const;

export interface SecurityGroupServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetSecurityGroupRequest, SecurityGroup>;
  list: handleUnaryCall<ListSecurityGroupsRequest, ListSecurityGroupsResponse>;
  create: handleUnaryCall<CreateSecurityGroupRequest, Operation>;
  update: handleUnaryCall<UpdateSecurityGroupRequest, Operation>;
  updateRules: handleUnaryCall<UpdateSecurityGroupRulesRequest, Operation>;
  /** update rule description or labels */
  updateRule: handleUnaryCall<UpdateSecurityGroupRuleRequest, Operation>;
  delete: handleUnaryCall<DeleteSecurityGroupRequest, Operation>;
  move: handleUnaryCall<MoveSecurityGroupRequest, Operation>;
  listOperations: handleUnaryCall<ListSecurityGroupOperationsRequest, ListSecurityGroupOperationsResponse>;
}

export interface SecurityGroupServiceClient extends Client {
  get(
    request: GetSecurityGroupRequest,
    callback: (error: ServiceError | null, response: SecurityGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SecurityGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SecurityGroup) => void,
  ): ClientUnaryCall;
  list(
    request: ListSecurityGroupsRequest,
    callback: (error: ServiceError | null, response: ListSecurityGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSecurityGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSecurityGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSecurityGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSecurityGroupsResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSecurityGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSecurityGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateRules(
    request: UpdateSecurityGroupRulesRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateRules(
    request: UpdateSecurityGroupRulesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateRules(
    request: UpdateSecurityGroupRulesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** update rule description or labels */
  updateRule(
    request: UpdateSecurityGroupRuleRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateRule(
    request: UpdateSecurityGroupRuleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateRule(
    request: UpdateSecurityGroupRuleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSecurityGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveSecurityGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSecurityGroupOperationsRequest,
    callback: (error: ServiceError | null, response: ListSecurityGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSecurityGroupOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSecurityGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSecurityGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSecurityGroupOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const SecurityGroupServiceClient = makeGenericClientConstructor(
  SecurityGroupServiceService,
  "yandex.cloud.vpc.v1.SecurityGroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SecurityGroupServiceClient;
  service: typeof SecurityGroupServiceService;
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
