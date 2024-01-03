/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Parametrization } from "./parametrization";
import { Widget } from "./widget";

export const protobufPackage = "yandex.cloud.monitoring.v3";

/** Dashboard resource. */
export interface Dashboard {
  $type: "yandex.cloud.monitoring.v3.Dashboard";
  /** Dashboard ID. */
  id: string;
  /** Folder ID. */
  folderId?:
    | string
    | undefined;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Modification timestamp. */
  modifiedAt?:
    | Date
    | undefined;
  /** ID of the user who created the dashboard. */
  createdBy: string;
  /** ID of the user who modified the dashboard. */
  modifiedBy: string;
  /** Dashboard name. */
  name: string;
  /** Dashboard description. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Dashboard title. */
  title: string;
  /** List of dashboard widgets. */
  widgets: Widget[];
  /** Dashboard parametrization. */
  parametrization?:
    | Parametrization
    | undefined;
  /** Dashboard etag. */
  etag: string;
}

export interface Dashboard_LabelsEntry {
  $type: "yandex.cloud.monitoring.v3.Dashboard.LabelsEntry";
  key: string;
  value: string;
}

function createBaseDashboard(): Dashboard {
  return {
    $type: "yandex.cloud.monitoring.v3.Dashboard",
    id: "",
    folderId: undefined,
    createdAt: undefined,
    modifiedAt: undefined,
    createdBy: "",
    modifiedBy: "",
    name: "",
    description: "",
    labels: {},
    title: "",
    widgets: [],
    parametrization: undefined,
    etag: "",
  };
}

export const Dashboard = {
  $type: "yandex.cloud.monitoring.v3.Dashboard" as const,

  encode(message: Dashboard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== undefined) {
      writer.uint32(26).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(162).fork()).ldelim();
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(170).fork()).ldelim();
    }
    if (message.createdBy !== "") {
      writer.uint32(178).string(message.createdBy);
    }
    if (message.modifiedBy !== "") {
      writer.uint32(186).string(message.modifiedBy);
    }
    if (message.name !== "") {
      writer.uint32(194).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(202).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Dashboard_LabelsEntry.encode({
        $type: "yandex.cloud.monitoring.v3.Dashboard.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(210).fork()).ldelim();
    });
    if (message.title !== "") {
      writer.uint32(218).string(message.title);
    }
    for (const v of message.widgets) {
      Widget.encode(v!, writer.uint32(226).fork()).ldelim();
    }
    if (message.parametrization !== undefined) {
      Parametrization.encode(message.parametrization, writer.uint32(234).fork()).ldelim();
    }
    if (message.etag !== "") {
      writer.uint32(242).string(message.etag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dashboard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDashboard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.modifiedBy = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.name = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.description = reader.string();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          const entry26 = Dashboard_LabelsEntry.decode(reader, reader.uint32());
          if (entry26.value !== undefined) {
            message.labels[entry26.key] = entry26.value;
          }
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.title = reader.string();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.widgets.push(Widget.decode(reader, reader.uint32()));
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.parametrization = Parametrization.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.etag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dashboard {
    return {
      $type: Dashboard.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      modifiedAt: isSet(object.modifiedAt) ? fromJsonTimestamp(object.modifiedAt) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      modifiedBy: isSet(object.modifiedBy) ? globalThis.String(object.modifiedBy) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      widgets: globalThis.Array.isArray(object?.widgets) ? object.widgets.map((e: any) => Widget.fromJSON(e)) : [],
      parametrization: isSet(object.parametrization) ? Parametrization.fromJSON(object.parametrization) : undefined,
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: Dashboard): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.modifiedAt !== undefined) {
      obj.modifiedAt = message.modifiedAt.toISOString();
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.modifiedBy !== "") {
      obj.modifiedBy = message.modifiedBy;
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
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.widgets?.length) {
      obj.widgets = message.widgets.map((e) => Widget.toJSON(e));
    }
    if (message.parametrization !== undefined) {
      obj.parametrization = Parametrization.toJSON(message.parametrization);
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Dashboard>, I>>(base?: I): Dashboard {
    return Dashboard.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Dashboard>, I>>(object: I): Dashboard {
    const message = createBaseDashboard();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.modifiedAt = object.modifiedAt ?? undefined;
    message.createdBy = object.createdBy ?? "";
    message.modifiedBy = object.modifiedBy ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.title = object.title ?? "";
    message.widgets = object.widgets?.map((e) => Widget.fromPartial(e)) || [];
    message.parametrization = (object.parametrization !== undefined && object.parametrization !== null)
      ? Parametrization.fromPartial(object.parametrization)
      : undefined;
    message.etag = object.etag ?? "";
    return message;
  },
};

messageTypeRegistry.set(Dashboard.$type, Dashboard);

function createBaseDashboard_LabelsEntry(): Dashboard_LabelsEntry {
  return { $type: "yandex.cloud.monitoring.v3.Dashboard.LabelsEntry", key: "", value: "" };
}

export const Dashboard_LabelsEntry = {
  $type: "yandex.cloud.monitoring.v3.Dashboard.LabelsEntry" as const,

  encode(message: Dashboard_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dashboard_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDashboard_LabelsEntry();
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

  fromJSON(object: any): Dashboard_LabelsEntry {
    return {
      $type: Dashboard_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Dashboard_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Dashboard_LabelsEntry>, I>>(base?: I): Dashboard_LabelsEntry {
    return Dashboard_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Dashboard_LabelsEntry>, I>>(object: I): Dashboard_LabelsEntry {
    const message = createBaseDashboard_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Dashboard_LabelsEntry.$type, Dashboard_LabelsEntry);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
