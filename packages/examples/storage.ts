import { Session } from '@yandex-cloud/core';
import { storage, storageClients } from '@yandex-cloud/storage';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const { bucket_service: { ListBucketsRequest } } = storage;
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = session.client(storageClients.BucketServiceClient);

    const response = await client.list(ListBucketsRequest.fromPartial({ folderId: FOLDER_ID }));

    for (const bucket of response.buckets) {
        log(`Bucket: ${bucket.name}, id: ${bucket.id}`);
    }
})();
