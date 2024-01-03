/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { MaintenancePolicy, maintenancePolicyFromJSON, maintenancePolicyToJSON } from "./maintenance";

export const protobufPackage = "yandex.cloud.compute.v1";

export enum IpVersion {
  IP_VERSION_UNSPECIFIED = 0,
  /** IPV4 - IPv4 address, for example 192.0.2.235. */
  IPV4 = 1,
  /** IPV6 - IPv6 address. Not available yet. */
  IPV6 = 2,
  UNRECOGNIZED = -1,
}

export function ipVersionFromJSON(object: any): IpVersion {
  switch (object) {
    case 0:
    case "IP_VERSION_UNSPECIFIED":
      return IpVersion.IP_VERSION_UNSPECIFIED;
    case 1:
    case "IPV4":
      return IpVersion.IPV4;
    case 2:
    case "IPV6":
      return IpVersion.IPV6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IpVersion.UNRECOGNIZED;
  }
}

export function ipVersionToJSON(object: IpVersion): string {
  switch (object) {
    case IpVersion.IP_VERSION_UNSPECIFIED:
      return "IP_VERSION_UNSPECIFIED";
    case IpVersion.IPV4:
      return "IPV4";
    case IpVersion.IPV6:
      return "IPV6";
    case IpVersion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MetadataOption {
  METADATA_OPTION_UNSPECIFIED = 0,
  /** ENABLED - Option is enabled */
  ENABLED = 1,
  /** DISABLED - Option is disabled */
  DISABLED = 2,
  UNRECOGNIZED = -1,
}

export function metadataOptionFromJSON(object: any): MetadataOption {
  switch (object) {
    case 0:
    case "METADATA_OPTION_UNSPECIFIED":
      return MetadataOption.METADATA_OPTION_UNSPECIFIED;
    case 1:
    case "ENABLED":
      return MetadataOption.ENABLED;
    case 2:
    case "DISABLED":
      return MetadataOption.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MetadataOption.UNRECOGNIZED;
  }
}

export function metadataOptionToJSON(object: MetadataOption): string {
  switch (object) {
    case MetadataOption.METADATA_OPTION_UNSPECIFIED:
      return "METADATA_OPTION_UNSPECIFIED";
    case MetadataOption.ENABLED:
      return "ENABLED";
    case MetadataOption.DISABLED:
      return "DISABLED";
    case MetadataOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** An Instance resource. For more information, see [Instances](/docs/compute/concepts/vm). */
export interface Instance {
  $type: "yandex.cloud.compute.v1.Instance";
  /** ID of the instance. */
  id: string;
  /** ID of the folder that the instance belongs to. */
  folderId: string;
  createdAt?:
    | Date
    | undefined;
  /** Name of the instance. 1-63 characters long. */
  name: string;
  /** Description of the instance. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** ID of the availability zone where the instance resides. */
  zoneId: string;
  /** ID of the hardware platform configuration for the instance. */
  platformId: string;
  /** Computing resources of the instance such as the amount of memory and number of cores. */
  resources?:
    | Resources
    | undefined;
  /** Status of the instance. */
  status: Instance_Status;
  /**
   * The metadata `key:value` pairs assigned to this instance. This includes custom metadata and predefined keys.
   *
   * For example, you may use the metadata in order to provide your public SSH key to the instance.
   * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
   */
  metadata: { [key: string]: string };
  /** Options allow user to configure access to instance's metadata */
  metadataOptions?:
    | MetadataOptions
    | undefined;
  /** Boot disk that is attached to the instance. */
  bootDisk?:
    | AttachedDisk
    | undefined;
  /** Array of secondary disks that are attached to the instance. */
  secondaryDisks: AttachedDisk[];
  /** Array of local disks that are attached to the instance. */
  localDisks: AttachedLocalDisk[];
  /** Array of filesystems that are attached to the instance. */
  filesystems: AttachedFilesystem[];
  /** Array of network interfaces that are attached to the instance. */
  networkInterfaces: NetworkInterface[];
  /** GPU settings */
  gpuSettings?:
    | GpuSettings
    | undefined;
  /**
   * A domain name of the instance. FQDN is defined by the server
   * in the format `<hostname>.<region_id>.internal` when the instance is created.
   * If the hostname were not specified when the instance was created, FQDN would be `<id>.auto.internal`.
   */
  fqdn: string;
  /** Scheduling policy configuration. */
  schedulingPolicy?:
    | SchedulingPolicy
    | undefined;
  /**
   * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
  /** Network Settings */
  networkSettings?:
    | NetworkSettings
    | undefined;
  /** Placement policy configuration. */
  placementPolicy?:
    | PlacementPolicy
    | undefined;
  /** ID of the dedicated host group that the instance belongs to. */
  hostGroupId: string;
  /** ID of the dedicated host that the instance belongs to. */
  hostId: string;
  /** Behaviour on maintenance events */
  maintenancePolicy: MaintenancePolicy;
  /** Time between notification via metadata service and maintenance */
  maintenanceGracePeriod?: Duration | undefined;
}

export enum Instance_Status {
  STATUS_UNSPECIFIED = 0,
  /** PROVISIONING - Instance is waiting for resources to be allocated. */
  PROVISIONING = 1,
  /** RUNNING - Instance is running normally. */
  RUNNING = 2,
  /** STOPPING - Instance is being stopped. */
  STOPPING = 3,
  /** STOPPED - Instance stopped. */
  STOPPED = 4,
  /** STARTING - Instance is being started. */
  STARTING = 5,
  /** RESTARTING - Instance is being restarted. */
  RESTARTING = 6,
  /** UPDATING - Instance is being updated. */
  UPDATING = 7,
  /** ERROR - Instance encountered a problem and cannot operate. */
  ERROR = 8,
  /** CRASHED - Instance crashed and will be restarted automatically. */
  CRASHED = 9,
  /** DELETING - Instance is being deleted. */
  DELETING = 10,
  UNRECOGNIZED = -1,
}

export function instance_StatusFromJSON(object: any): Instance_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Instance_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PROVISIONING":
      return Instance_Status.PROVISIONING;
    case 2:
    case "RUNNING":
      return Instance_Status.RUNNING;
    case 3:
    case "STOPPING":
      return Instance_Status.STOPPING;
    case 4:
    case "STOPPED":
      return Instance_Status.STOPPED;
    case 5:
    case "STARTING":
      return Instance_Status.STARTING;
    case 6:
    case "RESTARTING":
      return Instance_Status.RESTARTING;
    case 7:
    case "UPDATING":
      return Instance_Status.UPDATING;
    case 8:
    case "ERROR":
      return Instance_Status.ERROR;
    case 9:
    case "CRASHED":
      return Instance_Status.CRASHED;
    case 10:
    case "DELETING":
      return Instance_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Instance_Status.UNRECOGNIZED;
  }
}

export function instance_StatusToJSON(object: Instance_Status): string {
  switch (object) {
    case Instance_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Instance_Status.PROVISIONING:
      return "PROVISIONING";
    case Instance_Status.RUNNING:
      return "RUNNING";
    case Instance_Status.STOPPING:
      return "STOPPING";
    case Instance_Status.STOPPED:
      return "STOPPED";
    case Instance_Status.STARTING:
      return "STARTING";
    case Instance_Status.RESTARTING:
      return "RESTARTING";
    case Instance_Status.UPDATING:
      return "UPDATING";
    case Instance_Status.ERROR:
      return "ERROR";
    case Instance_Status.CRASHED:
      return "CRASHED";
    case Instance_Status.DELETING:
      return "DELETING";
    case Instance_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Instance_LabelsEntry {
  $type: "yandex.cloud.compute.v1.Instance.LabelsEntry";
  key: string;
  value: string;
}

export interface Instance_MetadataEntry {
  $type: "yandex.cloud.compute.v1.Instance.MetadataEntry";
  key: string;
  value: string;
}

export interface Resources {
  $type: "yandex.cloud.compute.v1.Resources";
  /** The amount of memory available to the instance, specified in bytes. */
  memory: number;
  /** The number of cores available to the instance. */
  cores: number;
  /**
   * Baseline level of CPU performance with the ability to burst performance above that baseline level.
   * This field sets baseline performance for each core.
   */
  coreFraction: number;
  /** The number of GPUs available to the instance. */
  gpus: number;
}

export interface AttachedDisk {
  $type: "yandex.cloud.compute.v1.AttachedDisk";
  /** Access mode to the Disk resource. */
  mode: AttachedDisk_Mode;
  /**
   * Serial number that is reflected into the /dev/disk/by-id/ tree
   * of a Linux operating system running within the instance.
   *
   * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
   */
  deviceName: string;
  /** Specifies whether the disk will be auto-deleted when the instance is deleted. */
  autoDelete: boolean;
  /** ID of the disk that is attached to the instance. */
  diskId: string;
}

export enum AttachedDisk_Mode {
  MODE_UNSPECIFIED = 0,
  /** READ_ONLY - Read-only access. */
  READ_ONLY = 1,
  /** READ_WRITE - Read/Write access. */
  READ_WRITE = 2,
  UNRECOGNIZED = -1,
}

export function attachedDisk_ModeFromJSON(object: any): AttachedDisk_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return AttachedDisk_Mode.MODE_UNSPECIFIED;
    case 1:
    case "READ_ONLY":
      return AttachedDisk_Mode.READ_ONLY;
    case 2:
    case "READ_WRITE":
      return AttachedDisk_Mode.READ_WRITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttachedDisk_Mode.UNRECOGNIZED;
  }
}

export function attachedDisk_ModeToJSON(object: AttachedDisk_Mode): string {
  switch (object) {
    case AttachedDisk_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case AttachedDisk_Mode.READ_ONLY:
      return "READ_ONLY";
    case AttachedDisk_Mode.READ_WRITE:
      return "READ_WRITE";
    case AttachedDisk_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AttachedLocalDisk {
  $type: "yandex.cloud.compute.v1.AttachedLocalDisk";
  /** Size of the disk, specified in bytes. */
  size: number;
  /**
   * Serial number that is reflected into the /dev/disk/by-id/ tree
   * of a Linux operating system running within the instance.
   *
   * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
   */
  deviceName: string;
}

export interface AttachedFilesystem {
  $type: "yandex.cloud.compute.v1.AttachedFilesystem";
  /** Access mode to the filesystem. */
  mode: AttachedFilesystem_Mode;
  /**
   * Name of the device representing the filesystem on the instance.
   *
   * The name should be used for referencing the filesystem from within the instance
   * when it's being mounted, resized etc.
   */
  deviceName: string;
  /** ID of the filesystem that is attached to the instance. */
  filesystemId: string;
}

export enum AttachedFilesystem_Mode {
  MODE_UNSPECIFIED = 0,
  /** READ_ONLY - Read-only access. */
  READ_ONLY = 1,
  /** READ_WRITE - Read/Write access. */
  READ_WRITE = 2,
  UNRECOGNIZED = -1,
}

export function attachedFilesystem_ModeFromJSON(object: any): AttachedFilesystem_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return AttachedFilesystem_Mode.MODE_UNSPECIFIED;
    case 1:
    case "READ_ONLY":
      return AttachedFilesystem_Mode.READ_ONLY;
    case 2:
    case "READ_WRITE":
      return AttachedFilesystem_Mode.READ_WRITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttachedFilesystem_Mode.UNRECOGNIZED;
  }
}

export function attachedFilesystem_ModeToJSON(object: AttachedFilesystem_Mode): string {
  switch (object) {
    case AttachedFilesystem_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case AttachedFilesystem_Mode.READ_ONLY:
      return "READ_ONLY";
    case AttachedFilesystem_Mode.READ_WRITE:
      return "READ_WRITE";
    case AttachedFilesystem_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NetworkInterface {
  $type: "yandex.cloud.compute.v1.NetworkInterface";
  /**
   * The index of the network interface, generated by the server, 0,1,2... etc.
   * Currently only one network interface is supported per instance.
   */
  index: string;
  /** MAC address that is assigned to the network interface. */
  macAddress: string;
  /** ID of the subnet. */
  subnetId: string;
  /** Primary IPv4 address that is assigned to the instance for this network interface. */
  primaryV4Address?:
    | PrimaryAddress
    | undefined;
  /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 not available yet. */
  primaryV6Address?:
    | PrimaryAddress
    | undefined;
  /** ID's of security groups attached to the interface */
  securityGroupIds: string[];
}

export interface PrimaryAddress {
  $type: "yandex.cloud.compute.v1.PrimaryAddress";
  /** An IPv4 internal network address that is assigned to the instance for this network interface. */
  address: string;
  /** One-to-one NAT configuration. If missing, NAT has not been set up. */
  oneToOneNat?:
    | OneToOneNat
    | undefined;
  /** Internal DNS configuration */
  dnsRecords: DnsRecord[];
}

export interface OneToOneNat {
  $type: "yandex.cloud.compute.v1.OneToOneNat";
  /** An external IP address associated with this instance. */
  address: string;
  /** IP version for the external IP address. */
  ipVersion: IpVersion;
  /** External DNS configuration */
  dnsRecords: DnsRecord[];
}

export interface DnsRecord {
  $type: "yandex.cloud.compute.v1.DnsRecord";
  /**
   * Name of the A/AAAA record as specified when creating the instance.
   * Note that if `fqdn' has no trailing '.', it is specified relative to the zone (@see dns_zone_id).
   */
  fqdn: string;
  /** DNS zone id for the record (optional, if not set, some private zone is used). */
  dnsZoneId: string;
  /** DNS record ttl (optional, if not set, a reasonable default is used.) */
  ttl: number;
  /** When true, indicates there is a corresponding auto-created PTR DNS record. */
  ptr: boolean;
}

export interface SchedulingPolicy {
  $type: "yandex.cloud.compute.v1.SchedulingPolicy";
  /** True for short-lived compute instances. For more information, see [Preemptible VMs](/docs/compute/concepts/preemptible-vm). */
  preemptible: boolean;
}

export interface NetworkSettings {
  $type: "yandex.cloud.compute.v1.NetworkSettings";
  /** Network Type */
  type: NetworkSettings_Type;
}

export enum NetworkSettings_Type {
  TYPE_UNSPECIFIED = 0,
  /** STANDARD - Standard network. */
  STANDARD = 1,
  /** SOFTWARE_ACCELERATED - Software accelerated network. */
  SOFTWARE_ACCELERATED = 2,
  /** HARDWARE_ACCELERATED - Hardware accelerated network (not available yet, reserved for future use). */
  HARDWARE_ACCELERATED = 3,
  UNRECOGNIZED = -1,
}

export function networkSettings_TypeFromJSON(object: any): NetworkSettings_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return NetworkSettings_Type.TYPE_UNSPECIFIED;
    case 1:
    case "STANDARD":
      return NetworkSettings_Type.STANDARD;
    case 2:
    case "SOFTWARE_ACCELERATED":
      return NetworkSettings_Type.SOFTWARE_ACCELERATED;
    case 3:
    case "HARDWARE_ACCELERATED":
      return NetworkSettings_Type.HARDWARE_ACCELERATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetworkSettings_Type.UNRECOGNIZED;
  }
}

export function networkSettings_TypeToJSON(object: NetworkSettings_Type): string {
  switch (object) {
    case NetworkSettings_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case NetworkSettings_Type.STANDARD:
      return "STANDARD";
    case NetworkSettings_Type.SOFTWARE_ACCELERATED:
      return "SOFTWARE_ACCELERATED";
    case NetworkSettings_Type.HARDWARE_ACCELERATED:
      return "HARDWARE_ACCELERATED";
    case NetworkSettings_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GpuSettings {
  $type: "yandex.cloud.compute.v1.GpuSettings";
  /** Attach instance to specified GPU cluster. */
  gpuClusterId: string;
}

export interface PlacementPolicy {
  $type: "yandex.cloud.compute.v1.PlacementPolicy";
  /** Placement group ID. */
  placementGroupId: string;
  /** List of affinity rules. Scheduler will attempt to allocate instances according to order of rules. */
  hostAffinityRules: PlacementPolicy_HostAffinityRule[];
  /** Placement group partition */
  placementGroupPartition: number;
}

/** Affinity definition */
export interface PlacementPolicy_HostAffinityRule {
  $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule";
  /** Affinity label or one of reserved values - 'yc.hostId', 'yc.hostGroupId' */
  key: string;
  /** Include or exclude action */
  op: PlacementPolicy_HostAffinityRule_Operator;
  /** Affinity value or host ID or host group ID */
  values: string[];
}

export enum PlacementPolicy_HostAffinityRule_Operator {
  OPERATOR_UNSPECIFIED = 0,
  IN = 1,
  NOT_IN = 2,
  UNRECOGNIZED = -1,
}

export function placementPolicy_HostAffinityRule_OperatorFromJSON(
  object: any,
): PlacementPolicy_HostAffinityRule_Operator {
  switch (object) {
    case 0:
    case "OPERATOR_UNSPECIFIED":
      return PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED;
    case 1:
    case "IN":
      return PlacementPolicy_HostAffinityRule_Operator.IN;
    case 2:
    case "NOT_IN":
      return PlacementPolicy_HostAffinityRule_Operator.NOT_IN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PlacementPolicy_HostAffinityRule_Operator.UNRECOGNIZED;
  }
}

export function placementPolicy_HostAffinityRule_OperatorToJSON(
  object: PlacementPolicy_HostAffinityRule_Operator,
): string {
  switch (object) {
    case PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED:
      return "OPERATOR_UNSPECIFIED";
    case PlacementPolicy_HostAffinityRule_Operator.IN:
      return "IN";
    case PlacementPolicy_HostAffinityRule_Operator.NOT_IN:
      return "NOT_IN";
    case PlacementPolicy_HostAffinityRule_Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MetadataOptions {
  $type: "yandex.cloud.compute.v1.MetadataOptions";
  /** Enabled access to GCE flavored metadata */
  gceHttpEndpoint: MetadataOption;
  /** Enabled access to AWS flavored metadata (IMDSv1) */
  awsV1HttpEndpoint: MetadataOption;
  /** Enabled access to IAM credentials with GCE flavored metadata */
  gceHttpToken: MetadataOption;
  /** Enabled access to IAM credentials with AWS flavored metadata (IMDSv1) */
  awsV1HttpToken: MetadataOption;
}

function createBaseInstance(): Instance {
  return {
    $type: "yandex.cloud.compute.v1.Instance",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    zoneId: "",
    platformId: "",
    resources: undefined,
    status: 0,
    metadata: {},
    metadataOptions: undefined,
    bootDisk: undefined,
    secondaryDisks: [],
    localDisks: [],
    filesystems: [],
    networkInterfaces: [],
    gpuSettings: undefined,
    fqdn: "",
    schedulingPolicy: undefined,
    serviceAccountId: "",
    networkSettings: undefined,
    placementPolicy: undefined,
    hostGroupId: "",
    hostId: "",
    maintenancePolicy: 0,
    maintenanceGracePeriod: undefined,
  };
}

export const Instance = {
  $type: "yandex.cloud.compute.v1.Instance" as const,

  encode(message: Instance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Instance_LabelsEntry.encode(
        { $type: "yandex.cloud.compute.v1.Instance.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(58).string(message.zoneId);
    }
    if (message.platformId !== "") {
      writer.uint32(66).string(message.platformId);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(74).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      Instance_MetadataEntry.encode(
        { $type: "yandex.cloud.compute.v1.Instance.MetadataEntry", key: key as any, value },
        writer.uint32(90).fork(),
      ).ldelim();
    });
    if (message.metadataOptions !== undefined) {
      MetadataOptions.encode(message.metadataOptions, writer.uint32(186).fork()).ldelim();
    }
    if (message.bootDisk !== undefined) {
      AttachedDisk.encode(message.bootDisk, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.secondaryDisks) {
      AttachedDisk.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.localDisks) {
      AttachedLocalDisk.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.filesystems) {
      AttachedFilesystem.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.networkInterfaces) {
      NetworkInterface.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.gpuSettings !== undefined) {
      GpuSettings.encode(message.gpuSettings, writer.uint32(210).fork()).ldelim();
    }
    if (message.fqdn !== "") {
      writer.uint32(130).string(message.fqdn);
    }
    if (message.schedulingPolicy !== undefined) {
      SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(138).fork()).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(146).string(message.serviceAccountId);
    }
    if (message.networkSettings !== undefined) {
      NetworkSettings.encode(message.networkSettings, writer.uint32(154).fork()).ldelim();
    }
    if (message.placementPolicy !== undefined) {
      PlacementPolicy.encode(message.placementPolicy, writer.uint32(162).fork()).ldelim();
    }
    if (message.hostGroupId !== "") {
      writer.uint32(218).string(message.hostGroupId);
    }
    if (message.hostId !== "") {
      writer.uint32(226).string(message.hostId);
    }
    if (message.maintenancePolicy !== 0) {
      writer.uint32(232).int32(message.maintenancePolicy);
    }
    if (message.maintenanceGracePeriod !== undefined) {
      Duration.encode(message.maintenanceGracePeriod, writer.uint32(242).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance();
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

          const entry6 = Instance_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.platformId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          const entry11 = Instance_MetadataEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.metadata[entry11.key] = entry11.value;
          }
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.metadataOptions = MetadataOptions.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.bootDisk = AttachedDisk.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.secondaryDisks.push(AttachedDisk.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.localDisks.push(AttachedLocalDisk.decode(reader, reader.uint32()));
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.filesystems.push(AttachedFilesystem.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.networkInterfaces.push(NetworkInterface.decode(reader, reader.uint32()));
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.gpuSettings = GpuSettings.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.fqdn = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.schedulingPolicy = SchedulingPolicy.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.networkSettings = NetworkSettings.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.placementPolicy = PlacementPolicy.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.hostGroupId = reader.string();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.hostId = reader.string();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.maintenancePolicy = reader.int32() as any;
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.maintenanceGracePeriod = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Instance {
    return {
      $type: Instance.$type,
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
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      platformId: isSet(object.platformId) ? globalThis.String(object.platformId) : "",
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      status: isSet(object.status) ? instance_StatusFromJSON(object.status) : 0,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      metadataOptions: isSet(object.metadataOptions) ? MetadataOptions.fromJSON(object.metadataOptions) : undefined,
      bootDisk: isSet(object.bootDisk) ? AttachedDisk.fromJSON(object.bootDisk) : undefined,
      secondaryDisks: globalThis.Array.isArray(object?.secondaryDisks)
        ? object.secondaryDisks.map((e: any) => AttachedDisk.fromJSON(e))
        : [],
      localDisks: globalThis.Array.isArray(object?.localDisks)
        ? object.localDisks.map((e: any) => AttachedLocalDisk.fromJSON(e))
        : [],
      filesystems: globalThis.Array.isArray(object?.filesystems)
        ? object.filesystems.map((e: any) => AttachedFilesystem.fromJSON(e))
        : [],
      networkInterfaces: globalThis.Array.isArray(object?.networkInterfaces)
        ? object.networkInterfaces.map((e: any) => NetworkInterface.fromJSON(e))
        : [],
      gpuSettings: isSet(object.gpuSettings) ? GpuSettings.fromJSON(object.gpuSettings) : undefined,
      fqdn: isSet(object.fqdn) ? globalThis.String(object.fqdn) : "",
      schedulingPolicy: isSet(object.schedulingPolicy) ? SchedulingPolicy.fromJSON(object.schedulingPolicy) : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      networkSettings: isSet(object.networkSettings) ? NetworkSettings.fromJSON(object.networkSettings) : undefined,
      placementPolicy: isSet(object.placementPolicy) ? PlacementPolicy.fromJSON(object.placementPolicy) : undefined,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
      hostId: isSet(object.hostId) ? globalThis.String(object.hostId) : "",
      maintenancePolicy: isSet(object.maintenancePolicy) ? maintenancePolicyFromJSON(object.maintenancePolicy) : 0,
      maintenanceGracePeriod: isSet(object.maintenanceGracePeriod)
        ? Duration.fromJSON(object.maintenanceGracePeriod)
        : undefined,
    };
  },

  toJSON(message: Instance): unknown {
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
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.platformId !== "") {
      obj.platformId = message.platformId;
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.status !== 0) {
      obj.status = instance_StatusToJSON(message.status);
    }
    if (message.metadata) {
      const entries = Object.entries(message.metadata);
      if (entries.length > 0) {
        obj.metadata = {};
        entries.forEach(([k, v]) => {
          obj.metadata[k] = v;
        });
      }
    }
    if (message.metadataOptions !== undefined) {
      obj.metadataOptions = MetadataOptions.toJSON(message.metadataOptions);
    }
    if (message.bootDisk !== undefined) {
      obj.bootDisk = AttachedDisk.toJSON(message.bootDisk);
    }
    if (message.secondaryDisks?.length) {
      obj.secondaryDisks = message.secondaryDisks.map((e) => AttachedDisk.toJSON(e));
    }
    if (message.localDisks?.length) {
      obj.localDisks = message.localDisks.map((e) => AttachedLocalDisk.toJSON(e));
    }
    if (message.filesystems?.length) {
      obj.filesystems = message.filesystems.map((e) => AttachedFilesystem.toJSON(e));
    }
    if (message.networkInterfaces?.length) {
      obj.networkInterfaces = message.networkInterfaces.map((e) => NetworkInterface.toJSON(e));
    }
    if (message.gpuSettings !== undefined) {
      obj.gpuSettings = GpuSettings.toJSON(message.gpuSettings);
    }
    if (message.fqdn !== "") {
      obj.fqdn = message.fqdn;
    }
    if (message.schedulingPolicy !== undefined) {
      obj.schedulingPolicy = SchedulingPolicy.toJSON(message.schedulingPolicy);
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.networkSettings !== undefined) {
      obj.networkSettings = NetworkSettings.toJSON(message.networkSettings);
    }
    if (message.placementPolicy !== undefined) {
      obj.placementPolicy = PlacementPolicy.toJSON(message.placementPolicy);
    }
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
    }
    if (message.hostId !== "") {
      obj.hostId = message.hostId;
    }
    if (message.maintenancePolicy !== 0) {
      obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy);
    }
    if (message.maintenanceGracePeriod !== undefined) {
      obj.maintenanceGracePeriod = Duration.toJSON(message.maintenanceGracePeriod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Instance>, I>>(base?: I): Instance {
    return Instance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Instance>, I>>(object: I): Instance {
    const message = createBaseInstance();
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
    message.zoneId = object.zoneId ?? "";
    message.platformId = object.platformId ?? "";
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.status = object.status ?? 0;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.metadataOptions = (object.metadataOptions !== undefined && object.metadataOptions !== null)
      ? MetadataOptions.fromPartial(object.metadataOptions)
      : undefined;
    message.bootDisk = (object.bootDisk !== undefined && object.bootDisk !== null)
      ? AttachedDisk.fromPartial(object.bootDisk)
      : undefined;
    message.secondaryDisks = object.secondaryDisks?.map((e) => AttachedDisk.fromPartial(e)) || [];
    message.localDisks = object.localDisks?.map((e) => AttachedLocalDisk.fromPartial(e)) || [];
    message.filesystems = object.filesystems?.map((e) => AttachedFilesystem.fromPartial(e)) || [];
    message.networkInterfaces = object.networkInterfaces?.map((e) => NetworkInterface.fromPartial(e)) || [];
    message.gpuSettings = (object.gpuSettings !== undefined && object.gpuSettings !== null)
      ? GpuSettings.fromPartial(object.gpuSettings)
      : undefined;
    message.fqdn = object.fqdn ?? "";
    message.schedulingPolicy = (object.schedulingPolicy !== undefined && object.schedulingPolicy !== null)
      ? SchedulingPolicy.fromPartial(object.schedulingPolicy)
      : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.networkSettings = (object.networkSettings !== undefined && object.networkSettings !== null)
      ? NetworkSettings.fromPartial(object.networkSettings)
      : undefined;
    message.placementPolicy = (object.placementPolicy !== undefined && object.placementPolicy !== null)
      ? PlacementPolicy.fromPartial(object.placementPolicy)
      : undefined;
    message.hostGroupId = object.hostGroupId ?? "";
    message.hostId = object.hostId ?? "";
    message.maintenancePolicy = object.maintenancePolicy ?? 0;
    message.maintenanceGracePeriod =
      (object.maintenanceGracePeriod !== undefined && object.maintenanceGracePeriod !== null)
        ? Duration.fromPartial(object.maintenanceGracePeriod)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Instance.$type, Instance);

function createBaseInstance_LabelsEntry(): Instance_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.Instance.LabelsEntry", key: "", value: "" };
}

export const Instance_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.Instance.LabelsEntry" as const,

  encode(message: Instance_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance_LabelsEntry();
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

  fromJSON(object: any): Instance_LabelsEntry {
    return {
      $type: Instance_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Instance_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Instance_LabelsEntry>, I>>(base?: I): Instance_LabelsEntry {
    return Instance_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Instance_LabelsEntry>, I>>(object: I): Instance_LabelsEntry {
    const message = createBaseInstance_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Instance_LabelsEntry.$type, Instance_LabelsEntry);

function createBaseInstance_MetadataEntry(): Instance_MetadataEntry {
  return { $type: "yandex.cloud.compute.v1.Instance.MetadataEntry", key: "", value: "" };
}

export const Instance_MetadataEntry = {
  $type: "yandex.cloud.compute.v1.Instance.MetadataEntry" as const,

  encode(message: Instance_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance_MetadataEntry();
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

  fromJSON(object: any): Instance_MetadataEntry {
    return {
      $type: Instance_MetadataEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Instance_MetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Instance_MetadataEntry>, I>>(base?: I): Instance_MetadataEntry {
    return Instance_MetadataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Instance_MetadataEntry>, I>>(object: I): Instance_MetadataEntry {
    const message = createBaseInstance_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Instance_MetadataEntry.$type, Instance_MetadataEntry);

function createBaseResources(): Resources {
  return { $type: "yandex.cloud.compute.v1.Resources", memory: 0, cores: 0, coreFraction: 0, gpus: 0 };
}

export const Resources = {
  $type: "yandex.cloud.compute.v1.Resources" as const,

  encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memory !== 0) {
      writer.uint32(8).int64(message.memory);
    }
    if (message.cores !== 0) {
      writer.uint32(16).int64(message.cores);
    }
    if (message.coreFraction !== 0) {
      writer.uint32(24).int64(message.coreFraction);
    }
    if (message.gpus !== 0) {
      writer.uint32(32).int64(message.gpus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.memory = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.cores = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.coreFraction = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gpus = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resources {
    return {
      $type: Resources.$type,
      memory: isSet(object.memory) ? globalThis.Number(object.memory) : 0,
      cores: isSet(object.cores) ? globalThis.Number(object.cores) : 0,
      coreFraction: isSet(object.coreFraction) ? globalThis.Number(object.coreFraction) : 0,
      gpus: isSet(object.gpus) ? globalThis.Number(object.gpus) : 0,
    };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.memory !== 0) {
      obj.memory = Math.round(message.memory);
    }
    if (message.cores !== 0) {
      obj.cores = Math.round(message.cores);
    }
    if (message.coreFraction !== 0) {
      obj.coreFraction = Math.round(message.coreFraction);
    }
    if (message.gpus !== 0) {
      obj.gpus = Math.round(message.gpus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resources>, I>>(base?: I): Resources {
    return Resources.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
    const message = createBaseResources();
    message.memory = object.memory ?? 0;
    message.cores = object.cores ?? 0;
    message.coreFraction = object.coreFraction ?? 0;
    message.gpus = object.gpus ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

function createBaseAttachedDisk(): AttachedDisk {
  return { $type: "yandex.cloud.compute.v1.AttachedDisk", mode: 0, deviceName: "", autoDelete: false, diskId: "" };
}

export const AttachedDisk = {
  $type: "yandex.cloud.compute.v1.AttachedDisk" as const,

  encode(message: AttachedDisk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.autoDelete === true) {
      writer.uint32(24).bool(message.autoDelete);
    }
    if (message.diskId !== "") {
      writer.uint32(34).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedDisk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachedDisk();
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
          if (tag !== 18) {
            break;
          }

          message.deviceName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.autoDelete = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.diskId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachedDisk {
    return {
      $type: AttachedDisk.$type,
      mode: isSet(object.mode) ? attachedDisk_ModeFromJSON(object.mode) : 0,
      deviceName: isSet(object.deviceName) ? globalThis.String(object.deviceName) : "",
      autoDelete: isSet(object.autoDelete) ? globalThis.Boolean(object.autoDelete) : false,
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
    };
  },

  toJSON(message: AttachedDisk): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = attachedDisk_ModeToJSON(message.mode);
    }
    if (message.deviceName !== "") {
      obj.deviceName = message.deviceName;
    }
    if (message.autoDelete === true) {
      obj.autoDelete = message.autoDelete;
    }
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachedDisk>, I>>(base?: I): AttachedDisk {
    return AttachedDisk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttachedDisk>, I>>(object: I): AttachedDisk {
    const message = createBaseAttachedDisk();
    message.mode = object.mode ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.autoDelete = object.autoDelete ?? false;
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedDisk.$type, AttachedDisk);

function createBaseAttachedLocalDisk(): AttachedLocalDisk {
  return { $type: "yandex.cloud.compute.v1.AttachedLocalDisk", size: 0, deviceName: "" };
}

export const AttachedLocalDisk = {
  $type: "yandex.cloud.compute.v1.AttachedLocalDisk" as const,

  encode(message: AttachedLocalDisk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedLocalDisk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachedLocalDisk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deviceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachedLocalDisk {
    return {
      $type: AttachedLocalDisk.$type,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      deviceName: isSet(object.deviceName) ? globalThis.String(object.deviceName) : "",
    };
  },

  toJSON(message: AttachedLocalDisk): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.deviceName !== "") {
      obj.deviceName = message.deviceName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachedLocalDisk>, I>>(base?: I): AttachedLocalDisk {
    return AttachedLocalDisk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttachedLocalDisk>, I>>(object: I): AttachedLocalDisk {
    const message = createBaseAttachedLocalDisk();
    message.size = object.size ?? 0;
    message.deviceName = object.deviceName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedLocalDisk.$type, AttachedLocalDisk);

function createBaseAttachedFilesystem(): AttachedFilesystem {
  return { $type: "yandex.cloud.compute.v1.AttachedFilesystem", mode: 0, deviceName: "", filesystemId: "" };
}

export const AttachedFilesystem = {
  $type: "yandex.cloud.compute.v1.AttachedFilesystem" as const,

  encode(message: AttachedFilesystem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.filesystemId !== "") {
      writer.uint32(26).string(message.filesystemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedFilesystem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachedFilesystem();
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
          if (tag !== 18) {
            break;
          }

          message.deviceName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filesystemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachedFilesystem {
    return {
      $type: AttachedFilesystem.$type,
      mode: isSet(object.mode) ? attachedFilesystem_ModeFromJSON(object.mode) : 0,
      deviceName: isSet(object.deviceName) ? globalThis.String(object.deviceName) : "",
      filesystemId: isSet(object.filesystemId) ? globalThis.String(object.filesystemId) : "",
    };
  },

  toJSON(message: AttachedFilesystem): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = attachedFilesystem_ModeToJSON(message.mode);
    }
    if (message.deviceName !== "") {
      obj.deviceName = message.deviceName;
    }
    if (message.filesystemId !== "") {
      obj.filesystemId = message.filesystemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachedFilesystem>, I>>(base?: I): AttachedFilesystem {
    return AttachedFilesystem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttachedFilesystem>, I>>(object: I): AttachedFilesystem {
    const message = createBaseAttachedFilesystem();
    message.mode = object.mode ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedFilesystem.$type, AttachedFilesystem);

function createBaseNetworkInterface(): NetworkInterface {
  return {
    $type: "yandex.cloud.compute.v1.NetworkInterface",
    index: "",
    macAddress: "",
    subnetId: "",
    primaryV4Address: undefined,
    primaryV6Address: undefined,
    securityGroupIds: [],
  };
}

export const NetworkInterface = {
  $type: "yandex.cloud.compute.v1.NetworkInterface" as const,

  encode(message: NetworkInterface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.macAddress !== "") {
      writer.uint32(18).string(message.macAddress);
    }
    if (message.subnetId !== "") {
      writer.uint32(26).string(message.subnetId);
    }
    if (message.primaryV4Address !== undefined) {
      PrimaryAddress.encode(message.primaryV4Address, writer.uint32(34).fork()).ldelim();
    }
    if (message.primaryV6Address !== undefined) {
      PrimaryAddress.encode(message.primaryV6Address, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterface {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkInterface();
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

          message.macAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.primaryV4Address = PrimaryAddress.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.primaryV6Address = PrimaryAddress.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkInterface {
    return {
      $type: NetworkInterface.$type,
      index: isSet(object.index) ? globalThis.String(object.index) : "",
      macAddress: isSet(object.macAddress) ? globalThis.String(object.macAddress) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      primaryV4Address: isSet(object.primaryV4Address) ? PrimaryAddress.fromJSON(object.primaryV4Address) : undefined,
      primaryV6Address: isSet(object.primaryV6Address) ? PrimaryAddress.fromJSON(object.primaryV6Address) : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: NetworkInterface): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.macAddress !== "") {
      obj.macAddress = message.macAddress;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.primaryV4Address !== undefined) {
      obj.primaryV4Address = PrimaryAddress.toJSON(message.primaryV4Address);
    }
    if (message.primaryV6Address !== undefined) {
      obj.primaryV6Address = PrimaryAddress.toJSON(message.primaryV6Address);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkInterface>, I>>(base?: I): NetworkInterface {
    return NetworkInterface.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkInterface>, I>>(object: I): NetworkInterface {
    const message = createBaseNetworkInterface();
    message.index = object.index ?? "";
    message.macAddress = object.macAddress ?? "";
    message.subnetId = object.subnetId ?? "";
    message.primaryV4Address = (object.primaryV4Address !== undefined && object.primaryV4Address !== null)
      ? PrimaryAddress.fromPartial(object.primaryV4Address)
      : undefined;
    message.primaryV6Address = (object.primaryV6Address !== undefined && object.primaryV6Address !== null)
      ? PrimaryAddress.fromPartial(object.primaryV6Address)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(NetworkInterface.$type, NetworkInterface);

function createBasePrimaryAddress(): PrimaryAddress {
  return { $type: "yandex.cloud.compute.v1.PrimaryAddress", address: "", oneToOneNat: undefined, dnsRecords: [] };
}

export const PrimaryAddress = {
  $type: "yandex.cloud.compute.v1.PrimaryAddress" as const,

  encode(message: PrimaryAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.oneToOneNat !== undefined) {
      OneToOneNat.encode(message.oneToOneNat, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.dnsRecords) {
      DnsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.oneToOneNat = OneToOneNat.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dnsRecords.push(DnsRecord.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrimaryAddress {
    return {
      $type: PrimaryAddress.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      oneToOneNat: isSet(object.oneToOneNat) ? OneToOneNat.fromJSON(object.oneToOneNat) : undefined,
      dnsRecords: globalThis.Array.isArray(object?.dnsRecords)
        ? object.dnsRecords.map((e: any) => DnsRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PrimaryAddress): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.oneToOneNat !== undefined) {
      obj.oneToOneNat = OneToOneNat.toJSON(message.oneToOneNat);
    }
    if (message.dnsRecords?.length) {
      obj.dnsRecords = message.dnsRecords.map((e) => DnsRecord.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrimaryAddress>, I>>(base?: I): PrimaryAddress {
    return PrimaryAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrimaryAddress>, I>>(object: I): PrimaryAddress {
    const message = createBasePrimaryAddress();
    message.address = object.address ?? "";
    message.oneToOneNat = (object.oneToOneNat !== undefined && object.oneToOneNat !== null)
      ? OneToOneNat.fromPartial(object.oneToOneNat)
      : undefined;
    message.dnsRecords = object.dnsRecords?.map((e) => DnsRecord.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PrimaryAddress.$type, PrimaryAddress);

function createBaseOneToOneNat(): OneToOneNat {
  return { $type: "yandex.cloud.compute.v1.OneToOneNat", address: "", ipVersion: 0, dnsRecords: [] };
}

export const OneToOneNat = {
  $type: "yandex.cloud.compute.v1.OneToOneNat" as const,

  encode(message: OneToOneNat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(16).int32(message.ipVersion);
    }
    for (const v of message.dnsRecords) {
      DnsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneToOneNat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneToOneNat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ipVersion = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dnsRecords.push(DnsRecord.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OneToOneNat {
    return {
      $type: OneToOneNat.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      ipVersion: isSet(object.ipVersion) ? ipVersionFromJSON(object.ipVersion) : 0,
      dnsRecords: globalThis.Array.isArray(object?.dnsRecords)
        ? object.dnsRecords.map((e: any) => DnsRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OneToOneNat): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.ipVersion !== 0) {
      obj.ipVersion = ipVersionToJSON(message.ipVersion);
    }
    if (message.dnsRecords?.length) {
      obj.dnsRecords = message.dnsRecords.map((e) => DnsRecord.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OneToOneNat>, I>>(base?: I): OneToOneNat {
    return OneToOneNat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneToOneNat>, I>>(object: I): OneToOneNat {
    const message = createBaseOneToOneNat();
    message.address = object.address ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    message.dnsRecords = object.dnsRecords?.map((e) => DnsRecord.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(OneToOneNat.$type, OneToOneNat);

function createBaseDnsRecord(): DnsRecord {
  return { $type: "yandex.cloud.compute.v1.DnsRecord", fqdn: "", dnsZoneId: "", ttl: 0, ptr: false };
}

export const DnsRecord = {
  $type: "yandex.cloud.compute.v1.DnsRecord" as const,

  encode(message: DnsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fqdn !== "") {
      writer.uint32(10).string(message.fqdn);
    }
    if (message.dnsZoneId !== "") {
      writer.uint32(18).string(message.dnsZoneId);
    }
    if (message.ttl !== 0) {
      writer.uint32(24).int64(message.ttl);
    }
    if (message.ptr === true) {
      writer.uint32(32).bool(message.ptr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DnsRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDnsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fqdn = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dnsZoneId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ttl = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.ptr = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DnsRecord {
    return {
      $type: DnsRecord.$type,
      fqdn: isSet(object.fqdn) ? globalThis.String(object.fqdn) : "",
      dnsZoneId: isSet(object.dnsZoneId) ? globalThis.String(object.dnsZoneId) : "",
      ttl: isSet(object.ttl) ? globalThis.Number(object.ttl) : 0,
      ptr: isSet(object.ptr) ? globalThis.Boolean(object.ptr) : false,
    };
  },

  toJSON(message: DnsRecord): unknown {
    const obj: any = {};
    if (message.fqdn !== "") {
      obj.fqdn = message.fqdn;
    }
    if (message.dnsZoneId !== "") {
      obj.dnsZoneId = message.dnsZoneId;
    }
    if (message.ttl !== 0) {
      obj.ttl = Math.round(message.ttl);
    }
    if (message.ptr === true) {
      obj.ptr = message.ptr;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DnsRecord>, I>>(base?: I): DnsRecord {
    return DnsRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DnsRecord>, I>>(object: I): DnsRecord {
    const message = createBaseDnsRecord();
    message.fqdn = object.fqdn ?? "";
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.ttl = object.ttl ?? 0;
    message.ptr = object.ptr ?? false;
    return message;
  },
};

messageTypeRegistry.set(DnsRecord.$type, DnsRecord);

function createBaseSchedulingPolicy(): SchedulingPolicy {
  return { $type: "yandex.cloud.compute.v1.SchedulingPolicy", preemptible: false };
}

export const SchedulingPolicy = {
  $type: "yandex.cloud.compute.v1.SchedulingPolicy" as const,

  encode(message: SchedulingPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preemptible === true) {
      writer.uint32(8).bool(message.preemptible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchedulingPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedulingPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.preemptible = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchedulingPolicy {
    return {
      $type: SchedulingPolicy.$type,
      preemptible: isSet(object.preemptible) ? globalThis.Boolean(object.preemptible) : false,
    };
  },

  toJSON(message: SchedulingPolicy): unknown {
    const obj: any = {};
    if (message.preemptible === true) {
      obj.preemptible = message.preemptible;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SchedulingPolicy>, I>>(base?: I): SchedulingPolicy {
    return SchedulingPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SchedulingPolicy>, I>>(object: I): SchedulingPolicy {
    const message = createBaseSchedulingPolicy();
    message.preemptible = object.preemptible ?? false;
    return message;
  },
};

messageTypeRegistry.set(SchedulingPolicy.$type, SchedulingPolicy);

function createBaseNetworkSettings(): NetworkSettings {
  return { $type: "yandex.cloud.compute.v1.NetworkSettings", type: 0 };
}

export const NetworkSettings = {
  $type: "yandex.cloud.compute.v1.NetworkSettings" as const,

  encode(message: NetworkSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): NetworkSettings {
    return { $type: NetworkSettings.$type, type: isSet(object.type) ? networkSettings_TypeFromJSON(object.type) : 0 };
  },

  toJSON(message: NetworkSettings): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = networkSettings_TypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkSettings>, I>>(base?: I): NetworkSettings {
    return NetworkSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkSettings>, I>>(object: I): NetworkSettings {
    const message = createBaseNetworkSettings();
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(NetworkSettings.$type, NetworkSettings);

function createBaseGpuSettings(): GpuSettings {
  return { $type: "yandex.cloud.compute.v1.GpuSettings", gpuClusterId: "" };
}

export const GpuSettings = {
  $type: "yandex.cloud.compute.v1.GpuSettings" as const,

  encode(message: GpuSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpuSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpuSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GpuSettings {
    return {
      $type: GpuSettings.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
    };
  },

  toJSON(message: GpuSettings): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GpuSettings>, I>>(base?: I): GpuSettings {
    return GpuSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GpuSettings>, I>>(object: I): GpuSettings {
    const message = createBaseGpuSettings();
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GpuSettings.$type, GpuSettings);

function createBasePlacementPolicy(): PlacementPolicy {
  return {
    $type: "yandex.cloud.compute.v1.PlacementPolicy",
    placementGroupId: "",
    hostAffinityRules: [],
    placementGroupPartition: 0,
  };
}

export const PlacementPolicy = {
  $type: "yandex.cloud.compute.v1.PlacementPolicy" as const,

  encode(message: PlacementPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    for (const v of message.hostAffinityRules) {
      PlacementPolicy_HostAffinityRule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.placementGroupPartition !== 0) {
      writer.uint32(24).int64(message.placementGroupPartition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlacementPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacementPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hostAffinityRules.push(PlacementPolicy_HostAffinityRule.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.placementGroupPartition = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlacementPolicy {
    return {
      $type: PlacementPolicy.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
      hostAffinityRules: globalThis.Array.isArray(object?.hostAffinityRules)
        ? object.hostAffinityRules.map((e: any) => PlacementPolicy_HostAffinityRule.fromJSON(e))
        : [],
      placementGroupPartition: isSet(object.placementGroupPartition)
        ? globalThis.Number(object.placementGroupPartition)
        : 0,
    };
  },

  toJSON(message: PlacementPolicy): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    if (message.hostAffinityRules?.length) {
      obj.hostAffinityRules = message.hostAffinityRules.map((e) => PlacementPolicy_HostAffinityRule.toJSON(e));
    }
    if (message.placementGroupPartition !== 0) {
      obj.placementGroupPartition = Math.round(message.placementGroupPartition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlacementPolicy>, I>>(base?: I): PlacementPolicy {
    return PlacementPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlacementPolicy>, I>>(object: I): PlacementPolicy {
    const message = createBasePlacementPolicy();
    message.placementGroupId = object.placementGroupId ?? "";
    message.hostAffinityRules = object.hostAffinityRules?.map((e) => PlacementPolicy_HostAffinityRule.fromPartial(e)) ||
      [];
    message.placementGroupPartition = object.placementGroupPartition ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PlacementPolicy.$type, PlacementPolicy);

function createBasePlacementPolicy_HostAffinityRule(): PlacementPolicy_HostAffinityRule {
  return { $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule", key: "", op: 0, values: [] };
}

export const PlacementPolicy_HostAffinityRule = {
  $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule" as const,

  encode(message: PlacementPolicy_HostAffinityRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.op !== 0) {
      writer.uint32(16).int32(message.op);
    }
    for (const v of message.values) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlacementPolicy_HostAffinityRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacementPolicy_HostAffinityRule();
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

          message.op = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): PlacementPolicy_HostAffinityRule {
    return {
      $type: PlacementPolicy_HostAffinityRule.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      op: isSet(object.op) ? placementPolicy_HostAffinityRule_OperatorFromJSON(object.op) : 0,
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: PlacementPolicy_HostAffinityRule): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.op !== 0) {
      obj.op = placementPolicy_HostAffinityRule_OperatorToJSON(message.op);
    }
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlacementPolicy_HostAffinityRule>, I>>(
    base?: I,
  ): PlacementPolicy_HostAffinityRule {
    return PlacementPolicy_HostAffinityRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlacementPolicy_HostAffinityRule>, I>>(
    object: I,
  ): PlacementPolicy_HostAffinityRule {
    const message = createBasePlacementPolicy_HostAffinityRule();
    message.key = object.key ?? "";
    message.op = object.op ?? 0;
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(PlacementPolicy_HostAffinityRule.$type, PlacementPolicy_HostAffinityRule);

function createBaseMetadataOptions(): MetadataOptions {
  return {
    $type: "yandex.cloud.compute.v1.MetadataOptions",
    gceHttpEndpoint: 0,
    awsV1HttpEndpoint: 0,
    gceHttpToken: 0,
    awsV1HttpToken: 0,
  };
}

export const MetadataOptions = {
  $type: "yandex.cloud.compute.v1.MetadataOptions" as const,

  encode(message: MetadataOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gceHttpEndpoint !== 0) {
      writer.uint32(8).int32(message.gceHttpEndpoint);
    }
    if (message.awsV1HttpEndpoint !== 0) {
      writer.uint32(16).int32(message.awsV1HttpEndpoint);
    }
    if (message.gceHttpToken !== 0) {
      writer.uint32(24).int32(message.gceHttpToken);
    }
    if (message.awsV1HttpToken !== 0) {
      writer.uint32(32).int32(message.awsV1HttpToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetadataOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gceHttpEndpoint = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.awsV1HttpEndpoint = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gceHttpToken = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.awsV1HttpToken = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MetadataOptions {
    return {
      $type: MetadataOptions.$type,
      gceHttpEndpoint: isSet(object.gceHttpEndpoint) ? metadataOptionFromJSON(object.gceHttpEndpoint) : 0,
      awsV1HttpEndpoint: isSet(object.awsV1HttpEndpoint) ? metadataOptionFromJSON(object.awsV1HttpEndpoint) : 0,
      gceHttpToken: isSet(object.gceHttpToken) ? metadataOptionFromJSON(object.gceHttpToken) : 0,
      awsV1HttpToken: isSet(object.awsV1HttpToken) ? metadataOptionFromJSON(object.awsV1HttpToken) : 0,
    };
  },

  toJSON(message: MetadataOptions): unknown {
    const obj: any = {};
    if (message.gceHttpEndpoint !== 0) {
      obj.gceHttpEndpoint = metadataOptionToJSON(message.gceHttpEndpoint);
    }
    if (message.awsV1HttpEndpoint !== 0) {
      obj.awsV1HttpEndpoint = metadataOptionToJSON(message.awsV1HttpEndpoint);
    }
    if (message.gceHttpToken !== 0) {
      obj.gceHttpToken = metadataOptionToJSON(message.gceHttpToken);
    }
    if (message.awsV1HttpToken !== 0) {
      obj.awsV1HttpToken = metadataOptionToJSON(message.awsV1HttpToken);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MetadataOptions>, I>>(base?: I): MetadataOptions {
    return MetadataOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MetadataOptions>, I>>(object: I): MetadataOptions {
    const message = createBaseMetadataOptions();
    message.gceHttpEndpoint = object.gceHttpEndpoint ?? 0;
    message.awsV1HttpEndpoint = object.awsV1HttpEndpoint ?? 0;
    message.gceHttpToken = object.gceHttpToken ?? 0;
    message.awsV1HttpToken = object.awsV1HttpToken ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MetadataOptions.$type, MetadataOptions);

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
