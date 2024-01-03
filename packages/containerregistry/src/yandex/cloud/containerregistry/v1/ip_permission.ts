/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export enum IpPermissionAction {
  IP_PERMISSION_ACTION_UNSPECIFIED = 0,
  /** ADD - Addition of an ip permission. */
  ADD = 1,
  /** REMOVE - Removal of an ip permission. */
  REMOVE = 2,
  UNRECOGNIZED = -1,
}

export function ipPermissionActionFromJSON(object: any): IpPermissionAction {
  switch (object) {
    case 0:
    case "IP_PERMISSION_ACTION_UNSPECIFIED":
      return IpPermissionAction.IP_PERMISSION_ACTION_UNSPECIFIED;
    case 1:
    case "ADD":
      return IpPermissionAction.ADD;
    case 2:
    case "REMOVE":
      return IpPermissionAction.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IpPermissionAction.UNRECOGNIZED;
  }
}

export function ipPermissionActionToJSON(object: IpPermissionAction): string {
  switch (object) {
    case IpPermissionAction.IP_PERMISSION_ACTION_UNSPECIFIED:
      return "IP_PERMISSION_ACTION_UNSPECIFIED";
    case IpPermissionAction.ADD:
      return "ADD";
    case IpPermissionAction.REMOVE:
      return "REMOVE";
    case IpPermissionAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface IpPermission {
  $type: "yandex.cloud.containerregistry.v1.IpPermission";
  action: IpPermission_Action;
  ip: string;
}

export enum IpPermission_Action {
  ACTION_UNSPECIFIED = 0,
  PULL = 1,
  PUSH = 2,
  UNRECOGNIZED = -1,
}

export function ipPermission_ActionFromJSON(object: any): IpPermission_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return IpPermission_Action.ACTION_UNSPECIFIED;
    case 1:
    case "PULL":
      return IpPermission_Action.PULL;
    case 2:
    case "PUSH":
      return IpPermission_Action.PUSH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IpPermission_Action.UNRECOGNIZED;
  }
}

export function ipPermission_ActionToJSON(object: IpPermission_Action): string {
  switch (object) {
    case IpPermission_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case IpPermission_Action.PULL:
      return "PULL";
    case IpPermission_Action.PUSH:
      return "PUSH";
    case IpPermission_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface IpPermissionDelta {
  $type: "yandex.cloud.containerregistry.v1.IpPermissionDelta";
  /** The action that is being performed on an ip permission. */
  action: IpPermissionAction;
  /** Ip permission. */
  ipPermission?: IpPermission | undefined;
}

function createBaseIpPermission(): IpPermission {
  return { $type: "yandex.cloud.containerregistry.v1.IpPermission", action: 0, ip: "" };
}

export const IpPermission = {
  $type: "yandex.cloud.containerregistry.v1.IpPermission" as const,

  encode(message: IpPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IpPermission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIpPermission();
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

          message.ip = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IpPermission {
    return {
      $type: IpPermission.$type,
      action: isSet(object.action) ? ipPermission_ActionFromJSON(object.action) : 0,
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
    };
  },

  toJSON(message: IpPermission): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = ipPermission_ActionToJSON(message.action);
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IpPermission>, I>>(base?: I): IpPermission {
    return IpPermission.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IpPermission>, I>>(object: I): IpPermission {
    const message = createBaseIpPermission();
    message.action = object.action ?? 0;
    message.ip = object.ip ?? "";
    return message;
  },
};

messageTypeRegistry.set(IpPermission.$type, IpPermission);

function createBaseIpPermissionDelta(): IpPermissionDelta {
  return { $type: "yandex.cloud.containerregistry.v1.IpPermissionDelta", action: 0, ipPermission: undefined };
}

export const IpPermissionDelta = {
  $type: "yandex.cloud.containerregistry.v1.IpPermissionDelta" as const,

  encode(message: IpPermissionDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.ipPermission !== undefined) {
      IpPermission.encode(message.ipPermission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IpPermissionDelta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIpPermissionDelta();
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

          message.ipPermission = IpPermission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IpPermissionDelta {
    return {
      $type: IpPermissionDelta.$type,
      action: isSet(object.action) ? ipPermissionActionFromJSON(object.action) : 0,
      ipPermission: isSet(object.ipPermission) ? IpPermission.fromJSON(object.ipPermission) : undefined,
    };
  },

  toJSON(message: IpPermissionDelta): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = ipPermissionActionToJSON(message.action);
    }
    if (message.ipPermission !== undefined) {
      obj.ipPermission = IpPermission.toJSON(message.ipPermission);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IpPermissionDelta>, I>>(base?: I): IpPermissionDelta {
    return IpPermissionDelta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IpPermissionDelta>, I>>(object: I): IpPermissionDelta {
    const message = createBaseIpPermissionDelta();
    message.action = object.action ?? 0;
    message.ipPermission = (object.ipPermission !== undefined && object.ipPermission !== null)
      ? IpPermission.fromPartial(object.ipPermission)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(IpPermissionDelta.$type, IpPermissionDelta);

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
