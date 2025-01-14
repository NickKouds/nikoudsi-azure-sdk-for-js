/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  AzureDevOpsConnector,
  MicrosoftSecurityDevOps
} from "@azure/arm-securitydevops";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates an Azure DevOps Connector.
 *
 * @summary Creates or updates an Azure DevOps Connector.
 * x-ms-original-file: specification/securitydevops/resource-manager/Microsoft.SecurityDevOps/preview/2022-09-01-preview/examples/AzureDevOpsConnectorCreateOrUpdate.json
 */
async function azureDevOpsConnectorCreateOrUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "westusrg";
  const azureDevOpsConnectorName = "testconnector";
  const azureDevOpsConnector: AzureDevOpsConnector = {
    location: "West US",
    properties: {
      authorization: { code: "00000000000000000000" },
      orgs: [
        {
          name: "testOrg",
          projects: [{ name: "testProject", repos: ["testRepo"] }]
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSecurityDevOps(credential, subscriptionId);
  const result = await client.azureDevOpsConnectorOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    azureDevOpsConnectorName,
    azureDevOpsConnector
  );
  console.log(result);
}

azureDevOpsConnectorCreateOrUpdate().catch(console.error);
