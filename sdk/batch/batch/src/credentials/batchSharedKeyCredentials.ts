/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

import {
  HttpMethods,
  HttpHeaders,
  PipelinePolicy,
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import { createHmac } from "crypto";
import url from "url-parse";
import { Buffer } from "buffer";
import { BatchClientCredential } from "./batchClientCredential";

/**
 * Creates a new BatchSharedKeyCredentials object.
 * @constructor
 * @param accountName The batch account name.
 * @param accountKey The batch account key.
 */
export class BatchSharedKeyCredentials implements BatchClientCredential {
  /**
   * The batch account name.
   */
  _accountName: string;
  /**
   * The batch account key.
   */
  _accountKey: string;

  constructor(accountName: string, accountKey: string) {
    if (!accountName || typeof accountName.valueOf() !== "string") {
      throw new Error("accountName must be a non empty string.");
    }

    if (!accountKey || typeof accountKey.valueOf() !== "string") {
      throw new Error("accountKey must be a non empty string.");
    }
    this._accountName = accountName;
    this._accountKey = accountKey;
  }

  /**
   * Signs a request with the Authentication header.
   *
   * @param {request} Authorization Pipeline Request.
   * @return {PipelineRequest} Pipeline request with signed authentication header
   */
  signRequest(request: PipelineRequest): PipelineRequest {
    // Help function to get header value, if header without value, append a newline
    function getvalueToAppend(value: HttpHeaders, headerName: string): string {
      if (!value || !value.get(headerName)) {
        return "\n";
      } else {
        return value.get(headerName) + "\n";
      }
    }

    // Help function to get content length
    function getContentLengthToAppend(
      value: HttpHeaders,
      method: HttpMethods,
      body: any
    ): string {
      if (!value || !value.get("Content-Length")) {
        // Get content length from body if available
        if (body) {
          return Buffer.byteLength(body) + "\n";
        }
        // For GET verb, do not add content-length
        if (method === "POST") {
          return "0\n";
        } else {
          return "\n";
        }
      } else {
        return value.get("Content-Length") + "\n";
      }
    }

    // Set Headers
    if (!request.headers.get("ocp-date")) {
      request.headers.set("ocp-date", new Date().toUTCString());
    }

    // Add verb and standard HTTP header as single line
    let stringToSign =
      request.method +
      "\n" +
      getvalueToAppend(request.headers, "Content-Encoding") +
      getvalueToAppend(request.headers, "Content-Language") +
      getContentLengthToAppend(request.headers, request.method, request.body) +
      getvalueToAppend(request.headers, "Content-MD5") +
      getvalueToAppend(request.headers, "Content-Type") +
      getvalueToAppend(request.headers, "Date") +
      getvalueToAppend(request.headers, "If-Modified-Since") +
      getvalueToAppend(request.headers, "If-Match") +
      getvalueToAppend(request.headers, "If-None-Match") +
      getvalueToAppend(request.headers, "If-Unmodified-Since") +
      getvalueToAppend(request.headers, "Range");

    // Add customize HTTP header
    stringToSign += this._getCanonicalizedHeaders(request);

    // Add path/query from uri
    stringToSign += this._getCanonicalizedResource(request);

    // Signed with sha256
    const key = Buffer.from(this._accountKey, "base64");
    const signature = createHmac("sha256", key).update(stringToSign, "utf8").digest("base64");

    // Add authrization header
    request.headers.set(
      "authorization",
      `SharedKey ${this._accountName}:${signature}`
    );

    return request;
  }

  /*
   * Constructs the Canonicalized Headers string.
   *
   * To construct the CanonicalizedHeaders portion of the signature string,
   * follow these steps: 1. Retrieve all headers for the resource that begin
   * with ocp-, including the ocp-date header. 2. Convert each HTTP header
   * name to lowercase. 3. Sort the headers lexicographically by header name,
   * in ascending order. Each header may appear only once in the
   * string. 4. Unfold the string by replacing any breaking white space with a
   * single space. 5. Trim any white space around the colon in the header. 6.
   * Finally, append a new line character to each canonicalized header in the
   * resulting list. Construct the CanonicalizedHeaders string by
   * concatenating all headers in this list into a single string.
   *
   * @param The WebResource object.
   * @return The canonicalized headers.
   */
  private _getCanonicalizedHeaders(request: PipelineRequest): string {
    // Build canonicalized headers
    let canonicalizedHeaders = "";
    if (request.headers) {
      const canonicalizedHeadersArray = [];

      // Retrieve all headers for begin with ocp-
      for (const header of request.headers) {
        if (header[0].indexOf("ocp-") === 0) {
          canonicalizedHeadersArray.push(header[0]);
        }
      }

      // Sort the header by header name
      canonicalizedHeadersArray.sort();
      for (const currentHeader of canonicalizedHeadersArray) {
        const value = request.headers.get(currentHeader);
        if (value) {
          // Make header value lower case and apend a new line for each header
          canonicalizedHeaders += currentHeader.toLowerCase() + ":" + value + "\n";
        }
      }
    }

    return canonicalizedHeaders;
  }

  /*
   * Retrieves the webresource's canonicalized resource string.
   * @param webResource The webresource to get the canonicalized resource string from.
   * @return The canonicalized resource string.
   */
  private _getCanonicalizedResource(request: PipelineRequest): string {
    let path = "/";
    const urlstring = url(request.url, true);
    if (urlstring.pathname) {
      path = urlstring.pathname;
    }

    let canonicalizedResource = "/" + this._accountName + path;

    // Get the raw query string values for signing
    const queryStringValues = urlstring.query;

    // Build the canonicalized resource by sorting the values by name.
    if (queryStringValues) {
      let paramNames: string[] = [];
      Object.keys(queryStringValues).forEach((n) => {
        return paramNames.push(n);
      });

      // All the queries sorted by query name
      paramNames = paramNames.sort();
      for (const name of paramNames) {
        canonicalizedResource += "\n" + name + ":" + queryStringValues[name];
      }
    }

    return canonicalizedResource;
  }
}
