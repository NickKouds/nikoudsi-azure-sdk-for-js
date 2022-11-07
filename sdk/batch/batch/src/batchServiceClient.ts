/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 */

import { isTokenCredential, TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { BatchClientCredential } from "./credentials/batchClientCredential";
import { createBatchClientCredentialPolicy, createContentTypeAppendPolicy } from "./pipelinePolicies/policies"
import {
  BatchGeneratedClient,
  AccountOperations,
  CertificateOperations,
  ComputeNodeOperations,
  ComputeNodeExtensionOperations,
  FileOperations,
  JobOperations,
  ApplicationOperations,
  JobScheduleOperations,
  PoolOperations,
  TaskOperations,
  Routes
} from "./generated";
import createClient from "./generated/batchGeneratedClient";

export interface BatchServiceClientOptions extends ClientOptions { }

export class BatchServiceClient {
  batchUrl: string;
  private readonly client: BatchGeneratedClient;

  path: Routes
  application: ApplicationOperations
  account: AccountOperations
  certificate: CertificateOperations
  computeNode: ComputeNodeOperations
  computeNodeExtension: ComputeNodeExtensionOperations
  file: FileOperations
  job: JobOperations
  jobSchedule: JobScheduleOperations
  pool: PoolOperations
  task: TaskOperations

  /**
   * Initializes a new instance of the BatchServiceClient class.
   * @param credential Subscription credentials which uniquely identify client subscription.
   * @param batchUrl The base URL for all Azure Batch service requests.
   * @param options The parameter options
   */
  constructor(
    credential: TokenCredential | BatchClientCredential,
    batchUrl: string,
    options?: BatchServiceClientOptions
  ) {
    if (credential === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (batchUrl === undefined) {
      throw new Error("'batchUrl' cannot be null");
    }

    this.batchUrl = batchUrl;

    const appendContentTypePolicyName = "AppendContentTypePolicy";
    if (isTokenCredential(credential)) {
      this.client = createClient(batchUrl, credential, options);
    }
    else {
      this.client = createClient(batchUrl, undefined as any, options);
      const authPolicy = createBatchClientCredentialPolicy("batchClientCredentialPolicy", credential);
      this.client.pipeline.addPolicy(authPolicy, { afterPolicies: [appendContentTypePolicyName] });     //We can only sign the request once the correct content type is set
    }

    this.client.pipeline.addPolicy(createContentTypeAppendPolicy(appendContentTypePolicyName));

    this.application = this.client.application;
    this.account = this.client.account;
    this.certificate = this.client.certificate;
    this.computeNode = this.client.computeNode;
    this.computeNodeExtension = this.client.computeNodeExtension;
    this.file = this.client.file;
    this.job = this.client.job;
    this.jobSchedule = this.client.jobSchedule;
    this.pool = this.client.pool;
    this.task = this.client.task;

    this.path = this.client.path;
  }

}
