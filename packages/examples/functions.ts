import { Session } from '@yandex-cloud/core';
import { serverless, serverlessClients } from '@yandex-cloud/serverless';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const { functions_function_service: { ListFunctionsRequest } } = serverless;
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = session.client(serverlessClients.FunctionServiceClient);

    const response = await client.list(ListFunctionsRequest.fromPartial({ folderId: FOLDER_ID }));

    for (const func of response.functions) {
        log(`Function: ${func.name}, id: ${func.id}, invoke URL: ${func.httpInvokeUrl}`);
    }
})();
