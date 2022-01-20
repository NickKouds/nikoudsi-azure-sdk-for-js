/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AlertRuleUnion,
  AlertRulesListOptionalParams,
  AlertRulesGetOptionalParams,
  AlertRulesGetResponse,
  AlertRulesCreateOrUpdateOptionalParams,
  AlertRulesCreateOrUpdateResponse,
  AlertRulesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AlertRules. */
export interface AlertRules {
  /**
   * Gets all alert rules.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: AlertRulesListOptionalParams
  ): PagedAsyncIterableIterator<AlertRuleUnion>;
  /**
   * Gets the alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    options?: AlertRulesGetOptionalParams
  ): Promise<AlertRulesGetResponse>;
  /**
   * Creates or updates the alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param alertRule The alert rule
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    alertRule: AlertRuleUnion,
    options?: AlertRulesCreateOrUpdateOptionalParams
  ): Promise<AlertRulesCreateOrUpdateResponse>;
  /**
   * Delete the alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    options?: AlertRulesDeleteOptionalParams
  ): Promise<void>;
}