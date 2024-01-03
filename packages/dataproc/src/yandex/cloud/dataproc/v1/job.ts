/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.dataproc.v1";

/** A Data Proc job. For details about the concept, see [documentation](/docs/data-proc/concepts/jobs). */
export interface Job {
  $type: "yandex.cloud.dataproc.v1.Job";
  /** ID of the job. Generated at creation time. */
  id: string;
  /** ID of the Data Proc cluster that the job belongs to. */
  clusterId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** The time when the job was started. */
  startedAt?:
    | Date
    | undefined;
  /** The time when the job was finished. */
  finishedAt?:
    | Date
    | undefined;
  /** Name of the job, specified in the [JobService.Create] request. */
  name: string;
  /** The id of the user who created the job */
  createdBy: string;
  /** Job status. */
  status: Job_Status;
  /** Specification for a MapReduce job. */
  mapreduceJob?:
    | MapreduceJob
    | undefined;
  /** Specification for a Spark job. */
  sparkJob?:
    | SparkJob
    | undefined;
  /** Specification for a PySpark job. */
  pysparkJob?:
    | PysparkJob
    | undefined;
  /** Specification for a Hive job. */
  hiveJob?:
    | HiveJob
    | undefined;
  /** Attributes of YARN application. */
  applicationInfo?: ApplicationInfo | undefined;
}

export enum Job_Status {
  STATUS_UNSPECIFIED = 0,
  /** PROVISIONING - Job is logged in the database and is waiting for the agent to run it. */
  PROVISIONING = 1,
  /** PENDING - Job is acquired by the agent and is in the queue for execution. */
  PENDING = 2,
  /** RUNNING - Job is being run in the cluster. */
  RUNNING = 3,
  /** ERROR - Job failed to finish the run properly. */
  ERROR = 4,
  /** DONE - Job is finished. */
  DONE = 5,
  /** CANCELLED - Job is cancelled. */
  CANCELLED = 6,
  /** CANCELLING - Job is waiting for cancellation. */
  CANCELLING = 7,
  UNRECOGNIZED = -1,
}

export function job_StatusFromJSON(object: any): Job_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Job_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PROVISIONING":
      return Job_Status.PROVISIONING;
    case 2:
    case "PENDING":
      return Job_Status.PENDING;
    case 3:
    case "RUNNING":
      return Job_Status.RUNNING;
    case 4:
    case "ERROR":
      return Job_Status.ERROR;
    case 5:
    case "DONE":
      return Job_Status.DONE;
    case 6:
    case "CANCELLED":
      return Job_Status.CANCELLED;
    case 7:
    case "CANCELLING":
      return Job_Status.CANCELLING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Job_Status.UNRECOGNIZED;
  }
}

export function job_StatusToJSON(object: Job_Status): string {
  switch (object) {
    case Job_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Job_Status.PROVISIONING:
      return "PROVISIONING";
    case Job_Status.PENDING:
      return "PENDING";
    case Job_Status.RUNNING:
      return "RUNNING";
    case Job_Status.ERROR:
      return "ERROR";
    case Job_Status.DONE:
      return "DONE";
    case Job_Status.CANCELLED:
      return "CANCELLED";
    case Job_Status.CANCELLING:
      return "CANCELLING";
    case Job_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ApplicationAttempt {
  $type: "yandex.cloud.dataproc.v1.ApplicationAttempt";
  /** ID of YARN application attempt */
  id: string;
  /** ID of YARN Application Master container */
  amContainerId: string;
}

export interface ApplicationInfo {
  $type: "yandex.cloud.dataproc.v1.ApplicationInfo";
  /** ID of YARN application */
  id: string;
  /** YARN application attempts */
  applicationAttempts: ApplicationAttempt[];
}

export interface MapreduceJob {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob";
  /** Optional arguments to pass to the driver. */
  args: string[];
  /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
  jarFileUris: string[];
  /**
   * URIs of resource files to be copied to the working directory of Data Proc drivers
   * and distributed Hadoop tasks.
   */
  fileUris: string[];
  /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
  archiveUris: string[];
  /** Property names and values, used to configure Data Proc and MapReduce. */
  properties: { [key: string]: string };
  /** HCFS URI of the .jar file containing the driver class. */
  mainJarFileUri?:
    | string
    | undefined;
  /** The name of the driver class. */
  mainClass?: string | undefined;
}

export interface MapreduceJob_PropertiesEntry {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry";
  key: string;
  value: string;
}

export interface SparkJob {
  $type: "yandex.cloud.dataproc.v1.SparkJob";
  /** Optional arguments to pass to the driver. */
  args: string[];
  /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
  jarFileUris: string[];
  /**
   * URIs of resource files to be copied to the working directory of Data Proc drivers
   * and distributed Hadoop tasks.
   */
  fileUris: string[];
  /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
  archiveUris: string[];
  /** Property names and values, used to configure Data Proc and Spark. */
  properties: { [key: string]: string };
  /** The HCFS URI of the JAR file containing the `main` class for the job. */
  mainJarFileUri: string;
  /** The name of the driver class. */
  mainClass: string;
  /** List of maven coordinates of jars to include on the driver and executor classpaths. */
  packages: string[];
  /** List of additional remote repositories to search for the maven coordinates given with --packages. */
  repositories: string[];
  /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
  excludePackages: string[];
}

export interface SparkJob_PropertiesEntry {
  $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry";
  key: string;
  value: string;
}

export interface PysparkJob {
  $type: "yandex.cloud.dataproc.v1.PysparkJob";
  /** Optional arguments to pass to the driver. */
  args: string[];
  /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
  jarFileUris: string[];
  /**
   * URIs of resource files to be copied to the working directory of Data Proc drivers
   * and distributed Hadoop tasks.
   */
  fileUris: string[];
  /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
  archiveUris: string[];
  /** Property names and values, used to configure Data Proc and PySpark. */
  properties: { [key: string]: string };
  /** URI of the file with the driver code. Must be a .py file. */
  mainPythonFileUri: string;
  /** URIs of Python files to pass to the PySpark framework. */
  pythonFileUris: string[];
  /** List of maven coordinates of jars to include on the driver and executor classpaths. */
  packages: string[];
  /** List of additional remote repositories to search for the maven coordinates given with --packages. */
  repositories: string[];
  /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
  excludePackages: string[];
}

export interface PysparkJob_PropertiesEntry {
  $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry";
  key: string;
  value: string;
}

export interface QueryList {
  $type: "yandex.cloud.dataproc.v1.QueryList";
  /** List of Hive queries. */
  queries: string[];
}

export interface HiveJob {
  $type: "yandex.cloud.dataproc.v1.HiveJob";
  /** Property names and values, used to configure Data Proc and Hive. */
  properties: { [key: string]: string };
  /** Flag indicating whether a job should continue to run if a query fails. */
  continueOnFailure: boolean;
  /** Query variables and their values. */
  scriptVariables: { [key: string]: string };
  /** JAR file URIs to add to CLASSPATH of the Hive driver and each task. */
  jarFileUris: string[];
  /** URI of the script with all the necessary Hive queries. */
  queryFileUri?:
    | string
    | undefined;
  /** List of Hive queries to be used in the job. */
  queryList?: QueryList | undefined;
}

export interface HiveJob_PropertiesEntry {
  $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry";
  key: string;
  value: string;
}

export interface HiveJob_ScriptVariablesEntry {
  $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry";
  key: string;
  value: string;
}

function createBaseJob(): Job {
  return {
    $type: "yandex.cloud.dataproc.v1.Job",
    id: "",
    clusterId: "",
    createdAt: undefined,
    startedAt: undefined,
    finishedAt: undefined,
    name: "",
    createdBy: "",
    status: 0,
    mapreduceJob: undefined,
    sparkJob: undefined,
    pysparkJob: undefined,
    hiveJob: undefined,
    applicationInfo: undefined,
  };
}

export const Job = {
  $type: "yandex.cloud.dataproc.v1.Job" as const,

  encode(message: Job, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.finishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.createdBy !== "") {
      writer.uint32(98).string(message.createdBy);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.mapreduceJob !== undefined) {
      MapreduceJob.encode(message.mapreduceJob, writer.uint32(66).fork()).ldelim();
    }
    if (message.sparkJob !== undefined) {
      SparkJob.encode(message.sparkJob, writer.uint32(74).fork()).ldelim();
    }
    if (message.pysparkJob !== undefined) {
      PysparkJob.encode(message.pysparkJob, writer.uint32(82).fork()).ldelim();
    }
    if (message.hiveJob !== undefined) {
      HiveJob.encode(message.hiveJob, writer.uint32(90).fork()).ldelim();
    }
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(message.applicationInfo, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Job {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJob();
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

          message.clusterId = reader.string();
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

          message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.finishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.mapreduceJob = MapreduceJob.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sparkJob = SparkJob.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.pysparkJob = PysparkJob.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.hiveJob = HiveJob.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.applicationInfo = ApplicationInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Job {
    return {
      $type: Job.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      startedAt: isSet(object.startedAt) ? fromJsonTimestamp(object.startedAt) : undefined,
      finishedAt: isSet(object.finishedAt) ? fromJsonTimestamp(object.finishedAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      status: isSet(object.status) ? job_StatusFromJSON(object.status) : 0,
      mapreduceJob: isSet(object.mapreduceJob) ? MapreduceJob.fromJSON(object.mapreduceJob) : undefined,
      sparkJob: isSet(object.sparkJob) ? SparkJob.fromJSON(object.sparkJob) : undefined,
      pysparkJob: isSet(object.pysparkJob) ? PysparkJob.fromJSON(object.pysparkJob) : undefined,
      hiveJob: isSet(object.hiveJob) ? HiveJob.fromJSON(object.hiveJob) : undefined,
      applicationInfo: isSet(object.applicationInfo) ? ApplicationInfo.fromJSON(object.applicationInfo) : undefined,
    };
  },

  toJSON(message: Job): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.startedAt !== undefined) {
      obj.startedAt = message.startedAt.toISOString();
    }
    if (message.finishedAt !== undefined) {
      obj.finishedAt = message.finishedAt.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.status !== 0) {
      obj.status = job_StatusToJSON(message.status);
    }
    if (message.mapreduceJob !== undefined) {
      obj.mapreduceJob = MapreduceJob.toJSON(message.mapreduceJob);
    }
    if (message.sparkJob !== undefined) {
      obj.sparkJob = SparkJob.toJSON(message.sparkJob);
    }
    if (message.pysparkJob !== undefined) {
      obj.pysparkJob = PysparkJob.toJSON(message.pysparkJob);
    }
    if (message.hiveJob !== undefined) {
      obj.hiveJob = HiveJob.toJSON(message.hiveJob);
    }
    if (message.applicationInfo !== undefined) {
      obj.applicationInfo = ApplicationInfo.toJSON(message.applicationInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Job>, I>>(base?: I): Job {
    return Job.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Job>, I>>(object: I): Job {
    const message = createBaseJob();
    message.id = object.id ?? "";
    message.clusterId = object.clusterId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.startedAt = object.startedAt ?? undefined;
    message.finishedAt = object.finishedAt ?? undefined;
    message.name = object.name ?? "";
    message.createdBy = object.createdBy ?? "";
    message.status = object.status ?? 0;
    message.mapreduceJob = (object.mapreduceJob !== undefined && object.mapreduceJob !== null)
      ? MapreduceJob.fromPartial(object.mapreduceJob)
      : undefined;
    message.sparkJob = (object.sparkJob !== undefined && object.sparkJob !== null)
      ? SparkJob.fromPartial(object.sparkJob)
      : undefined;
    message.pysparkJob = (object.pysparkJob !== undefined && object.pysparkJob !== null)
      ? PysparkJob.fromPartial(object.pysparkJob)
      : undefined;
    message.hiveJob = (object.hiveJob !== undefined && object.hiveJob !== null)
      ? HiveJob.fromPartial(object.hiveJob)
      : undefined;
    message.applicationInfo = (object.applicationInfo !== undefined && object.applicationInfo !== null)
      ? ApplicationInfo.fromPartial(object.applicationInfo)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Job.$type, Job);

function createBaseApplicationAttempt(): ApplicationAttempt {
  return { $type: "yandex.cloud.dataproc.v1.ApplicationAttempt", id: "", amContainerId: "" };
}

export const ApplicationAttempt = {
  $type: "yandex.cloud.dataproc.v1.ApplicationAttempt" as const,

  encode(message: ApplicationAttempt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.amContainerId !== "") {
      writer.uint32(18).string(message.amContainerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationAttempt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicationAttempt();
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

          message.amContainerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplicationAttempt {
    return {
      $type: ApplicationAttempt.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      amContainerId: isSet(object.amContainerId) ? globalThis.String(object.amContainerId) : "",
    };
  },

  toJSON(message: ApplicationAttempt): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.amContainerId !== "") {
      obj.amContainerId = message.amContainerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplicationAttempt>, I>>(base?: I): ApplicationAttempt {
    return ApplicationAttempt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApplicationAttempt>, I>>(object: I): ApplicationAttempt {
    const message = createBaseApplicationAttempt();
    message.id = object.id ?? "";
    message.amContainerId = object.amContainerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ApplicationAttempt.$type, ApplicationAttempt);

function createBaseApplicationInfo(): ApplicationInfo {
  return { $type: "yandex.cloud.dataproc.v1.ApplicationInfo", id: "", applicationAttempts: [] };
}

export const ApplicationInfo = {
  $type: "yandex.cloud.dataproc.v1.ApplicationInfo" as const,

  encode(message: ApplicationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.applicationAttempts) {
      ApplicationAttempt.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicationInfo();
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

          message.applicationAttempts.push(ApplicationAttempt.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplicationInfo {
    return {
      $type: ApplicationInfo.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      applicationAttempts: globalThis.Array.isArray(object?.applicationAttempts)
        ? object.applicationAttempts.map((e: any) => ApplicationAttempt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ApplicationInfo): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.applicationAttempts?.length) {
      obj.applicationAttempts = message.applicationAttempts.map((e) => ApplicationAttempt.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplicationInfo>, I>>(base?: I): ApplicationInfo {
    return ApplicationInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApplicationInfo>, I>>(object: I): ApplicationInfo {
    const message = createBaseApplicationInfo();
    message.id = object.id ?? "";
    message.applicationAttempts = object.applicationAttempts?.map((e) => ApplicationAttempt.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ApplicationInfo.$type, ApplicationInfo);

function createBaseMapreduceJob(): MapreduceJob {
  return {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob",
    args: [],
    jarFileUris: [],
    fileUris: [],
    archiveUris: [],
    properties: {},
    mainJarFileUri: undefined,
    mainClass: undefined,
  };
}

export const MapreduceJob = {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob" as const,

  encode(message: MapreduceJob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.jarFileUris) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.fileUris) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.archiveUris) {
      writer.uint32(34).string(v!);
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      MapreduceJob_PropertiesEntry.encode({
        $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.mainJarFileUri !== undefined) {
      writer.uint32(50).string(message.mainJarFileUri);
    }
    if (message.mainClass !== undefined) {
      writer.uint32(58).string(message.mainClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapreduceJob {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapreduceJob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.args.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jarFileUris.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileUris.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.archiveUris.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = MapreduceJob_PropertiesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.properties[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.mainJarFileUri = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mainClass = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapreduceJob {
    return {
      $type: MapreduceJob.$type,
      args: globalThis.Array.isArray(object?.args) ? object.args.map((e: any) => globalThis.String(e)) : [],
      jarFileUris: globalThis.Array.isArray(object?.jarFileUris)
        ? object.jarFileUris.map((e: any) => globalThis.String(e))
        : [],
      fileUris: globalThis.Array.isArray(object?.fileUris) ? object.fileUris.map((e: any) => globalThis.String(e)) : [],
      archiveUris: globalThis.Array.isArray(object?.archiveUris)
        ? object.archiveUris.map((e: any) => globalThis.String(e))
        : [],
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      mainJarFileUri: isSet(object.mainJarFileUri) ? globalThis.String(object.mainJarFileUri) : undefined,
      mainClass: isSet(object.mainClass) ? globalThis.String(object.mainClass) : undefined,
    };
  },

  toJSON(message: MapreduceJob): unknown {
    const obj: any = {};
    if (message.args?.length) {
      obj.args = message.args;
    }
    if (message.jarFileUris?.length) {
      obj.jarFileUris = message.jarFileUris;
    }
    if (message.fileUris?.length) {
      obj.fileUris = message.fileUris;
    }
    if (message.archiveUris?.length) {
      obj.archiveUris = message.archiveUris;
    }
    if (message.properties) {
      const entries = Object.entries(message.properties);
      if (entries.length > 0) {
        obj.properties = {};
        entries.forEach(([k, v]) => {
          obj.properties[k] = v;
        });
      }
    }
    if (message.mainJarFileUri !== undefined) {
      obj.mainJarFileUri = message.mainJarFileUri;
    }
    if (message.mainClass !== undefined) {
      obj.mainClass = message.mainClass;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapreduceJob>, I>>(base?: I): MapreduceJob {
    return MapreduceJob.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapreduceJob>, I>>(object: I): MapreduceJob {
    const message = createBaseMapreduceJob();
    message.args = object.args?.map((e) => e) || [];
    message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
    message.fileUris = object.fileUris?.map((e) => e) || [];
    message.archiveUris = object.archiveUris?.map((e) => e) || [];
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.mainJarFileUri = object.mainJarFileUri ?? undefined;
    message.mainClass = object.mainClass ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MapreduceJob.$type, MapreduceJob);

function createBaseMapreduceJob_PropertiesEntry(): MapreduceJob_PropertiesEntry {
  return { $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry", key: "", value: "" };
}

export const MapreduceJob_PropertiesEntry = {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry" as const,

  encode(message: MapreduceJob_PropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapreduceJob_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapreduceJob_PropertiesEntry();
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

  fromJSON(object: any): MapreduceJob_PropertiesEntry {
    return {
      $type: MapreduceJob_PropertiesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: MapreduceJob_PropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapreduceJob_PropertiesEntry>, I>>(base?: I): MapreduceJob_PropertiesEntry {
    return MapreduceJob_PropertiesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapreduceJob_PropertiesEntry>, I>>(object: I): MapreduceJob_PropertiesEntry {
    const message = createBaseMapreduceJob_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(MapreduceJob_PropertiesEntry.$type, MapreduceJob_PropertiesEntry);

function createBaseSparkJob(): SparkJob {
  return {
    $type: "yandex.cloud.dataproc.v1.SparkJob",
    args: [],
    jarFileUris: [],
    fileUris: [],
    archiveUris: [],
    properties: {},
    mainJarFileUri: "",
    mainClass: "",
    packages: [],
    repositories: [],
    excludePackages: [],
  };
}

export const SparkJob = {
  $type: "yandex.cloud.dataproc.v1.SparkJob" as const,

  encode(message: SparkJob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.jarFileUris) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.fileUris) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.archiveUris) {
      writer.uint32(34).string(v!);
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      SparkJob_PropertiesEntry.encode({
        $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.mainJarFileUri !== "") {
      writer.uint32(50).string(message.mainJarFileUri);
    }
    if (message.mainClass !== "") {
      writer.uint32(58).string(message.mainClass);
    }
    for (const v of message.packages) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.repositories) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.excludePackages) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SparkJob {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSparkJob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.args.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jarFileUris.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileUris.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.archiveUris.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = SparkJob_PropertiesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.properties[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.mainJarFileUri = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mainClass = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.packages.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.repositories.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.excludePackages.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SparkJob {
    return {
      $type: SparkJob.$type,
      args: globalThis.Array.isArray(object?.args) ? object.args.map((e: any) => globalThis.String(e)) : [],
      jarFileUris: globalThis.Array.isArray(object?.jarFileUris)
        ? object.jarFileUris.map((e: any) => globalThis.String(e))
        : [],
      fileUris: globalThis.Array.isArray(object?.fileUris) ? object.fileUris.map((e: any) => globalThis.String(e)) : [],
      archiveUris: globalThis.Array.isArray(object?.archiveUris)
        ? object.archiveUris.map((e: any) => globalThis.String(e))
        : [],
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      mainJarFileUri: isSet(object.mainJarFileUri) ? globalThis.String(object.mainJarFileUri) : "",
      mainClass: isSet(object.mainClass) ? globalThis.String(object.mainClass) : "",
      packages: globalThis.Array.isArray(object?.packages) ? object.packages.map((e: any) => globalThis.String(e)) : [],
      repositories: globalThis.Array.isArray(object?.repositories)
        ? object.repositories.map((e: any) => globalThis.String(e))
        : [],
      excludePackages: globalThis.Array.isArray(object?.excludePackages)
        ? object.excludePackages.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SparkJob): unknown {
    const obj: any = {};
    if (message.args?.length) {
      obj.args = message.args;
    }
    if (message.jarFileUris?.length) {
      obj.jarFileUris = message.jarFileUris;
    }
    if (message.fileUris?.length) {
      obj.fileUris = message.fileUris;
    }
    if (message.archiveUris?.length) {
      obj.archiveUris = message.archiveUris;
    }
    if (message.properties) {
      const entries = Object.entries(message.properties);
      if (entries.length > 0) {
        obj.properties = {};
        entries.forEach(([k, v]) => {
          obj.properties[k] = v;
        });
      }
    }
    if (message.mainJarFileUri !== "") {
      obj.mainJarFileUri = message.mainJarFileUri;
    }
    if (message.mainClass !== "") {
      obj.mainClass = message.mainClass;
    }
    if (message.packages?.length) {
      obj.packages = message.packages;
    }
    if (message.repositories?.length) {
      obj.repositories = message.repositories;
    }
    if (message.excludePackages?.length) {
      obj.excludePackages = message.excludePackages;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SparkJob>, I>>(base?: I): SparkJob {
    return SparkJob.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SparkJob>, I>>(object: I): SparkJob {
    const message = createBaseSparkJob();
    message.args = object.args?.map((e) => e) || [];
    message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
    message.fileUris = object.fileUris?.map((e) => e) || [];
    message.archiveUris = object.archiveUris?.map((e) => e) || [];
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.mainJarFileUri = object.mainJarFileUri ?? "";
    message.mainClass = object.mainClass ?? "";
    message.packages = object.packages?.map((e) => e) || [];
    message.repositories = object.repositories?.map((e) => e) || [];
    message.excludePackages = object.excludePackages?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(SparkJob.$type, SparkJob);

function createBaseSparkJob_PropertiesEntry(): SparkJob_PropertiesEntry {
  return { $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry", key: "", value: "" };
}

export const SparkJob_PropertiesEntry = {
  $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry" as const,

  encode(message: SparkJob_PropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SparkJob_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSparkJob_PropertiesEntry();
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

  fromJSON(object: any): SparkJob_PropertiesEntry {
    return {
      $type: SparkJob_PropertiesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: SparkJob_PropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SparkJob_PropertiesEntry>, I>>(base?: I): SparkJob_PropertiesEntry {
    return SparkJob_PropertiesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SparkJob_PropertiesEntry>, I>>(object: I): SparkJob_PropertiesEntry {
    const message = createBaseSparkJob_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(SparkJob_PropertiesEntry.$type, SparkJob_PropertiesEntry);

function createBasePysparkJob(): PysparkJob {
  return {
    $type: "yandex.cloud.dataproc.v1.PysparkJob",
    args: [],
    jarFileUris: [],
    fileUris: [],
    archiveUris: [],
    properties: {},
    mainPythonFileUri: "",
    pythonFileUris: [],
    packages: [],
    repositories: [],
    excludePackages: [],
  };
}

export const PysparkJob = {
  $type: "yandex.cloud.dataproc.v1.PysparkJob" as const,

  encode(message: PysparkJob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.jarFileUris) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.fileUris) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.archiveUris) {
      writer.uint32(34).string(v!);
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      PysparkJob_PropertiesEntry.encode({
        $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.mainPythonFileUri !== "") {
      writer.uint32(50).string(message.mainPythonFileUri);
    }
    for (const v of message.pythonFileUris) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.packages) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.repositories) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.excludePackages) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PysparkJob {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePysparkJob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.args.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jarFileUris.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileUris.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.archiveUris.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = PysparkJob_PropertiesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.properties[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.mainPythonFileUri = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.pythonFileUris.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.packages.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.repositories.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.excludePackages.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PysparkJob {
    return {
      $type: PysparkJob.$type,
      args: globalThis.Array.isArray(object?.args) ? object.args.map((e: any) => globalThis.String(e)) : [],
      jarFileUris: globalThis.Array.isArray(object?.jarFileUris)
        ? object.jarFileUris.map((e: any) => globalThis.String(e))
        : [],
      fileUris: globalThis.Array.isArray(object?.fileUris) ? object.fileUris.map((e: any) => globalThis.String(e)) : [],
      archiveUris: globalThis.Array.isArray(object?.archiveUris)
        ? object.archiveUris.map((e: any) => globalThis.String(e))
        : [],
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      mainPythonFileUri: isSet(object.mainPythonFileUri) ? globalThis.String(object.mainPythonFileUri) : "",
      pythonFileUris: globalThis.Array.isArray(object?.pythonFileUris)
        ? object.pythonFileUris.map((e: any) => globalThis.String(e))
        : [],
      packages: globalThis.Array.isArray(object?.packages) ? object.packages.map((e: any) => globalThis.String(e)) : [],
      repositories: globalThis.Array.isArray(object?.repositories)
        ? object.repositories.map((e: any) => globalThis.String(e))
        : [],
      excludePackages: globalThis.Array.isArray(object?.excludePackages)
        ? object.excludePackages.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: PysparkJob): unknown {
    const obj: any = {};
    if (message.args?.length) {
      obj.args = message.args;
    }
    if (message.jarFileUris?.length) {
      obj.jarFileUris = message.jarFileUris;
    }
    if (message.fileUris?.length) {
      obj.fileUris = message.fileUris;
    }
    if (message.archiveUris?.length) {
      obj.archiveUris = message.archiveUris;
    }
    if (message.properties) {
      const entries = Object.entries(message.properties);
      if (entries.length > 0) {
        obj.properties = {};
        entries.forEach(([k, v]) => {
          obj.properties[k] = v;
        });
      }
    }
    if (message.mainPythonFileUri !== "") {
      obj.mainPythonFileUri = message.mainPythonFileUri;
    }
    if (message.pythonFileUris?.length) {
      obj.pythonFileUris = message.pythonFileUris;
    }
    if (message.packages?.length) {
      obj.packages = message.packages;
    }
    if (message.repositories?.length) {
      obj.repositories = message.repositories;
    }
    if (message.excludePackages?.length) {
      obj.excludePackages = message.excludePackages;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PysparkJob>, I>>(base?: I): PysparkJob {
    return PysparkJob.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PysparkJob>, I>>(object: I): PysparkJob {
    const message = createBasePysparkJob();
    message.args = object.args?.map((e) => e) || [];
    message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
    message.fileUris = object.fileUris?.map((e) => e) || [];
    message.archiveUris = object.archiveUris?.map((e) => e) || [];
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.mainPythonFileUri = object.mainPythonFileUri ?? "";
    message.pythonFileUris = object.pythonFileUris?.map((e) => e) || [];
    message.packages = object.packages?.map((e) => e) || [];
    message.repositories = object.repositories?.map((e) => e) || [];
    message.excludePackages = object.excludePackages?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(PysparkJob.$type, PysparkJob);

function createBasePysparkJob_PropertiesEntry(): PysparkJob_PropertiesEntry {
  return { $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry", key: "", value: "" };
}

export const PysparkJob_PropertiesEntry = {
  $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry" as const,

  encode(message: PysparkJob_PropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PysparkJob_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePysparkJob_PropertiesEntry();
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

  fromJSON(object: any): PysparkJob_PropertiesEntry {
    return {
      $type: PysparkJob_PropertiesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: PysparkJob_PropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PysparkJob_PropertiesEntry>, I>>(base?: I): PysparkJob_PropertiesEntry {
    return PysparkJob_PropertiesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PysparkJob_PropertiesEntry>, I>>(object: I): PysparkJob_PropertiesEntry {
    const message = createBasePysparkJob_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(PysparkJob_PropertiesEntry.$type, PysparkJob_PropertiesEntry);

function createBaseQueryList(): QueryList {
  return { $type: "yandex.cloud.dataproc.v1.QueryList", queries: [] };
}

export const QueryList = {
  $type: "yandex.cloud.dataproc.v1.QueryList" as const,

  encode(message: QueryList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.queries.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryList {
    return {
      $type: QueryList.$type,
      queries: globalThis.Array.isArray(object?.queries) ? object.queries.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: QueryList): unknown {
    const obj: any = {};
    if (message.queries?.length) {
      obj.queries = message.queries;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryList>, I>>(base?: I): QueryList {
    return QueryList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryList>, I>>(object: I): QueryList {
    const message = createBaseQueryList();
    message.queries = object.queries?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(QueryList.$type, QueryList);

function createBaseHiveJob(): HiveJob {
  return {
    $type: "yandex.cloud.dataproc.v1.HiveJob",
    properties: {},
    continueOnFailure: false,
    scriptVariables: {},
    jarFileUris: [],
    queryFileUri: undefined,
    queryList: undefined,
  };
}

export const HiveJob = {
  $type: "yandex.cloud.dataproc.v1.HiveJob" as const,

  encode(message: HiveJob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.properties).forEach(([key, value]) => {
      HiveJob_PropertiesEntry.encode({
        $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry",
        key: key as any,
        value,
      }, writer.uint32(10).fork()).ldelim();
    });
    if (message.continueOnFailure === true) {
      writer.uint32(16).bool(message.continueOnFailure);
    }
    Object.entries(message.scriptVariables).forEach(([key, value]) => {
      HiveJob_ScriptVariablesEntry.encode({
        $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry",
        key: key as any,
        value,
      }, writer.uint32(26).fork()).ldelim();
    });
    for (const v of message.jarFileUris) {
      writer.uint32(34).string(v!);
    }
    if (message.queryFileUri !== undefined) {
      writer.uint32(42).string(message.queryFileUri);
    }
    if (message.queryList !== undefined) {
      QueryList.encode(message.queryList, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiveJob {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHiveJob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = HiveJob_PropertiesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.properties[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.continueOnFailure = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = HiveJob_ScriptVariablesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.scriptVariables[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.jarFileUris.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.queryFileUri = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.queryList = QueryList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HiveJob {
    return {
      $type: HiveJob.$type,
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      continueOnFailure: isSet(object.continueOnFailure) ? globalThis.Boolean(object.continueOnFailure) : false,
      scriptVariables: isObject(object.scriptVariables)
        ? Object.entries(object.scriptVariables).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      jarFileUris: globalThis.Array.isArray(object?.jarFileUris)
        ? object.jarFileUris.map((e: any) => globalThis.String(e))
        : [],
      queryFileUri: isSet(object.queryFileUri) ? globalThis.String(object.queryFileUri) : undefined,
      queryList: isSet(object.queryList) ? QueryList.fromJSON(object.queryList) : undefined,
    };
  },

  toJSON(message: HiveJob): unknown {
    const obj: any = {};
    if (message.properties) {
      const entries = Object.entries(message.properties);
      if (entries.length > 0) {
        obj.properties = {};
        entries.forEach(([k, v]) => {
          obj.properties[k] = v;
        });
      }
    }
    if (message.continueOnFailure === true) {
      obj.continueOnFailure = message.continueOnFailure;
    }
    if (message.scriptVariables) {
      const entries = Object.entries(message.scriptVariables);
      if (entries.length > 0) {
        obj.scriptVariables = {};
        entries.forEach(([k, v]) => {
          obj.scriptVariables[k] = v;
        });
      }
    }
    if (message.jarFileUris?.length) {
      obj.jarFileUris = message.jarFileUris;
    }
    if (message.queryFileUri !== undefined) {
      obj.queryFileUri = message.queryFileUri;
    }
    if (message.queryList !== undefined) {
      obj.queryList = QueryList.toJSON(message.queryList);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HiveJob>, I>>(base?: I): HiveJob {
    return HiveJob.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HiveJob>, I>>(object: I): HiveJob {
    const message = createBaseHiveJob();
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.continueOnFailure = object.continueOnFailure ?? false;
    message.scriptVariables = Object.entries(object.scriptVariables ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
    message.queryFileUri = object.queryFileUri ?? undefined;
    message.queryList = (object.queryList !== undefined && object.queryList !== null)
      ? QueryList.fromPartial(object.queryList)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HiveJob.$type, HiveJob);

function createBaseHiveJob_PropertiesEntry(): HiveJob_PropertiesEntry {
  return { $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry", key: "", value: "" };
}

export const HiveJob_PropertiesEntry = {
  $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry" as const,

  encode(message: HiveJob_PropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiveJob_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHiveJob_PropertiesEntry();
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

  fromJSON(object: any): HiveJob_PropertiesEntry {
    return {
      $type: HiveJob_PropertiesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: HiveJob_PropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HiveJob_PropertiesEntry>, I>>(base?: I): HiveJob_PropertiesEntry {
    return HiveJob_PropertiesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HiveJob_PropertiesEntry>, I>>(object: I): HiveJob_PropertiesEntry {
    const message = createBaseHiveJob_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(HiveJob_PropertiesEntry.$type, HiveJob_PropertiesEntry);

function createBaseHiveJob_ScriptVariablesEntry(): HiveJob_ScriptVariablesEntry {
  return { $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry", key: "", value: "" };
}

export const HiveJob_ScriptVariablesEntry = {
  $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry" as const,

  encode(message: HiveJob_ScriptVariablesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiveJob_ScriptVariablesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHiveJob_ScriptVariablesEntry();
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

  fromJSON(object: any): HiveJob_ScriptVariablesEntry {
    return {
      $type: HiveJob_ScriptVariablesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: HiveJob_ScriptVariablesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HiveJob_ScriptVariablesEntry>, I>>(base?: I): HiveJob_ScriptVariablesEntry {
    return HiveJob_ScriptVariablesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HiveJob_ScriptVariablesEntry>, I>>(object: I): HiveJob_ScriptVariablesEntry {
    const message = createBaseHiveJob_ScriptVariablesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(HiveJob_ScriptVariablesEntry.$type, HiveJob_ScriptVariablesEntry);

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
