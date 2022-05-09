/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 */

import { isTokenCredential, TokenCredential } from "@azure/core-auth";
import { bearerTokenAuthenticationPolicy } from "@azure/core-rest-pipeline";
import { CommonClientOptions } from "@azure/core-client";
import { BatchSharedKeyCredentials, createBatchKeyCredentialPolicy } from "./batchSharedKeyCredentials";
import {
  GeneratedClient,
  Application,
  Account,
  CertificateOperations,
  ComputeNodeOperations,
  ComputeNodeExtension,
  File,
  Job,
  JobSchedule,
  Pool,
  Task
} from "./generated";

export interface BatchServiceClientOptions extends CommonClientOptions { }

export class BatchServiceClient {
  batchUrl: string;
  private readonly client: GeneratedClient;

  get application(): Application {
    return this.client.application;
  }

  get account(): Account {
    return this.client.account;
  }

  get certificate(): CertificateOperations {
    return this.client.certificateOperations;
  }

  get computeNode(): ComputeNodeOperations {
    return this.client.computeNodeOperations;
  }

  get computeNodeExtension(): ComputeNodeExtension {
    return this.client.computeNodeExtension;
  }

  get file(): File {
    return this.client.file;
  }

  get job(): Job {
    return this.client.job;
  }

  get jobSchedule(): JobSchedule {
    return this.client.jobSchedule;
  }

  get pool(): Pool {
    return this.client.pool;
  }

  get task(): Task {
    return this.client.task;
  }

  /**
   * Initializes a new instance of the BatchServiceClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param batchUrl The base URL for all Azure Batch service requests.
   * @param options The parameter options
   */
  constructor(
    credentials: TokenCredential | BatchSharedKeyCredentials,
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
      : createBatchKeyCredentialPolicy(credentials);

    this.client.pipeline.addPolicy(authPolicy);

  }

}
