// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { BatchGeneratedClient } from "./clientDefinitions";

export default function createClient(
  batchUrl: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): BatchGeneratedClient {
  const baseUrl = options.baseUrl ?? `${batchUrl}`;
  options.apiVersion = options.apiVersion ?? "2022-01-01.15.0";
  options = {
    ...options,
    credentials: {
      scopes: ["https://batch.core.windows.net//.default"]
    }
  };

  const userAgentInfo = `azsdk-js-batch-rest/11.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(baseUrl, credentials, options) as BatchGeneratedClient;

  return client;
}
