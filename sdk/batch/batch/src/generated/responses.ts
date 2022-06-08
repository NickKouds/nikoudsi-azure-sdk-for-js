// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ApplicationListResultOutput,
  BatchErrorOutput,
  ApplicationOutput,
  PoolListUsageMetricsResultOutput,
  PoolStatisticsOutput,
  PoolListResultOutput,
  PoolOutput,
  AutoScaleRunOutput,
  AccountListSupportedImagesResultOutput,
  PoolNodeCountsListResultOutput,
  JobStatisticsOutput,
  JobOutput,
  JobListResultOutput,
  JobListPreparationAndReleaseTaskStatusResultOutput,
  TaskCountsResultOutput,
  CertificateListResultOutput,
  CertificateOutput,
  NodeFileListResultOutput,
  JobScheduleOutput,
  JobScheduleListResultOutput,
  TaskListResultOutput,
  TaskAddCollectionResultOutput,
  TaskOutput,
  TaskListSubtasksResultOutput,
  ComputeNodeOutput,
  ComputeNodeGetRemoteLoginSettingsResultOutput,
  UploadBatchServiceLogsResultOutput,
  ComputeNodeListResultOutput,
  NodeVMExtensionOutput,
  NodeVMExtensionListOutput
} from "./outputModels";

export interface ApplicationList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API. */
export interface ApplicationList200Response extends HttpResponse {
  status: "200";
  body: ApplicationListResultOutput;
  headers: RawHttpHeaders & ApplicationList200Headers;
}

/** This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API. */
export interface ApplicationListdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ApplicationGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about Applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API. */
export interface ApplicationGet200Response extends HttpResponse {
  status: "200";
  body: ApplicationOutput;
  headers: RawHttpHeaders & ApplicationGet200Headers;
}

/** This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about Applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API. */
export interface ApplicationGetdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolListUsageMetrics200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** If you do not specify a $filter clause including a poolId, the response includes all Pools that existed in the Account in the time range of the returned aggregation intervals. If you do not specify a $filter clause including a startTime or endTime these filters default to the start and end times of the last aggregation interval currently available; that is, only the last aggregation interval is returned. */
export interface PoolListUsageMetrics200Response extends HttpResponse {
  status: "200";
  body: PoolListUsageMetricsResultOutput;
  headers: RawHttpHeaders & PoolListUsageMetrics200Headers;
}

/** If you do not specify a $filter clause including a poolId, the response includes all Pools that existed in the Account in the time range of the returned aggregation intervals. If you do not specify a $filter clause including a startTime or endTime these filters default to the start and end times of the last aggregation interval currently available; that is, only the last aggregation interval is returned. */
export interface PoolListUsageMetricsdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolGetAllLifetimeStatistics200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Statistics are aggregated across all Pools that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes. */
export interface PoolGetAllLifetimeStatistics200Response extends HttpResponse {
  status: "200";
  body: PoolStatisticsOutput;
  headers: RawHttpHeaders & PoolGetAllLifetimeStatistics200Headers;
}

/** Statistics are aggregated across all Pools that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes. */
export interface PoolGetAllLifetimeStatisticsdefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** When naming Pools, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers. */
export interface PoolAdd201Response extends HttpResponse {
  status: "201";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolAdd201Headers;
}

/** When naming Pools, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers. */
export interface PoolAdddefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists all of the Pools in the specified Account. */
export interface PoolList200Response extends HttpResponse {
  status: "200";
  body: PoolListResultOutput;
  headers: RawHttpHeaders & PoolList200Headers;
}

/** Lists all of the Pools in the specified Account. */
export interface PoolListdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolDelete202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** When you request that a Pool be deleted, the following actions occur: the Pool state is set to deleting; any ongoing resize operation on the Pool are stopped; the Batch service starts resizing the Pool to zero Compute Nodes; any Tasks running on existing Compute Nodes are terminated and requeued (as if a resize Pool operation had been requested with the default requeue option); finally, the Pool is removed from the system. Because running Tasks are requeued, the user can rerun these Tasks by updating their Job to target a different Pool. The Tasks can then run on the new Pool. If you want to override the requeue behavior, then you should call resize Pool explicitly to shrink the Pool to zero size before deleting the Pool. If you call an Update, Patch or Delete API on a Pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted. */
export interface PoolDelete202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolDelete202Headers;
}

/** When you request that a Pool be deleted, the following actions occur: the Pool state is set to deleting; any ongoing resize operation on the Pool are stopped; the Batch service starts resizing the Pool to zero Compute Nodes; any Tasks running on existing Compute Nodes are terminated and requeued (as if a resize Pool operation had been requested with the default requeue option); finally, the Pool is removed from the system. Because running Tasks are requeued, the user can rerun these Tasks by updating their Job to target a different Pool. The Tasks can then run on the new Pool. If you want to override the requeue behavior, then you should call resize Pool explicitly to shrink the Pool to zero size before deleting the Pool. If you call an Update, Patch or Delete API on a Pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted. */
export interface PoolDeletedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolExists200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Gets basic properties of a Pool. */
export interface PoolExists200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolExists200Headers;
}

/** Gets basic properties of a Pool. */
export interface PoolExists404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Gets basic properties of a Pool. */
export interface PoolExistsdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Gets information about the specified Pool. */
export interface PoolGet200Response extends HttpResponse {
  status: "200";
  body: PoolOutput;
  headers: RawHttpHeaders & PoolGet200Headers;
}

/** Gets information about the specified Pool. */
export interface PoolGetdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolPatch200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This only replaces the Pool properties specified in the request. For example, if the Pool has a StartTask associated with it, and a request does not specify a StartTask element, then the Pool keeps the existing StartTask. */
export interface PoolPatch200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolPatch200Headers;
}

/** This only replaces the Pool properties specified in the request. For example, if the Pool has a StartTask associated with it, and a request does not specify a StartTask element, then the Pool keeps the existing StartTask. */
export interface PoolPatchdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolDisableAutoScale200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** Disables automatic scaling for a Pool. */
export interface PoolDisableAutoScale200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolDisableAutoScale200Headers;
}

/** Disables automatic scaling for a Pool. */
export interface PoolDisableAutoScaledefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolEnableAutoScale200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** You cannot enable automatic scaling on a Pool if a resize operation is in progress on the Pool. If automatic scaling of the Pool is currently disabled, you must specify a valid autoscale formula as part of the request. If automatic scaling of the Pool is already enabled, you may specify a new autoscale formula and/or a new evaluation interval. You cannot call this API for the same Pool more than once every 30 seconds. */
export interface PoolEnableAutoScale200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolEnableAutoScale200Headers;
}

/** You cannot enable automatic scaling on a Pool if a resize operation is in progress on the Pool. If automatic scaling of the Pool is currently disabled, you must specify a valid autoscale formula as part of the request. If automatic scaling of the Pool is already enabled, you may specify a new autoscale formula and/or a new evaluation interval. You cannot call this API for the same Pool more than once every 30 seconds. */
export interface PoolEnableAutoScaledefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolEvaluateAutoScale200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This API is primarily for validating an autoscale formula, as it simply returns the result without applying the formula to the Pool. The Pool must have auto scaling enabled in order to evaluate a formula. */
export interface PoolEvaluateAutoScale200Response extends HttpResponse {
  status: "200";
  body: AutoScaleRunOutput;
  headers: RawHttpHeaders & PoolEvaluateAutoScale200Headers;
}

/** This API is primarily for validating an autoscale formula, as it simply returns the result without applying the formula to the Pool. The Pool must have auto scaling enabled in order to evaluate a formula. */
export interface PoolEvaluateAutoScaledefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolResize202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** You can only resize a Pool when its allocation state is steady. If the Pool is already resizing, the request fails with status code 409. When you resize a Pool, the Pool's allocation state changes from steady to resizing. You cannot resize Pools which are configured for automatic scaling. If you try to do this, the Batch service returns an error 409. If you resize a Pool downwards, the Batch service chooses which Compute Nodes to remove. To remove specific Compute Nodes, use the Pool remove Compute Nodes API instead. */
export interface PoolResize202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolResize202Headers;
}

/** You can only resize a Pool when its allocation state is steady. If the Pool is already resizing, the request fails with status code 409. When you resize a Pool, the Pool's allocation state changes from steady to resizing. You cannot resize Pools which are configured for automatic scaling. If you try to do this, the Batch service returns an error 409. If you resize a Pool downwards, the Batch service chooses which Compute Nodes to remove. To remove specific Compute Nodes, use the Pool remove Compute Nodes API instead. */
export interface PoolResizedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolStopResize202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This does not restore the Pool to its previous state before the resize operation: it only stops any further changes being made, and the Pool maintains its current state. After stopping, the Pool stabilizes at the number of Compute Nodes it was at when the stop operation was done. During the stop operation, the Pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize Pool request; this API can also be used to halt the initial sizing of the Pool when it is created. */
export interface PoolStopResize202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolStopResize202Headers;
}

/** This does not restore the Pool to its previous state before the resize operation: it only stops any further changes being made, and the Pool maintains its current state. After stopping, the Pool stabilizes at the number of Compute Nodes it was at when the stop operation was done. During the stop operation, the Pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize Pool request; this API can also be used to halt the initial sizing of the Pool when it is created. */
export interface PoolStopResizedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolUpdateProperties204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This fully replaces all the updatable properties of the Pool. For example, if the Pool has a StartTask associated with it and if StartTask is not specified with this request, then the Batch service will remove the existing StartTask. */
export interface PoolUpdateProperties204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolUpdateProperties204Headers;
}

/** This fully replaces all the updatable properties of the Pool. For example, if the Pool has a StartTask associated with it and if StartTask is not specified with this request, then the Batch service will remove the existing StartTask. */
export interface PoolUpdatePropertiesdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface PoolRemoveNodes202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This operation can only run when the allocation state of the Pool is steady. When this operation runs, the allocation state changes from steady to resizing. Each request may remove up to 100 nodes. */
export interface PoolRemoveNodes202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & PoolRemoveNodes202Headers;
}

/** This operation can only run when the allocation state of the Pool is steady. When this operation runs, the allocation state changes from steady to resizing. Each request may remove up to 100 nodes. */
export interface PoolRemoveNodesdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface AccountListSupportedImages200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists all Virtual Machine Images supported by the Azure Batch service. */
export interface AccountListSupportedImages200Response extends HttpResponse {
  status: "200";
  body: AccountListSupportedImagesResultOutput;
  headers: RawHttpHeaders & AccountListSupportedImages200Headers;
}

/** Lists all Virtual Machine Images supported by the Azure Batch service. */
export interface AccountListSupportedImagesdefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface AccountListPoolNodeCounts200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** Gets the number of Compute Nodes in each state, grouped by Pool. Note that the numbers returned may not always be up to date. If you need exact node counts, use a list query. */
export interface AccountListPoolNodeCounts200Response extends HttpResponse {
  status: "200";
  body: PoolNodeCountsListResultOutput;
  headers: RawHttpHeaders & AccountListPoolNodeCounts200Headers;
}

/** Gets the number of Compute Nodes in each state, grouped by Pool. Note that the numbers returned may not always be up to date. If you need exact node counts, use a list query. */
export interface AccountListPoolNodeCountsdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobGetAllLifetimeStatistics200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Statistics are aggregated across all Jobs that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes. */
export interface JobGetAllLifetimeStatistics200Response extends HttpResponse {
  status: "200";
  body: JobStatisticsOutput;
  headers: RawHttpHeaders & JobGetAllLifetimeStatistics200Headers;
}

/** Statistics are aggregated across all Jobs that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes. */
export interface JobGetAllLifetimeStatisticsdefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobDelete202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** Deleting a Job also deletes all Tasks that are part of that Job, and all Job statistics. This also overrides the retention period for Task data; that is, if the Job contains Tasks which are still retained on Compute Nodes, the Batch services deletes those Tasks' working directories and all their contents.  When a Delete Job request is received, the Batch service sets the Job to the deleting state. All update operations on a Job that is in deleting state will fail with status code 409 (Conflict), with additional information indicating that the Job is being deleted. */
export interface JobDelete202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobDelete202Headers;
}

/** Deleting a Job also deletes all Tasks that are part of that Job, and all Job statistics. This also overrides the retention period for Task data; that is, if the Job contains Tasks which are still retained on Compute Nodes, the Batch services deletes those Tasks' working directories and all their contents.  When a Delete Job request is received, the Batch service sets the Job to the deleting state. All update operations on a Job that is in deleting state will fail with status code 409 (Conflict), with additional information indicating that the Job is being deleted. */
export interface JobDeletedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Gets information about the specified Job. */
export interface JobGet200Response extends HttpResponse {
  status: "200";
  body: JobOutput;
  headers: RawHttpHeaders & JobGet200Headers;
}

/** Gets information about the specified Job. */
export interface JobGetdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobPatch200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This replaces only the Job properties specified in the request. For example, if the Job has constraints, and a request does not specify the constraints element, then the Job keeps the existing constraints. */
export interface JobPatch200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobPatch200Headers;
}

/** This replaces only the Job properties specified in the request. For example, if the Job has constraints, and a request does not specify the constraints element, then the Job keeps the existing constraints. */
export interface JobPatchdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobUpdate200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This fully replaces all the updatable properties of the Job. For example, if the Job has constraints associated with it and if constraints is not specified with this request, then the Batch service will remove the existing constraints. */
export interface JobUpdate200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobUpdate200Headers;
}

/** This fully replaces all the updatable properties of the Job. For example, if the Job has constraints associated with it and if constraints is not specified with this request, then the Batch service will remove the existing constraints. */
export interface JobUpdatedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobDisable202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** The Batch Service immediately moves the Job to the disabling state. Batch then uses the disableTasks parameter to determine what to do with the currently running Tasks of the Job. The Job remains in the disabling state until the disable operation is completed and all Tasks have been dealt with according to the disableTasks option; the Job then moves to the disabled state. No new Tasks are started under the Job until it moves back to active state. If you try to disable a Job that is in any state other than active, disabling, or disabled, the request fails with status code 409. */
export interface JobDisable202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobDisable202Headers;
}

/** The Batch Service immediately moves the Job to the disabling state. Batch then uses the disableTasks parameter to determine what to do with the currently running Tasks of the Job. The Job remains in the disabling state until the disable operation is completed and all Tasks have been dealt with according to the disableTasks option; the Job then moves to the disabled state. No new Tasks are started under the Job until it moves back to active state. If you try to disable a Job that is in any state other than active, disabling, or disabled, the request fails with status code 409. */
export interface JobDisabledefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobEnable202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** When you call this API, the Batch service sets a disabled Job to the enabling state. After the this operation is completed, the Job moves to the active state, and scheduling of new Tasks under the Job resumes. The Batch service does not allow a Task to remain in the active state for more than 180 days. Therefore, if you enable a Job containing active Tasks which were added more than 180 days ago, those Tasks will not run. */
export interface JobEnable202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobEnable202Headers;
}

/** When you call this API, the Batch service sets a disabled Job to the enabling state. After the this operation is completed, the Job moves to the active state, and scheduling of new Tasks under the Job resumes. The Batch service does not allow a Task to remain in the active state for more than 180 days. Therefore, if you enable a Job containing active Tasks which were added more than 180 days ago, those Tasks will not run. */
export interface JobEnabledefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobTerminate202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** When a Terminate Job request is received, the Batch service sets the Job to the terminating state. The Batch service then terminates any running Tasks associated with the Job and runs any required Job release Tasks. Then the Job moves into the completed state. If there are any Tasks in the Job in the active state, they will remain in the active state. Once a Job is terminated, new Tasks cannot be added and any remaining active Tasks will not be scheduled. */
export interface JobTerminate202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobTerminate202Headers;
}

/** When a Terminate Job request is received, the Batch service sets the Job to the terminating state. The Batch service then terminates any running Tasks associated with the Job and runs any required Job release Tasks. Then the Job moves into the completed state. If there are any Tasks in the Job in the active state, they will remain in the active state. Once a Job is terminated, new Tasks cannot be added and any remaining active Tasks will not be scheduled. */
export interface JobTerminatedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** The Batch service supports two ways to control the work done as part of a Job. In the first approach, the user specifies a Job Manager Task. The Batch service launches this Task when it is ready to start the Job. The Job Manager Task controls all other Tasks that run under this Job, by using the Task APIs. In the second approach, the user directly controls the execution of Tasks under an active Job, by using the Task APIs. Also note: when naming Jobs, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers. */
export interface JobAdd201Response extends HttpResponse {
  status: "201";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobAdd201Headers;
}

/** The Batch service supports two ways to control the work done as part of a Job. In the first approach, the user specifies a Job Manager Task. The Batch service launches this Task when it is ready to start the Job. The Job Manager Task controls all other Tasks that run under this Job, by using the Task APIs. In the second approach, the user directly controls the execution of Tasks under an active Job, by using the Task APIs. Also note: when naming Jobs, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers. */
export interface JobAdddefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists all of the Jobs in the specified Account. */
export interface JobList200Response extends HttpResponse {
  status: "200";
  body: JobListResultOutput;
  headers: RawHttpHeaders & JobList200Headers;
}

/** Lists all of the Jobs in the specified Account. */
export interface JobListdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobListFromJobSchedule200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists the Jobs that have been created under the specified Job Schedule. */
export interface JobListFromJobSchedule200Response extends HttpResponse {
  status: "200";
  body: JobListResultOutput;
  headers: RawHttpHeaders & JobListFromJobSchedule200Headers;
}

/** Lists the Jobs that have been created under the specified Job Schedule. */
export interface JobListFromJobScheduledefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobListPreparationAndReleaseTaskStatus200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** This API returns the Job Preparation and Job Release Task status on all Compute Nodes that have run the Job Preparation or Job Release Task. This includes Compute Nodes which have since been removed from the Pool. If this API is invoked on a Job which has no Job Preparation or Job Release Task, the Batch service returns HTTP status code 409 (Conflict) with an error code of JobPreparationTaskNotSpecified. */
export interface JobListPreparationAndReleaseTaskStatus200Response
  extends HttpResponse {
  status: "200";
  body: JobListPreparationAndReleaseTaskStatusResultOutput;
  headers: RawHttpHeaders & JobListPreparationAndReleaseTaskStatus200Headers;
}

/** This API returns the Job Preparation and Job Release Task status on all Compute Nodes that have run the Job Preparation or Job Release Task. This includes Compute Nodes which have since been removed from the Pool. If this API is invoked on a Job which has no Job Preparation or Job Release Task, the Batch service returns HTTP status code 409 (Conflict) with an error code of JobPreparationTaskNotSpecified. */
export interface JobListPreparationAndReleaseTaskStatusdefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobGetTaskCounts200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** Task counts provide a count of the Tasks by active, running or completed Task state, and a count of Tasks which succeeded or failed. Tasks in the preparing state are counted as running. Note that the numbers returned may not always be up to date. If you need exact task counts, use a list query. */
export interface JobGetTaskCounts200Response extends HttpResponse {
  status: "200";
  body: TaskCountsResultOutput;
  headers: RawHttpHeaders & JobGetTaskCounts200Headers;
}

/** Task counts provide a count of the Tasks by active, running or completed Task state, and a count of Tasks which succeeded or failed. Tasks in the preparing state are counted as running. Note that the numbers returned may not always be up to date. If you need exact task counts, use a list query. */
export interface JobGetTaskCountsdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface CertificateAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** Adds a Certificate to the specified Account. */
export interface CertificateAdd201Response extends HttpResponse {
  status: "201";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & CertificateAdd201Headers;
}

/** Adds a Certificate to the specified Account. */
export interface CertificateAdddefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface CertificateList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists all of the Certificates that have been added to the specified Account. */
export interface CertificateList200Response extends HttpResponse {
  status: "200";
  body: CertificateListResultOutput;
  headers: RawHttpHeaders & CertificateList200Headers;
}

/** Lists all of the Certificates that have been added to the specified Account. */
export interface CertificateListdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface CertificateCancelDeletion204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** If you try to delete a Certificate that is being used by a Pool or Compute Node, the status of the Certificate changes to deleteFailed. If you decide that you want to continue using the Certificate, you can use this operation to set the status of the Certificate back to active. If you intend to delete the Certificate, you do not need to run this operation after the deletion failed. You must make sure that the Certificate is not being used by any resources, and then you can try again to delete the Certificate. */
export interface CertificateCancelDeletion204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & CertificateCancelDeletion204Headers;
}

/** If you try to delete a Certificate that is being used by a Pool or Compute Node, the status of the Certificate changes to deleteFailed. If you decide that you want to continue using the Certificate, you can use this operation to set the status of the Certificate back to active. If you intend to delete the Certificate, you do not need to run this operation after the deletion failed. You must make sure that the Certificate is not being used by any resources, and then you can try again to delete the Certificate. */
export interface CertificateCancelDeletiondefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface CertificateDelete202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** You cannot delete a Certificate if a resource (Pool or Compute Node) is using it. Before you can delete a Certificate, you must therefore make sure that the Certificate is not associated with any existing Pools, the Certificate is not installed on any Nodes (even if you remove a Certificate from a Pool, it is not removed from existing Compute Nodes in that Pool until they restart), and no running Tasks depend on the Certificate. If you try to delete a Certificate that is in use, the deletion fails. The Certificate status changes to deleteFailed. You can use Cancel Delete Certificate to set the status back to active if you decide that you want to continue using the Certificate. */
export interface CertificateDelete202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & CertificateDelete202Headers;
}

/** You cannot delete a Certificate if a resource (Pool or Compute Node) is using it. Before you can delete a Certificate, you must therefore make sure that the Certificate is not associated with any existing Pools, the Certificate is not installed on any Nodes (even if you remove a Certificate from a Pool, it is not removed from existing Compute Nodes in that Pool until they restart), and no running Tasks depend on the Certificate. If you try to delete a Certificate that is in use, the deletion fails. The Certificate status changes to deleteFailed. You can use Cancel Delete Certificate to set the status back to active if you decide that you want to continue using the Certificate. */
export interface CertificateDeletedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface CertificateGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Gets information about the specified Certificate. */
export interface CertificateGet200Response extends HttpResponse {
  status: "200";
  body: CertificateOutput;
  headers: RawHttpHeaders & CertificateGet200Headers;
}

/** Gets information about the specified Certificate. */
export interface CertificateGetdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface FileDeleteFromTask200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** Deletes the specified Task file from the Compute Node where the Task ran. */
export interface FileDeleteFromTask200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & FileDeleteFromTask200Headers;
}

/** Deletes the specified Task file from the Compute Node where the Task ran. */
export interface FileDeleteFromTaskdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface FileGetFromTask200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The file creation time. */
  "ocp-creation-time"?: string;
  /** Whether the object represents a directory. */
  "ocp-batch-file-isdirectory"?: boolean;
  /** The URL of the file. */
  "ocp-batch-file-url"?: string;
  /** The file mode attribute in octal format. */
  "ocp-batch-file-mode"?: string;
  /** The content type of the file. */
  "content-type"?: string;
  /** The length of the file. */
  "content-length"?: number;
}

/** Returns the content of the specified Task file. */
export interface FileGetFromTask200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & FileGetFromTask200Headers;
}

/** Returns the content of the specified Task file. */
export interface FileGetFromTaskdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface FileGetPropertiesFromTask200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The file creation time. */
  "ocp-creation-time"?: string;
  /** Whether the object represents a directory. */
  "ocp-batch-file-isdirectory"?: boolean;
  /** The URL of the file. */
  "ocp-batch-file-url"?: string;
  /** The file mode attribute in octal format. */
  "ocp-batch-file-mode"?: string;
  /** The content type of the file. */
  "content-type"?: string;
  /** The length of the file. */
  "content-length"?: number;
}

/** Gets the properties of the specified Task file. */
export interface FileGetPropertiesFromTask200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & FileGetPropertiesFromTask200Headers;
}

/** Gets the properties of the specified Task file. */
export interface FileGetPropertiesFromTaskdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface FileDeleteFromComputeNode200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** Deletes the specified file from the Compute Node. */
export interface FileDeleteFromComputeNode200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & FileDeleteFromComputeNode200Headers;
}

/** Deletes the specified file from the Compute Node. */
export interface FileDeleteFromComputeNodedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface FileGetFromComputeNode200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The file creation time. */
  "ocp-creation-time"?: string;
  /** Whether the object represents a directory. */
  "ocp-batch-file-isdirectory"?: boolean;
  /** The URL of the file. */
  "ocp-batch-file-url"?: string;
  /** The file mode attribute in octal format. */
  "ocp-batch-file-mode"?: string;
  /** The content type of the file. */
  "content-type"?: string;
  /** The length of the file. */
  "content-length"?: number;
}

/** Returns the content of the specified Compute Node file. */
export interface FileGetFromComputeNode200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & FileGetFromComputeNode200Headers;
}

/** Returns the content of the specified Compute Node file. */
export interface FileGetFromComputeNodedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface FileGetPropertiesFromComputeNode200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The file creation time. */
  "ocp-creation-time"?: string;
  /** Whether the object represents a directory. */
  "ocp-batch-file-isdirectory"?: boolean;
  /** The URL of the file. */
  "ocp-batch-file-url"?: string;
  /** The file mode attribute in octal format. */
  "ocp-batch-file-mode"?: string;
  /** The content type of the file. */
  "content-type"?: string;
  /** The length of the file. */
  "content-length"?: number;
}

/** Gets the properties of the specified Compute Node file. */
export interface FileGetPropertiesFromComputeNode200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & FileGetPropertiesFromComputeNode200Headers;
}

/** Gets the properties of the specified Compute Node file. */
export interface FileGetPropertiesFromComputeNodedefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface FileListFromTask200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists the files in a Task's directory on its Compute Node. */
export interface FileListFromTask200Response extends HttpResponse {
  status: "200";
  body: NodeFileListResultOutput;
  headers: RawHttpHeaders & FileListFromTask200Headers;
}

/** Lists the files in a Task's directory on its Compute Node. */
export interface FileListFromTaskdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface FileListFromComputeNode200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists all of the files in Task directories on the specified Compute Node. */
export interface FileListFromComputeNode200Response extends HttpResponse {
  status: "200";
  body: NodeFileListResultOutput;
  headers: RawHttpHeaders & FileListFromComputeNode200Headers;
}

/** Lists all of the files in Task directories on the specified Compute Node. */
export interface FileListFromComputeNodedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobScheduleExists200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Checks the specified Job Schedule exists. */
export interface JobScheduleExists200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobScheduleExists200Headers;
}

/** Checks the specified Job Schedule exists. */
export interface JobScheduleExists404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Checks the specified Job Schedule exists. */
export interface JobScheduleExistsdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobScheduleDelete202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** When you delete a Job Schedule, this also deletes all Jobs and Tasks under that schedule. When Tasks are deleted, all the files in their working directories on the Compute Nodes are also deleted (the retention period is ignored). The Job Schedule statistics are no longer accessible once the Job Schedule is deleted, though they are still counted towards Account lifetime statistics. */
export interface JobScheduleDelete202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobScheduleDelete202Headers;
}

/** When you delete a Job Schedule, this also deletes all Jobs and Tasks under that schedule. When Tasks are deleted, all the files in their working directories on the Compute Nodes are also deleted (the retention period is ignored). The Job Schedule statistics are no longer accessible once the Job Schedule is deleted, though they are still counted towards Account lifetime statistics. */
export interface JobScheduleDeletedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobScheduleGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Gets information about the specified Job Schedule. */
export interface JobScheduleGet200Response extends HttpResponse {
  status: "200";
  body: JobScheduleOutput;
  headers: RawHttpHeaders & JobScheduleGet200Headers;
}

/** Gets information about the specified Job Schedule. */
export interface JobScheduleGetdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobSchedulePatch200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This replaces only the Job Schedule properties specified in the request. For example, if the schedule property is not specified with this request, then the Batch service will keep the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected. */
export interface JobSchedulePatch200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobSchedulePatch200Headers;
}

/** This replaces only the Job Schedule properties specified in the request. For example, if the schedule property is not specified with this request, then the Batch service will keep the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected. */
export interface JobSchedulePatchdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobScheduleUpdate200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This fully replaces all the updatable properties of the Job Schedule. For example, if the schedule property is not specified with this request, then the Batch service will remove the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected. */
export interface JobScheduleUpdate200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobScheduleUpdate200Headers;
}

/** This fully replaces all the updatable properties of the Job Schedule. For example, if the schedule property is not specified with this request, then the Batch service will remove the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected. */
export interface JobScheduleUpdatedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobScheduleDisable204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** No new Jobs will be created until the Job Schedule is enabled again. */
export interface JobScheduleDisable204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobScheduleDisable204Headers;
}

/** No new Jobs will be created until the Job Schedule is enabled again. */
export interface JobScheduleDisabledefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobScheduleEnable204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** Enables a Job Schedule. */
export interface JobScheduleEnable204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobScheduleEnable204Headers;
}

/** Enables a Job Schedule. */
export interface JobScheduleEnabledefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobScheduleTerminate202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** Terminates a Job Schedule. */
export interface JobScheduleTerminate202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobScheduleTerminate202Headers;
}

/** Terminates a Job Schedule. */
export interface JobScheduleTerminatedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobScheduleAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** Adds a Job Schedule to the specified Account. */
export interface JobScheduleAdd201Response extends HttpResponse {
  status: "201";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & JobScheduleAdd201Headers;
}

/** Adds a Job Schedule to the specified Account. */
export interface JobScheduleAdddefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface JobScheduleList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists all of the Job Schedules in the specified Account. */
export interface JobScheduleList200Response extends HttpResponse {
  status: "200";
  body: JobScheduleListResultOutput;
  headers: RawHttpHeaders & JobScheduleList200Headers;
}

/** Lists all of the Job Schedules in the specified Account. */
export interface JobScheduleListdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface TaskAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** The maximum lifetime of a Task from addition to completion is 180 days. If a Task has not completed within 180 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time. */
export interface TaskAdd201Response extends HttpResponse {
  status: "201";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & TaskAdd201Headers;
}

/** The maximum lifetime of a Task from addition to completion is 180 days. If a Task has not completed within 180 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time. */
export interface TaskAdddefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface TaskList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks. */
export interface TaskList200Response extends HttpResponse {
  status: "200";
  body: TaskListResultOutput;
  headers: RawHttpHeaders & TaskList200Headers;
}

/** For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks. */
export interface TaskListdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface TaskAddCollection200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** Note that each Task must have a unique ID. The Batch service may not return the results for each Task in the same order the Tasks were submitted in this request. If the server times out or the connection is closed during the request, the request may have been partially or fully processed, or not at all. In such cases, the user should re-issue the request. Note that it is up to the user to correctly handle failures when re-issuing a request. For example, you should use the same Task IDs during a retry so that if the prior operation succeeded, the retry will not create extra Tasks unexpectedly. If the response contains any Tasks which failed to add, a client can retry the request. In a retry, it is most efficient to resubmit only Tasks that failed to add, and to omit Tasks that were successfully added on the first attempt. The maximum lifetime of a Task from addition to completion is 180 days. If a Task has not completed within 180 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time. */
export interface TaskAddCollection200Response extends HttpResponse {
  status: "200";
  body: TaskAddCollectionResultOutput;
  headers: RawHttpHeaders & TaskAddCollection200Headers;
}

/** Note that each Task must have a unique ID. The Batch service may not return the results for each Task in the same order the Tasks were submitted in this request. If the server times out or the connection is closed during the request, the request may have been partially or fully processed, or not at all. In such cases, the user should re-issue the request. Note that it is up to the user to correctly handle failures when re-issuing a request. For example, you should use the same Task IDs during a retry so that if the prior operation succeeded, the retry will not create extra Tasks unexpectedly. If the response contains any Tasks which failed to add, a client can retry the request. In a retry, it is most efficient to resubmit only Tasks that failed to add, and to omit Tasks that were successfully added on the first attempt. The maximum lifetime of a Task from addition to completion is 180 days. If a Task has not completed within 180 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time. */
export interface TaskAddCollectiondefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface TaskDelete200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** When a Task is deleted, all of the files in its directory on the Compute Node where it ran are also deleted (regardless of the retention time). For multi-instance Tasks, the delete Task operation applies synchronously to the primary task; subtasks and their files are then deleted asynchronously in the background. */
export interface TaskDelete200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & TaskDelete200Headers;
}

/** When a Task is deleted, all of the files in its directory on the Compute Node where it ran are also deleted (regardless of the retention time). For multi-instance Tasks, the delete Task operation applies synchronously to the primary task; subtasks and their files are then deleted asynchronously in the background. */
export interface TaskDeletedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface TaskGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks. */
export interface TaskGet200Response extends HttpResponse {
  status: "200";
  body: TaskOutput;
  headers: RawHttpHeaders & TaskGet200Headers;
}

/** For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks. */
export interface TaskGetdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface TaskUpdate200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** Updates the properties of the specified Task. */
export interface TaskUpdate200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & TaskUpdate200Headers;
}

/** Updates the properties of the specified Task. */
export interface TaskUpdatedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface TaskListSubtasks200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** If the Task is not a multi-instance Task then this returns an empty collection. */
export interface TaskListSubtasks200Response extends HttpResponse {
  status: "200";
  body: TaskListSubtasksResultOutput;
  headers: RawHttpHeaders & TaskListSubtasks200Headers;
}

/** If the Task is not a multi-instance Task then this returns an empty collection. */
export interface TaskListSubtasksdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface TaskTerminate204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** When the Task has been terminated, it moves to the completed state. For multi-instance Tasks, the terminate Task operation applies synchronously to the primary task; subtasks are then terminated asynchronously in the background. */
export interface TaskTerminate204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & TaskTerminate204Headers;
}

/** When the Task has been terminated, it moves to the completed state. For multi-instance Tasks, the terminate Task operation applies synchronously to the primary task; subtasks are then terminated asynchronously in the background. */
export interface TaskTerminatedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface TaskReactivate204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** Reactivation makes a Task eligible to be retried again up to its maximum retry count. The Task's state is changed to active. As the Task is no longer in the completed state, any previous exit code or failure information is no longer available after reactivation. Each time a Task is reactivated, its retry count is reset to 0. Reactivation will fail for Tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, it will fail if the Job has completed (or is terminating or deleting). */
export interface TaskReactivate204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & TaskReactivate204Headers;
}

/** Reactivation makes a Task eligible to be retried again up to its maximum retry count. The Task's state is changed to active. As the Task is no longer in the completed state, any previous exit code or failure information is no longer available after reactivation. Each time a Task is reactivated, its retry count is reset to 0. Reactivation will fail for Tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, it will fail if the Job has completed (or is terminating or deleting). */
export interface TaskReactivatedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeAddUser201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** You can add a user Account to a Compute Node only when it is in the idle or running state. */
export interface ComputeNodeAddUser201Response extends HttpResponse {
  status: "201";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ComputeNodeAddUser201Headers;
}

/** You can add a user Account to a Compute Node only when it is in the idle or running state. */
export interface ComputeNodeAddUserdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeDeleteUser200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** You can delete a user Account to a Compute Node only when it is in the idle or running state. */
export interface ComputeNodeDeleteUser200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ComputeNodeDeleteUser200Headers;
}

/** You can delete a user Account to a Compute Node only when it is in the idle or running state. */
export interface ComputeNodeDeleteUserdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeUpdateUser200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** This operation replaces of all the updatable properties of the Account. For example, if the expiryTime element is not specified, the current value is replaced with the default value, not left unmodified. You can update a user Account on a Compute Node only when it is in the idle or running state. */
export interface ComputeNodeUpdateUser200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ComputeNodeUpdateUser200Headers;
}

/** This operation replaces of all the updatable properties of the Account. For example, if the expiryTime element is not specified, the current value is replaced with the default value, not left unmodified. You can update a user Account on a Compute Node only when it is in the idle or running state. */
export interface ComputeNodeUpdateUserdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Gets information about the specified Compute Node. */
export interface ComputeNodeGet200Response extends HttpResponse {
  status: "200";
  body: ComputeNodeOutput;
  headers: RawHttpHeaders & ComputeNodeGet200Headers;
}

/** Gets information about the specified Compute Node. */
export interface ComputeNodeGetdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeReboot202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** You can restart a Compute Node only if it is in an idle or running state. */
export interface ComputeNodeReboot202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ComputeNodeReboot202Headers;
}

/** You can restart a Compute Node only if it is in an idle or running state. */
export interface ComputeNodeRebootdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeReimage202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** You can reinstall the operating system on a Compute Node only if it is in an idle or running state. This API can be invoked only on Pools created with the cloud service configuration property. */
export interface ComputeNodeReimage202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ComputeNodeReimage202Headers;
}

/** You can reinstall the operating system on a Compute Node only if it is in an idle or running state. This API can be invoked only on Pools created with the cloud service configuration property. */
export interface ComputeNodeReimagedefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeDisableScheduling200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** You can disable Task scheduling on a Compute Node only if its current scheduling state is enabled. */
export interface ComputeNodeDisableScheduling200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ComputeNodeDisableScheduling200Headers;
}

/** You can disable Task scheduling on a Compute Node only if its current scheduling state is enabled. */
export interface ComputeNodeDisableSchedulingdefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeEnableScheduling200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid?: string;
}

/** You can enable Task scheduling on a Compute Node only if its current scheduling state is disabled */
export interface ComputeNodeEnableScheduling200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ComputeNodeEnableScheduling200Headers;
}

/** You can enable Task scheduling on a Compute Node only if its current scheduling state is disabled */
export interface ComputeNodeEnableSchedulingdefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeGetRemoteLoginSettings200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Before you can remotely login to a Compute Node using the remote login settings, you must create a user Account on the Compute Node. This API can be invoked only on Pools created with the virtual machine configuration property. For Pools created with a cloud service configuration, see the GetRemoteDesktop API. */
export interface ComputeNodeGetRemoteLoginSettings200Response
  extends HttpResponse {
  status: "200";
  body: ComputeNodeGetRemoteLoginSettingsResultOutput;
  headers: RawHttpHeaders & ComputeNodeGetRemoteLoginSettings200Headers;
}

/** Before you can remotely login to a Compute Node using the remote login settings, you must create a user Account on the Compute Node. This API can be invoked only on Pools created with the virtual machine configuration property. For Pools created with a cloud service configuration, see the GetRemoteDesktop API. */
export interface ComputeNodeGetRemoteLoginSettingsdefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeGetRemoteDesktop200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Before you can access a Compute Node by using the RDP file, you must create a user Account on the Compute Node. This API can only be invoked on Pools created with a cloud service configuration. For Pools created with a virtual machine configuration, see the GetRemoteLoginSettings API. */
export interface ComputeNodeGetRemoteDesktop200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & ComputeNodeGetRemoteDesktop200Headers;
}

/** Before you can access a Compute Node by using the RDP file, you must create a user Account on the Compute Node. This API can only be invoked on Pools created with a cloud service configuration. For Pools created with a virtual machine configuration, see the GetRemoteLoginSettings API. */
export interface ComputeNodeGetRemoteDesktopdefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeUploadBatchServiceLogs200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** This is for gathering Azure Batch service log files in an automated fashion from Compute Nodes if you are experiencing an error and wish to escalate to Azure support. The Azure Batch service log files should be shared with Azure support to aid in debugging issues with the Batch service. */
export interface ComputeNodeUploadBatchServiceLogs200Response
  extends HttpResponse {
  status: "200";
  body: UploadBatchServiceLogsResultOutput;
  headers: RawHttpHeaders & ComputeNodeUploadBatchServiceLogs200Headers;
}

/** This is for gathering Azure Batch service log files in an automated fashion from Compute Nodes if you are experiencing an error and wish to escalate to Azure support. The Azure Batch service log files should be shared with Azure support to aid in debugging issues with the Batch service. */
export interface ComputeNodeUploadBatchServiceLogsdefaultResponse
  extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists the Compute Nodes in the specified Pool. */
export interface ComputeNodeList200Response extends HttpResponse {
  status: "200";
  body: ComputeNodeListResultOutput;
  headers: RawHttpHeaders & ComputeNodeList200Headers;
}

/** Lists the Compute Nodes in the specified Pool. */
export interface ComputeNodeListdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeExtensionGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Gets information about the specified Compute Node Extension. */
export interface ComputeNodeExtensionGet200Response extends HttpResponse {
  status: "200";
  body: NodeVMExtensionOutput;
  headers: RawHttpHeaders & ComputeNodeExtensionGet200Headers;
}

/** Gets information about the specified Compute Node Extension. */
export interface ComputeNodeExtensionGetdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}

export interface ComputeNodeExtensionList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** Lists the Compute Nodes Extensions in the specified Pool. */
export interface ComputeNodeExtensionList200Response extends HttpResponse {
  status: "200";
  body: NodeVMExtensionListOutput;
  headers: RawHttpHeaders & ComputeNodeExtensionList200Headers;
}

/** Lists the Compute Nodes Extensions in the specified Pool. */
export interface ComputeNodeExtensionListdefaultResponse extends HttpResponse {
  status: "500";
  body: BatchErrorOutput;
}
