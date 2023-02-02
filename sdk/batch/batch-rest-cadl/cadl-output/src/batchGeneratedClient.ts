// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { BatchGeneratedClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class BatchGeneratedClient class.
 * @param endpoint type: string
 * @param credentials type: TokenCredential
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): BatchGeneratedClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2022-10-01.16.0";
  options = {
    ...options,
    credentials: {
      scopes: ["user_impersonation"],
    },
  };

  const userAgentInfo = `azsdk-js-batch-cadl-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as BatchGeneratedClient;

  return client;
}
