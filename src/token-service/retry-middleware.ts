/* eslint-disable prefer-arrow-functions/prefer-arrow-functions */
import {
    delay,
    rethrowAbortError,
} from 'abort-controller-x';
import {
    ClientError,
    ClientMiddleware,
    Status,
} from 'nice-grpc-common';
import { TokenService } from '../types';

const authRetryableStatuses: Set<Status> = new Set([
    Status.UNAUTHENTICATED,
]);
const retryMaxDelayMs = 1000;

/**
 * Client middleware that adds automatic retries to unary calls.
 */
export const authRetryMiddlewareProvider = (
    tokenService: TokenService,
): ClientMiddleware => async function* retryMiddleware(call, options) {
    const retryBaseDelayMs = 1000;
    const retryMaxAttempts = 1;

    if (call.requestStream || call.responseStream) {
        return yield* call.next(call.request, options);
    }

    const signal = options.signal ?? new AbortController().signal;

    for (let attempt = 0; ; attempt++) {
        try {
            return yield* call.next(call.request, options);
        } catch (error: unknown) {
            rethrowAbortError(error);

            if (attempt >= retryMaxAttempts
                || !(error instanceof ClientError)
                || !authRetryableStatuses.has(error.code)
            ) {
                throw error;
            }

            const backoff = Math.min(
                retryMaxDelayMs,
                2 ** attempt * retryBaseDelayMs,
            );
            const delayMs = Math.round((backoff * (1 + Math.random())) / 2);

            tokenService.invalidateCache();

            // eslint-disable-next-line no-await-in-loop
            await delay(signal, delayMs);
        }
    }
};
