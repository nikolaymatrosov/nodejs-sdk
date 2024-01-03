/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import {
  LogLevel_Level,
  logLevel_LevelFromJSON,
  logLevel_LevelToJSON,
} from "@yandex-cloud/logging/dist/yandex/cloud/logging/v1/log_entry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.serverless.apigateway.v1";

export interface ApiGateway {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway";
  /** ID of the API gateway. Generated at creation time. */
  id: string;
  /** ID of the folder that the API gateway belongs to. */
  folderId: string;
  /** Creation timestamp for the API-gateway. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the API gateway. The name is unique within the folder. */
  name: string;
  /** Description of the API gateway. */
  description: string;
  /** API gateway labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Status of the API gateway. */
  status: ApiGateway_Status;
  /** Default domain for the API gateway. Generated at creation time. */
  domain: string;
  /** ID of the log group for the API gateway. */
  logGroupId: string;
  /** List of domains attached to API gateway. */
  attachedDomains: AttachedDomain[];
  /** Network access. If specified the gateway will be attached to specified network/subnet(s). */
  connectivity?:
    | Connectivity
    | undefined;
  /** Options for logging from the API gateway. */
  logOptions?:
    | LogOptions
    | undefined;
  /** Values of variables defined in the specification. */
  variables: { [key: string]: VariableInput };
  /** Canary release of the gateway. */
  canary?: Canary | undefined;
}

export enum ApiGateway_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - API gateway is being created. */
  CREATING = 1,
  /** ACTIVE - API gateway is ready for use. */
  ACTIVE = 2,
  /** DELETING - API gateway is being deleted. */
  DELETING = 3,
  /** ERROR - API gateway failed. The only allowed action is delete. */
  ERROR = 4,
  /** UPDATING - API gateway is being updated. */
  UPDATING = 5,
  UNRECOGNIZED = -1,
}

export function apiGateway_StatusFromJSON(object: any): ApiGateway_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return ApiGateway_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return ApiGateway_Status.CREATING;
    case 2:
    case "ACTIVE":
      return ApiGateway_Status.ACTIVE;
    case 3:
    case "DELETING":
      return ApiGateway_Status.DELETING;
    case 4:
    case "ERROR":
      return ApiGateway_Status.ERROR;
    case 5:
    case "UPDATING":
      return ApiGateway_Status.UPDATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApiGateway_Status.UNRECOGNIZED;
  }
}

export function apiGateway_StatusToJSON(object: ApiGateway_Status): string {
  switch (object) {
    case ApiGateway_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case ApiGateway_Status.CREATING:
      return "CREATING";
    case ApiGateway_Status.ACTIVE:
      return "ACTIVE";
    case ApiGateway_Status.DELETING:
      return "DELETING";
    case ApiGateway_Status.ERROR:
      return "ERROR";
    case ApiGateway_Status.UPDATING:
      return "UPDATING";
    case ApiGateway_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ApiGateway_LabelsEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry";
  key: string;
  value: string;
}

export interface ApiGateway_VariablesEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry";
  key: string;
  value?: VariableInput | undefined;
}

export interface AttachedDomain {
  $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain";
  /** ID of the domain. */
  domainId: string;
  /** ID of the domain certificate. */
  certificateId: string;
  /** Enabling flag. */
  enabled: boolean;
  /** Name of the domain. */
  domain: string;
}

/** Gateway connectivity specification. */
export interface Connectivity {
  $type: "yandex.cloud.serverless.apigateway.v1.Connectivity";
  /**
   * Network the gateway will have access to.
   * It's essential to specify network with subnets in all availability zones.
   */
  networkId: string;
  /**
   * Complete list of subnets (from the same network) the gateway can be attached to.
   * It's essential to specify at least one subnet for each availability zones.
   */
  subnetId: string[];
}

export interface LogOptions {
  $type: "yandex.cloud.serverless.apigateway.v1.LogOptions";
  /** Is logging from API gateway disabled. */
  disabled: boolean;
  /** Entry should be written to log group resolved by ID. */
  logGroupId?:
    | string
    | undefined;
  /** Entry should be written to default log group for specified folder. */
  folderId?:
    | string
    | undefined;
  /**
   * Minimum log entry level.
   *
   * See [LogLevel.Level] for details.
   */
  minLevel: LogLevel_Level;
}

export interface Canary {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary";
  /** It describes percentage of requests, which will be processed by canary. */
  weight: number;
  /** Values specification variables, associated with canary. */
  variables: { [key: string]: VariableInput };
}

export interface Canary_VariablesEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry";
  key: string;
  value?: VariableInput | undefined;
}

export interface VariableInput {
  $type: "yandex.cloud.serverless.apigateway.v1.VariableInput";
  stringValue?: string | undefined;
  intValue?: number | undefined;
  doubleValue?: number | undefined;
  boolValue?: boolean | undefined;
}

function createBaseApiGateway(): ApiGateway {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
    domain: "",
    logGroupId: "",
    attachedDomains: [],
    connectivity: undefined,
    logOptions: undefined,
    variables: {},
    canary: undefined,
  };
}

export const ApiGateway = {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway" as const,

  encode(message: ApiGateway, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ApiGateway_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(58).fork()).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.domain !== "") {
      writer.uint32(74).string(message.domain);
    }
    if (message.logGroupId !== "") {
      writer.uint32(82).string(message.logGroupId);
    }
    for (const v of message.attachedDomains) {
      AttachedDomain.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(message.connectivity, writer.uint32(98).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(106).fork()).ldelim();
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      ApiGateway_VariablesEntry.encode({
        $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry",
        key: key as any,
        value,
      }, writer.uint32(114).fork()).ldelim();
    });
    if (message.canary !== undefined) {
      Canary.encode(message.canary, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiGateway {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiGateway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = ApiGateway_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.domain = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.attachedDomains.push(AttachedDomain.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.connectivity = Connectivity.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          const entry14 = ApiGateway_VariablesEntry.decode(reader, reader.uint32());
          if (entry14.value !== undefined) {
            message.variables[entry14.key] = entry14.value;
          }
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.canary = Canary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApiGateway {
    return {
      $type: ApiGateway.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      status: isSet(object.status) ? apiGateway_StatusFromJSON(object.status) : 0,
      domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      attachedDomains: globalThis.Array.isArray(object?.attachedDomains)
        ? object.attachedDomains.map((e: any) => AttachedDomain.fromJSON(e))
        : [],
      connectivity: isSet(object.connectivity) ? Connectivity.fromJSON(object.connectivity) : undefined,
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
      variables: isObject(object.variables)
        ? Object.entries(object.variables).reduce<{ [key: string]: VariableInput }>((acc, [key, value]) => {
          acc[key] = VariableInput.fromJSON(value);
          return acc;
        }, {})
        : {},
      canary: isSet(object.canary) ? Canary.fromJSON(object.canary) : undefined,
    };
  },

  toJSON(message: ApiGateway): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
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
    if (message.status !== 0) {
      obj.status = apiGateway_StatusToJSON(message.status);
    }
    if (message.domain !== "") {
      obj.domain = message.domain;
    }
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.attachedDomains?.length) {
      obj.attachedDomains = message.attachedDomains.map((e) => AttachedDomain.toJSON(e));
    }
    if (message.connectivity !== undefined) {
      obj.connectivity = Connectivity.toJSON(message.connectivity);
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    if (message.variables) {
      const entries = Object.entries(message.variables);
      if (entries.length > 0) {
        obj.variables = {};
        entries.forEach(([k, v]) => {
          obj.variables[k] = VariableInput.toJSON(v);
        });
      }
    }
    if (message.canary !== undefined) {
      obj.canary = Canary.toJSON(message.canary);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApiGateway>, I>>(base?: I): ApiGateway {
    return ApiGateway.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApiGateway>, I>>(object: I): ApiGateway {
    const message = createBaseApiGateway();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.status = object.status ?? 0;
    message.domain = object.domain ?? "";
    message.logGroupId = object.logGroupId ?? "";
    message.attachedDomains = object.attachedDomains?.map((e) => AttachedDomain.fromPartial(e)) || [];
    message.connectivity = (object.connectivity !== undefined && object.connectivity !== null)
      ? Connectivity.fromPartial(object.connectivity)
      : undefined;
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    message.variables = Object.entries(object.variables ?? {}).reduce<{ [key: string]: VariableInput }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = VariableInput.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.canary = (object.canary !== undefined && object.canary !== null)
      ? Canary.fromPartial(object.canary)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ApiGateway.$type, ApiGateway);

function createBaseApiGateway_LabelsEntry(): ApiGateway_LabelsEntry {
  return { $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry", key: "", value: "" };
}

export const ApiGateway_LabelsEntry = {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry" as const,

  encode(message: ApiGateway_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiGateway_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiGateway_LabelsEntry();
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

  fromJSON(object: any): ApiGateway_LabelsEntry {
    return {
      $type: ApiGateway_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ApiGateway_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApiGateway_LabelsEntry>, I>>(base?: I): ApiGateway_LabelsEntry {
    return ApiGateway_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApiGateway_LabelsEntry>, I>>(object: I): ApiGateway_LabelsEntry {
    const message = createBaseApiGateway_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(ApiGateway_LabelsEntry.$type, ApiGateway_LabelsEntry);

function createBaseApiGateway_VariablesEntry(): ApiGateway_VariablesEntry {
  return { $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry", key: "", value: undefined };
}

export const ApiGateway_VariablesEntry = {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry" as const,

  encode(message: ApiGateway_VariablesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiGateway_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiGateway_VariablesEntry();
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

          message.value = VariableInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApiGateway_VariablesEntry {
    return {
      $type: ApiGateway_VariablesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? VariableInput.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ApiGateway_VariablesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = VariableInput.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApiGateway_VariablesEntry>, I>>(base?: I): ApiGateway_VariablesEntry {
    return ApiGateway_VariablesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApiGateway_VariablesEntry>, I>>(object: I): ApiGateway_VariablesEntry {
    const message = createBaseApiGateway_VariablesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? VariableInput.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ApiGateway_VariablesEntry.$type, ApiGateway_VariablesEntry);

function createBaseAttachedDomain(): AttachedDomain {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain",
    domainId: "",
    certificateId: "",
    enabled: false,
    domain: "",
  };
}

export const AttachedDomain = {
  $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain" as const,

  encode(message: AttachedDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domainId !== "") {
      writer.uint32(10).string(message.domainId);
    }
    if (message.certificateId !== "") {
      writer.uint32(18).string(message.certificateId);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.domain !== "") {
      writer.uint32(42).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedDomain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachedDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.domainId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.certificateId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.domain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachedDomain {
    return {
      $type: AttachedDomain.$type,
      domainId: isSet(object.domainId) ? globalThis.String(object.domainId) : "",
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
    };
  },

  toJSON(message: AttachedDomain): unknown {
    const obj: any = {};
    if (message.domainId !== "") {
      obj.domainId = message.domainId;
    }
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.domain !== "") {
      obj.domain = message.domain;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachedDomain>, I>>(base?: I): AttachedDomain {
    return AttachedDomain.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttachedDomain>, I>>(object: I): AttachedDomain {
    const message = createBaseAttachedDomain();
    message.domainId = object.domainId ?? "";
    message.certificateId = object.certificateId ?? "";
    message.enabled = object.enabled ?? false;
    message.domain = object.domain ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedDomain.$type, AttachedDomain);

function createBaseConnectivity(): Connectivity {
  return { $type: "yandex.cloud.serverless.apigateway.v1.Connectivity", networkId: "", subnetId: [] };
}

export const Connectivity = {
  $type: "yandex.cloud.serverless.apigateway.v1.Connectivity" as const,

  encode(message: Connectivity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    for (const v of message.subnetId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connectivity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnetId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Connectivity {
    return {
      $type: Connectivity.$type,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      subnetId: globalThis.Array.isArray(object?.subnetId) ? object.subnetId.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Connectivity): unknown {
    const obj: any = {};
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.subnetId?.length) {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Connectivity>, I>>(base?: I): Connectivity {
    return Connectivity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Connectivity>, I>>(object: I): Connectivity {
    const message = createBaseConnectivity();
    message.networkId = object.networkId ?? "";
    message.subnetId = object.subnetId?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Connectivity.$type, Connectivity);

function createBaseLogOptions(): LogOptions {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.LogOptions",
    disabled: false,
    logGroupId: undefined,
    folderId: undefined,
    minLevel: 0,
  };
}

export const LogOptions = {
  $type: "yandex.cloud.serverless.apigateway.v1.LogOptions" as const,

  encode(message: LogOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disabled === true) {
      writer.uint32(8).bool(message.disabled);
    }
    if (message.logGroupId !== undefined) {
      writer.uint32(18).string(message.logGroupId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(26).string(message.folderId);
    }
    if (message.minLevel !== 0) {
      writer.uint32(32).int32(message.minLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.disabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.minLevel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogOptions {
    return {
      $type: LogOptions.$type,
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      minLevel: isSet(object.minLevel) ? logLevel_LevelFromJSON(object.minLevel) : 0,
    };
  },

  toJSON(message: LogOptions): unknown {
    const obj: any = {};
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    if (message.logGroupId !== undefined) {
      obj.logGroupId = message.logGroupId;
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.minLevel !== 0) {
      obj.minLevel = logLevel_LevelToJSON(message.minLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogOptions>, I>>(base?: I): LogOptions {
    return LogOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(object: I): LogOptions {
    const message = createBaseLogOptions();
    message.disabled = object.disabled ?? false;
    message.logGroupId = object.logGroupId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    message.minLevel = object.minLevel ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LogOptions.$type, LogOptions);

function createBaseCanary(): Canary {
  return { $type: "yandex.cloud.serverless.apigateway.v1.Canary", weight: 0, variables: {} };
}

export const Canary = {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary" as const,

  encode(message: Canary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.weight !== 0) {
      writer.uint32(8).int64(message.weight);
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      Canary_VariablesEntry.encode({
        $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry",
        key: key as any,
        value,
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Canary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.weight = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = Canary_VariablesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.variables[entry2.key] = entry2.value;
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

  fromJSON(object: any): Canary {
    return {
      $type: Canary.$type,
      weight: isSet(object.weight) ? globalThis.Number(object.weight) : 0,
      variables: isObject(object.variables)
        ? Object.entries(object.variables).reduce<{ [key: string]: VariableInput }>((acc, [key, value]) => {
          acc[key] = VariableInput.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Canary): unknown {
    const obj: any = {};
    if (message.weight !== 0) {
      obj.weight = Math.round(message.weight);
    }
    if (message.variables) {
      const entries = Object.entries(message.variables);
      if (entries.length > 0) {
        obj.variables = {};
        entries.forEach(([k, v]) => {
          obj.variables[k] = VariableInput.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Canary>, I>>(base?: I): Canary {
    return Canary.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Canary>, I>>(object: I): Canary {
    const message = createBaseCanary();
    message.weight = object.weight ?? 0;
    message.variables = Object.entries(object.variables ?? {}).reduce<{ [key: string]: VariableInput }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = VariableInput.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

messageTypeRegistry.set(Canary.$type, Canary);

function createBaseCanary_VariablesEntry(): Canary_VariablesEntry {
  return { $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry", key: "", value: undefined };
}

export const Canary_VariablesEntry = {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry" as const,

  encode(message: Canary_VariablesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Canary_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanary_VariablesEntry();
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

          message.value = VariableInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Canary_VariablesEntry {
    return {
      $type: Canary_VariablesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? VariableInput.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Canary_VariablesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = VariableInput.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Canary_VariablesEntry>, I>>(base?: I): Canary_VariablesEntry {
    return Canary_VariablesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Canary_VariablesEntry>, I>>(object: I): Canary_VariablesEntry {
    const message = createBaseCanary_VariablesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? VariableInput.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Canary_VariablesEntry.$type, Canary_VariablesEntry);

function createBaseVariableInput(): VariableInput {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.VariableInput",
    stringValue: undefined,
    intValue: undefined,
    doubleValue: undefined,
    boolValue: undefined,
  };
}

export const VariableInput = {
  $type: "yandex.cloud.serverless.apigateway.v1.VariableInput" as const,

  encode(message: VariableInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stringValue !== undefined) {
      writer.uint32(10).string(message.stringValue);
    }
    if (message.intValue !== undefined) {
      writer.uint32(16).int64(message.intValue);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(25).double(message.doubleValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(32).bool(message.boolValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VariableInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVariableInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stringValue = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.intValue = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.doubleValue = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.boolValue = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VariableInput {
    return {
      $type: VariableInput.$type,
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
      intValue: isSet(object.intValue) ? globalThis.Number(object.intValue) : undefined,
      doubleValue: isSet(object.doubleValue) ? globalThis.Number(object.doubleValue) : undefined,
      boolValue: isSet(object.boolValue) ? globalThis.Boolean(object.boolValue) : undefined,
    };
  },

  toJSON(message: VariableInput): unknown {
    const obj: any = {};
    if (message.stringValue !== undefined) {
      obj.stringValue = message.stringValue;
    }
    if (message.intValue !== undefined) {
      obj.intValue = Math.round(message.intValue);
    }
    if (message.doubleValue !== undefined) {
      obj.doubleValue = message.doubleValue;
    }
    if (message.boolValue !== undefined) {
      obj.boolValue = message.boolValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VariableInput>, I>>(base?: I): VariableInput {
    return VariableInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VariableInput>, I>>(object: I): VariableInput {
    const message = createBaseVariableInput();
    message.stringValue = object.stringValue ?? undefined;
    message.intValue = object.intValue ?? undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(VariableInput.$type, VariableInput);

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
  const seconds = date.getTime() / 1_000;
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
