/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { AnnotationRequest, AnnotationResponse } from "./image_classifier";

export const protobufPackage = "yandex.cloud.ai.vision.v2";

export type ImageClassifierServiceService = typeof ImageClassifierServiceService;
export const ImageClassifierServiceService = {
  annotate: {
    path: "/yandex.cloud.ai.vision.v2.ImageClassifierService/Annotate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AnnotationRequest) => Buffer.from(AnnotationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AnnotationRequest.decode(value),
    responseSerialize: (value: AnnotationResponse) => Buffer.from(AnnotationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AnnotationResponse.decode(value),
  },
} as const;

export interface ImageClassifierServiceServer extends UntypedServiceImplementation {
  annotate: handleUnaryCall<AnnotationRequest, AnnotationResponse>;
}

export interface ImageClassifierServiceClient extends Client {
  annotate(
    request: AnnotationRequest,
    callback: (error: ServiceError | null, response: AnnotationResponse) => void,
  ): ClientUnaryCall;
  annotate(
    request: AnnotationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AnnotationResponse) => void,
  ): ClientUnaryCall;
  annotate(
    request: AnnotationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AnnotationResponse) => void,
  ): ClientUnaryCall;
}

export const ImageClassifierServiceClient = makeGenericClientConstructor(
  ImageClassifierServiceService,
  "yandex.cloud.ai.vision.v2.ImageClassifierService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): ImageClassifierServiceClient;
  service: typeof ImageClassifierServiceService;
  serviceName: string;
};
