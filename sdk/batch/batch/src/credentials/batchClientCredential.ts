
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
