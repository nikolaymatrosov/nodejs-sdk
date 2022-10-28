import {
    ChannelCredentials,
    ChannelOptions,
    Client,
    ServiceDefinition,
} from '@grpc/grpc-js';
import { RawClient } from 'nice-grpc';
import { DeadlineOptions } from 'nice-grpc-client-middleware-deadline';
import { NormalizedServiceDefinition } from 'nice-grpc/lib/service-definitions';

export interface TokenService {
    getToken: () => Promise<string>;
    invalidateCache: () => void;
}

export interface GeneratedServiceClientCtor<T extends ServiceDefinition> {
    service: T

    new(
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): Client;
}

export interface IIAmCredentials {
    serviceAccountId: string;
    accessKeyId: string;
    privateKey: Buffer | string;
}

export interface ISslCredentials {
    rootCertificates?: Buffer;
    clientPrivateKey?: Buffer;
    clientCertChain?: Buffer;
}

export interface GenericCredentialsConfig {
    pollInterval?: number;
}

export interface OAuthCredentialsConfig extends GenericCredentialsConfig {
    oauthToken: string;
}

export interface IamTokenCredentialsConfig extends GenericCredentialsConfig {
    iamToken: string;
}

export interface ServiceAccountCredentialsConfig extends GenericCredentialsConfig {
    serviceAccountJson: IIAmCredentials;
}

export type SessionConfig =
    | OAuthCredentialsConfig
    | IamTokenCredentialsConfig
    | ServiceAccountCredentialsConfig
    | GenericCredentialsConfig;

export type WrappedServiceClientType<S extends ServiceDefinition> =
    RawClient<NormalizedServiceDefinition<S>, DeadlineOptions & unknown>;
