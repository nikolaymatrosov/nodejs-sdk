# `@yandex-cloud/k8s`

> TODO: description

## Usage

```ts
import { Session } from '@yandex-cloud/core';
import { k8s, k8sClients } from '@yandex-cloud/k8s';

const session = new core.Session({ oauthToken: AUTH_TOKEN });
const client = session.client(k8sClients.SomeServiceClient);

```
