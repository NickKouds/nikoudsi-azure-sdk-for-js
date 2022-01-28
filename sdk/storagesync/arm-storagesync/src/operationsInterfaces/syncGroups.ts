/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SyncGroup,
  SyncGroupsListByStorageSyncServiceOptionalParams,
  SyncGroupCreateParameters,
  SyncGroupsCreateOptionalParams,
  SyncGroupsCreateResponse,
  SyncGroupsGetOptionalParams,
  SyncGroupsGetResponse,
  SyncGroupsDeleteOptionalParams,
  SyncGroupsDeleteResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SyncGroups. */
export interface SyncGroups {
  /**
   * Get a SyncGroup List.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  listByStorageSyncService(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: SyncGroupsListByStorageSyncServiceOptionalParams
  ): PagedAsyncIterableIterator<SyncGroup>;
  /**
   * Create a new SyncGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param parameters Sync Group Body
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    storageSyncServiceName: string,
    syncGroupName: string,
    parameters: SyncGroupCreateParameters,
    options?: SyncGroupsCreateOptionalParams
  ): Promise<SyncGroupsCreateResponse>;
  /**
   * Get a given SyncGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageSyncServiceName: string,
    syncGroupName: string,
    options?: SyncGroupsGetOptionalParams
  ): Promise<SyncGroupsGetResponse>;
  /**
   * Delete a given SyncGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    storageSyncServiceName: string,
    syncGroupName: string,
    options?: SyncGroupsDeleteOptionalParams
  ): Promise<SyncGroupsDeleteResponse>;
}