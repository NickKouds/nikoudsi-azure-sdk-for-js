import {
  PipelineRequest,
  PipelinePolicy,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import { BatchClientCredential } from "../credentials/batchClientCredential";

/**
 * Creates an HTTP pipeline policy to authenticate a request
 * using a `BatchClientCredential`
 */
export function createBatchClientCredentialPolicy(
  name: string,
  credential: BatchClientCredential
): PipelinePolicy {
  return {
    name: name,
    sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse> {
      if (!request) {
        throw new Error("resource request cannot be null or undefined");
      }

      credential.signRequest(request);
      return next(request);
    },
  };
}

/**
 * Appends the content-type to the request headers for POST/PUT/PATCH request
 */
export function createContentTypeAppendPolicy(
  name: string
): PipelinePolicy {
  return {
    name: name,
    sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse> {
      if (!request) {
        throw new Error("resource request cannot be null or undefined");
      }

      if (request.method == "POST" || request.method == "PUT" || request.method == "PATCH") {
        request.headers.set("content-type", "application/json; odata=minimalmetadata");

      }
      return next(request);
    },
  };
}
