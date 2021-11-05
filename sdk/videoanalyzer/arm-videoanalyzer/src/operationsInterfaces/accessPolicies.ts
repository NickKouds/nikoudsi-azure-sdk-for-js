/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AccessPolicyEntity,
  AccessPoliciesListOptionalParams,
  AccessPoliciesGetOptionalParams,
  AccessPoliciesGetResponse,
  AccessPoliciesCreateOrUpdateOptionalParams,
  AccessPoliciesCreateOrUpdateResponse,
  AccessPoliciesDeleteOptionalParams,
  AccessPoliciesUpdateOptionalParams,
  AccessPoliciesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AccessPolicies. */
export interface AccessPolicies {
  /**
   * Retrieves all existing access policy resources, along with their JSON representations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: AccessPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<AccessPolicyEntity>;
  /**
   * Retrieves an existing access policy resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param accessPolicyName The Access Policy name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    accessPolicyName: string,
    options?: AccessPoliciesGetOptionalParams
  ): Promise<AccessPoliciesGetResponse>;
  /**
   * Creates a new access policy resource or updates an existing one with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param accessPolicyName The Access Policy name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    accessPolicyName: string,
    parameters: AccessPolicyEntity,
    options?: AccessPoliciesCreateOrUpdateOptionalParams
  ): Promise<AccessPoliciesCreateOrUpdateResponse>;
  /**
   * Deletes an existing access policy resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param accessPolicyName The Access Policy name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    accessPolicyName: string,
    options?: AccessPoliciesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates individual properties of an existing access policy resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param accessPolicyName The Access Policy name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    accessPolicyName: string,
    parameters: AccessPolicyEntity,
    options?: AccessPoliciesUpdateOptionalParams
  ): Promise<AccessPoliciesUpdateResponse>;
}