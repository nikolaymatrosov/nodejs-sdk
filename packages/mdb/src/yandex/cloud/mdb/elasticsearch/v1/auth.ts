/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";

export interface AuthProviders {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProviders";
  providers: AuthProvider[];
}

export interface AuthProvider {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProvider";
  type: AuthProvider_Type;
  name: string;
  order: number;
  enabled: boolean;
  /** selector ui settings */
  hidden: boolean;
  description: string;
  hint: string;
  icon: string;
  saml?: SamlSettings | undefined;
}

export enum AuthProvider_Type {
  TYPE_UNSPECIFIED = 0,
  NATIVE = 1,
  /**
   * SAML - OPENID = 3;
   * ANONYMOUS = 4;
   */
  SAML = 2,
  UNRECOGNIZED = -1,
}

export function authProvider_TypeFromJSON(object: any): AuthProvider_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return AuthProvider_Type.TYPE_UNSPECIFIED;
    case 1:
    case "NATIVE":
      return AuthProvider_Type.NATIVE;
    case 2:
    case "SAML":
      return AuthProvider_Type.SAML;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthProvider_Type.UNRECOGNIZED;
  }
}

export function authProvider_TypeToJSON(object: AuthProvider_Type): string {
  switch (object) {
    case AuthProvider_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case AuthProvider_Type.NATIVE:
      return "NATIVE";
    case AuthProvider_Type.SAML:
      return "SAML";
    case AuthProvider_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SamlSettings {
  $type: "yandex.cloud.mdb.elasticsearch.v1.SamlSettings";
  idpEntityId: string;
  idpMetadataFile: Buffer;
  spEntityId: string;
  kibanaUrl: string;
  attributePrincipal: string;
  attributeGroups: string;
  attributeName: string;
  attributeEmail: string;
  attributeDn: string;
}

function createBaseAuthProviders(): AuthProviders {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProviders", providers: [] };
}

export const AuthProviders = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProviders" as const,

  encode(message: AuthProviders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthProviders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthProviders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthProviders {
    return {
      $type: AuthProviders.$type,
      providers: globalThis.Array.isArray(object?.providers)
        ? object.providers.map((e: any) => AuthProvider.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AuthProviders): unknown {
    const obj: any = {};
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => AuthProvider.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AuthProviders>): AuthProviders {
    return AuthProviders.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthProviders>): AuthProviders {
    const message = createBaseAuthProviders();
    message.providers = object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AuthProviders.$type, AuthProviders);

function createBaseAuthProvider(): AuthProvider {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProvider",
    type: 0,
    name: "",
    order: 0,
    enabled: false,
    hidden: false,
    description: "",
    hint: "",
    icon: "",
    saml: undefined,
  };
}

export const AuthProvider = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProvider" as const,

  encode(message: AuthProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.order !== 0) {
      writer.uint32(24).int64(message.order);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.hidden === true) {
      writer.uint32(40).bool(message.hidden);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.hint !== "") {
      writer.uint32(58).string(message.hint);
    }
    if (message.icon !== "") {
      writer.uint32(66).string(message.icon);
    }
    if (message.saml !== undefined) {
      SamlSettings.encode(message.saml, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.order = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.hint = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.icon = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.saml = SamlSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthProvider {
    return {
      $type: AuthProvider.$type,
      type: isSet(object.type) ? authProvider_TypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      order: isSet(object.order) ? globalThis.Number(object.order) : 0,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      hidden: isSet(object.hidden) ? globalThis.Boolean(object.hidden) : false,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      hint: isSet(object.hint) ? globalThis.String(object.hint) : "",
      icon: isSet(object.icon) ? globalThis.String(object.icon) : "",
      saml: isSet(object.saml) ? SamlSettings.fromJSON(object.saml) : undefined,
    };
  },

  toJSON(message: AuthProvider): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = authProvider_TypeToJSON(message.type);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.order !== 0) {
      obj.order = Math.round(message.order);
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.hidden === true) {
      obj.hidden = message.hidden;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.hint !== "") {
      obj.hint = message.hint;
    }
    if (message.icon !== "") {
      obj.icon = message.icon;
    }
    if (message.saml !== undefined) {
      obj.saml = SamlSettings.toJSON(message.saml);
    }
    return obj;
  },

  create(base?: DeepPartial<AuthProvider>): AuthProvider {
    return AuthProvider.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthProvider>): AuthProvider {
    const message = createBaseAuthProvider();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.order = object.order ?? 0;
    message.enabled = object.enabled ?? false;
    message.hidden = object.hidden ?? false;
    message.description = object.description ?? "";
    message.hint = object.hint ?? "";
    message.icon = object.icon ?? "";
    message.saml = (object.saml !== undefined && object.saml !== null)
      ? SamlSettings.fromPartial(object.saml)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AuthProvider.$type, AuthProvider);

function createBaseSamlSettings(): SamlSettings {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.SamlSettings",
    idpEntityId: "",
    idpMetadataFile: Buffer.alloc(0),
    spEntityId: "",
    kibanaUrl: "",
    attributePrincipal: "",
    attributeGroups: "",
    attributeName: "",
    attributeEmail: "",
    attributeDn: "",
  };
}

export const SamlSettings = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.SamlSettings" as const,

  encode(message: SamlSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idpEntityId !== "") {
      writer.uint32(10).string(message.idpEntityId);
    }
    if (message.idpMetadataFile.length !== 0) {
      writer.uint32(18).bytes(message.idpMetadataFile);
    }
    if (message.spEntityId !== "") {
      writer.uint32(26).string(message.spEntityId);
    }
    if (message.kibanaUrl !== "") {
      writer.uint32(34).string(message.kibanaUrl);
    }
    if (message.attributePrincipal !== "") {
      writer.uint32(42).string(message.attributePrincipal);
    }
    if (message.attributeGroups !== "") {
      writer.uint32(50).string(message.attributeGroups);
    }
    if (message.attributeName !== "") {
      writer.uint32(58).string(message.attributeName);
    }
    if (message.attributeEmail !== "") {
      writer.uint32(66).string(message.attributeEmail);
    }
    if (message.attributeDn !== "") {
      writer.uint32(74).string(message.attributeDn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SamlSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSamlSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idpEntityId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.idpMetadataFile = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.spEntityId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.kibanaUrl = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.attributePrincipal = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.attributeGroups = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.attributeName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.attributeEmail = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.attributeDn = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SamlSettings {
    return {
      $type: SamlSettings.$type,
      idpEntityId: isSet(object.idpEntityId) ? globalThis.String(object.idpEntityId) : "",
      idpMetadataFile: isSet(object.idpMetadataFile)
        ? Buffer.from(bytesFromBase64(object.idpMetadataFile))
        : Buffer.alloc(0),
      spEntityId: isSet(object.spEntityId) ? globalThis.String(object.spEntityId) : "",
      kibanaUrl: isSet(object.kibanaUrl) ? globalThis.String(object.kibanaUrl) : "",
      attributePrincipal: isSet(object.attributePrincipal) ? globalThis.String(object.attributePrincipal) : "",
      attributeGroups: isSet(object.attributeGroups) ? globalThis.String(object.attributeGroups) : "",
      attributeName: isSet(object.attributeName) ? globalThis.String(object.attributeName) : "",
      attributeEmail: isSet(object.attributeEmail) ? globalThis.String(object.attributeEmail) : "",
      attributeDn: isSet(object.attributeDn) ? globalThis.String(object.attributeDn) : "",
    };
  },

  toJSON(message: SamlSettings): unknown {
    const obj: any = {};
    if (message.idpEntityId !== "") {
      obj.idpEntityId = message.idpEntityId;
    }
    if (message.idpMetadataFile.length !== 0) {
      obj.idpMetadataFile = base64FromBytes(message.idpMetadataFile);
    }
    if (message.spEntityId !== "") {
      obj.spEntityId = message.spEntityId;
    }
    if (message.kibanaUrl !== "") {
      obj.kibanaUrl = message.kibanaUrl;
    }
    if (message.attributePrincipal !== "") {
      obj.attributePrincipal = message.attributePrincipal;
    }
    if (message.attributeGroups !== "") {
      obj.attributeGroups = message.attributeGroups;
    }
    if (message.attributeName !== "") {
      obj.attributeName = message.attributeName;
    }
    if (message.attributeEmail !== "") {
      obj.attributeEmail = message.attributeEmail;
    }
    if (message.attributeDn !== "") {
      obj.attributeDn = message.attributeDn;
    }
    return obj;
  },

  create(base?: DeepPartial<SamlSettings>): SamlSettings {
    return SamlSettings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SamlSettings>): SamlSettings {
    const message = createBaseSamlSettings();
    message.idpEntityId = object.idpEntityId ?? "";
    message.idpMetadataFile = object.idpMetadataFile ?? Buffer.alloc(0);
    message.spEntityId = object.spEntityId ?? "";
    message.kibanaUrl = object.kibanaUrl ?? "";
    message.attributePrincipal = object.attributePrincipal ?? "";
    message.attributeGroups = object.attributeGroups ?? "";
    message.attributeName = object.attributeName ?? "";
    message.attributeEmail = object.attributeEmail ?? "";
    message.attributeDn = object.attributeDn ?? "";
    return message;
  },
};

messageTypeRegistry.set(SamlSettings.$type, SamlSettings);

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
