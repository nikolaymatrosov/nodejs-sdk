/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { UnitFormat, unitFormatFromJSON, unitFormatToJSON } from "./unit_format";

export const protobufPackage = "yandex.cloud.monitoring.v3";

/** Label values parameter. */
export interface LabelValuesParameter {
  $type: "yandex.cloud.monitoring.v3.LabelValuesParameter";
  /** Required. Folder ID. */
  folderId?:
    | string
    | undefined;
  /** Required. Selectors to select metric label values. */
  selectors: string;
  /** Required. Label key to list label values. */
  labelKey: string;
  /** Specifies the multiselectable values of parameter. */
  multiselectable: boolean;
  /** Default values. */
  defaultValues: string[];
}

/** Custom parameter. */
export interface CustomParameter {
  $type: "yandex.cloud.monitoring.v3.CustomParameter";
  /** Required. List of parameter values. */
  values: string[];
  /** Specifies the multiselectable values of parameter. */
  multiselectable: boolean;
  /** Default values. */
  defaultValues: string[];
}

/** Text parameter. */
export interface TextParameter {
  $type: "yandex.cloud.monitoring.v3.TextParameter";
  /** Default value. */
  defaultValue: string;
}

/** Double parameter. */
export interface DoubleParameter {
  $type: "yandex.cloud.monitoring.v3.DoubleParameter";
  /** Default value. */
  defaultValue: number;
  /** Parameter unit. */
  unitFormat: UnitFormat;
}

/** Integer parameter. */
export interface IntegerParameter {
  $type: "yandex.cloud.monitoring.v3.IntegerParameter";
  /** Default value. */
  defaultValue: number;
  /** Parameter unit. */
  unitFormat: UnitFormat;
}

/** Text multiple values parameter. */
export interface TextValuesParameter {
  $type: "yandex.cloud.monitoring.v3.TextValuesParameter";
  /** Default value. */
  defaultValues: string[];
}

/** Parameter. */
export interface Parameter {
  $type: "yandex.cloud.monitoring.v3.Parameter";
  /** Parameter identifier. */
  name: string;
  /** UI-visible title of the parameter. */
  title: string;
  /** Label values parameter. */
  labelValues?:
    | LabelValuesParameter
    | undefined;
  /** Custom parameter. */
  custom?:
    | CustomParameter
    | undefined;
  /** Text parameter. */
  text?:
    | TextParameter
    | undefined;
  /** Integer parameter. */
  integerParameter?:
    | IntegerParameter
    | undefined;
  /** Double parameter. */
  doubleParameter?:
    | DoubleParameter
    | undefined;
  /** Integer parameter. */
  textValues?:
    | TextValuesParameter
    | undefined;
  /** UI-visibility. */
  hidden: boolean;
  /** Parameter description. */
  description: string;
}

/** Parametrization. */
export interface Parametrization {
  $type: "yandex.cloud.monitoring.v3.Parametrization";
  /** Parameters. */
  parameters: Parameter[];
  /** Predefined selectors. */
  selectors: string;
}

function createBaseLabelValuesParameter(): LabelValuesParameter {
  return {
    $type: "yandex.cloud.monitoring.v3.LabelValuesParameter",
    folderId: undefined,
    selectors: "",
    labelKey: "",
    multiselectable: false,
    defaultValues: [],
  };
}

export const LabelValuesParameter = {
  $type: "yandex.cloud.monitoring.v3.LabelValuesParameter" as const,

  encode(message: LabelValuesParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    if (message.selectors !== "") {
      writer.uint32(154).string(message.selectors);
    }
    if (message.labelKey !== "") {
      writer.uint32(162).string(message.labelKey);
    }
    if (message.multiselectable === true) {
      writer.uint32(168).bool(message.multiselectable);
    }
    for (const v of message.defaultValues) {
      writer.uint32(178).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LabelValuesParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelValuesParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.selectors = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.labelKey = reader.string();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.multiselectable = reader.bool();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.defaultValues.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LabelValuesParameter {
    return {
      $type: LabelValuesParameter.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      selectors: isSet(object.selectors) ? globalThis.String(object.selectors) : "",
      labelKey: isSet(object.labelKey) ? globalThis.String(object.labelKey) : "",
      multiselectable: isSet(object.multiselectable) ? globalThis.Boolean(object.multiselectable) : false,
      defaultValues: globalThis.Array.isArray(object?.defaultValues)
        ? object.defaultValues.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: LabelValuesParameter): unknown {
    const obj: any = {};
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.selectors !== "") {
      obj.selectors = message.selectors;
    }
    if (message.labelKey !== "") {
      obj.labelKey = message.labelKey;
    }
    if (message.multiselectable === true) {
      obj.multiselectable = message.multiselectable;
    }
    if (message.defaultValues?.length) {
      obj.defaultValues = message.defaultValues;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LabelValuesParameter>, I>>(base?: I): LabelValuesParameter {
    return LabelValuesParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LabelValuesParameter>, I>>(object: I): LabelValuesParameter {
    const message = createBaseLabelValuesParameter();
    message.folderId = object.folderId ?? undefined;
    message.selectors = object.selectors ?? "";
    message.labelKey = object.labelKey ?? "";
    message.multiselectable = object.multiselectable ?? false;
    message.defaultValues = object.defaultValues?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(LabelValuesParameter.$type, LabelValuesParameter);

function createBaseCustomParameter(): CustomParameter {
  return { $type: "yandex.cloud.monitoring.v3.CustomParameter", values: [], multiselectable: false, defaultValues: [] };
}

export const CustomParameter = {
  $type: "yandex.cloud.monitoring.v3.CustomParameter" as const,

  encode(message: CustomParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    if (message.multiselectable === true) {
      writer.uint32(16).bool(message.multiselectable);
    }
    for (const v of message.defaultValues) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.multiselectable = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultValues.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomParameter {
    return {
      $type: CustomParameter.$type,
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.String(e)) : [],
      multiselectable: isSet(object.multiselectable) ? globalThis.Boolean(object.multiselectable) : false,
      defaultValues: globalThis.Array.isArray(object?.defaultValues)
        ? object.defaultValues.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: CustomParameter): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    if (message.multiselectable === true) {
      obj.multiselectable = message.multiselectable;
    }
    if (message.defaultValues?.length) {
      obj.defaultValues = message.defaultValues;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomParameter>, I>>(base?: I): CustomParameter {
    return CustomParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomParameter>, I>>(object: I): CustomParameter {
    const message = createBaseCustomParameter();
    message.values = object.values?.map((e) => e) || [];
    message.multiselectable = object.multiselectable ?? false;
    message.defaultValues = object.defaultValues?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CustomParameter.$type, CustomParameter);

function createBaseTextParameter(): TextParameter {
  return { $type: "yandex.cloud.monitoring.v3.TextParameter", defaultValue: "" };
}

export const TextParameter = {
  $type: "yandex.cloud.monitoring.v3.TextParameter" as const,

  encode(message: TextParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue !== "") {
      writer.uint32(10).string(message.defaultValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextParameter {
    return {
      $type: TextParameter.$type,
      defaultValue: isSet(object.defaultValue) ? globalThis.String(object.defaultValue) : "",
    };
  },

  toJSON(message: TextParameter): unknown {
    const obj: any = {};
    if (message.defaultValue !== "") {
      obj.defaultValue = message.defaultValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextParameter>, I>>(base?: I): TextParameter {
    return TextParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextParameter>, I>>(object: I): TextParameter {
    const message = createBaseTextParameter();
    message.defaultValue = object.defaultValue ?? "";
    return message;
  },
};

messageTypeRegistry.set(TextParameter.$type, TextParameter);

function createBaseDoubleParameter(): DoubleParameter {
  return { $type: "yandex.cloud.monitoring.v3.DoubleParameter", defaultValue: 0, unitFormat: 0 };
}

export const DoubleParameter = {
  $type: "yandex.cloud.monitoring.v3.DoubleParameter" as const,

  encode(message: DoubleParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue !== 0) {
      writer.uint32(9).double(message.defaultValue);
    }
    if (message.unitFormat !== 0) {
      writer.uint32(16).int32(message.unitFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.defaultValue = reader.double();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.unitFormat = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DoubleParameter {
    return {
      $type: DoubleParameter.$type,
      defaultValue: isSet(object.defaultValue) ? globalThis.Number(object.defaultValue) : 0,
      unitFormat: isSet(object.unitFormat) ? unitFormatFromJSON(object.unitFormat) : 0,
    };
  },

  toJSON(message: DoubleParameter): unknown {
    const obj: any = {};
    if (message.defaultValue !== 0) {
      obj.defaultValue = message.defaultValue;
    }
    if (message.unitFormat !== 0) {
      obj.unitFormat = unitFormatToJSON(message.unitFormat);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DoubleParameter>, I>>(base?: I): DoubleParameter {
    return DoubleParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DoubleParameter>, I>>(object: I): DoubleParameter {
    const message = createBaseDoubleParameter();
    message.defaultValue = object.defaultValue ?? 0;
    message.unitFormat = object.unitFormat ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DoubleParameter.$type, DoubleParameter);

function createBaseIntegerParameter(): IntegerParameter {
  return { $type: "yandex.cloud.monitoring.v3.IntegerParameter", defaultValue: 0, unitFormat: 0 };
}

export const IntegerParameter = {
  $type: "yandex.cloud.monitoring.v3.IntegerParameter" as const,

  encode(message: IntegerParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue !== 0) {
      writer.uint32(8).int64(message.defaultValue);
    }
    if (message.unitFormat !== 0) {
      writer.uint32(16).int32(message.unitFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntegerParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntegerParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.defaultValue = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.unitFormat = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntegerParameter {
    return {
      $type: IntegerParameter.$type,
      defaultValue: isSet(object.defaultValue) ? globalThis.Number(object.defaultValue) : 0,
      unitFormat: isSet(object.unitFormat) ? unitFormatFromJSON(object.unitFormat) : 0,
    };
  },

  toJSON(message: IntegerParameter): unknown {
    const obj: any = {};
    if (message.defaultValue !== 0) {
      obj.defaultValue = Math.round(message.defaultValue);
    }
    if (message.unitFormat !== 0) {
      obj.unitFormat = unitFormatToJSON(message.unitFormat);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IntegerParameter>, I>>(base?: I): IntegerParameter {
    return IntegerParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IntegerParameter>, I>>(object: I): IntegerParameter {
    const message = createBaseIntegerParameter();
    message.defaultValue = object.defaultValue ?? 0;
    message.unitFormat = object.unitFormat ?? 0;
    return message;
  },
};

messageTypeRegistry.set(IntegerParameter.$type, IntegerParameter);

function createBaseTextValuesParameter(): TextValuesParameter {
  return { $type: "yandex.cloud.monitoring.v3.TextValuesParameter", defaultValues: [] };
}

export const TextValuesParameter = {
  $type: "yandex.cloud.monitoring.v3.TextValuesParameter" as const,

  encode(message: TextValuesParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.defaultValues) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextValuesParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextValuesParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultValues.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextValuesParameter {
    return {
      $type: TextValuesParameter.$type,
      defaultValues: globalThis.Array.isArray(object?.defaultValues)
        ? object.defaultValues.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: TextValuesParameter): unknown {
    const obj: any = {};
    if (message.defaultValues?.length) {
      obj.defaultValues = message.defaultValues;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextValuesParameter>, I>>(base?: I): TextValuesParameter {
    return TextValuesParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextValuesParameter>, I>>(object: I): TextValuesParameter {
    const message = createBaseTextValuesParameter();
    message.defaultValues = object.defaultValues?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(TextValuesParameter.$type, TextValuesParameter);

function createBaseParameter(): Parameter {
  return {
    $type: "yandex.cloud.monitoring.v3.Parameter",
    name: "",
    title: "",
    labelValues: undefined,
    custom: undefined,
    text: undefined,
    integerParameter: undefined,
    doubleParameter: undefined,
    textValues: undefined,
    hidden: false,
    description: "",
  };
}

export const Parameter = {
  $type: "yandex.cloud.monitoring.v3.Parameter" as const,

  encode(message: Parameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.labelValues !== undefined) {
      LabelValuesParameter.encode(message.labelValues, writer.uint32(26).fork()).ldelim();
    }
    if (message.custom !== undefined) {
      CustomParameter.encode(message.custom, writer.uint32(34).fork()).ldelim();
    }
    if (message.text !== undefined) {
      TextParameter.encode(message.text, writer.uint32(42).fork()).ldelim();
    }
    if (message.integerParameter !== undefined) {
      IntegerParameter.encode(message.integerParameter, writer.uint32(58).fork()).ldelim();
    }
    if (message.doubleParameter !== undefined) {
      DoubleParameter.encode(message.doubleParameter, writer.uint32(66).fork()).ldelim();
    }
    if (message.textValues !== undefined) {
      TextValuesParameter.encode(message.textValues, writer.uint32(74).fork()).ldelim();
    }
    if (message.hidden === true) {
      writer.uint32(48).bool(message.hidden);
    }
    if (message.description !== "") {
      writer.uint32(82).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.labelValues = LabelValuesParameter.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.custom = CustomParameter.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.text = TextParameter.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.integerParameter = IntegerParameter.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.doubleParameter = DoubleParameter.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.textValues = TextValuesParameter.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Parameter {
    return {
      $type: Parameter.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      labelValues: isSet(object.labelValues) ? LabelValuesParameter.fromJSON(object.labelValues) : undefined,
      custom: isSet(object.custom) ? CustomParameter.fromJSON(object.custom) : undefined,
      text: isSet(object.text) ? TextParameter.fromJSON(object.text) : undefined,
      integerParameter: isSet(object.integerParameter) ? IntegerParameter.fromJSON(object.integerParameter) : undefined,
      doubleParameter: isSet(object.doubleParameter) ? DoubleParameter.fromJSON(object.doubleParameter) : undefined,
      textValues: isSet(object.textValues) ? TextValuesParameter.fromJSON(object.textValues) : undefined,
      hidden: isSet(object.hidden) ? globalThis.Boolean(object.hidden) : false,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: Parameter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.labelValues !== undefined) {
      obj.labelValues = LabelValuesParameter.toJSON(message.labelValues);
    }
    if (message.custom !== undefined) {
      obj.custom = CustomParameter.toJSON(message.custom);
    }
    if (message.text !== undefined) {
      obj.text = TextParameter.toJSON(message.text);
    }
    if (message.integerParameter !== undefined) {
      obj.integerParameter = IntegerParameter.toJSON(message.integerParameter);
    }
    if (message.doubleParameter !== undefined) {
      obj.doubleParameter = DoubleParameter.toJSON(message.doubleParameter);
    }
    if (message.textValues !== undefined) {
      obj.textValues = TextValuesParameter.toJSON(message.textValues);
    }
    if (message.hidden === true) {
      obj.hidden = message.hidden;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Parameter>, I>>(base?: I): Parameter {
    return Parameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Parameter>, I>>(object: I): Parameter {
    const message = createBaseParameter();
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.labelValues = (object.labelValues !== undefined && object.labelValues !== null)
      ? LabelValuesParameter.fromPartial(object.labelValues)
      : undefined;
    message.custom = (object.custom !== undefined && object.custom !== null)
      ? CustomParameter.fromPartial(object.custom)
      : undefined;
    message.text = (object.text !== undefined && object.text !== null)
      ? TextParameter.fromPartial(object.text)
      : undefined;
    message.integerParameter = (object.integerParameter !== undefined && object.integerParameter !== null)
      ? IntegerParameter.fromPartial(object.integerParameter)
      : undefined;
    message.doubleParameter = (object.doubleParameter !== undefined && object.doubleParameter !== null)
      ? DoubleParameter.fromPartial(object.doubleParameter)
      : undefined;
    message.textValues = (object.textValues !== undefined && object.textValues !== null)
      ? TextValuesParameter.fromPartial(object.textValues)
      : undefined;
    message.hidden = object.hidden ?? false;
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(Parameter.$type, Parameter);

function createBaseParametrization(): Parametrization {
  return { $type: "yandex.cloud.monitoring.v3.Parametrization", parameters: [], selectors: "" };
}

export const Parametrization = {
  $type: "yandex.cloud.monitoring.v3.Parametrization" as const,

  encode(message: Parametrization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.parameters) {
      Parameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.selectors !== "") {
      writer.uint32(18).string(message.selectors);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parametrization {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParametrization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parameters.push(Parameter.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.selectors = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Parametrization {
    return {
      $type: Parametrization.$type,
      parameters: globalThis.Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => Parameter.fromJSON(e))
        : [],
      selectors: isSet(object.selectors) ? globalThis.String(object.selectors) : "",
    };
  },

  toJSON(message: Parametrization): unknown {
    const obj: any = {};
    if (message.parameters?.length) {
      obj.parameters = message.parameters.map((e) => Parameter.toJSON(e));
    }
    if (message.selectors !== "") {
      obj.selectors = message.selectors;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Parametrization>, I>>(base?: I): Parametrization {
    return Parametrization.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Parametrization>, I>>(object: I): Parametrization {
    const message = createBaseParametrization();
    message.parameters = object.parameters?.map((e) => Parameter.fromPartial(e)) || [];
    message.selectors = object.selectors ?? "";
    return message;
  },
};

messageTypeRegistry.set(Parametrization.$type, Parametrization);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
