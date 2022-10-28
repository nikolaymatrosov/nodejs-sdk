import { TokenService } from '../types';

export class NoopTokenService implements TokenService {
    private readonly iamToken: string;

    constructor(iamToken: string) {
        this.iamToken = iamToken;
    }

    public getToken = () => Promise.resolve(this.iamToken);

    public invalidateCache() {}
}
