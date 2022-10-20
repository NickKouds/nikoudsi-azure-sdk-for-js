// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/// <reference lib="esnext.asynciterable" />

import { BatchGeneratedClient } from "../../../src/generated/clientDefinitions";
import createClient from "../../../src/generated/batchGeneratedClient";
import {
  Recorder,
  RecorderEnvironmentSetup,
  env,
  isLiveMode,
  record,
} from "@azure-tools/test-recorder";
import { createXhrHttpClient, isNode } from "@azure/test-utils";

import { ClientOptions } from "@azure-rest/core-client";
import { ClientSecretCredential } from "@azure/identity";
import { Context } from "mocha";
import { BatchServiceClient, BatchSharedKeyCredentials } from "../../../src";

const replaceableVariables: { [k: string]: string } = {
  BATCH_ENDPOINT: "batch-url",
  AZURE_CLIENT_ID: "client-id",
  AZURE_CLIENT_SECRET: "client-secret",
  AZURE_TENANT_ID: "tenant-id",
};

export const useRLCShortcut = env.USE_RLC_SHORTCUT;

export const environmentSetup: RecorderEnvironmentSetup = {
  replaceableVariables,
  customizationsOnRecordings: [
    (recording: string): string =>
      recording.replace(/"access_token"\s?:\s?"[^"]*"/g, `"access_token":"access_token"`),
    // If we put ENDPOINT in replaceableVariables above, it will not capture
    // the endpoint string used with nock, which will be expanded to
    // https://<endpoint>:443/ and therefore will not match, so we have to do
    // this instead.
    (recording: string): string => {
      const replaced = recording.replace("endpoint:443", "endpoint");
      return replaced;
    },
  ],
  queryParametersToSkip: [],
};

export function generateClient(options?: ClientOptions): BatchServiceClient {
  const httpClient = isNode || isLiveMode() ? undefined : createXhrHttpClient();
  const credential = new ClientSecretCredential(
    env.AZURE_TENANT_ID,
    env.AZURE_CLIENT_ID,
    env.AZURE_CLIENT_SECRET,
    { httpClient }
  );

  return new BatchServiceClient(credential, env.AZURE_BATCH_ENDPOINT, { ...options });
  //return createClient(env.AZURE_BATCH_ENDPOINT, credential, { ...options });
}

export function generateSharedKeyClient(options?: ClientOptions): BatchServiceClient {
  const batchSharedKeyCred = new BatchSharedKeyCredentials(env.AZURE_BATCH_ACCOUNT, env.AZURE_BATCH_ACCESS_KEY);

  return new BatchServiceClient(batchSharedKeyCred, env.AZURE_BATCH_ENDPOINT);
}

/**
 * creates the recorder and reads the environment variables from the `.env` file.
 * Should be called first in the test suite to make sure environment variables are
 * read before they are being used.
 */
export function createRecorder(context: Context): Recorder {
  return record(context, environmentSetup);
}
