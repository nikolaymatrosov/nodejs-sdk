/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.certificatemanager.v1";

/** Supported certificate types. */
export enum CertificateType {
  CERTIFICATE_TYPE_UNSPECIFIED = 0,
  /** IMPORTED - The certificate is imported by user. */
  IMPORTED = 1,
  /** MANAGED - The certificate is created by service. */
  MANAGED = 2,
  UNRECOGNIZED = -1,
}

export function certificateTypeFromJSON(object: any): CertificateType {
  switch (object) {
    case 0:
    case "CERTIFICATE_TYPE_UNSPECIFIED":
      return CertificateType.CERTIFICATE_TYPE_UNSPECIFIED;
    case 1:
    case "IMPORTED":
      return CertificateType.IMPORTED;
    case 2:
    case "MANAGED":
      return CertificateType.MANAGED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CertificateType.UNRECOGNIZED;
  }
}

export function certificateTypeToJSON(object: CertificateType): string {
  switch (object) {
    case CertificateType.CERTIFICATE_TYPE_UNSPECIFIED:
      return "CERTIFICATE_TYPE_UNSPECIFIED";
    case CertificateType.IMPORTED:
      return "IMPORTED";
    case CertificateType.MANAGED:
      return "MANAGED";
    case CertificateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Supported domain validation types. */
export enum ChallengeType {
  CHALLENGE_TYPE_UNSPECIFIED = 0,
  /** DNS - Domain validation type that using DNS-records. */
  DNS = 1,
  /** HTTP - Domain validation type that using HTTP-files. */
  HTTP = 2,
  UNRECOGNIZED = -1,
}

export function challengeTypeFromJSON(object: any): ChallengeType {
  switch (object) {
    case 0:
    case "CHALLENGE_TYPE_UNSPECIFIED":
      return ChallengeType.CHALLENGE_TYPE_UNSPECIFIED;
    case 1:
    case "DNS":
      return ChallengeType.DNS;
    case 2:
    case "HTTP":
      return ChallengeType.HTTP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChallengeType.UNRECOGNIZED;
  }
}

export function challengeTypeToJSON(object: ChallengeType): string {
  switch (object) {
    case ChallengeType.CHALLENGE_TYPE_UNSPECIFIED:
      return "CHALLENGE_TYPE_UNSPECIFIED";
    case ChallengeType.DNS:
      return "DNS";
    case ChallengeType.HTTP:
      return "HTTP";
    case ChallengeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A certificate. For details about the concept, see [documentation](/docs/certificate-manager/concepts/). */
export interface Certificate {
  $type: "yandex.cloud.certificatemanager.v1.Certificate";
  /** ID of the certificate. Generated at creation time. */
  id: string;
  /** ID of the folder that the certificate belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the certificate.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Certificate labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Type of the certificate. */
  type: CertificateType;
  /** Fully qualified domain names of the certificate. */
  domains: string[];
  /** Status of the certificate. */
  status: Certificate_Status;
  /** [Distinguished Name](https://tools.ietf.org/html/rfc1779) of the certificate authority that issued the certificate. */
  issuer: string;
  /** [Distinguished Name](https://tools.ietf.org/html/rfc1779) of the entity that is associated with the public key contained in the certificate. */
  subject: string;
  /** Serial number of the certificate. */
  serial: string;
  /** Time when the certificate is updated. */
  updatedAt?:
    | Date
    | undefined;
  /** Time when the certificate is issued. */
  issuedAt?:
    | Date
    | undefined;
  /** Time after which the certificate is not valid. */
  notAfter?:
    | Date
    | undefined;
  /** Time before which the certificate is not valid. */
  notBefore?:
    | Date
    | undefined;
  /** Domains validation challenges of the certificate. Used only for managed certificates. */
  challenges: Challenge[];
  /** Flag that protects deletion of the certificate */
  deletionProtection: boolean;
  /** Mark imported certificates without uploaded chain or with chain which not lead to root certificate */
  incompleteChain: boolean;
}

export enum Certificate_Status {
  STATUS_UNSPECIFIED = 0,
  /** VALIDATING - The certificate domains validation are required. Used only for managed certificates. */
  VALIDATING = 1,
  /** INVALID - The certificate issuance is failed. Used only for managed certificates. */
  INVALID = 2,
  /** ISSUED - The certificate is issued. */
  ISSUED = 3,
  /** REVOKED - The certificate is revoked. */
  REVOKED = 4,
  /** RENEWING - The certificate renewal is started. Used only for managed certificates. */
  RENEWING = 5,
  /** RENEWAL_FAILED - The certificate renewal is failed. Used only for managed certificates. */
  RENEWAL_FAILED = 6,
  UNRECOGNIZED = -1,
}

export function certificate_StatusFromJSON(object: any): Certificate_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Certificate_Status.STATUS_UNSPECIFIED;
    case 1:
    case "VALIDATING":
      return Certificate_Status.VALIDATING;
    case 2:
    case "INVALID":
      return Certificate_Status.INVALID;
    case 3:
    case "ISSUED":
      return Certificate_Status.ISSUED;
    case 4:
    case "REVOKED":
      return Certificate_Status.REVOKED;
    case 5:
    case "RENEWING":
      return Certificate_Status.RENEWING;
    case 6:
    case "RENEWAL_FAILED":
      return Certificate_Status.RENEWAL_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Certificate_Status.UNRECOGNIZED;
  }
}

export function certificate_StatusToJSON(object: Certificate_Status): string {
  switch (object) {
    case Certificate_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Certificate_Status.VALIDATING:
      return "VALIDATING";
    case Certificate_Status.INVALID:
      return "INVALID";
    case Certificate_Status.ISSUED:
      return "ISSUED";
    case Certificate_Status.REVOKED:
      return "REVOKED";
    case Certificate_Status.RENEWING:
      return "RENEWING";
    case Certificate_Status.RENEWAL_FAILED:
      return "RENEWAL_FAILED";
    case Certificate_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Certificate_LabelsEntry {
  $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry";
  key: string;
  value: string;
}

/** Domain validation challenge. */
export interface Challenge {
  $type: "yandex.cloud.certificatemanager.v1.Challenge";
  /** Domain of the challenge. */
  domain: string;
  /** Type of the challenge. */
  type: ChallengeType;
  /** Time when the challenge is created. */
  createdAt?:
    | Date
    | undefined;
  /** Time when the challenge is updated. */
  updatedAt?:
    | Date
    | undefined;
  /** Status of the challenge. */
  status: Challenge_Status;
  /** Description of the challenge. */
  message: string;
  /** Error of the challenge. */
  error: string;
  /** DNS-record. */
  dnsChallenge?:
    | Challenge_DnsRecord
    | undefined;
  /** HTTP-file. */
  httpChallenge?: Challenge_HttpFile | undefined;
}

export enum Challenge_Status {
  STATUS_UNSPECIFIED = 0,
  /** PENDING - The challenge is waiting to be completed. */
  PENDING = 1,
  /** PROCESSING - The challenge is awaiting approval from Let's Encrypt. */
  PROCESSING = 2,
  /** VALID - The challenge is complete. */
  VALID = 3,
  /** INVALID - The rights check for a specific domain failed or the one-week period allocated for the check expired. */
  INVALID = 4,
  UNRECOGNIZED = -1,
}

export function challenge_StatusFromJSON(object: any): Challenge_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Challenge_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PENDING":
      return Challenge_Status.PENDING;
    case 2:
    case "PROCESSING":
      return Challenge_Status.PROCESSING;
    case 3:
    case "VALID":
      return Challenge_Status.VALID;
    case 4:
    case "INVALID":
      return Challenge_Status.INVALID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Challenge_Status.UNRECOGNIZED;
  }
}

export function challenge_StatusToJSON(object: Challenge_Status): string {
  switch (object) {
    case Challenge_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Challenge_Status.PENDING:
      return "PENDING";
    case Challenge_Status.PROCESSING:
      return "PROCESSING";
    case Challenge_Status.VALID:
      return "VALID";
    case Challenge_Status.INVALID:
      return "INVALID";
    case Challenge_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Challenge_DnsRecord {
  $type: "yandex.cloud.certificatemanager.v1.Challenge.DnsRecord";
  /** Name of the DNS record. */
  name: string;
  /** Type of the DNS-record. */
  type: string;
  /** Value of the DNS-record. */
  value: string;
}

export interface Challenge_HttpFile {
  $type: "yandex.cloud.certificatemanager.v1.Challenge.HttpFile";
  /** Location of the HTTP file. */
  url: string;
  /** Content of the HTTP file. */
  content: string;
}

/** A certificate version */
export interface Version {
  $type: "yandex.cloud.certificatemanager.v1.Version";
  /** ID of the version. */
  id: string;
  /** ID of the certificate that the version belongs to. */
  certificateId: string;
  /** Time when the version was created. */
  createdAt?: Date | undefined;
}

function createBaseCertificate(): Certificate {
  return {
    $type: "yandex.cloud.certificatemanager.v1.Certificate",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    type: 0,
    domains: [],
    status: 0,
    issuer: "",
    subject: "",
    serial: "",
    updatedAt: undefined,
    issuedAt: undefined,
    notAfter: undefined,
    notBefore: undefined,
    challenges: [],
    deletionProtection: false,
    incompleteChain: false,
  };
}

export const Certificate = {
  $type: "yandex.cloud.certificatemanager.v1.Certificate" as const,

  encode(message: Certificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
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
      Certificate_LabelsEntry.encode({
        $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.type !== 0) {
      writer.uint32(56).int32(message.type);
    }
    for (const v of message.domains) {
      writer.uint32(66).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.issuer !== "") {
      writer.uint32(82).string(message.issuer);
    }
    if (message.subject !== "") {
      writer.uint32(90).string(message.subject);
    }
    if (message.serial !== "") {
      writer.uint32(98).string(message.serial);
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
    }
    if (message.issuedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.issuedAt), writer.uint32(114).fork()).ldelim();
    }
    if (message.notAfter !== undefined) {
      Timestamp.encode(toTimestamp(message.notAfter), writer.uint32(122).fork()).ldelim();
    }
    if (message.notBefore !== undefined) {
      Timestamp.encode(toTimestamp(message.notBefore), writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.challenges) {
      Challenge.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(144).bool(message.deletionProtection);
    }
    if (message.incompleteChain === true) {
      writer.uint32(152).bool(message.incompleteChain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificate();
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

          const entry6 = Certificate_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.domains.push(reader.string());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.subject = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.serial = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.issuedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.notAfter = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.notBefore = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.challenges.push(Challenge.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.incompleteChain = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Certificate {
    return {
      $type: Certificate.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      type: isSet(object.type) ? certificateTypeFromJSON(object.type) : 0,
      domains: globalThis.Array.isArray(object?.domains) ? object.domains.map((e: any) => globalThis.String(e)) : [],
      status: isSet(object.status) ? certificate_StatusFromJSON(object.status) : 0,
      issuer: isSet(object.issuer) ? globalThis.String(object.issuer) : "",
      subject: isSet(object.subject) ? globalThis.String(object.subject) : "",
      serial: isSet(object.serial) ? globalThis.String(object.serial) : "",
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      issuedAt: isSet(object.issuedAt) ? fromJsonTimestamp(object.issuedAt) : undefined,
      notAfter: isSet(object.notAfter) ? fromJsonTimestamp(object.notAfter) : undefined,
      notBefore: isSet(object.notBefore) ? fromJsonTimestamp(object.notBefore) : undefined,
      challenges: globalThis.Array.isArray(object?.challenges)
        ? object.challenges.map((e: any) => Challenge.fromJSON(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      incompleteChain: isSet(object.incompleteChain) ? globalThis.Boolean(object.incompleteChain) : false,
    };
  },

  toJSON(message: Certificate): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
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
    if (message.type !== 0) {
      obj.type = certificateTypeToJSON(message.type);
    }
    if (message.domains?.length) {
      obj.domains = message.domains;
    }
    if (message.status !== 0) {
      obj.status = certificate_StatusToJSON(message.status);
    }
    if (message.issuer !== "") {
      obj.issuer = message.issuer;
    }
    if (message.subject !== "") {
      obj.subject = message.subject;
    }
    if (message.serial !== "") {
      obj.serial = message.serial;
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.issuedAt !== undefined) {
      obj.issuedAt = message.issuedAt.toISOString();
    }
    if (message.notAfter !== undefined) {
      obj.notAfter = message.notAfter.toISOString();
    }
    if (message.notBefore !== undefined) {
      obj.notBefore = message.notBefore.toISOString();
    }
    if (message.challenges?.length) {
      obj.challenges = message.challenges.map((e) => Challenge.toJSON(e));
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.incompleteChain === true) {
      obj.incompleteChain = message.incompleteChain;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Certificate>, I>>(base?: I): Certificate {
    return Certificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Certificate>, I>>(object: I): Certificate {
    const message = createBaseCertificate();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.type = object.type ?? 0;
    message.domains = object.domains?.map((e) => e) || [];
    message.status = object.status ?? 0;
    message.issuer = object.issuer ?? "";
    message.subject = object.subject ?? "";
    message.serial = object.serial ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    message.issuedAt = object.issuedAt ?? undefined;
    message.notAfter = object.notAfter ?? undefined;
    message.notBefore = object.notBefore ?? undefined;
    message.challenges = object.challenges?.map((e) => Challenge.fromPartial(e)) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.incompleteChain = object.incompleteChain ?? false;
    return message;
  },
};

messageTypeRegistry.set(Certificate.$type, Certificate);

function createBaseCertificate_LabelsEntry(): Certificate_LabelsEntry {
  return { $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry", key: "", value: "" };
}

export const Certificate_LabelsEntry = {
  $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry" as const,

  encode(message: Certificate_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Certificate_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificate_LabelsEntry();
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

  fromJSON(object: any): Certificate_LabelsEntry {
    return {
      $type: Certificate_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Certificate_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Certificate_LabelsEntry>, I>>(base?: I): Certificate_LabelsEntry {
    return Certificate_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Certificate_LabelsEntry>, I>>(object: I): Certificate_LabelsEntry {
    const message = createBaseCertificate_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Certificate_LabelsEntry.$type, Certificate_LabelsEntry);

function createBaseChallenge(): Challenge {
  return {
    $type: "yandex.cloud.certificatemanager.v1.Challenge",
    domain: "",
    type: 0,
    createdAt: undefined,
    updatedAt: undefined,
    status: 0,
    message: "",
    error: "",
    dnsChallenge: undefined,
    httpChallenge: undefined,
  };
}

export const Challenge = {
  $type: "yandex.cloud.certificatemanager.v1.Challenge" as const,

  encode(message: Challenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(50).string(message.message);
    }
    if (message.error !== "") {
      writer.uint32(58).string(message.error);
    }
    if (message.dnsChallenge !== undefined) {
      Challenge_DnsRecord.encode(message.dnsChallenge, writer.uint32(66).fork()).ldelim();
    }
    if (message.httpChallenge !== undefined) {
      Challenge_HttpFile.encode(message.httpChallenge, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.domain = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
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

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.message = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.error = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.dnsChallenge = Challenge_DnsRecord.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.httpChallenge = Challenge_HttpFile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Challenge {
    return {
      $type: Challenge.$type,
      domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
      type: isSet(object.type) ? challengeTypeFromJSON(object.type) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      status: isSet(object.status) ? challenge_StatusFromJSON(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      error: isSet(object.error) ? globalThis.String(object.error) : "",
      dnsChallenge: isSet(object.dnsChallenge) ? Challenge_DnsRecord.fromJSON(object.dnsChallenge) : undefined,
      httpChallenge: isSet(object.httpChallenge) ? Challenge_HttpFile.fromJSON(object.httpChallenge) : undefined,
    };
  },

  toJSON(message: Challenge): unknown {
    const obj: any = {};
    if (message.domain !== "") {
      obj.domain = message.domain;
    }
    if (message.type !== 0) {
      obj.type = challengeTypeToJSON(message.type);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.status !== 0) {
      obj.status = challenge_StatusToJSON(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    if (message.dnsChallenge !== undefined) {
      obj.dnsChallenge = Challenge_DnsRecord.toJSON(message.dnsChallenge);
    }
    if (message.httpChallenge !== undefined) {
      obj.httpChallenge = Challenge_HttpFile.toJSON(message.httpChallenge);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge>, I>>(base?: I): Challenge {
    return Challenge.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Challenge>, I>>(object: I): Challenge {
    const message = createBaseChallenge();
    message.domain = object.domain ?? "";
    message.type = object.type ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.error = object.error ?? "";
    message.dnsChallenge = (object.dnsChallenge !== undefined && object.dnsChallenge !== null)
      ? Challenge_DnsRecord.fromPartial(object.dnsChallenge)
      : undefined;
    message.httpChallenge = (object.httpChallenge !== undefined && object.httpChallenge !== null)
      ? Challenge_HttpFile.fromPartial(object.httpChallenge)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Challenge.$type, Challenge);

function createBaseChallenge_DnsRecord(): Challenge_DnsRecord {
  return { $type: "yandex.cloud.certificatemanager.v1.Challenge.DnsRecord", name: "", type: "", value: "" };
}

export const Challenge_DnsRecord = {
  $type: "yandex.cloud.certificatemanager.v1.Challenge.DnsRecord" as const,

  encode(message: Challenge_DnsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_DnsRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_DnsRecord();
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

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Challenge_DnsRecord {
    return {
      $type: Challenge_DnsRecord.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Challenge_DnsRecord): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_DnsRecord>, I>>(base?: I): Challenge_DnsRecord {
    return Challenge_DnsRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Challenge_DnsRecord>, I>>(object: I): Challenge_DnsRecord {
    const message = createBaseChallenge_DnsRecord();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Challenge_DnsRecord.$type, Challenge_DnsRecord);

function createBaseChallenge_HttpFile(): Challenge_HttpFile {
  return { $type: "yandex.cloud.certificatemanager.v1.Challenge.HttpFile", url: "", content: "" };
}

export const Challenge_HttpFile = {
  $type: "yandex.cloud.certificatemanager.v1.Challenge.HttpFile" as const,

  encode(message: Challenge_HttpFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_HttpFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_HttpFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Challenge_HttpFile {
    return {
      $type: Challenge_HttpFile.$type,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
    };
  },

  toJSON(message: Challenge_HttpFile): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_HttpFile>, I>>(base?: I): Challenge_HttpFile {
    return Challenge_HttpFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Challenge_HttpFile>, I>>(object: I): Challenge_HttpFile {
    const message = createBaseChallenge_HttpFile();
    message.url = object.url ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

messageTypeRegistry.set(Challenge_HttpFile.$type, Challenge_HttpFile);

function createBaseVersion(): Version {
  return { $type: "yandex.cloud.certificatemanager.v1.Version", id: "", certificateId: "", createdAt: undefined };
}

export const Version = {
  $type: "yandex.cloud.certificatemanager.v1.Version" as const,

  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.certificateId !== "") {
      writer.uint32(18).string(message.certificateId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
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

          message.certificateId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      $type: Version.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Version>, I>>(base?: I): Version {
    return Version.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
    const message = createBaseVersion();
    message.id = object.id ?? "";
    message.certificateId = object.certificateId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Version.$type, Version);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
