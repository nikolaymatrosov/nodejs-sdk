import { credentials } from '@grpc/grpc-js';
import { DateTime } from 'luxon';
import { createChannel } from 'nice-grpc';
import { cloudApi, serviceClients } from '../index';
import { getServiceClientEndpoint } from '../service-endpoints';
import { ISslCredentials, TokenService } from '../types';
import { clientFactory } from '../utils/client-factory';

const { IamTokenServiceClient } = serviceClients;

export class OAuthTokenService implements TokenService {
    public readonly sslCredentials?: ISslCredentials;

    private tokenExpirationTimeout = 120 * 1000;
    private tokenRequestTimeout = 10 * 1000;
    private token = '';
    private tokenTimestamp: DateTime | null;
    private readonly oAuthToken: string;

    constructor(oAuthToken: string, sslCredentials?: ISslCredentials) {
        this.oAuthToken = oAuthToken;
        this.tokenTimestamp = null;

        this.sslCredentials = sslCredentials;
    }

    private get expired() {
        return (
            !this.tokenTimestamp
            || DateTime.utc()
                .diff(this.tokenTimestamp)
                .valueOf() > this.tokenExpirationTimeout
        );
    }

    private static client() {
        const endpoint = getServiceClientEndpoint(IamTokenServiceClient);
        const channel = createChannel(endpoint, credentials.createSsl());

        return clientFactory.create(IamTokenServiceClient.service, channel);
    }

    public invalidateCache() {
        this.tokenTimestamp = null;
        this.token = '';
    }

    public async getToken(): Promise<string> {
        if (this.expired) {
            await this.initialize();
        }

        return this.token;
    }

    private async initialize() {
        const resp = await this.requestToken();

        if (resp) {
            this.token = resp.iamToken;
            this.tokenTimestamp = DateTime.utc();
        } else {
            throw new Error('Received empty token from IAM!');
        }
    }

    private async requestToken(): Promise<cloudApi.iam.iam_token_service.CreateIamTokenResponse> {
        const deadline = DateTime.now()
            .plus({ millisecond: this.tokenRequestTimeout })
            .toJSDate();

        return OAuthTokenService.client()
            .create(
                cloudApi.iam.iam_token_service.CreateIamTokenRequest.fromPartial({
                    yandexPassportOauthToken: this.oAuthToken,
                }),
                { deadline },
            );
    }
}
