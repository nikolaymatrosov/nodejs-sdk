/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "yandex.cloud.access";

export enum AccessBindingAction {
  ACCESS_BINDING_ACTION_UNSPECIFIED = 0,
  /** ADD - Addition of an access binding. */
  ADD = 1,
  /** REMOVE - Removal of an access binding. */
  REMOVE = 2,
  UNRECOGNIZED = -1,
}

export function accessBindingActionFromJSON(object: any): AccessBindingAction {
  switch (object) {
    case 0:
    case "ACCESS_BINDING_ACTION_UNSPECIFIED":
      return AccessBindingAction.ACCESS_BINDING_ACTION_UNSPECIFIED;
    case 1:
    case "ADD":
      return AccessBindingAction.ADD;
    case 2:
    case "REMOVE":
      return AccessBindingAction.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessBindingAction.UNRECOGNIZED;
  }
}

export function accessBindingActionToJSON(object: AccessBindingAction): string {
  switch (object) {
    case AccessBindingAction.ACCESS_BINDING_ACTION_UNSPECIFIED:
      return "ACCESS_BINDING_ACTION_UNSPECIFIED";
    case AccessBindingAction.ADD:
      return "ADD";
    case AccessBindingAction.REMOVE:
      return "REMOVE";
    case AccessBindingAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Subject {
  $type: "yandex.cloud.access.Subject";
  /**
   * ID of the subject.
   *
   * It can contain one of the following values:
   * * `allAuthenticatedUsers`: A special system identifier that represents anyone
   *    who is authenticated. It can be used only if the [type] is `system`.
   * * `allUsers`: A special system identifier that represents anyone. No authentication is required.
   *    For example, you don't need to specify the IAM token in an API query.
   * * `<cloud generated id>`: An identifier that represents a user account.
   *    It can be used only if the [type] is `userAccount`, `federatedUser` or `serviceAccount`.
   */
  id: string;
  /**
   * Type of the subject.
   *
   * It can contain one of the following values:
   * * `userAccount`: An account on Yandex or Yandex Connect, added to Yandex Cloud.
   * * `serviceAccount`: A service account. This type represents the [yandex.cloud.iam.v1.ServiceAccount] resource.
   * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
   * * `system`: System group. This type represents several accounts with a common system identifier.
   *
   * For more information, see [Subject to which the role is assigned](/docs/iam/concepts/access-control/#subject).
   */
  type: string;
}

export interface AccessBinding {
  $type: "yandex.cloud.access.AccessBinding";
  /** ID of the [yandex.cloud.iam.v1.Role] that is assigned to the [subject]. */
  roleId: string;
  /**
   * Identity for which access binding is being created.
   * It can represent an account with a unique ID or several accounts with a system identifier.
   */
  subject?: Subject | undefined;
}

export interface ListAccessBindingsRequest {
  $type: "yandex.cloud.access.ListAccessBindingsRequest";
  /**
   * ID of the resource to list access bindings for.
   *
   * To get the resource ID, use a corresponding List request.
   * For example, use the [yandex.cloud.resourcemanager.v1.CloudService.List] request to get the Cloud resource ID.
   */
  resourceId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListAccessBindingsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListAccessBindingsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListAccessBindingsResponse {
  $type: "yandex.cloud.access.ListAccessBindingsResponse";
  /** List of access bindings for the specified resource. */
  accessBindings: AccessBinding[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListAccessBindingsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListAccessBindingsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface SetAccessBindingsRequest {
  $type: "yandex.cloud.access.SetAccessBindingsRequest";
  /**
   * ID of the resource for which access bindings are being set.
   *
   * To get the resource ID, use a corresponding List request.
   */
  resourceId: string;
  /** Access bindings to be set. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings). */
  accessBindings: AccessBinding[];
}

export interface SetAccessBindingsMetadata {
  $type: "yandex.cloud.access.SetAccessBindingsMetadata";
  /** ID of the resource for which access bindings are being set. */
  resourceId: string;
}

export interface UpdateAccessBindingsRequest {
  $type: "yandex.cloud.access.UpdateAccessBindingsRequest";
  /** ID of the resource for which access bindings are being updated. */
  resourceId: string;
  /** Updates to access bindings. */
  accessBindingDeltas: AccessBindingDelta[];
}

export interface UpdateAccessBindingsMetadata {
  $type: "yandex.cloud.access.UpdateAccessBindingsMetadata";
  /** ID of the resource for which access bindings are being updated. */
  resourceId: string;
}

export interface AccessBindingDelta {
  $type: "yandex.cloud.access.AccessBindingDelta";
  /** The action that is being performed on an access binding. */
  action: AccessBindingAction;
  /** Access binding. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings). */
  accessBinding?: AccessBinding | undefined;
}

export interface AccessBindingsOperationResult {
  $type: "yandex.cloud.access.AccessBindingsOperationResult";
  /** Result access binding deltas. */
  effectiveDeltas: AccessBindingDelta[];
}

function createBaseSubject(): Subject {
  return { $type: "yandex.cloud.access.Subject", id: "", type: "" };
}

export const Subject = {
  $type: "yandex.cloud.access.Subject" as const,

  encode(message: Subject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubject();
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

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Subject {
    return {
      $type: Subject.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
    };
  },

  toJSON(message: Subject): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    return obj;
  },

  create(base?: DeepPartial<Subject>): Subject {
    return Subject.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Subject>): Subject {
    const message = createBaseSubject();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

messageTypeRegistry.set(Subject.$type, Subject);

function createBaseAccessBinding(): AccessBinding {
  return { $type: "yandex.cloud.access.AccessBinding", roleId: "", subject: undefined };
}

export const AccessBinding = {
  $type: "yandex.cloud.access.AccessBinding" as const,

  encode(message: AccessBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessBinding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roleId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessBinding {
    return {
      $type: AccessBinding.$type,
      roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: AccessBinding): unknown {
    const obj: any = {};
    if (message.roleId !== "") {
      obj.roleId = message.roleId;
    }
    if (message.subject !== undefined) {
      obj.subject = Subject.toJSON(message.subject);
    }
    return obj;
  },

  create(base?: DeepPartial<AccessBinding>): AccessBinding {
    return AccessBinding.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessBinding>): AccessBinding {
    const message = createBaseAccessBinding();
    message.roleId = object.roleId ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AccessBinding.$type, AccessBinding);

function createBaseListAccessBindingsRequest(): ListAccessBindingsRequest {
  return { $type: "yandex.cloud.access.ListAccessBindingsRequest", resourceId: "", pageSize: 0, pageToken: "" };
}

export const ListAccessBindingsRequest = {
  $type: "yandex.cloud.access.ListAccessBindingsRequest" as const,

  encode(message: ListAccessBindingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessBindingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccessBindingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
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

  fromJSON(object: any): ListAccessBindingsRequest {
    return {
      $type: ListAccessBindingsRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListAccessBindingsRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListAccessBindingsRequest>): ListAccessBindingsRequest {
    return ListAccessBindingsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAccessBindingsRequest>): ListAccessBindingsRequest {
    const message = createBaseListAccessBindingsRequest();
    message.resourceId = object.resourceId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAccessBindingsRequest.$type, ListAccessBindingsRequest);

function createBaseListAccessBindingsResponse(): ListAccessBindingsResponse {
  return { $type: "yandex.cloud.access.ListAccessBindingsResponse", accessBindings: [], nextPageToken: "" };
}

export const ListAccessBindingsResponse = {
  $type: "yandex.cloud.access.ListAccessBindingsResponse" as const,

  encode(message: ListAccessBindingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accessBindings) {
      AccessBinding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessBindingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccessBindingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessBindings.push(AccessBinding.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListAccessBindingsResponse {
    return {
      $type: ListAccessBindingsResponse.$type,
      accessBindings: globalThis.Array.isArray(object?.accessBindings)
        ? object.accessBindings.map((e: any) => AccessBinding.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListAccessBindingsResponse): unknown {
    const obj: any = {};
    if (message.accessBindings?.length) {
      obj.accessBindings = message.accessBindings.map((e) => AccessBinding.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListAccessBindingsResponse>): ListAccessBindingsResponse {
    return ListAccessBindingsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAccessBindingsResponse>): ListAccessBindingsResponse {
    const message = createBaseListAccessBindingsResponse();
    message.accessBindings = object.accessBindings?.map((e) => AccessBinding.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAccessBindingsResponse.$type, ListAccessBindingsResponse);

function createBaseSetAccessBindingsRequest(): SetAccessBindingsRequest {
  return { $type: "yandex.cloud.access.SetAccessBindingsRequest", resourceId: "", accessBindings: [] };
}

export const SetAccessBindingsRequest = {
  $type: "yandex.cloud.access.SetAccessBindingsRequest" as const,

  encode(message: SetAccessBindingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    for (const v of message.accessBindings) {
      AccessBinding.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAccessBindingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAccessBindingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accessBindings.push(AccessBinding.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetAccessBindingsRequest {
    return {
      $type: SetAccessBindingsRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      accessBindings: globalThis.Array.isArray(object?.accessBindings)
        ? object.accessBindings.map((e: any) => AccessBinding.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SetAccessBindingsRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.accessBindings?.length) {
      obj.accessBindings = message.accessBindings.map((e) => AccessBinding.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SetAccessBindingsRequest>): SetAccessBindingsRequest {
    return SetAccessBindingsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetAccessBindingsRequest>): SetAccessBindingsRequest {
    const message = createBaseSetAccessBindingsRequest();
    message.resourceId = object.resourceId ?? "";
    message.accessBindings = object.accessBindings?.map((e) => AccessBinding.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(SetAccessBindingsRequest.$type, SetAccessBindingsRequest);

function createBaseSetAccessBindingsMetadata(): SetAccessBindingsMetadata {
  return { $type: "yandex.cloud.access.SetAccessBindingsMetadata", resourceId: "" };
}

export const SetAccessBindingsMetadata = {
  $type: "yandex.cloud.access.SetAccessBindingsMetadata" as const,

  encode(message: SetAccessBindingsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAccessBindingsMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): SetAccessBindingsMetadata {
    return {
      $type: SetAccessBindingsMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: SetAccessBindingsMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create(base?: DeepPartial<SetAccessBindingsMetadata>): SetAccessBindingsMetadata {
    return SetAccessBindingsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetAccessBindingsMetadata>): SetAccessBindingsMetadata {
    const message = createBaseSetAccessBindingsMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetAccessBindingsMetadata.$type, SetAccessBindingsMetadata);

function createBaseUpdateAccessBindingsRequest(): UpdateAccessBindingsRequest {
  return { $type: "yandex.cloud.access.UpdateAccessBindingsRequest", resourceId: "", accessBindingDeltas: [] };
}

export const UpdateAccessBindingsRequest = {
  $type: "yandex.cloud.access.UpdateAccessBindingsRequest" as const,

  encode(message: UpdateAccessBindingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    for (const v of message.accessBindingDeltas) {
      AccessBindingDelta.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessBindingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccessBindingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accessBindingDeltas.push(AccessBindingDelta.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAccessBindingsRequest {
    return {
      $type: UpdateAccessBindingsRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      accessBindingDeltas: globalThis.Array.isArray(object?.accessBindingDeltas)
        ? object.accessBindingDeltas.map((e: any) => AccessBindingDelta.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateAccessBindingsRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.accessBindingDeltas?.length) {
      obj.accessBindingDeltas = message.accessBindingDeltas.map((e) => AccessBindingDelta.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAccessBindingsRequest>): UpdateAccessBindingsRequest {
    return UpdateAccessBindingsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAccessBindingsRequest>): UpdateAccessBindingsRequest {
    const message = createBaseUpdateAccessBindingsRequest();
    message.resourceId = object.resourceId ?? "";
    message.accessBindingDeltas = object.accessBindingDeltas?.map((e) => AccessBindingDelta.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateAccessBindingsRequest.$type, UpdateAccessBindingsRequest);

function createBaseUpdateAccessBindingsMetadata(): UpdateAccessBindingsMetadata {
  return { $type: "yandex.cloud.access.UpdateAccessBindingsMetadata", resourceId: "" };
}

export const UpdateAccessBindingsMetadata = {
  $type: "yandex.cloud.access.UpdateAccessBindingsMetadata" as const,

  encode(message: UpdateAccessBindingsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccessBindingsMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): UpdateAccessBindingsMetadata {
    return {
      $type: UpdateAccessBindingsMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: UpdateAccessBindingsMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAccessBindingsMetadata>): UpdateAccessBindingsMetadata {
    return UpdateAccessBindingsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAccessBindingsMetadata>): UpdateAccessBindingsMetadata {
    const message = createBaseUpdateAccessBindingsMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateAccessBindingsMetadata.$type, UpdateAccessBindingsMetadata);

function createBaseAccessBindingDelta(): AccessBindingDelta {
  return { $type: "yandex.cloud.access.AccessBindingDelta", action: 0, accessBinding: undefined };
}

export const AccessBindingDelta = {
  $type: "yandex.cloud.access.AccessBindingDelta" as const,

  encode(message: AccessBindingDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.accessBinding !== undefined) {
      AccessBinding.encode(message.accessBinding, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessBindingDelta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessBindingDelta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accessBinding = AccessBinding.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessBindingDelta {
    return {
      $type: AccessBindingDelta.$type,
      action: isSet(object.action) ? accessBindingActionFromJSON(object.action) : 0,
      accessBinding: isSet(object.accessBinding) ? AccessBinding.fromJSON(object.accessBinding) : undefined,
    };
  },

  toJSON(message: AccessBindingDelta): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = accessBindingActionToJSON(message.action);
    }
    if (message.accessBinding !== undefined) {
      obj.accessBinding = AccessBinding.toJSON(message.accessBinding);
    }
    return obj;
  },

  create(base?: DeepPartial<AccessBindingDelta>): AccessBindingDelta {
    return AccessBindingDelta.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessBindingDelta>): AccessBindingDelta {
    const message = createBaseAccessBindingDelta();
    message.action = object.action ?? 0;
    message.accessBinding = (object.accessBinding !== undefined && object.accessBinding !== null)
      ? AccessBinding.fromPartial(object.accessBinding)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AccessBindingDelta.$type, AccessBindingDelta);

function createBaseAccessBindingsOperationResult(): AccessBindingsOperationResult {
  return { $type: "yandex.cloud.access.AccessBindingsOperationResult", effectiveDeltas: [] };
}

export const AccessBindingsOperationResult = {
  $type: "yandex.cloud.access.AccessBindingsOperationResult" as const,

  encode(message: AccessBindingsOperationResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.effectiveDeltas) {
      AccessBindingDelta.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessBindingsOperationResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessBindingsOperationResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveDeltas.push(AccessBindingDelta.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessBindingsOperationResult {
    return {
      $type: AccessBindingsOperationResult.$type,
      effectiveDeltas: globalThis.Array.isArray(object?.effectiveDeltas)
        ? object.effectiveDeltas.map((e: any) => AccessBindingDelta.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccessBindingsOperationResult): unknown {
    const obj: any = {};
    if (message.effectiveDeltas?.length) {
      obj.effectiveDeltas = message.effectiveDeltas.map((e) => AccessBindingDelta.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AccessBindingsOperationResult>): AccessBindingsOperationResult {
    return AccessBindingsOperationResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessBindingsOperationResult>): AccessBindingsOperationResult {
    const message = createBaseAccessBindingsOperationResult();
    message.effectiveDeltas = object.effectiveDeltas?.map((e) => AccessBindingDelta.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AccessBindingsOperationResult.$type, AccessBindingsOperationResult);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
