/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 */

import { isTokenCredential, TokenCredential } from "@azure/core-auth";
import { bearerTokenAuthenticationPolicy } from "@azure/core-rest-pipeline";
import { CommonClientOptions } from "@azure/core-client";
import { BatchClientCredential, createBatchClientCredentialPolicy } from "./credentials/batchClientCredential";
import {
  GeneratedClient,
  Account,
  CertificateOperations,
  ComputeNodeOperations,
  ComputeNodeExtension,
  File,
  Job,
  ApplicationOperations,
  JobScheduleOperations,
  PoolOperations,
  Task
} from "./generated";

export interface BatchServiceClientOptions extends CommonClientOptions { }

export class BatchServiceClient {
  batchUrl: string;
  private readonly client: GeneratedClient;

  application: ApplicationOperations;
  account: Account
  certificate: CertificateOperations;
  computeNode: ComputeNodeOperations;
  computeNodeExtension: ComputeNodeExtension;
  file: File;
  job: Job
  jobSchedule: JobScheduleOperations;
  pool: PoolOperations;
  task: Task;

  /**
   * Initializes a new instance of the BatchServiceClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param batchUrl The base URL for all Azure Batch service requests.
   * @param options The parameter options
   */
  constructor(
    credentials: TokenCredential | BatchClientCredential,
    batchUrl: string,
    options?: BatchServiceClientOptions
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (batchUrl === undefined) {
      throw new Error("'batchUrl' cannot be null");
    }

    this.batchUrl = batchUrl;
    this.client = new GeneratedClient(batchUrl, options);

    const authPolicy = isTokenCredential(credentials)
      ? bearerTokenAuthenticationPolicy({ credential: credentials, scopes: "https://batch.core.windows.net//.default" })
      : createBatchClientCredentialPolicy("batchClientCredentialPolicy", credentials);

    this.client.pipeline.addPolicy(authPolicy);

    this.application = this.client.applicationOperations;
    this.account = this.client.account;
    this.certificate = this.client.certificateOperations;
    this.computeNode = this.client.computeNodeOperations;
    this.computeNodeExtension = this.client.computeNodeExtension;
    this.file = this.client.file;
    this.job = this.client.job;
    this.jobSchedule = this.client.jobScheduleOperations;
    this.pool = this.client.poolOperations;
    this.task = this.client.task;
  }

}
