import { Session } from '@yandex-cloud/core';
import { iot, iotClients } from '@yandex-cloud/iot';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const {
    devices_registry_service: { ListRegistriesRequest },
    devices_registry_data_service: { PublishRegistryDataRequest },
} = iot;
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const registryClient = session.client(iotClients.IotRegistryServiceClient);
    const dataClient = session.client(iotClients.RegistryDataServiceClient);

    const registries = await registryClient.list(ListRegistriesRequest.fromPartial({
        folderId: FOLDER_ID,
    }));

    log(`Found ${registries.registries.length} registries in folder ${FOLDER_ID}`);

    for (const registry of registries.registries) {
        log(`Broadcasting to ${registry.id}`);

        dataClient.publish(PublishRegistryDataRequest.fromPartial({
            registryId: registry.id,
            topic: `$registries/${registry.id}/commands/heartbeat`,
            data: Buffer.from('{"hello": "world"}'),
        }));
    }

    log('Broadcasted to all registries');
})();
