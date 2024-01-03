# `@yandex-cloud/serverless`

This package contains generated clients for **Yandex Cloud Serverless APIs**:
* [Functions](https://cloud.yandex.ru/ru/docs/functions/)
* [Triggers](https://cloud.yandex.ru/ru/docs/functions/concepts/trigger)
* [MDB Proxy](https://cloud.yandex.ru/ru/docs/functions/operations/database-connection)
* [Serverless Containers](https://cloud.yandex.ru/ru/docs/serverless-containers/)
* [API Gateway](https://cloud.yandex.ru/ru/docs/api-gateway/)

## Usage

```ts
import { Session } from '@yandex-cloud/core';
import { serverless, serverlessClients } from '@yandex-cloud/serverless';

const { functions_function_service: { ListFunctionsRequest } } = serverless;
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

const session = new Session({ oauthToken: AUTH_TOKEN });
const client = session.client(serverlessClients.FunctionServiceClient);

const response = await client.list(ListFunctionsRequest.fromPartial({ folderId: FOLDER_ID }));

for (const func of response.functions) {
    log(`Function: ${func.name}, id: ${func.id}, invoke URL: ${func.httpInvokeUrl}`);
}
```
