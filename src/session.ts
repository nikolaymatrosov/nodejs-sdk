import {
    ChannelCredentials,
    credentials,
    Metadata,
    ServiceDefinition,
} from '@grpc/grpc-js';
import {
    createChannel,
    createClientFactory,
} from 'nice-grpc';
import { deadlineMiddleware } from 'nice-grpc-client-middleware-deadline';
import { Required } from 'utility-types';
import { getServiceClientEndpoint } from './service-endpoints';
import { IamTokenService } from './token-service/iam-token-service';
import { MetadataTokenService } from './token-service/metadata-token-service';
import { NoopTokenService } from './token-service/noop-token-service';
import { OAuthTokenService } from './token-service/oauth-token-service';
import { authRetryMiddlewareProvider } from './token-service/retry-middleware';
import {
    GeneratedServiceClientCtor,
    IamTokenCredentialsConfig,
    OAuthCredentialsConfig,
    ServiceAccountCredentialsConfig,
    SessionConfig,
    TokenService,
    WrappedServiceClientType,
} from './types';

const isOAuth = (config: SessionConfig): config is OAuthCredentialsConfig => 'oauthToken' in config;

const isIamToken = (config: SessionConfig): config is IamTokenCredentialsConfig => 'iamToken' in config;

const isServiceAccount = (config: SessionConfig): config is ServiceAccountCredentialsConfig => 'serviceAccountJson' in config;

const newTokenService = (config: SessionConfig): TokenService => {
    if (isOAuth(config)) {
        return new OAuthTokenService(config.oauthToken);
    }
    if (isIamToken(config)) {
        const { iamToken } = config;

        return new NoopTokenService(iamToken);
    }

    return isServiceAccount(config) ? new IamTokenService(config.serviceAccountJson) : new MetadataTokenService();
};

const newChannelCredentials = (tokenCreator: TokenCreator) => credentials.combineChannelCredentials(
    credentials.createSsl(),
    credentials.createFromMetadataGenerator(
        (
            params: { service_url: string },
            callback: (error: any, result?: any) => void,
        ) => {
            tokenCreator()
                .then((token) => {
                    const md = new Metadata();

                    md.set('authorization', `Bearer ${token}`);

                    return callback(null, md);
                })
                .catch((error) => callback(error));
        },
    ),
);

type TokenCreator = () => Promise<string>;

export class Session {
    private static readonly DEFAULT_CONFIG = {
        pollInterval: 1000,
    };
    private readonly config: Required<SessionConfig, 'pollInterval'>;
    private readonly channelCredentials: ChannelCredentials;
    private readonly tokenService: TokenService;

    constructor(config?: SessionConfig) {
        this.config = {
            ...Session.DEFAULT_CONFIG,
            ...config,
        };
        this.tokenService = newTokenService(this.config);
        this.channelCredentials = newChannelCredentials(() => this.tokenService.getToken());
    }

    get pollInterval(): number {
        return this.config.pollInterval;
    }

    client<S extends ServiceDefinition>(clientClass: GeneratedServiceClientCtor<S>, customEndpoint?: string): WrappedServiceClientType<S> {
        const endpoint = customEndpoint || getServiceClientEndpoint(clientClass);
        const channel = createChannel(endpoint, this.channelCredentials);

        return createClientFactory()
            .use(authRetryMiddlewareProvider(this.tokenService))
            .use(deadlineMiddleware)
            .create(clientClass.service, channel);
    }
}
