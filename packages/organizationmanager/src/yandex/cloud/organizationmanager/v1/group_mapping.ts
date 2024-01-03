/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

/** Group mapping represents which external (federated) groups should match which internal (cloud) groups */
export interface GroupMappingItem {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem";
  /** External group id (received from identity provider) */
  externalGroupId: string;
  /** Internal cloud group id */
  internalGroupId: string;
}

/**
 * Group synchronization status for a specific federation
 * Absence of this object for a federation means that there is no group synchronization set of for the federation.
 */
export interface GroupMapping {
  $type: "yandex.cloud.organizationmanager.v1.GroupMapping";
  /** Federation id */
  federationId: string;
  /** Flag to show whether group synchronization should be enabled for this federation. */
  enabled: boolean;
}

function createBaseGroupMappingItem(): GroupMappingItem {
  return { $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem", externalGroupId: "", internalGroupId: "" };
}

export const GroupMappingItem = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem" as const,

  encode(message: GroupMappingItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalGroupId !== "") {
      writer.uint32(10).string(message.externalGroupId);
    }
    if (message.internalGroupId !== "") {
      writer.uint32(18).string(message.internalGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMappingItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMappingItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.internalGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupMappingItem {
    return {
      $type: GroupMappingItem.$type,
      externalGroupId: isSet(object.externalGroupId) ? globalThis.String(object.externalGroupId) : "",
      internalGroupId: isSet(object.internalGroupId) ? globalThis.String(object.internalGroupId) : "",
    };
  },

  toJSON(message: GroupMappingItem): unknown {
    const obj: any = {};
    if (message.externalGroupId !== "") {
      obj.externalGroupId = message.externalGroupId;
    }
    if (message.internalGroupId !== "") {
      obj.internalGroupId = message.internalGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupMappingItem>, I>>(base?: I): GroupMappingItem {
    return GroupMappingItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupMappingItem>, I>>(object: I): GroupMappingItem {
    const message = createBaseGroupMappingItem();
    message.externalGroupId = object.externalGroupId ?? "";
    message.internalGroupId = object.internalGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GroupMappingItem.$type, GroupMappingItem);

function createBaseGroupMapping(): GroupMapping {
  return { $type: "yandex.cloud.organizationmanager.v1.GroupMapping", federationId: "", enabled: false };
}

export const GroupMapping = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMapping" as const,

  encode(message: GroupMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupMapping {
    return {
      $type: GroupMapping.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
    };
  },

  toJSON(message: GroupMapping): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupMapping>, I>>(base?: I): GroupMapping {
    return GroupMapping.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupMapping>, I>>(object: I): GroupMapping {
    const message = createBaseGroupMapping();
    message.federationId = object.federationId ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(GroupMapping.$type, GroupMapping);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
