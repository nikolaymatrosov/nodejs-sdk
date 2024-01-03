/* eslint-disable */
import { Struct } from "@yandex-cloud/core/dist/generated/google/protobuf/struct";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { BoolValue, Int64Value, StringValue } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.storage.v1";

export enum Versioning {
  VERSIONING_UNSPECIFIED = 0,
  /**
   * VERSIONING_DISABLED - The bucket is unversioned, i.e. versioning has never been enabled for the bucket, including at its creation.
   * Objects that are stored in the bucket have a version ID of `null`.
   *
   * To enable versioning, change status to `VERSIONING_ENABLED` via a [BucketService.Update] request. Note that this
   * action is irreversible, and a bucket with versioning enabled can never return to `VERSIONING_DISABLED` state.
   */
  VERSIONING_DISABLED = 1,
  /**
   * VERSIONING_ENABLED - Bucket versioning is enabled, i.e. all new objects are versioned and given a unique version ID, and objects that
   * already existed at the time versioning was enabled will be versioned and given a unique version ID when modified
   * by future requests.
   *
   * To suspend versioning, change status to `VERSIONING_SUSPENDED` via a [BucketService.Update] request. You cannot
   * disable versioning altogether for a bucket that already had it enabled; objects that had version IDs will keep
   * them.
   */
  VERSIONING_ENABLED = 2,
  /**
   * VERSIONING_SUSPENDED - Bucket versioning is suspended, i.e. new objects are not versioned, but objects that already existed at the time
   * versioning was suspended are still versioned and keep their version IDs.
   *
   * To resume versioning, change status to `VERSIONING_ENABLED` via a [BucketService.Update] request.
   */
  VERSIONING_SUSPENDED = 3,
  UNRECOGNIZED = -1,
}

export function versioningFromJSON(object: any): Versioning {
  switch (object) {
    case 0:
    case "VERSIONING_UNSPECIFIED":
      return Versioning.VERSIONING_UNSPECIFIED;
    case 1:
    case "VERSIONING_DISABLED":
      return Versioning.VERSIONING_DISABLED;
    case 2:
    case "VERSIONING_ENABLED":
      return Versioning.VERSIONING_ENABLED;
    case 3:
    case "VERSIONING_SUSPENDED":
      return Versioning.VERSIONING_SUSPENDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Versioning.UNRECOGNIZED;
  }
}

export function versioningToJSON(object: Versioning): string {
  switch (object) {
    case Versioning.VERSIONING_UNSPECIFIED:
      return "VERSIONING_UNSPECIFIED";
    case Versioning.VERSIONING_DISABLED:
      return "VERSIONING_DISABLED";
    case Versioning.VERSIONING_ENABLED:
      return "VERSIONING_ENABLED";
    case Versioning.VERSIONING_SUSPENDED:
      return "VERSIONING_SUSPENDED";
    case Versioning.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A bucket resource.
 * For details about the concept, see [documentation](/docs/storage/concepts/bucket).
 */
export interface Bucket {
  $type: "yandex.cloud.storage.v1.Bucket";
  /** ID of the bucket. Always equal to [name], which has priority. */
  id: string;
  /**
   * Name of the bucket.
   *
   * The name is unique within the platform. For naming limitations and rules, see
   * [documentation](/docs/storage/concepts/bucket#naming).
   */
  name: string;
  /** ID of the folder that the bucket belongs to. */
  folderId: string;
  /**
   * Flags for configuring public (anonymous) access to the bucket's content and settings.
   * For details, see [documentation](/docs/storage/concepts/bucket#bucket-access).
   */
  anonymousAccessFlags?:
    | AnonymousAccessFlags
    | undefined;
  /**
   * Default storage class for objects in the bucket. Supported classes are standard storage (`STANDARD`), cold storage
   * (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  defaultStorageClass: string;
  /**
   * Bucket versioning status.
   * For details, see [documentation](/docs/storage/concepts/versioning).
   */
  versioning: Versioning;
  /**
   * Maximum size of the bucket, in bytes.
   * For details, see [documentation](/docs/storage/operations/buckets/limit-max-volume).
   */
  maxSize: number;
  /**
   * Bucket policies that set permissions for actions with the bucket, its objects, and groups of objects.
   * For details, see [documentation](/docs/storage/concepts/policy).
   */
  policy?:
    | { [key: string]: any }
    | undefined;
  /**
   * Access control list (ACL) of the bucket.
   * For details, see [documentation](/docs/storage/concepts/acl).
   */
  acl?:
    | ACL
    | undefined;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * List of rules for cross-domain requests to objects in the bucket (cross-origin resource sharing, CORS).
   * For details, see [documentation](/docs/storage/concepts/cors).
   */
  cors: CorsRule[];
  /**
   * Configuration for hosting a static website in the bucket.
   * For details, see [documentation](/docs/storage/concepts/hosting).
   */
  websiteSettings?:
    | WebsiteSettings
    | undefined;
  /**
   * List of object lifecycle rules for the bucket.
   * For details, see [documentation](/docs/storage/concepts/lifecycles).
   */
  lifecycleRules: LifecycleRule[];
  /**
   * List of tags for the bucket.
   * For details, see [documentation](/docs/resource-manager/concepts/labels).
   */
  tags: Tag[];
  /**
   * Configuration for object lock on the bucket.
   * For details about the concept, see [documentation](/docs/storage/concepts/object-lock).
   */
  objectLock?:
    | ObjectLock
    | undefined;
  /**
   * Configuration for bucket's encryption
   * For detauls, see [documentation](/docs/storage/concepts/encryption)
   */
  encryption?: Encryption | undefined;
}

export interface Tag {
  $type: "yandex.cloud.storage.v1.Tag";
  /** Key of the bucket tag. */
  key: string;
  /** Value of the bucket tag. */
  value: string;
}

export interface ACL {
  $type: "yandex.cloud.storage.v1.ACL";
  /** List of permissions granted and the grantees. */
  grants: ACL_Grant[];
}

/** A grant resource, used to specify the permission granted and the grantee. */
export interface ACL_Grant {
  $type: "yandex.cloud.storage.v1.ACL.Grant";
  /** Permission granted by the grant. */
  permission: ACL_Grant_Permission;
  /** The grantee type for the grant. */
  grantType: ACL_Grant_GrantType;
  /** ID of the account who is a grantee. Required when the [grant_type] is `GRANT_TYPE_ACCOUNT`. */
  granteeId: string;
}

export enum ACL_Grant_Permission {
  PERMISSION_UNSPECIFIED = 0,
  /**
   * PERMISSION_FULL_CONTROL - Allows grantee the `PERMISSION_WRITE`, `PERMISSION_WRITE_ACP`, `PERMISSION_READ`, and `PERMISSION_READ_ACP`
   * on the bucket.
   *
   * Maps to `x-amz-grant-full-control` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
   * Amazon S3-compatible HTTP API.
   */
  PERMISSION_FULL_CONTROL = 1,
  /**
   * PERMISSION_WRITE - Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also
   * allows deletions and overwrites of those objects.
   *
   * Maps to `x-amz-grant-write` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon
   * S3-compatible HTTP API.
   */
  PERMISSION_WRITE = 2,
  /**
   * PERMISSION_WRITE_ACP - Allows grantee to write the ACL for the bucket.
   *
   * Maps to `x-amz-grant-write-acp` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
   * Amazon S3-compatible HTTP API.
   */
  PERMISSION_WRITE_ACP = 3,
  /**
   * PERMISSION_READ - Allows grantee to list the objects in the bucket.
   *
   * Maps to `x-amz-grant-read` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon
   * S3-compatible HTTP API.
   */
  PERMISSION_READ = 4,
  /**
   * PERMISSION_READ_ACP - Allows grantee to read the bucket ACL
   *
   * Maps to `x-amz-grant-read-acp` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
   * Amazon S3-compatible HTTP API.
   */
  PERMISSION_READ_ACP = 5,
  UNRECOGNIZED = -1,
}

export function aCL_Grant_PermissionFromJSON(object: any): ACL_Grant_Permission {
  switch (object) {
    case 0:
    case "PERMISSION_UNSPECIFIED":
      return ACL_Grant_Permission.PERMISSION_UNSPECIFIED;
    case 1:
    case "PERMISSION_FULL_CONTROL":
      return ACL_Grant_Permission.PERMISSION_FULL_CONTROL;
    case 2:
    case "PERMISSION_WRITE":
      return ACL_Grant_Permission.PERMISSION_WRITE;
    case 3:
    case "PERMISSION_WRITE_ACP":
      return ACL_Grant_Permission.PERMISSION_WRITE_ACP;
    case 4:
    case "PERMISSION_READ":
      return ACL_Grant_Permission.PERMISSION_READ;
    case 5:
    case "PERMISSION_READ_ACP":
      return ACL_Grant_Permission.PERMISSION_READ_ACP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ACL_Grant_Permission.UNRECOGNIZED;
  }
}

export function aCL_Grant_PermissionToJSON(object: ACL_Grant_Permission): string {
  switch (object) {
    case ACL_Grant_Permission.PERMISSION_UNSPECIFIED:
      return "PERMISSION_UNSPECIFIED";
    case ACL_Grant_Permission.PERMISSION_FULL_CONTROL:
      return "PERMISSION_FULL_CONTROL";
    case ACL_Grant_Permission.PERMISSION_WRITE:
      return "PERMISSION_WRITE";
    case ACL_Grant_Permission.PERMISSION_WRITE_ACP:
      return "PERMISSION_WRITE_ACP";
    case ACL_Grant_Permission.PERMISSION_READ:
      return "PERMISSION_READ";
    case ACL_Grant_Permission.PERMISSION_READ_ACP:
      return "PERMISSION_READ_ACP";
    case ACL_Grant_Permission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ACL_Grant_GrantType {
  GRANT_TYPE_UNSPECIFIED = 0,
  /**
   * GRANT_TYPE_ACCOUNT - A grantee is an [account on the platform](/docs/iam/concepts/#accounts).
   *
   * For this grantee type, you need to specify the user ID in [Bucket.acl.grants.grantee_id] field. To get user ID, see
   * [instruction](/docs/iam/operations/users/get).
   *
   * Maps to using `id="*"` value for `x-amz-grant-*` header ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput)
   * method of Amazon S3-compatible HTTP API).
   */
  GRANT_TYPE_ACCOUNT = 1,
  /**
   * GRANT_TYPE_ALL_AUTHENTICATED_USERS - Grantees are all authenticated users, both from your clouds and other users' clouds. Access
   * permission to this group allows any account on the platform to access the resource via a signed (authenticated)
   * request.
   *
   * Maps to using `uri="http://acs.amazonaws.com/groups/global/AuthenticatedUsers"` value for `x-amz-grant-*`
   * header ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon S3-compatible HTTP API).
   */
  GRANT_TYPE_ALL_AUTHENTICATED_USERS = 2,
  /**
   * GRANT_TYPE_ALL_USERS - Grantees are all internet users. Access permission to this group allows anyone in the world access to the
   * resource via signed (authenticated) or unsigned (anonymous) requests.
   *
   * Maps to using `uri="http://acs.amazonaws.com/groups/global/AllUsers"` value for `x-amz-grant-*` header
   * ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon S3-compatible HTTP API).
   */
  GRANT_TYPE_ALL_USERS = 3,
  UNRECOGNIZED = -1,
}

export function aCL_Grant_GrantTypeFromJSON(object: any): ACL_Grant_GrantType {
  switch (object) {
    case 0:
    case "GRANT_TYPE_UNSPECIFIED":
      return ACL_Grant_GrantType.GRANT_TYPE_UNSPECIFIED;
    case 1:
    case "GRANT_TYPE_ACCOUNT":
      return ACL_Grant_GrantType.GRANT_TYPE_ACCOUNT;
    case 2:
    case "GRANT_TYPE_ALL_AUTHENTICATED_USERS":
      return ACL_Grant_GrantType.GRANT_TYPE_ALL_AUTHENTICATED_USERS;
    case 3:
    case "GRANT_TYPE_ALL_USERS":
      return ACL_Grant_GrantType.GRANT_TYPE_ALL_USERS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ACL_Grant_GrantType.UNRECOGNIZED;
  }
}

export function aCL_Grant_GrantTypeToJSON(object: ACL_Grant_GrantType): string {
  switch (object) {
    case ACL_Grant_GrantType.GRANT_TYPE_UNSPECIFIED:
      return "GRANT_TYPE_UNSPECIFIED";
    case ACL_Grant_GrantType.GRANT_TYPE_ACCOUNT:
      return "GRANT_TYPE_ACCOUNT";
    case ACL_Grant_GrantType.GRANT_TYPE_ALL_AUTHENTICATED_USERS:
      return "GRANT_TYPE_ALL_AUTHENTICATED_USERS";
    case ACL_Grant_GrantType.GRANT_TYPE_ALL_USERS:
      return "GRANT_TYPE_ALL_USERS";
    case ACL_Grant_GrantType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AnonymousAccessFlags {
  $type: "yandex.cloud.storage.v1.AnonymousAccessFlags";
  /** Specifies whether public (anonymous) access to read objects in the bucket is enabled. */
  read?:
    | boolean
    | undefined;
  /** Specifies whether public (anonymous) access to the list of objects in the bucket is enabled. */
  list?:
    | boolean
    | undefined;
  /**
   * Specifies whether public (anonymous) access to read [CORS](/docs/storage/concepts/cors),
   * [static website hosting](/docs/storage/concepts/hosting), and
   * [object lifecycles](/docs/storage/concepts/lifecycles) settings of the bucket is enabled.
   */
  configRead?: boolean | undefined;
}

/**
 * A CORS rule resource.
 * For details about the concept, see [documentation](/docs/storage/concepts/cors).
 */
export interface CorsRule {
  $type: "yandex.cloud.storage.v1.CorsRule";
  /** ID of the CORS rule. */
  id: string;
  /**
   * List of HTTP methods allowed by the CORS rule.
   *
   * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Method` header (see
   * [S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified method is checked against
   * the list of the allowed methods. If there is a match, all the allowed methods are listed in the
   * `Access-Control-Allow-Methods` header of the response.
   */
  allowedMethods: CorsRule_Method[];
  /**
   * List of HTTP headers allowed by the CORS rule.
   *
   * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Headers` header (see
   * [S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified headers are checked against
   * the list of the allowed headers. If there is a match, the specified headers that are allowed are listed in the
   * `Access-Control-Allow-Headers` header of the response.
   *
   * Each string in the list can contain at most one `*` wildcard character that matches 0 or more characters.
   * For example, `x-amz-*` value will allow all Amazon S3-compatible headers.
   */
  allowedHeaders: string[];
  /**
   * List of request origins allowed by the CORS rule.
   *
   * Each string in the list can contain at most one `*` wildcard character that matches 0 or more characters.
   * For example, `http://*.example.com` value will allow requests originating from all subdomains of `example.com`.
   */
  allowedOrigins: string[];
  /** List of headers contained in responses to CORS requests that can be accessed by applications. */
  exposeHeaders: string[];
  /**
   * Time in seconds that a client can cache the response to a CORS-preflight request as identified by the
   * object requested, the HTTP method, and the origin.
   */
  maxAgeSeconds?: number | undefined;
}

/**
 * List of HTTP methods that are allowed by the CORS rule.
 *
 * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Method` header (see
 * S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified method is checked against the
 * list of the allowed methods. If there is a match, all the allowed methods are listed in the
 * `Access-Control-Allow-Methods` header of the response.
 */
export enum CorsRule_Method {
  METHOD_UNSPECIFIED = 0,
  /** METHOD_GET - HTTP `GET` method. */
  METHOD_GET = 1,
  /** METHOD_HEAD - HTTP `HEAD` method. */
  METHOD_HEAD = 2,
  /** METHOD_POST - HTTP `POST` method. */
  METHOD_POST = 3,
  /** METHOD_PUT - HTTP `PUT` method. */
  METHOD_PUT = 4,
  /** METHOD_DELETE - HTTP `DELETE` method. */
  METHOD_DELETE = 5,
  UNRECOGNIZED = -1,
}

export function corsRule_MethodFromJSON(object: any): CorsRule_Method {
  switch (object) {
    case 0:
    case "METHOD_UNSPECIFIED":
      return CorsRule_Method.METHOD_UNSPECIFIED;
    case 1:
    case "METHOD_GET":
      return CorsRule_Method.METHOD_GET;
    case 2:
    case "METHOD_HEAD":
      return CorsRule_Method.METHOD_HEAD;
    case 3:
    case "METHOD_POST":
      return CorsRule_Method.METHOD_POST;
    case 4:
    case "METHOD_PUT":
      return CorsRule_Method.METHOD_PUT;
    case 5:
    case "METHOD_DELETE":
      return CorsRule_Method.METHOD_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CorsRule_Method.UNRECOGNIZED;
  }
}

export function corsRule_MethodToJSON(object: CorsRule_Method): string {
  switch (object) {
    case CorsRule_Method.METHOD_UNSPECIFIED:
      return "METHOD_UNSPECIFIED";
    case CorsRule_Method.METHOD_GET:
      return "METHOD_GET";
    case CorsRule_Method.METHOD_HEAD:
      return "METHOD_HEAD";
    case CorsRule_Method.METHOD_POST:
      return "METHOD_POST";
    case CorsRule_Method.METHOD_PUT:
      return "METHOD_PUT";
    case CorsRule_Method.METHOD_DELETE:
      return "METHOD_DELETE";
    case CorsRule_Method.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface WebsiteSettings {
  $type: "yandex.cloud.storage.v1.WebsiteSettings";
  /**
   * Key of the index page object that is returned when a response is made to the root of the website.
   *
   * Either [index] or [redirect_all_requests] must be specified in order for the bucket to host a static website.
   *
   * If specified, the index page object must be located in the root of the bucket.
   */
  index: string;
  /** Key of the error page object that is returned when an error occurs. */
  error: string;
  /**
   * Configuration for redirecting all requests sent to the website.
   *
   * Either [redirect_all_requests] or [index] must be specified in order for the bucket to host a static website.
   * If [redirect_all_requests] is specified, it must be the only field in [Bucket.website_settings].
   */
  redirectAllRequests?:
    | WebsiteSettings_Scheme
    | undefined;
  /** List of redirect rules. */
  routingRules: WebsiteSettings_RoutingRule[];
}

export enum WebsiteSettings_Protocol {
  PROTOCOL_UNSPECIFIED = 0,
  /** PROTOCOL_HTTP - `http` scheme. */
  PROTOCOL_HTTP = 1,
  /** PROTOCOL_HTTPS - `https` scheme. */
  PROTOCOL_HTTPS = 2,
  UNRECOGNIZED = -1,
}

export function websiteSettings_ProtocolFromJSON(object: any): WebsiteSettings_Protocol {
  switch (object) {
    case 0:
    case "PROTOCOL_UNSPECIFIED":
      return WebsiteSettings_Protocol.PROTOCOL_UNSPECIFIED;
    case 1:
    case "PROTOCOL_HTTP":
      return WebsiteSettings_Protocol.PROTOCOL_HTTP;
    case 2:
    case "PROTOCOL_HTTPS":
      return WebsiteSettings_Protocol.PROTOCOL_HTTPS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WebsiteSettings_Protocol.UNRECOGNIZED;
  }
}

export function websiteSettings_ProtocolToJSON(object: WebsiteSettings_Protocol): string {
  switch (object) {
    case WebsiteSettings_Protocol.PROTOCOL_UNSPECIFIED:
      return "PROTOCOL_UNSPECIFIED";
    case WebsiteSettings_Protocol.PROTOCOL_HTTP:
      return "PROTOCOL_HTTP";
    case WebsiteSettings_Protocol.PROTOCOL_HTTPS:
      return "PROTOCOL_HTTPS";
    case WebsiteSettings_Protocol.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A configuration resource for redirecting all requests sent to the website. */
export interface WebsiteSettings_Scheme {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme";
  /** Scheme of the redirect URI. */
  protocol: WebsiteSettings_Protocol;
  /** Hostname of the redirect URI. */
  hostname: string;
}

export interface WebsiteSettings_Condition {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition";
  /** HTTP status code (number only) that must match for the redirect to apply. */
  httpErrorCodeReturnedEquals: string;
  /** Prefix of the object key from which requests are redirected. */
  keyPrefixEquals: string;
}

export interface WebsiteSettings_Redirect {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect";
  /** Hostname of the redirect URI. */
  hostname: string;
  /**
   * HTTP status code of the redirect response.
   *
   * Default value: `"301"`.
   */
  httpRedirectCode: string;
  /** Scheme of the redirect URI. */
  protocol: WebsiteSettings_Protocol;
  /**
   * Substitution for the prefix of the object key specified in [Condition.key_prefix_equals].
   *
   * At most one of [replace_key_prefix_with] and [replace_key_with] can be specified.
   */
  replaceKeyPrefixWith: string;
  /**
   * New object key.
   *
   * At most one of [replace_key_with] and [replace_key_prefix_with] can be specified.
   */
  replaceKeyWith: string;
}

/** List of redirect rules. */
export interface WebsiteSettings_RoutingRule {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule";
  /** Redirect condition. */
  condition?:
    | WebsiteSettings_Condition
    | undefined;
  /** Redirect instructions. */
  redirect?: WebsiteSettings_Redirect | undefined;
}

/**
 * An object lifecycle rule resource for the bucket.
 * For details about the concept, see [documentation](/docs/storage/concepts/lifecycles).
 */
export interface LifecycleRule {
  $type: "yandex.cloud.storage.v1.LifecycleRule";
  /** ID of the rule. Provided by the client or generated at creation time. */
  id?:
    | string
    | undefined;
  /** Indicates whether the rule is in effect. */
  enabled: boolean;
  /**
   * Filter that identifies the objects to which the rule applies.
   *
   * If not specified, the rule applies to all objects in the bucket.
   */
  filter?:
    | LifecycleRule_RuleFilter
    | undefined;
  /**
   * Expiration rule.
   *
   * The expiration of an object is described as follows.
   *
   * For the unversioned bucket ([Bucket.versioning] is `VERSIONING_DISABLED`), the object is deleted and cannot be
   * recovered.
   *
   * For the bucket with versioning enabled ([Bucket.versioning] is `VERSIONING_ENABLED`), the current version of the
   * object (if it exists and is not a delete marker) is retained as a non-current version, and a delete marker becomes
   * the current version of the object.
   *
   * For the bucket with versioning suspended ([Bucket.versioning] is `VERSIONING_SUSPENDED`), the current version of
   * the object is retained as a non-current version if it is not a delete marker, or is removed otherwise, and a
   * delete marker becomes the current version of the object.
   */
  expiration?:
    | LifecycleRule_Expiration
    | undefined;
  /**
   * List of transition rules.
   *
   * The transition of an object is described as follows.
   *
   * For the unversioned bucket ([Bucket.versioning] is `VERSIONING_DISABLED`), the object is transitioned to the
   * specified storage class.
   *
   * For the bucket with versioning enabled ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended
   * (`VERSIONING_SUSPENDED`), the current version of the object is transitioned to the specified storage class.
   */
  transitions: LifecycleRule_Transition[];
  /** Configuration for aborting incomplete [multipart uploads](/docs/storage/concepts/multipart). */
  abortIncompleteMultipartUpload?:
    | LifecycleRule_AfterDays
    | undefined;
  /**
   * Expiration rule for non-current versions of objects in a bucket with versioning enabled ([Bucket.versioning] is
   * `VERSIONING_ENABLED`) or suspended (`VERSIONING_SUSPENDED`).
   *
   * At expiration, the non-current version of the object is deleted and cannot be recovered.
   */
  noncurrentExpiration?:
    | LifecycleRule_NoncurrentExpiration
    | undefined;
  /**
   * List of transition rules for non-current versions of objects in a bucket with versioning enabled
   * ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended (`VERSIONING_SUSPENDED`).
   *
   * At transition, the non-current version of the object is transitioned to the specified storage class.
   */
  noncurrentTransitions: LifecycleRule_NoncurrentTransition[];
}

export interface LifecycleRule_AfterDays {
  $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays";
  /**
   * Time period, in number of days from the start of the multipart upload, after which the incomplete upload is
   * aborted.
   */
  daysAfterExpiration?: number | undefined;
}

export interface LifecycleRule_NoncurrentExpiration {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration";
  /**
   * Time period, in number of days since the version of an object was classified as non-current, after which the
   * version expires.
   */
  noncurrentDays?: number | undefined;
}

/**
 * List of transition rules for non-current versions of objects in a bucket with versioning enabled
 * ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended (`VERSIONING_SUSPENDED`).
 *
 * At transition, the non-current version of the object is transitioned to the specified storage class.
 */
export interface LifecycleRule_NoncurrentTransition {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition";
  /**
   * Time period, in number of days since the version of an object was classified as non-current, after which the
   * version is transitioned.
   */
  noncurrentDays?:
    | number
    | undefined;
  /**
   * Storage class to which a non-current version of an object is transitioned from standard storage.
   *
   * The only supported class is cold storage (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms). Transitions from cold
   * to standard storage and transitions to or from ice storage are not allowed.
   */
  storageClass: string;
}

/**
 * List of transition rules.
 *
 * The transition of an object is described as follows.
 *
 * For the unversioned bucket ([Bucket.versioning] is `VERSIONING_DISABLED`), the object is transitioned to the
 * specified storage class.
 *
 * For the bucket with versioning enabled ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended
 * (`VERSIONING_SUSPENDED`), the current version of the object is transitioned to the specified storage class.
 */
export interface LifecycleRule_Transition {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Transition";
  /**
   * Specific date of object transition.
   *
   * The rule continues to apply even after the date has passed, i.e. any new objects created in the bucket are
   * transitioned immediately.
   *
   * At most one of [date] and [days] fields can be specified.
   */
  date?:
    | Date
    | undefined;
  /**
   * Time period, in number of days from the creation or modification of the object, after which an object is
   * transitioned.
   *
   * At most one of [days] and [date] fields can be specified.
   */
  days?:
    | number
    | undefined;
  /**
   * Storage class to which an object is transitioned from standard storage.
   *
   * The only supported class is cold storage (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms). Transitions from cold
   * to standard storage and transitions to or from ice storage are not allowed.
   */
  storageClass: string;
}

export interface LifecycleRule_Expiration {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration";
  /**
   * Specific date of object expiration.
   *
   * The rule continues to apply even after the date has passed, i.e. any new objects created in the bucket expire
   * immediately.
   *
   * Exactly one of [date], [days], and [expired_object_delete_marker] fields can be specified.
   */
  date?:
    | Date
    | undefined;
  /**
   * Time period, in number of days from the creation or modification of the object, after which an object expires.
   *
   * Exactly one of [days], [date], and [expired_object_delete_marker] fields can be specified.
   */
  days?:
    | number
    | undefined;
  /**
   * Indicates whether a delete marker of an object with no non-current versions (referred to as an expired object
   * delete marker) is removed at the object's expiration.
   *
   * Exactly one of [expired_object_delete_marker], [date], and [days] fields can be specified.
   */
  expiredObjectDeleteMarker?: boolean | undefined;
}

export interface LifecycleRule_RuleFilter {
  $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter";
  /** Key prefix that the object must have in order for the rule to apply. */
  prefix: string;
  /** Size that the object must be greater. */
  objectSizeGreaterThan?:
    | number
    | undefined;
  /** Size that the object must be less t. */
  objectSizeLessThan?:
    | number
    | undefined;
  /** Tags that the object's tag set must have for the rule to apply. */
  tag?:
    | Tag
    | undefined;
  /** Apply a logical AND to all of the predicates configured inside the And operator. */
  andOperator?: LifecycleRule_RuleFilter_And | undefined;
}

export interface LifecycleRule_RuleFilter_And {
  $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter.And";
  prefix: string;
  objectSizeGreaterThan?: number | undefined;
  objectSizeLessThan?: number | undefined;
  tag: Tag[];
}

export interface Counters {
  $type: "yandex.cloud.storage.v1.Counters";
  /** Total size of objects uploaded in single operation, in bytes. */
  simpleObjectSize: number;
  /** Number of objects uploaded in single operation. */
  simpleObjectCount: number;
  /** Total size of uploaded parts in incomplete multipart uploads, in bytes. */
  objectsPartsSize: number;
  /** Number of uploaded parts in incomplete multipart uploads. */
  objectsPartsCount: number;
  /** Total size of objects uploaded in multiple parts, in bytes. */
  multipartObjectsSize: number;
  /** Number of objects uploaded in multiple parts. */
  multipartObjectsCount: number;
  /** Number of incomplete multipart uploads. */
  activeMultipartCount: number;
}

/** A resource for size of available space in a bucket for a storage class. */
export interface OptionalSizeByClass {
  $type: "yandex.cloud.storage.v1.OptionalSizeByClass";
  /**
   * Storage class. Supported classes are standard storage (`STANDARD`), cold storage (`COLD`, `STANDARD_IA`, `NEARLINE`
   * all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  storageClass: string;
  /** Size of available space in the bucket for the storage class. */
  classSize?: number | undefined;
}

/** A resource for size of used space in a bucket for a storage class. */
export interface SizeByClass {
  $type: "yandex.cloud.storage.v1.SizeByClass";
  /**
   * Storage class. Supported classes are standard storage (`STANDARD`), cold storage (`COLD`, `STANDARD_IA`, `NEARLINE`
   * all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  storageClass: string;
  /** Size of used space in the bucket for the storage class. */
  classSize: number;
}

/** A resource for object-related statistics for a storage class by type of upload (simple vs. multipart). */
export interface CountersByClass {
  $type: "yandex.cloud.storage.v1.CountersByClass";
  /**
   * Storage class. Supported classes are standard storage (`STANDARD`), cold storage (`COLD`, `STANDARD_IA`, `NEARLINE`
   * all synonyms), and ice storage (`ice` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  storageClass: string;
  /** Object-related statistics for the storage class by type of upload. */
  counters?: Counters | undefined;
}

/** A bucket statistics resource. */
export interface BucketStats {
  $type: "yandex.cloud.storage.v1.BucketStats";
  /** Name of the bucket. */
  name: string;
  /** Maximum size of the bucket, in bytes. */
  maxSize?:
    | number
    | undefined;
  /** Size of used space in the bucket, in bytes. */
  usedSize: number;
  /** Size of available space in the bucket by storage class, in bytes. */
  storageClassMaxSizes: OptionalSizeByClass[];
  /** Size of used space in the bucket by storage class, in bytes. */
  storageClassUsedSizes: SizeByClass[];
  /** Object-related statistics by storage class and type of upload (simple vs. multipart), in bytes. */
  storageClassCounters: CountersByClass[];
  /**
   * Default storage class for objects in the bucket. Supported classes are standard storage (`STANDARD`), cold storage
   * (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  defaultStorageClass?:
    | string
    | undefined;
  /**
   * Flags for configuring public (anonymous) access to the bucket's content and settings.
   * For details, see [documentation](/docs/storage/concepts/bucket#bucket-access).
   */
  anonymousAccessFlags?:
    | AnonymousAccessFlags
    | undefined;
  /** Bucket creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Bucket latest update timestamp. */
  updatedAt?: Date | undefined;
}

/** A resource for HTTPS configuration of a bucket. */
export interface HTTPSConfig {
  $type: "yandex.cloud.storage.v1.HTTPSConfig";
  /** Name of the bucket. */
  name: string;
  /** Type of TLS certificate source. */
  sourceType: HTTPSConfig_SourceType;
  /** Issuer of the TLS certificate. */
  issuer?:
    | string
    | undefined;
  /** Subject of the TLS certificate. */
  subject?:
    | string
    | undefined;
  /** List of DNS names of the TLS certificate (Subject Alternative Name field). */
  dnsNames: string[];
  /** Start of the TLS certificate validity period (Not Before field). */
  notBefore?:
    | Date
    | undefined;
  /** End of the TLS certificate validity period (Not After field) */
  notAfter?:
    | Date
    | undefined;
  /**
   * ID of the TLS certificate in Certificate Manager.
   *
   * To get information about the certificate from Certificate Manager, make a
   * [yandex.cloud.certificatemanager.v1.CertificateService.Get] request.
   */
  certificateId: string;
}

/** A resource for type of TLS certificate source. */
export enum HTTPSConfig_SourceType {
  SOURCE_TYPE_UNSPECIFIED = 0,
  /** SOURCE_TYPE_SELF_MANAGED - Your certificate, uploaded directly. */
  SOURCE_TYPE_SELF_MANAGED = 1,
  /** SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER - Certificate managed by Certificate Manager. */
  SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER = 2,
  UNRECOGNIZED = -1,
}

export function hTTPSConfig_SourceTypeFromJSON(object: any): HTTPSConfig_SourceType {
  switch (object) {
    case 0:
    case "SOURCE_TYPE_UNSPECIFIED":
      return HTTPSConfig_SourceType.SOURCE_TYPE_UNSPECIFIED;
    case 1:
    case "SOURCE_TYPE_SELF_MANAGED":
      return HTTPSConfig_SourceType.SOURCE_TYPE_SELF_MANAGED;
    case 2:
    case "SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER":
      return HTTPSConfig_SourceType.SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HTTPSConfig_SourceType.UNRECOGNIZED;
  }
}

export function hTTPSConfig_SourceTypeToJSON(object: HTTPSConfig_SourceType): string {
  switch (object) {
    case HTTPSConfig_SourceType.SOURCE_TYPE_UNSPECIFIED:
      return "SOURCE_TYPE_UNSPECIFIED";
    case HTTPSConfig_SourceType.SOURCE_TYPE_SELF_MANAGED:
      return "SOURCE_TYPE_SELF_MANAGED";
    case HTTPSConfig_SourceType.SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER:
      return "SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER";
    case HTTPSConfig_SourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A resource for Object Lock configuration of a bucket.
 * For details about the concept, see [documentation](/docs/storage/concepts/object-lock).
 */
export interface ObjectLock {
  $type: "yandex.cloud.storage.v1.ObjectLock";
  status: ObjectLock_ObjectLockStatus;
  defaultRetention?: ObjectLock_DefaultRetention | undefined;
}

/** Activity status of the object lock settings on the bucket */
export enum ObjectLock_ObjectLockStatus {
  OBJECT_LOCK_STATUS_UNSPECIFIED = 0,
  OBJECT_LOCK_STATUS_DISABLED = 1,
  OBJECT_LOCK_STATUS_ENABLED = 2,
  UNRECOGNIZED = -1,
}

export function objectLock_ObjectLockStatusFromJSON(object: any): ObjectLock_ObjectLockStatus {
  switch (object) {
    case 0:
    case "OBJECT_LOCK_STATUS_UNSPECIFIED":
      return ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_UNSPECIFIED;
    case 1:
    case "OBJECT_LOCK_STATUS_DISABLED":
      return ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_DISABLED;
    case 2:
    case "OBJECT_LOCK_STATUS_ENABLED":
      return ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_ENABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectLock_ObjectLockStatus.UNRECOGNIZED;
  }
}

export function objectLock_ObjectLockStatusToJSON(object: ObjectLock_ObjectLockStatus): string {
  switch (object) {
    case ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_UNSPECIFIED:
      return "OBJECT_LOCK_STATUS_UNSPECIFIED";
    case ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_DISABLED:
      return "OBJECT_LOCK_STATUS_DISABLED";
    case ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_ENABLED:
      return "OBJECT_LOCK_STATUS_ENABLED";
    case ObjectLock_ObjectLockStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Default lock configuration for added objects */
export interface ObjectLock_DefaultRetention {
  $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention";
  mode: ObjectLock_DefaultRetention_Mode;
  /** Number of days for locking */
  days?:
    | number
    | undefined;
  /** Number of years for locking */
  years?: number | undefined;
}

/** Lock type */
export enum ObjectLock_DefaultRetention_Mode {
  MODE_UNSPECIFIED = 0,
  MODE_GOVERNANCE = 1,
  MODE_COMPLIANCE = 2,
  UNRECOGNIZED = -1,
}

export function objectLock_DefaultRetention_ModeFromJSON(object: any): ObjectLock_DefaultRetention_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return ObjectLock_DefaultRetention_Mode.MODE_UNSPECIFIED;
    case 1:
    case "MODE_GOVERNANCE":
      return ObjectLock_DefaultRetention_Mode.MODE_GOVERNANCE;
    case 2:
    case "MODE_COMPLIANCE":
      return ObjectLock_DefaultRetention_Mode.MODE_COMPLIANCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectLock_DefaultRetention_Mode.UNRECOGNIZED;
  }
}

export function objectLock_DefaultRetention_ModeToJSON(object: ObjectLock_DefaultRetention_Mode): string {
  switch (object) {
    case ObjectLock_DefaultRetention_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case ObjectLock_DefaultRetention_Mode.MODE_GOVERNANCE:
      return "MODE_GOVERNANCE";
    case ObjectLock_DefaultRetention_Mode.MODE_COMPLIANCE:
      return "MODE_COMPLIANCE";
    case ObjectLock_DefaultRetention_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Encryption {
  $type: "yandex.cloud.storage.v1.Encryption";
  rules: Encryption_EncryptionRule[];
}

export interface Encryption_EncryptionRule {
  $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule";
  kmsMasterKeyId: string;
  sseAlgorithm: string;
}

function createBaseBucket(): Bucket {
  return {
    $type: "yandex.cloud.storage.v1.Bucket",
    id: "",
    name: "",
    folderId: "",
    anonymousAccessFlags: undefined,
    defaultStorageClass: "",
    versioning: 0,
    maxSize: 0,
    policy: undefined,
    acl: undefined,
    createdAt: undefined,
    cors: [],
    websiteSettings: undefined,
    lifecycleRules: [],
    tags: [],
    objectLock: undefined,
    encryption: undefined,
  };
}

export const Bucket = {
  $type: "yandex.cloud.storage.v1.Bucket" as const,

  encode(message: Bucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.folderId !== "") {
      writer.uint32(26).string(message.folderId);
    }
    if (message.anonymousAccessFlags !== undefined) {
      AnonymousAccessFlags.encode(message.anonymousAccessFlags, writer.uint32(34).fork()).ldelim();
    }
    if (message.defaultStorageClass !== "") {
      writer.uint32(42).string(message.defaultStorageClass);
    }
    if (message.versioning !== 0) {
      writer.uint32(48).int32(message.versioning);
    }
    if (message.maxSize !== 0) {
      writer.uint32(56).int64(message.maxSize);
    }
    if (message.policy !== undefined) {
      Struct.encode(Struct.wrap(message.policy), writer.uint32(66).fork()).ldelim();
    }
    if (message.acl !== undefined) {
      ACL.encode(message.acl, writer.uint32(74).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.cors) {
      CorsRule.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.websiteSettings !== undefined) {
      WebsiteSettings.encode(message.websiteSettings, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.lifecycleRules) {
      LifecycleRule.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.objectLock !== undefined) {
      ObjectLock.encode(message.objectLock, writer.uint32(122).fork()).ldelim();
    }
    if (message.encryption !== undefined) {
      Encryption.encode(message.encryption, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bucket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBucket();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.anonymousAccessFlags = AnonymousAccessFlags.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.defaultStorageClass = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.versioning = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.maxSize = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.policy = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.acl = ACL.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.cors.push(CorsRule.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.websiteSettings = WebsiteSettings.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.lifecycleRules.push(LifecycleRule.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.tags.push(Tag.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.objectLock = ObjectLock.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.encryption = Encryption.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bucket {
    return {
      $type: Bucket.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      anonymousAccessFlags: isSet(object.anonymousAccessFlags)
        ? AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
        : undefined,
      defaultStorageClass: isSet(object.defaultStorageClass) ? globalThis.String(object.defaultStorageClass) : "",
      versioning: isSet(object.versioning) ? versioningFromJSON(object.versioning) : 0,
      maxSize: isSet(object.maxSize) ? globalThis.Number(object.maxSize) : 0,
      policy: isObject(object.policy) ? object.policy : undefined,
      acl: isSet(object.acl) ? ACL.fromJSON(object.acl) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      cors: globalThis.Array.isArray(object?.cors) ? object.cors.map((e: any) => CorsRule.fromJSON(e)) : [],
      websiteSettings: isSet(object.websiteSettings) ? WebsiteSettings.fromJSON(object.websiteSettings) : undefined,
      lifecycleRules: globalThis.Array.isArray(object?.lifecycleRules)
        ? object.lifecycleRules.map((e: any) => LifecycleRule.fromJSON(e))
        : [],
      tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e: any) => Tag.fromJSON(e)) : [],
      objectLock: isSet(object.objectLock) ? ObjectLock.fromJSON(object.objectLock) : undefined,
      encryption: isSet(object.encryption) ? Encryption.fromJSON(object.encryption) : undefined,
    };
  },

  toJSON(message: Bucket): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.anonymousAccessFlags !== undefined) {
      obj.anonymousAccessFlags = AnonymousAccessFlags.toJSON(message.anonymousAccessFlags);
    }
    if (message.defaultStorageClass !== "") {
      obj.defaultStorageClass = message.defaultStorageClass;
    }
    if (message.versioning !== 0) {
      obj.versioning = versioningToJSON(message.versioning);
    }
    if (message.maxSize !== 0) {
      obj.maxSize = Math.round(message.maxSize);
    }
    if (message.policy !== undefined) {
      obj.policy = message.policy;
    }
    if (message.acl !== undefined) {
      obj.acl = ACL.toJSON(message.acl);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.cors?.length) {
      obj.cors = message.cors.map((e) => CorsRule.toJSON(e));
    }
    if (message.websiteSettings !== undefined) {
      obj.websiteSettings = WebsiteSettings.toJSON(message.websiteSettings);
    }
    if (message.lifecycleRules?.length) {
      obj.lifecycleRules = message.lifecycleRules.map((e) => LifecycleRule.toJSON(e));
    }
    if (message.tags?.length) {
      obj.tags = message.tags.map((e) => Tag.toJSON(e));
    }
    if (message.objectLock !== undefined) {
      obj.objectLock = ObjectLock.toJSON(message.objectLock);
    }
    if (message.encryption !== undefined) {
      obj.encryption = Encryption.toJSON(message.encryption);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Bucket>, I>>(base?: I): Bucket {
    return Bucket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Bucket>, I>>(object: I): Bucket {
    const message = createBaseBucket();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.folderId = object.folderId ?? "";
    message.anonymousAccessFlags = (object.anonymousAccessFlags !== undefined && object.anonymousAccessFlags !== null)
      ? AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
      : undefined;
    message.defaultStorageClass = object.defaultStorageClass ?? "";
    message.versioning = object.versioning ?? 0;
    message.maxSize = object.maxSize ?? 0;
    message.policy = object.policy ?? undefined;
    message.acl = (object.acl !== undefined && object.acl !== null) ? ACL.fromPartial(object.acl) : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.cors = object.cors?.map((e) => CorsRule.fromPartial(e)) || [];
    message.websiteSettings = (object.websiteSettings !== undefined && object.websiteSettings !== null)
      ? WebsiteSettings.fromPartial(object.websiteSettings)
      : undefined;
    message.lifecycleRules = object.lifecycleRules?.map((e) => LifecycleRule.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
    message.objectLock = (object.objectLock !== undefined && object.objectLock !== null)
      ? ObjectLock.fromPartial(object.objectLock)
      : undefined;
    message.encryption = (object.encryption !== undefined && object.encryption !== null)
      ? Encryption.fromPartial(object.encryption)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Bucket.$type, Bucket);

function createBaseTag(): Tag {
  return { $type: "yandex.cloud.storage.v1.Tag", key: "", value: "" };
}

export const Tag = {
  $type: "yandex.cloud.storage.v1.Tag" as const,

  encode(message: Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTag();
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

  fromJSON(object: any): Tag {
    return {
      $type: Tag.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Tag): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tag>, I>>(base?: I): Tag {
    return Tag.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Tag>, I>>(object: I): Tag {
    const message = createBaseTag();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Tag.$type, Tag);

function createBaseACL(): ACL {
  return { $type: "yandex.cloud.storage.v1.ACL", grants: [] };
}

export const ACL = {
  $type: "yandex.cloud.storage.v1.ACL" as const,

  encode(message: ACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      ACL_Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.grants.push(ACL_Grant.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ACL {
    return {
      $type: ACL.$type,
      grants: globalThis.Array.isArray(object?.grants) ? object.grants.map((e: any) => ACL_Grant.fromJSON(e)) : [],
    };
  },

  toJSON(message: ACL): unknown {
    const obj: any = {};
    if (message.grants?.length) {
      obj.grants = message.grants.map((e) => ACL_Grant.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ACL>, I>>(base?: I): ACL {
    return ACL.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ACL>, I>>(object: I): ACL {
    const message = createBaseACL();
    message.grants = object.grants?.map((e) => ACL_Grant.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ACL.$type, ACL);

function createBaseACL_Grant(): ACL_Grant {
  return { $type: "yandex.cloud.storage.v1.ACL.Grant", permission: 0, grantType: 0, granteeId: "" };
}

export const ACL_Grant = {
  $type: "yandex.cloud.storage.v1.ACL.Grant" as const,

  encode(message: ACL_Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    if (message.grantType !== 0) {
      writer.uint32(16).int32(message.grantType);
    }
    if (message.granteeId !== "") {
      writer.uint32(26).string(message.granteeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ACL_Grant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseACL_Grant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.permission = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.grantType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.granteeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ACL_Grant {
    return {
      $type: ACL_Grant.$type,
      permission: isSet(object.permission) ? aCL_Grant_PermissionFromJSON(object.permission) : 0,
      grantType: isSet(object.grantType) ? aCL_Grant_GrantTypeFromJSON(object.grantType) : 0,
      granteeId: isSet(object.granteeId) ? globalThis.String(object.granteeId) : "",
    };
  },

  toJSON(message: ACL_Grant): unknown {
    const obj: any = {};
    if (message.permission !== 0) {
      obj.permission = aCL_Grant_PermissionToJSON(message.permission);
    }
    if (message.grantType !== 0) {
      obj.grantType = aCL_Grant_GrantTypeToJSON(message.grantType);
    }
    if (message.granteeId !== "") {
      obj.granteeId = message.granteeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ACL_Grant>, I>>(base?: I): ACL_Grant {
    return ACL_Grant.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ACL_Grant>, I>>(object: I): ACL_Grant {
    const message = createBaseACL_Grant();
    message.permission = object.permission ?? 0;
    message.grantType = object.grantType ?? 0;
    message.granteeId = object.granteeId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ACL_Grant.$type, ACL_Grant);

function createBaseAnonymousAccessFlags(): AnonymousAccessFlags {
  return {
    $type: "yandex.cloud.storage.v1.AnonymousAccessFlags",
    read: undefined,
    list: undefined,
    configRead: undefined,
  };
}

export const AnonymousAccessFlags = {
  $type: "yandex.cloud.storage.v1.AnonymousAccessFlags" as const,

  encode(message: AnonymousAccessFlags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.read !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.read! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.list !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.list! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.configRead !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.configRead! }, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnonymousAccessFlags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnonymousAccessFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.read = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.list = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.configRead = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnonymousAccessFlags {
    return {
      $type: AnonymousAccessFlags.$type,
      read: isSet(object.read) ? Boolean(object.read) : undefined,
      list: isSet(object.list) ? Boolean(object.list) : undefined,
      configRead: isSet(object.configRead) ? Boolean(object.configRead) : undefined,
    };
  },

  toJSON(message: AnonymousAccessFlags): unknown {
    const obj: any = {};
    if (message.read !== undefined) {
      obj.read = message.read;
    }
    if (message.list !== undefined) {
      obj.list = message.list;
    }
    if (message.configRead !== undefined) {
      obj.configRead = message.configRead;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnonymousAccessFlags>, I>>(base?: I): AnonymousAccessFlags {
    return AnonymousAccessFlags.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnonymousAccessFlags>, I>>(object: I): AnonymousAccessFlags {
    const message = createBaseAnonymousAccessFlags();
    message.read = object.read ?? undefined;
    message.list = object.list ?? undefined;
    message.configRead = object.configRead ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AnonymousAccessFlags.$type, AnonymousAccessFlags);

function createBaseCorsRule(): CorsRule {
  return {
    $type: "yandex.cloud.storage.v1.CorsRule",
    id: "",
    allowedMethods: [],
    allowedHeaders: [],
    allowedOrigins: [],
    exposeHeaders: [],
    maxAgeSeconds: undefined,
  };
}

export const CorsRule = {
  $type: "yandex.cloud.storage.v1.CorsRule" as const,

  encode(message: CorsRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.allowedMethods) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.allowedHeaders) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.allowedOrigins) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.exposeHeaders) {
      writer.uint32(42).string(v!);
    }
    if (message.maxAgeSeconds !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxAgeSeconds! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CorsRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCorsRule();
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
          if (tag === 16) {
            message.allowedMethods.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.allowedMethods.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allowedHeaders.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allowedOrigins.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.exposeHeaders.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxAgeSeconds = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CorsRule {
    return {
      $type: CorsRule.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      allowedMethods: globalThis.Array.isArray(object?.allowedMethods)
        ? object.allowedMethods.map((e: any) => corsRule_MethodFromJSON(e))
        : [],
      allowedHeaders: globalThis.Array.isArray(object?.allowedHeaders)
        ? object.allowedHeaders.map((e: any) => globalThis.String(e))
        : [],
      allowedOrigins: globalThis.Array.isArray(object?.allowedOrigins)
        ? object.allowedOrigins.map((e: any) => globalThis.String(e))
        : [],
      exposeHeaders: globalThis.Array.isArray(object?.exposeHeaders)
        ? object.exposeHeaders.map((e: any) => globalThis.String(e))
        : [],
      maxAgeSeconds: isSet(object.maxAgeSeconds) ? Number(object.maxAgeSeconds) : undefined,
    };
  },

  toJSON(message: CorsRule): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.allowedMethods?.length) {
      obj.allowedMethods = message.allowedMethods.map((e) => corsRule_MethodToJSON(e));
    }
    if (message.allowedHeaders?.length) {
      obj.allowedHeaders = message.allowedHeaders;
    }
    if (message.allowedOrigins?.length) {
      obj.allowedOrigins = message.allowedOrigins;
    }
    if (message.exposeHeaders?.length) {
      obj.exposeHeaders = message.exposeHeaders;
    }
    if (message.maxAgeSeconds !== undefined) {
      obj.maxAgeSeconds = message.maxAgeSeconds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CorsRule>, I>>(base?: I): CorsRule {
    return CorsRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CorsRule>, I>>(object: I): CorsRule {
    const message = createBaseCorsRule();
    message.id = object.id ?? "";
    message.allowedMethods = object.allowedMethods?.map((e) => e) || [];
    message.allowedHeaders = object.allowedHeaders?.map((e) => e) || [];
    message.allowedOrigins = object.allowedOrigins?.map((e) => e) || [];
    message.exposeHeaders = object.exposeHeaders?.map((e) => e) || [];
    message.maxAgeSeconds = object.maxAgeSeconds ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CorsRule.$type, CorsRule);

function createBaseWebsiteSettings(): WebsiteSettings {
  return {
    $type: "yandex.cloud.storage.v1.WebsiteSettings",
    index: "",
    error: "",
    redirectAllRequests: undefined,
    routingRules: [],
  };
}

export const WebsiteSettings = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings" as const,

  encode(message: WebsiteSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.redirectAllRequests !== undefined) {
      WebsiteSettings_Scheme.encode(message.redirectAllRequests, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.routingRules) {
      WebsiteSettings_RoutingRule.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebsiteSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebsiteSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.redirectAllRequests = WebsiteSettings_Scheme.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.routingRules.push(WebsiteSettings_RoutingRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebsiteSettings {
    return {
      $type: WebsiteSettings.$type,
      index: isSet(object.index) ? globalThis.String(object.index) : "",
      error: isSet(object.error) ? globalThis.String(object.error) : "",
      redirectAllRequests: isSet(object.redirectAllRequests)
        ? WebsiteSettings_Scheme.fromJSON(object.redirectAllRequests)
        : undefined,
      routingRules: globalThis.Array.isArray(object?.routingRules)
        ? object.routingRules.map((e: any) => WebsiteSettings_RoutingRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WebsiteSettings): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    if (message.redirectAllRequests !== undefined) {
      obj.redirectAllRequests = WebsiteSettings_Scheme.toJSON(message.redirectAllRequests);
    }
    if (message.routingRules?.length) {
      obj.routingRules = message.routingRules.map((e) => WebsiteSettings_RoutingRule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WebsiteSettings>, I>>(base?: I): WebsiteSettings {
    return WebsiteSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WebsiteSettings>, I>>(object: I): WebsiteSettings {
    const message = createBaseWebsiteSettings();
    message.index = object.index ?? "";
    message.error = object.error ?? "";
    message.redirectAllRequests = (object.redirectAllRequests !== undefined && object.redirectAllRequests !== null)
      ? WebsiteSettings_Scheme.fromPartial(object.redirectAllRequests)
      : undefined;
    message.routingRules = object.routingRules?.map((e) => WebsiteSettings_RoutingRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(WebsiteSettings.$type, WebsiteSettings);

function createBaseWebsiteSettings_Scheme(): WebsiteSettings_Scheme {
  return { $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme", protocol: 0, hostname: "" };
}

export const WebsiteSettings_Scheme = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme" as const,

  encode(message: WebsiteSettings_Scheme, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== 0) {
      writer.uint32(8).int32(message.protocol);
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebsiteSettings_Scheme {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebsiteSettings_Scheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.protocol = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hostname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebsiteSettings_Scheme {
    return {
      $type: WebsiteSettings_Scheme.$type,
      protocol: isSet(object.protocol) ? websiteSettings_ProtocolFromJSON(object.protocol) : 0,
      hostname: isSet(object.hostname) ? globalThis.String(object.hostname) : "",
    };
  },

  toJSON(message: WebsiteSettings_Scheme): unknown {
    const obj: any = {};
    if (message.protocol !== 0) {
      obj.protocol = websiteSettings_ProtocolToJSON(message.protocol);
    }
    if (message.hostname !== "") {
      obj.hostname = message.hostname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WebsiteSettings_Scheme>, I>>(base?: I): WebsiteSettings_Scheme {
    return WebsiteSettings_Scheme.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WebsiteSettings_Scheme>, I>>(object: I): WebsiteSettings_Scheme {
    const message = createBaseWebsiteSettings_Scheme();
    message.protocol = object.protocol ?? 0;
    message.hostname = object.hostname ?? "";
    return message;
  },
};

messageTypeRegistry.set(WebsiteSettings_Scheme.$type, WebsiteSettings_Scheme);

function createBaseWebsiteSettings_Condition(): WebsiteSettings_Condition {
  return {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition",
    httpErrorCodeReturnedEquals: "",
    keyPrefixEquals: "",
  };
}

export const WebsiteSettings_Condition = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition" as const,

  encode(message: WebsiteSettings_Condition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpErrorCodeReturnedEquals !== "") {
      writer.uint32(10).string(message.httpErrorCodeReturnedEquals);
    }
    if (message.keyPrefixEquals !== "") {
      writer.uint32(18).string(message.keyPrefixEquals);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebsiteSettings_Condition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebsiteSettings_Condition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpErrorCodeReturnedEquals = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keyPrefixEquals = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebsiteSettings_Condition {
    return {
      $type: WebsiteSettings_Condition.$type,
      httpErrorCodeReturnedEquals: isSet(object.httpErrorCodeReturnedEquals)
        ? globalThis.String(object.httpErrorCodeReturnedEquals)
        : "",
      keyPrefixEquals: isSet(object.keyPrefixEquals) ? globalThis.String(object.keyPrefixEquals) : "",
    };
  },

  toJSON(message: WebsiteSettings_Condition): unknown {
    const obj: any = {};
    if (message.httpErrorCodeReturnedEquals !== "") {
      obj.httpErrorCodeReturnedEquals = message.httpErrorCodeReturnedEquals;
    }
    if (message.keyPrefixEquals !== "") {
      obj.keyPrefixEquals = message.keyPrefixEquals;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WebsiteSettings_Condition>, I>>(base?: I): WebsiteSettings_Condition {
    return WebsiteSettings_Condition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WebsiteSettings_Condition>, I>>(object: I): WebsiteSettings_Condition {
    const message = createBaseWebsiteSettings_Condition();
    message.httpErrorCodeReturnedEquals = object.httpErrorCodeReturnedEquals ?? "";
    message.keyPrefixEquals = object.keyPrefixEquals ?? "";
    return message;
  },
};

messageTypeRegistry.set(WebsiteSettings_Condition.$type, WebsiteSettings_Condition);

function createBaseWebsiteSettings_Redirect(): WebsiteSettings_Redirect {
  return {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect",
    hostname: "",
    httpRedirectCode: "",
    protocol: 0,
    replaceKeyPrefixWith: "",
    replaceKeyWith: "",
  };
}

export const WebsiteSettings_Redirect = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect" as const,

  encode(message: WebsiteSettings_Redirect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostname !== "") {
      writer.uint32(10).string(message.hostname);
    }
    if (message.httpRedirectCode !== "") {
      writer.uint32(18).string(message.httpRedirectCode);
    }
    if (message.protocol !== 0) {
      writer.uint32(24).int32(message.protocol);
    }
    if (message.replaceKeyPrefixWith !== "") {
      writer.uint32(34).string(message.replaceKeyPrefixWith);
    }
    if (message.replaceKeyWith !== "") {
      writer.uint32(42).string(message.replaceKeyWith);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebsiteSettings_Redirect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebsiteSettings_Redirect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostname = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.httpRedirectCode = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.protocol = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.replaceKeyPrefixWith = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.replaceKeyWith = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebsiteSettings_Redirect {
    return {
      $type: WebsiteSettings_Redirect.$type,
      hostname: isSet(object.hostname) ? globalThis.String(object.hostname) : "",
      httpRedirectCode: isSet(object.httpRedirectCode) ? globalThis.String(object.httpRedirectCode) : "",
      protocol: isSet(object.protocol) ? websiteSettings_ProtocolFromJSON(object.protocol) : 0,
      replaceKeyPrefixWith: isSet(object.replaceKeyPrefixWith) ? globalThis.String(object.replaceKeyPrefixWith) : "",
      replaceKeyWith: isSet(object.replaceKeyWith) ? globalThis.String(object.replaceKeyWith) : "",
    };
  },

  toJSON(message: WebsiteSettings_Redirect): unknown {
    const obj: any = {};
    if (message.hostname !== "") {
      obj.hostname = message.hostname;
    }
    if (message.httpRedirectCode !== "") {
      obj.httpRedirectCode = message.httpRedirectCode;
    }
    if (message.protocol !== 0) {
      obj.protocol = websiteSettings_ProtocolToJSON(message.protocol);
    }
    if (message.replaceKeyPrefixWith !== "") {
      obj.replaceKeyPrefixWith = message.replaceKeyPrefixWith;
    }
    if (message.replaceKeyWith !== "") {
      obj.replaceKeyWith = message.replaceKeyWith;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WebsiteSettings_Redirect>, I>>(base?: I): WebsiteSettings_Redirect {
    return WebsiteSettings_Redirect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WebsiteSettings_Redirect>, I>>(object: I): WebsiteSettings_Redirect {
    const message = createBaseWebsiteSettings_Redirect();
    message.hostname = object.hostname ?? "";
    message.httpRedirectCode = object.httpRedirectCode ?? "";
    message.protocol = object.protocol ?? 0;
    message.replaceKeyPrefixWith = object.replaceKeyPrefixWith ?? "";
    message.replaceKeyWith = object.replaceKeyWith ?? "";
    return message;
  },
};

messageTypeRegistry.set(WebsiteSettings_Redirect.$type, WebsiteSettings_Redirect);

function createBaseWebsiteSettings_RoutingRule(): WebsiteSettings_RoutingRule {
  return { $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule", condition: undefined, redirect: undefined };
}

export const WebsiteSettings_RoutingRule = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule" as const,

  encode(message: WebsiteSettings_RoutingRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.condition !== undefined) {
      WebsiteSettings_Condition.encode(message.condition, writer.uint32(10).fork()).ldelim();
    }
    if (message.redirect !== undefined) {
      WebsiteSettings_Redirect.encode(message.redirect, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebsiteSettings_RoutingRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebsiteSettings_RoutingRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.condition = WebsiteSettings_Condition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.redirect = WebsiteSettings_Redirect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebsiteSettings_RoutingRule {
    return {
      $type: WebsiteSettings_RoutingRule.$type,
      condition: isSet(object.condition) ? WebsiteSettings_Condition.fromJSON(object.condition) : undefined,
      redirect: isSet(object.redirect) ? WebsiteSettings_Redirect.fromJSON(object.redirect) : undefined,
    };
  },

  toJSON(message: WebsiteSettings_RoutingRule): unknown {
    const obj: any = {};
    if (message.condition !== undefined) {
      obj.condition = WebsiteSettings_Condition.toJSON(message.condition);
    }
    if (message.redirect !== undefined) {
      obj.redirect = WebsiteSettings_Redirect.toJSON(message.redirect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WebsiteSettings_RoutingRule>, I>>(base?: I): WebsiteSettings_RoutingRule {
    return WebsiteSettings_RoutingRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WebsiteSettings_RoutingRule>, I>>(object: I): WebsiteSettings_RoutingRule {
    const message = createBaseWebsiteSettings_RoutingRule();
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? WebsiteSettings_Condition.fromPartial(object.condition)
      : undefined;
    message.redirect = (object.redirect !== undefined && object.redirect !== null)
      ? WebsiteSettings_Redirect.fromPartial(object.redirect)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(WebsiteSettings_RoutingRule.$type, WebsiteSettings_RoutingRule);

function createBaseLifecycleRule(): LifecycleRule {
  return {
    $type: "yandex.cloud.storage.v1.LifecycleRule",
    id: undefined,
    enabled: false,
    filter: undefined,
    expiration: undefined,
    transitions: [],
    abortIncompleteMultipartUpload: undefined,
    noncurrentExpiration: undefined,
    noncurrentTransitions: [],
  };
}

export const LifecycleRule = {
  $type: "yandex.cloud.storage.v1.LifecycleRule" as const,

  encode(message: LifecycleRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      StringValue.encode({ $type: "google.protobuf.StringValue", value: message.id! }, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.filter !== undefined) {
      LifecycleRule_RuleFilter.encode(message.filter, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      LifecycleRule_Expiration.encode(message.expiration, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.transitions) {
      LifecycleRule_Transition.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.abortIncompleteMultipartUpload !== undefined) {
      LifecycleRule_AfterDays.encode(message.abortIncompleteMultipartUpload, writer.uint32(50).fork()).ldelim();
    }
    if (message.noncurrentExpiration !== undefined) {
      LifecycleRule_NoncurrentExpiration.encode(message.noncurrentExpiration, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.noncurrentTransitions) {
      LifecycleRule_NoncurrentTransition.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecycleRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = LifecycleRule_RuleFilter.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.expiration = LifecycleRule_Expiration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.transitions.push(LifecycleRule_Transition.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.abortIncompleteMultipartUpload = LifecycleRule_AfterDays.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.noncurrentExpiration = LifecycleRule_NoncurrentExpiration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.noncurrentTransitions.push(LifecycleRule_NoncurrentTransition.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule {
    return {
      $type: LifecycleRule.$type,
      id: isSet(object.id) ? String(object.id) : undefined,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      filter: isSet(object.filter) ? LifecycleRule_RuleFilter.fromJSON(object.filter) : undefined,
      expiration: isSet(object.expiration) ? LifecycleRule_Expiration.fromJSON(object.expiration) : undefined,
      transitions: globalThis.Array.isArray(object?.transitions)
        ? object.transitions.map((e: any) => LifecycleRule_Transition.fromJSON(e))
        : [],
      abortIncompleteMultipartUpload: isSet(object.abortIncompleteMultipartUpload)
        ? LifecycleRule_AfterDays.fromJSON(object.abortIncompleteMultipartUpload)
        : undefined,
      noncurrentExpiration: isSet(object.noncurrentExpiration)
        ? LifecycleRule_NoncurrentExpiration.fromJSON(object.noncurrentExpiration)
        : undefined,
      noncurrentTransitions: globalThis.Array.isArray(object?.noncurrentTransitions)
        ? object.noncurrentTransitions.map((e: any) => LifecycleRule_NoncurrentTransition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LifecycleRule): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.filter !== undefined) {
      obj.filter = LifecycleRule_RuleFilter.toJSON(message.filter);
    }
    if (message.expiration !== undefined) {
      obj.expiration = LifecycleRule_Expiration.toJSON(message.expiration);
    }
    if (message.transitions?.length) {
      obj.transitions = message.transitions.map((e) => LifecycleRule_Transition.toJSON(e));
    }
    if (message.abortIncompleteMultipartUpload !== undefined) {
      obj.abortIncompleteMultipartUpload = LifecycleRule_AfterDays.toJSON(message.abortIncompleteMultipartUpload);
    }
    if (message.noncurrentExpiration !== undefined) {
      obj.noncurrentExpiration = LifecycleRule_NoncurrentExpiration.toJSON(message.noncurrentExpiration);
    }
    if (message.noncurrentTransitions?.length) {
      obj.noncurrentTransitions = message.noncurrentTransitions.map((e) =>
        LifecycleRule_NoncurrentTransition.toJSON(e)
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecycleRule>, I>>(base?: I): LifecycleRule {
    return LifecycleRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecycleRule>, I>>(object: I): LifecycleRule {
    const message = createBaseLifecycleRule();
    message.id = object.id ?? undefined;
    message.enabled = object.enabled ?? false;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? LifecycleRule_RuleFilter.fromPartial(object.filter)
      : undefined;
    message.expiration = (object.expiration !== undefined && object.expiration !== null)
      ? LifecycleRule_Expiration.fromPartial(object.expiration)
      : undefined;
    message.transitions = object.transitions?.map((e) => LifecycleRule_Transition.fromPartial(e)) || [];
    message.abortIncompleteMultipartUpload =
      (object.abortIncompleteMultipartUpload !== undefined && object.abortIncompleteMultipartUpload !== null)
        ? LifecycleRule_AfterDays.fromPartial(object.abortIncompleteMultipartUpload)
        : undefined;
    message.noncurrentExpiration = (object.noncurrentExpiration !== undefined && object.noncurrentExpiration !== null)
      ? LifecycleRule_NoncurrentExpiration.fromPartial(object.noncurrentExpiration)
      : undefined;
    message.noncurrentTransitions =
      object.noncurrentTransitions?.map((e) => LifecycleRule_NoncurrentTransition.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule.$type, LifecycleRule);

function createBaseLifecycleRule_AfterDays(): LifecycleRule_AfterDays {
  return { $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays", daysAfterExpiration: undefined };
}

export const LifecycleRule_AfterDays = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays" as const,

  encode(message: LifecycleRule_AfterDays, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.daysAfterExpiration !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.daysAfterExpiration! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule_AfterDays {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecycleRule_AfterDays();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.daysAfterExpiration = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_AfterDays {
    return {
      $type: LifecycleRule_AfterDays.$type,
      daysAfterExpiration: isSet(object.daysAfterExpiration) ? Number(object.daysAfterExpiration) : undefined,
    };
  },

  toJSON(message: LifecycleRule_AfterDays): unknown {
    const obj: any = {};
    if (message.daysAfterExpiration !== undefined) {
      obj.daysAfterExpiration = message.daysAfterExpiration;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecycleRule_AfterDays>, I>>(base?: I): LifecycleRule_AfterDays {
    return LifecycleRule_AfterDays.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecycleRule_AfterDays>, I>>(object: I): LifecycleRule_AfterDays {
    const message = createBaseLifecycleRule_AfterDays();
    message.daysAfterExpiration = object.daysAfterExpiration ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule_AfterDays.$type, LifecycleRule_AfterDays);

function createBaseLifecycleRule_NoncurrentExpiration(): LifecycleRule_NoncurrentExpiration {
  return { $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration", noncurrentDays: undefined };
}

export const LifecycleRule_NoncurrentExpiration = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration" as const,

  encode(message: LifecycleRule_NoncurrentExpiration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noncurrentDays !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.noncurrentDays! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule_NoncurrentExpiration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecycleRule_NoncurrentExpiration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.noncurrentDays = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_NoncurrentExpiration {
    return {
      $type: LifecycleRule_NoncurrentExpiration.$type,
      noncurrentDays: isSet(object.noncurrentDays) ? Number(object.noncurrentDays) : undefined,
    };
  },

  toJSON(message: LifecycleRule_NoncurrentExpiration): unknown {
    const obj: any = {};
    if (message.noncurrentDays !== undefined) {
      obj.noncurrentDays = message.noncurrentDays;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecycleRule_NoncurrentExpiration>, I>>(
    base?: I,
  ): LifecycleRule_NoncurrentExpiration {
    return LifecycleRule_NoncurrentExpiration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecycleRule_NoncurrentExpiration>, I>>(
    object: I,
  ): LifecycleRule_NoncurrentExpiration {
    const message = createBaseLifecycleRule_NoncurrentExpiration();
    message.noncurrentDays = object.noncurrentDays ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule_NoncurrentExpiration.$type, LifecycleRule_NoncurrentExpiration);

function createBaseLifecycleRule_NoncurrentTransition(): LifecycleRule_NoncurrentTransition {
  return {
    $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition",
    noncurrentDays: undefined,
    storageClass: "",
  };
}

export const LifecycleRule_NoncurrentTransition = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition" as const,

  encode(message: LifecycleRule_NoncurrentTransition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noncurrentDays !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.noncurrentDays! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.storageClass !== "") {
      writer.uint32(18).string(message.storageClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule_NoncurrentTransition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecycleRule_NoncurrentTransition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.noncurrentDays = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.storageClass = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_NoncurrentTransition {
    return {
      $type: LifecycleRule_NoncurrentTransition.$type,
      noncurrentDays: isSet(object.noncurrentDays) ? Number(object.noncurrentDays) : undefined,
      storageClass: isSet(object.storageClass) ? globalThis.String(object.storageClass) : "",
    };
  },

  toJSON(message: LifecycleRule_NoncurrentTransition): unknown {
    const obj: any = {};
    if (message.noncurrentDays !== undefined) {
      obj.noncurrentDays = message.noncurrentDays;
    }
    if (message.storageClass !== "") {
      obj.storageClass = message.storageClass;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecycleRule_NoncurrentTransition>, I>>(
    base?: I,
  ): LifecycleRule_NoncurrentTransition {
    return LifecycleRule_NoncurrentTransition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecycleRule_NoncurrentTransition>, I>>(
    object: I,
  ): LifecycleRule_NoncurrentTransition {
    const message = createBaseLifecycleRule_NoncurrentTransition();
    message.noncurrentDays = object.noncurrentDays ?? undefined;
    message.storageClass = object.storageClass ?? "";
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule_NoncurrentTransition.$type, LifecycleRule_NoncurrentTransition);

function createBaseLifecycleRule_Transition(): LifecycleRule_Transition {
  return {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Transition",
    date: undefined,
    days: undefined,
    storageClass: "",
  };
}

export const LifecycleRule_Transition = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Transition" as const,

  encode(message: LifecycleRule_Transition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(10).fork()).ldelim();
    }
    if (message.days !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.days! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.storageClass !== "") {
      writer.uint32(34).string(message.storageClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule_Transition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecycleRule_Transition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.days = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.storageClass = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_Transition {
    return {
      $type: LifecycleRule_Transition.$type,
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      days: isSet(object.days) ? Number(object.days) : undefined,
      storageClass: isSet(object.storageClass) ? globalThis.String(object.storageClass) : "",
    };
  },

  toJSON(message: LifecycleRule_Transition): unknown {
    const obj: any = {};
    if (message.date !== undefined) {
      obj.date = message.date.toISOString();
    }
    if (message.days !== undefined) {
      obj.days = message.days;
    }
    if (message.storageClass !== "") {
      obj.storageClass = message.storageClass;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecycleRule_Transition>, I>>(base?: I): LifecycleRule_Transition {
    return LifecycleRule_Transition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecycleRule_Transition>, I>>(object: I): LifecycleRule_Transition {
    const message = createBaseLifecycleRule_Transition();
    message.date = object.date ?? undefined;
    message.days = object.days ?? undefined;
    message.storageClass = object.storageClass ?? "";
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule_Transition.$type, LifecycleRule_Transition);

function createBaseLifecycleRule_Expiration(): LifecycleRule_Expiration {
  return {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration",
    date: undefined,
    days: undefined,
    expiredObjectDeleteMarker: undefined,
  };
}

export const LifecycleRule_Expiration = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration" as const,

  encode(message: LifecycleRule_Expiration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(10).fork()).ldelim();
    }
    if (message.days !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.days! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.expiredObjectDeleteMarker !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.expiredObjectDeleteMarker! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule_Expiration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecycleRule_Expiration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.days = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expiredObjectDeleteMarker = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_Expiration {
    return {
      $type: LifecycleRule_Expiration.$type,
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      days: isSet(object.days) ? Number(object.days) : undefined,
      expiredObjectDeleteMarker: isSet(object.expiredObjectDeleteMarker)
        ? Boolean(object.expiredObjectDeleteMarker)
        : undefined,
    };
  },

  toJSON(message: LifecycleRule_Expiration): unknown {
    const obj: any = {};
    if (message.date !== undefined) {
      obj.date = message.date.toISOString();
    }
    if (message.days !== undefined) {
      obj.days = message.days;
    }
    if (message.expiredObjectDeleteMarker !== undefined) {
      obj.expiredObjectDeleteMarker = message.expiredObjectDeleteMarker;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecycleRule_Expiration>, I>>(base?: I): LifecycleRule_Expiration {
    return LifecycleRule_Expiration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecycleRule_Expiration>, I>>(object: I): LifecycleRule_Expiration {
    const message = createBaseLifecycleRule_Expiration();
    message.date = object.date ?? undefined;
    message.days = object.days ?? undefined;
    message.expiredObjectDeleteMarker = object.expiredObjectDeleteMarker ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule_Expiration.$type, LifecycleRule_Expiration);

function createBaseLifecycleRule_RuleFilter(): LifecycleRule_RuleFilter {
  return {
    $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter",
    prefix: "",
    objectSizeGreaterThan: undefined,
    objectSizeLessThan: undefined,
    tag: undefined,
    andOperator: undefined,
  };
}

export const LifecycleRule_RuleFilter = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter" as const,

  encode(message: LifecycleRule_RuleFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.objectSizeGreaterThan !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.objectSizeGreaterThan! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.objectSizeLessThan !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.objectSizeLessThan! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.tag !== undefined) {
      Tag.encode(message.tag, writer.uint32(34).fork()).ldelim();
    }
    if (message.andOperator !== undefined) {
      LifecycleRule_RuleFilter_And.encode(message.andOperator, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule_RuleFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecycleRule_RuleFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prefix = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.objectSizeGreaterThan = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.objectSizeLessThan = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tag = Tag.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.andOperator = LifecycleRule_RuleFilter_And.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_RuleFilter {
    return {
      $type: LifecycleRule_RuleFilter.$type,
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : "",
      objectSizeGreaterThan: isSet(object.objectSizeGreaterThan) ? Number(object.objectSizeGreaterThan) : undefined,
      objectSizeLessThan: isSet(object.objectSizeLessThan) ? Number(object.objectSizeLessThan) : undefined,
      tag: isSet(object.tag) ? Tag.fromJSON(object.tag) : undefined,
      andOperator: isSet(object.andOperator) ? LifecycleRule_RuleFilter_And.fromJSON(object.andOperator) : undefined,
    };
  },

  toJSON(message: LifecycleRule_RuleFilter): unknown {
    const obj: any = {};
    if (message.prefix !== "") {
      obj.prefix = message.prefix;
    }
    if (message.objectSizeGreaterThan !== undefined) {
      obj.objectSizeGreaterThan = message.objectSizeGreaterThan;
    }
    if (message.objectSizeLessThan !== undefined) {
      obj.objectSizeLessThan = message.objectSizeLessThan;
    }
    if (message.tag !== undefined) {
      obj.tag = Tag.toJSON(message.tag);
    }
    if (message.andOperator !== undefined) {
      obj.andOperator = LifecycleRule_RuleFilter_And.toJSON(message.andOperator);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecycleRule_RuleFilter>, I>>(base?: I): LifecycleRule_RuleFilter {
    return LifecycleRule_RuleFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecycleRule_RuleFilter>, I>>(object: I): LifecycleRule_RuleFilter {
    const message = createBaseLifecycleRule_RuleFilter();
    message.prefix = object.prefix ?? "";
    message.objectSizeGreaterThan = object.objectSizeGreaterThan ?? undefined;
    message.objectSizeLessThan = object.objectSizeLessThan ?? undefined;
    message.tag = (object.tag !== undefined && object.tag !== null) ? Tag.fromPartial(object.tag) : undefined;
    message.andOperator = (object.andOperator !== undefined && object.andOperator !== null)
      ? LifecycleRule_RuleFilter_And.fromPartial(object.andOperator)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule_RuleFilter.$type, LifecycleRule_RuleFilter);

function createBaseLifecycleRule_RuleFilter_And(): LifecycleRule_RuleFilter_And {
  return {
    $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter.And",
    prefix: "",
    objectSizeGreaterThan: undefined,
    objectSizeLessThan: undefined,
    tag: [],
  };
}

export const LifecycleRule_RuleFilter_And = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter.And" as const,

  encode(message: LifecycleRule_RuleFilter_And, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.objectSizeGreaterThan !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.objectSizeGreaterThan! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.objectSizeLessThan !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.objectSizeLessThan! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    for (const v of message.tag) {
      Tag.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule_RuleFilter_And {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecycleRule_RuleFilter_And();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prefix = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.objectSizeGreaterThan = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.objectSizeLessThan = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tag.push(Tag.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_RuleFilter_And {
    return {
      $type: LifecycleRule_RuleFilter_And.$type,
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : "",
      objectSizeGreaterThan: isSet(object.objectSizeGreaterThan) ? Number(object.objectSizeGreaterThan) : undefined,
      objectSizeLessThan: isSet(object.objectSizeLessThan) ? Number(object.objectSizeLessThan) : undefined,
      tag: globalThis.Array.isArray(object?.tag) ? object.tag.map((e: any) => Tag.fromJSON(e)) : [],
    };
  },

  toJSON(message: LifecycleRule_RuleFilter_And): unknown {
    const obj: any = {};
    if (message.prefix !== "") {
      obj.prefix = message.prefix;
    }
    if (message.objectSizeGreaterThan !== undefined) {
      obj.objectSizeGreaterThan = message.objectSizeGreaterThan;
    }
    if (message.objectSizeLessThan !== undefined) {
      obj.objectSizeLessThan = message.objectSizeLessThan;
    }
    if (message.tag?.length) {
      obj.tag = message.tag.map((e) => Tag.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecycleRule_RuleFilter_And>, I>>(base?: I): LifecycleRule_RuleFilter_And {
    return LifecycleRule_RuleFilter_And.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecycleRule_RuleFilter_And>, I>>(object: I): LifecycleRule_RuleFilter_And {
    const message = createBaseLifecycleRule_RuleFilter_And();
    message.prefix = object.prefix ?? "";
    message.objectSizeGreaterThan = object.objectSizeGreaterThan ?? undefined;
    message.objectSizeLessThan = object.objectSizeLessThan ?? undefined;
    message.tag = object.tag?.map((e) => Tag.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule_RuleFilter_And.$type, LifecycleRule_RuleFilter_And);

function createBaseCounters(): Counters {
  return {
    $type: "yandex.cloud.storage.v1.Counters",
    simpleObjectSize: 0,
    simpleObjectCount: 0,
    objectsPartsSize: 0,
    objectsPartsCount: 0,
    multipartObjectsSize: 0,
    multipartObjectsCount: 0,
    activeMultipartCount: 0,
  };
}

export const Counters = {
  $type: "yandex.cloud.storage.v1.Counters" as const,

  encode(message: Counters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.simpleObjectSize !== 0) {
      writer.uint32(8).int64(message.simpleObjectSize);
    }
    if (message.simpleObjectCount !== 0) {
      writer.uint32(16).int64(message.simpleObjectCount);
    }
    if (message.objectsPartsSize !== 0) {
      writer.uint32(24).int64(message.objectsPartsSize);
    }
    if (message.objectsPartsCount !== 0) {
      writer.uint32(32).int64(message.objectsPartsCount);
    }
    if (message.multipartObjectsSize !== 0) {
      writer.uint32(40).int64(message.multipartObjectsSize);
    }
    if (message.multipartObjectsCount !== 0) {
      writer.uint32(48).int64(message.multipartObjectsCount);
    }
    if (message.activeMultipartCount !== 0) {
      writer.uint32(56).int64(message.activeMultipartCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Counters {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.simpleObjectSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.simpleObjectCount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.objectsPartsSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.objectsPartsCount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.multipartObjectsSize = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.multipartObjectsCount = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.activeMultipartCount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Counters {
    return {
      $type: Counters.$type,
      simpleObjectSize: isSet(object.simpleObjectSize) ? globalThis.Number(object.simpleObjectSize) : 0,
      simpleObjectCount: isSet(object.simpleObjectCount) ? globalThis.Number(object.simpleObjectCount) : 0,
      objectsPartsSize: isSet(object.objectsPartsSize) ? globalThis.Number(object.objectsPartsSize) : 0,
      objectsPartsCount: isSet(object.objectsPartsCount) ? globalThis.Number(object.objectsPartsCount) : 0,
      multipartObjectsSize: isSet(object.multipartObjectsSize) ? globalThis.Number(object.multipartObjectsSize) : 0,
      multipartObjectsCount: isSet(object.multipartObjectsCount) ? globalThis.Number(object.multipartObjectsCount) : 0,
      activeMultipartCount: isSet(object.activeMultipartCount) ? globalThis.Number(object.activeMultipartCount) : 0,
    };
  },

  toJSON(message: Counters): unknown {
    const obj: any = {};
    if (message.simpleObjectSize !== 0) {
      obj.simpleObjectSize = Math.round(message.simpleObjectSize);
    }
    if (message.simpleObjectCount !== 0) {
      obj.simpleObjectCount = Math.round(message.simpleObjectCount);
    }
    if (message.objectsPartsSize !== 0) {
      obj.objectsPartsSize = Math.round(message.objectsPartsSize);
    }
    if (message.objectsPartsCount !== 0) {
      obj.objectsPartsCount = Math.round(message.objectsPartsCount);
    }
    if (message.multipartObjectsSize !== 0) {
      obj.multipartObjectsSize = Math.round(message.multipartObjectsSize);
    }
    if (message.multipartObjectsCount !== 0) {
      obj.multipartObjectsCount = Math.round(message.multipartObjectsCount);
    }
    if (message.activeMultipartCount !== 0) {
      obj.activeMultipartCount = Math.round(message.activeMultipartCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Counters>, I>>(base?: I): Counters {
    return Counters.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Counters>, I>>(object: I): Counters {
    const message = createBaseCounters();
    message.simpleObjectSize = object.simpleObjectSize ?? 0;
    message.simpleObjectCount = object.simpleObjectCount ?? 0;
    message.objectsPartsSize = object.objectsPartsSize ?? 0;
    message.objectsPartsCount = object.objectsPartsCount ?? 0;
    message.multipartObjectsSize = object.multipartObjectsSize ?? 0;
    message.multipartObjectsCount = object.multipartObjectsCount ?? 0;
    message.activeMultipartCount = object.activeMultipartCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Counters.$type, Counters);

function createBaseOptionalSizeByClass(): OptionalSizeByClass {
  return { $type: "yandex.cloud.storage.v1.OptionalSizeByClass", storageClass: "", classSize: undefined };
}

export const OptionalSizeByClass = {
  $type: "yandex.cloud.storage.v1.OptionalSizeByClass" as const,

  encode(message: OptionalSizeByClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageClass !== "") {
      writer.uint32(10).string(message.storageClass);
    }
    if (message.classSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.classSize! }, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalSizeByClass {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalSizeByClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storageClass = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.classSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionalSizeByClass {
    return {
      $type: OptionalSizeByClass.$type,
      storageClass: isSet(object.storageClass) ? globalThis.String(object.storageClass) : "",
      classSize: isSet(object.classSize) ? Number(object.classSize) : undefined,
    };
  },

  toJSON(message: OptionalSizeByClass): unknown {
    const obj: any = {};
    if (message.storageClass !== "") {
      obj.storageClass = message.storageClass;
    }
    if (message.classSize !== undefined) {
      obj.classSize = message.classSize;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OptionalSizeByClass>, I>>(base?: I): OptionalSizeByClass {
    return OptionalSizeByClass.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OptionalSizeByClass>, I>>(object: I): OptionalSizeByClass {
    const message = createBaseOptionalSizeByClass();
    message.storageClass = object.storageClass ?? "";
    message.classSize = object.classSize ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(OptionalSizeByClass.$type, OptionalSizeByClass);

function createBaseSizeByClass(): SizeByClass {
  return { $type: "yandex.cloud.storage.v1.SizeByClass", storageClass: "", classSize: 0 };
}

export const SizeByClass = {
  $type: "yandex.cloud.storage.v1.SizeByClass" as const,

  encode(message: SizeByClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageClass !== "") {
      writer.uint32(10).string(message.storageClass);
    }
    if (message.classSize !== 0) {
      writer.uint32(16).int64(message.classSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SizeByClass {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSizeByClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storageClass = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.classSize = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SizeByClass {
    return {
      $type: SizeByClass.$type,
      storageClass: isSet(object.storageClass) ? globalThis.String(object.storageClass) : "",
      classSize: isSet(object.classSize) ? globalThis.Number(object.classSize) : 0,
    };
  },

  toJSON(message: SizeByClass): unknown {
    const obj: any = {};
    if (message.storageClass !== "") {
      obj.storageClass = message.storageClass;
    }
    if (message.classSize !== 0) {
      obj.classSize = Math.round(message.classSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SizeByClass>, I>>(base?: I): SizeByClass {
    return SizeByClass.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SizeByClass>, I>>(object: I): SizeByClass {
    const message = createBaseSizeByClass();
    message.storageClass = object.storageClass ?? "";
    message.classSize = object.classSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SizeByClass.$type, SizeByClass);

function createBaseCountersByClass(): CountersByClass {
  return { $type: "yandex.cloud.storage.v1.CountersByClass", storageClass: "", counters: undefined };
}

export const CountersByClass = {
  $type: "yandex.cloud.storage.v1.CountersByClass" as const,

  encode(message: CountersByClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageClass !== "") {
      writer.uint32(10).string(message.storageClass);
    }
    if (message.counters !== undefined) {
      Counters.encode(message.counters, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountersByClass {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountersByClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storageClass = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.counters = Counters.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CountersByClass {
    return {
      $type: CountersByClass.$type,
      storageClass: isSet(object.storageClass) ? globalThis.String(object.storageClass) : "",
      counters: isSet(object.counters) ? Counters.fromJSON(object.counters) : undefined,
    };
  },

  toJSON(message: CountersByClass): unknown {
    const obj: any = {};
    if (message.storageClass !== "") {
      obj.storageClass = message.storageClass;
    }
    if (message.counters !== undefined) {
      obj.counters = Counters.toJSON(message.counters);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CountersByClass>, I>>(base?: I): CountersByClass {
    return CountersByClass.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CountersByClass>, I>>(object: I): CountersByClass {
    const message = createBaseCountersByClass();
    message.storageClass = object.storageClass ?? "";
    message.counters = (object.counters !== undefined && object.counters !== null)
      ? Counters.fromPartial(object.counters)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CountersByClass.$type, CountersByClass);

function createBaseBucketStats(): BucketStats {
  return {
    $type: "yandex.cloud.storage.v1.BucketStats",
    name: "",
    maxSize: undefined,
    usedSize: 0,
    storageClassMaxSizes: [],
    storageClassUsedSizes: [],
    storageClassCounters: [],
    defaultStorageClass: undefined,
    anonymousAccessFlags: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const BucketStats = {
  $type: "yandex.cloud.storage.v1.BucketStats" as const,

  encode(message: BucketStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.maxSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxSize! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.usedSize !== 0) {
      writer.uint32(24).int64(message.usedSize);
    }
    for (const v of message.storageClassMaxSizes) {
      OptionalSizeByClass.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.storageClassUsedSizes) {
      SizeByClass.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.storageClassCounters) {
      CountersByClass.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.defaultStorageClass !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.defaultStorageClass! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.anonymousAccessFlags !== undefined) {
      AnonymousAccessFlags.encode(message.anonymousAccessFlags, writer.uint32(66).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BucketStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBucketStats();
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

          message.maxSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.usedSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.storageClassMaxSizes.push(OptionalSizeByClass.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.storageClassUsedSizes.push(SizeByClass.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.storageClassCounters.push(CountersByClass.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.defaultStorageClass = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.anonymousAccessFlags = AnonymousAccessFlags.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BucketStats {
    return {
      $type: BucketStats.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      maxSize: isSet(object.maxSize) ? Number(object.maxSize) : undefined,
      usedSize: isSet(object.usedSize) ? globalThis.Number(object.usedSize) : 0,
      storageClassMaxSizes: globalThis.Array.isArray(object?.storageClassMaxSizes)
        ? object.storageClassMaxSizes.map((e: any) => OptionalSizeByClass.fromJSON(e))
        : [],
      storageClassUsedSizes: globalThis.Array.isArray(object?.storageClassUsedSizes)
        ? object.storageClassUsedSizes.map((e: any) => SizeByClass.fromJSON(e))
        : [],
      storageClassCounters: globalThis.Array.isArray(object?.storageClassCounters)
        ? object.storageClassCounters.map((e: any) => CountersByClass.fromJSON(e))
        : [],
      defaultStorageClass: isSet(object.defaultStorageClass) ? String(object.defaultStorageClass) : undefined,
      anonymousAccessFlags: isSet(object.anonymousAccessFlags)
        ? AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
        : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: BucketStats): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.maxSize !== undefined) {
      obj.maxSize = message.maxSize;
    }
    if (message.usedSize !== 0) {
      obj.usedSize = Math.round(message.usedSize);
    }
    if (message.storageClassMaxSizes?.length) {
      obj.storageClassMaxSizes = message.storageClassMaxSizes.map((e) => OptionalSizeByClass.toJSON(e));
    }
    if (message.storageClassUsedSizes?.length) {
      obj.storageClassUsedSizes = message.storageClassUsedSizes.map((e) => SizeByClass.toJSON(e));
    }
    if (message.storageClassCounters?.length) {
      obj.storageClassCounters = message.storageClassCounters.map((e) => CountersByClass.toJSON(e));
    }
    if (message.defaultStorageClass !== undefined) {
      obj.defaultStorageClass = message.defaultStorageClass;
    }
    if (message.anonymousAccessFlags !== undefined) {
      obj.anonymousAccessFlags = AnonymousAccessFlags.toJSON(message.anonymousAccessFlags);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BucketStats>, I>>(base?: I): BucketStats {
    return BucketStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BucketStats>, I>>(object: I): BucketStats {
    const message = createBaseBucketStats();
    message.name = object.name ?? "";
    message.maxSize = object.maxSize ?? undefined;
    message.usedSize = object.usedSize ?? 0;
    message.storageClassMaxSizes = object.storageClassMaxSizes?.map((e) => OptionalSizeByClass.fromPartial(e)) || [];
    message.storageClassUsedSizes = object.storageClassUsedSizes?.map((e) => SizeByClass.fromPartial(e)) || [];
    message.storageClassCounters = object.storageClassCounters?.map((e) => CountersByClass.fromPartial(e)) || [];
    message.defaultStorageClass = object.defaultStorageClass ?? undefined;
    message.anonymousAccessFlags = (object.anonymousAccessFlags !== undefined && object.anonymousAccessFlags !== null)
      ? AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
      : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BucketStats.$type, BucketStats);

function createBaseHTTPSConfig(): HTTPSConfig {
  return {
    $type: "yandex.cloud.storage.v1.HTTPSConfig",
    name: "",
    sourceType: 0,
    issuer: undefined,
    subject: undefined,
    dnsNames: [],
    notBefore: undefined,
    notAfter: undefined,
    certificateId: "",
  };
}

export const HTTPSConfig = {
  $type: "yandex.cloud.storage.v1.HTTPSConfig" as const,

  encode(message: HTTPSConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sourceType !== 0) {
      writer.uint32(16).int32(message.sourceType);
    }
    if (message.issuer !== undefined) {
      StringValue.encode({ $type: "google.protobuf.StringValue", value: message.issuer! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.subject !== undefined) {
      StringValue.encode({ $type: "google.protobuf.StringValue", value: message.subject! }, writer.uint32(34).fork())
        .ldelim();
    }
    for (const v of message.dnsNames) {
      writer.uint32(42).string(v!);
    }
    if (message.notBefore !== undefined) {
      Timestamp.encode(toTimestamp(message.notBefore), writer.uint32(50).fork()).ldelim();
    }
    if (message.notAfter !== undefined) {
      Timestamp.encode(toTimestamp(message.notAfter), writer.uint32(58).fork()).ldelim();
    }
    if (message.certificateId !== "") {
      writer.uint32(66).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTTPSConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHTTPSConfig();
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
          if (tag !== 16) {
            break;
          }

          message.sourceType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.issuer = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dnsNames.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.notBefore = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.notAfter = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.certificateId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HTTPSConfig {
    return {
      $type: HTTPSConfig.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      sourceType: isSet(object.sourceType) ? hTTPSConfig_SourceTypeFromJSON(object.sourceType) : 0,
      issuer: isSet(object.issuer) ? String(object.issuer) : undefined,
      subject: isSet(object.subject) ? String(object.subject) : undefined,
      dnsNames: globalThis.Array.isArray(object?.dnsNames) ? object.dnsNames.map((e: any) => globalThis.String(e)) : [],
      notBefore: isSet(object.notBefore) ? fromJsonTimestamp(object.notBefore) : undefined,
      notAfter: isSet(object.notAfter) ? fromJsonTimestamp(object.notAfter) : undefined,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
    };
  },

  toJSON(message: HTTPSConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.sourceType !== 0) {
      obj.sourceType = hTTPSConfig_SourceTypeToJSON(message.sourceType);
    }
    if (message.issuer !== undefined) {
      obj.issuer = message.issuer;
    }
    if (message.subject !== undefined) {
      obj.subject = message.subject;
    }
    if (message.dnsNames?.length) {
      obj.dnsNames = message.dnsNames;
    }
    if (message.notBefore !== undefined) {
      obj.notBefore = message.notBefore.toISOString();
    }
    if (message.notAfter !== undefined) {
      obj.notAfter = message.notAfter.toISOString();
    }
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HTTPSConfig>, I>>(base?: I): HTTPSConfig {
    return HTTPSConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HTTPSConfig>, I>>(object: I): HTTPSConfig {
    const message = createBaseHTTPSConfig();
    message.name = object.name ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.issuer = object.issuer ?? undefined;
    message.subject = object.subject ?? undefined;
    message.dnsNames = object.dnsNames?.map((e) => e) || [];
    message.notBefore = object.notBefore ?? undefined;
    message.notAfter = object.notAfter ?? undefined;
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(HTTPSConfig.$type, HTTPSConfig);

function createBaseObjectLock(): ObjectLock {
  return { $type: "yandex.cloud.storage.v1.ObjectLock", status: 0, defaultRetention: undefined };
}

export const ObjectLock = {
  $type: "yandex.cloud.storage.v1.ObjectLock" as const,

  encode(message: ObjectLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.defaultRetention !== undefined) {
      ObjectLock_DefaultRetention.encode(message.defaultRetention, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectLock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

          message.defaultRetention = ObjectLock_DefaultRetention.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectLock {
    return {
      $type: ObjectLock.$type,
      status: isSet(object.status) ? objectLock_ObjectLockStatusFromJSON(object.status) : 0,
      defaultRetention: isSet(object.defaultRetention)
        ? ObjectLock_DefaultRetention.fromJSON(object.defaultRetention)
        : undefined,
    };
  },

  toJSON(message: ObjectLock): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = objectLock_ObjectLockStatusToJSON(message.status);
    }
    if (message.defaultRetention !== undefined) {
      obj.defaultRetention = ObjectLock_DefaultRetention.toJSON(message.defaultRetention);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectLock>, I>>(base?: I): ObjectLock {
    return ObjectLock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ObjectLock>, I>>(object: I): ObjectLock {
    const message = createBaseObjectLock();
    message.status = object.status ?? 0;
    message.defaultRetention = (object.defaultRetention !== undefined && object.defaultRetention !== null)
      ? ObjectLock_DefaultRetention.fromPartial(object.defaultRetention)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ObjectLock.$type, ObjectLock);

function createBaseObjectLock_DefaultRetention(): ObjectLock_DefaultRetention {
  return { $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention", mode: 0, days: undefined, years: undefined };
}

export const ObjectLock_DefaultRetention = {
  $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention" as const,

  encode(message: ObjectLock_DefaultRetention, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.days !== undefined) {
      writer.uint32(16).int64(message.days);
    }
    if (message.years !== undefined) {
      writer.uint32(24).int64(message.years);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectLock_DefaultRetention {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectLock_DefaultRetention();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.days = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.years = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectLock_DefaultRetention {
    return {
      $type: ObjectLock_DefaultRetention.$type,
      mode: isSet(object.mode) ? objectLock_DefaultRetention_ModeFromJSON(object.mode) : 0,
      days: isSet(object.days) ? globalThis.Number(object.days) : undefined,
      years: isSet(object.years) ? globalThis.Number(object.years) : undefined,
    };
  },

  toJSON(message: ObjectLock_DefaultRetention): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = objectLock_DefaultRetention_ModeToJSON(message.mode);
    }
    if (message.days !== undefined) {
      obj.days = Math.round(message.days);
    }
    if (message.years !== undefined) {
      obj.years = Math.round(message.years);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectLock_DefaultRetention>, I>>(base?: I): ObjectLock_DefaultRetention {
    return ObjectLock_DefaultRetention.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ObjectLock_DefaultRetention>, I>>(object: I): ObjectLock_DefaultRetention {
    const message = createBaseObjectLock_DefaultRetention();
    message.mode = object.mode ?? 0;
    message.days = object.days ?? undefined;
    message.years = object.years ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ObjectLock_DefaultRetention.$type, ObjectLock_DefaultRetention);

function createBaseEncryption(): Encryption {
  return { $type: "yandex.cloud.storage.v1.Encryption", rules: [] };
}

export const Encryption = {
  $type: "yandex.cloud.storage.v1.Encryption" as const,

  encode(message: Encryption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      Encryption_EncryptionRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Encryption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rules.push(Encryption_EncryptionRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Encryption {
    return {
      $type: Encryption.$type,
      rules: globalThis.Array.isArray(object?.rules)
        ? object.rules.map((e: any) => Encryption_EncryptionRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Encryption): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => Encryption_EncryptionRule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Encryption>, I>>(base?: I): Encryption {
    return Encryption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Encryption>, I>>(object: I): Encryption {
    const message = createBaseEncryption();
    message.rules = object.rules?.map((e) => Encryption_EncryptionRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Encryption.$type, Encryption);

function createBaseEncryption_EncryptionRule(): Encryption_EncryptionRule {
  return { $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule", kmsMasterKeyId: "", sseAlgorithm: "" };
}

export const Encryption_EncryptionRule = {
  $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule" as const,

  encode(message: Encryption_EncryptionRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kmsMasterKeyId !== "") {
      writer.uint32(10).string(message.kmsMasterKeyId);
    }
    if (message.sseAlgorithm !== "") {
      writer.uint32(18).string(message.sseAlgorithm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Encryption_EncryptionRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryption_EncryptionRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kmsMasterKeyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sseAlgorithm = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Encryption_EncryptionRule {
    return {
      $type: Encryption_EncryptionRule.$type,
      kmsMasterKeyId: isSet(object.kmsMasterKeyId) ? globalThis.String(object.kmsMasterKeyId) : "",
      sseAlgorithm: isSet(object.sseAlgorithm) ? globalThis.String(object.sseAlgorithm) : "",
    };
  },

  toJSON(message: Encryption_EncryptionRule): unknown {
    const obj: any = {};
    if (message.kmsMasterKeyId !== "") {
      obj.kmsMasterKeyId = message.kmsMasterKeyId;
    }
    if (message.sseAlgorithm !== "") {
      obj.sseAlgorithm = message.sseAlgorithm;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Encryption_EncryptionRule>, I>>(base?: I): Encryption_EncryptionRule {
    return Encryption_EncryptionRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Encryption_EncryptionRule>, I>>(object: I): Encryption_EncryptionRule {
    const message = createBaseEncryption_EncryptionRule();
    message.kmsMasterKeyId = object.kmsMasterKeyId ?? "";
    message.sseAlgorithm = object.sseAlgorithm ?? "";
    return message;
  },
};

messageTypeRegistry.set(Encryption_EncryptionRule.$type, Encryption_EncryptionRule);

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
