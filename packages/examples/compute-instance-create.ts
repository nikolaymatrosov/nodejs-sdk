import { decodeMessage, Session, waitForOperation, } from '@yandex-cloud/core';
import { compute, computeClients } from '@yandex-cloud/compute';
import { vpc, vpcClients } from '@yandex-cloud/vpc';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');
const TARGET_ZONE_ID = 'ru-central1-a';

const {
    image_service: {
        GetImageLatestByFamilyRequest,
    },
    instance_service: {
        CreateInstanceRequest,
        DeleteInstanceRequest,
    },
    instance: {
        IpVersion,
    },
} = compute;
const {
    network_service: {
        ListNetworksRequest,
        ListNetworkSubnetsRequest,
    },
} = vpc;

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const imageClient = session.client(computeClients.ComputeImageServiceClient);
    const instanceClient = session.client(computeClients.InstanceServiceClient);
    const networkClient = session.client(vpcClients.NetworkServiceClient);

    const networkResponse = await networkClient.list(ListNetworksRequest.fromPartial({
        folderId: FOLDER_ID,
    }));

    log(`Found ${networkResponse.networks.length} networks in folder ${FOLDER_ID}`);

    const network = networkResponse.networks.pop();

    if (!network) {
        throw new Error(`There are no networks in folder ${FOLDER_ID}`);
    }

    const subnetsResponse = await networkClient.listSubnets(ListNetworkSubnetsRequest.fromPartial({
        networkId: network.id,
    }));
    const subnet = subnetsResponse.subnets.find((s) =>
        s.zoneId === TARGET_ZONE_ID && s.folderId === FOLDER_ID
    );

    if (!subnet) {
        throw new Error(`There is no subnet in zone ${TARGET_ZONE_ID} in folder ${FOLDER_ID}`);
    }

    const image = await imageClient.getLatestByFamily(GetImageLatestByFamilyRequest.fromPartial({
        family: 'ubuntu-1804-lts',
        folderId: 'standard-images',
    }));

    const createOp = await instanceClient.create(CreateInstanceRequest.fromPartial({
        folderId: FOLDER_ID,
        zoneId: TARGET_ZONE_ID,
        platformId: 'standard-v2',
        labels: { 'nodejs-sdk': 'yes' },
        resourcesSpec: {
            memory: 2 * 1024 * 1024 * 1024,
            cores: 2,
        },
        bootDiskSpec: {
            autoDelete: true,
            diskSpec: {
                size: 10 * 1024 * 1024 * 1024,
                imageId: image.id,
            },
        },
        networkInterfaceSpecs: [
            {
                subnetId: subnet.id,
                primaryV4AddressSpec: {
                    oneToOneNatSpec: { ipVersion: IpVersion.IPV4 },
                },
            },
        ],
    }));

    log(`Instance create operation id: ${createOp.id}`);

    const finishedCreateOp = await waitForOperation(createOp, session);

    if (finishedCreateOp.response) {
        const instance = decodeMessage<compute.instance.Instance>(finishedCreateOp.response);

        log(`Instance ${instance.id} created`);

        const removeOp = await instanceClient.delete(DeleteInstanceRequest.fromPartial({
            instanceId: instance.id,
        }));

        const finishedRemoveOp = await waitForOperation(removeOp, session);

        if (finishedRemoveOp.error) {
            log(`Failed to remove instance ${instance.id}`);
        } else {
            log(`Successfully remove instance ${instance.id}`);
        }
    }
})();
