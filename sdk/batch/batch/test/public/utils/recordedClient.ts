import {
  Recorder,
  RecorderStartOptions,
  env,
  isLiveMode,
  assertEnvironmentVariable
} from "@azure-tools/test-recorder";

import { BatchServiceClient } from "../../../src";
import { BatchServiceClientOptions } from "../../../src/batchServiceClient";
import { BatchSharedKeyCredentials } from "../../../src/credentials/batchSharedKeyCredentials";
import { createTestCredential } from "@azure-tools/test-credential";
import { Test } from "mocha";

export const FAKE_PASSWORD = "fake_password_value";
const FAKE_AZURE_BATCH_ACCOUNT = "batch_account";
const FAKE_AZURE_BATCH_ENDPOINT = "https://endpoint";

export interface RecordedBatchClient {
  batchClient: BatchServiceClient,
  recorder: Recorder
}

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: {
    AZURE_BATCH_ENDPOINT: FAKE_AZURE_BATCH_ENDPOINT,
    AZURE_CLIENT_ID: "azure_client_id",
    AZURE_CLIENT_SECRET: "azure_client_secret",
    AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
    AZURE_BATCH_ACCOUNT: FAKE_AZURE_BATCH_ACCOUNT,
    AZURE_BATCH_ACCESS_KEY: "api_key"
  },
  sanitizerOptions: {
    bodyKeySanitizers: [
      {
        jsonPath: "$.userAccounts[0].password",
        value: FAKE_PASSWORD,
      },
      {
        jsonPath: "$.password",
        value: FAKE_PASSWORD
      },

    ],
    generalSanitizers: [{
      regex: true, target: `https://${FAKE_AZURE_BATCH_ACCOUNT}(.*)batch.azure.com`, value: FAKE_AZURE_BATCH_ENDPOINT
    }]
  },
};

export type AuthMethod = "APIKey" | "AAD" | "DummyAPIKey";

async function createRecorder(context: Test | undefined) {
  const recorder = new Recorder(context);
  await recorder.start(recorderOptions);
  return recorder;
}

export async function createClient(
  context: Test | undefined,
  authMethod: AuthMethod,
  options: BatchServiceClientOptions = {},
): Promise<RecordedBatchClient> {
  const recorder = await createRecorder(context);

  let credential;
  switch (authMethod) {
    case "APIKey": {
      credential = new BatchSharedKeyCredentials(
        env.AZURE_BATCH_ACCOUNT!,
        env.AZURE_BATCH_ACCESS_KEY!
      );
      break;
    }
    case "AAD": {
      credential = createTestCredential();
      break;
    }
    // case "DummyAPIKey": {
    //   credential = new BatchSharedKeyCredentials("whatever", "whatever");
    //   break;
    // }
    default: {
      throw Error(`Unsupported authentication method: ${authMethod}`);
    }
  }
  return {
    batchClient: new BatchServiceClient(credential,
      env.AZURE_BATCH_ENDPOINT! || "https://dummy.eastus.batch.azure.com",
      recorder.configureClientOptions({})),

    recorder: recorder

  }
    ;
}
