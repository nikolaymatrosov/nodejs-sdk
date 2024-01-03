/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datasphere.v2.jobs";

export enum JobStatus {
  JOB_STATUS_UNSPECIFIED = 0,
  CREATING = 1,
  EXECUTING = 2,
  UPLOADING_OUTPUT = 3,
  SUCCESS = 4,
  ERROR = 5,
  CANCELLED = 6,
  UNRECOGNIZED = -1,
}

export function jobStatusFromJSON(object: any): JobStatus {
  switch (object) {
    case 0:
    case "JOB_STATUS_UNSPECIFIED":
      return JobStatus.JOB_STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return JobStatus.CREATING;
    case 2:
    case "EXECUTING":
      return JobStatus.EXECUTING;
    case 3:
    case "UPLOADING_OUTPUT":
      return JobStatus.UPLOADING_OUTPUT;
    case 4:
    case "SUCCESS":
      return JobStatus.SUCCESS;
    case 5:
    case "ERROR":
      return JobStatus.ERROR;
    case 6:
    case "CANCELLED":
      return JobStatus.CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobStatus.UNRECOGNIZED;
  }
}

export function jobStatusToJSON(object: JobStatus): string {
  switch (object) {
    case JobStatus.JOB_STATUS_UNSPECIFIED:
      return "JOB_STATUS_UNSPECIFIED";
    case JobStatus.CREATING:
      return "CREATING";
    case JobStatus.EXECUTING:
      return "EXECUTING";
    case JobStatus.UPLOADING_OUTPUT:
      return "UPLOADING_OUTPUT";
    case JobStatus.SUCCESS:
      return "SUCCESS";
    case JobStatus.ERROR:
      return "ERROR";
    case JobStatus.CANCELLED:
      return "CANCELLED";
    case JobStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Job parameters. */
export interface JobParameters {
  $type: "yandex.cloud.datasphere.v2.jobs.JobParameters";
  /** List of input files. */
  inputFiles: File[];
  /** List of output files descriptions. */
  outputFiles: FileDesc[];
  /** List of DataSphere S3 mount ids. */
  s3MountIds: string[];
  /** List of DataSphere dataset ids. */
  datasetIds: string[];
  /** Job run command. */
  cmd: string;
  /** Job environment description. */
  env?:
    | Environment
    | undefined;
  /** Should project disk be attached to VM. */
  attachProjectDisk: boolean;
  /** VM specification. */
  cloudInstanceType?: CloudInstanceType | undefined;
}

export interface CloudInstanceType {
  $type: "yandex.cloud.datasphere.v2.jobs.CloudInstanceType";
  /** Name of DataSphere VM configuration. */
  name: string;
}

export interface File {
  $type: "yandex.cloud.datasphere.v2.jobs.File";
  desc?:
    | FileDesc
    | undefined;
  /** SHA256 of the file. */
  sha256: string;
  /** File size in bytes. */
  sizeBytes: number;
}

export interface StorageFile {
  $type: "yandex.cloud.datasphere.v2.jobs.StorageFile";
  file?:
    | File
    | undefined;
  /** File URL. */
  url: string;
}

export interface FileDesc {
  $type: "yandex.cloud.datasphere.v2.jobs.FileDesc";
  /** Path of the file on filesystem. */
  path: string;
  /** Variable to use in cmd substitution. */
  var: string;
}

export interface Environment {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment";
  /** Environment variables. */
  vars: { [key: string]: string };
  /** DS docker image id. */
  dockerImageResourceId?: string | undefined;
  dockerImageSpec?: DockerImageSpec | undefined;
  pythonEnv?: PythonEnv | undefined;
}

export interface Environment_VarsEntry {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment.VarsEntry";
  key: string;
  value: string;
}

export interface DockerImageSpec {
  $type: "yandex.cloud.datasphere.v2.jobs.DockerImageSpec";
  /** Docker image URL. */
  imageUrl: string;
  /** Username for container registry. */
  username: string;
  /** Plaintext password. */
  passwordPlainText?:
    | string
    | undefined;
  /** ID of DataSphere secret containing password. */
  passwordDsSecretName?: string | undefined;
}

export interface PythonEnv {
  $type: "yandex.cloud.datasphere.v2.jobs.PythonEnv";
  /** Conda YAML. */
  condaYaml: string;
  /** List of local modules descriptions. */
  localModules: File[];
}

/** Instance of the job. */
export interface Job {
  $type: "yandex.cloud.datasphere.v2.jobs.Job";
  /** ID of the job. */
  id: string;
  /** Name of the job. */
  name: string;
  /** Description of the job. */
  desc: string;
  /** Creation timestamp of the job. */
  createdAt?:
    | Date
    | undefined;
  /** Finish timestamp of the job. */
  finishedAt?:
    | Date
    | undefined;
  /** Status of the job. */
  status: JobStatus;
  /** Config of the job, copied from configuration file. */
  config: string;
  /** ID of the user who created the job. */
  createdById: string;
  /** ID of the project. */
  projectId: string;
  jobParameters?:
    | JobParameters
    | undefined;
  /** Job data expiration timestamp. */
  dataExpiresAt?:
    | Date
    | undefined;
  /** Marks if the job data has been cleared. */
  dataCleared: boolean;
  /** Output files of the job. */
  outputFiles: File[];
}

export interface JobResult {
  $type: "yandex.cloud.datasphere.v2.jobs.JobResult";
  /** Execution return code. */
  returnCode: number;
}

function createBaseJobParameters(): JobParameters {
  return {
    $type: "yandex.cloud.datasphere.v2.jobs.JobParameters",
    inputFiles: [],
    outputFiles: [],
    s3MountIds: [],
    datasetIds: [],
    cmd: "",
    env: undefined,
    attachProjectDisk: false,
    cloudInstanceType: undefined,
  };
}

export const JobParameters = {
  $type: "yandex.cloud.datasphere.v2.jobs.JobParameters" as const,

  encode(message: JobParameters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputFiles) {
      File.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputFiles) {
      FileDesc.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.s3MountIds) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.datasetIds) {
      writer.uint32(34).string(v!);
    }
    if (message.cmd !== "") {
      writer.uint32(42).string(message.cmd);
    }
    if (message.env !== undefined) {
      Environment.encode(message.env, writer.uint32(50).fork()).ldelim();
    }
    if (message.attachProjectDisk === true) {
      writer.uint32(56).bool(message.attachProjectDisk);
    }
    if (message.cloudInstanceType !== undefined) {
      CloudInstanceType.encode(message.cloudInstanceType, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobParameters {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputFiles.push(File.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outputFiles.push(FileDesc.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.s3MountIds.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.datasetIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cmd = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.env = Environment.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.attachProjectDisk = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.cloudInstanceType = CloudInstanceType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JobParameters {
    return {
      $type: JobParameters.$type,
      inputFiles: globalThis.Array.isArray(object?.inputFiles)
        ? object.inputFiles.map((e: any) => File.fromJSON(e))
        : [],
      outputFiles: globalThis.Array.isArray(object?.outputFiles)
        ? object.outputFiles.map((e: any) => FileDesc.fromJSON(e))
        : [],
      s3MountIds: globalThis.Array.isArray(object?.s3MountIds)
        ? object.s3MountIds.map((e: any) => globalThis.String(e))
        : [],
      datasetIds: globalThis.Array.isArray(object?.datasetIds)
        ? object.datasetIds.map((e: any) => globalThis.String(e))
        : [],
      cmd: isSet(object.cmd) ? globalThis.String(object.cmd) : "",
      env: isSet(object.env) ? Environment.fromJSON(object.env) : undefined,
      attachProjectDisk: isSet(object.attachProjectDisk) ? globalThis.Boolean(object.attachProjectDisk) : false,
      cloudInstanceType: isSet(object.cloudInstanceType)
        ? CloudInstanceType.fromJSON(object.cloudInstanceType)
        : undefined,
    };
  },

  toJSON(message: JobParameters): unknown {
    const obj: any = {};
    if (message.inputFiles?.length) {
      obj.inputFiles = message.inputFiles.map((e) => File.toJSON(e));
    }
    if (message.outputFiles?.length) {
      obj.outputFiles = message.outputFiles.map((e) => FileDesc.toJSON(e));
    }
    if (message.s3MountIds?.length) {
      obj.s3MountIds = message.s3MountIds;
    }
    if (message.datasetIds?.length) {
      obj.datasetIds = message.datasetIds;
    }
    if (message.cmd !== "") {
      obj.cmd = message.cmd;
    }
    if (message.env !== undefined) {
      obj.env = Environment.toJSON(message.env);
    }
    if (message.attachProjectDisk === true) {
      obj.attachProjectDisk = message.attachProjectDisk;
    }
    if (message.cloudInstanceType !== undefined) {
      obj.cloudInstanceType = CloudInstanceType.toJSON(message.cloudInstanceType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JobParameters>, I>>(base?: I): JobParameters {
    return JobParameters.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JobParameters>, I>>(object: I): JobParameters {
    const message = createBaseJobParameters();
    message.inputFiles = object.inputFiles?.map((e) => File.fromPartial(e)) || [];
    message.outputFiles = object.outputFiles?.map((e) => FileDesc.fromPartial(e)) || [];
    message.s3MountIds = object.s3MountIds?.map((e) => e) || [];
    message.datasetIds = object.datasetIds?.map((e) => e) || [];
    message.cmd = object.cmd ?? "";
    message.env = (object.env !== undefined && object.env !== null) ? Environment.fromPartial(object.env) : undefined;
    message.attachProjectDisk = object.attachProjectDisk ?? false;
    message.cloudInstanceType = (object.cloudInstanceType !== undefined && object.cloudInstanceType !== null)
      ? CloudInstanceType.fromPartial(object.cloudInstanceType)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(JobParameters.$type, JobParameters);

function createBaseCloudInstanceType(): CloudInstanceType {
  return { $type: "yandex.cloud.datasphere.v2.jobs.CloudInstanceType", name: "" };
}

export const CloudInstanceType = {
  $type: "yandex.cloud.datasphere.v2.jobs.CloudInstanceType" as const,

  encode(message: CloudInstanceType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloudInstanceType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloudInstanceType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): CloudInstanceType {
    return { $type: CloudInstanceType.$type, name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: CloudInstanceType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CloudInstanceType>, I>>(base?: I): CloudInstanceType {
    return CloudInstanceType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CloudInstanceType>, I>>(object: I): CloudInstanceType {
    const message = createBaseCloudInstanceType();
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(CloudInstanceType.$type, CloudInstanceType);

function createBaseFile(): File {
  return { $type: "yandex.cloud.datasphere.v2.jobs.File", desc: undefined, sha256: "", sizeBytes: 0 };
}

export const File = {
  $type: "yandex.cloud.datasphere.v2.jobs.File" as const,

  encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.desc !== undefined) {
      FileDesc.encode(message.desc, writer.uint32(10).fork()).ldelim();
    }
    if (message.sha256 !== "") {
      writer.uint32(18).string(message.sha256);
    }
    if (message.sizeBytes !== 0) {
      writer.uint32(24).int64(message.sizeBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): File {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.desc = FileDesc.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sha256 = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sizeBytes = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): File {
    return {
      $type: File.$type,
      desc: isSet(object.desc) ? FileDesc.fromJSON(object.desc) : undefined,
      sha256: isSet(object.sha256) ? globalThis.String(object.sha256) : "",
      sizeBytes: isSet(object.sizeBytes) ? globalThis.Number(object.sizeBytes) : 0,
    };
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    if (message.desc !== undefined) {
      obj.desc = FileDesc.toJSON(message.desc);
    }
    if (message.sha256 !== "") {
      obj.sha256 = message.sha256;
    }
    if (message.sizeBytes !== 0) {
      obj.sizeBytes = Math.round(message.sizeBytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<File>, I>>(base?: I): File {
    return File.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<File>, I>>(object: I): File {
    const message = createBaseFile();
    message.desc = (object.desc !== undefined && object.desc !== null) ? FileDesc.fromPartial(object.desc) : undefined;
    message.sha256 = object.sha256 ?? "";
    message.sizeBytes = object.sizeBytes ?? 0;
    return message;
  },
};

messageTypeRegistry.set(File.$type, File);

function createBaseStorageFile(): StorageFile {
  return { $type: "yandex.cloud.datasphere.v2.jobs.StorageFile", file: undefined, url: "" };
}

export const StorageFile = {
  $type: "yandex.cloud.datasphere.v2.jobs.StorageFile" as const,

  encode(message: StorageFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== undefined) {
      File.encode(message.file, writer.uint32(10).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file = File.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StorageFile {
    return {
      $type: StorageFile.$type,
      file: isSet(object.file) ? File.fromJSON(object.file) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
    };
  },

  toJSON(message: StorageFile): unknown {
    const obj: any = {};
    if (message.file !== undefined) {
      obj.file = File.toJSON(message.file);
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StorageFile>, I>>(base?: I): StorageFile {
    return StorageFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StorageFile>, I>>(object: I): StorageFile {
    const message = createBaseStorageFile();
    message.file = (object.file !== undefined && object.file !== null) ? File.fromPartial(object.file) : undefined;
    message.url = object.url ?? "";
    return message;
  },
};

messageTypeRegistry.set(StorageFile.$type, StorageFile);

function createBaseFileDesc(): FileDesc {
  return { $type: "yandex.cloud.datasphere.v2.jobs.FileDesc", path: "", var: "" };
}

export const FileDesc = {
  $type: "yandex.cloud.datasphere.v2.jobs.FileDesc" as const,

  encode(message: FileDesc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.var !== "") {
      writer.uint32(18).string(message.var);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDesc {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDesc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.var = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileDesc {
    return {
      $type: FileDesc.$type,
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      var: isSet(object.var) ? globalThis.String(object.var) : "",
    };
  },

  toJSON(message: FileDesc): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.var !== "") {
      obj.var = message.var;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileDesc>, I>>(base?: I): FileDesc {
    return FileDesc.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileDesc>, I>>(object: I): FileDesc {
    const message = createBaseFileDesc();
    message.path = object.path ?? "";
    message.var = object.var ?? "";
    return message;
  },
};

messageTypeRegistry.set(FileDesc.$type, FileDesc);

function createBaseEnvironment(): Environment {
  return {
    $type: "yandex.cloud.datasphere.v2.jobs.Environment",
    vars: {},
    dockerImageResourceId: undefined,
    dockerImageSpec: undefined,
    pythonEnv: undefined,
  };
}

export const Environment = {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment" as const,

  encode(message: Environment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.vars).forEach(([key, value]) => {
      Environment_VarsEntry.encode({
        $type: "yandex.cloud.datasphere.v2.jobs.Environment.VarsEntry",
        key: key as any,
        value,
      }, writer.uint32(10).fork()).ldelim();
    });
    if (message.dockerImageResourceId !== undefined) {
      writer.uint32(18).string(message.dockerImageResourceId);
    }
    if (message.dockerImageSpec !== undefined) {
      DockerImageSpec.encode(message.dockerImageSpec, writer.uint32(26).fork()).ldelim();
    }
    if (message.pythonEnv !== undefined) {
      PythonEnv.encode(message.pythonEnv, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Environment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvironment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Environment_VarsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.vars[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dockerImageResourceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dockerImageSpec = DockerImageSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pythonEnv = PythonEnv.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Environment {
    return {
      $type: Environment.$type,
      vars: isObject(object.vars)
        ? Object.entries(object.vars).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      dockerImageResourceId: isSet(object.dockerImageResourceId)
        ? globalThis.String(object.dockerImageResourceId)
        : undefined,
      dockerImageSpec: isSet(object.dockerImageSpec) ? DockerImageSpec.fromJSON(object.dockerImageSpec) : undefined,
      pythonEnv: isSet(object.pythonEnv) ? PythonEnv.fromJSON(object.pythonEnv) : undefined,
    };
  },

  toJSON(message: Environment): unknown {
    const obj: any = {};
    if (message.vars) {
      const entries = Object.entries(message.vars);
      if (entries.length > 0) {
        obj.vars = {};
        entries.forEach(([k, v]) => {
          obj.vars[k] = v;
        });
      }
    }
    if (message.dockerImageResourceId !== undefined) {
      obj.dockerImageResourceId = message.dockerImageResourceId;
    }
    if (message.dockerImageSpec !== undefined) {
      obj.dockerImageSpec = DockerImageSpec.toJSON(message.dockerImageSpec);
    }
    if (message.pythonEnv !== undefined) {
      obj.pythonEnv = PythonEnv.toJSON(message.pythonEnv);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Environment>, I>>(base?: I): Environment {
    return Environment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Environment>, I>>(object: I): Environment {
    const message = createBaseEnvironment();
    message.vars = Object.entries(object.vars ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.dockerImageResourceId = object.dockerImageResourceId ?? undefined;
    message.dockerImageSpec = (object.dockerImageSpec !== undefined && object.dockerImageSpec !== null)
      ? DockerImageSpec.fromPartial(object.dockerImageSpec)
      : undefined;
    message.pythonEnv = (object.pythonEnv !== undefined && object.pythonEnv !== null)
      ? PythonEnv.fromPartial(object.pythonEnv)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Environment.$type, Environment);

function createBaseEnvironment_VarsEntry(): Environment_VarsEntry {
  return { $type: "yandex.cloud.datasphere.v2.jobs.Environment.VarsEntry", key: "", value: "" };
}

export const Environment_VarsEntry = {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment.VarsEntry" as const,

  encode(message: Environment_VarsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Environment_VarsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvironment_VarsEntry();
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

  fromJSON(object: any): Environment_VarsEntry {
    return {
      $type: Environment_VarsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Environment_VarsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Environment_VarsEntry>, I>>(base?: I): Environment_VarsEntry {
    return Environment_VarsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Environment_VarsEntry>, I>>(object: I): Environment_VarsEntry {
    const message = createBaseEnvironment_VarsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Environment_VarsEntry.$type, Environment_VarsEntry);

function createBaseDockerImageSpec(): DockerImageSpec {
  return {
    $type: "yandex.cloud.datasphere.v2.jobs.DockerImageSpec",
    imageUrl: "",
    username: "",
    passwordPlainText: undefined,
    passwordDsSecretName: undefined,
  };
}

export const DockerImageSpec = {
  $type: "yandex.cloud.datasphere.v2.jobs.DockerImageSpec" as const,

  encode(message: DockerImageSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageUrl !== "") {
      writer.uint32(10).string(message.imageUrl);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.passwordPlainText !== undefined) {
      writer.uint32(26).string(message.passwordPlainText);
    }
    if (message.passwordDsSecretName !== undefined) {
      writer.uint32(34).string(message.passwordDsSecretName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DockerImageSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDockerImageSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.imageUrl = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.passwordPlainText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.passwordDsSecretName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DockerImageSpec {
    return {
      $type: DockerImageSpec.$type,
      imageUrl: isSet(object.imageUrl) ? globalThis.String(object.imageUrl) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      passwordPlainText: isSet(object.passwordPlainText) ? globalThis.String(object.passwordPlainText) : undefined,
      passwordDsSecretName: isSet(object.passwordDsSecretName)
        ? globalThis.String(object.passwordDsSecretName)
        : undefined,
    };
  },

  toJSON(message: DockerImageSpec): unknown {
    const obj: any = {};
    if (message.imageUrl !== "") {
      obj.imageUrl = message.imageUrl;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.passwordPlainText !== undefined) {
      obj.passwordPlainText = message.passwordPlainText;
    }
    if (message.passwordDsSecretName !== undefined) {
      obj.passwordDsSecretName = message.passwordDsSecretName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DockerImageSpec>, I>>(base?: I): DockerImageSpec {
    return DockerImageSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DockerImageSpec>, I>>(object: I): DockerImageSpec {
    const message = createBaseDockerImageSpec();
    message.imageUrl = object.imageUrl ?? "";
    message.username = object.username ?? "";
    message.passwordPlainText = object.passwordPlainText ?? undefined;
    message.passwordDsSecretName = object.passwordDsSecretName ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DockerImageSpec.$type, DockerImageSpec);

function createBasePythonEnv(): PythonEnv {
  return { $type: "yandex.cloud.datasphere.v2.jobs.PythonEnv", condaYaml: "", localModules: [] };
}

export const PythonEnv = {
  $type: "yandex.cloud.datasphere.v2.jobs.PythonEnv" as const,

  encode(message: PythonEnv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.condaYaml !== "") {
      writer.uint32(10).string(message.condaYaml);
    }
    for (const v of message.localModules) {
      File.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PythonEnv {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePythonEnv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.condaYaml = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.localModules.push(File.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PythonEnv {
    return {
      $type: PythonEnv.$type,
      condaYaml: isSet(object.condaYaml) ? globalThis.String(object.condaYaml) : "",
      localModules: globalThis.Array.isArray(object?.localModules)
        ? object.localModules.map((e: any) => File.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PythonEnv): unknown {
    const obj: any = {};
    if (message.condaYaml !== "") {
      obj.condaYaml = message.condaYaml;
    }
    if (message.localModules?.length) {
      obj.localModules = message.localModules.map((e) => File.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PythonEnv>, I>>(base?: I): PythonEnv {
    return PythonEnv.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PythonEnv>, I>>(object: I): PythonEnv {
    const message = createBasePythonEnv();
    message.condaYaml = object.condaYaml ?? "";
    message.localModules = object.localModules?.map((e) => File.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PythonEnv.$type, PythonEnv);

function createBaseJob(): Job {
  return {
    $type: "yandex.cloud.datasphere.v2.jobs.Job",
    id: "",
    name: "",
    desc: "",
    createdAt: undefined,
    finishedAt: undefined,
    status: 0,
    config: "",
    createdById: "",
    projectId: "",
    jobParameters: undefined,
    dataExpiresAt: undefined,
    dataCleared: false,
    outputFiles: [],
  };
}

export const Job = {
  $type: "yandex.cloud.datasphere.v2.jobs.Job" as const,

  encode(message: Job, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.finishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.config !== "") {
      writer.uint32(58).string(message.config);
    }
    if (message.createdById !== "") {
      writer.uint32(66).string(message.createdById);
    }
    if (message.projectId !== "") {
      writer.uint32(74).string(message.projectId);
    }
    if (message.jobParameters !== undefined) {
      JobParameters.encode(message.jobParameters, writer.uint32(82).fork()).ldelim();
    }
    if (message.dataExpiresAt !== undefined) {
      Timestamp.encode(toTimestamp(message.dataExpiresAt), writer.uint32(90).fork()).ldelim();
    }
    if (message.dataCleared === true) {
      writer.uint32(96).bool(message.dataCleared);
    }
    for (const v of message.outputFiles) {
      File.encode(v!, writer.uint32(106).fork()).ldelim();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.desc = reader.string();
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

          message.finishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.config = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdById = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.jobParameters = JobParameters.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.dataExpiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.dataCleared = reader.bool();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.outputFiles.push(File.decode(reader, reader.uint32()));
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      desc: isSet(object.desc) ? globalThis.String(object.desc) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      finishedAt: isSet(object.finishedAt) ? fromJsonTimestamp(object.finishedAt) : undefined,
      status: isSet(object.status) ? jobStatusFromJSON(object.status) : 0,
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      createdById: isSet(object.createdById) ? globalThis.String(object.createdById) : "",
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      jobParameters: isSet(object.jobParameters) ? JobParameters.fromJSON(object.jobParameters) : undefined,
      dataExpiresAt: isSet(object.dataExpiresAt) ? fromJsonTimestamp(object.dataExpiresAt) : undefined,
      dataCleared: isSet(object.dataCleared) ? globalThis.Boolean(object.dataCleared) : false,
      outputFiles: globalThis.Array.isArray(object?.outputFiles)
        ? object.outputFiles.map((e: any) => File.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Job): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.desc !== "") {
      obj.desc = message.desc;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.finishedAt !== undefined) {
      obj.finishedAt = message.finishedAt.toISOString();
    }
    if (message.status !== 0) {
      obj.status = jobStatusToJSON(message.status);
    }
    if (message.config !== "") {
      obj.config = message.config;
    }
    if (message.createdById !== "") {
      obj.createdById = message.createdById;
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.jobParameters !== undefined) {
      obj.jobParameters = JobParameters.toJSON(message.jobParameters);
    }
    if (message.dataExpiresAt !== undefined) {
      obj.dataExpiresAt = message.dataExpiresAt.toISOString();
    }
    if (message.dataCleared === true) {
      obj.dataCleared = message.dataCleared;
    }
    if (message.outputFiles?.length) {
      obj.outputFiles = message.outputFiles.map((e) => File.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Job>, I>>(base?: I): Job {
    return Job.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Job>, I>>(object: I): Job {
    const message = createBaseJob();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.finishedAt = object.finishedAt ?? undefined;
    message.status = object.status ?? 0;
    message.config = object.config ?? "";
    message.createdById = object.createdById ?? "";
    message.projectId = object.projectId ?? "";
    message.jobParameters = (object.jobParameters !== undefined && object.jobParameters !== null)
      ? JobParameters.fromPartial(object.jobParameters)
      : undefined;
    message.dataExpiresAt = object.dataExpiresAt ?? undefined;
    message.dataCleared = object.dataCleared ?? false;
    message.outputFiles = object.outputFiles?.map((e) => File.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Job.$type, Job);

function createBaseJobResult(): JobResult {
  return { $type: "yandex.cloud.datasphere.v2.jobs.JobResult", returnCode: 0 };
}

export const JobResult = {
  $type: "yandex.cloud.datasphere.v2.jobs.JobResult" as const,

  encode(message: JobResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.returnCode !== 0) {
      writer.uint32(8).int64(message.returnCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.returnCode = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JobResult {
    return { $type: JobResult.$type, returnCode: isSet(object.returnCode) ? globalThis.Number(object.returnCode) : 0 };
  },

  toJSON(message: JobResult): unknown {
    const obj: any = {};
    if (message.returnCode !== 0) {
      obj.returnCode = Math.round(message.returnCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JobResult>, I>>(base?: I): JobResult {
    return JobResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JobResult>, I>>(object: I): JobResult {
    const message = createBaseJobResult();
    message.returnCode = object.returnCode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(JobResult.$type, JobResult);

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
