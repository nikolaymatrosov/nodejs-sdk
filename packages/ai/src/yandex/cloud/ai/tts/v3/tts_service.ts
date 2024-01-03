/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientReadableStream,
  handleServerStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type { CallOptions, ClientOptions, UntypedServiceImplementation } from "@grpc/grpc-js";
import { UtteranceSynthesisRequest, UtteranceSynthesisResponse } from "./tts";

export const protobufPackage = "speechkit.tts.v3";

/** A set of methods for voice synthesis. */
export type SynthesizerService = typeof SynthesizerService;
export const SynthesizerService = {
  /** Synthesizing text into speech. */
  utteranceSynthesis: {
    path: "/speechkit.tts.v3.Synthesizer/UtteranceSynthesis",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: UtteranceSynthesisRequest) =>
      Buffer.from(UtteranceSynthesisRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UtteranceSynthesisRequest.decode(value),
    responseSerialize: (value: UtteranceSynthesisResponse) =>
      Buffer.from(UtteranceSynthesisResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UtteranceSynthesisResponse.decode(value),
  },
} as const;

export interface SynthesizerServer extends UntypedServiceImplementation {
  /** Synthesizing text into speech. */
  utteranceSynthesis: handleServerStreamingCall<UtteranceSynthesisRequest, UtteranceSynthesisResponse>;
}

export interface SynthesizerClient extends Client {
  /** Synthesizing text into speech. */
  utteranceSynthesis(
    request: UtteranceSynthesisRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<UtteranceSynthesisResponse>;
  utteranceSynthesis(
    request: UtteranceSynthesisRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<UtteranceSynthesisResponse>;
}

export const SynthesizerClient = makeGenericClientConstructor(
  SynthesizerService,
  "speechkit.tts.v3.Synthesizer",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SynthesizerClient;
  service: typeof SynthesizerService;
  serviceName: string;
};
