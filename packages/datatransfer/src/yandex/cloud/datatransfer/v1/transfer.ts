/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Endpoint } from "./endpoint";

export const protobufPackage = "yandex.cloud.datatransfer.v1";

export enum TransferType {
  TRANSFER_TYPE_UNSPECIFIED = 0,
  /** SNAPSHOT_AND_INCREMENT - Snapshot and increment */
  SNAPSHOT_AND_INCREMENT = 1,
  /** SNAPSHOT_ONLY - Snapshot */
  SNAPSHOT_ONLY = 2,
  /** INCREMENT_ONLY - Increment */
  INCREMENT_ONLY = 3,
  UNRECOGNIZED = -1,
}

export function transferTypeFromJSON(object: any): TransferType {
  switch (object) {
    case 0:
    case "TRANSFER_TYPE_UNSPECIFIED":
      return TransferType.TRANSFER_TYPE_UNSPECIFIED;
    case 1:
    case "SNAPSHOT_AND_INCREMENT":
      return TransferType.SNAPSHOT_AND_INCREMENT;
    case 2:
    case "SNAPSHOT_ONLY":
      return TransferType.SNAPSHOT_ONLY;
    case 3:
    case "INCREMENT_ONLY":
      return TransferType.INCREMENT_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferType.UNRECOGNIZED;
  }
}

export function transferTypeToJSON(object: TransferType): string {
  switch (object) {
    case TransferType.TRANSFER_TYPE_UNSPECIFIED:
      return "TRANSFER_TYPE_UNSPECIFIED";
    case TransferType.SNAPSHOT_AND_INCREMENT:
      return "SNAPSHOT_AND_INCREMENT";
    case TransferType.SNAPSHOT_ONLY:
      return "SNAPSHOT_ONLY";
    case TransferType.INCREMENT_ONLY:
      return "INCREMENT_ONLY";
    case TransferType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TransferStatus {
  TRANSFER_STATUS_UNSPECIFIED = 0,
  /** CREATING - Transfer does some work before running */
  CREATING = 1,
  /** CREATED - Transfer created but not started by user */
  CREATED = 2,
  /** RUNNING - Transfer currently doing replication work */
  RUNNING = 3,
  /** STOPPING - Transfer shutdown */
  STOPPING = 4,
  /** STOPPED - Transfer stopped by user */
  STOPPED = 5,
  /** ERROR - Transfer stopped by system */
  ERROR = 6,
  /** SNAPSHOTTING - Transfer copy snapshot */
  SNAPSHOTTING = 7,
  /** DONE - Transfer reach terminal phase */
  DONE = 8,
  UNRECOGNIZED = -1,
}

export function transferStatusFromJSON(object: any): TransferStatus {
  switch (object) {
    case 0:
    case "TRANSFER_STATUS_UNSPECIFIED":
      return TransferStatus.TRANSFER_STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return TransferStatus.CREATING;
    case 2:
    case "CREATED":
      return TransferStatus.CREATED;
    case 3:
    case "RUNNING":
      return TransferStatus.RUNNING;
    case 4:
    case "STOPPING":
      return TransferStatus.STOPPING;
    case 5:
    case "STOPPED":
      return TransferStatus.STOPPED;
    case 6:
    case "ERROR":
      return TransferStatus.ERROR;
    case 7:
    case "SNAPSHOTTING":
      return TransferStatus.SNAPSHOTTING;
    case 8:
    case "DONE":
      return TransferStatus.DONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferStatus.UNRECOGNIZED;
  }
}

export function transferStatusToJSON(object: TransferStatus): string {
  switch (object) {
    case TransferStatus.TRANSFER_STATUS_UNSPECIFIED:
      return "TRANSFER_STATUS_UNSPECIFIED";
    case TransferStatus.CREATING:
      return "CREATING";
    case TransferStatus.CREATED:
      return "CREATED";
    case TransferStatus.RUNNING:
      return "RUNNING";
    case TransferStatus.STOPPING:
      return "STOPPING";
    case TransferStatus.STOPPED:
      return "STOPPED";
    case TransferStatus.ERROR:
      return "ERROR";
    case TransferStatus.SNAPSHOTTING:
      return "SNAPSHOTTING";
    case TransferStatus.DONE:
      return "DONE";
    case TransferStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Transfer core entity */
export interface Transfer {
  $type: "yandex.cloud.datatransfer.v1.Transfer";
  id: string;
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  source?: Endpoint | undefined;
  target?: Endpoint | undefined;
  status: TransferStatus;
  type: TransferType;
  warning: string;
}

export interface Transfer_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry";
  key: string;
  value: string;
}

function createBaseTransfer(): Transfer {
  return {
    $type: "yandex.cloud.datatransfer.v1.Transfer",
    id: "",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    source: undefined,
    target: undefined,
    status: 0,
    type: 0,
    warning: "",
  };
}

export const Transfer = {
  $type: "yandex.cloud.datatransfer.v1.Transfer" as const,

  encode(message: Transfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Transfer_LabelsEntry.encode({
        $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.source !== undefined) {
      Endpoint.encode(message.source, writer.uint32(58).fork()).ldelim();
    }
    if (message.target !== undefined) {
      Endpoint.encode(message.target, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.type !== 0) {
      writer.uint32(96).int32(message.type);
    }
    if (message.warning !== "") {
      writer.uint32(122).string(message.warning);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transfer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransfer();
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
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = Transfer_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.source = Endpoint.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.target = Endpoint.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.warning = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transfer {
    return {
      $type: Transfer.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      source: isSet(object.source) ? Endpoint.fromJSON(object.source) : undefined,
      target: isSet(object.target) ? Endpoint.fromJSON(object.target) : undefined,
      status: isSet(object.status) ? transferStatusFromJSON(object.status) : 0,
      type: isSet(object.type) ? transferTypeFromJSON(object.type) : 0,
      warning: isSet(object.warning) ? globalThis.String(object.warning) : "",
    };
  },

  toJSON(message: Transfer): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
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
    if (message.source !== undefined) {
      obj.source = Endpoint.toJSON(message.source);
    }
    if (message.target !== undefined) {
      obj.target = Endpoint.toJSON(message.target);
    }
    if (message.status !== 0) {
      obj.status = transferStatusToJSON(message.status);
    }
    if (message.type !== 0) {
      obj.type = transferTypeToJSON(message.type);
    }
    if (message.warning !== "") {
      obj.warning = message.warning;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transfer>, I>>(base?: I): Transfer {
    return Transfer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transfer>, I>>(object: I): Transfer {
    const message = createBaseTransfer();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.source = (object.source !== undefined && object.source !== null)
      ? Endpoint.fromPartial(object.source)
      : undefined;
    message.target = (object.target !== undefined && object.target !== null)
      ? Endpoint.fromPartial(object.target)
      : undefined;
    message.status = object.status ?? 0;
    message.type = object.type ?? 0;
    message.warning = object.warning ?? "";
    return message;
  },
};

messageTypeRegistry.set(Transfer.$type, Transfer);

function createBaseTransfer_LabelsEntry(): Transfer_LabelsEntry {
  return { $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry", key: "", value: "" };
}

export const Transfer_LabelsEntry = {
  $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry" as const,

  encode(message: Transfer_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transfer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransfer_LabelsEntry();
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

  fromJSON(object: any): Transfer_LabelsEntry {
    return {
      $type: Transfer_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Transfer_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transfer_LabelsEntry>, I>>(base?: I): Transfer_LabelsEntry {
    return Transfer_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transfer_LabelsEntry>, I>>(object: I): Transfer_LabelsEntry {
    const message = createBaseTransfer_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Transfer_LabelsEntry.$type, Transfer_LabelsEntry);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
