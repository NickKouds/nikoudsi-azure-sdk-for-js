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

export interface RecordedBatchClient {
  batchClient: BatchServiceClient,
  recorder: Recorder
}

// const recorderEnvSetup: RecorderEnvironmentSetup = {
//   replaceableVariables: {
//     AZURE_BATCH_ENDPOINT: "batch_endpoint",
//     AZURE_CLIENT_ID: "azure_client_id",
//     AZURE_CLIENT_SECRET: "azure_client_secret",
//     AZURE_TENANT_ID: "azure_tenant_id",
//     AZURE_BATCH_ACCOUNT: "batch_account_name",
//     AZURE_BATCH_ACCESS_KEY: "batch_account_key"
//   },
//   customizationsOnRecordings: [
//     (recording: string): string =>
//       recording.replace(/"access_token"\s?:\s?"[^"]*"/g, `"access_token":"access_token"`),
//     // If we put ENDPOINT in replaceableVariables above, it will not capture
//     // the endpoint string used with nock, which will be expanded to
//     // https://<endpoint>:443/ and therefore will not match, so we have to do
//     // this instead.
//     (recording: string): string => {
//       const replaced = recording.replace("endpoint:443", "endpoint");
//       return replaced;
//     },
//   ],
//   queryParametersToSkip: []
// };

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: {
    AZURE_BATCH_ENDPOINT: "https://endpoint",
    AZURE_CLIENT_ID: "azure_client_id",
    AZURE_CLIENT_SECRET: "azure_client_secret",
    AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
    AZURE_BATCH_ACCOUNT: "batch_account",
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
