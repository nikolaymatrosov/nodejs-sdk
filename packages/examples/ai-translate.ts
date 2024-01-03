import { Session } from '@yandex-cloud/core';
import { ai, aiClients } from '@yandex-cloud/ai';
import { getEnv } from './utils/get-env';

const { translate_translation_service: { TranslateRequest, TranslateRequest_Format: Format } } = ai;

const TEXTS = ['NodeJS SDK examples', 'Powerful, but easy to use library'];
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = session.client(aiClients.TranslationServiceClient);

    const response = await client.translate(TranslateRequest.fromPartial({
        targetLanguageCode: 'ru',
        format: Format.PLAIN_TEXT,
        folderId: FOLDER_ID,
        texts: TEXTS,
    }));

    for (let i = 0; i < response.translations.length; i++) {
        console.log(`translated '${TEXTS[i]}' => '${response.translations[i].text}'`)
    }
})();
