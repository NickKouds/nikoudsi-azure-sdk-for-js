/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  StreamingJob,
  StreamingJobsListByResourceGroupOptionalParams,
  StreamingJobsListOptionalParams,
  StreamingJobsCreateOrReplaceOptionalParams,
  StreamingJobsCreateOrReplaceResponse,
  StreamingJobsUpdateOptionalParams,
  StreamingJobsUpdateResponse,
  StreamingJobsDeleteOptionalParams,
  StreamingJobsGetOptionalParams,
  StreamingJobsGetResponse,
  StreamingJobsStartOptionalParams,
  StreamingJobsStopOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a StreamingJobs. */
export interface StreamingJobs {
  /**
   * Lists all of the streaming jobs in the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: StreamingJobsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<StreamingJob>;
  /**
   * Lists all of the streaming jobs in the given subscription.
   * @param options The options parameters.
   */
  list(
    options?: StreamingJobsListOptionalParams
  ): PagedAsyncIterableIterator<StreamingJob>;
  /**
   * Creates a streaming job or replaces an already existing streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param streamingJob The definition of the streaming job that will be used to create a new streaming
   *                     job or replace the existing one.
   * @param options The options parameters.
   */
  beginCreateOrReplace(
    resourceGroupName: string,
    jobName: string,
    streamingJob: StreamingJob,
    options?: StreamingJobsCreateOrReplaceOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<StreamingJobsCreateOrReplaceResponse>,
      StreamingJobsCreateOrReplaceResponse
    >
  >;
  /**
   * Creates a streaming job or replaces an already existing streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param streamingJob The definition of the streaming job that will be used to create a new streaming
   *                     job or replace the existing one.
   * @param options The options parameters.
   */
  beginCreateOrReplaceAndWait(
    resourceGroupName: string,
    jobName: string,
    streamingJob: StreamingJob,
    options?: StreamingJobsCreateOrReplaceOptionalParams
  ): Promise<StreamingJobsCreateOrReplaceResponse>;
  /**
   * Updates an existing streaming job. This can be used to partially update (ie. update one or two
   * properties) a streaming job without affecting the rest the job definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param streamingJob A streaming job object. The properties specified here will overwrite the
   *                     corresponding properties in the existing streaming job (ie. Those properties will be updated). Any
   *                     properties that are set to null here will mean that the corresponding property in the existing input
   *                     will remain the same and not change as a result of this PATCH operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    jobName: string,
    streamingJob: StreamingJob,
    options?: StreamingJobsUpdateOptionalParams
  ): Promise<StreamingJobsUpdateResponse>;
  /**
   * Deletes a streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets details about the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsGetOptionalParams
  ): Promise<StreamingJobsGetResponse>;
  /**
   * Starts a streaming job. Once a job is started it will start processing input events and produce
   * output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Starts a streaming job. Once a job is started it will start processing input events and produce
   * output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsStartOptionalParams
  ): Promise<void>;
  /**
   * Stops a running streaming job. This will cause a running streaming job to stop processing input
   * events and producing output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsStopOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Stops a running streaming job. This will cause a running streaming job to stop processing input
   * events and producing output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsStopOptionalParams
  ): Promise<void>;
}