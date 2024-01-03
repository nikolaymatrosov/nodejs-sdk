# `@yandex-cloud/serverless`

> TODO: description

## Usage

```ts
import { Session } from '@yandex-cloud/core';
import { serverless, serverlessClients } from '@yandex-cloud/serverless';

const session = new core.Session({ oauthToken: AUTH_TOKEN });
const client = session.client(serverlessClients.SomeServiceClient);

```
