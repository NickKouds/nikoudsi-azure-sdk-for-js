// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ApplicationListParameters,
  ApplicationGetParameters,
  PoolListUsageMetricsParameters,
  PoolGetAllLifetimeStatisticsParameters,
  PoolAddParameters,
  PoolListParameters,
  PoolDeleteParameters,
  PoolExistsParameters,
  PoolGetParameters,
  PoolPatchParameters,
  PoolDisableAutoScaleParameters,
  PoolEnableAutoScaleParameters,
  PoolEvaluateAutoScaleParameters,
  PoolResizeParameters,
  PoolStopResizeParameters,
  PoolUpdatePropertiesParameters,
  PoolRemoveNodesParameters,
  AccountListSupportedImagesParameters,
  AccountListPoolNodeCountsParameters,
  JobGetAllLifetimeStatisticsParameters,
  JobDeleteParameters,
  JobGetParameters,
  JobPatchParameters,
  JobUpdateParameters,
  JobDisableParameters,
  JobEnableParameters,
  JobTerminateParameters,
  JobAddParameters,
  JobListParameters,
  JobListFromJobScheduleParameters,
  JobListPreparationAndReleaseTaskStatusParameters,
  JobGetTaskCountsParameters,
  CertificateAddParameters,
  CertificateListParameters,
  CertificateCancelDeletionParameters,
  CertificateDeleteParameters,
  CertificateGetParameters,
  FileDeleteFromTaskParameters,
  FileGetFromTaskParameters,
  FileGetPropertiesFromTaskParameters,
  FileDeleteFromComputeNodeParameters,
  FileGetFromComputeNodeParameters,
  FileGetPropertiesFromComputeNodeParameters,
  FileListFromTaskParameters,
  FileListFromComputeNodeParameters,
  JobScheduleExistsParameters,
  JobScheduleDeleteParameters,
  JobScheduleGetParameters,
  JobSchedulePatchParameters,
  JobScheduleUpdateParameters,
  JobScheduleDisableParameters,
  JobScheduleEnableParameters,
  JobScheduleTerminateParameters,
  JobScheduleAddParameters,
  JobScheduleListParameters,
  TaskAddParameters,
  TaskListParameters,
  TaskAddCollectionParameters,
  TaskDeleteParameters,
  TaskGetParameters,
  TaskUpdateParameters,
  TaskListSubtasksParameters,
  TaskTerminateParameters,
  TaskReactivateParameters,
  ComputeNodeAddUserParameters,
  ComputeNodeDeleteUserParameters,
  ComputeNodeUpdateUserParameters,
  ComputeNodeGetParameters,
  ComputeNodeRebootParameters,
  ComputeNodeReimageParameters,
  ComputeNodeDisableSchedulingParameters,
  ComputeNodeEnableSchedulingParameters,
  ComputeNodeGetRemoteLoginSettingsParameters,
  ComputeNodeGetRemoteDesktopParameters,
  ComputeNodeUploadBatchServiceLogsParameters,
  ComputeNodeListParameters,
  ComputeNodeExtensionGetParameters,
  ComputeNodeExtensionListParameters
} from "./parameters";
import {
  ApplicationList200Response,
  ApplicationListdefaultResponse,
  ApplicationGet200Response,
  ApplicationGetdefaultResponse,
  PoolListUsageMetrics200Response,
  PoolListUsageMetricsdefaultResponse,
  PoolGetAllLifetimeStatistics200Response,
  PoolGetAllLifetimeStatisticsdefaultResponse,
  PoolAdd201Response,
  PoolAdddefaultResponse,
  PoolList200Response,
  PoolListdefaultResponse,
  PoolDelete202Response,
  PoolDeletedefaultResponse,
  PoolExists200Response,
  PoolExists404Response,
  PoolExistsdefaultResponse,
  PoolGet200Response,
  PoolGetdefaultResponse,
  PoolPatch200Response,
  PoolPatchdefaultResponse,
  PoolDisableAutoScale200Response,
  PoolDisableAutoScaledefaultResponse,
  PoolEnableAutoScale200Response,
  PoolEnableAutoScaledefaultResponse,
  PoolEvaluateAutoScale200Response,
  PoolEvaluateAutoScaledefaultResponse,
  PoolResize202Response,
  PoolResizedefaultResponse,
  PoolStopResize202Response,
  PoolStopResizedefaultResponse,
  PoolUpdateProperties204Response,
  PoolUpdatePropertiesdefaultResponse,
  PoolRemoveNodes202Response,
  PoolRemoveNodesdefaultResponse,
  AccountListSupportedImages200Response,
  AccountListSupportedImagesdefaultResponse,
  AccountListPoolNodeCounts200Response,
  AccountListPoolNodeCountsdefaultResponse,
  JobGetAllLifetimeStatistics200Response,
  JobGetAllLifetimeStatisticsdefaultResponse,
  JobDelete202Response,
  JobDeletedefaultResponse,
  JobGet200Response,
  JobGetdefaultResponse,
  JobPatch200Response,
  JobPatchdefaultResponse,
  JobUpdate200Response,
  JobUpdatedefaultResponse,
  JobDisable202Response,
  JobDisabledefaultResponse,
  JobEnable202Response,
  JobEnabledefaultResponse,
  JobTerminate202Response,
  JobTerminatedefaultResponse,
  JobAdd201Response,
  JobAdddefaultResponse,
  JobList200Response,
  JobListdefaultResponse,
  JobListFromJobSchedule200Response,
  JobListFromJobScheduledefaultResponse,
  JobListPreparationAndReleaseTaskStatus200Response,
  JobListPreparationAndReleaseTaskStatusdefaultResponse,
  JobGetTaskCounts200Response,
  JobGetTaskCountsdefaultResponse,
  CertificateAdd201Response,
  CertificateAdddefaultResponse,
  CertificateList200Response,
  CertificateListdefaultResponse,
  CertificateCancelDeletion204Response,
  CertificateCancelDeletiondefaultResponse,
  CertificateDelete202Response,
  CertificateDeletedefaultResponse,
  CertificateGet200Response,
  CertificateGetdefaultResponse,
  FileDeleteFromTask200Response,
  FileDeleteFromTaskdefaultResponse,
  FileGetFromTask200Response,
  FileGetFromTaskdefaultResponse,
  FileGetPropertiesFromTask200Response,
  FileGetPropertiesFromTaskdefaultResponse,
  FileDeleteFromComputeNode200Response,
  FileDeleteFromComputeNodedefaultResponse,
  FileGetFromComputeNode200Response,
  FileGetFromComputeNodedefaultResponse,
  FileGetPropertiesFromComputeNode200Response,
  FileGetPropertiesFromComputeNodedefaultResponse,
  FileListFromTask200Response,
  FileListFromTaskdefaultResponse,
  FileListFromComputeNode200Response,
  FileListFromComputeNodedefaultResponse,
  JobScheduleExists200Response,
  JobScheduleExists404Response,
  JobScheduleExistsdefaultResponse,
  JobScheduleDelete202Response,
  JobScheduleDeletedefaultResponse,
  JobScheduleGet200Response,
  JobScheduleGetdefaultResponse,
  JobSchedulePatch200Response,
  JobSchedulePatchdefaultResponse,
  JobScheduleUpdate200Response,
  JobScheduleUpdatedefaultResponse,
  JobScheduleDisable204Response,
  JobScheduleDisabledefaultResponse,
  JobScheduleEnable204Response,
  JobScheduleEnabledefaultResponse,
  JobScheduleTerminate202Response,
  JobScheduleTerminatedefaultResponse,
  JobScheduleAdd201Response,
  JobScheduleAdddefaultResponse,
  JobScheduleList200Response,
  JobScheduleListdefaultResponse,
  TaskAdd201Response,
  TaskAdddefaultResponse,
  TaskList200Response,
  TaskListdefaultResponse,
  TaskAddCollection200Response,
  TaskAddCollectiondefaultResponse,
  TaskDelete200Response,
  TaskDeletedefaultResponse,
  TaskGet200Response,
  TaskGetdefaultResponse,
  TaskUpdate200Response,
  TaskUpdatedefaultResponse,
  TaskListSubtasks200Response,
  TaskListSubtasksdefaultResponse,
  TaskTerminate204Response,
  TaskTerminatedefaultResponse,
  TaskReactivate204Response,
  TaskReactivatedefaultResponse,
  ComputeNodeAddUser201Response,
  ComputeNodeAddUserdefaultResponse,
  ComputeNodeDeleteUser200Response,
  ComputeNodeDeleteUserdefaultResponse,
  ComputeNodeUpdateUser200Response,
  ComputeNodeUpdateUserdefaultResponse,
  ComputeNodeGet200Response,
  ComputeNodeGetdefaultResponse,
  ComputeNodeReboot202Response,
  ComputeNodeRebootdefaultResponse,
  ComputeNodeReimage202Response,
  ComputeNodeReimagedefaultResponse,
  ComputeNodeDisableScheduling200Response,
  ComputeNodeDisableSchedulingdefaultResponse,
  ComputeNodeEnableScheduling200Response,
  ComputeNodeEnableSchedulingdefaultResponse,
  ComputeNodeGetRemoteLoginSettings200Response,
  ComputeNodeGetRemoteLoginSettingsdefaultResponse,
  ComputeNodeGetRemoteDesktop200Response,
  ComputeNodeGetRemoteDesktopdefaultResponse,
  ComputeNodeUploadBatchServiceLogs200Response,
  ComputeNodeUploadBatchServiceLogsdefaultResponse,
  ComputeNodeList200Response,
  ComputeNodeListdefaultResponse,
  ComputeNodeExtensionGet200Response,
  ComputeNodeExtensionGetdefaultResponse,
  ComputeNodeExtensionList200Response,
  ComputeNodeExtensionListdefaultResponse
} from "./responses";
import { Client } from "@azure-rest/core-client";

export interface ApplicationList {
  /** This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API. */
  get(
    options?: ApplicationListParameters
  ): Promise<ApplicationList200Response | ApplicationListdefaultResponse>;
}

export interface ApplicationGet {
  /** This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about Applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API. */
  get(
    options?: ApplicationGetParameters
  ): Promise<ApplicationGet200Response | ApplicationGetdefaultResponse>;
}

export interface PoolListUsageMetrics {
  /** If you do not specify a $filter clause including a poolId, the response includes all Pools that existed in the Account in the time range of the returned aggregation intervals. If you do not specify a $filter clause including a startTime or endTime these filters default to the start and end times of the last aggregation interval currently available; that is, only the last aggregation interval is returned. */
  get(
    options?: PoolListUsageMetricsParameters
  ): Promise<
    PoolListUsageMetrics200Response | PoolListUsageMetricsdefaultResponse
  >;
}

export interface PoolGetAllLifetimeStatistics {
  /** Statistics are aggregated across all Pools that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes. */
  get(
    options?: PoolGetAllLifetimeStatisticsParameters
  ): Promise<
    | PoolGetAllLifetimeStatistics200Response
    | PoolGetAllLifetimeStatisticsdefaultResponse
  >;
}

export interface PoolAdd {
  /** When naming Pools, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers. */
  post(
    options: PoolAddParameters
  ): Promise<PoolAdd201Response | PoolAdddefaultResponse>;
  /** Lists all of the Pools in the specified Account. */
  get(
    options?: PoolListParameters
  ): Promise<PoolList200Response | PoolListdefaultResponse>;
}

export interface PoolDelete {
  /** When you request that a Pool be deleted, the following actions occur: the Pool state is set to deleting; any ongoing resize operation on the Pool are stopped; the Batch service starts resizing the Pool to zero Compute Nodes; any Tasks running on existing Compute Nodes are terminated and requeued (as if a resize Pool operation had been requested with the default requeue option); finally, the Pool is removed from the system. Because running Tasks are requeued, the user can rerun these Tasks by updating their Job to target a different Pool. The Tasks can then run on the new Pool. If you want to override the requeue behavior, then you should call resize Pool explicitly to shrink the Pool to zero size before deleting the Pool. If you call an Update, Patch or Delete API on a Pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted. */
  delete(
    options?: PoolDeleteParameters
  ): Promise<PoolDelete202Response | PoolDeletedefaultResponse>;
  /** Gets basic properties of a Pool. */
  head(
    options?: PoolExistsParameters
  ): Promise<
    PoolExists200Response | PoolExists404Response | PoolExistsdefaultResponse
  >;
  /** Gets information about the specified Pool. */
  get(
    options?: PoolGetParameters
  ): Promise<PoolGet200Response | PoolGetdefaultResponse>;
  /** This only replaces the Pool properties specified in the request. For example, if the Pool has a StartTask associated with it, and a request does not specify a StartTask element, then the Pool keeps the existing StartTask. */
  patch(
    options: PoolPatchParameters
  ): Promise<PoolPatch200Response | PoolPatchdefaultResponse>;
}

export interface PoolDisableAutoScale {
  /** Disables automatic scaling for a Pool. */
  post(
    options?: PoolDisableAutoScaleParameters
  ): Promise<
    PoolDisableAutoScale200Response | PoolDisableAutoScaledefaultResponse
  >;
}

export interface PoolEnableAutoScale {
  /** You cannot enable automatic scaling on a Pool if a resize operation is in progress on the Pool. If automatic scaling of the Pool is currently disabled, you must specify a valid autoscale formula as part of the request. If automatic scaling of the Pool is already enabled, you may specify a new autoscale formula and/or a new evaluation interval. You cannot call this API for the same Pool more than once every 30 seconds. */
  post(
    options: PoolEnableAutoScaleParameters
  ): Promise<
    PoolEnableAutoScale200Response | PoolEnableAutoScaledefaultResponse
  >;
}

export interface PoolEvaluateAutoScale {
  /** This API is primarily for validating an autoscale formula, as it simply returns the result without applying the formula to the Pool. The Pool must have auto scaling enabled in order to evaluate a formula. */
  post(
    options: PoolEvaluateAutoScaleParameters
  ): Promise<
    PoolEvaluateAutoScale200Response | PoolEvaluateAutoScaledefaultResponse
  >;
}

export interface PoolResize {
  /** You can only resize a Pool when its allocation state is steady. If the Pool is already resizing, the request fails with status code 409. When you resize a Pool, the Pool's allocation state changes from steady to resizing. You cannot resize Pools which are configured for automatic scaling. If you try to do this, the Batch service returns an error 409. If you resize a Pool downwards, the Batch service chooses which Compute Nodes to remove. To remove specific Compute Nodes, use the Pool remove Compute Nodes API instead. */
  post(
    options: PoolResizeParameters
  ): Promise<PoolResize202Response | PoolResizedefaultResponse>;
}

export interface PoolStopResize {
  /** This does not restore the Pool to its previous state before the resize operation: it only stops any further changes being made, and the Pool maintains its current state. After stopping, the Pool stabilizes at the number of Compute Nodes it was at when the stop operation was done. During the stop operation, the Pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize Pool request; this API can also be used to halt the initial sizing of the Pool when it is created. */
  post(
    options?: PoolStopResizeParameters
  ): Promise<PoolStopResize202Response | PoolStopResizedefaultResponse>;
}

export interface PoolUpdateProperties {
  /** This fully replaces all the updatable properties of the Pool. For example, if the Pool has a StartTask associated with it and if StartTask is not specified with this request, then the Batch service will remove the existing StartTask. */
  post(
    options: PoolUpdatePropertiesParameters
  ): Promise<
    PoolUpdateProperties204Response | PoolUpdatePropertiesdefaultResponse
  >;
}

export interface PoolRemoveNodes {
  /** This operation can only run when the allocation state of the Pool is steady. When this operation runs, the allocation state changes from steady to resizing. Each request may remove up to 100 nodes. */
  post(
    options: PoolRemoveNodesParameters
  ): Promise<PoolRemoveNodes202Response | PoolRemoveNodesdefaultResponse>;
}

export interface AccountListSupportedImages {
  /** Lists all Virtual Machine Images supported by the Azure Batch service. */
  get(
    options?: AccountListSupportedImagesParameters
  ): Promise<
    | AccountListSupportedImages200Response
    | AccountListSupportedImagesdefaultResponse
  >;
}

export interface AccountListPoolNodeCounts {
  /** Gets the number of Compute Nodes in each state, grouped by Pool. Note that the numbers returned may not always be up to date. If you need exact node counts, use a list query. */
  get(
    options?: AccountListPoolNodeCountsParameters
  ): Promise<
    | AccountListPoolNodeCounts200Response
    | AccountListPoolNodeCountsdefaultResponse
  >;
}

export interface JobGetAllLifetimeStatistics {
  /** Statistics are aggregated across all Jobs that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes. */
  get(
    options?: JobGetAllLifetimeStatisticsParameters
  ): Promise<
    | JobGetAllLifetimeStatistics200Response
    | JobGetAllLifetimeStatisticsdefaultResponse
  >;
}

export interface JobDelete {
  /** Deleting a Job also deletes all Tasks that are part of that Job, and all Job statistics. This also overrides the retention period for Task data; that is, if the Job contains Tasks which are still retained on Compute Nodes, the Batch services deletes those Tasks' working directories and all their contents.  When a Delete Job request is received, the Batch service sets the Job to the deleting state. All update operations on a Job that is in deleting state will fail with status code 409 (Conflict), with additional information indicating that the Job is being deleted. */
  delete(
    options?: JobDeleteParameters
  ): Promise<JobDelete202Response | JobDeletedefaultResponse>;
  /** Gets information about the specified Job. */
  get(
    options?: JobGetParameters
  ): Promise<JobGet200Response | JobGetdefaultResponse>;
  /** This replaces only the Job properties specified in the request. For example, if the Job has constraints, and a request does not specify the constraints element, then the Job keeps the existing constraints. */
  patch(
    options: JobPatchParameters
  ): Promise<JobPatch200Response | JobPatchdefaultResponse>;
  /** This fully replaces all the updatable properties of the Job. For example, if the Job has constraints associated with it and if constraints is not specified with this request, then the Batch service will remove the existing constraints. */
  put(
    options: JobUpdateParameters
  ): Promise<JobUpdate200Response | JobUpdatedefaultResponse>;
}

export interface JobDisable {
  /** The Batch Service immediately moves the Job to the disabling state. Batch then uses the disableTasks parameter to determine what to do with the currently running Tasks of the Job. The Job remains in the disabling state until the disable operation is completed and all Tasks have been dealt with according to the disableTasks option; the Job then moves to the disabled state. No new Tasks are started under the Job until it moves back to active state. If you try to disable a Job that is in any state other than active, disabling, or disabled, the request fails with status code 409. */
  post(
    options: JobDisableParameters
  ): Promise<JobDisable202Response | JobDisabledefaultResponse>;
}

export interface JobEnable {
  /** When you call this API, the Batch service sets a disabled Job to the enabling state. After the this operation is completed, the Job moves to the active state, and scheduling of new Tasks under the Job resumes. The Batch service does not allow a Task to remain in the active state for more than 180 days. Therefore, if you enable a Job containing active Tasks which were added more than 180 days ago, those Tasks will not run. */
  post(
    options?: JobEnableParameters
  ): Promise<JobEnable202Response | JobEnabledefaultResponse>;
}

export interface JobTerminate {
  /** When a Terminate Job request is received, the Batch service sets the Job to the terminating state. The Batch service then terminates any running Tasks associated with the Job and runs any required Job release Tasks. Then the Job moves into the completed state. If there are any Tasks in the Job in the active state, they will remain in the active state. Once a Job is terminated, new Tasks cannot be added and any remaining active Tasks will not be scheduled. */
  post(
    options?: JobTerminateParameters
  ): Promise<JobTerminate202Response | JobTerminatedefaultResponse>;
}

export interface JobAdd {
  /** The Batch service supports two ways to control the work done as part of a Job. In the first approach, the user specifies a Job Manager Task. The Batch service launches this Task when it is ready to start the Job. The Job Manager Task controls all other Tasks that run under this Job, by using the Task APIs. In the second approach, the user directly controls the execution of Tasks under an active Job, by using the Task APIs. Also note: when naming Jobs, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers. */
  post(
    options: JobAddParameters
  ): Promise<JobAdd201Response | JobAdddefaultResponse>;
  /** Lists all of the Jobs in the specified Account. */
  get(
    options?: JobListParameters
  ): Promise<JobList200Response | JobListdefaultResponse>;
}

export interface JobListFromJobSchedule {
  /** Lists the Jobs that have been created under the specified Job Schedule. */
  get(
    options?: JobListFromJobScheduleParameters
  ): Promise<
    JobListFromJobSchedule200Response | JobListFromJobScheduledefaultResponse
  >;
}

export interface JobListPreparationAndReleaseTaskStatus {
  /** This API returns the Job Preparation and Job Release Task status on all Compute Nodes that have run the Job Preparation or Job Release Task. This includes Compute Nodes which have since been removed from the Pool. If this API is invoked on a Job which has no Job Preparation or Job Release Task, the Batch service returns HTTP status code 409 (Conflict) with an error code of JobPreparationTaskNotSpecified. */
  get(
    options?: JobListPreparationAndReleaseTaskStatusParameters
  ): Promise<
    | JobListPreparationAndReleaseTaskStatus200Response
    | JobListPreparationAndReleaseTaskStatusdefaultResponse
  >;
}

export interface JobGetTaskCounts {
  /** Task counts provide a count of the Tasks by active, running or completed Task state, and a count of Tasks which succeeded or failed. Tasks in the preparing state are counted as running. Note that the numbers returned may not always be up to date. If you need exact task counts, use a list query. */
  get(
    options?: JobGetTaskCountsParameters
  ): Promise<JobGetTaskCounts200Response | JobGetTaskCountsdefaultResponse>;
}

export interface CertificateAdd {
  /** Adds a Certificate to the specified Account. */
  post(
    options: CertificateAddParameters
  ): Promise<CertificateAdd201Response | CertificateAdddefaultResponse>;
  /** Lists all of the Certificates that have been added to the specified Account. */
  get(
    options?: CertificateListParameters
  ): Promise<CertificateList200Response | CertificateListdefaultResponse>;
}

export interface CertificateCancelDeletion {
  /** If you try to delete a Certificate that is being used by a Pool or Compute Node, the status of the Certificate changes to deleteFailed. If you decide that you want to continue using the Certificate, you can use this operation to set the status of the Certificate back to active. If you intend to delete the Certificate, you do not need to run this operation after the deletion failed. You must make sure that the Certificate is not being used by any resources, and then you can try again to delete the Certificate. */
  post(
    options?: CertificateCancelDeletionParameters
  ): Promise<
    | CertificateCancelDeletion204Response
    | CertificateCancelDeletiondefaultResponse
  >;
}

export interface CertificateDelete {
  /** You cannot delete a Certificate if a resource (Pool or Compute Node) is using it. Before you can delete a Certificate, you must therefore make sure that the Certificate is not associated with any existing Pools, the Certificate is not installed on any Nodes (even if you remove a Certificate from a Pool, it is not removed from existing Compute Nodes in that Pool until they restart), and no running Tasks depend on the Certificate. If you try to delete a Certificate that is in use, the deletion fails. The Certificate status changes to deleteFailed. You can use Cancel Delete Certificate to set the status back to active if you decide that you want to continue using the Certificate. */
  delete(
    options?: CertificateDeleteParameters
  ): Promise<CertificateDelete202Response | CertificateDeletedefaultResponse>;
  /** Gets information about the specified Certificate. */
  get(
    options?: CertificateGetParameters
  ): Promise<CertificateGet200Response | CertificateGetdefaultResponse>;
}

export interface FileDeleteFromTask {
  /** Deletes the specified Task file from the Compute Node where the Task ran. */
  delete(
    options?: FileDeleteFromTaskParameters
  ): Promise<FileDeleteFromTask200Response | FileDeleteFromTaskdefaultResponse>;
  /** Returns the content of the specified Task file. */
  get(
    options?: FileGetFromTaskParameters
  ): Promise<FileGetFromTask200Response | FileGetFromTaskdefaultResponse>;
  /** Gets the properties of the specified Task file. */
  head(
    options?: FileGetPropertiesFromTaskParameters
  ): Promise<
    | FileGetPropertiesFromTask200Response
    | FileGetPropertiesFromTaskdefaultResponse
  >;
}

export interface FileDeleteFromComputeNode {
  /** Deletes the specified file from the Compute Node. */
  delete(
    options?: FileDeleteFromComputeNodeParameters
  ): Promise<
    | FileDeleteFromComputeNode200Response
    | FileDeleteFromComputeNodedefaultResponse
  >;
  /** Returns the content of the specified Compute Node file. */
  get(
    options?: FileGetFromComputeNodeParameters
  ): Promise<
    FileGetFromComputeNode200Response | FileGetFromComputeNodedefaultResponse
  >;
  /** Gets the properties of the specified Compute Node file. */
  head(
    options?: FileGetPropertiesFromComputeNodeParameters
  ): Promise<
    | FileGetPropertiesFromComputeNode200Response
    | FileGetPropertiesFromComputeNodedefaultResponse
  >;
}

export interface FileListFromTask {
  /** Lists the files in a Task's directory on its Compute Node. */
  get(
    options?: FileListFromTaskParameters
  ): Promise<FileListFromTask200Response | FileListFromTaskdefaultResponse>;
}

export interface FileListFromComputeNode {
  /** Lists all of the files in Task directories on the specified Compute Node. */
  get(
    options?: FileListFromComputeNodeParameters
  ): Promise<
    FileListFromComputeNode200Response | FileListFromComputeNodedefaultResponse
  >;
}

export interface JobScheduleExists {
  /** Checks the specified Job Schedule exists. */
  head(
    options?: JobScheduleExistsParameters
  ): Promise<
    | JobScheduleExists200Response
    | JobScheduleExists404Response
    | JobScheduleExistsdefaultResponse
  >;
  /** When you delete a Job Schedule, this also deletes all Jobs and Tasks under that schedule. When Tasks are deleted, all the files in their working directories on the Compute Nodes are also deleted (the retention period is ignored). The Job Schedule statistics are no longer accessible once the Job Schedule is deleted, though they are still counted towards Account lifetime statistics. */
  delete(
    options?: JobScheduleDeleteParameters
  ): Promise<JobScheduleDelete202Response | JobScheduleDeletedefaultResponse>;
  /** Gets information about the specified Job Schedule. */
  get(
    options?: JobScheduleGetParameters
  ): Promise<JobScheduleGet200Response | JobScheduleGetdefaultResponse>;
  /** This replaces only the Job Schedule properties specified in the request. For example, if the schedule property is not specified with this request, then the Batch service will keep the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected. */
  patch(
    options: JobSchedulePatchParameters
  ): Promise<JobSchedulePatch200Response | JobSchedulePatchdefaultResponse>;
  /** This fully replaces all the updatable properties of the Job Schedule. For example, if the schedule property is not specified with this request, then the Batch service will remove the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected. */
  put(
    options: JobScheduleUpdateParameters
  ): Promise<JobScheduleUpdate200Response | JobScheduleUpdatedefaultResponse>;
}

export interface JobScheduleDisable {
  /** No new Jobs will be created until the Job Schedule is enabled again. */
  post(
    options?: JobScheduleDisableParameters
  ): Promise<JobScheduleDisable204Response | JobScheduleDisabledefaultResponse>;
}

export interface JobScheduleEnable {
  /** Enables a Job Schedule. */
  post(
    options?: JobScheduleEnableParameters
  ): Promise<JobScheduleEnable204Response | JobScheduleEnabledefaultResponse>;
}

export interface JobScheduleTerminate {
  /** Terminates a Job Schedule. */
  post(
    options?: JobScheduleTerminateParameters
  ): Promise<
    JobScheduleTerminate202Response | JobScheduleTerminatedefaultResponse
  >;
}

export interface JobScheduleAdd {
  /** Adds a Job Schedule to the specified Account. */
  post(
    options: JobScheduleAddParameters
  ): Promise<JobScheduleAdd201Response | JobScheduleAdddefaultResponse>;
  /** Lists all of the Job Schedules in the specified Account. */
  get(
    options?: JobScheduleListParameters
  ): Promise<JobScheduleList200Response | JobScheduleListdefaultResponse>;
}

export interface TaskAdd {
  /** The maximum lifetime of a Task from addition to completion is 180 days. If a Task has not completed within 180 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time. */
  post(
    options: TaskAddParameters
  ): Promise<TaskAdd201Response | TaskAdddefaultResponse>;
  /** For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks. */
  get(
    options?: TaskListParameters
  ): Promise<TaskList200Response | TaskListdefaultResponse>;
}

export interface TaskAddCollection {
  /** Note that each Task must have a unique ID. The Batch service may not return the results for each Task in the same order the Tasks were submitted in this request. If the server times out or the connection is closed during the request, the request may have been partially or fully processed, or not at all. In such cases, the user should re-issue the request. Note that it is up to the user to correctly handle failures when re-issuing a request. For example, you should use the same Task IDs during a retry so that if the prior operation succeeded, the retry will not create extra Tasks unexpectedly. If the response contains any Tasks which failed to add, a client can retry the request. In a retry, it is most efficient to resubmit only Tasks that failed to add, and to omit Tasks that were successfully added on the first attempt. The maximum lifetime of a Task from addition to completion is 180 days. If a Task has not completed within 180 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time. */
  post(
    options: TaskAddCollectionParameters
  ): Promise<TaskAddCollection200Response | TaskAddCollectiondefaultResponse>;
}

export interface TaskDelete {
  /** When a Task is deleted, all of the files in its directory on the Compute Node where it ran are also deleted (regardless of the retention time). For multi-instance Tasks, the delete Task operation applies synchronously to the primary task; subtasks and their files are then deleted asynchronously in the background. */
  delete(
    options?: TaskDeleteParameters
  ): Promise<TaskDelete200Response | TaskDeletedefaultResponse>;
  /** For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks. */
  get(
    options?: TaskGetParameters
  ): Promise<TaskGet200Response | TaskGetdefaultResponse>;
  /** Updates the properties of the specified Task. */
  put(
    options: TaskUpdateParameters
  ): Promise<TaskUpdate200Response | TaskUpdatedefaultResponse>;
}

export interface TaskListSubtasks {
  /** If the Task is not a multi-instance Task then this returns an empty collection. */
  get(
    options?: TaskListSubtasksParameters
  ): Promise<TaskListSubtasks200Response | TaskListSubtasksdefaultResponse>;
}

export interface TaskTerminate {
  /** When the Task has been terminated, it moves to the completed state. For multi-instance Tasks, the terminate Task operation applies synchronously to the primary task; subtasks are then terminated asynchronously in the background. */
  post(
    options?: TaskTerminateParameters
  ): Promise<TaskTerminate204Response | TaskTerminatedefaultResponse>;
}

export interface TaskReactivate {
  /** Reactivation makes a Task eligible to be retried again up to its maximum retry count. The Task's state is changed to active. As the Task is no longer in the completed state, any previous exit code or failure information is no longer available after reactivation. Each time a Task is reactivated, its retry count is reset to 0. Reactivation will fail for Tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, it will fail if the Job has completed (or is terminating or deleting). */
  post(
    options?: TaskReactivateParameters
  ): Promise<TaskReactivate204Response | TaskReactivatedefaultResponse>;
}

export interface ComputeNodeAddUser {
  /** You can add a user Account to a Compute Node only when it is in the idle or running state. */
  post(
    options: ComputeNodeAddUserParameters
  ): Promise<ComputeNodeAddUser201Response | ComputeNodeAddUserdefaultResponse>;
}

export interface ComputeNodeDeleteUser {
  /** You can delete a user Account to a Compute Node only when it is in the idle or running state. */
  delete(
    options?: ComputeNodeDeleteUserParameters
  ): Promise<
    ComputeNodeDeleteUser200Response | ComputeNodeDeleteUserdefaultResponse
  >;
  /** This operation replaces of all the updatable properties of the Account. For example, if the expiryTime element is not specified, the current value is replaced with the default value, not left unmodified. You can update a user Account on a Compute Node only when it is in the idle or running state. */
  put(
    options: ComputeNodeUpdateUserParameters
  ): Promise<
    ComputeNodeUpdateUser200Response | ComputeNodeUpdateUserdefaultResponse
  >;
}

export interface ComputeNodeGet {
  /** Gets information about the specified Compute Node. */
  get(
    options?: ComputeNodeGetParameters
  ): Promise<ComputeNodeGet200Response | ComputeNodeGetdefaultResponse>;
}

export interface ComputeNodeReboot {
  /** You can restart a Compute Node only if it is in an idle or running state. */
  post(
    options?: ComputeNodeRebootParameters
  ): Promise<ComputeNodeReboot202Response | ComputeNodeRebootdefaultResponse>;
}

export interface ComputeNodeReimage {
  /** You can reinstall the operating system on a Compute Node only if it is in an idle or running state. This API can be invoked only on Pools created with the cloud service configuration property. */
  post(
    options?: ComputeNodeReimageParameters
  ): Promise<ComputeNodeReimage202Response | ComputeNodeReimagedefaultResponse>;
}

export interface ComputeNodeDisableScheduling {
  /** You can disable Task scheduling on a Compute Node only if its current scheduling state is enabled. */
  post(
    options?: ComputeNodeDisableSchedulingParameters
  ): Promise<
    | ComputeNodeDisableScheduling200Response
    | ComputeNodeDisableSchedulingdefaultResponse
  >;
}

export interface ComputeNodeEnableScheduling {
  /** You can enable Task scheduling on a Compute Node only if its current scheduling state is disabled */
  post(
    options?: ComputeNodeEnableSchedulingParameters
  ): Promise<
    | ComputeNodeEnableScheduling200Response
    | ComputeNodeEnableSchedulingdefaultResponse
  >;
}

export interface ComputeNodeGetRemoteLoginSettings {
  /** Before you can remotely login to a Compute Node using the remote login settings, you must create a user Account on the Compute Node. This API can be invoked only on Pools created with the virtual machine configuration property. For Pools created with a cloud service configuration, see the GetRemoteDesktop API. */
  get(
    options?: ComputeNodeGetRemoteLoginSettingsParameters
  ): Promise<
    | ComputeNodeGetRemoteLoginSettings200Response
    | ComputeNodeGetRemoteLoginSettingsdefaultResponse
  >;
}

export interface ComputeNodeGetRemoteDesktop {
  /** Before you can access a Compute Node by using the RDP file, you must create a user Account on the Compute Node. This API can only be invoked on Pools created with a cloud service configuration. For Pools created with a virtual machine configuration, see the GetRemoteLoginSettings API. */
  get(
    options?: ComputeNodeGetRemoteDesktopParameters
  ): Promise<
    | ComputeNodeGetRemoteDesktop200Response
    | ComputeNodeGetRemoteDesktopdefaultResponse
  >;
}

export interface ComputeNodeUploadBatchServiceLogs {
  /** This is for gathering Azure Batch service log files in an automated fashion from Compute Nodes if you are experiencing an error and wish to escalate to Azure support. The Azure Batch service log files should be shared with Azure support to aid in debugging issues with the Batch service. */
  post(
    options: ComputeNodeUploadBatchServiceLogsParameters
  ): Promise<
    | ComputeNodeUploadBatchServiceLogs200Response
    | ComputeNodeUploadBatchServiceLogsdefaultResponse
  >;
}

export interface ComputeNodeList {
  /** Lists the Compute Nodes in the specified Pool. */
  get(
    options?: ComputeNodeListParameters
  ): Promise<ComputeNodeList200Response | ComputeNodeListdefaultResponse>;
}

export interface ComputeNodeExtensionGet {
  /** Gets information about the specified Compute Node Extension. */
  get(
    options?: ComputeNodeExtensionGetParameters
  ): Promise<
    ComputeNodeExtensionGet200Response | ComputeNodeExtensionGetdefaultResponse
  >;
}

export interface ComputeNodeExtensionList {
  /** Lists the Compute Nodes Extensions in the specified Pool. */
  get(
    options?: ComputeNodeExtensionListParameters
  ): Promise<
    | ComputeNodeExtensionList200Response
    | ComputeNodeExtensionListdefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/applications' has methods for the following verbs: get */
  (path: "/applications"): ApplicationList;
  /** Resource for '/applications/\{applicationId\}' has methods for the following verbs: get */
  (
    path: "/applications/{applicationId}",
    applicationId: string
  ): ApplicationGet;
  /** Resource for '/poolusagemetrics' has methods for the following verbs: get */
  (path: "/poolusagemetrics"): PoolListUsageMetrics;
  /** Resource for '/lifetimepoolstats' has methods for the following verbs: get */
  (path: "/lifetimepoolstats"): PoolGetAllLifetimeStatistics;
  /** Resource for '/pools' has methods for the following verbs: post, get */
  (path: "/pools"): PoolAdd;
  /** Resource for '/pools/\{poolId\}' has methods for the following verbs: delete, head, get, patch */
  (path: "/pools/{poolId}", poolId: string): PoolDelete;
  /** Resource for '/pools/\{poolId\}/disableautoscale' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/disableautoscale",
    poolId: string
  ): PoolDisableAutoScale;
  /** Resource for '/pools/\{poolId\}/enableautoscale' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/enableautoscale",
    poolId: string
  ): PoolEnableAutoScale;
  /** Resource for '/pools/\{poolId\}/evaluateautoscale' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/evaluateautoscale",
    poolId: string
  ): PoolEvaluateAutoScale;
  /** Resource for '/pools/\{poolId\}/resize' has methods for the following verbs: post */
  (path: "/pools/{poolId}/resize", poolId: string): PoolResize;
  /** Resource for '/pools/\{poolId\}/stopresize' has methods for the following verbs: post */
  (path: "/pools/{poolId}/stopresize", poolId: string): PoolStopResize;
  /** Resource for '/pools/\{poolId\}/updateproperties' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/updateproperties",
    poolId: string
  ): PoolUpdateProperties;
  /** Resource for '/pools/\{poolId\}/removenodes' has methods for the following verbs: post */
  (path: "/pools/{poolId}/removenodes", poolId: string): PoolRemoveNodes;
  /** Resource for '/supportedimages' has methods for the following verbs: get */
  (path: "/supportedimages"): AccountListSupportedImages;
  /** Resource for '/nodecounts' has methods for the following verbs: get */
  (path: "/nodecounts"): AccountListPoolNodeCounts;
  /** Resource for '/lifetimejobstats' has methods for the following verbs: get */
  (path: "/lifetimejobstats"): JobGetAllLifetimeStatistics;
  /** Resource for '/jobs/\{jobId\}' has methods for the following verbs: delete, get, patch, put */
  (path: "/jobs/{jobId}", jobId: string): JobDelete;
  /** Resource for '/jobs/\{jobId\}/disable' has methods for the following verbs: post */
  (path: "/jobs/{jobId}/disable", jobId: string): JobDisable;
  /** Resource for '/jobs/\{jobId\}/enable' has methods for the following verbs: post */
  (path: "/jobs/{jobId}/enable", jobId: string): JobEnable;
  /** Resource for '/jobs/\{jobId\}/terminate' has methods for the following verbs: post */
  (path: "/jobs/{jobId}/terminate", jobId: string): JobTerminate;
  /** Resource for '/jobs' has methods for the following verbs: post, get */
  (path: "/jobs"): JobAdd;
  /** Resource for '/jobschedules/\{jobScheduleId\}/jobs' has methods for the following verbs: get */
  (
    path: "/jobschedules/{jobScheduleId}/jobs",
    jobScheduleId: string
  ): JobListFromJobSchedule;
  /** Resource for '/jobs/\{jobId\}/jobpreparationandreleasetaskstatus' has methods for the following verbs: get */
  (
    path: "/jobs/{jobId}/jobpreparationandreleasetaskstatus",
    jobId: string
  ): JobListPreparationAndReleaseTaskStatus;
  /** Resource for '/jobs/\{jobId\}/taskcounts' has methods for the following verbs: get */
  (path: "/jobs/{jobId}/taskcounts", jobId: string): JobGetTaskCounts;
  /** Resource for '/certificates' has methods for the following verbs: post, get */
  (path: "/certificates"): CertificateAdd;
  /** Resource for '/certificates(thumbprintAlgorithm=\{thumbprintAlgorithm\},thumbprint=\{thumbprint\})/canceldelete' has methods for the following verbs: post */
  (
    path: "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete",
    thumbprintAlgorithm: string,
    thumbprint: string
  ): CertificateCancelDeletion;
  /** Resource for '/certificates(thumbprintAlgorithm=\{thumbprintAlgorithm\},thumbprint=\{thumbprint\})' has methods for the following verbs: delete, get */
  (
    path: "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
    thumbprintAlgorithm: string,
    thumbprint: string
  ): CertificateDelete;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/files/\{filePath\}' has methods for the following verbs: delete, get, head */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
    jobId: string,
    taskId: string,
    filePath: string
  ): FileDeleteFromTask;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/files/\{filePath\}' has methods for the following verbs: delete, get, head */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
    poolId: string,
    nodeId: string,
    filePath: string
  ): FileDeleteFromComputeNode;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/files' has methods for the following verbs: get */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/files",
    jobId: string,
    taskId: string
  ): FileListFromTask;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/files' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/files",
    poolId: string,
    nodeId: string
  ): FileListFromComputeNode;
  /** Resource for '/jobschedules/\{jobScheduleId\}' has methods for the following verbs: head, delete, get, patch, put */
  (
    path: "/jobschedules/{jobScheduleId}",
    jobScheduleId: string
  ): JobScheduleExists;
  /** Resource for '/jobschedules/\{jobScheduleId\}/disable' has methods for the following verbs: post */
  (
    path: "/jobschedules/{jobScheduleId}/disable",
    jobScheduleId: string
  ): JobScheduleDisable;
  /** Resource for '/jobschedules/\{jobScheduleId\}/enable' has methods for the following verbs: post */
  (
    path: "/jobschedules/{jobScheduleId}/enable",
    jobScheduleId: string
  ): JobScheduleEnable;
  /** Resource for '/jobschedules/\{jobScheduleId\}/terminate' has methods for the following verbs: post */
  (
    path: "/jobschedules/{jobScheduleId}/terminate",
    jobScheduleId: string
  ): JobScheduleTerminate;
  /** Resource for '/jobschedules' has methods for the following verbs: post, get */
  (path: "/jobschedules"): JobScheduleAdd;
  /** Resource for '/jobs/\{jobId\}/tasks' has methods for the following verbs: post, get */
  (path: "/jobs/{jobId}/tasks", jobId: string): TaskAdd;
  /** Resource for '/jobs/\{jobId\}/addtaskcollection' has methods for the following verbs: post */
  (path: "/jobs/{jobId}/addtaskcollection", jobId: string): TaskAddCollection;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}' has methods for the following verbs: delete, get, put */
  (
    path: "/jobs/{jobId}/tasks/{taskId}",
    jobId: string,
    taskId: string
  ): TaskDelete;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/subtasksinfo' has methods for the following verbs: get */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/subtasksinfo",
    jobId: string,
    taskId: string
  ): TaskListSubtasks;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/terminate' has methods for the following verbs: post */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/terminate",
    jobId: string,
    taskId: string
  ): TaskTerminate;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/reactivate' has methods for the following verbs: post */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/reactivate",
    jobId: string,
    taskId: string
  ): TaskReactivate;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/users' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/users",
    poolId: string,
    nodeId: string
  ): ComputeNodeAddUser;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/users/\{userName\}' has methods for the following verbs: delete, put */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
    poolId: string,
    nodeId: string,
    userName: string
  ): ComputeNodeDeleteUser;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}",
    poolId: string,
    nodeId: string
  ): ComputeNodeGet;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/reboot' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/reboot",
    poolId: string,
    nodeId: string
  ): ComputeNodeReboot;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/reimage' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/reimage",
    poolId: string,
    nodeId: string
  ): ComputeNodeReimage;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/disablescheduling' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/disablescheduling",
    poolId: string,
    nodeId: string
  ): ComputeNodeDisableScheduling;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/enablescheduling' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/enablescheduling",
    poolId: string,
    nodeId: string
  ): ComputeNodeEnableScheduling;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/remoteloginsettings' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/remoteloginsettings",
    poolId: string,
    nodeId: string
  ): ComputeNodeGetRemoteLoginSettings;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/rdp' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/rdp",
    poolId: string,
    nodeId: string
  ): ComputeNodeGetRemoteDesktop;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/uploadbatchservicelogs' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs",
    poolId: string,
    nodeId: string
  ): ComputeNodeUploadBatchServiceLogs;
  /** Resource for '/pools/\{poolId\}/nodes' has methods for the following verbs: get */
  (path: "/pools/{poolId}/nodes", poolId: string): ComputeNodeList;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/extensions/\{extensionName\}' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}",
    poolId: string,
    nodeId: string,
    extensionName: string
  ): ComputeNodeExtensionGet;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/extensions' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/extensions",
    poolId: string,
    nodeId: string
  ): ComputeNodeExtensionList;
}

export type BatchGeneratedClient = Client & {
  path: Routes;
};
