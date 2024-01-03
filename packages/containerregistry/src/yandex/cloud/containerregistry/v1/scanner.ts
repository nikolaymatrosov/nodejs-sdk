/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

/** A ScanResult resource. */
export interface ScanResult {
  $type: "yandex.cloud.containerregistry.v1.ScanResult";
  /** Output only. ID of the ScanResult. */
  id: string;
  /** Output only. ID of the Image that the ScanResult belongs to. */
  imageId: string;
  /** Output only. The timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format when the scan been finished. */
  scannedAt?:
    | Date
    | undefined;
  /** Output only. The status of the ScanResult. */
  status: ScanResult_Status;
  /** Output only. Summary information about vulnerabilities found. */
  vulnerabilities?: VulnerabilityStats | undefined;
}

export enum ScanResult_Status {
  STATUS_UNSPECIFIED = 0,
  /** RUNNING - Image scan is in progress. */
  RUNNING = 1,
  /** READY - Image has been scanned and result is ready. */
  READY = 2,
  /** ERROR - Image scan is failed. */
  ERROR = 3,
  UNRECOGNIZED = -1,
}

export function scanResult_StatusFromJSON(object: any): ScanResult_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return ScanResult_Status.STATUS_UNSPECIFIED;
    case 1:
    case "RUNNING":
      return ScanResult_Status.RUNNING;
    case 2:
    case "READY":
      return ScanResult_Status.READY;
    case 3:
    case "ERROR":
      return ScanResult_Status.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScanResult_Status.UNRECOGNIZED;
  }
}

export function scanResult_StatusToJSON(object: ScanResult_Status): string {
  switch (object) {
    case ScanResult_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case ScanResult_Status.RUNNING:
      return "RUNNING";
    case ScanResult_Status.READY:
      return "READY";
    case ScanResult_Status.ERROR:
      return "ERROR";
    case ScanResult_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A VulnerabilityStats resource. */
export interface VulnerabilityStats {
  $type: "yandex.cloud.containerregistry.v1.VulnerabilityStats";
  /** Count of CRITICAL vulnerabilities. */
  critical: number;
  /** Count of HIGH vulnerabilities. */
  high: number;
  /** Count of MEDIUM vulnerabilities. */
  medium: number;
  /** Count of LOW vulnerabilities. */
  low: number;
  /** Count of NEGLIGIBLE vulnerabilities. */
  negligible: number;
  /** Count of other vulnerabilities. */
  undefined: number;
}

/** A Vulnerability resource. */
export interface Vulnerability {
  $type: "yandex.cloud.containerregistry.v1.Vulnerability";
  /** Output only. Severity of the Vulnerability. */
  severity: Vulnerability_Severity;
  package?: PackageVulnerability | undefined;
}

export enum Vulnerability_Severity {
  SEVERITY_UNSPECIFIED = 0,
  /**
   * CRITICAL - Critical severity is a world-burning problem, exploitable for nearly all users.
   * Includes remote root privilege escalations, or massive data loss.
   */
  CRITICAL = 1,
  /**
   * HIGH - High severity is a real problem, exploitable for many users in a default installation.
   * Includes serious remote denial of services, local root privilege escalations, or data loss.
   */
  HIGH = 2,
  /**
   * MEDIUM - Medium severity is a real security problem, and is exploitable for many users.
   * Includes network daemon denial of service attacks, cross-site scripting, and gaining user privileges.
   * Updates should be made soon for this priority of issue.
   */
  MEDIUM = 3,
  /**
   * LOW - Low severity is a security problem, but is hard to exploit due to environment, requires a user-assisted attack,
   * a small install base, or does very little damage. These tend to be included in security updates only when
   * higher priority issues require an update, or if many low priority issues have built up.
   */
  LOW = 4,
  /**
   * NEGLIGIBLE - Negligible severity is technically a security problem, but is only theoretical in nature, requires a very special situation,
   * has almost no install base, or does no real damage. These tend not to get backport from upstream,
   * and will likely not be included in security updates unless there is an easy fix and some other issue causes an update.
   */
  NEGLIGIBLE = 5,
  /**
   * UNDEFINED - Unknown severity is either a security problem that has not been assigned to a priority yet or
   * a priority that our system did not recognize.
   */
  UNDEFINED = 6,
  UNRECOGNIZED = -1,
}

export function vulnerability_SeverityFromJSON(object: any): Vulnerability_Severity {
  switch (object) {
    case 0:
    case "SEVERITY_UNSPECIFIED":
      return Vulnerability_Severity.SEVERITY_UNSPECIFIED;
    case 1:
    case "CRITICAL":
      return Vulnerability_Severity.CRITICAL;
    case 2:
    case "HIGH":
      return Vulnerability_Severity.HIGH;
    case 3:
    case "MEDIUM":
      return Vulnerability_Severity.MEDIUM;
    case 4:
    case "LOW":
      return Vulnerability_Severity.LOW;
    case 5:
    case "NEGLIGIBLE":
      return Vulnerability_Severity.NEGLIGIBLE;
    case 6:
    case "UNDEFINED":
      return Vulnerability_Severity.UNDEFINED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Vulnerability_Severity.UNRECOGNIZED;
  }
}

export function vulnerability_SeverityToJSON(object: Vulnerability_Severity): string {
  switch (object) {
    case Vulnerability_Severity.SEVERITY_UNSPECIFIED:
      return "SEVERITY_UNSPECIFIED";
    case Vulnerability_Severity.CRITICAL:
      return "CRITICAL";
    case Vulnerability_Severity.HIGH:
      return "HIGH";
    case Vulnerability_Severity.MEDIUM:
      return "MEDIUM";
    case Vulnerability_Severity.LOW:
      return "LOW";
    case Vulnerability_Severity.NEGLIGIBLE:
      return "NEGLIGIBLE";
    case Vulnerability_Severity.UNDEFINED:
      return "UNDEFINED";
    case Vulnerability_Severity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A PackageVulnerability resource. */
export interface PackageVulnerability {
  $type: "yandex.cloud.containerregistry.v1.PackageVulnerability";
  /** Name of vulnerability in CVE database. */
  name: string;
  /** URL to the page with description of vulnerability. */
  link: string;
  /** The package name where vulnerability has been found. */
  package: string;
  /** The package manager name. Ex.: yum, rpm, dpkg. */
  source: string;
  /** The version of the package where vulnerability has been found. */
  version: string;
  /** The version of the package where vulnerability has been fixed. */
  fixedBy: string;
}

function createBaseScanResult(): ScanResult {
  return {
    $type: "yandex.cloud.containerregistry.v1.ScanResult",
    id: "",
    imageId: "",
    scannedAt: undefined,
    status: 0,
    vulnerabilities: undefined,
  };
}

export const ScanResult = {
  $type: "yandex.cloud.containerregistry.v1.ScanResult" as const,

  encode(message: ScanResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.imageId !== "") {
      writer.uint32(18).string(message.imageId);
    }
    if (message.scannedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.scannedAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.vulnerabilities !== undefined) {
      VulnerabilityStats.encode(message.vulnerabilities, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanResult();
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

          message.imageId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scannedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vulnerabilities = VulnerabilityStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanResult {
    return {
      $type: ScanResult.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      imageId: isSet(object.imageId) ? globalThis.String(object.imageId) : "",
      scannedAt: isSet(object.scannedAt) ? fromJsonTimestamp(object.scannedAt) : undefined,
      status: isSet(object.status) ? scanResult_StatusFromJSON(object.status) : 0,
      vulnerabilities: isSet(object.vulnerabilities) ? VulnerabilityStats.fromJSON(object.vulnerabilities) : undefined,
    };
  },

  toJSON(message: ScanResult): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.imageId !== "") {
      obj.imageId = message.imageId;
    }
    if (message.scannedAt !== undefined) {
      obj.scannedAt = message.scannedAt.toISOString();
    }
    if (message.status !== 0) {
      obj.status = scanResult_StatusToJSON(message.status);
    }
    if (message.vulnerabilities !== undefined) {
      obj.vulnerabilities = VulnerabilityStats.toJSON(message.vulnerabilities);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScanResult>, I>>(base?: I): ScanResult {
    return ScanResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScanResult>, I>>(object: I): ScanResult {
    const message = createBaseScanResult();
    message.id = object.id ?? "";
    message.imageId = object.imageId ?? "";
    message.scannedAt = object.scannedAt ?? undefined;
    message.status = object.status ?? 0;
    message.vulnerabilities = (object.vulnerabilities !== undefined && object.vulnerabilities !== null)
      ? VulnerabilityStats.fromPartial(object.vulnerabilities)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ScanResult.$type, ScanResult);

function createBaseVulnerabilityStats(): VulnerabilityStats {
  return {
    $type: "yandex.cloud.containerregistry.v1.VulnerabilityStats",
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    negligible: 0,
    undefined: 0,
  };
}

export const VulnerabilityStats = {
  $type: "yandex.cloud.containerregistry.v1.VulnerabilityStats" as const,

  encode(message: VulnerabilityStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.critical !== 0) {
      writer.uint32(8).int64(message.critical);
    }
    if (message.high !== 0) {
      writer.uint32(16).int64(message.high);
    }
    if (message.medium !== 0) {
      writer.uint32(24).int64(message.medium);
    }
    if (message.low !== 0) {
      writer.uint32(32).int64(message.low);
    }
    if (message.negligible !== 0) {
      writer.uint32(40).int64(message.negligible);
    }
    if (message.undefined !== 0) {
      writer.uint32(48).int64(message.undefined);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VulnerabilityStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVulnerabilityStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.critical = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.high = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.medium = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.low = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.negligible = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.undefined = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VulnerabilityStats {
    return {
      $type: VulnerabilityStats.$type,
      critical: isSet(object.critical) ? globalThis.Number(object.critical) : 0,
      high: isSet(object.high) ? globalThis.Number(object.high) : 0,
      medium: isSet(object.medium) ? globalThis.Number(object.medium) : 0,
      low: isSet(object.low) ? globalThis.Number(object.low) : 0,
      negligible: isSet(object.negligible) ? globalThis.Number(object.negligible) : 0,
      undefined: isSet(object.undefined) ? globalThis.Number(object.undefined) : 0,
    };
  },

  toJSON(message: VulnerabilityStats): unknown {
    const obj: any = {};
    if (message.critical !== 0) {
      obj.critical = Math.round(message.critical);
    }
    if (message.high !== 0) {
      obj.high = Math.round(message.high);
    }
    if (message.medium !== 0) {
      obj.medium = Math.round(message.medium);
    }
    if (message.low !== 0) {
      obj.low = Math.round(message.low);
    }
    if (message.negligible !== 0) {
      obj.negligible = Math.round(message.negligible);
    }
    if (message.undefined !== 0) {
      obj.undefined = Math.round(message.undefined);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VulnerabilityStats>, I>>(base?: I): VulnerabilityStats {
    return VulnerabilityStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VulnerabilityStats>, I>>(object: I): VulnerabilityStats {
    const message = createBaseVulnerabilityStats();
    message.critical = object.critical ?? 0;
    message.high = object.high ?? 0;
    message.medium = object.medium ?? 0;
    message.low = object.low ?? 0;
    message.negligible = object.negligible ?? 0;
    message.undefined = object.undefined ?? 0;
    return message;
  },
};

messageTypeRegistry.set(VulnerabilityStats.$type, VulnerabilityStats);

function createBaseVulnerability(): Vulnerability {
  return { $type: "yandex.cloud.containerregistry.v1.Vulnerability", severity: 0, package: undefined };
}

export const Vulnerability = {
  $type: "yandex.cloud.containerregistry.v1.Vulnerability" as const,

  encode(message: Vulnerability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.severity !== 0) {
      writer.uint32(8).int32(message.severity);
    }
    if (message.package !== undefined) {
      PackageVulnerability.encode(message.package, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vulnerability {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVulnerability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.severity = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.package = PackageVulnerability.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vulnerability {
    return {
      $type: Vulnerability.$type,
      severity: isSet(object.severity) ? vulnerability_SeverityFromJSON(object.severity) : 0,
      package: isSet(object.package) ? PackageVulnerability.fromJSON(object.package) : undefined,
    };
  },

  toJSON(message: Vulnerability): unknown {
    const obj: any = {};
    if (message.severity !== 0) {
      obj.severity = vulnerability_SeverityToJSON(message.severity);
    }
    if (message.package !== undefined) {
      obj.package = PackageVulnerability.toJSON(message.package);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Vulnerability>, I>>(base?: I): Vulnerability {
    return Vulnerability.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Vulnerability>, I>>(object: I): Vulnerability {
    const message = createBaseVulnerability();
    message.severity = object.severity ?? 0;
    message.package = (object.package !== undefined && object.package !== null)
      ? PackageVulnerability.fromPartial(object.package)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Vulnerability.$type, Vulnerability);

function createBasePackageVulnerability(): PackageVulnerability {
  return {
    $type: "yandex.cloud.containerregistry.v1.PackageVulnerability",
    name: "",
    link: "",
    package: "",
    source: "",
    version: "",
    fixedBy: "",
  };
}

export const PackageVulnerability = {
  $type: "yandex.cloud.containerregistry.v1.PackageVulnerability" as const,

  encode(message: PackageVulnerability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.link !== "") {
      writer.uint32(18).string(message.link);
    }
    if (message.package !== "") {
      writer.uint32(26).string(message.package);
    }
    if (message.source !== "") {
      writer.uint32(34).string(message.source);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.fixedBy !== "") {
      writer.uint32(50).string(message.fixedBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackageVulnerability {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageVulnerability();
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

          message.link = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.package = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.source = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.version = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.fixedBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PackageVulnerability {
    return {
      $type: PackageVulnerability.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      link: isSet(object.link) ? globalThis.String(object.link) : "",
      package: isSet(object.package) ? globalThis.String(object.package) : "",
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      fixedBy: isSet(object.fixedBy) ? globalThis.String(object.fixedBy) : "",
    };
  },

  toJSON(message: PackageVulnerability): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.link !== "") {
      obj.link = message.link;
    }
    if (message.package !== "") {
      obj.package = message.package;
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.fixedBy !== "") {
      obj.fixedBy = message.fixedBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PackageVulnerability>, I>>(base?: I): PackageVulnerability {
    return PackageVulnerability.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PackageVulnerability>, I>>(object: I): PackageVulnerability {
    const message = createBasePackageVulnerability();
    message.name = object.name ?? "";
    message.link = object.link ?? "";
    message.package = object.package ?? "";
    message.source = object.source ?? "";
    message.version = object.version ?? "";
    message.fixedBy = object.fixedBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(PackageVulnerability.$type, PackageVulnerability);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
