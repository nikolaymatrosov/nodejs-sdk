/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "yandex.cloud.oauth";

export enum SubjectType {
  SUBJECT_TYPE_UNSPECIFIED = 0,
  USER_ACCOUNT = 1,
  SERVICE_ACCOUNT = 2,
  GROUP = 3,
  INVITEE = 4,
  UNRECOGNIZED = -1,
}

export function subjectTypeFromJSON(object: any): SubjectType {
  switch (object) {
    case 0:
    case "SUBJECT_TYPE_UNSPECIFIED":
      return SubjectType.SUBJECT_TYPE_UNSPECIFIED;
    case 1:
    case "USER_ACCOUNT":
      return SubjectType.USER_ACCOUNT;
    case 2:
    case "SERVICE_ACCOUNT":
      return SubjectType.SERVICE_ACCOUNT;
    case 3:
    case "GROUP":
      return SubjectType.GROUP;
    case 4:
    case "INVITEE":
      return SubjectType.INVITEE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubjectType.UNRECOGNIZED;
  }
}

export function subjectTypeToJSON(object: SubjectType): string {
  switch (object) {
    case SubjectType.SUBJECT_TYPE_UNSPECIFIED:
      return "SUBJECT_TYPE_UNSPECIFIED";
    case SubjectType.USER_ACCOUNT:
      return "USER_ACCOUNT";
    case SubjectType.SERVICE_ACCOUNT:
      return "SERVICE_ACCOUNT";
    case SubjectType.GROUP:
      return "GROUP";
    case SubjectType.INVITEE:
      return "INVITEE";
    case SubjectType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Claims representation, see https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims for details. */
export interface SubjectClaims {
  $type: "yandex.cloud.oauth.SubjectClaims";
  /** Subject - Identifier for the End-User at the Issuer. */
  sub: string;
  /** End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences. */
  name: string;
  /** Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters. */
  givenName: string;
  /** Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters. */
  familyName: string;
  /**
   * Shorthand name by which the End-User wishes to be referred to at the RP, such as janedoe or j.doe.
   * This value MAY be any valid JSON string including special characters such as @, /, or whitespace. The RP MUST NOT rely upon this value being unique, as discussed in Section 5.7.
   */
  preferredUsername: string;
  /**
   * URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file),
   * rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User.
   */
  picture: string;
  /**
   * End-User's preferred e-mail address. Its value MUST conform to the RFC 5322 [RFC5322] addr-spec syntax.
   * The RP MUST NOT rely upon this value being unique, as discussed in Section 5.7.
   */
  email: string;
  /** String from zoneinfo [zoneinfo] time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles. */
  zoneinfo: string;
  /**
   * End-User's locale, represented as a BCP47 [RFC5646] language tag. This is typically an ISO 639-1 Alpha-2 [ISO639-1] language code in lowercase and an ISO 3166-1 Alpha-2 [ISO3166-1] country code in uppercase, separated by a dash.
   * For example, en-US or fr-CA. As a compatibility note, some implementations have used an underscore as the separator rather than a dash, for example, en_US; Relying Parties MAY choose to accept this locale syntax as well.
   */
  locale: string;
  /**
   * End-User's preferred telephone number. E.164 [E.164] is RECOMMENDED as the format of this Claim, for example, +1 (425) 555-1212 or +56 (2) 687 2400.
   * If the phone number contains an extension, it is RECOMMENDED that the extension be represented using the RFC 3966 [RFC3966] extension syntax, for example, +1 (604) 555-1234;ext=5678.
   */
  phoneNumber: string;
  /** Subject type. */
  subType: SubjectType;
  /** User federation, non-empty only for federated users. */
  federation?: Federation | undefined;
}

/** Minimalistic analog of yandex.cloud.organizationmanager.v1.saml.Federation */
export interface Federation {
  $type: "yandex.cloud.oauth.Federation";
  /** ID of the federation. */
  id: string;
  /** Name of the federation. The name is unique within the cloud or organization */
  name: string;
}

function createBaseSubjectClaims(): SubjectClaims {
  return {
    $type: "yandex.cloud.oauth.SubjectClaims",
    sub: "",
    name: "",
    givenName: "",
    familyName: "",
    preferredUsername: "",
    picture: "",
    email: "",
    zoneinfo: "",
    locale: "",
    phoneNumber: "",
    subType: 0,
    federation: undefined,
  };
}

export const SubjectClaims = {
  $type: "yandex.cloud.oauth.SubjectClaims" as const,

  encode(message: SubjectClaims, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sub !== "") {
      writer.uint32(10).string(message.sub);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.givenName !== "") {
      writer.uint32(26).string(message.givenName);
    }
    if (message.familyName !== "") {
      writer.uint32(34).string(message.familyName);
    }
    if (message.preferredUsername !== "") {
      writer.uint32(58).string(message.preferredUsername);
    }
    if (message.picture !== "") {
      writer.uint32(74).string(message.picture);
    }
    if (message.email !== "") {
      writer.uint32(90).string(message.email);
    }
    if (message.zoneinfo !== "") {
      writer.uint32(122).string(message.zoneinfo);
    }
    if (message.locale !== "") {
      writer.uint32(130).string(message.locale);
    }
    if (message.phoneNumber !== "") {
      writer.uint32(138).string(message.phoneNumber);
    }
    if (message.subType !== 0) {
      writer.uint32(792).int32(message.subType);
    }
    if (message.federation !== undefined) {
      Federation.encode(message.federation, writer.uint32(802).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubjectClaims {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubjectClaims();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sub = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.givenName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.familyName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.preferredUsername = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.picture = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.email = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.zoneinfo = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.locale = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.phoneNumber = reader.string();
          continue;
        case 99:
          if (tag !== 792) {
            break;
          }

          message.subType = reader.int32() as any;
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.federation = Federation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubjectClaims {
    return {
      $type: SubjectClaims.$type,
      sub: isSet(object.sub) ? globalThis.String(object.sub) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      givenName: isSet(object.givenName) ? globalThis.String(object.givenName) : "",
      familyName: isSet(object.familyName) ? globalThis.String(object.familyName) : "",
      preferredUsername: isSet(object.preferredUsername) ? globalThis.String(object.preferredUsername) : "",
      picture: isSet(object.picture) ? globalThis.String(object.picture) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      zoneinfo: isSet(object.zoneinfo) ? globalThis.String(object.zoneinfo) : "",
      locale: isSet(object.locale) ? globalThis.String(object.locale) : "",
      phoneNumber: isSet(object.phoneNumber) ? globalThis.String(object.phoneNumber) : "",
      subType: isSet(object.subType) ? subjectTypeFromJSON(object.subType) : 0,
      federation: isSet(object.federation) ? Federation.fromJSON(object.federation) : undefined,
    };
  },

  toJSON(message: SubjectClaims): unknown {
    const obj: any = {};
    if (message.sub !== "") {
      obj.sub = message.sub;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.givenName !== "") {
      obj.givenName = message.givenName;
    }
    if (message.familyName !== "") {
      obj.familyName = message.familyName;
    }
    if (message.preferredUsername !== "") {
      obj.preferredUsername = message.preferredUsername;
    }
    if (message.picture !== "") {
      obj.picture = message.picture;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.zoneinfo !== "") {
      obj.zoneinfo = message.zoneinfo;
    }
    if (message.locale !== "") {
      obj.locale = message.locale;
    }
    if (message.phoneNumber !== "") {
      obj.phoneNumber = message.phoneNumber;
    }
    if (message.subType !== 0) {
      obj.subType = subjectTypeToJSON(message.subType);
    }
    if (message.federation !== undefined) {
      obj.federation = Federation.toJSON(message.federation);
    }
    return obj;
  },

  create(base?: DeepPartial<SubjectClaims>): SubjectClaims {
    return SubjectClaims.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SubjectClaims>): SubjectClaims {
    const message = createBaseSubjectClaims();
    message.sub = object.sub ?? "";
    message.name = object.name ?? "";
    message.givenName = object.givenName ?? "";
    message.familyName = object.familyName ?? "";
    message.preferredUsername = object.preferredUsername ?? "";
    message.picture = object.picture ?? "";
    message.email = object.email ?? "";
    message.zoneinfo = object.zoneinfo ?? "";
    message.locale = object.locale ?? "";
    message.phoneNumber = object.phoneNumber ?? "";
    message.subType = object.subType ?? 0;
    message.federation = (object.federation !== undefined && object.federation !== null)
      ? Federation.fromPartial(object.federation)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SubjectClaims.$type, SubjectClaims);

function createBaseFederation(): Federation {
  return { $type: "yandex.cloud.oauth.Federation", id: "", name: "" };
}

export const Federation = {
  $type: "yandex.cloud.oauth.Federation" as const,

  encode(message: Federation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Federation): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<Federation>): Federation {
    return Federation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Federation>): Federation {
    const message = createBaseFederation();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(Federation.$type, Federation);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
