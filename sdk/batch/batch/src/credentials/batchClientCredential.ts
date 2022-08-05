
import {
  PipelineRequest,
  PipelinePolicy,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";

export interface BatchClientCredential {
  /**
   * Client credential to authenticate the request within the header.
   *
   * 
   * @param {PipelineRequest} Authorization pipeline request.
   * @returns {PipelineRequest} The signed pipeline request;
   */
  signRequest(request: PipelineRequest): PipelineRequest;
}

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
