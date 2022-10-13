// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const BatchSharedKeyCredentialNotSupportedError = new Error("BatchSharedKeyCredential is not supported in the browser.");

export class BatchSharedKeyCredentials {
  /**
   * Only supported in Node.js
   */

  constructor() {
    throw BatchSharedKeyCredentialNotSupportedError;
  }
}
