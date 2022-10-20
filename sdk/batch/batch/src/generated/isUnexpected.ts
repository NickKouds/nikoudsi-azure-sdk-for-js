// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ApplicationList200Response,
  ApplicationListDefaultResponse,
  ApplicationGet200Response,
  ApplicationGetDefaultResponse,
  PoolListUsageMetrics200Response,
  PoolListUsageMetricsDefaultResponse,
  PoolGetAllLifetimeStatistics200Response,
  PoolGetAllLifetimeStatisticsDefaultResponse,
  PoolAdd201Response,
  PoolAddDefaultResponse,
  PoolList200Response,
  PoolListDefaultResponse,
  PoolDelete202Response,
  PoolDeleteDefaultResponse,
  PoolExists200Response,
  PoolExists404Response,
  PoolExistsDefaultResponse,
  PoolGet200Response,
  PoolGetDefaultResponse,
  PoolPatch200Response,
  PoolPatchDefaultResponse,
  PoolDisableAutoScale200Response,
  PoolDisableAutoScaleDefaultResponse,
  PoolEnableAutoScale200Response,
  PoolEnableAutoScaleDefaultResponse,
  PoolEvaluateAutoScale200Response,
  PoolEvaluateAutoScaleDefaultResponse,
  PoolResize202Response,
  PoolResizeDefaultResponse,
  PoolStopResize202Response,
  PoolStopResizeDefaultResponse,
  PoolUpdateProperties204Response,
  PoolUpdatePropertiesDefaultResponse,
  PoolRemoveNodes202Response,
  PoolRemoveNodesDefaultResponse,
  AccountListSupportedImages200Response,
  AccountListSupportedImagesDefaultResponse,
  AccountListPoolNodeCounts200Response,
  AccountListPoolNodeCountsDefaultResponse,
  JobGetAllLifetimeStatistics200Response,
  JobGetAllLifetimeStatisticsDefaultResponse,
  JobDelete202Response,
  JobDeleteDefaultResponse,
  JobGet200Response,
  JobGetDefaultResponse,
  JobPatch200Response,
  JobPatchDefaultResponse,
  JobUpdate200Response,
  JobUpdateDefaultResponse,
  JobDisable202Response,
  JobDisableDefaultResponse,
  JobEnable202Response,
  JobEnableDefaultResponse,
  JobTerminate202Response,
  JobTerminateDefaultResponse,
  JobAdd201Response,
  JobAddDefaultResponse,
  JobList200Response,
  JobListDefaultResponse,
  JobListFromJobSchedule200Response,
  JobListFromJobScheduleDefaultResponse,
  JobListPreparationAndReleaseTaskStatus200Response,
  JobListPreparationAndReleaseTaskStatusDefaultResponse,
  JobGetTaskCounts200Response,
  JobGetTaskCountsDefaultResponse,
  CertificateAdd201Response,
  CertificateAddDefaultResponse,
  CertificateList200Response,
  CertificateListDefaultResponse,
  CertificateCancelDeletion204Response,
  CertificateCancelDeletionDefaultResponse,
  CertificateDelete202Response,
  CertificateDeleteDefaultResponse,
  CertificateGet200Response,
  CertificateGetDefaultResponse,
  FileDeleteFromTask200Response,
  FileDeleteFromTaskDefaultResponse,
  FileGetFromTask200Response,
  FileGetFromTaskDefaultResponse,
  FileGetPropertiesFromTask200Response,
  FileGetPropertiesFromTaskDefaultResponse,
  FileDeleteFromComputeNode200Response,
  FileDeleteFromComputeNodeDefaultResponse,
  FileGetFromComputeNode200Response,
  FileGetFromComputeNodeDefaultResponse,
  FileGetPropertiesFromComputeNode200Response,
  FileGetPropertiesFromComputeNodeDefaultResponse,
  FileListFromTask200Response,
  FileListFromTaskDefaultResponse,
  FileListFromComputeNode200Response,
  FileListFromComputeNodeDefaultResponse,
  JobScheduleExists200Response,
  JobScheduleExists404Response,
  JobScheduleExistsDefaultResponse,
  JobScheduleDelete202Response,
  JobScheduleDeleteDefaultResponse,
  JobScheduleGet200Response,
  JobScheduleGetDefaultResponse,
  JobSchedulePatch200Response,
  JobSchedulePatchDefaultResponse,
  JobScheduleUpdate200Response,
  JobScheduleUpdateDefaultResponse,
  JobScheduleDisable204Response,
  JobScheduleDisableDefaultResponse,
  JobScheduleEnable204Response,
  JobScheduleEnableDefaultResponse,
  JobScheduleTerminate202Response,
  JobScheduleTerminateDefaultResponse,
  JobScheduleAdd201Response,
  JobScheduleAddDefaultResponse,
  JobScheduleList200Response,
  JobScheduleListDefaultResponse,
  TaskAdd201Response,
  TaskAddDefaultResponse,
  TaskList200Response,
  TaskListDefaultResponse,
  TaskAddCollection200Response,
  TaskAddCollectionDefaultResponse,
  TaskDelete200Response,
  TaskDeleteDefaultResponse,
  TaskGet200Response,
  TaskGetDefaultResponse,
  TaskUpdate200Response,
  TaskUpdateDefaultResponse,
  TaskListSubtasks200Response,
  TaskListSubtasksDefaultResponse,
  TaskTerminate204Response,
  TaskTerminateDefaultResponse,
  TaskReactivate204Response,
  TaskReactivateDefaultResponse,
  ComputeNodeAddUser201Response,
  ComputeNodeAddUserDefaultResponse,
  ComputeNodeDeleteUser200Response,
  ComputeNodeDeleteUserDefaultResponse,
  ComputeNodeUpdateUser200Response,
  ComputeNodeUpdateUserDefaultResponse,
  ComputeNodeGet200Response,
  ComputeNodeGetDefaultResponse,
  ComputeNodeReboot202Response,
  ComputeNodeRebootDefaultResponse,
  ComputeNodeReimage202Response,
  ComputeNodeReimageDefaultResponse,
  ComputeNodeDisableScheduling200Response,
  ComputeNodeDisableSchedulingDefaultResponse,
  ComputeNodeEnableScheduling200Response,
  ComputeNodeEnableSchedulingDefaultResponse,
  ComputeNodeGetRemoteLoginSettings200Response,
  ComputeNodeGetRemoteLoginSettingsDefaultResponse,
  ComputeNodeGetRemoteDesktop200Response,
  ComputeNodeGetRemoteDesktopDefaultResponse,
  ComputeNodeUploadBatchServiceLogs200Response,
  ComputeNodeUploadBatchServiceLogsDefaultResponse,
  ComputeNodeList200Response,
  ComputeNodeListDefaultResponse,
  ComputeNodeExtensionGet200Response,
  ComputeNodeExtensionGetDefaultResponse,
  ComputeNodeExtensionList200Response,
  ComputeNodeExtensionListDefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /applications": ["200"],
  "GET /applications/{applicationId}": ["200"],
  "GET /poolusagemetrics": ["200"],
  "GET /lifetimepoolstats": ["200"],
  "POST /pools": ["201"],
  "GET /pools": ["200"],
  "DELETE /pools/{poolId}": ["202"],
  "HEAD /pools/{poolId}": ["200", "404"],
  "GET /pools/{poolId}": ["200"],
  "PATCH /pools/{poolId}": ["200"],
  "POST /pools/{poolId}/disableautoscale": ["200"],
  "POST /pools/{poolId}/enableautoscale": ["200"],
  "POST /pools/{poolId}/evaluateautoscale": ["200"],
  "POST /pools/{poolId}/resize": ["202"],
  "POST /pools/{poolId}/stopresize": ["202"],
  "POST /pools/{poolId}/updateproperties": ["204"],
  "POST /pools/{poolId}/removenodes": ["202"],
  "GET /supportedimages": ["200"],
  "GET /nodecounts": ["200"],
  "GET /lifetimejobstats": ["200"],
  "DELETE /jobs/{jobId}": ["202"],
  "GET /jobs/{jobId}": ["200"],
  "PATCH /jobs/{jobId}": ["200"],
  "PUT /jobs/{jobId}": ["200"],
  "POST /jobs/{jobId}/disable": ["202"],
  "POST /jobs/{jobId}/enable": ["202"],
  "POST /jobs/{jobId}/terminate": ["202"],
  "POST /jobs": ["201"],
  "GET /jobs": ["200"],
  "GET /jobschedules/{jobScheduleId}/jobs": ["200"],
  "GET /jobs/{jobId}/jobpreparationandreleasetaskstatus": ["200"],
  "GET /jobs/{jobId}/taskcounts": ["200"],
  "POST /certificates": ["201"],
  "GET /certificates": ["200"],
  "POST /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete": [
    "204"
  ],
  "DELETE /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})": [
    "202"
  ],
  "GET /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})": [
    "200"
  ],
  "DELETE /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["200"],
  "HEAD /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["200"],
  "DELETE /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["200"],
  "HEAD /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}/files": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/files": ["200"],
  "HEAD /jobschedules/{jobScheduleId}": ["200", "404"],
  "DELETE /jobschedules/{jobScheduleId}": ["202"],
  "GET /jobschedules/{jobScheduleId}": ["200"],
  "PATCH /jobschedules/{jobScheduleId}": ["200"],
  "PUT /jobschedules/{jobScheduleId}": ["200"],
  "POST /jobschedules/{jobScheduleId}/disable": ["204"],
  "POST /jobschedules/{jobScheduleId}/enable": ["204"],
  "POST /jobschedules/{jobScheduleId}/terminate": ["202"],
  "POST /jobschedules": ["201"],
  "GET /jobschedules": ["200"],
  "POST /jobs/{jobId}/tasks": ["201"],
  "GET /jobs/{jobId}/tasks": ["200"],
  "POST /jobs/{jobId}/addtaskcollection": ["200"],
  "DELETE /jobs/{jobId}/tasks/{taskId}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}": ["200"],
  "PUT /jobs/{jobId}/tasks/{taskId}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}/subtasksinfo": ["200"],
  "POST /jobs/{jobId}/tasks/{taskId}/terminate": ["204"],
  "POST /jobs/{jobId}/tasks/{taskId}/reactivate": ["204"],
  "POST /pools/{poolId}/nodes/{nodeId}/users": ["201"],
  "DELETE /pools/{poolId}/nodes/{nodeId}/users/{userName}": ["200"],
  "PUT /pools/{poolId}/nodes/{nodeId}/users/{userName}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/reboot": ["202"],
  "POST /pools/{poolId}/nodes/{nodeId}/reimage": ["202"],
  "POST /pools/{poolId}/nodes/{nodeId}/disablescheduling": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/enablescheduling": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/remoteloginsettings": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/rdp": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs": ["200"],
  "GET /pools/{poolId}/nodes": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/extensions": ["200"]
};

export function isUnexpected(
  response: ApplicationList200Response | ApplicationListDefaultResponse
): response is ApplicationListDefaultResponse;
export function isUnexpected(
  response: ApplicationGet200Response | ApplicationGetDefaultResponse
): response is ApplicationGetDefaultResponse;
export function isUnexpected(
  response:
    | PoolListUsageMetrics200Response
    | PoolListUsageMetricsDefaultResponse
): response is PoolListUsageMetricsDefaultResponse;
export function isUnexpected(
  response:
    | PoolGetAllLifetimeStatistics200Response
    | PoolGetAllLifetimeStatisticsDefaultResponse
): response is PoolGetAllLifetimeStatisticsDefaultResponse;
export function isUnexpected(
  response: PoolAdd201Response | PoolAddDefaultResponse
): response is PoolAddDefaultResponse;
export function isUnexpected(
  response: PoolList200Response | PoolListDefaultResponse
): response is PoolListDefaultResponse;
export function isUnexpected(
  response: PoolDelete202Response | PoolDeleteDefaultResponse
): response is PoolDeleteDefaultResponse;
export function isUnexpected(
  response:
    | PoolExists200Response
    | PoolExists404Response
    | PoolExistsDefaultResponse
): response is PoolExistsDefaultResponse;
export function isUnexpected(
  response: PoolGet200Response | PoolGetDefaultResponse
): response is PoolGetDefaultResponse;
export function isUnexpected(
  response: PoolPatch200Response | PoolPatchDefaultResponse
): response is PoolPatchDefaultResponse;
export function isUnexpected(
  response:
    | PoolDisableAutoScale200Response
    | PoolDisableAutoScaleDefaultResponse
): response is PoolDisableAutoScaleDefaultResponse;
export function isUnexpected(
  response: PoolEnableAutoScale200Response | PoolEnableAutoScaleDefaultResponse
): response is PoolEnableAutoScaleDefaultResponse;
export function isUnexpected(
  response:
    | PoolEvaluateAutoScale200Response
    | PoolEvaluateAutoScaleDefaultResponse
): response is PoolEvaluateAutoScaleDefaultResponse;
export function isUnexpected(
  response: PoolResize202Response | PoolResizeDefaultResponse
): response is PoolResizeDefaultResponse;
export function isUnexpected(
  response: PoolStopResize202Response | PoolStopResizeDefaultResponse
): response is PoolStopResizeDefaultResponse;
export function isUnexpected(
  response:
    | PoolUpdateProperties204Response
    | PoolUpdatePropertiesDefaultResponse
): response is PoolUpdatePropertiesDefaultResponse;
export function isUnexpected(
  response: PoolRemoveNodes202Response | PoolRemoveNodesDefaultResponse
): response is PoolRemoveNodesDefaultResponse;
export function isUnexpected(
  response:
    | AccountListSupportedImages200Response
    | AccountListSupportedImagesDefaultResponse
): response is AccountListSupportedImagesDefaultResponse;
export function isUnexpected(
  response:
    | AccountListPoolNodeCounts200Response
    | AccountListPoolNodeCountsDefaultResponse
): response is AccountListPoolNodeCountsDefaultResponse;
export function isUnexpected(
  response:
    | JobGetAllLifetimeStatistics200Response
    | JobGetAllLifetimeStatisticsDefaultResponse
): response is JobGetAllLifetimeStatisticsDefaultResponse;
export function isUnexpected(
  response: JobDelete202Response | JobDeleteDefaultResponse
): response is JobDeleteDefaultResponse;
export function isUnexpected(
  response: JobGet200Response | JobGetDefaultResponse
): response is JobGetDefaultResponse;
export function isUnexpected(
  response: JobPatch200Response | JobPatchDefaultResponse
): response is JobPatchDefaultResponse;
export function isUnexpected(
  response: JobUpdate200Response | JobUpdateDefaultResponse
): response is JobUpdateDefaultResponse;
export function isUnexpected(
  response: JobDisable202Response | JobDisableDefaultResponse
): response is JobDisableDefaultResponse;
export function isUnexpected(
  response: JobEnable202Response | JobEnableDefaultResponse
): response is JobEnableDefaultResponse;
export function isUnexpected(
  response: JobTerminate202Response | JobTerminateDefaultResponse
): response is JobTerminateDefaultResponse;
export function isUnexpected(
  response: JobAdd201Response | JobAddDefaultResponse
): response is JobAddDefaultResponse;
export function isUnexpected(
  response: JobList200Response | JobListDefaultResponse
): response is JobListDefaultResponse;
export function isUnexpected(
  response:
    | JobListFromJobSchedule200Response
    | JobListFromJobScheduleDefaultResponse
): response is JobListFromJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobListPreparationAndReleaseTaskStatus200Response
    | JobListPreparationAndReleaseTaskStatusDefaultResponse
): response is JobListPreparationAndReleaseTaskStatusDefaultResponse;
export function isUnexpected(
  response: JobGetTaskCounts200Response | JobGetTaskCountsDefaultResponse
): response is JobGetTaskCountsDefaultResponse;
export function isUnexpected(
  response: CertificateAdd201Response | CertificateAddDefaultResponse
): response is CertificateAddDefaultResponse;
export function isUnexpected(
  response: CertificateList200Response | CertificateListDefaultResponse
): response is CertificateListDefaultResponse;
export function isUnexpected(
  response:
    | CertificateCancelDeletion204Response
    | CertificateCancelDeletionDefaultResponse
): response is CertificateCancelDeletionDefaultResponse;
export function isUnexpected(
  response: CertificateDelete202Response | CertificateDeleteDefaultResponse
): response is CertificateDeleteDefaultResponse;
export function isUnexpected(
  response: CertificateGet200Response | CertificateGetDefaultResponse
): response is CertificateGetDefaultResponse;
export function isUnexpected(
  response: FileDeleteFromTask200Response | FileDeleteFromTaskDefaultResponse
): response is FileDeleteFromTaskDefaultResponse;
export function isUnexpected(
  response: FileGetFromTask200Response | FileGetFromTaskDefaultResponse
): response is FileGetFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileGetPropertiesFromTask200Response
    | FileGetPropertiesFromTaskDefaultResponse
): response is FileGetPropertiesFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileDeleteFromComputeNode200Response
    | FileDeleteFromComputeNodeDefaultResponse
): response is FileDeleteFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | FileGetFromComputeNode200Response
    | FileGetFromComputeNodeDefaultResponse
): response is FileGetFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | FileGetPropertiesFromComputeNode200Response
    | FileGetPropertiesFromComputeNodeDefaultResponse
): response is FileGetPropertiesFromComputeNodeDefaultResponse;
export function isUnexpected(
  response: FileListFromTask200Response | FileListFromTaskDefaultResponse
): response is FileListFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileListFromComputeNode200Response
    | FileListFromComputeNodeDefaultResponse
): response is FileListFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleExists200Response
    | JobScheduleExists404Response
    | JobScheduleExistsDefaultResponse
): response is JobScheduleExistsDefaultResponse;
export function isUnexpected(
  response: JobScheduleDelete202Response | JobScheduleDeleteDefaultResponse
): response is JobScheduleDeleteDefaultResponse;
export function isUnexpected(
  response: JobScheduleGet200Response | JobScheduleGetDefaultResponse
): response is JobScheduleGetDefaultResponse;
export function isUnexpected(
  response: JobSchedulePatch200Response | JobSchedulePatchDefaultResponse
): response is JobSchedulePatchDefaultResponse;
export function isUnexpected(
  response: JobScheduleUpdate200Response | JobScheduleUpdateDefaultResponse
): response is JobScheduleUpdateDefaultResponse;
export function isUnexpected(
  response: JobScheduleDisable204Response | JobScheduleDisableDefaultResponse
): response is JobScheduleDisableDefaultResponse;
export function isUnexpected(
  response: JobScheduleEnable204Response | JobScheduleEnableDefaultResponse
): response is JobScheduleEnableDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleTerminate202Response
    | JobScheduleTerminateDefaultResponse
): response is JobScheduleTerminateDefaultResponse;
export function isUnexpected(
  response: JobScheduleAdd201Response | JobScheduleAddDefaultResponse
): response is JobScheduleAddDefaultResponse;
export function isUnexpected(
  response: JobScheduleList200Response | JobScheduleListDefaultResponse
): response is JobScheduleListDefaultResponse;
export function isUnexpected(
  response: TaskAdd201Response | TaskAddDefaultResponse
): response is TaskAddDefaultResponse;
export function isUnexpected(
  response: TaskList200Response | TaskListDefaultResponse
): response is TaskListDefaultResponse;
export function isUnexpected(
  response: TaskAddCollection200Response | TaskAddCollectionDefaultResponse
): response is TaskAddCollectionDefaultResponse;
export function isUnexpected(
  response: TaskDelete200Response | TaskDeleteDefaultResponse
): response is TaskDeleteDefaultResponse;
export function isUnexpected(
  response: TaskGet200Response | TaskGetDefaultResponse
): response is TaskGetDefaultResponse;
export function isUnexpected(
  response: TaskUpdate200Response | TaskUpdateDefaultResponse
): response is TaskUpdateDefaultResponse;
export function isUnexpected(
  response: TaskListSubtasks200Response | TaskListSubtasksDefaultResponse
): response is TaskListSubtasksDefaultResponse;
export function isUnexpected(
  response: TaskTerminate204Response | TaskTerminateDefaultResponse
): response is TaskTerminateDefaultResponse;
export function isUnexpected(
  response: TaskReactivate204Response | TaskReactivateDefaultResponse
): response is TaskReactivateDefaultResponse;
export function isUnexpected(
  response: ComputeNodeAddUser201Response | ComputeNodeAddUserDefaultResponse
): response is ComputeNodeAddUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeDeleteUser200Response
    | ComputeNodeDeleteUserDefaultResponse
): response is ComputeNodeDeleteUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeUpdateUser200Response
    | ComputeNodeUpdateUserDefaultResponse
): response is ComputeNodeUpdateUserDefaultResponse;
export function isUnexpected(
  response: ComputeNodeGet200Response | ComputeNodeGetDefaultResponse
): response is ComputeNodeGetDefaultResponse;
export function isUnexpected(
  response: ComputeNodeReboot202Response | ComputeNodeRebootDefaultResponse
): response is ComputeNodeRebootDefaultResponse;
export function isUnexpected(
  response: ComputeNodeReimage202Response | ComputeNodeReimageDefaultResponse
): response is ComputeNodeReimageDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeDisableScheduling200Response
    | ComputeNodeDisableSchedulingDefaultResponse
): response is ComputeNodeDisableSchedulingDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeEnableScheduling200Response
    | ComputeNodeEnableSchedulingDefaultResponse
): response is ComputeNodeEnableSchedulingDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeGetRemoteLoginSettings200Response
    | ComputeNodeGetRemoteLoginSettingsDefaultResponse
): response is ComputeNodeGetRemoteLoginSettingsDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeGetRemoteDesktop200Response
    | ComputeNodeGetRemoteDesktopDefaultResponse
): response is ComputeNodeGetRemoteDesktopDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeUploadBatchServiceLogs200Response
    | ComputeNodeUploadBatchServiceLogsDefaultResponse
): response is ComputeNodeUploadBatchServiceLogsDefaultResponse;
export function isUnexpected(
  response: ComputeNodeList200Response | ComputeNodeListDefaultResponse
): response is ComputeNodeListDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeExtensionGet200Response
    | ComputeNodeExtensionGetDefaultResponse
): response is ComputeNodeExtensionGetDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeExtensionList200Response
    | ComputeNodeExtensionListDefaultResponse
): response is ComputeNodeExtensionListDefaultResponse;
export function isUnexpected(
  response:
    | ApplicationList200Response
    | ApplicationListDefaultResponse
    | ApplicationGet200Response
    | ApplicationGetDefaultResponse
    | PoolListUsageMetrics200Response
    | PoolListUsageMetricsDefaultResponse
    | PoolGetAllLifetimeStatistics200Response
    | PoolGetAllLifetimeStatisticsDefaultResponse
    | PoolAdd201Response
    | PoolAddDefaultResponse
    | PoolList200Response
    | PoolListDefaultResponse
    | PoolDelete202Response
    | PoolDeleteDefaultResponse
    | PoolExists200Response
    | PoolExists404Response
    | PoolExistsDefaultResponse
    | PoolGet200Response
    | PoolGetDefaultResponse
    | PoolPatch200Response
    | PoolPatchDefaultResponse
    | PoolDisableAutoScale200Response
    | PoolDisableAutoScaleDefaultResponse
    | PoolEnableAutoScale200Response
    | PoolEnableAutoScaleDefaultResponse
    | PoolEvaluateAutoScale200Response
    | PoolEvaluateAutoScaleDefaultResponse
    | PoolResize202Response
    | PoolResizeDefaultResponse
    | PoolStopResize202Response
    | PoolStopResizeDefaultResponse
    | PoolUpdateProperties204Response
    | PoolUpdatePropertiesDefaultResponse
    | PoolRemoveNodes202Response
    | PoolRemoveNodesDefaultResponse
    | AccountListSupportedImages200Response
    | AccountListSupportedImagesDefaultResponse
    | AccountListPoolNodeCounts200Response
    | AccountListPoolNodeCountsDefaultResponse
    | JobGetAllLifetimeStatistics200Response
    | JobGetAllLifetimeStatisticsDefaultResponse
    | JobDelete202Response
    | JobDeleteDefaultResponse
    | JobGet200Response
    | JobGetDefaultResponse
    | JobPatch200Response
    | JobPatchDefaultResponse
    | JobUpdate200Response
    | JobUpdateDefaultResponse
    | JobDisable202Response
    | JobDisableDefaultResponse
    | JobEnable202Response
    | JobEnableDefaultResponse
    | JobTerminate202Response
    | JobTerminateDefaultResponse
    | JobAdd201Response
    | JobAddDefaultResponse
    | JobList200Response
    | JobListDefaultResponse
    | JobListFromJobSchedule200Response
    | JobListFromJobScheduleDefaultResponse
    | JobListPreparationAndReleaseTaskStatus200Response
    | JobListPreparationAndReleaseTaskStatusDefaultResponse
    | JobGetTaskCounts200Response
    | JobGetTaskCountsDefaultResponse
    | CertificateAdd201Response
    | CertificateAddDefaultResponse
    | CertificateList200Response
    | CertificateListDefaultResponse
    | CertificateCancelDeletion204Response
    | CertificateCancelDeletionDefaultResponse
    | CertificateDelete202Response
    | CertificateDeleteDefaultResponse
    | CertificateGet200Response
    | CertificateGetDefaultResponse
    | FileDeleteFromTask200Response
    | FileDeleteFromTaskDefaultResponse
    | FileGetFromTask200Response
    | FileGetFromTaskDefaultResponse
    | FileGetPropertiesFromTask200Response
    | FileGetPropertiesFromTaskDefaultResponse
    | FileDeleteFromComputeNode200Response
    | FileDeleteFromComputeNodeDefaultResponse
    | FileGetFromComputeNode200Response
    | FileGetFromComputeNodeDefaultResponse
    | FileGetPropertiesFromComputeNode200Response
    | FileGetPropertiesFromComputeNodeDefaultResponse
    | FileListFromTask200Response
    | FileListFromTaskDefaultResponse
    | FileListFromComputeNode200Response
    | FileListFromComputeNodeDefaultResponse
    | JobScheduleExists200Response
    | JobScheduleExists404Response
    | JobScheduleExistsDefaultResponse
    | JobScheduleDelete202Response
    | JobScheduleDeleteDefaultResponse
    | JobScheduleGet200Response
    | JobScheduleGetDefaultResponse
    | JobSchedulePatch200Response
    | JobSchedulePatchDefaultResponse
    | JobScheduleUpdate200Response
    | JobScheduleUpdateDefaultResponse
    | JobScheduleDisable204Response
    | JobScheduleDisableDefaultResponse
    | JobScheduleEnable204Response
    | JobScheduleEnableDefaultResponse
    | JobScheduleTerminate202Response
    | JobScheduleTerminateDefaultResponse
    | JobScheduleAdd201Response
    | JobScheduleAddDefaultResponse
    | JobScheduleList200Response
    | JobScheduleListDefaultResponse
    | TaskAdd201Response
    | TaskAddDefaultResponse
    | TaskList200Response
    | TaskListDefaultResponse
    | TaskAddCollection200Response
    | TaskAddCollectionDefaultResponse
    | TaskDelete200Response
    | TaskDeleteDefaultResponse
    | TaskGet200Response
    | TaskGetDefaultResponse
    | TaskUpdate200Response
    | TaskUpdateDefaultResponse
    | TaskListSubtasks200Response
    | TaskListSubtasksDefaultResponse
    | TaskTerminate204Response
    | TaskTerminateDefaultResponse
    | TaskReactivate204Response
    | TaskReactivateDefaultResponse
    | ComputeNodeAddUser201Response
    | ComputeNodeAddUserDefaultResponse
    | ComputeNodeDeleteUser200Response
    | ComputeNodeDeleteUserDefaultResponse
    | ComputeNodeUpdateUser200Response
    | ComputeNodeUpdateUserDefaultResponse
    | ComputeNodeGet200Response
    | ComputeNodeGetDefaultResponse
    | ComputeNodeReboot202Response
    | ComputeNodeRebootDefaultResponse
    | ComputeNodeReimage202Response
    | ComputeNodeReimageDefaultResponse
    | ComputeNodeDisableScheduling200Response
    | ComputeNodeDisableSchedulingDefaultResponse
    | ComputeNodeEnableScheduling200Response
    | ComputeNodeEnableSchedulingDefaultResponse
    | ComputeNodeGetRemoteLoginSettings200Response
    | ComputeNodeGetRemoteLoginSettingsDefaultResponse
    | ComputeNodeGetRemoteDesktop200Response
    | ComputeNodeGetRemoteDesktopDefaultResponse
    | ComputeNodeUploadBatchServiceLogs200Response
    | ComputeNodeUploadBatchServiceLogsDefaultResponse
    | ComputeNodeList200Response
    | ComputeNodeListDefaultResponse
    | ComputeNodeExtensionGet200Response
    | ComputeNodeExtensionGetDefaultResponse
    | ComputeNodeExtensionList200Response
    | ComputeNodeExtensionListDefaultResponse
): response is
  | ApplicationListDefaultResponse
  | ApplicationGetDefaultResponse
  | PoolListUsageMetricsDefaultResponse
  | PoolGetAllLifetimeStatisticsDefaultResponse
  | PoolAddDefaultResponse
  | PoolListDefaultResponse
  | PoolDeleteDefaultResponse
  | PoolExistsDefaultResponse
  | PoolGetDefaultResponse
  | PoolPatchDefaultResponse
  | PoolDisableAutoScaleDefaultResponse
  | PoolEnableAutoScaleDefaultResponse
  | PoolEvaluateAutoScaleDefaultResponse
  | PoolResizeDefaultResponse
  | PoolStopResizeDefaultResponse
  | PoolUpdatePropertiesDefaultResponse
  | PoolRemoveNodesDefaultResponse
  | AccountListSupportedImagesDefaultResponse
  | AccountListPoolNodeCountsDefaultResponse
  | JobGetAllLifetimeStatisticsDefaultResponse
  | JobDeleteDefaultResponse
  | JobGetDefaultResponse
  | JobPatchDefaultResponse
  | JobUpdateDefaultResponse
  | JobDisableDefaultResponse
  | JobEnableDefaultResponse
  | JobTerminateDefaultResponse
  | JobAddDefaultResponse
  | JobListDefaultResponse
  | JobListFromJobScheduleDefaultResponse
  | JobListPreparationAndReleaseTaskStatusDefaultResponse
  | JobGetTaskCountsDefaultResponse
  | CertificateAddDefaultResponse
  | CertificateListDefaultResponse
  | CertificateCancelDeletionDefaultResponse
  | CertificateDeleteDefaultResponse
  | CertificateGetDefaultResponse
  | FileDeleteFromTaskDefaultResponse
  | FileGetFromTaskDefaultResponse
  | FileGetPropertiesFromTaskDefaultResponse
  | FileDeleteFromComputeNodeDefaultResponse
  | FileGetFromComputeNodeDefaultResponse
  | FileGetPropertiesFromComputeNodeDefaultResponse
  | FileListFromTaskDefaultResponse
  | FileListFromComputeNodeDefaultResponse
  | JobScheduleExistsDefaultResponse
  | JobScheduleDeleteDefaultResponse
  | JobScheduleGetDefaultResponse
  | JobSchedulePatchDefaultResponse
  | JobScheduleUpdateDefaultResponse
  | JobScheduleDisableDefaultResponse
  | JobScheduleEnableDefaultResponse
  | JobScheduleTerminateDefaultResponse
  | JobScheduleAddDefaultResponse
  | JobScheduleListDefaultResponse
  | TaskAddDefaultResponse
  | TaskListDefaultResponse
  | TaskAddCollectionDefaultResponse
  | TaskDeleteDefaultResponse
  | TaskGetDefaultResponse
  | TaskUpdateDefaultResponse
  | TaskListSubtasksDefaultResponse
  | TaskTerminateDefaultResponse
  | TaskReactivateDefaultResponse
  | ComputeNodeAddUserDefaultResponse
  | ComputeNodeDeleteUserDefaultResponse
  | ComputeNodeUpdateUserDefaultResponse
  | ComputeNodeGetDefaultResponse
  | ComputeNodeRebootDefaultResponse
  | ComputeNodeReimageDefaultResponse
  | ComputeNodeDisableSchedulingDefaultResponse
  | ComputeNodeEnableSchedulingDefaultResponse
  | ComputeNodeGetRemoteLoginSettingsDefaultResponse
  | ComputeNodeGetRemoteDesktopDefaultResponse
  | ComputeNodeUploadBatchServiceLogsDefaultResponse
  | ComputeNodeListDefaultResponse
  | ComputeNodeExtensionGetDefaultResponse
  | ComputeNodeExtensionListDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i]?.startsWith("{") &&
          candidateParts[i]?.endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
