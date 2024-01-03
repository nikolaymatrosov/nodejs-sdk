import { Session } from '@yandex-cloud/core';
import { resourcemanager, resourcemanagerClients } from '@yandex-cloud/resourcemanager';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const { cloud_service: { ListCloudsRequest } } = resourcemanager;
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = session.client(resourcemanagerClients.CloudServiceClient);

    const response = await client.list(ListCloudsRequest.fromPartial({ pageSize: 200 }));

    for (const cloud of response.clouds) {
        log(`Found cloud id = ${cloud.id}, name = ${cloud.name}`);
    }
})();
