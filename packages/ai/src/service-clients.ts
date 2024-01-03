import * as cloudApi from '.';

export const { TextRecognitionServiceClient } = cloudApi.ai.ocr_service;
export const { TextRecognitionAsyncServiceClient } = cloudApi.ai.ocr_service;
export const { SttServiceClient } = cloudApi.ai.stt_service;
export const { RecognizerClient } = cloudApi.ai.stt_service_v3;
export const { AsyncRecognizerClient } = cloudApi.ai.stt_service_v3;
export const { TranslationServiceClient } = cloudApi.ai.translate_translation_service;
export const { SynthesizerClient } = cloudApi.ai.tts_service;
export const { VisionServiceClient } = cloudApi.ai.vision_service;
export const { ImageClassifierServiceClient } = cloudApi.ai.vision_image_classifier_service;
