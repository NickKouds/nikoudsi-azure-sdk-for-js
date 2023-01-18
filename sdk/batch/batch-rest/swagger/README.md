# Azure Batch TypeScript Protocol Layer

> see <https://aka.ms/autorest>

## Configuration

```yaml
package-name: "@azure-rest/batch"
title: BatchGeneratedClient
description: Batch Client
generate-metadata: false
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src/generated
input-file: https://raw.githubusercontent.com/wiboris/azure-rest-api-specs/SwaggerRefactor/specification/batch/data-plane/Microsoft.Batch/stable/2022-12-01/BatchService.json
add-credentials: true
security: AADToken
security-scopes: https://batch.core.windows.net//.default
package-version: 1.0.0-beta.1
v3: true
use-extension:
  "@autorest/typescript": "6.0.0-rc.2"
rest-level-client: true
rlc-shortcut: true
hide-clients: true
```

## Customizations for Track 2 Generator

See the [AutoRest samples](https://github.com/Azure/autorest/tree/master/Samples/3b-custom-transformations)
for more about how we're customizing things.
