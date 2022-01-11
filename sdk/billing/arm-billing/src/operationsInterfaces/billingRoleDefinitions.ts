/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  BillingRoleDefinition,
  BillingRoleDefinitionsListByBillingAccountOptionalParams,
  BillingRoleDefinitionsListByInvoiceSectionOptionalParams,
  BillingRoleDefinitionsListByBillingProfileOptionalParams,
  BillingRoleDefinitionsGetByBillingAccountOptionalParams,
  BillingRoleDefinitionsGetByBillingAccountResponse,
  BillingRoleDefinitionsGetByInvoiceSectionOptionalParams,
  BillingRoleDefinitionsGetByInvoiceSectionResponse,
  BillingRoleDefinitionsGetByBillingProfileOptionalParams,
  BillingRoleDefinitionsGetByBillingProfileResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BillingRoleDefinitions. */
export interface BillingRoleDefinitions {
  /**
   * Lists the role definitions for a billing account. The operation is supported for billing accounts
   * with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  listByBillingAccount(
    billingAccountName: string,
    options?: BillingRoleDefinitionsListByBillingAccountOptionalParams
  ): PagedAsyncIterableIterator<BillingRoleDefinition>;
  /**
   * Lists the role definitions for an invoice section. The operation is supported for billing accounts
   * with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRoleDefinitionsListByInvoiceSectionOptionalParams
  ): PagedAsyncIterableIterator<BillingRoleDefinition>;
  /**
   * Lists the role definitions for a billing profile. The operation is supported for billing accounts
   * with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRoleDefinitionsListByBillingProfileOptionalParams
  ): PagedAsyncIterableIterator<BillingRoleDefinition>;
  /**
   * Gets the definition for a role on a billing account. The operation is supported for billing accounts
   * with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param options The options parameters.
   */
  getByBillingAccount(
    billingAccountName: string,
    billingRoleDefinitionName: string,
    options?: BillingRoleDefinitionsGetByBillingAccountOptionalParams
  ): Promise<BillingRoleDefinitionsGetByBillingAccountResponse>;
  /**
   * Gets the definition for a role on an invoice section. The operation is supported only for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param options The options parameters.
   */
  getByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    billingRoleDefinitionName: string,
    options?: BillingRoleDefinitionsGetByInvoiceSectionOptionalParams
  ): Promise<BillingRoleDefinitionsGetByInvoiceSectionResponse>;
  /**
   * Gets the definition for a role on a billing profile. The operation is supported for billing accounts
   * with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param options The options parameters.
   */
  getByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    billingRoleDefinitionName: string,
    options?: BillingRoleDefinitionsGetByBillingProfileOptionalParams
  ): Promise<BillingRoleDefinitionsGetByBillingProfileResponse>;
}