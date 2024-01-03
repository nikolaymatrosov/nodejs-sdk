/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

/** Currently represents only [Yandex account](/docs/iam/concepts/#passport). */
export interface UserAccount {
  $type: "yandex.cloud.organizationmanager.v1.UserAccount";
  /** ID of the user account. */
  id: string;
  /** A YandexPassportUserAccount resource. */
  yandexPassportUserAccount?:
    | YandexPassportUserAccount
    | undefined;
  /** A SAML federated user. */
  samlUserAccount?: SamlUserAccount | undefined;
}

/**
 * A YandexPassportUserAccount resource.
 * For more information, see [Yandex account](/docs/iam/concepts/#passport).
 */
export interface YandexPassportUserAccount {
  $type: "yandex.cloud.organizationmanager.v1.YandexPassportUserAccount";
  /** Login of the Yandex user account. */
  login: string;
  /** Default email of the Yandex user account. */
  defaultEmail: string;
}

/**
 * A SAML federated user.
 * For more information, see [federations](/docs/iam/concepts/users/saml-federations).
 */
export interface SamlUserAccount {
  $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount";
  /** ID of the federation that the federation belongs to. */
  federationId: string;
  /**
   * Name Id of the SAML federated user.
   * The name is unique within the federation. 1-256 characters long.
   */
  nameId: string;
  /** Additional attributes of the SAML federated user. */
  attributes: { [key: string]: SamlUserAccount_Attribute };
}

export interface SamlUserAccount_Attribute {
  $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.Attribute";
  value: string[];
}

export interface SamlUserAccount_AttributesEntry {
  $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.AttributesEntry";
  key: string;
  value?: SamlUserAccount_Attribute | undefined;
}

function createBaseUserAccount(): UserAccount {
  return {
    $type: "yandex.cloud.organizationmanager.v1.UserAccount",
    id: "",
    yandexPassportUserAccount: undefined,
    samlUserAccount: undefined,
  };
}

export const UserAccount = {
  $type: "yandex.cloud.organizationmanager.v1.UserAccount" as const,

  encode(message: UserAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.yandexPassportUserAccount !== undefined) {
      YandexPassportUserAccount.encode(message.yandexPassportUserAccount, writer.uint32(18).fork()).ldelim();
    }
    if (message.samlUserAccount !== undefined) {
      SamlUserAccount.encode(message.samlUserAccount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAccount();
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

          message.yandexPassportUserAccount = YandexPassportUserAccount.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.samlUserAccount = SamlUserAccount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserAccount {
    return {
      $type: UserAccount.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      yandexPassportUserAccount: isSet(object.yandexPassportUserAccount)
        ? YandexPassportUserAccount.fromJSON(object.yandexPassportUserAccount)
        : undefined,
      samlUserAccount: isSet(object.samlUserAccount) ? SamlUserAccount.fromJSON(object.samlUserAccount) : undefined,
    };
  },

  toJSON(message: UserAccount): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.yandexPassportUserAccount !== undefined) {
      obj.yandexPassportUserAccount = YandexPassportUserAccount.toJSON(message.yandexPassportUserAccount);
    }
    if (message.samlUserAccount !== undefined) {
      obj.samlUserAccount = SamlUserAccount.toJSON(message.samlUserAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserAccount>, I>>(base?: I): UserAccount {
    return UserAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserAccount>, I>>(object: I): UserAccount {
    const message = createBaseUserAccount();
    message.id = object.id ?? "";
    message.yandexPassportUserAccount =
      (object.yandexPassportUserAccount !== undefined && object.yandexPassportUserAccount !== null)
        ? YandexPassportUserAccount.fromPartial(object.yandexPassportUserAccount)
        : undefined;
    message.samlUserAccount = (object.samlUserAccount !== undefined && object.samlUserAccount !== null)
      ? SamlUserAccount.fromPartial(object.samlUserAccount)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UserAccount.$type, UserAccount);

function createBaseYandexPassportUserAccount(): YandexPassportUserAccount {
  return { $type: "yandex.cloud.organizationmanager.v1.YandexPassportUserAccount", login: "", defaultEmail: "" };
}

export const YandexPassportUserAccount = {
  $type: "yandex.cloud.organizationmanager.v1.YandexPassportUserAccount" as const,

  encode(message: YandexPassportUserAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    if (message.defaultEmail !== "") {
      writer.uint32(18).string(message.defaultEmail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): YandexPassportUserAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYandexPassportUserAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.login = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.defaultEmail = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): YandexPassportUserAccount {
    return {
      $type: YandexPassportUserAccount.$type,
      login: isSet(object.login) ? globalThis.String(object.login) : "",
      defaultEmail: isSet(object.defaultEmail) ? globalThis.String(object.defaultEmail) : "",
    };
  },

  toJSON(message: YandexPassportUserAccount): unknown {
    const obj: any = {};
    if (message.login !== "") {
      obj.login = message.login;
    }
    if (message.defaultEmail !== "") {
      obj.defaultEmail = message.defaultEmail;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<YandexPassportUserAccount>, I>>(base?: I): YandexPassportUserAccount {
    return YandexPassportUserAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<YandexPassportUserAccount>, I>>(object: I): YandexPassportUserAccount {
    const message = createBaseYandexPassportUserAccount();
    message.login = object.login ?? "";
    message.defaultEmail = object.defaultEmail ?? "";
    return message;
  },
};

messageTypeRegistry.set(YandexPassportUserAccount.$type, YandexPassportUserAccount);

function createBaseSamlUserAccount(): SamlUserAccount {
  return { $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount", federationId: "", nameId: "", attributes: {} };
}

export const SamlUserAccount = {
  $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount" as const,

  encode(message: SamlUserAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.nameId !== "") {
      writer.uint32(18).string(message.nameId);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      SamlUserAccount_AttributesEntry.encode({
        $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.AttributesEntry",
        key: key as any,
        value,
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SamlUserAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSamlUserAccount();
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
          if (tag !== 18) {
            break;
          }

          message.nameId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = SamlUserAccount_AttributesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.attributes[entry3.key] = entry3.value;
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

  fromJSON(object: any): SamlUserAccount {
    return {
      $type: SamlUserAccount.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
      nameId: isSet(object.nameId) ? globalThis.String(object.nameId) : "",
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{ [key: string]: SamlUserAccount_Attribute }>(
          (acc, [key, value]) => {
            acc[key] = SamlUserAccount_Attribute.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: SamlUserAccount): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    if (message.nameId !== "") {
      obj.nameId = message.nameId;
    }
    if (message.attributes) {
      const entries = Object.entries(message.attributes);
      if (entries.length > 0) {
        obj.attributes = {};
        entries.forEach(([k, v]) => {
          obj.attributes[k] = SamlUserAccount_Attribute.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SamlUserAccount>, I>>(base?: I): SamlUserAccount {
    return SamlUserAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SamlUserAccount>, I>>(object: I): SamlUserAccount {
    const message = createBaseSamlUserAccount();
    message.federationId = object.federationId ?? "";
    message.nameId = object.nameId ?? "";
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{ [key: string]: SamlUserAccount_Attribute }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = SamlUserAccount_Attribute.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

messageTypeRegistry.set(SamlUserAccount.$type, SamlUserAccount);

function createBaseSamlUserAccount_Attribute(): SamlUserAccount_Attribute {
  return { $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.Attribute", value: [] };
}

export const SamlUserAccount_Attribute = {
  $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.Attribute" as const,

  encode(message: SamlUserAccount_Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SamlUserAccount_Attribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSamlUserAccount_Attribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SamlUserAccount_Attribute {
    return {
      $type: SamlUserAccount_Attribute.$type,
      value: globalThis.Array.isArray(object?.value) ? object.value.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: SamlUserAccount_Attribute): unknown {
    const obj: any = {};
    if (message.value?.length) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SamlUserAccount_Attribute>, I>>(base?: I): SamlUserAccount_Attribute {
    return SamlUserAccount_Attribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SamlUserAccount_Attribute>, I>>(object: I): SamlUserAccount_Attribute {
    const message = createBaseSamlUserAccount_Attribute();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(SamlUserAccount_Attribute.$type, SamlUserAccount_Attribute);

function createBaseSamlUserAccount_AttributesEntry(): SamlUserAccount_AttributesEntry {
  return { $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.AttributesEntry", key: "", value: undefined };
}

export const SamlUserAccount_AttributesEntry = {
  $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.AttributesEntry" as const,

  encode(message: SamlUserAccount_AttributesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SamlUserAccount_Attribute.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SamlUserAccount_AttributesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSamlUserAccount_AttributesEntry();
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

          message.value = SamlUserAccount_Attribute.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SamlUserAccount_AttributesEntry {
    return {
      $type: SamlUserAccount_AttributesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? SamlUserAccount_Attribute.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SamlUserAccount_AttributesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = SamlUserAccount_Attribute.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SamlUserAccount_AttributesEntry>, I>>(base?: I): SamlUserAccount_AttributesEntry {
    return SamlUserAccount_AttributesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SamlUserAccount_AttributesEntry>, I>>(
    object: I,
  ): SamlUserAccount_AttributesEntry {
    const message = createBaseSamlUserAccount_AttributesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? SamlUserAccount_Attribute.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SamlUserAccount_AttributesEntry.$type, SamlUserAccount_AttributesEntry);

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
