import { Session } from '@yandex-cloud/core';
import { ai, aiClients } from '@yandex-cloud/ai';
import * as fs from 'fs';
import * as path from 'path';
import * as stream from 'stream';
import * as wav from 'wav';
import { getEnv } from '../utils/get-env';
import { log } from '../utils/logger';

// eslint-disable-next-line unicorn/prefer-module
const file = fs.createReadStream(path.join(__dirname, 'test.wav'));
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
    const session = new Session({ oauthToken: authToken });
    const client = session.client(aiClients.SttServiceClient);

    async function* createRequest(): AsyncIterable<ai.stt_service.StreamingRecognitionRequest> {
        const format = await formatPromise;

        yield ai.stt_service.StreamingRecognitionRequest.fromPartial({
            config: {
                specification: {
                    audioEncoding: ai.stt_service.RecognitionSpec_AudioEncoding.LINEAR16_PCM,
                    sampleRateHertz: format.sampleRate,
                    audioChannelCount: format.channels,
                },
                folderId,
            },
        });
        for await (const chunk of data) {
            yield ai.stt_service.StreamingRecognitionRequest.fromPartial({
                audioContent: chunk,
            });
        }
    }

    try {
        for await (const response of client.streamingRecognize(createRequest())) {
            log(JSON.stringify(response, null, 2));
        }
    } catch (error) {
        log(error);
    }
})();
