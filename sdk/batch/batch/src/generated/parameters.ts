// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  BatchPool,
  BatchPoolUpdate,
  BatchPoolEnableAutoScaleParameters,
  BatchPoolEvaluateAutoScaleParameters,
  BatchPoolResizeParameters,
  NodeRemoveParameters,
  BatchJobUpdate,
  BatchJob,
  BatchJobDisableParameters,
  BatchJobTerminateParameters,
  Certificate,
  BatchJobScheduleUpdate,
  BatchJobSchedule,
  BatchTask,
  BatchTaskCollection,
  ComputeNodeUser,
  NodeUpdateUserParameters,
  NodeRebootParameters,
  NodeReimageParameters,
  NodeDisableSchedulingParameters,
  UploadBatchServiceLogsConfiguration
} from "./models";

export interface ApplicationListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ApplicationListQueryParamProperties {
  /** The maximum number of items to return in the response. A maximum of 1000 applications can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ApplicationListQueryParam {
  queryParameters?: ApplicationListQueryParamProperties;
}

export interface ApplicationListHeaderParam {
  headers: RawHttpHeadersInput & ApplicationListHeaders;
}

export type ApplicationListParameters = ApplicationListQueryParam &
  ApplicationListHeaderParam &
  RequestParameters;

export interface ApplicationGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ApplicationGetQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ApplicationGetQueryParam {
  queryParameters?: ApplicationGetQueryParamProperties;
}

export interface ApplicationGetHeaderParam {
  headers: RawHttpHeadersInput & ApplicationGetHeaders;
}

export type ApplicationGetParameters = ApplicationGetQueryParam &
  ApplicationGetHeaderParam &
  RequestParameters;

export interface PoolListUsageMetricsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface PoolListUsageMetricsQueryParamProperties {
  /** The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available. */
  starttime?: Date | string;
  /** The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available. */
  endtime?: Date | string;
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics. */
  $filter?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 results will be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolListUsageMetricsQueryParam {
  queryParameters?: PoolListUsageMetricsQueryParamProperties;
}

export interface PoolListUsageMetricsHeaderParam {
  headers: RawHttpHeadersInput & PoolListUsageMetricsHeaders;
}

export type PoolListUsageMetricsParameters = PoolListUsageMetricsQueryParam &
  PoolListUsageMetricsHeaderParam &
  RequestParameters;

export interface PoolGetAllLifetimeStatisticsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface PoolGetAllLifetimeStatisticsQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolGetAllLifetimeStatisticsQueryParam {
  queryParameters?: PoolGetAllLifetimeStatisticsQueryParamProperties;
}

export interface PoolGetAllLifetimeStatisticsHeaderParam {
  headers: RawHttpHeadersInput & PoolGetAllLifetimeStatisticsHeaders;
}

export type PoolGetAllLifetimeStatisticsParameters = PoolGetAllLifetimeStatisticsQueryParam &
  PoolGetAllLifetimeStatisticsHeaderParam &
  RequestParameters;

export interface PoolAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface PoolAddBodyParam {
  /** The Pool to be added. */
  body: BatchPool;
}

export interface PoolAddQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolAddQueryParam {
  queryParameters?: PoolAddQueryParamProperties;
}

export interface PoolAddHeaderParam {
  headers: RawHttpHeadersInput & PoolAddHeaders;
}

export interface PoolAddMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type PoolAddParameters = PoolAddQueryParam &
  PoolAddHeaderParam &
  PoolAddMediaTypesParam &
  PoolAddBodyParam &
  RequestParameters;

export interface PoolListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface PoolListQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools. */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 Pools can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolListQueryParam {
  queryParameters?: PoolListQueryParamProperties;
}

export interface PoolListHeaderParam {
  headers: RawHttpHeadersInput & PoolListHeaders;
}

export type PoolListParameters = PoolListQueryParam &
  PoolListHeaderParam &
  RequestParameters;

export interface PoolDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface PoolDeleteQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolDeleteQueryParam {
  queryParameters?: PoolDeleteQueryParamProperties;
}

export interface PoolDeleteHeaderParam {
  headers: RawHttpHeadersInput & PoolDeleteHeaders;
}

export type PoolDeleteParameters = PoolDeleteQueryParam &
  PoolDeleteHeaderParam &
  RequestParameters;

export interface PoolExistsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface PoolExistsQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolExistsQueryParam {
  queryParameters?: PoolExistsQueryParamProperties;
}

export interface PoolExistsHeaderParam {
  headers: RawHttpHeadersInput & PoolExistsHeaders;
}

export type PoolExistsParameters = PoolExistsQueryParam &
  PoolExistsHeaderParam &
  RequestParameters;

export interface PoolGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface PoolGetQueryParamProperties {
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolGetQueryParam {
  queryParameters?: PoolGetQueryParamProperties;
}

export interface PoolGetHeaderParam {
  headers: RawHttpHeadersInput & PoolGetHeaders;
}

export type PoolGetParameters = PoolGetQueryParam &
  PoolGetHeaderParam &
  RequestParameters;

export interface PoolPatchHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface PoolPatchBodyParam {
  /** The parameters for the request. */
  body: BatchPoolUpdate;
}

export interface PoolPatchQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolPatchQueryParam {
  queryParameters?: PoolPatchQueryParamProperties;
}

export interface PoolPatchHeaderParam {
  headers: RawHttpHeadersInput & PoolPatchHeaders;
}

export interface PoolPatchMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type PoolPatchParameters = PoolPatchQueryParam &
  PoolPatchHeaderParam &
  PoolPatchMediaTypesParam &
  PoolPatchBodyParam &
  RequestParameters;

export interface PoolDisableAutoScaleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface PoolDisableAutoScaleQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolDisableAutoScaleQueryParam {
  queryParameters?: PoolDisableAutoScaleQueryParamProperties;
}

export interface PoolDisableAutoScaleHeaderParam {
  headers: RawHttpHeadersInput & PoolDisableAutoScaleHeaders;
}

export type PoolDisableAutoScaleParameters = PoolDisableAutoScaleQueryParam &
  PoolDisableAutoScaleHeaderParam &
  RequestParameters;

export interface PoolEnableAutoScaleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface PoolEnableAutoScaleBodyParam {
  /** The parameters for the request. */
  body: BatchPoolEnableAutoScaleParameters;
}

export interface PoolEnableAutoScaleQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolEnableAutoScaleQueryParam {
  queryParameters?: PoolEnableAutoScaleQueryParamProperties;
}

export interface PoolEnableAutoScaleHeaderParam {
  headers: RawHttpHeadersInput & PoolEnableAutoScaleHeaders;
}

export interface PoolEnableAutoScaleMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type PoolEnableAutoScaleParameters = PoolEnableAutoScaleQueryParam &
  PoolEnableAutoScaleHeaderParam &
  PoolEnableAutoScaleMediaTypesParam &
  PoolEnableAutoScaleBodyParam &
  RequestParameters;

export interface PoolEvaluateAutoScaleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface PoolEvaluateAutoScaleBodyParam {
  /** The parameters for the request. */
  body: BatchPoolEvaluateAutoScaleParameters;
}

export interface PoolEvaluateAutoScaleQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolEvaluateAutoScaleQueryParam {
  queryParameters?: PoolEvaluateAutoScaleQueryParamProperties;
}

export interface PoolEvaluateAutoScaleHeaderParam {
  headers: RawHttpHeadersInput & PoolEvaluateAutoScaleHeaders;
}

export interface PoolEvaluateAutoScaleMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type PoolEvaluateAutoScaleParameters = PoolEvaluateAutoScaleQueryParam &
  PoolEvaluateAutoScaleHeaderParam &
  PoolEvaluateAutoScaleMediaTypesParam &
  PoolEvaluateAutoScaleBodyParam &
  RequestParameters;

export interface PoolResizeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface PoolResizeBodyParam {
  /** The parameters for the request. */
  body: BatchPoolResizeParameters;
}

export interface PoolResizeQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolResizeQueryParam {
  queryParameters?: PoolResizeQueryParamProperties;
}

export interface PoolResizeHeaderParam {
  headers: RawHttpHeadersInput & PoolResizeHeaders;
}

export interface PoolResizeMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type PoolResizeParameters = PoolResizeQueryParam &
  PoolResizeHeaderParam &
  PoolResizeMediaTypesParam &
  PoolResizeBodyParam &
  RequestParameters;

export interface PoolStopResizeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface PoolStopResizeQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolStopResizeQueryParam {
  queryParameters?: PoolStopResizeQueryParamProperties;
}

export interface PoolStopResizeHeaderParam {
  headers: RawHttpHeadersInput & PoolStopResizeHeaders;
}

export type PoolStopResizeParameters = PoolStopResizeQueryParam &
  PoolStopResizeHeaderParam &
  RequestParameters;

export interface PoolUpdatePropertiesHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface PoolUpdatePropertiesBodyParam {
  /** The parameters for the request. */
  body: BatchPool;
}

export interface PoolUpdatePropertiesQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolUpdatePropertiesQueryParam {
  queryParameters?: PoolUpdatePropertiesQueryParamProperties;
}

export interface PoolUpdatePropertiesHeaderParam {
  headers: RawHttpHeadersInput & PoolUpdatePropertiesHeaders;
}

export interface PoolUpdatePropertiesMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type PoolUpdatePropertiesParameters = PoolUpdatePropertiesQueryParam &
  PoolUpdatePropertiesHeaderParam &
  PoolUpdatePropertiesMediaTypesParam &
  PoolUpdatePropertiesBodyParam &
  RequestParameters;

export interface PoolRemoveNodesHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface PoolRemoveNodesBodyParam {
  /** The parameters for the request. */
  body: NodeRemoveParameters;
}

export interface PoolRemoveNodesQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PoolRemoveNodesQueryParam {
  queryParameters?: PoolRemoveNodesQueryParamProperties;
}

export interface PoolRemoveNodesHeaderParam {
  headers: RawHttpHeadersInput & PoolRemoveNodesHeaders;
}

export interface PoolRemoveNodesMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type PoolRemoveNodesParameters = PoolRemoveNodesQueryParam &
  PoolRemoveNodesHeaderParam &
  PoolRemoveNodesMediaTypesParam &
  PoolRemoveNodesBodyParam &
  RequestParameters;

export interface AccountListSupportedImagesHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface AccountListSupportedImagesQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images. */
  $filter?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 results will be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface AccountListSupportedImagesQueryParam {
  queryParameters?: AccountListSupportedImagesQueryParamProperties;
}

export interface AccountListSupportedImagesHeaderParam {
  headers: RawHttpHeadersInput & AccountListSupportedImagesHeaders;
}

export type AccountListSupportedImagesParameters = AccountListSupportedImagesQueryParam &
  AccountListSupportedImagesHeaderParam &
  RequestParameters;

export interface AccountListPoolNodeCountsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface AccountListPoolNodeCountsQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch. */
  $filter?: string;
  /** The maximum number of items to return in the response. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface AccountListPoolNodeCountsQueryParam {
  queryParameters?: AccountListPoolNodeCountsQueryParamProperties;
}

export interface AccountListPoolNodeCountsHeaderParam {
  headers: RawHttpHeadersInput & AccountListPoolNodeCountsHeaders;
}

export type AccountListPoolNodeCountsParameters = AccountListPoolNodeCountsQueryParam &
  AccountListPoolNodeCountsHeaderParam &
  RequestParameters;

export interface JobGetAllLifetimeStatisticsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface JobGetAllLifetimeStatisticsQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobGetAllLifetimeStatisticsQueryParam {
  queryParameters?: JobGetAllLifetimeStatisticsQueryParamProperties;
}

export interface JobGetAllLifetimeStatisticsHeaderParam {
  headers: RawHttpHeadersInput & JobGetAllLifetimeStatisticsHeaders;
}

export type JobGetAllLifetimeStatisticsParameters = JobGetAllLifetimeStatisticsQueryParam &
  JobGetAllLifetimeStatisticsHeaderParam &
  RequestParameters;

export interface JobDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobDeleteQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobDeleteQueryParam {
  queryParameters?: JobDeleteQueryParamProperties;
}

export interface JobDeleteHeaderParam {
  headers: RawHttpHeadersInput & JobDeleteHeaders;
}

export type JobDeleteParameters = JobDeleteQueryParam &
  JobDeleteHeaderParam &
  RequestParameters;

export interface JobGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobGetQueryParamProperties {
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobGetQueryParam {
  queryParameters?: JobGetQueryParamProperties;
}

export interface JobGetHeaderParam {
  headers: RawHttpHeadersInput & JobGetHeaders;
}

export type JobGetParameters = JobGetQueryParam &
  JobGetHeaderParam &
  RequestParameters;

export interface JobPatchHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobPatchBodyParam {
  /** The parameters for the request. */
  body: BatchJobUpdate;
}

export interface JobPatchQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobPatchQueryParam {
  queryParameters?: JobPatchQueryParamProperties;
}

export interface JobPatchHeaderParam {
  headers: RawHttpHeadersInput & JobPatchHeaders;
}

export interface JobPatchMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type JobPatchParameters = JobPatchQueryParam &
  JobPatchHeaderParam &
  JobPatchMediaTypesParam &
  JobPatchBodyParam &
  RequestParameters;

export interface JobUpdateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobUpdateBodyParam {
  /** The parameters for the request. */
  body: BatchJob;
}

export interface JobUpdateQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobUpdateQueryParam {
  queryParameters?: JobUpdateQueryParamProperties;
}

export interface JobUpdateHeaderParam {
  headers: RawHttpHeadersInput & JobUpdateHeaders;
}

export interface JobUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type JobUpdateParameters = JobUpdateQueryParam &
  JobUpdateHeaderParam &
  JobUpdateMediaTypesParam &
  JobUpdateBodyParam &
  RequestParameters;

export interface JobDisableHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobDisableBodyParam {
  /** The parameters for the request. */
  body: BatchJobDisableParameters;
}

export interface JobDisableQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobDisableQueryParam {
  queryParameters?: JobDisableQueryParamProperties;
}

export interface JobDisableHeaderParam {
  headers: RawHttpHeadersInput & JobDisableHeaders;
}

export interface JobDisableMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type JobDisableParameters = JobDisableQueryParam &
  JobDisableHeaderParam &
  JobDisableMediaTypesParam &
  JobDisableBodyParam &
  RequestParameters;

export interface JobEnableHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobEnableQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobEnableQueryParam {
  queryParameters?: JobEnableQueryParamProperties;
}

export interface JobEnableHeaderParam {
  headers: RawHttpHeadersInput & JobEnableHeaders;
}

export type JobEnableParameters = JobEnableQueryParam &
  JobEnableHeaderParam &
  RequestParameters;

export interface JobTerminateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobTerminateBodyParam {
  /** The parameters for the request. */
  body?: BatchJobTerminateParameters;
}

export interface JobTerminateQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobTerminateQueryParam {
  queryParameters?: JobTerminateQueryParamProperties;
}

export interface JobTerminateHeaderParam {
  headers: RawHttpHeadersInput & JobTerminateHeaders;
}

export interface JobTerminateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type JobTerminateParameters = JobTerminateQueryParam &
  JobTerminateHeaderParam &
  JobTerminateMediaTypesParam &
  JobTerminateBodyParam &
  RequestParameters;

export interface JobAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface JobAddBodyParam {
  /** The Job to be added. */
  body: BatchJob;
}

export interface JobAddQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobAddQueryParam {
  queryParameters?: JobAddQueryParamProperties;
}

export interface JobAddHeaderParam {
  headers: RawHttpHeadersInput & JobAddHeaders;
}

export interface JobAddMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type JobAddParameters = JobAddQueryParam &
  JobAddHeaderParam &
  JobAddMediaTypesParam &
  JobAddBodyParam &
  RequestParameters;

export interface JobListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface JobListQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs. */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 Jobs can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobListQueryParam {
  queryParameters?: JobListQueryParamProperties;
}

export interface JobListHeaderParam {
  headers: RawHttpHeadersInput & JobListHeaders;
}

export type JobListParameters = JobListQueryParam &
  JobListHeaderParam &
  RequestParameters;

export interface JobListFromJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface JobListFromJobScheduleQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule. */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 Jobs can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobListFromJobScheduleQueryParam {
  queryParameters?: JobListFromJobScheduleQueryParamProperties;
}

export interface JobListFromJobScheduleHeaderParam {
  headers: RawHttpHeadersInput & JobListFromJobScheduleHeaders;
}

export type JobListFromJobScheduleParameters = JobListFromJobScheduleQueryParam &
  JobListFromJobScheduleHeaderParam &
  RequestParameters;

export interface JobListPreparationAndReleaseTaskStatusHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface JobListPreparationAndReleaseTaskStatusQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status. */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 Tasks can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobListPreparationAndReleaseTaskStatusQueryParam {
  queryParameters?: JobListPreparationAndReleaseTaskStatusQueryParamProperties;
}

export interface JobListPreparationAndReleaseTaskStatusHeaderParam {
  headers: RawHttpHeadersInput & JobListPreparationAndReleaseTaskStatusHeaders;
}

export type JobListPreparationAndReleaseTaskStatusParameters = JobListPreparationAndReleaseTaskStatusQueryParam &
  JobListPreparationAndReleaseTaskStatusHeaderParam &
  RequestParameters;

export interface JobGetTaskCountsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface JobGetTaskCountsQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobGetTaskCountsQueryParam {
  queryParameters?: JobGetTaskCountsQueryParamProperties;
}

export interface JobGetTaskCountsHeaderParam {
  headers: RawHttpHeadersInput & JobGetTaskCountsHeaders;
}

export type JobGetTaskCountsParameters = JobGetTaskCountsQueryParam &
  JobGetTaskCountsHeaderParam &
  RequestParameters;

export interface CertificateAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface CertificateAddBodyParam {
  /** The Certificate to be added. */
  body: Certificate;
}

export interface CertificateAddQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface CertificateAddQueryParam {
  queryParameters?: CertificateAddQueryParamProperties;
}

export interface CertificateAddHeaderParam {
  headers: RawHttpHeadersInput & CertificateAddHeaders;
}

export interface CertificateAddMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type CertificateAddParameters = CertificateAddQueryParam &
  CertificateAddHeaderParam &
  CertificateAddMediaTypesParam &
  CertificateAddBodyParam &
  RequestParameters;

export interface CertificateListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface CertificateListQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates. */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 Certificates can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface CertificateListQueryParam {
  queryParameters?: CertificateListQueryParamProperties;
}

export interface CertificateListHeaderParam {
  headers: RawHttpHeadersInput & CertificateListHeaders;
}

export type CertificateListParameters = CertificateListQueryParam &
  CertificateListHeaderParam &
  RequestParameters;

export interface CertificateCancelDeletionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface CertificateCancelDeletionQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface CertificateCancelDeletionQueryParam {
  queryParameters?: CertificateCancelDeletionQueryParamProperties;
}

export interface CertificateCancelDeletionHeaderParam {
  headers: RawHttpHeadersInput & CertificateCancelDeletionHeaders;
}

export type CertificateCancelDeletionParameters = CertificateCancelDeletionQueryParam &
  CertificateCancelDeletionHeaderParam &
  RequestParameters;

export interface CertificateDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface CertificateDeleteQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface CertificateDeleteQueryParam {
  queryParameters?: CertificateDeleteQueryParamProperties;
}

export interface CertificateDeleteHeaderParam {
  headers: RawHttpHeadersInput & CertificateDeleteHeaders;
}

export type CertificateDeleteParameters = CertificateDeleteQueryParam &
  CertificateDeleteHeaderParam &
  RequestParameters;

export interface CertificateGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface CertificateGetQueryParamProperties {
  /** An OData $select clause. */
  $select?: string;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface CertificateGetQueryParam {
  queryParameters?: CertificateGetQueryParamProperties;
}

export interface CertificateGetHeaderParam {
  headers: RawHttpHeadersInput & CertificateGetHeaders;
}

export type CertificateGetParameters = CertificateGetQueryParam &
  CertificateGetHeaderParam &
  RequestParameters;

export interface FileDeleteFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface FileDeleteFromTaskQueryParamProperties {
  /** Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail. */
  recursive?: boolean;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface FileDeleteFromTaskQueryParam {
  queryParameters?: FileDeleteFromTaskQueryParamProperties;
}

export interface FileDeleteFromTaskHeaderParam {
  headers: RawHttpHeadersInput & FileDeleteFromTaskHeaders;
}

export type FileDeleteFromTaskParameters = FileDeleteFromTaskQueryParam &
  FileDeleteFromTaskHeaderParam &
  RequestParameters;

export interface FileGetFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** The byte range to be retrieved. The default is to retrieve the entire file. The format is bytes=startRange-endRange. */
  "ocp-range"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface FileGetFromTaskQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface FileGetFromTaskQueryParam {
  queryParameters?: FileGetFromTaskQueryParamProperties;
}

export interface FileGetFromTaskHeaderParam {
  headers: RawHttpHeadersInput & FileGetFromTaskHeaders;
}

export type FileGetFromTaskParameters = FileGetFromTaskQueryParam &
  FileGetFromTaskHeaderParam &
  RequestParameters;

export interface FileGetPropertiesFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface FileGetPropertiesFromTaskQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface FileGetPropertiesFromTaskQueryParam {
  queryParameters?: FileGetPropertiesFromTaskQueryParamProperties;
}

export interface FileGetPropertiesFromTaskHeaderParam {
  headers: RawHttpHeadersInput & FileGetPropertiesFromTaskHeaders;
}

export type FileGetPropertiesFromTaskParameters = FileGetPropertiesFromTaskQueryParam &
  FileGetPropertiesFromTaskHeaderParam &
  RequestParameters;

export interface FileDeleteFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface FileDeleteFromComputeNodeQueryParamProperties {
  /** Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail. */
  recursive?: boolean;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface FileDeleteFromComputeNodeQueryParam {
  queryParameters?: FileDeleteFromComputeNodeQueryParamProperties;
}

export interface FileDeleteFromComputeNodeHeaderParam {
  headers: RawHttpHeadersInput & FileDeleteFromComputeNodeHeaders;
}

export type FileDeleteFromComputeNodeParameters = FileDeleteFromComputeNodeQueryParam &
  FileDeleteFromComputeNodeHeaderParam &
  RequestParameters;

export interface FileGetFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** The byte range to be retrieved. The default is to retrieve the entire file. The format is bytes=startRange-endRange. */
  "ocp-range"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface FileGetFromComputeNodeQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface FileGetFromComputeNodeQueryParam {
  queryParameters?: FileGetFromComputeNodeQueryParamProperties;
}

export interface FileGetFromComputeNodeHeaderParam {
  headers: RawHttpHeadersInput & FileGetFromComputeNodeHeaders;
}

export type FileGetFromComputeNodeParameters = FileGetFromComputeNodeQueryParam &
  FileGetFromComputeNodeHeaderParam &
  RequestParameters;

export interface FileGetPropertiesFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface FileGetPropertiesFromComputeNodeQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface FileGetPropertiesFromComputeNodeQueryParam {
  queryParameters?: FileGetPropertiesFromComputeNodeQueryParamProperties;
}

export interface FileGetPropertiesFromComputeNodeHeaderParam {
  headers: RawHttpHeadersInput & FileGetPropertiesFromComputeNodeHeaders;
}

export type FileGetPropertiesFromComputeNodeParameters = FileGetPropertiesFromComputeNodeQueryParam &
  FileGetPropertiesFromComputeNodeHeaderParam &
  RequestParameters;

export interface FileListFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface FileListFromTaskQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files. */
  $filter?: string;
  /** Whether to list children of the Task directory. This parameter can be used in combination with the filter parameter to list specific type of files. */
  recursive?: boolean;
  /** The maximum number of items to return in the response. A maximum of 1000 files can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface FileListFromTaskQueryParam {
  queryParameters?: FileListFromTaskQueryParamProperties;
}

export interface FileListFromTaskHeaderParam {
  headers: RawHttpHeadersInput & FileListFromTaskHeaders;
}

export type FileListFromTaskParameters = FileListFromTaskQueryParam &
  FileListFromTaskHeaderParam &
  RequestParameters;

export interface FileListFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface FileListFromComputeNodeQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files. */
  $filter?: string;
  /** Whether to list children of a directory. */
  recursive?: boolean;
  /** The maximum number of items to return in the response. A maximum of 1000 files can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface FileListFromComputeNodeQueryParam {
  queryParameters?: FileListFromComputeNodeQueryParamProperties;
}

export interface FileListFromComputeNodeHeaderParam {
  headers: RawHttpHeadersInput & FileListFromComputeNodeHeaders;
}

export type FileListFromComputeNodeParameters = FileListFromComputeNodeQueryParam &
  FileListFromComputeNodeHeaderParam &
  RequestParameters;

export interface JobScheduleExistsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobScheduleExistsQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobScheduleExistsQueryParam {
  queryParameters?: JobScheduleExistsQueryParamProperties;
}

export interface JobScheduleExistsHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleExistsHeaders;
}

export type JobScheduleExistsParameters = JobScheduleExistsQueryParam &
  JobScheduleExistsHeaderParam &
  RequestParameters;

export interface JobScheduleDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobScheduleDeleteQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobScheduleDeleteQueryParam {
  queryParameters?: JobScheduleDeleteQueryParamProperties;
}

export interface JobScheduleDeleteHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleDeleteHeaders;
}

export type JobScheduleDeleteParameters = JobScheduleDeleteQueryParam &
  JobScheduleDeleteHeaderParam &
  RequestParameters;

export interface JobScheduleGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobScheduleGetQueryParamProperties {
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobScheduleGetQueryParam {
  queryParameters?: JobScheduleGetQueryParamProperties;
}

export interface JobScheduleGetHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleGetHeaders;
}

export type JobScheduleGetParameters = JobScheduleGetQueryParam &
  JobScheduleGetHeaderParam &
  RequestParameters;

export interface JobSchedulePatchHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobSchedulePatchBodyParam {
  /** The parameters for the request. */
  body: BatchJobScheduleUpdate;
}

export interface JobSchedulePatchQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobSchedulePatchQueryParam {
  queryParameters?: JobSchedulePatchQueryParamProperties;
}

export interface JobSchedulePatchHeaderParam {
  headers: RawHttpHeadersInput & JobSchedulePatchHeaders;
}

export interface JobSchedulePatchMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type JobSchedulePatchParameters = JobSchedulePatchQueryParam &
  JobSchedulePatchHeaderParam &
  JobSchedulePatchMediaTypesParam &
  JobSchedulePatchBodyParam &
  RequestParameters;

export interface JobScheduleUpdateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobScheduleUpdateBodyParam {
  /** The parameters for the request. */
  body: BatchJobSchedule;
}

export interface JobScheduleUpdateQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobScheduleUpdateQueryParam {
  queryParameters?: JobScheduleUpdateQueryParamProperties;
}

export interface JobScheduleUpdateHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleUpdateHeaders;
}

export interface JobScheduleUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type JobScheduleUpdateParameters = JobScheduleUpdateQueryParam &
  JobScheduleUpdateHeaderParam &
  JobScheduleUpdateMediaTypesParam &
  JobScheduleUpdateBodyParam &
  RequestParameters;

export interface JobScheduleDisableHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobScheduleDisableQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobScheduleDisableQueryParam {
  queryParameters?: JobScheduleDisableQueryParamProperties;
}

export interface JobScheduleDisableHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleDisableHeaders;
}

export type JobScheduleDisableParameters = JobScheduleDisableQueryParam &
  JobScheduleDisableHeaderParam &
  RequestParameters;

export interface JobScheduleEnableHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobScheduleEnableQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobScheduleEnableQueryParam {
  queryParameters?: JobScheduleEnableQueryParamProperties;
}

export interface JobScheduleEnableHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleEnableHeaders;
}

export type JobScheduleEnableParameters = JobScheduleEnableQueryParam &
  JobScheduleEnableHeaderParam &
  RequestParameters;

export interface JobScheduleTerminateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface JobScheduleTerminateQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobScheduleTerminateQueryParam {
  queryParameters?: JobScheduleTerminateQueryParamProperties;
}

export interface JobScheduleTerminateHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleTerminateHeaders;
}

export type JobScheduleTerminateParameters = JobScheduleTerminateQueryParam &
  JobScheduleTerminateHeaderParam &
  RequestParameters;

export interface JobScheduleAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface JobScheduleAddBodyParam {
  /** The Job Schedule to be added. */
  body: BatchJobSchedule;
}

export interface JobScheduleAddQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobScheduleAddQueryParam {
  queryParameters?: JobScheduleAddQueryParamProperties;
}

export interface JobScheduleAddHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleAddHeaders;
}

export interface JobScheduleAddMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type JobScheduleAddParameters = JobScheduleAddQueryParam &
  JobScheduleAddHeaderParam &
  JobScheduleAddMediaTypesParam &
  JobScheduleAddBodyParam &
  RequestParameters;

export interface JobScheduleListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface JobScheduleListQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules. */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 Job Schedules can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface JobScheduleListQueryParam {
  queryParameters?: JobScheduleListQueryParamProperties;
}

export interface JobScheduleListHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleListHeaders;
}

export type JobScheduleListParameters = JobScheduleListQueryParam &
  JobScheduleListHeaderParam &
  RequestParameters;

export interface TaskAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface TaskAddBodyParam {
  /** The Task to be added. */
  body: BatchTask;
}

export interface TaskAddQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface TaskAddQueryParam {
  queryParameters?: TaskAddQueryParamProperties;
}

export interface TaskAddHeaderParam {
  headers: RawHttpHeadersInput & TaskAddHeaders;
}

export interface TaskAddMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type TaskAddParameters = TaskAddQueryParam &
  TaskAddHeaderParam &
  TaskAddMediaTypesParam &
  TaskAddBodyParam &
  RequestParameters;

export interface TaskListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface TaskListQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks. */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 Tasks can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface TaskListQueryParam {
  queryParameters?: TaskListQueryParamProperties;
}

export interface TaskListHeaderParam {
  headers: RawHttpHeadersInput & TaskListHeaders;
}

export type TaskListParameters = TaskListQueryParam &
  TaskListHeaderParam &
  RequestParameters;

export interface TaskAddCollectionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface TaskAddCollectionBodyParam {
  /** The Tasks to be added. */
  body: BatchTaskCollection;
}

export interface TaskAddCollectionQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface TaskAddCollectionQueryParam {
  queryParameters?: TaskAddCollectionQueryParamProperties;
}

export interface TaskAddCollectionHeaderParam {
  headers: RawHttpHeadersInput & TaskAddCollectionHeaders;
}

export interface TaskAddCollectionMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type TaskAddCollectionParameters = TaskAddCollectionQueryParam &
  TaskAddCollectionHeaderParam &
  TaskAddCollectionMediaTypesParam &
  TaskAddCollectionBodyParam &
  RequestParameters;

export interface TaskDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface TaskDeleteQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface TaskDeleteQueryParam {
  queryParameters?: TaskDeleteQueryParamProperties;
}

export interface TaskDeleteHeaderParam {
  headers: RawHttpHeadersInput & TaskDeleteHeaders;
}

export type TaskDeleteParameters = TaskDeleteQueryParam &
  TaskDeleteHeaderParam &
  RequestParameters;

export interface TaskGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface TaskGetQueryParamProperties {
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface TaskGetQueryParam {
  queryParameters?: TaskGetQueryParamProperties;
}

export interface TaskGetHeaderParam {
  headers: RawHttpHeadersInput & TaskGetHeaders;
}

export type TaskGetParameters = TaskGetQueryParam &
  TaskGetHeaderParam &
  RequestParameters;

export interface TaskUpdateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface TaskUpdateBodyParam {
  /** The parameters for the request. */
  body: BatchTask;
}

export interface TaskUpdateQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface TaskUpdateQueryParam {
  queryParameters?: TaskUpdateQueryParamProperties;
}

export interface TaskUpdateHeaderParam {
  headers: RawHttpHeadersInput & TaskUpdateHeaders;
}

export interface TaskUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type TaskUpdateParameters = TaskUpdateQueryParam &
  TaskUpdateHeaderParam &
  TaskUpdateMediaTypesParam &
  TaskUpdateBodyParam &
  RequestParameters;

export interface TaskListSubtasksHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface TaskListSubtasksQueryParamProperties {
  /** An OData $select clause. */
  $select?: string;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface TaskListSubtasksQueryParam {
  queryParameters?: TaskListSubtasksQueryParamProperties;
}

export interface TaskListSubtasksHeaderParam {
  headers: RawHttpHeadersInput & TaskListSubtasksHeaders;
}

export type TaskListSubtasksParameters = TaskListSubtasksQueryParam &
  TaskListSubtasksHeaderParam &
  RequestParameters;

export interface TaskTerminateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface TaskTerminateQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface TaskTerminateQueryParam {
  queryParameters?: TaskTerminateQueryParamProperties;
}

export interface TaskTerminateHeaderParam {
  headers: RawHttpHeadersInput & TaskTerminateHeaders;
}

export type TaskTerminateParameters = TaskTerminateQueryParam &
  TaskTerminateHeaderParam &
  RequestParameters;

export interface TaskReactivateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
  "If-Match"?: string;
  /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
  "If-None-Match"?: string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
  "If-Modified-Since"?: Date | string;
  /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
  "If-Unmodified-Since"?: Date | string;
}

export interface TaskReactivateQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface TaskReactivateQueryParam {
  queryParameters?: TaskReactivateQueryParamProperties;
}

export interface TaskReactivateHeaderParam {
  headers: RawHttpHeadersInput & TaskReactivateHeaders;
}

export type TaskReactivateParameters = TaskReactivateQueryParam &
  TaskReactivateHeaderParam &
  RequestParameters;

export interface ComputeNodeAddUserHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeAddUserBodyParam {
  /** The user Account to be created. */
  body: ComputeNodeUser;
}

export interface ComputeNodeAddUserQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeAddUserQueryParam {
  queryParameters?: ComputeNodeAddUserQueryParamProperties;
}

export interface ComputeNodeAddUserHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeAddUserHeaders;
}

export interface ComputeNodeAddUserMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type ComputeNodeAddUserParameters = ComputeNodeAddUserQueryParam &
  ComputeNodeAddUserHeaderParam &
  ComputeNodeAddUserMediaTypesParam &
  ComputeNodeAddUserBodyParam &
  RequestParameters;

export interface ComputeNodeDeleteUserHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeDeleteUserQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeDeleteUserQueryParam {
  queryParameters?: ComputeNodeDeleteUserQueryParamProperties;
}

export interface ComputeNodeDeleteUserHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeDeleteUserHeaders;
}

export type ComputeNodeDeleteUserParameters = ComputeNodeDeleteUserQueryParam &
  ComputeNodeDeleteUserHeaderParam &
  RequestParameters;

export interface ComputeNodeUpdateUserHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeUpdateUserBodyParam {
  /** The parameters for the request. */
  body: NodeUpdateUserParameters;
}

export interface ComputeNodeUpdateUserQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeUpdateUserQueryParam {
  queryParameters?: ComputeNodeUpdateUserQueryParamProperties;
}

export interface ComputeNodeUpdateUserHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeUpdateUserHeaders;
}

export interface ComputeNodeUpdateUserMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type ComputeNodeUpdateUserParameters = ComputeNodeUpdateUserQueryParam &
  ComputeNodeUpdateUserHeaderParam &
  ComputeNodeUpdateUserMediaTypesParam &
  ComputeNodeUpdateUserBodyParam &
  RequestParameters;

export interface ComputeNodeGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeGetQueryParamProperties {
  /** An OData $select clause. */
  $select?: string;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeGetQueryParam {
  queryParameters?: ComputeNodeGetQueryParamProperties;
}

export interface ComputeNodeGetHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeGetHeaders;
}

export type ComputeNodeGetParameters = ComputeNodeGetQueryParam &
  ComputeNodeGetHeaderParam &
  RequestParameters;

export interface ComputeNodeRebootHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeRebootBodyParam {
  /** The parameters for the request. */
  body?: NodeRebootParameters;
}

export interface ComputeNodeRebootQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeRebootQueryParam {
  queryParameters?: ComputeNodeRebootQueryParamProperties;
}

export interface ComputeNodeRebootHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeRebootHeaders;
}

export interface ComputeNodeRebootMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type ComputeNodeRebootParameters = ComputeNodeRebootQueryParam &
  ComputeNodeRebootHeaderParam &
  ComputeNodeRebootMediaTypesParam &
  ComputeNodeRebootBodyParam &
  RequestParameters;

export interface ComputeNodeReimageHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeReimageBodyParam {
  /** The parameters for the request. */
  body?: NodeReimageParameters;
}

export interface ComputeNodeReimageQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeReimageQueryParam {
  queryParameters?: ComputeNodeReimageQueryParamProperties;
}

export interface ComputeNodeReimageHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeReimageHeaders;
}

export interface ComputeNodeReimageMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type ComputeNodeReimageParameters = ComputeNodeReimageQueryParam &
  ComputeNodeReimageHeaderParam &
  ComputeNodeReimageMediaTypesParam &
  ComputeNodeReimageBodyParam &
  RequestParameters;

export interface ComputeNodeDisableSchedulingHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeDisableSchedulingBodyParam {
  /** The parameters for the request. */
  body?: NodeDisableSchedulingParameters;
}

export interface ComputeNodeDisableSchedulingQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeDisableSchedulingQueryParam {
  queryParameters?: ComputeNodeDisableSchedulingQueryParamProperties;
}

export interface ComputeNodeDisableSchedulingHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeDisableSchedulingHeaders;
}

export interface ComputeNodeDisableSchedulingMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type ComputeNodeDisableSchedulingParameters = ComputeNodeDisableSchedulingQueryParam &
  ComputeNodeDisableSchedulingHeaderParam &
  ComputeNodeDisableSchedulingMediaTypesParam &
  ComputeNodeDisableSchedulingBodyParam &
  RequestParameters;

export interface ComputeNodeEnableSchedulingHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeEnableSchedulingQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeEnableSchedulingQueryParam {
  queryParameters?: ComputeNodeEnableSchedulingQueryParamProperties;
}

export interface ComputeNodeEnableSchedulingHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeEnableSchedulingHeaders;
}

export type ComputeNodeEnableSchedulingParameters = ComputeNodeEnableSchedulingQueryParam &
  ComputeNodeEnableSchedulingHeaderParam &
  RequestParameters;

export interface ComputeNodeGetRemoteLoginSettingsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeGetRemoteLoginSettingsQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeGetRemoteLoginSettingsQueryParam {
  queryParameters?: ComputeNodeGetRemoteLoginSettingsQueryParamProperties;
}

export interface ComputeNodeGetRemoteLoginSettingsHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeGetRemoteLoginSettingsHeaders;
}

export type ComputeNodeGetRemoteLoginSettingsParameters = ComputeNodeGetRemoteLoginSettingsQueryParam &
  ComputeNodeGetRemoteLoginSettingsHeaderParam &
  RequestParameters;

export interface ComputeNodeGetRemoteDesktopHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeGetRemoteDesktopQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeGetRemoteDesktopQueryParam {
  queryParameters?: ComputeNodeGetRemoteDesktopQueryParamProperties;
}

export interface ComputeNodeGetRemoteDesktopHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeGetRemoteDesktopHeaders;
}

export type ComputeNodeGetRemoteDesktopParameters = ComputeNodeGetRemoteDesktopQueryParam &
  ComputeNodeGetRemoteDesktopHeaderParam &
  RequestParameters;

export interface ComputeNodeUploadBatchServiceLogsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeUploadBatchServiceLogsBodyParam {
  /** The Azure Batch service log files upload configuration. */
  body: UploadBatchServiceLogsConfiguration;
}

export interface ComputeNodeUploadBatchServiceLogsQueryParamProperties {
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeUploadBatchServiceLogsQueryParam {
  queryParameters?: ComputeNodeUploadBatchServiceLogsQueryParamProperties;
}

export interface ComputeNodeUploadBatchServiceLogsHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeUploadBatchServiceLogsHeaders;
}

export interface ComputeNodeUploadBatchServiceLogsMediaTypesParam {
  /** Request content type */
  contentType?: "application/json; odata=minimalmetadata";
}

export type ComputeNodeUploadBatchServiceLogsParameters = ComputeNodeUploadBatchServiceLogsQueryParam &
  ComputeNodeUploadBatchServiceLogsHeaderParam &
  ComputeNodeUploadBatchServiceLogsMediaTypesParam &
  ComputeNodeUploadBatchServiceLogsBodyParam &
  RequestParameters;

export interface ComputeNodeListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeListQueryParamProperties {
  /** An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool. */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 Compute Nodes can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeListQueryParam {
  queryParameters?: ComputeNodeListQueryParamProperties;
}

export interface ComputeNodeListHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeListHeaders;
}

export type ComputeNodeListParameters = ComputeNodeListQueryParam &
  ComputeNodeListHeaderParam &
  RequestParameters;

export interface ComputeNodeExtensionGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeExtensionGetQueryParamProperties {
  /** An OData $select clause. */
  $select?: string;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeExtensionGetQueryParam {
  queryParameters?: ComputeNodeExtensionGetQueryParamProperties;
}

export interface ComputeNodeExtensionGetHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeExtensionGetHeaders;
}

export type ComputeNodeExtensionGetParameters = ComputeNodeExtensionGetQueryParam &
  ComputeNodeExtensionGetHeaderParam &
  RequestParameters;

export interface ComputeNodeExtensionListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * Value may contain a UUID
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /** The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. */
  "ocp-date"?: Date | string;
}

export interface ComputeNodeExtensionListQueryParamProperties {
  /** An OData $select clause. */
  $select?: string;
  /** The maximum number of items to return in the response. A maximum of 1000 Compute Nodes can be returned. */
  maxresults?: number;
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface ComputeNodeExtensionListQueryParam {
  queryParameters?: ComputeNodeExtensionListQueryParamProperties;
}

export interface ComputeNodeExtensionListHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeExtensionListHeaders;
}

export type ComputeNodeExtensionListParameters = ComputeNodeExtensionListQueryParam &
  ComputeNodeExtensionListHeaderParam &
  RequestParameters;
