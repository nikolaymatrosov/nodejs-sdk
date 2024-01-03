import { decodeMessage, Session, waitForOperation, } from '@yandex-cloud/core';
import { kms, kmsClients } from '@yandex-cloud/kms';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const {
    symmetric_key_service: { CreateSymmetricKeyRequest, DeleteSymmetricKeyRequest },
    symmetric_key: { SymmetricAlgorithm },
    symmetric_crypto_service: { SymmetricEncryptRequest, SymmetricDecryptRequest },
} = kms;

(async () => {
    const authToken = getEnv('YC_OAUTH_TOKEN');
    const folderId = getEnv('YC_FOLDER_ID');
    const session = new Session({ oauthToken: authToken });
    const keyClient = session.client(kmsClients.SymmetricKeyServiceClient);
    const cryptoClient = session.client(kmsClients.SymmetricCryptoServiceClient);

    const keyCreateOp = await keyClient.create(CreateSymmetricKeyRequest.fromPartial({
        folderId,
        defaultAlgorithm: SymmetricAlgorithm.AES_256,
    }));
    const finishedKeyCreateOp = await waitForOperation(keyCreateOp, session);

    if (finishedKeyCreateOp.response) {
        const key = decodeMessage<kms.symmetric_key.SymmetricKey>(finishedKeyCreateOp.response);

        const encrypted = await cryptoClient.encrypt(SymmetricEncryptRequest.fromPartial({
            keyId: key.id,
            plaintext: Buffer.from('example message'),
        }));

        log(`Got "${encrypted.ciphertext}" from KMS`);

        const decrypted = await cryptoClient.decrypt(SymmetricDecryptRequest.fromPartial({
            keyId: key.id,
            ciphertext: encrypted.ciphertext,
        }));

        log(`Got "${decrypted.plaintext}" from KMS`);

        const keyRemoveOp = await keyClient.delete(DeleteSymmetricKeyRequest.fromPartial({
            keyId: key.id,
        }));

        await waitForOperation(keyRemoveOp, session);
    }
})();
