import {
  Recorder,
  RecorderStartOptions,
  env,
  isLiveMode,
  assertEnvironmentVariable
} from "@azure-tools/test-recorder";
// import { createXhrHttpClient, isNode } from "@azure/test-utils";

// import { ClientOptions } from "@azure-rest/core-client";
import { BatchServiceClient } from "../../../src";
import { BatchServiceClientOptions } from "../../../src/batchServiceClient";
import { BatchSharedKeyCredentials } from "../../../src/credentials/batchSharedKeyCredentials";
import { ClientSecretCredential, TokenCredential } from "@azure/identity";
import { Context, Test } from "mocha";
import { AdditionalPolicyConfig } from "@azure/core-client";

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
    AZURE_BATCH_ENDPOINT: "https://fakebatchaccount.westus.batch.azure.com",
    AZURE_CLIENT_ID: "fake_azure_client_id",
    AZURE_CLIENT_SECRET: "fake_azure_client_secret",
    AZURE_TENANT_ID: "fake_azure_tenant_id",
    AZURE_BATCH_ACCOUNT: "fake_batch_account_name",
    AZURE_BATCH_ACCESS_KEY: "fake_batch_account_key"
  },
  // sanitizerOptions: {
  //   bodySanitizers: [
  //     {
  //       target: encodeURIComponent(env.TABLES_URL ?? ""),
  //       value: encodeURIComponent(`https://fakeaccount.table.core.windows.net`),
  //     },
  //   ],
  // },
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

  let credential: TokenCredential | BatchSharedKeyCredentials;
  switch (authMethod) {
    case "APIKey": {
      credential = new BatchSharedKeyCredentials(
        env.AZURE_BATCH_ACCOUNT!,
        env.AZURE_BATCH_ACCESS_KEY!
      );
      break;
    }
    case "AAD": {
      credential = new ClientSecretCredential(
        env.AZURE_TENANT_ID!,
        env.AZURE_CLIENT_ID!,
        env.AZURE_CLIENT_SECRET!
      );
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
      env.AZURE_BATCH_ENDPOINT || "https://dummy.eastus.batch.azure.com",
      recorder.configureClientOptions({})),

    recorder: recorder

  }
    ;
}
