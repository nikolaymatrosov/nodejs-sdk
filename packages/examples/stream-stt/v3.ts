import { Session } from '@yandex-cloud/core';
import { ai, aiClients } from '@yandex-cloud/ai';
import * as fs from 'fs';
import * as path from 'path';
import * as stream from 'stream';
import * as wav from 'wav';
import { getEnv } from '../utils/get-env';
import { log } from '../utils/logger';

const dirname = path.dirname(new URL(import.meta.url).pathname);
const file = fs.createReadStream(path.join(dirname, 'test.wav'));
const reader = new wav.Reader();
const data = new stream.PassThrough();

const formatPromise = new Promise<wav.Format>((resolve) => {
    // the "format" event gets emitted at the end of the WAVE header
    reader.on('format', (format: wav.Format) => {
        // pass the format object
        resolve(format);
    });
});

// pipe the WAVE file to the Reader instance
file.pipe(reader);
reader.pipe(data);

(async () => {
    const authToken = getEnv('YC_OAUTH_TOKEN');
    const folderId = getEnv('YC_FOLDER_ID');
    const session = new Session({ oauthToken: authToken, headers: { 'x-folder-id': folderId } });
    const client = session.client(aiClients.RecognizerClient);

    async function* createRequest(): AsyncIterable<ai.stt.StreamingRequest> {
        const format = await formatPromise;

        yield ai.stt.StreamingRequest.fromPartial({
            sessionOptions: {
                recognitionModel: {
                    audioFormat: {
                        rawAudio: {
                            audioEncoding: ai.stt.RawAudio_AudioEncoding.LINEAR16_PCM,
                            sampleRateHertz: format.sampleRate,
                            audioChannelCount: format.channels,
                        },
                    },
                    textNormalization: {
                        textNormalization: ai.stt.TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_ENABLED,
                        profanityFilter: true,
                        literatureText: true,
                    },
                    languageRestriction: {
                        restrictionType: ai.stt.LanguageRestrictionOptions_LanguageRestrictionType.WHITELIST,
                        languageCode: ['ru-RU'],
                    },
                    audioProcessingType: ai.stt.RecognitionModelOptions_AudioProcessingType.REAL_TIME,
                },
            },
        });

        for await (const chunk of data) {
            yield ai.stt.StreamingRequest.fromPartial({
                chunk: ai.stt.AudioChunk.fromPartial({
                    data: chunk,
                }),
            });
        }
    }

    try {
        for await (const response of client.recognizeStreaming(createRequest())) {
            log(JSON.stringify(response, null, 2));
        }
    } catch (error) {
        log(error);
    }
})();
