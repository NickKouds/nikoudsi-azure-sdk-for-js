# Azure Batch TypeScript Protocol Layer

> see <https://aka.ms/autorest>

## Configuration

```yaml
package-name: "@azure/batch"
title: GeneratedClient
description: Batch Client
generate-metadata: true
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src/generated
input-file: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/batch/data-plane/Microsoft.Batch/stable/2022-01-01.15.0/BatchService.json
add-credentials: true
credential-scopes: https://batch.core.windows.net//.default
package-version: 11.0.0-beta.1
v3: true
use-extension:
  "@autorest/typescript": "latest"
rest-level-client: true
```

## Customizations for Track 2 Generator

See the [AutoRest samples](https://github.com/Azure/autorest/tree/master/Samples/3b-custom-transformations)
for more about how we're customizing things.
