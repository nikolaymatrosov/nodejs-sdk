/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface Dataset {
  $type: "yandex.cloud.datasphere.v2.Dataset";
  /** ID of the dataset. */
  id: string;
  /** ID of the project. */
  projectId: string;
  /** Time the dataset was created. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the dataset. */
  name: string;
  /** Description of the dataset. */
  description: string;
  /** Labels of the dataset. */
  labels: { [key: string]: string };
  /** ID of the user who created the dataset. */
  createdById: string;
  /** Code used to create dataset. */
  code: string;
  /** Size of the dataset, Gb. */
  sizeGb: number;
  /** Zone IDs where dataset is available. */
  zoneIds: string[];
  /** Dataset mount path. */
  mountPath: string;
  /** ID of the data capsule object, storing information about dataset storage. */
  dataCapsuleId: string;
}

export interface Dataset_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry";
  key: string;
  value: string;
}

export interface DatasetStatus {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus";
  /** Dataset is activated. */
  statusActive?:
    | DatasetStatus_StatusActive
    | undefined;
  /** Dataset is inactive. */
  statusInactive?:
    | DatasetStatus_StatusInactive
    | undefined;
  /** Error while activating dataset. */
  statusError?: DatasetStatus_StatusError | undefined;
}

export interface DatasetStatus_StatusActive {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive";
}

export interface DatasetStatus_StatusInactive {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive";
}

export interface DatasetStatus_StatusError {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError";
  /** Text of the error. */
  error: string;
}

function createBaseDataset(): Dataset {
  return {
    $type: "yandex.cloud.datasphere.v2.Dataset",
    id: "",
    projectId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    createdById: "",
    code: "",
    sizeGb: 0,
    zoneIds: [],
    mountPath: "",
    dataCapsuleId: "",
  };
}

export const Dataset = {
  $type: "yandex.cloud.datasphere.v2.Dataset" as const,

  encode(message: Dataset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
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
      Dataset_LabelsEntry.encode(
        { $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.createdById !== "") {
      writer.uint32(58).string(message.createdById);
    }
    if (message.code !== "") {
      writer.uint32(66).string(message.code);
    }
    if (message.sizeGb !== 0) {
      writer.uint32(72).int64(message.sizeGb);
    }
    for (const v of message.zoneIds) {
      writer.uint32(82).string(v!);
    }
    if (message.mountPath !== "") {
      writer.uint32(90).string(message.mountPath);
    }
    if (message.dataCapsuleId !== "") {
      writer.uint32(98).string(message.dataCapsuleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dataset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataset();
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

          message.projectId = reader.string();
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
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = Dataset_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdById = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.code = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.sizeGb = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.zoneIds.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.mountPath = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.dataCapsuleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dataset {
    return {
      $type: Dataset.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      createdById: isSet(object.createdById) ? globalThis.String(object.createdById) : "",
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      sizeGb: isSet(object.sizeGb) ? globalThis.Number(object.sizeGb) : 0,
      zoneIds: globalThis.Array.isArray(object?.zoneIds) ? object.zoneIds.map((e: any) => globalThis.String(e)) : [],
      mountPath: isSet(object.mountPath) ? globalThis.String(object.mountPath) : "",
      dataCapsuleId: isSet(object.dataCapsuleId) ? globalThis.String(object.dataCapsuleId) : "",
    };
  },

  toJSON(message: Dataset): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
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
    if (message.createdById !== "") {
      obj.createdById = message.createdById;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.sizeGb !== 0) {
      obj.sizeGb = Math.round(message.sizeGb);
    }
    if (message.zoneIds?.length) {
      obj.zoneIds = message.zoneIds;
    }
    if (message.mountPath !== "") {
      obj.mountPath = message.mountPath;
    }
    if (message.dataCapsuleId !== "") {
      obj.dataCapsuleId = message.dataCapsuleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Dataset>, I>>(base?: I): Dataset {
    return Dataset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Dataset>, I>>(object: I): Dataset {
    const message = createBaseDataset();
    message.id = object.id ?? "";
    message.projectId = object.projectId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.createdById = object.createdById ?? "";
    message.code = object.code ?? "";
    message.sizeGb = object.sizeGb ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.mountPath = object.mountPath ?? "";
    message.dataCapsuleId = object.dataCapsuleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Dataset.$type, Dataset);

function createBaseDataset_LabelsEntry(): Dataset_LabelsEntry {
  return { $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry", key: "", value: "" };
}

export const Dataset_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry" as const,

  encode(message: Dataset_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dataset_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataset_LabelsEntry();
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

  fromJSON(object: any): Dataset_LabelsEntry {
    return {
      $type: Dataset_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Dataset_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Dataset_LabelsEntry>, I>>(base?: I): Dataset_LabelsEntry {
    return Dataset_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Dataset_LabelsEntry>, I>>(object: I): Dataset_LabelsEntry {
    const message = createBaseDataset_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Dataset_LabelsEntry.$type, Dataset_LabelsEntry);

function createBaseDatasetStatus(): DatasetStatus {
  return {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus",
    statusActive: undefined,
    statusInactive: undefined,
    statusError: undefined,
  };
}

export const DatasetStatus = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus" as const,

  encode(message: DatasetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusActive !== undefined) {
      DatasetStatus_StatusActive.encode(message.statusActive, writer.uint32(10).fork()).ldelim();
    }
    if (message.statusInactive !== undefined) {
      DatasetStatus_StatusInactive.encode(message.statusInactive, writer.uint32(18).fork()).ldelim();
    }
    if (message.statusError !== undefined) {
      DatasetStatus_StatusError.encode(message.statusError, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatasetStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatasetStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.statusActive = DatasetStatus_StatusActive.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.statusInactive = DatasetStatus_StatusInactive.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.statusError = DatasetStatus_StatusError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatasetStatus {
    return {
      $type: DatasetStatus.$type,
      statusActive: isSet(object.statusActive) ? DatasetStatus_StatusActive.fromJSON(object.statusActive) : undefined,
      statusInactive: isSet(object.statusInactive)
        ? DatasetStatus_StatusInactive.fromJSON(object.statusInactive)
        : undefined,
      statusError: isSet(object.statusError) ? DatasetStatus_StatusError.fromJSON(object.statusError) : undefined,
    };
  },

  toJSON(message: DatasetStatus): unknown {
    const obj: any = {};
    if (message.statusActive !== undefined) {
      obj.statusActive = DatasetStatus_StatusActive.toJSON(message.statusActive);
    }
    if (message.statusInactive !== undefined) {
      obj.statusInactive = DatasetStatus_StatusInactive.toJSON(message.statusInactive);
    }
    if (message.statusError !== undefined) {
      obj.statusError = DatasetStatus_StatusError.toJSON(message.statusError);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DatasetStatus>, I>>(base?: I): DatasetStatus {
    return DatasetStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DatasetStatus>, I>>(object: I): DatasetStatus {
    const message = createBaseDatasetStatus();
    message.statusActive = (object.statusActive !== undefined && object.statusActive !== null)
      ? DatasetStatus_StatusActive.fromPartial(object.statusActive)
      : undefined;
    message.statusInactive = (object.statusInactive !== undefined && object.statusInactive !== null)
      ? DatasetStatus_StatusInactive.fromPartial(object.statusInactive)
      : undefined;
    message.statusError = (object.statusError !== undefined && object.statusError !== null)
      ? DatasetStatus_StatusError.fromPartial(object.statusError)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(DatasetStatus.$type, DatasetStatus);

function createBaseDatasetStatus_StatusActive(): DatasetStatus_StatusActive {
  return { $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive" };
}

export const DatasetStatus_StatusActive = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive" as const,

  encode(_: DatasetStatus_StatusActive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatasetStatus_StatusActive {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatasetStatus_StatusActive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DatasetStatus_StatusActive {
    return { $type: DatasetStatus_StatusActive.$type };
  },

  toJSON(_: DatasetStatus_StatusActive): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DatasetStatus_StatusActive>, I>>(base?: I): DatasetStatus_StatusActive {
    return DatasetStatus_StatusActive.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DatasetStatus_StatusActive>, I>>(_: I): DatasetStatus_StatusActive {
    const message = createBaseDatasetStatus_StatusActive();
    return message;
  },
};

messageTypeRegistry.set(DatasetStatus_StatusActive.$type, DatasetStatus_StatusActive);

function createBaseDatasetStatus_StatusInactive(): DatasetStatus_StatusInactive {
  return { $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive" };
}

export const DatasetStatus_StatusInactive = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive" as const,

  encode(_: DatasetStatus_StatusInactive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatasetStatus_StatusInactive {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatasetStatus_StatusInactive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DatasetStatus_StatusInactive {
    return { $type: DatasetStatus_StatusInactive.$type };
  },

  toJSON(_: DatasetStatus_StatusInactive): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DatasetStatus_StatusInactive>, I>>(base?: I): DatasetStatus_StatusInactive {
    return DatasetStatus_StatusInactive.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DatasetStatus_StatusInactive>, I>>(_: I): DatasetStatus_StatusInactive {
    const message = createBaseDatasetStatus_StatusInactive();
    return message;
  },
};

messageTypeRegistry.set(DatasetStatus_StatusInactive.$type, DatasetStatus_StatusInactive);

function createBaseDatasetStatus_StatusError(): DatasetStatus_StatusError {
  return { $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError", error: "" };
}

export const DatasetStatus_StatusError = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError" as const,

  encode(message: DatasetStatus_StatusError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatasetStatus_StatusError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatasetStatus_StatusError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatasetStatus_StatusError {
    return {
      $type: DatasetStatus_StatusError.$type,
      error: isSet(object.error) ? globalThis.String(object.error) : "",
    };
  },

  toJSON(message: DatasetStatus_StatusError): unknown {
    const obj: any = {};
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DatasetStatus_StatusError>, I>>(base?: I): DatasetStatus_StatusError {
    return DatasetStatus_StatusError.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DatasetStatus_StatusError>, I>>(object: I): DatasetStatus_StatusError {
    const message = createBaseDatasetStatus_StatusError();
    message.error = object.error ?? "";
    return message;
  },
};

messageTypeRegistry.set(DatasetStatus_StatusError.$type, DatasetStatus_StatusError);

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
