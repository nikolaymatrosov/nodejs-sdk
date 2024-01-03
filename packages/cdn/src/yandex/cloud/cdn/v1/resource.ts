/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.cdn.v1";

/**
 * This option defines the protocol that will be used by CDN servers to request
 * content from an origin source. If not specified, we will use HTTP to connect
 * to an origin server.
 */
export enum OriginProtocol {
  ORIGIN_PROTOCOL_UNSPECIFIED = 0,
  /** HTTP - CDN servers will connect to your origin via HTTP. */
  HTTP = 1,
  /** HTTPS - CDN servers will connect to your origin via HTTPS. */
  HTTPS = 2,
  /**
   * MATCH - Connection protocol will be chosen automatically (content on the
   * origin source should be available for the CDN both through HTTP and HTTPS).
   */
  MATCH = 3,
  UNRECOGNIZED = -1,
}

export function originProtocolFromJSON(object: any): OriginProtocol {
  switch (object) {
    case 0:
    case "ORIGIN_PROTOCOL_UNSPECIFIED":
      return OriginProtocol.ORIGIN_PROTOCOL_UNSPECIFIED;
    case 1:
    case "HTTP":
      return OriginProtocol.HTTP;
    case 2:
    case "HTTPS":
      return OriginProtocol.HTTPS;
    case 3:
    case "MATCH":
      return OriginProtocol.MATCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OriginProtocol.UNRECOGNIZED;
  }
}

export function originProtocolToJSON(object: OriginProtocol): string {
  switch (object) {
    case OriginProtocol.ORIGIN_PROTOCOL_UNSPECIFIED:
      return "ORIGIN_PROTOCOL_UNSPECIFIED";
    case OriginProtocol.HTTP:
      return "HTTP";
    case OriginProtocol.HTTPS:
      return "HTTPS";
    case OriginProtocol.MATCH:
      return "MATCH";
    case OriginProtocol.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** RewriteFlag defines flag for the Rewrite option. */
export enum RewriteFlag {
  REWRITE_FLAG_UNSPECIFIED = 0,
  /**
   * LAST - Stops processing of the current set of ngx_http_rewrite_module directives and
   * starts a search for a new location matching changed URI.
   */
  LAST = 1,
  /** BREAK - Stops processing of the current set of the Rewrite option. */
  BREAK = 2,
  /**
   * REDIRECT - Returns a temporary redirect with the 302 code; It is used when a replacement string does not start
   * with "http://", "https://", or "$scheme".
   */
  REDIRECT = 3,
  /** PERMANENT - Returns a permanent redirect with the 301 code. */
  PERMANENT = 4,
  UNRECOGNIZED = -1,
}

export function rewriteFlagFromJSON(object: any): RewriteFlag {
  switch (object) {
    case 0:
    case "REWRITE_FLAG_UNSPECIFIED":
      return RewriteFlag.REWRITE_FLAG_UNSPECIFIED;
    case 1:
    case "LAST":
      return RewriteFlag.LAST;
    case 2:
    case "BREAK":
      return RewriteFlag.BREAK;
    case 3:
    case "REDIRECT":
      return RewriteFlag.REDIRECT;
    case 4:
    case "PERMANENT":
      return RewriteFlag.PERMANENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RewriteFlag.UNRECOGNIZED;
  }
}

export function rewriteFlagToJSON(object: RewriteFlag): string {
  switch (object) {
    case RewriteFlag.REWRITE_FLAG_UNSPECIFIED:
      return "REWRITE_FLAG_UNSPECIFIED";
    case RewriteFlag.LAST:
      return "LAST";
    case RewriteFlag.BREAK:
      return "BREAK";
    case RewriteFlag.REDIRECT:
      return "REDIRECT";
    case RewriteFlag.PERMANENT:
      return "PERMANENT";
    case RewriteFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** SecureKeyURLType defines type of the URL signing. */
export enum SecureKeyURLType {
  SECURE_KEY_URL_TYPE_UNSPECIFIED = 0,
  /** ENABLE_IP_SIGNING - Use scpecific IP address in URL signing. URL will be availible only for this IP. */
  ENABLE_IP_SIGNING = 1,
  /** DISABLE_IP_SIGNING - Sign URL without using IP address. URL will be available for all IP addresses. */
  DISABLE_IP_SIGNING = 2,
  UNRECOGNIZED = -1,
}

export function secureKeyURLTypeFromJSON(object: any): SecureKeyURLType {
  switch (object) {
    case 0:
    case "SECURE_KEY_URL_TYPE_UNSPECIFIED":
      return SecureKeyURLType.SECURE_KEY_URL_TYPE_UNSPECIFIED;
    case 1:
    case "ENABLE_IP_SIGNING":
      return SecureKeyURLType.ENABLE_IP_SIGNING;
    case 2:
    case "DISABLE_IP_SIGNING":
      return SecureKeyURLType.DISABLE_IP_SIGNING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SecureKeyURLType.UNRECOGNIZED;
  }
}

export function secureKeyURLTypeToJSON(object: SecureKeyURLType): string {
  switch (object) {
    case SecureKeyURLType.SECURE_KEY_URL_TYPE_UNSPECIFIED:
      return "SECURE_KEY_URL_TYPE_UNSPECIFIED";
    case SecureKeyURLType.ENABLE_IP_SIGNING:
      return "ENABLE_IP_SIGNING";
    case SecureKeyURLType.DISABLE_IP_SIGNING:
      return "DISABLE_IP_SIGNING";
    case SecureKeyURLType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** PolicyType defines type of the policy in IP address acl rules. */
export enum PolicyType {
  POLICY_TYPE_UNSPECIFIED = 0,
  /** POLICY_TYPE_ALLOW - Allow access to all IP addresses except the ones specified in the excepted_values field. */
  POLICY_TYPE_ALLOW = 1,
  /** POLICY_TYPE_DENY - Block access to all IP addresses except the ones specified in the excepted_values field. */
  POLICY_TYPE_DENY = 2,
  UNRECOGNIZED = -1,
}

export function policyTypeFromJSON(object: any): PolicyType {
  switch (object) {
    case 0:
    case "POLICY_TYPE_UNSPECIFIED":
      return PolicyType.POLICY_TYPE_UNSPECIFIED;
    case 1:
    case "POLICY_TYPE_ALLOW":
      return PolicyType.POLICY_TYPE_ALLOW;
    case 2:
    case "POLICY_TYPE_DENY":
      return PolicyType.POLICY_TYPE_DENY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicyType.UNRECOGNIZED;
  }
}

export function policyTypeToJSON(object: PolicyType): string {
  switch (object) {
    case PolicyType.POLICY_TYPE_UNSPECIFIED:
      return "POLICY_TYPE_UNSPECIFIED";
    case PolicyType.POLICY_TYPE_ALLOW:
      return "POLICY_TYPE_ALLOW";
    case PolicyType.POLICY_TYPE_DENY:
      return "POLICY_TYPE_DENY";
    case PolicyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A certificate type parameters. */
export enum SSLCertificateType {
  /** SSL_CERTIFICATE_TYPE_UNSPECIFIED - SSL certificate is unspecified. */
  SSL_CERTIFICATE_TYPE_UNSPECIFIED = 0,
  /** DONT_USE - No SSL certificate is added, the requests are sent via HTTP. */
  DONT_USE = 1,
  /** LETS_ENCRYPT_GCORE - Works only if you have already pointed your domain name to the protected IP address in your DNS */
  LETS_ENCRYPT_GCORE = 2,
  /** CM - Add your SSL certificate by uploading the certificate in PEM format and your private key */
  CM = 3,
  UNRECOGNIZED = -1,
}

export function sSLCertificateTypeFromJSON(object: any): SSLCertificateType {
  switch (object) {
    case 0:
    case "SSL_CERTIFICATE_TYPE_UNSPECIFIED":
      return SSLCertificateType.SSL_CERTIFICATE_TYPE_UNSPECIFIED;
    case 1:
    case "DONT_USE":
      return SSLCertificateType.DONT_USE;
    case 2:
    case "LETS_ENCRYPT_GCORE":
      return SSLCertificateType.LETS_ENCRYPT_GCORE;
    case 3:
    case "CM":
      return SSLCertificateType.CM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SSLCertificateType.UNRECOGNIZED;
  }
}

export function sSLCertificateTypeToJSON(object: SSLCertificateType): string {
  switch (object) {
    case SSLCertificateType.SSL_CERTIFICATE_TYPE_UNSPECIFIED:
      return "SSL_CERTIFICATE_TYPE_UNSPECIFIED";
    case SSLCertificateType.DONT_USE:
      return "DONT_USE";
    case SSLCertificateType.LETS_ENCRYPT_GCORE:
      return "LETS_ENCRYPT_GCORE";
    case SSLCertificateType.CM:
      return "CM";
    case SSLCertificateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A certificate status parameters. */
export enum SSLCertificateStatus {
  /** SSL_CERTIFICATE_STATUS_UNSPECIFIED - SSL certificate is unspecified. */
  SSL_CERTIFICATE_STATUS_UNSPECIFIED = 0,
  /** READY - SSL certificate is ready to use. */
  READY = 1,
  /** CREATING - SSL certificate is creating. */
  CREATING = 2,
  UNRECOGNIZED = -1,
}

export function sSLCertificateStatusFromJSON(object: any): SSLCertificateStatus {
  switch (object) {
    case 0:
    case "SSL_CERTIFICATE_STATUS_UNSPECIFIED":
      return SSLCertificateStatus.SSL_CERTIFICATE_STATUS_UNSPECIFIED;
    case 1:
    case "READY":
      return SSLCertificateStatus.READY;
    case 2:
    case "CREATING":
      return SSLCertificateStatus.CREATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SSLCertificateStatus.UNRECOGNIZED;
  }
}

export function sSLCertificateStatusToJSON(object: SSLCertificateStatus): string {
  switch (object) {
    case SSLCertificateStatus.SSL_CERTIFICATE_STATUS_UNSPECIFIED:
      return "SSL_CERTIFICATE_STATUS_UNSPECIFIED";
    case SSLCertificateStatus.READY:
      return "READY";
    case SSLCertificateStatus.CREATING:
      return "CREATING";
    case SSLCertificateStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** List of secondary (alternative) CNAMEs. */
export interface SecondaryHostnames {
  $type: "yandex.cloud.cdn.v1.SecondaryHostnames";
  /** List of secondary hostname values. */
  values: string[];
}

/** A CDN resource - representation of providers resource. */
export interface Resource {
  $type: "yandex.cloud.cdn.v1.Resource";
  /** ID of the resource. */
  id: string;
  /** Folder id. */
  folderId: string;
  /** CDN endpoint CNAME, must be unique among resources. */
  cname: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Update timestamp. */
  updatedAt?:
    | Date
    | undefined;
  /**
   * Flag to create Resource either in active or disabled state.
   * True - the content from CDN is available to clients.
   * False - the content from CDN isn't available to clients.
   */
  active: boolean;
  /** Resource settings and options to tune CDN edge behavior. */
  options?:
    | ResourceOptions
    | undefined;
  /** List of secondary hostname strings. */
  secondaryHostnames: string[];
  /** ID of the origin group. */
  originGroupId: number;
  /** Name of the origin group. */
  originGroupName: string;
  /** Specify the protocol schema to be used in communication with origin. */
  originProtocol: OriginProtocol;
  /** SSL certificate options. */
  sslCertificate?:
    | SSLCertificate
    | undefined;
  /** Labels of the resource. */
  labels: { [key: string]: string };
}

export interface Resource_LabelsEntry {
  $type: "yandex.cloud.cdn.v1.Resource.LabelsEntry";
  key: string;
  value: string;
}

/** A major set of various resource options. */
export interface ResourceOptions {
  $type: "yandex.cloud.cdn.v1.ResourceOptions";
  /** Set up a cache status. */
  disableCache?:
    | ResourceOptions_BoolOption
    | undefined;
  /** Set up [EdgeCacheSettings]. */
  edgeCacheSettings?:
    | ResourceOptions_EdgeCacheSettings
    | undefined;
  /**
   * Using [Int64Option]. Set up a cache period for the end-users browser.
   * Content will be cached due to origin settings.
   * If there are no cache settings on your origin, the content will not be cached.
   * The list of HTTP response codes that can be cached in browsers: 200, 201, 204, 206, 301, 302, 303, 304, 307, 308.
   * Other response codes will not be cached.
   * The default value is 4 days.
   */
  browserCacheSettings?:
    | ResourceOptions_Int64Option
    | undefined;
  /** List HTTP headers that must be included in responses to clients. */
  cacheHttpHeaders?:
    | ResourceOptions_StringsListOption
    | undefined;
  /** Set up [QueryParamsOptions]. */
  queryParamsOptions?:
    | ResourceOptions_QueryParamsOptions
    | undefined;
  /**
   * Files larger than 10 MB will be requested and cached in parts (no larger than 10 MB each part). It reduces time to first byte.
   *
   * The origin must support HTTP Range requests.
   *
   * By default the option is disabled.
   */
  slice?:
    | ResourceOptions_BoolOption
    | undefined;
  /** Set up compression variant. */
  compressionOptions?:
    | ResourceOptions_CompressionOptions
    | undefined;
  /** Set up redirects. */
  redirectOptions?:
    | ResourceOptions_RedirectOptions
    | undefined;
  /** Set up host parameters. */
  hostOptions?:
    | ResourceOptions_HostOptions
    | undefined;
  /** Set up static headers that CDN servers send in responses to clients. */
  staticHeaders?:
    | ResourceOptions_StringsMapOption
    | undefined;
  /**
   * Parameter that lets browsers get access to selected resources from a domain
   * different to a domain from which the request is received.
   * [Read more](/docs/cdn/concepts/cors).
   */
  cors?:
    | ResourceOptions_StringsListOption
    | undefined;
  /**
   * List of errors which instruct CDN servers to serve stale content to clients.
   *
   * Possible values: `error`, `http_403`, `http_404`, `http_429`, `http_500`, `http_502`, `http_503`, `http_504`, `invalid_header`, `timeout`, `updating`.
   */
  stale?:
    | ResourceOptions_StringsListOption
    | undefined;
  /**
   * HTTP methods for your CDN content. By default the following methods
   * are allowed: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS.
   * In case some methods are not allowed to the user, they will get the 405
   * (Method Not Allowed) response. If the method is not supported,
   * the user gets the 501 (Not Implemented) response.
   */
  allowedHttpMethods?:
    | ResourceOptions_StringsListOption
    | undefined;
  /** Allows caching for GET, HEAD and POST requests. */
  proxyCacheMethodsSet?:
    | ResourceOptions_BoolOption
    | undefined;
  /** Disabling proxy force ranges. */
  disableProxyForceRanges?:
    | ResourceOptions_BoolOption
    | undefined;
  /**
   * Set up custom headers that CDN servers send in requests to origins.
   * The Header name field can contain letters (A-Z, a-z), numbers (0-9), dashes (-) and underscores (_).
   * The Value field can contain letters (A-Z, a-z), numbers (0-9), dashes (-),
   * underscores (_), slashes (/), colons (:), equal (=), dots (.), and spaces.
   */
  staticRequestHeaders?:
    | ResourceOptions_StringsMapOption
    | undefined;
  /**
   * Wildcard additional CNAME.
   * If a resource has a wildcard additional CNAME, you can use your own certificate for content delivery via HTTPS. Read-only.
   */
  customServerName?:
    | ResourceOptions_StringOption
    | undefined;
  /** Using [BoolOption] for ignoring cookie. */
  ignoreCookie?:
    | ResourceOptions_BoolOption
    | undefined;
  /** Changing or redirecting query paths. */
  rewrite?:
    | ResourceOptions_RewriteOption
    | undefined;
  /** Secure token to protect contect and limit access by IP addresses and time limits. */
  secureKey?:
    | ResourceOptions_SecureKeyOption
    | undefined;
  /**
   * Manage the state of the IP access policy option.
   * The option controls access to content from the specified IP addresses.
   */
  ipAddressAcl?: ResourceOptions_IPAddressACLOption | undefined;
}

/** Set up bool values. */
export interface ResourceOptions_BoolOption {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.BoolOption";
  /**
   * True - the option is enabled and its [value] is applied to the resource.
   * False - the option is disabled and its default value is used for the resource.
   */
  enabled: boolean;
  /** Value of the option. */
  value: boolean;
}

/** A set of the string parameters. */
export interface ResourceOptions_StringOption {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringOption";
  /**
   * True - the option is enabled and its [value] is applied to the resource.
   * False - the option is disabled and its default value is used for the resource.
   */
  enabled: boolean;
  /** Value of the option. */
  value: string;
}

/** A set of the numeric parameters. */
export interface ResourceOptions_Int64Option {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.Int64Option";
  /**
   * True - the option is enabled and its [value] is applied to the resource.
   * False - the option is disabled and its default value is used for the resource.
   */
  enabled: boolean;
  /** Value of the option. */
  value: number;
}

/** A set of the string list parameters. */
export interface ResourceOptions_StringsListOption {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsListOption";
  /**
   * True - the option is enabled and its [value] is applied to the resource.
   * False - the option is disabled and its default value is used for the resource.
   */
  enabled: boolean;
  /** Value of the option. */
  value: string[];
}

/** A set of the strings map parameters. */
export interface ResourceOptions_StringsMapOption {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption";
  /**
   * True - the option is enabled and its [value] is applied to the resource.
   * False - the option is disabled and its default value is used for the resource.
   */
  enabled: boolean;
  /** Value of the option. */
  value: { [key: string]: string };
}

export interface ResourceOptions_StringsMapOption_ValueEntry {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry";
  key: string;
  value: string;
}

/** A set of the caching response time parameters. */
export interface ResourceOptions_CachingTimes {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes";
  /**
   * Caching time for a response with codes 200, 206, 301, 302.
   * Responses with codes 4xx, 5xx will not be cached. Use `0s` disable to caching.
   * Use [custom_values] field to specify a custom caching time for a response with specific codes.
   */
  simpleValue: number;
  /**
   * Caching time for a response with specific codes. These settings have a higher priority than the value field.
   * Response code (`304`, `404` for example). Use `any` to specify caching time for all response codes.
   * Caching time in seconds (`0s`, `600s` for example). Use `0s` to disable caching for a specific response code.
   */
  customValues: { [key: string]: number };
}

export interface ResourceOptions_CachingTimes_CustomValuesEntry {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry";
  key: string;
  value: number;
}

/** A set of the edge cache parameters. */
export interface ResourceOptions_EdgeCacheSettings {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings";
  /**
   * True - the option is enabled and its `values_variant` is applied to the resource.
   * False - the option is disabled and its default value is used for the resource.
   */
  enabled: boolean;
  /** Value of the option. */
  value?:
    | ResourceOptions_CachingTimes
    | undefined;
  /**
   * Content will be cached according to origin cache settings.
   * The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308
   * if an origin server does not have caching HTTP headers.
   * Responses with other codes will not be cached.
   */
  defaultValue?: number | undefined;
}

/** A set of the string variable map parameters. */
export interface ResourceOptions_StringVariableMapOption {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption";
  /**
   * True - the option is enabled and its [value] is applied to the resource.
   * False - the option is disabled and its default value is used for the resource.
   */
  enabled: boolean;
  /** Value of the option. */
  value: { [key: string]: ResourceOptions_StringVariableMapOption_OneofString };
}

export interface ResourceOptions_StringVariableMapOption_OneofString {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString";
  /** Using [StringOption] to set value. */
  value?:
    | ResourceOptions_StringOption
    | undefined;
  /** Using [StringsListOption] to set values. */
  values?: ResourceOptions_StringsListOption | undefined;
}

export interface ResourceOptions_StringVariableMapOption_ValueEntry {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry";
  key: string;
  value?: ResourceOptions_StringVariableMapOption_OneofString | undefined;
}

/** A set of the query parameters. */
export interface ResourceOptions_QueryParamsOptions {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions";
  /** Using [BoolOption]. Selected by default. Files with different query parameters are cached as objects with the same key regardless of the parameter value. */
  ignoreQueryString?:
    | ResourceOptions_BoolOption
    | undefined;
  /**
   * Ignore All Except.
   * Files with the specified query parameters are cached as objects with different keys,
   * files with other parameters are cached as objects with the same key.
   */
  queryParamsWhitelist?:
    | ResourceOptions_StringsListOption
    | undefined;
  /**
   * Ignore only. Files with the specified query parameters are cached as objects with the same key,
   * files with other parameters are cached as objects with different keys.
   */
  queryParamsBlacklist?: ResourceOptions_StringsListOption | undefined;
}

/** A set of the redirect parameters. */
export interface ResourceOptions_RedirectOptions {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions";
  /** Using [BoolOption]. Set up a redirect from HTTPS to HTTP. */
  redirectHttpToHttps?:
    | ResourceOptions_BoolOption
    | undefined;
  /** Using [BoolOption]. Set up a redirect from HTTP to HTTPS. */
  redirectHttpsToHttp?: ResourceOptions_BoolOption | undefined;
}

/** A set of the host parameters. */
export interface ResourceOptions_HostOptions {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.HostOptions";
  /**
   * Custom value for the Host header.
   *
   * Your server must be able to process requests with the chosen header.
   *
   * Default value (if [StringOption.enabled] is `false`) is [Resource.cname].
   */
  host?:
    | ResourceOptions_StringOption
    | undefined;
  /**
   * Using [BoolOption]. Choose the Forward Host header option if is important to send in the request to the Origin
   * the same Host header as was sent in the request to CDN server.
   */
  forwardHostHeader?: ResourceOptions_BoolOption | undefined;
}

/** A set of the compression variant parameters. */
export interface ResourceOptions_CompressionOptions {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions";
  /**
   * The Fetch compressed option helps you to reduce
   * the bandwidth between origin and CDN servers.
   * Also, content delivery speed becomes higher because of reducing the time
   * for compressing files in a CDN.
   */
  fetchCompressed?:
    | ResourceOptions_BoolOption
    | undefined;
  /** Using [BoolOption]. GZip compression at CDN servers reduces file size by 70% and can be as high as 90%. */
  gzipOn?:
    | ResourceOptions_BoolOption
    | undefined;
  /**
   * The option allows to compress content with brotli on the CDN's end.
   *
   * Compression is performed on the Origin Shielding. If a pre-cache server doesn't active for a resource, compression does not occur even if the option is enabled.
   *
   * Specify the content-type for each type of content you wish to have compressed. CDN servers will request only uncompressed content from the origin.
   */
  brotliCompression?: ResourceOptions_StringsListOption | undefined;
}

/** An option for changing or redirecting query paths. */
export interface ResourceOptions_RewriteOption {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.RewriteOption";
  /**
   * True - the option is enabled and its [flag] is applied to the resource.
   * False - the option is disabled and its default value of the [flag] is used for the resource.
   */
  enabled: boolean;
  /**
   * Pattern for rewrite.
   *
   * The value must have the following format: `<source path> <destination path>`, where both paths are regular expressions which use at least one group. E.g., `/foo/(.*) /bar/$1`.
   */
  body: string;
  /**
   * Break flag is applied to the option by default.
   * It is not shown in the field.
   */
  flag: RewriteFlag;
}

export interface ResourceOptions_SecureKeyOption {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.SecureKeyOption";
  /**
   * True - the option is enabled and its [flag] is applied to the resource.
   * False - the option is disabled and its default value of the [flag] is used for the resource.
   */
  enabled: boolean;
  /** The key for the URL signing. */
  key: string;
  /** The type of the URL signing. The URL could be available for all IP addresses or for the only one IP. */
  type: SecureKeyURLType;
}

export interface ResourceOptions_IPAddressACLOption {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.IPAddressACLOption";
  /**
   * True - the option is enabled and its [flag] is applied to the resource.
   * False - the option is disabled and its default value of the [flag] is used for the resource.
   */
  enabled: boolean;
  /** The policy type. One of allow or deny value. */
  policyType: PolicyType;
  /** The list of IP addresses to be allowed or denied. */
  exceptedValues: string[];
}

/** A set of the personal SSL certificate parameters. */
export interface SSLTargetCertificate {
  $type: "yandex.cloud.cdn.v1.SSLTargetCertificate";
  /** Type of the certificate. */
  type: SSLCertificateType;
  /** Certificate data. */
  data?: SSLCertificateData | undefined;
}

/** A SSL certificate parameters. */
export interface SSLCertificate {
  $type: "yandex.cloud.cdn.v1.SSLCertificate";
  /** Type of the certificate. */
  type: SSLCertificateType;
  /** Active status. */
  status: SSLCertificateStatus;
  /** Certificate data. */
  data?: SSLCertificateData | undefined;
}

/** A certificate data parameters. */
export interface SSLCertificateData {
  $type: "yandex.cloud.cdn.v1.SSLCertificateData";
  /**
   * Custom (add your SSL certificate by uploading the certificate
   * in PEM format and your private key).
   */
  cm?: SSLCertificateCMData | undefined;
}

/** A certificate data custom parameters. */
export interface SSLCertificateCMData {
  $type: "yandex.cloud.cdn.v1.SSLCertificateCMData";
  /** ID of the custom certificate. */
  id: string;
}

function createBaseSecondaryHostnames(): SecondaryHostnames {
  return { $type: "yandex.cloud.cdn.v1.SecondaryHostnames", values: [] };
}

export const SecondaryHostnames = {
  $type: "yandex.cloud.cdn.v1.SecondaryHostnames" as const,

  encode(message: SecondaryHostnames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecondaryHostnames {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondaryHostnames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecondaryHostnames {
    return {
      $type: SecondaryHostnames.$type,
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: SecondaryHostnames): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SecondaryHostnames>, I>>(base?: I): SecondaryHostnames {
    return SecondaryHostnames.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SecondaryHostnames>, I>>(object: I): SecondaryHostnames {
    const message = createBaseSecondaryHostnames();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(SecondaryHostnames.$type, SecondaryHostnames);

function createBaseResource(): Resource {
  return {
    $type: "yandex.cloud.cdn.v1.Resource",
    id: "",
    folderId: "",
    cname: "",
    createdAt: undefined,
    updatedAt: undefined,
    active: false,
    options: undefined,
    secondaryHostnames: [],
    originGroupId: 0,
    originGroupName: "",
    originProtocol: 0,
    sslCertificate: undefined,
    labels: {},
  };
}

export const Resource = {
  $type: "yandex.cloud.cdn.v1.Resource" as const,

  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.cname !== "") {
      writer.uint32(26).string(message.cname);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.active === true) {
      writer.uint32(48).bool(message.active);
    }
    if (message.options !== undefined) {
      ResourceOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.secondaryHostnames) {
      writer.uint32(66).string(v!);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(72).int64(message.originGroupId);
    }
    if (message.originGroupName !== "") {
      writer.uint32(82).string(message.originGroupName);
    }
    if (message.originProtocol !== 0) {
      writer.uint32(88).int32(message.originProtocol);
    }
    if (message.sslCertificate !== undefined) {
      SSLCertificate.encode(message.sslCertificate, writer.uint32(98).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Resource_LabelsEntry.encode(
        { $type: "yandex.cloud.cdn.v1.Resource.LabelsEntry", key: key as any, value },
        writer.uint32(106).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
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

          message.cname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.options = ResourceOptions.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.secondaryHostnames.push(reader.string());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.originGroupId = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.originGroupName = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.originProtocol = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.sslCertificate = SSLCertificate.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          const entry13 = Resource_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): Resource {
    return {
      $type: Resource.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      cname: isSet(object.cname) ? globalThis.String(object.cname) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
      options: isSet(object.options) ? ResourceOptions.fromJSON(object.options) : undefined,
      secondaryHostnames: globalThis.Array.isArray(object?.secondaryHostnames)
        ? object.secondaryHostnames.map((e: any) => globalThis.String(e))
        : [],
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
      originGroupName: isSet(object.originGroupName) ? globalThis.String(object.originGroupName) : "",
      originProtocol: isSet(object.originProtocol) ? originProtocolFromJSON(object.originProtocol) : 0,
      sslCertificate: isSet(object.sslCertificate) ? SSLCertificate.fromJSON(object.sslCertificate) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.cname !== "") {
      obj.cname = message.cname;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.options !== undefined) {
      obj.options = ResourceOptions.toJSON(message.options);
    }
    if (message.secondaryHostnames?.length) {
      obj.secondaryHostnames = message.secondaryHostnames;
    }
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    if (message.originGroupName !== "") {
      obj.originGroupName = message.originGroupName;
    }
    if (message.originProtocol !== 0) {
      obj.originProtocol = originProtocolToJSON(message.originProtocol);
    }
    if (message.sslCertificate !== undefined) {
      obj.sslCertificate = SSLCertificate.toJSON(message.sslCertificate);
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

  create<I extends Exact<DeepPartial<Resource>, I>>(base?: I): Resource {
    return Resource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.cname = object.cname ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.active = object.active ?? false;
    message.options = (object.options !== undefined && object.options !== null)
      ? ResourceOptions.fromPartial(object.options)
      : undefined;
    message.secondaryHostnames = object.secondaryHostnames?.map((e) => e) || [];
    message.originGroupId = object.originGroupId ?? 0;
    message.originGroupName = object.originGroupName ?? "";
    message.originProtocol = object.originProtocol ?? 0;
    message.sslCertificate = (object.sslCertificate !== undefined && object.sslCertificate !== null)
      ? SSLCertificate.fromPartial(object.sslCertificate)
      : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(Resource.$type, Resource);

function createBaseResource_LabelsEntry(): Resource_LabelsEntry {
  return { $type: "yandex.cloud.cdn.v1.Resource.LabelsEntry", key: "", value: "" };
}

export const Resource_LabelsEntry = {
  $type: "yandex.cloud.cdn.v1.Resource.LabelsEntry" as const,

  encode(message: Resource_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource_LabelsEntry();
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

  fromJSON(object: any): Resource_LabelsEntry {
    return {
      $type: Resource_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Resource_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resource_LabelsEntry>, I>>(base?: I): Resource_LabelsEntry {
    return Resource_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resource_LabelsEntry>, I>>(object: I): Resource_LabelsEntry {
    const message = createBaseResource_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Resource_LabelsEntry.$type, Resource_LabelsEntry);

function createBaseResourceOptions(): ResourceOptions {
  return {
    $type: "yandex.cloud.cdn.v1.ResourceOptions",
    disableCache: undefined,
    edgeCacheSettings: undefined,
    browserCacheSettings: undefined,
    cacheHttpHeaders: undefined,
    queryParamsOptions: undefined,
    slice: undefined,
    compressionOptions: undefined,
    redirectOptions: undefined,
    hostOptions: undefined,
    staticHeaders: undefined,
    cors: undefined,
    stale: undefined,
    allowedHttpMethods: undefined,
    proxyCacheMethodsSet: undefined,
    disableProxyForceRanges: undefined,
    staticRequestHeaders: undefined,
    customServerName: undefined,
    ignoreCookie: undefined,
    rewrite: undefined,
    secureKey: undefined,
    ipAddressAcl: undefined,
  };
}

export const ResourceOptions = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions" as const,

  encode(message: ResourceOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disableCache !== undefined) {
      ResourceOptions_BoolOption.encode(message.disableCache, writer.uint32(10).fork()).ldelim();
    }
    if (message.edgeCacheSettings !== undefined) {
      ResourceOptions_EdgeCacheSettings.encode(message.edgeCacheSettings, writer.uint32(18).fork()).ldelim();
    }
    if (message.browserCacheSettings !== undefined) {
      ResourceOptions_Int64Option.encode(message.browserCacheSettings, writer.uint32(26).fork()).ldelim();
    }
    if (message.cacheHttpHeaders !== undefined) {
      ResourceOptions_StringsListOption.encode(message.cacheHttpHeaders, writer.uint32(34).fork()).ldelim();
    }
    if (message.queryParamsOptions !== undefined) {
      ResourceOptions_QueryParamsOptions.encode(message.queryParamsOptions, writer.uint32(42).fork()).ldelim();
    }
    if (message.slice !== undefined) {
      ResourceOptions_BoolOption.encode(message.slice, writer.uint32(50).fork()).ldelim();
    }
    if (message.compressionOptions !== undefined) {
      ResourceOptions_CompressionOptions.encode(message.compressionOptions, writer.uint32(58).fork()).ldelim();
    }
    if (message.redirectOptions !== undefined) {
      ResourceOptions_RedirectOptions.encode(message.redirectOptions, writer.uint32(66).fork()).ldelim();
    }
    if (message.hostOptions !== undefined) {
      ResourceOptions_HostOptions.encode(message.hostOptions, writer.uint32(74).fork()).ldelim();
    }
    if (message.staticHeaders !== undefined) {
      ResourceOptions_StringsMapOption.encode(message.staticHeaders, writer.uint32(82).fork()).ldelim();
    }
    if (message.cors !== undefined) {
      ResourceOptions_StringsListOption.encode(message.cors, writer.uint32(90).fork()).ldelim();
    }
    if (message.stale !== undefined) {
      ResourceOptions_StringsListOption.encode(message.stale, writer.uint32(98).fork()).ldelim();
    }
    if (message.allowedHttpMethods !== undefined) {
      ResourceOptions_StringsListOption.encode(message.allowedHttpMethods, writer.uint32(106).fork()).ldelim();
    }
    if (message.proxyCacheMethodsSet !== undefined) {
      ResourceOptions_BoolOption.encode(message.proxyCacheMethodsSet, writer.uint32(114).fork()).ldelim();
    }
    if (message.disableProxyForceRanges !== undefined) {
      ResourceOptions_BoolOption.encode(message.disableProxyForceRanges, writer.uint32(122).fork()).ldelim();
    }
    if (message.staticRequestHeaders !== undefined) {
      ResourceOptions_StringsMapOption.encode(message.staticRequestHeaders, writer.uint32(130).fork()).ldelim();
    }
    if (message.customServerName !== undefined) {
      ResourceOptions_StringOption.encode(message.customServerName, writer.uint32(138).fork()).ldelim();
    }
    if (message.ignoreCookie !== undefined) {
      ResourceOptions_BoolOption.encode(message.ignoreCookie, writer.uint32(146).fork()).ldelim();
    }
    if (message.rewrite !== undefined) {
      ResourceOptions_RewriteOption.encode(message.rewrite, writer.uint32(154).fork()).ldelim();
    }
    if (message.secureKey !== undefined) {
      ResourceOptions_SecureKeyOption.encode(message.secureKey, writer.uint32(162).fork()).ldelim();
    }
    if (message.ipAddressAcl !== undefined) {
      ResourceOptions_IPAddressACLOption.encode(message.ipAddressAcl, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.disableCache = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.edgeCacheSettings = ResourceOptions_EdgeCacheSettings.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.browserCacheSettings = ResourceOptions_Int64Option.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cacheHttpHeaders = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.queryParamsOptions = ResourceOptions_QueryParamsOptions.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.slice = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.compressionOptions = ResourceOptions_CompressionOptions.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.redirectOptions = ResourceOptions_RedirectOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.hostOptions = ResourceOptions_HostOptions.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.staticHeaders = ResourceOptions_StringsMapOption.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.cors = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.stale = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.allowedHttpMethods = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.proxyCacheMethodsSet = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.disableProxyForceRanges = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.staticRequestHeaders = ResourceOptions_StringsMapOption.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.customServerName = ResourceOptions_StringOption.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.ignoreCookie = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.rewrite = ResourceOptions_RewriteOption.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.secureKey = ResourceOptions_SecureKeyOption.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.ipAddressAcl = ResourceOptions_IPAddressACLOption.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions {
    return {
      $type: ResourceOptions.$type,
      disableCache: isSet(object.disableCache) ? ResourceOptions_BoolOption.fromJSON(object.disableCache) : undefined,
      edgeCacheSettings: isSet(object.edgeCacheSettings)
        ? ResourceOptions_EdgeCacheSettings.fromJSON(object.edgeCacheSettings)
        : undefined,
      browserCacheSettings: isSet(object.browserCacheSettings)
        ? ResourceOptions_Int64Option.fromJSON(object.browserCacheSettings)
        : undefined,
      cacheHttpHeaders: isSet(object.cacheHttpHeaders)
        ? ResourceOptions_StringsListOption.fromJSON(object.cacheHttpHeaders)
        : undefined,
      queryParamsOptions: isSet(object.queryParamsOptions)
        ? ResourceOptions_QueryParamsOptions.fromJSON(object.queryParamsOptions)
        : undefined,
      slice: isSet(object.slice) ? ResourceOptions_BoolOption.fromJSON(object.slice) : undefined,
      compressionOptions: isSet(object.compressionOptions)
        ? ResourceOptions_CompressionOptions.fromJSON(object.compressionOptions)
        : undefined,
      redirectOptions: isSet(object.redirectOptions)
        ? ResourceOptions_RedirectOptions.fromJSON(object.redirectOptions)
        : undefined,
      hostOptions: isSet(object.hostOptions) ? ResourceOptions_HostOptions.fromJSON(object.hostOptions) : undefined,
      staticHeaders: isSet(object.staticHeaders)
        ? ResourceOptions_StringsMapOption.fromJSON(object.staticHeaders)
        : undefined,
      cors: isSet(object.cors) ? ResourceOptions_StringsListOption.fromJSON(object.cors) : undefined,
      stale: isSet(object.stale) ? ResourceOptions_StringsListOption.fromJSON(object.stale) : undefined,
      allowedHttpMethods: isSet(object.allowedHttpMethods)
        ? ResourceOptions_StringsListOption.fromJSON(object.allowedHttpMethods)
        : undefined,
      proxyCacheMethodsSet: isSet(object.proxyCacheMethodsSet)
        ? ResourceOptions_BoolOption.fromJSON(object.proxyCacheMethodsSet)
        : undefined,
      disableProxyForceRanges: isSet(object.disableProxyForceRanges)
        ? ResourceOptions_BoolOption.fromJSON(object.disableProxyForceRanges)
        : undefined,
      staticRequestHeaders: isSet(object.staticRequestHeaders)
        ? ResourceOptions_StringsMapOption.fromJSON(object.staticRequestHeaders)
        : undefined,
      customServerName: isSet(object.customServerName)
        ? ResourceOptions_StringOption.fromJSON(object.customServerName)
        : undefined,
      ignoreCookie: isSet(object.ignoreCookie) ? ResourceOptions_BoolOption.fromJSON(object.ignoreCookie) : undefined,
      rewrite: isSet(object.rewrite) ? ResourceOptions_RewriteOption.fromJSON(object.rewrite) : undefined,
      secureKey: isSet(object.secureKey) ? ResourceOptions_SecureKeyOption.fromJSON(object.secureKey) : undefined,
      ipAddressAcl: isSet(object.ipAddressAcl)
        ? ResourceOptions_IPAddressACLOption.fromJSON(object.ipAddressAcl)
        : undefined,
    };
  },

  toJSON(message: ResourceOptions): unknown {
    const obj: any = {};
    if (message.disableCache !== undefined) {
      obj.disableCache = ResourceOptions_BoolOption.toJSON(message.disableCache);
    }
    if (message.edgeCacheSettings !== undefined) {
      obj.edgeCacheSettings = ResourceOptions_EdgeCacheSettings.toJSON(message.edgeCacheSettings);
    }
    if (message.browserCacheSettings !== undefined) {
      obj.browserCacheSettings = ResourceOptions_Int64Option.toJSON(message.browserCacheSettings);
    }
    if (message.cacheHttpHeaders !== undefined) {
      obj.cacheHttpHeaders = ResourceOptions_StringsListOption.toJSON(message.cacheHttpHeaders);
    }
    if (message.queryParamsOptions !== undefined) {
      obj.queryParamsOptions = ResourceOptions_QueryParamsOptions.toJSON(message.queryParamsOptions);
    }
    if (message.slice !== undefined) {
      obj.slice = ResourceOptions_BoolOption.toJSON(message.slice);
    }
    if (message.compressionOptions !== undefined) {
      obj.compressionOptions = ResourceOptions_CompressionOptions.toJSON(message.compressionOptions);
    }
    if (message.redirectOptions !== undefined) {
      obj.redirectOptions = ResourceOptions_RedirectOptions.toJSON(message.redirectOptions);
    }
    if (message.hostOptions !== undefined) {
      obj.hostOptions = ResourceOptions_HostOptions.toJSON(message.hostOptions);
    }
    if (message.staticHeaders !== undefined) {
      obj.staticHeaders = ResourceOptions_StringsMapOption.toJSON(message.staticHeaders);
    }
    if (message.cors !== undefined) {
      obj.cors = ResourceOptions_StringsListOption.toJSON(message.cors);
    }
    if (message.stale !== undefined) {
      obj.stale = ResourceOptions_StringsListOption.toJSON(message.stale);
    }
    if (message.allowedHttpMethods !== undefined) {
      obj.allowedHttpMethods = ResourceOptions_StringsListOption.toJSON(message.allowedHttpMethods);
    }
    if (message.proxyCacheMethodsSet !== undefined) {
      obj.proxyCacheMethodsSet = ResourceOptions_BoolOption.toJSON(message.proxyCacheMethodsSet);
    }
    if (message.disableProxyForceRanges !== undefined) {
      obj.disableProxyForceRanges = ResourceOptions_BoolOption.toJSON(message.disableProxyForceRanges);
    }
    if (message.staticRequestHeaders !== undefined) {
      obj.staticRequestHeaders = ResourceOptions_StringsMapOption.toJSON(message.staticRequestHeaders);
    }
    if (message.customServerName !== undefined) {
      obj.customServerName = ResourceOptions_StringOption.toJSON(message.customServerName);
    }
    if (message.ignoreCookie !== undefined) {
      obj.ignoreCookie = ResourceOptions_BoolOption.toJSON(message.ignoreCookie);
    }
    if (message.rewrite !== undefined) {
      obj.rewrite = ResourceOptions_RewriteOption.toJSON(message.rewrite);
    }
    if (message.secureKey !== undefined) {
      obj.secureKey = ResourceOptions_SecureKeyOption.toJSON(message.secureKey);
    }
    if (message.ipAddressAcl !== undefined) {
      obj.ipAddressAcl = ResourceOptions_IPAddressACLOption.toJSON(message.ipAddressAcl);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions>, I>>(base?: I): ResourceOptions {
    return ResourceOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions>, I>>(object: I): ResourceOptions {
    const message = createBaseResourceOptions();
    message.disableCache = (object.disableCache !== undefined && object.disableCache !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.disableCache)
      : undefined;
    message.edgeCacheSettings = (object.edgeCacheSettings !== undefined && object.edgeCacheSettings !== null)
      ? ResourceOptions_EdgeCacheSettings.fromPartial(object.edgeCacheSettings)
      : undefined;
    message.browserCacheSettings = (object.browserCacheSettings !== undefined && object.browserCacheSettings !== null)
      ? ResourceOptions_Int64Option.fromPartial(object.browserCacheSettings)
      : undefined;
    message.cacheHttpHeaders = (object.cacheHttpHeaders !== undefined && object.cacheHttpHeaders !== null)
      ? ResourceOptions_StringsListOption.fromPartial(object.cacheHttpHeaders)
      : undefined;
    message.queryParamsOptions = (object.queryParamsOptions !== undefined && object.queryParamsOptions !== null)
      ? ResourceOptions_QueryParamsOptions.fromPartial(object.queryParamsOptions)
      : undefined;
    message.slice = (object.slice !== undefined && object.slice !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.slice)
      : undefined;
    message.compressionOptions = (object.compressionOptions !== undefined && object.compressionOptions !== null)
      ? ResourceOptions_CompressionOptions.fromPartial(object.compressionOptions)
      : undefined;
    message.redirectOptions = (object.redirectOptions !== undefined && object.redirectOptions !== null)
      ? ResourceOptions_RedirectOptions.fromPartial(object.redirectOptions)
      : undefined;
    message.hostOptions = (object.hostOptions !== undefined && object.hostOptions !== null)
      ? ResourceOptions_HostOptions.fromPartial(object.hostOptions)
      : undefined;
    message.staticHeaders = (object.staticHeaders !== undefined && object.staticHeaders !== null)
      ? ResourceOptions_StringsMapOption.fromPartial(object.staticHeaders)
      : undefined;
    message.cors = (object.cors !== undefined && object.cors !== null)
      ? ResourceOptions_StringsListOption.fromPartial(object.cors)
      : undefined;
    message.stale = (object.stale !== undefined && object.stale !== null)
      ? ResourceOptions_StringsListOption.fromPartial(object.stale)
      : undefined;
    message.allowedHttpMethods = (object.allowedHttpMethods !== undefined && object.allowedHttpMethods !== null)
      ? ResourceOptions_StringsListOption.fromPartial(object.allowedHttpMethods)
      : undefined;
    message.proxyCacheMethodsSet = (object.proxyCacheMethodsSet !== undefined && object.proxyCacheMethodsSet !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.proxyCacheMethodsSet)
      : undefined;
    message.disableProxyForceRanges =
      (object.disableProxyForceRanges !== undefined && object.disableProxyForceRanges !== null)
        ? ResourceOptions_BoolOption.fromPartial(object.disableProxyForceRanges)
        : undefined;
    message.staticRequestHeaders = (object.staticRequestHeaders !== undefined && object.staticRequestHeaders !== null)
      ? ResourceOptions_StringsMapOption.fromPartial(object.staticRequestHeaders)
      : undefined;
    message.customServerName = (object.customServerName !== undefined && object.customServerName !== null)
      ? ResourceOptions_StringOption.fromPartial(object.customServerName)
      : undefined;
    message.ignoreCookie = (object.ignoreCookie !== undefined && object.ignoreCookie !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.ignoreCookie)
      : undefined;
    message.rewrite = (object.rewrite !== undefined && object.rewrite !== null)
      ? ResourceOptions_RewriteOption.fromPartial(object.rewrite)
      : undefined;
    message.secureKey = (object.secureKey !== undefined && object.secureKey !== null)
      ? ResourceOptions_SecureKeyOption.fromPartial(object.secureKey)
      : undefined;
    message.ipAddressAcl = (object.ipAddressAcl !== undefined && object.ipAddressAcl !== null)
      ? ResourceOptions_IPAddressACLOption.fromPartial(object.ipAddressAcl)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions.$type, ResourceOptions);

function createBaseResourceOptions_BoolOption(): ResourceOptions_BoolOption {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.BoolOption", enabled: false, value: false };
}

export const ResourceOptions_BoolOption = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.BoolOption" as const,

  encode(message: ResourceOptions_BoolOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_BoolOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_BoolOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_BoolOption {
    return {
      $type: ResourceOptions_BoolOption.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: ResourceOptions_BoolOption): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.value === true) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_BoolOption>, I>>(base?: I): ResourceOptions_BoolOption {
    return ResourceOptions_BoolOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_BoolOption>, I>>(object: I): ResourceOptions_BoolOption {
    const message = createBaseResourceOptions_BoolOption();
    message.enabled = object.enabled ?? false;
    message.value = object.value ?? false;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_BoolOption.$type, ResourceOptions_BoolOption);

function createBaseResourceOptions_StringOption(): ResourceOptions_StringOption {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.StringOption", enabled: false, value: "" };
}

export const ResourceOptions_StringOption = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringOption" as const,

  encode(message: ResourceOptions_StringOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_StringOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
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

  fromJSON(object: any): ResourceOptions_StringOption {
    return {
      $type: ResourceOptions_StringOption.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ResourceOptions_StringOption): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_StringOption>, I>>(base?: I): ResourceOptions_StringOption {
    return ResourceOptions_StringOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringOption>, I>>(object: I): ResourceOptions_StringOption {
    const message = createBaseResourceOptions_StringOption();
    message.enabled = object.enabled ?? false;
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_StringOption.$type, ResourceOptions_StringOption);

function createBaseResourceOptions_Int64Option(): ResourceOptions_Int64Option {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.Int64Option", enabled: false, value: 0 };
}

export const ResourceOptions_Int64Option = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.Int64Option" as const,

  encode(message: ResourceOptions_Int64Option, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_Int64Option {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_Int64Option();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_Int64Option {
    return {
      $type: ResourceOptions_Int64Option.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: ResourceOptions_Int64Option): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_Int64Option>, I>>(base?: I): ResourceOptions_Int64Option {
    return ResourceOptions_Int64Option.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_Int64Option>, I>>(object: I): ResourceOptions_Int64Option {
    const message = createBaseResourceOptions_Int64Option();
    message.enabled = object.enabled ?? false;
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_Int64Option.$type, ResourceOptions_Int64Option);

function createBaseResourceOptions_StringsListOption(): ResourceOptions_StringsListOption {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsListOption", enabled: false, value: [] };
}

export const ResourceOptions_StringsListOption = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsListOption" as const,

  encode(message: ResourceOptions_StringsListOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    for (const v of message.value) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringsListOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_StringsListOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): ResourceOptions_StringsListOption {
    return {
      $type: ResourceOptions_StringsListOption.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      value: globalThis.Array.isArray(object?.value) ? object.value.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ResourceOptions_StringsListOption): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.value?.length) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_StringsListOption>, I>>(
    base?: I,
  ): ResourceOptions_StringsListOption {
    return ResourceOptions_StringsListOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringsListOption>, I>>(
    object: I,
  ): ResourceOptions_StringsListOption {
    const message = createBaseResourceOptions_StringsListOption();
    message.enabled = object.enabled ?? false;
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_StringsListOption.$type, ResourceOptions_StringsListOption);

function createBaseResourceOptions_StringsMapOption(): ResourceOptions_StringsMapOption {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption", enabled: false, value: {} };
}

export const ResourceOptions_StringsMapOption = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption" as const,

  encode(message: ResourceOptions_StringsMapOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    Object.entries(message.value).forEach(([key, value]) => {
      ResourceOptions_StringsMapOption_ValueEntry.encode({
        $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry",
        key: key as any,
        value,
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringsMapOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_StringsMapOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = ResourceOptions_StringsMapOption_ValueEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.value[entry2.key] = entry2.value;
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

  fromJSON(object: any): ResourceOptions_StringsMapOption {
    return {
      $type: ResourceOptions_StringsMapOption.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      value: isObject(object.value)
        ? Object.entries(object.value).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ResourceOptions_StringsMapOption): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.value) {
      const entries = Object.entries(message.value);
      if (entries.length > 0) {
        obj.value = {};
        entries.forEach(([k, v]) => {
          obj.value[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_StringsMapOption>, I>>(
    base?: I,
  ): ResourceOptions_StringsMapOption {
    return ResourceOptions_StringsMapOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringsMapOption>, I>>(
    object: I,
  ): ResourceOptions_StringsMapOption {
    const message = createBaseResourceOptions_StringsMapOption();
    message.enabled = object.enabled ?? false;
    message.value = Object.entries(object.value ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_StringsMapOption.$type, ResourceOptions_StringsMapOption);

function createBaseResourceOptions_StringsMapOption_ValueEntry(): ResourceOptions_StringsMapOption_ValueEntry {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry", key: "", value: "" };
}

export const ResourceOptions_StringsMapOption_ValueEntry = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry" as const,

  encode(message: ResourceOptions_StringsMapOption_ValueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringsMapOption_ValueEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_StringsMapOption_ValueEntry();
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

  fromJSON(object: any): ResourceOptions_StringsMapOption_ValueEntry {
    return {
      $type: ResourceOptions_StringsMapOption_ValueEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ResourceOptions_StringsMapOption_ValueEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_StringsMapOption_ValueEntry>, I>>(
    base?: I,
  ): ResourceOptions_StringsMapOption_ValueEntry {
    return ResourceOptions_StringsMapOption_ValueEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringsMapOption_ValueEntry>, I>>(
    object: I,
  ): ResourceOptions_StringsMapOption_ValueEntry {
    const message = createBaseResourceOptions_StringsMapOption_ValueEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_StringsMapOption_ValueEntry.$type, ResourceOptions_StringsMapOption_ValueEntry);

function createBaseResourceOptions_CachingTimes(): ResourceOptions_CachingTimes {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes", simpleValue: 0, customValues: {} };
}

export const ResourceOptions_CachingTimes = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes" as const,

  encode(message: ResourceOptions_CachingTimes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.simpleValue !== 0) {
      writer.uint32(8).int64(message.simpleValue);
    }
    Object.entries(message.customValues).forEach(([key, value]) => {
      ResourceOptions_CachingTimes_CustomValuesEntry.encode({
        $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry",
        key: key as any,
        value,
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_CachingTimes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_CachingTimes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.simpleValue = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = ResourceOptions_CachingTimes_CustomValuesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.customValues[entry2.key] = entry2.value;
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

  fromJSON(object: any): ResourceOptions_CachingTimes {
    return {
      $type: ResourceOptions_CachingTimes.$type,
      simpleValue: isSet(object.simpleValue) ? globalThis.Number(object.simpleValue) : 0,
      customValues: isObject(object.customValues)
        ? Object.entries(object.customValues).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ResourceOptions_CachingTimes): unknown {
    const obj: any = {};
    if (message.simpleValue !== 0) {
      obj.simpleValue = Math.round(message.simpleValue);
    }
    if (message.customValues) {
      const entries = Object.entries(message.customValues);
      if (entries.length > 0) {
        obj.customValues = {};
        entries.forEach(([k, v]) => {
          obj.customValues[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_CachingTimes>, I>>(base?: I): ResourceOptions_CachingTimes {
    return ResourceOptions_CachingTimes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_CachingTimes>, I>>(object: I): ResourceOptions_CachingTimes {
    const message = createBaseResourceOptions_CachingTimes();
    message.simpleValue = object.simpleValue ?? 0;
    message.customValues = Object.entries(object.customValues ?? {}).reduce<{ [key: string]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_CachingTimes.$type, ResourceOptions_CachingTimes);

function createBaseResourceOptions_CachingTimes_CustomValuesEntry(): ResourceOptions_CachingTimes_CustomValuesEntry {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry", key: "", value: 0 };
}

export const ResourceOptions_CachingTimes_CustomValuesEntry = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry" as const,

  encode(
    message: ResourceOptions_CachingTimes_CustomValuesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_CachingTimes_CustomValuesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_CachingTimes_CustomValuesEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_CachingTimes_CustomValuesEntry {
    return {
      $type: ResourceOptions_CachingTimes_CustomValuesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: ResourceOptions_CachingTimes_CustomValuesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_CachingTimes_CustomValuesEntry>, I>>(
    base?: I,
  ): ResourceOptions_CachingTimes_CustomValuesEntry {
    return ResourceOptions_CachingTimes_CustomValuesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_CachingTimes_CustomValuesEntry>, I>>(
    object: I,
  ): ResourceOptions_CachingTimes_CustomValuesEntry {
    const message = createBaseResourceOptions_CachingTimes_CustomValuesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ResourceOptions_CachingTimes_CustomValuesEntry.$type,
  ResourceOptions_CachingTimes_CustomValuesEntry,
);

function createBaseResourceOptions_EdgeCacheSettings(): ResourceOptions_EdgeCacheSettings {
  return {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings",
    enabled: false,
    value: undefined,
    defaultValue: undefined,
  };
}

export const ResourceOptions_EdgeCacheSettings = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings" as const,

  encode(message: ResourceOptions_EdgeCacheSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.value !== undefined) {
      ResourceOptions_CachingTimes.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultValue !== undefined) {
      writer.uint32(24).int64(message.defaultValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_EdgeCacheSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_EdgeCacheSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ResourceOptions_CachingTimes.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.defaultValue = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_EdgeCacheSettings {
    return {
      $type: ResourceOptions_EdgeCacheSettings.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      value: isSet(object.value) ? ResourceOptions_CachingTimes.fromJSON(object.value) : undefined,
      defaultValue: isSet(object.defaultValue) ? globalThis.Number(object.defaultValue) : undefined,
    };
  },

  toJSON(message: ResourceOptions_EdgeCacheSettings): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.value !== undefined) {
      obj.value = ResourceOptions_CachingTimes.toJSON(message.value);
    }
    if (message.defaultValue !== undefined) {
      obj.defaultValue = Math.round(message.defaultValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_EdgeCacheSettings>, I>>(
    base?: I,
  ): ResourceOptions_EdgeCacheSettings {
    return ResourceOptions_EdgeCacheSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_EdgeCacheSettings>, I>>(
    object: I,
  ): ResourceOptions_EdgeCacheSettings {
    const message = createBaseResourceOptions_EdgeCacheSettings();
    message.enabled = object.enabled ?? false;
    message.value = (object.value !== undefined && object.value !== null)
      ? ResourceOptions_CachingTimes.fromPartial(object.value)
      : undefined;
    message.defaultValue = object.defaultValue ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_EdgeCacheSettings.$type, ResourceOptions_EdgeCacheSettings);

function createBaseResourceOptions_StringVariableMapOption(): ResourceOptions_StringVariableMapOption {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption", enabled: false, value: {} };
}

export const ResourceOptions_StringVariableMapOption = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption" as const,

  encode(message: ResourceOptions_StringVariableMapOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    Object.entries(message.value).forEach(([key, value]) => {
      ResourceOptions_StringVariableMapOption_ValueEntry.encode({
        $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry",
        key: key as any,
        value,
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringVariableMapOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_StringVariableMapOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = ResourceOptions_StringVariableMapOption_ValueEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.value[entry2.key] = entry2.value;
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

  fromJSON(object: any): ResourceOptions_StringVariableMapOption {
    return {
      $type: ResourceOptions_StringVariableMapOption.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      value: isObject(object.value)
        ? Object.entries(object.value).reduce<{ [key: string]: ResourceOptions_StringVariableMapOption_OneofString }>(
          (acc, [key, value]) => {
            acc[key] = ResourceOptions_StringVariableMapOption_OneofString.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: ResourceOptions_StringVariableMapOption): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.value) {
      const entries = Object.entries(message.value);
      if (entries.length > 0) {
        obj.value = {};
        entries.forEach(([k, v]) => {
          obj.value[k] = ResourceOptions_StringVariableMapOption_OneofString.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_StringVariableMapOption>, I>>(
    base?: I,
  ): ResourceOptions_StringVariableMapOption {
    return ResourceOptions_StringVariableMapOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringVariableMapOption>, I>>(
    object: I,
  ): ResourceOptions_StringVariableMapOption {
    const message = createBaseResourceOptions_StringVariableMapOption();
    message.enabled = object.enabled ?? false;
    message.value = Object.entries(object.value ?? {}).reduce<
      { [key: string]: ResourceOptions_StringVariableMapOption_OneofString }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ResourceOptions_StringVariableMapOption_OneofString.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_StringVariableMapOption.$type, ResourceOptions_StringVariableMapOption);

function createBaseResourceOptions_StringVariableMapOption_OneofString(): ResourceOptions_StringVariableMapOption_OneofString {
  return {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString",
    value: undefined,
    values: undefined,
  };
}

export const ResourceOptions_StringVariableMapOption_OneofString = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString" as const,

  encode(
    message: ResourceOptions_StringVariableMapOption_OneofString,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== undefined) {
      ResourceOptions_StringOption.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    if (message.values !== undefined) {
      ResourceOptions_StringsListOption.encode(message.values, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringVariableMapOption_OneofString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_StringVariableMapOption_OneofString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = ResourceOptions_StringOption.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.values = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_StringVariableMapOption_OneofString {
    return {
      $type: ResourceOptions_StringVariableMapOption_OneofString.$type,
      value: isSet(object.value) ? ResourceOptions_StringOption.fromJSON(object.value) : undefined,
      values: isSet(object.values) ? ResourceOptions_StringsListOption.fromJSON(object.values) : undefined,
    };
  },

  toJSON(message: ResourceOptions_StringVariableMapOption_OneofString): unknown {
    const obj: any = {};
    if (message.value !== undefined) {
      obj.value = ResourceOptions_StringOption.toJSON(message.value);
    }
    if (message.values !== undefined) {
      obj.values = ResourceOptions_StringsListOption.toJSON(message.values);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_StringVariableMapOption_OneofString>, I>>(
    base?: I,
  ): ResourceOptions_StringVariableMapOption_OneofString {
    return ResourceOptions_StringVariableMapOption_OneofString.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringVariableMapOption_OneofString>, I>>(
    object: I,
  ): ResourceOptions_StringVariableMapOption_OneofString {
    const message = createBaseResourceOptions_StringVariableMapOption_OneofString();
    message.value = (object.value !== undefined && object.value !== null)
      ? ResourceOptions_StringOption.fromPartial(object.value)
      : undefined;
    message.values = (object.values !== undefined && object.values !== null)
      ? ResourceOptions_StringsListOption.fromPartial(object.values)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ResourceOptions_StringVariableMapOption_OneofString.$type,
  ResourceOptions_StringVariableMapOption_OneofString,
);

function createBaseResourceOptions_StringVariableMapOption_ValueEntry(): ResourceOptions_StringVariableMapOption_ValueEntry {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry", key: "", value: undefined };
}

export const ResourceOptions_StringVariableMapOption_ValueEntry = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry" as const,

  encode(
    message: ResourceOptions_StringVariableMapOption_ValueEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ResourceOptions_StringVariableMapOption_OneofString.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringVariableMapOption_ValueEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_StringVariableMapOption_ValueEntry();
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

          message.value = ResourceOptions_StringVariableMapOption_OneofString.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_StringVariableMapOption_ValueEntry {
    return {
      $type: ResourceOptions_StringVariableMapOption_ValueEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? ResourceOptions_StringVariableMapOption_OneofString.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: ResourceOptions_StringVariableMapOption_ValueEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ResourceOptions_StringVariableMapOption_OneofString.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_StringVariableMapOption_ValueEntry>, I>>(
    base?: I,
  ): ResourceOptions_StringVariableMapOption_ValueEntry {
    return ResourceOptions_StringVariableMapOption_ValueEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringVariableMapOption_ValueEntry>, I>>(
    object: I,
  ): ResourceOptions_StringVariableMapOption_ValueEntry {
    const message = createBaseResourceOptions_StringVariableMapOption_ValueEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ResourceOptions_StringVariableMapOption_OneofString.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ResourceOptions_StringVariableMapOption_ValueEntry.$type,
  ResourceOptions_StringVariableMapOption_ValueEntry,
);

function createBaseResourceOptions_QueryParamsOptions(): ResourceOptions_QueryParamsOptions {
  return {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions",
    ignoreQueryString: undefined,
    queryParamsWhitelist: undefined,
    queryParamsBlacklist: undefined,
  };
}

export const ResourceOptions_QueryParamsOptions = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions" as const,

  encode(message: ResourceOptions_QueryParamsOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ignoreQueryString !== undefined) {
      ResourceOptions_BoolOption.encode(message.ignoreQueryString, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryParamsWhitelist !== undefined) {
      ResourceOptions_StringsListOption.encode(message.queryParamsWhitelist, writer.uint32(18).fork()).ldelim();
    }
    if (message.queryParamsBlacklist !== undefined) {
      ResourceOptions_StringsListOption.encode(message.queryParamsBlacklist, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_QueryParamsOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_QueryParamsOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ignoreQueryString = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.queryParamsWhitelist = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.queryParamsBlacklist = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_QueryParamsOptions {
    return {
      $type: ResourceOptions_QueryParamsOptions.$type,
      ignoreQueryString: isSet(object.ignoreQueryString)
        ? ResourceOptions_BoolOption.fromJSON(object.ignoreQueryString)
        : undefined,
      queryParamsWhitelist: isSet(object.queryParamsWhitelist)
        ? ResourceOptions_StringsListOption.fromJSON(object.queryParamsWhitelist)
        : undefined,
      queryParamsBlacklist: isSet(object.queryParamsBlacklist)
        ? ResourceOptions_StringsListOption.fromJSON(object.queryParamsBlacklist)
        : undefined,
    };
  },

  toJSON(message: ResourceOptions_QueryParamsOptions): unknown {
    const obj: any = {};
    if (message.ignoreQueryString !== undefined) {
      obj.ignoreQueryString = ResourceOptions_BoolOption.toJSON(message.ignoreQueryString);
    }
    if (message.queryParamsWhitelist !== undefined) {
      obj.queryParamsWhitelist = ResourceOptions_StringsListOption.toJSON(message.queryParamsWhitelist);
    }
    if (message.queryParamsBlacklist !== undefined) {
      obj.queryParamsBlacklist = ResourceOptions_StringsListOption.toJSON(message.queryParamsBlacklist);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_QueryParamsOptions>, I>>(
    base?: I,
  ): ResourceOptions_QueryParamsOptions {
    return ResourceOptions_QueryParamsOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_QueryParamsOptions>, I>>(
    object: I,
  ): ResourceOptions_QueryParamsOptions {
    const message = createBaseResourceOptions_QueryParamsOptions();
    message.ignoreQueryString = (object.ignoreQueryString !== undefined && object.ignoreQueryString !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.ignoreQueryString)
      : undefined;
    message.queryParamsWhitelist = (object.queryParamsWhitelist !== undefined && object.queryParamsWhitelist !== null)
      ? ResourceOptions_StringsListOption.fromPartial(object.queryParamsWhitelist)
      : undefined;
    message.queryParamsBlacklist = (object.queryParamsBlacklist !== undefined && object.queryParamsBlacklist !== null)
      ? ResourceOptions_StringsListOption.fromPartial(object.queryParamsBlacklist)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_QueryParamsOptions.$type, ResourceOptions_QueryParamsOptions);

function createBaseResourceOptions_RedirectOptions(): ResourceOptions_RedirectOptions {
  return {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions",
    redirectHttpToHttps: undefined,
    redirectHttpsToHttp: undefined,
  };
}

export const ResourceOptions_RedirectOptions = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions" as const,

  encode(message: ResourceOptions_RedirectOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redirectHttpToHttps !== undefined) {
      ResourceOptions_BoolOption.encode(message.redirectHttpToHttps, writer.uint32(10).fork()).ldelim();
    }
    if (message.redirectHttpsToHttp !== undefined) {
      ResourceOptions_BoolOption.encode(message.redirectHttpsToHttp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_RedirectOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_RedirectOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.redirectHttpToHttps = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.redirectHttpsToHttp = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_RedirectOptions {
    return {
      $type: ResourceOptions_RedirectOptions.$type,
      redirectHttpToHttps: isSet(object.redirectHttpToHttps)
        ? ResourceOptions_BoolOption.fromJSON(object.redirectHttpToHttps)
        : undefined,
      redirectHttpsToHttp: isSet(object.redirectHttpsToHttp)
        ? ResourceOptions_BoolOption.fromJSON(object.redirectHttpsToHttp)
        : undefined,
    };
  },

  toJSON(message: ResourceOptions_RedirectOptions): unknown {
    const obj: any = {};
    if (message.redirectHttpToHttps !== undefined) {
      obj.redirectHttpToHttps = ResourceOptions_BoolOption.toJSON(message.redirectHttpToHttps);
    }
    if (message.redirectHttpsToHttp !== undefined) {
      obj.redirectHttpsToHttp = ResourceOptions_BoolOption.toJSON(message.redirectHttpsToHttp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_RedirectOptions>, I>>(base?: I): ResourceOptions_RedirectOptions {
    return ResourceOptions_RedirectOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_RedirectOptions>, I>>(
    object: I,
  ): ResourceOptions_RedirectOptions {
    const message = createBaseResourceOptions_RedirectOptions();
    message.redirectHttpToHttps = (object.redirectHttpToHttps !== undefined && object.redirectHttpToHttps !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.redirectHttpToHttps)
      : undefined;
    message.redirectHttpsToHttp = (object.redirectHttpsToHttp !== undefined && object.redirectHttpsToHttp !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.redirectHttpsToHttp)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_RedirectOptions.$type, ResourceOptions_RedirectOptions);

function createBaseResourceOptions_HostOptions(): ResourceOptions_HostOptions {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.HostOptions", host: undefined, forwardHostHeader: undefined };
}

export const ResourceOptions_HostOptions = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.HostOptions" as const,

  encode(message: ResourceOptions_HostOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.host !== undefined) {
      ResourceOptions_StringOption.encode(message.host, writer.uint32(10).fork()).ldelim();
    }
    if (message.forwardHostHeader !== undefined) {
      ResourceOptions_BoolOption.encode(message.forwardHostHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_HostOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_HostOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.host = ResourceOptions_StringOption.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.forwardHostHeader = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_HostOptions {
    return {
      $type: ResourceOptions_HostOptions.$type,
      host: isSet(object.host) ? ResourceOptions_StringOption.fromJSON(object.host) : undefined,
      forwardHostHeader: isSet(object.forwardHostHeader)
        ? ResourceOptions_BoolOption.fromJSON(object.forwardHostHeader)
        : undefined,
    };
  },

  toJSON(message: ResourceOptions_HostOptions): unknown {
    const obj: any = {};
    if (message.host !== undefined) {
      obj.host = ResourceOptions_StringOption.toJSON(message.host);
    }
    if (message.forwardHostHeader !== undefined) {
      obj.forwardHostHeader = ResourceOptions_BoolOption.toJSON(message.forwardHostHeader);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_HostOptions>, I>>(base?: I): ResourceOptions_HostOptions {
    return ResourceOptions_HostOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_HostOptions>, I>>(object: I): ResourceOptions_HostOptions {
    const message = createBaseResourceOptions_HostOptions();
    message.host = (object.host !== undefined && object.host !== null)
      ? ResourceOptions_StringOption.fromPartial(object.host)
      : undefined;
    message.forwardHostHeader = (object.forwardHostHeader !== undefined && object.forwardHostHeader !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.forwardHostHeader)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_HostOptions.$type, ResourceOptions_HostOptions);

function createBaseResourceOptions_CompressionOptions(): ResourceOptions_CompressionOptions {
  return {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions",
    fetchCompressed: undefined,
    gzipOn: undefined,
    brotliCompression: undefined,
  };
}

export const ResourceOptions_CompressionOptions = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions" as const,

  encode(message: ResourceOptions_CompressionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fetchCompressed !== undefined) {
      ResourceOptions_BoolOption.encode(message.fetchCompressed, writer.uint32(10).fork()).ldelim();
    }
    if (message.gzipOn !== undefined) {
      ResourceOptions_BoolOption.encode(message.gzipOn, writer.uint32(18).fork()).ldelim();
    }
    if (message.brotliCompression !== undefined) {
      ResourceOptions_StringsListOption.encode(message.brotliCompression, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_CompressionOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_CompressionOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fetchCompressed = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gzipOn = ResourceOptions_BoolOption.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.brotliCompression = ResourceOptions_StringsListOption.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_CompressionOptions {
    return {
      $type: ResourceOptions_CompressionOptions.$type,
      fetchCompressed: isSet(object.fetchCompressed)
        ? ResourceOptions_BoolOption.fromJSON(object.fetchCompressed)
        : undefined,
      gzipOn: isSet(object.gzipOn) ? ResourceOptions_BoolOption.fromJSON(object.gzipOn) : undefined,
      brotliCompression: isSet(object.brotliCompression)
        ? ResourceOptions_StringsListOption.fromJSON(object.brotliCompression)
        : undefined,
    };
  },

  toJSON(message: ResourceOptions_CompressionOptions): unknown {
    const obj: any = {};
    if (message.fetchCompressed !== undefined) {
      obj.fetchCompressed = ResourceOptions_BoolOption.toJSON(message.fetchCompressed);
    }
    if (message.gzipOn !== undefined) {
      obj.gzipOn = ResourceOptions_BoolOption.toJSON(message.gzipOn);
    }
    if (message.brotliCompression !== undefined) {
      obj.brotliCompression = ResourceOptions_StringsListOption.toJSON(message.brotliCompression);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_CompressionOptions>, I>>(
    base?: I,
  ): ResourceOptions_CompressionOptions {
    return ResourceOptions_CompressionOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_CompressionOptions>, I>>(
    object: I,
  ): ResourceOptions_CompressionOptions {
    const message = createBaseResourceOptions_CompressionOptions();
    message.fetchCompressed = (object.fetchCompressed !== undefined && object.fetchCompressed !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.fetchCompressed)
      : undefined;
    message.gzipOn = (object.gzipOn !== undefined && object.gzipOn !== null)
      ? ResourceOptions_BoolOption.fromPartial(object.gzipOn)
      : undefined;
    message.brotliCompression = (object.brotliCompression !== undefined && object.brotliCompression !== null)
      ? ResourceOptions_StringsListOption.fromPartial(object.brotliCompression)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_CompressionOptions.$type, ResourceOptions_CompressionOptions);

function createBaseResourceOptions_RewriteOption(): ResourceOptions_RewriteOption {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.RewriteOption", enabled: false, body: "", flag: 0 };
}

export const ResourceOptions_RewriteOption = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.RewriteOption" as const,

  encode(message: ResourceOptions_RewriteOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    if (message.flag !== 0) {
      writer.uint32(24).int32(message.flag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_RewriteOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_RewriteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.body = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.flag = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_RewriteOption {
    return {
      $type: ResourceOptions_RewriteOption.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      flag: isSet(object.flag) ? rewriteFlagFromJSON(object.flag) : 0,
    };
  },

  toJSON(message: ResourceOptions_RewriteOption): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.flag !== 0) {
      obj.flag = rewriteFlagToJSON(message.flag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_RewriteOption>, I>>(base?: I): ResourceOptions_RewriteOption {
    return ResourceOptions_RewriteOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_RewriteOption>, I>>(
    object: I,
  ): ResourceOptions_RewriteOption {
    const message = createBaseResourceOptions_RewriteOption();
    message.enabled = object.enabled ?? false;
    message.body = object.body ?? "";
    message.flag = object.flag ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_RewriteOption.$type, ResourceOptions_RewriteOption);

function createBaseResourceOptions_SecureKeyOption(): ResourceOptions_SecureKeyOption {
  return { $type: "yandex.cloud.cdn.v1.ResourceOptions.SecureKeyOption", enabled: false, key: "", type: 0 };
}

export const ResourceOptions_SecureKeyOption = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.SecureKeyOption" as const,

  encode(message: ResourceOptions_SecureKeyOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_SecureKeyOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_SecureKeyOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_SecureKeyOption {
    return {
      $type: ResourceOptions_SecureKeyOption.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      type: isSet(object.type) ? secureKeyURLTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: ResourceOptions_SecureKeyOption): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.type !== 0) {
      obj.type = secureKeyURLTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_SecureKeyOption>, I>>(base?: I): ResourceOptions_SecureKeyOption {
    return ResourceOptions_SecureKeyOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_SecureKeyOption>, I>>(
    object: I,
  ): ResourceOptions_SecureKeyOption {
    const message = createBaseResourceOptions_SecureKeyOption();
    message.enabled = object.enabled ?? false;
    message.key = object.key ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_SecureKeyOption.$type, ResourceOptions_SecureKeyOption);

function createBaseResourceOptions_IPAddressACLOption(): ResourceOptions_IPAddressACLOption {
  return {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.IPAddressACLOption",
    enabled: false,
    policyType: 0,
    exceptedValues: [],
  };
}

export const ResourceOptions_IPAddressACLOption = {
  $type: "yandex.cloud.cdn.v1.ResourceOptions.IPAddressACLOption" as const,

  encode(message: ResourceOptions_IPAddressACLOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.policyType !== 0) {
      writer.uint32(16).int32(message.policyType);
    }
    for (const v of message.exceptedValues) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_IPAddressACLOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOptions_IPAddressACLOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.policyType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.exceptedValues.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOptions_IPAddressACLOption {
    return {
      $type: ResourceOptions_IPAddressACLOption.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      policyType: isSet(object.policyType) ? policyTypeFromJSON(object.policyType) : 0,
      exceptedValues: globalThis.Array.isArray(object?.exceptedValues)
        ? object.exceptedValues.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ResourceOptions_IPAddressACLOption): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.policyType !== 0) {
      obj.policyType = policyTypeToJSON(message.policyType);
    }
    if (message.exceptedValues?.length) {
      obj.exceptedValues = message.exceptedValues;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOptions_IPAddressACLOption>, I>>(
    base?: I,
  ): ResourceOptions_IPAddressACLOption {
    return ResourceOptions_IPAddressACLOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOptions_IPAddressACLOption>, I>>(
    object: I,
  ): ResourceOptions_IPAddressACLOption {
    const message = createBaseResourceOptions_IPAddressACLOption();
    message.enabled = object.enabled ?? false;
    message.policyType = object.policyType ?? 0;
    message.exceptedValues = object.exceptedValues?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ResourceOptions_IPAddressACLOption.$type, ResourceOptions_IPAddressACLOption);

function createBaseSSLTargetCertificate(): SSLTargetCertificate {
  return { $type: "yandex.cloud.cdn.v1.SSLTargetCertificate", type: 0, data: undefined };
}

export const SSLTargetCertificate = {
  $type: "yandex.cloud.cdn.v1.SSLTargetCertificate" as const,

  encode(message: SSLTargetCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.data !== undefined) {
      SSLCertificateData.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLTargetCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSSLTargetCertificate();
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

          message.data = SSLCertificateData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SSLTargetCertificate {
    return {
      $type: SSLTargetCertificate.$type,
      type: isSet(object.type) ? sSLCertificateTypeFromJSON(object.type) : 0,
      data: isSet(object.data) ? SSLCertificateData.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: SSLTargetCertificate): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = sSLCertificateTypeToJSON(message.type);
    }
    if (message.data !== undefined) {
      obj.data = SSLCertificateData.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SSLTargetCertificate>, I>>(base?: I): SSLTargetCertificate {
    return SSLTargetCertificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SSLTargetCertificate>, I>>(object: I): SSLTargetCertificate {
    const message = createBaseSSLTargetCertificate();
    message.type = object.type ?? 0;
    message.data = (object.data !== undefined && object.data !== null)
      ? SSLCertificateData.fromPartial(object.data)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SSLTargetCertificate.$type, SSLTargetCertificate);

function createBaseSSLCertificate(): SSLCertificate {
  return { $type: "yandex.cloud.cdn.v1.SSLCertificate", type: 0, status: 0, data: undefined };
}

export const SSLCertificate = {
  $type: "yandex.cloud.cdn.v1.SSLCertificate" as const,

  encode(message: SSLCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.data !== undefined) {
      SSLCertificateData.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSSLCertificate();
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
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = SSLCertificateData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SSLCertificate {
    return {
      $type: SSLCertificate.$type,
      type: isSet(object.type) ? sSLCertificateTypeFromJSON(object.type) : 0,
      status: isSet(object.status) ? sSLCertificateStatusFromJSON(object.status) : 0,
      data: isSet(object.data) ? SSLCertificateData.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: SSLCertificate): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = sSLCertificateTypeToJSON(message.type);
    }
    if (message.status !== 0) {
      obj.status = sSLCertificateStatusToJSON(message.status);
    }
    if (message.data !== undefined) {
      obj.data = SSLCertificateData.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SSLCertificate>, I>>(base?: I): SSLCertificate {
    return SSLCertificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SSLCertificate>, I>>(object: I): SSLCertificate {
    const message = createBaseSSLCertificate();
    message.type = object.type ?? 0;
    message.status = object.status ?? 0;
    message.data = (object.data !== undefined && object.data !== null)
      ? SSLCertificateData.fromPartial(object.data)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SSLCertificate.$type, SSLCertificate);

function createBaseSSLCertificateData(): SSLCertificateData {
  return { $type: "yandex.cloud.cdn.v1.SSLCertificateData", cm: undefined };
}

export const SSLCertificateData = {
  $type: "yandex.cloud.cdn.v1.SSLCertificateData" as const,

  encode(message: SSLCertificateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cm !== undefined) {
      SSLCertificateCMData.encode(message.cm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLCertificateData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSSLCertificateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cm = SSLCertificateCMData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SSLCertificateData {
    return {
      $type: SSLCertificateData.$type,
      cm: isSet(object.cm) ? SSLCertificateCMData.fromJSON(object.cm) : undefined,
    };
  },

  toJSON(message: SSLCertificateData): unknown {
    const obj: any = {};
    if (message.cm !== undefined) {
      obj.cm = SSLCertificateCMData.toJSON(message.cm);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SSLCertificateData>, I>>(base?: I): SSLCertificateData {
    return SSLCertificateData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SSLCertificateData>, I>>(object: I): SSLCertificateData {
    const message = createBaseSSLCertificateData();
    message.cm = (object.cm !== undefined && object.cm !== null)
      ? SSLCertificateCMData.fromPartial(object.cm)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SSLCertificateData.$type, SSLCertificateData);

function createBaseSSLCertificateCMData(): SSLCertificateCMData {
  return { $type: "yandex.cloud.cdn.v1.SSLCertificateCMData", id: "" };
}

export const SSLCertificateCMData = {
  $type: "yandex.cloud.cdn.v1.SSLCertificateCMData" as const,

  encode(message: SSLCertificateCMData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLCertificateCMData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSSLCertificateCMData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SSLCertificateCMData {
    return { $type: SSLCertificateCMData.$type, id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: SSLCertificateCMData): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SSLCertificateCMData>, I>>(base?: I): SSLCertificateCMData {
    return SSLCertificateCMData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SSLCertificateCMData>, I>>(object: I): SSLCertificateCMData {
    const message = createBaseSSLCertificateCMData();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(SSLCertificateCMData.$type, SSLCertificateCMData);

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
