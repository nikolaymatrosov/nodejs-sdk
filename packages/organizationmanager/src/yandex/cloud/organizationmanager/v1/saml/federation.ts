/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";

export enum BindingType {
  BINDING_TYPE_UNSPECIFIED = 0,
  /** POST - HTTP POST binding. */
  POST = 1,
  /** REDIRECT - HTTP redirect binding. */
  REDIRECT = 2,
  /** ARTIFACT - HTTP artifact binding. */
  ARTIFACT = 3,
  UNRECOGNIZED = -1,
}

export function bindingTypeFromJSON(object: any): BindingType {
  switch (object) {
    case 0:
    case "BINDING_TYPE_UNSPECIFIED":
      return BindingType.BINDING_TYPE_UNSPECIFIED;
    case 1:
    case "POST":
      return BindingType.POST;
    case 2:
    case "REDIRECT":
      return BindingType.REDIRECT;
    case 3:
    case "ARTIFACT":
      return BindingType.ARTIFACT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BindingType.UNRECOGNIZED;
  }
}

export function bindingTypeToJSON(object: BindingType): string {
  switch (object) {
    case BindingType.BINDING_TYPE_UNSPECIFIED:
      return "BINDING_TYPE_UNSPECIFIED";
    case BindingType.POST:
      return "POST";
    case BindingType.REDIRECT:
      return "REDIRECT";
    case BindingType.ARTIFACT:
      return "ARTIFACT";
    case BindingType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A federation.
 * For more information, see [SAML-compatible identity federations](/docs/iam/concepts/federations).
 */
export interface Federation {
  $type: "yandex.cloud.organizationmanager.v1.saml.Federation";
  /** ID of the federation. */
  id: string;
  /** ID of the organization that the federation belongs to. */
  organizationId: string;
  /** Name of the federation. */
  name: string;
  /** Description of the federation. */
  description: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Browser cookie lifetime in seconds.
   * If the cookie is still valid, the management console
   * authenticates the user immediately and redirects them to the home page.
   */
  cookieMaxAge?:
    | Duration
    | undefined;
  /**
   * Add new users automatically on successful authentication.
   * The user becomes member of the organization automatically,
   * but you need to grant other roles to them.
   *
   * If the value is `false`, users who aren't added to the organization
   * can't log in, even if they have authenticated on your server.
   */
  autoCreateAccountOnLogin: boolean;
  /**
   * ID of the IdP server to be used for authentication.
   * The IdP server also responds to IAM with this ID after the user authenticates.
   */
  issuer: string;
  /**
   * Single sign-on endpoint binding type. Most Identity Providers support the `POST` binding type.
   *
   * SAML Binding is a mapping of a SAML protocol message onto standard messaging
   * formats and/or communications protocols.
   */
  ssoBinding: BindingType;
  /**
   * Single sign-on endpoint URL.
   * Specify the link to the IdP login page here.
   */
  ssoUrl: string;
  /** Federation security settings. */
  securitySettings?:
    | FederationSecuritySettings
    | undefined;
  /** Use case insensitive Name IDs. */
  caseInsensitiveNameIds: boolean;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
}

export interface Federation_LabelsEntry {
  $type: "yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry";
  key: string;
  value: string;
}

/** Federation security settings. */
export interface FederationSecuritySettings {
  $type: "yandex.cloud.organizationmanager.v1.saml.FederationSecuritySettings";
  /** Enable encrypted assertions. */
  encryptedAssertions: boolean;
  /** Value parameter ForceAuthn in SAMLRequest. */
  forceAuthn: boolean;
}

function createBaseFederation(): Federation {
  return {
    $type: "yandex.cloud.organizationmanager.v1.saml.Federation",
    id: "",
    organizationId: "",
    name: "",
    description: "",
    createdAt: undefined,
    cookieMaxAge: undefined,
    autoCreateAccountOnLogin: false,
    issuer: "",
    ssoBinding: 0,
    ssoUrl: "",
    securitySettings: undefined,
    caseInsensitiveNameIds: false,
    labels: {},
  };
}

export const Federation = {
  $type: "yandex.cloud.organizationmanager.v1.saml.Federation" as const,

  encode(message: Federation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.organizationId !== "") {
      writer.uint32(18).string(message.organizationId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.cookieMaxAge !== undefined) {
      Duration.encode(message.cookieMaxAge, writer.uint32(50).fork()).ldelim();
    }
    if (message.autoCreateAccountOnLogin === true) {
      writer.uint32(56).bool(message.autoCreateAccountOnLogin);
    }
    if (message.issuer !== "") {
      writer.uint32(66).string(message.issuer);
    }
    if (message.ssoBinding !== 0) {
      writer.uint32(72).int32(message.ssoBinding);
    }
    if (message.ssoUrl !== "") {
      writer.uint32(82).string(message.ssoUrl);
    }
    if (message.securitySettings !== undefined) {
      FederationSecuritySettings.encode(message.securitySettings, writer.uint32(90).fork()).ldelim();
    }
    if (message.caseInsensitiveNameIds === true) {
      writer.uint32(96).bool(message.caseInsensitiveNameIds);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Federation_LabelsEntry.encode({
        $type: "yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(106).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Federation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFederation();
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

          message.organizationId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cookieMaxAge = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.autoCreateAccountOnLogin = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.ssoBinding = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.ssoUrl = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.securitySettings = FederationSecuritySettings.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.caseInsensitiveNameIds = reader.bool();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          const entry13 = Federation_LabelsEntry.decode(reader, reader.uint32());
          if (entry13.value !== undefined) {
            message.labels[entry13.key] = entry13.value;
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

  fromJSON(object: any): Federation {
    return {
      $type: Federation.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      cookieMaxAge: isSet(object.cookieMaxAge) ? Duration.fromJSON(object.cookieMaxAge) : undefined,
      autoCreateAccountOnLogin: isSet(object.autoCreateAccountOnLogin)
        ? globalThis.Boolean(object.autoCreateAccountOnLogin)
        : false,
      issuer: isSet(object.issuer) ? globalThis.String(object.issuer) : "",
      ssoBinding: isSet(object.ssoBinding) ? bindingTypeFromJSON(object.ssoBinding) : 0,
      ssoUrl: isSet(object.ssoUrl) ? globalThis.String(object.ssoUrl) : "",
      securitySettings: isSet(object.securitySettings)
        ? FederationSecuritySettings.fromJSON(object.securitySettings)
        : undefined,
      caseInsensitiveNameIds: isSet(object.caseInsensitiveNameIds)
        ? globalThis.Boolean(object.caseInsensitiveNameIds)
        : false,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Federation): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.cookieMaxAge !== undefined) {
      obj.cookieMaxAge = Duration.toJSON(message.cookieMaxAge);
    }
    if (message.autoCreateAccountOnLogin === true) {
      obj.autoCreateAccountOnLogin = message.autoCreateAccountOnLogin;
    }
    if (message.issuer !== "") {
      obj.issuer = message.issuer;
    }
    if (message.ssoBinding !== 0) {
      obj.ssoBinding = bindingTypeToJSON(message.ssoBinding);
    }
    if (message.ssoUrl !== "") {
      obj.ssoUrl = message.ssoUrl;
    }
    if (message.securitySettings !== undefined) {
      obj.securitySettings = FederationSecuritySettings.toJSON(message.securitySettings);
    }
    if (message.caseInsensitiveNameIds === true) {
      obj.caseInsensitiveNameIds = message.caseInsensitiveNameIds;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<Federation>, I>>(base?: I): Federation {
    return Federation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Federation>, I>>(object: I): Federation {
    const message = createBaseFederation();
    message.id = object.id ?? "";
    message.organizationId = object.organizationId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.cookieMaxAge = (object.cookieMaxAge !== undefined && object.cookieMaxAge !== null)
      ? Duration.fromPartial(object.cookieMaxAge)
      : undefined;
    message.autoCreateAccountOnLogin = object.autoCreateAccountOnLogin ?? false;
    message.issuer = object.issuer ?? "";
    message.ssoBinding = object.ssoBinding ?? 0;
    message.ssoUrl = object.ssoUrl ?? "";
    message.securitySettings = (object.securitySettings !== undefined && object.securitySettings !== null)
      ? FederationSecuritySettings.fromPartial(object.securitySettings)
      : undefined;
    message.caseInsensitiveNameIds = object.caseInsensitiveNameIds ?? false;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(Federation.$type, Federation);

function createBaseFederation_LabelsEntry(): Federation_LabelsEntry {
  return { $type: "yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry", key: "", value: "" };
}

export const Federation_LabelsEntry = {
  $type: "yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry" as const,

  encode(message: Federation_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Federation_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFederation_LabelsEntry();
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

  fromJSON(object: any): Federation_LabelsEntry {
    return {
      $type: Federation_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Federation_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Federation_LabelsEntry>, I>>(base?: I): Federation_LabelsEntry {
    return Federation_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Federation_LabelsEntry>, I>>(object: I): Federation_LabelsEntry {
    const message = createBaseFederation_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Federation_LabelsEntry.$type, Federation_LabelsEntry);

function createBaseFederationSecuritySettings(): FederationSecuritySettings {
  return {
    $type: "yandex.cloud.organizationmanager.v1.saml.FederationSecuritySettings",
    encryptedAssertions: false,
    forceAuthn: false,
  };
}

export const FederationSecuritySettings = {
  $type: "yandex.cloud.organizationmanager.v1.saml.FederationSecuritySettings" as const,

  encode(message: FederationSecuritySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptedAssertions === true) {
      writer.uint32(8).bool(message.encryptedAssertions);
    }
    if (message.forceAuthn === true) {
      writer.uint32(16).bool(message.forceAuthn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FederationSecuritySettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFederationSecuritySettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.encryptedAssertions = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.forceAuthn = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FederationSecuritySettings {
    return {
      $type: FederationSecuritySettings.$type,
      encryptedAssertions: isSet(object.encryptedAssertions) ? globalThis.Boolean(object.encryptedAssertions) : false,
      forceAuthn: isSet(object.forceAuthn) ? globalThis.Boolean(object.forceAuthn) : false,
    };
  },

  toJSON(message: FederationSecuritySettings): unknown {
    const obj: any = {};
    if (message.encryptedAssertions === true) {
      obj.encryptedAssertions = message.encryptedAssertions;
    }
    if (message.forceAuthn === true) {
      obj.forceAuthn = message.forceAuthn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FederationSecuritySettings>, I>>(base?: I): FederationSecuritySettings {
    return FederationSecuritySettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FederationSecuritySettings>, I>>(object: I): FederationSecuritySettings {
    const message = createBaseFederationSecuritySettings();
    message.encryptedAssertions = object.encryptedAssertions ?? false;
    message.forceAuthn = object.forceAuthn ?? false;
    return message;
  },
};

messageTypeRegistry.set(FederationSecuritySettings.$type, FederationSecuritySettings);

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
