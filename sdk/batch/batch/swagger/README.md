# Azure Batch TypeScript Protocol Layer

> see <https://aka.ms/autorest>

## Configuration

```yaml
package-name: "@azure/batch"
title: BatchServiceClient
description: Batch Client
generate-metadata: true
clear-output-folder: true
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src
input-file: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/batch/data-plane/Microsoft.Batch/stable/2022-01-01.15.0/BatchService.json
add-credentials: true
credential-scopes: https://batch.core.windows.net//.default
package-version: 11.0.0-beta.1
v3: true
use-extension:
  "@autorest/typescript": "latest"
hide-client: true
```

## Customizations for Track 2 Generator

See the [AutoRest samples](https://github.com/Azure/autorest/tree/master/Samples/3b-custom-transformations)
for more about how we're customizing things.
