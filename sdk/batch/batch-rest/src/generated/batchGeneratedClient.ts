// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { BatchGeneratedClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class BatchGeneratedClient class.
 * @param batchUrl type: string The base URL for all Azure Batch service requests.
 * @param credentials type: TokenCredential
 */
export default function createClient(
  batchUrl: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): BatchGeneratedClient {
  const baseUrl = options.baseUrl ?? `${batchUrl}`;
  options.apiVersion = options.apiVersion ?? "2022-01-01.15.0";
  options = {
    ...options,
    credentials: {
      scopes: ["https://batch.core.windows.net//.default"]
    }
  };

  const userAgentInfo = `azsdk-js-batch-rest/11.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as BatchGeneratedClient;

  return {
    ...client,
    application: {
      list: (options) => {
        return client.path("/applications").get(options);
      },
      get: (applicationId, options) => {
        return client
          .path("/applications/{applicationId}", applicationId)
          .get(options);
      }
    },
    pool: {
      listUsageMetrics: (options) => {
        return client.path("/poolusagemetrics").get(options);
      },
      getAllLifetimeStatistics: (options) => {
        return client.path("/lifetimepoolstats").get(options);
      },
      add: (options) => {
        return client.path("/pools").post(options);
      },
      list: (options) => {
        return client.path("/pools").get(options);
      },
      delete: (poolId, options) => {
        return client.path("/pools/{poolId}", poolId).delete(options);
      },
      exists: (poolId, options) => {
        return client.path("/pools/{poolId}", poolId).head(options);
      },
      get: (poolId, options) => {
        return client.path("/pools/{poolId}", poolId).get(options);
      },
      patch: (poolId, options) => {
        return client.path("/pools/{poolId}", poolId).patch(options);
      },
      disableAutoScale: (poolId, options) => {
        return client
          .path("/pools/{poolId}/disableautoscale", poolId)
          .post(options);
      },
      enableAutoScale: (poolId, options) => {
        return client
          .path("/pools/{poolId}/enableautoscale", poolId)
          .post(options);
      },
      evaluateAutoScale: (poolId, options) => {
        return client
          .path("/pools/{poolId}/evaluateautoscale", poolId)
          .post(options);
      },
      resize: (poolId, options) => {
        return client.path("/pools/{poolId}/resize", poolId).post(options);
      },
      stopResize: (poolId, options) => {
        return client.path("/pools/{poolId}/stopresize", poolId).post(options);
      },
      updateProperties: (poolId, options) => {
        return client
          .path("/pools/{poolId}/updateproperties", poolId)
          .post(options);
      },
      removeNodes: (poolId, options) => {
        return client.path("/pools/{poolId}/removenodes", poolId).post(options);
      }
    },
    account: {
      listSupportedImages: (options) => {
        return client.path("/supportedimages").get(options);
      },
      listPoolNodeCounts: (options) => {
        return client.path("/nodecounts").get(options);
      }
    },
    job: {
      getAllLifetimeStatistics: (options) => {
        return client.path("/lifetimejobstats").get(options);
      },
      delete: (jobId, options) => {
        return client.path("/jobs/{jobId}", jobId).delete(options);
      },
      get: (jobId, options) => {
        return client.path("/jobs/{jobId}", jobId).get(options);
      },
      patch: (jobId, options) => {
        return client.path("/jobs/{jobId}", jobId).patch(options);
      },
      update: (jobId, options) => {
        return client.path("/jobs/{jobId}", jobId).put(options);
      },
      disable: (jobId, options) => {
        return client.path("/jobs/{jobId}/disable", jobId).post(options);
      },
      enable: (jobId, options) => {
        return client.path("/jobs/{jobId}/enable", jobId).post(options);
      },
      terminate: (jobId, options) => {
        return client.path("/jobs/{jobId}/terminate", jobId).post(options);
      },
      add: (options) => {
        return client.path("/jobs").post(options);
      },
      list: (options) => {
        return client.path("/jobs").get(options);
      },
      listFromJobSchedule: (jobScheduleId, options) => {
        return client
          .path("/jobschedules/{jobScheduleId}/jobs", jobScheduleId)
          .get(options);
      },
      listPreparationAndReleaseTaskStatus: (jobId, options) => {
        return client
          .path("/jobs/{jobId}/jobpreparationandreleasetaskstatus", jobId)
          .get(options);
      },
      getTaskCounts: (jobId, options) => {
        return client.path("/jobs/{jobId}/taskcounts", jobId).get(options);
      }
    },
    certificate: {
      add: (options) => {
        return client.path("/certificates").post(options);
      },
      list: (options) => {
        return client.path("/certificates").get(options);
      },
      cancelDeletion: (thumbprintAlgorithm, thumbprint, options) => {
        return client
          .path(
            "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete",
            thumbprintAlgorithm,
            thumbprint
          )
          .post(options);
      },
      delete: (thumbprintAlgorithm, thumbprint, options) => {
        return client
          .path(
            "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
            thumbprintAlgorithm,
            thumbprint
          )
          .delete(options);
      },
      get: (thumbprintAlgorithm, thumbprint, options) => {
        return client
          .path(
            "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
            thumbprintAlgorithm,
            thumbprint
          )
          .get(options);
      }
    },
    file: {
      deleteFromTask: (jobId, taskId, filePath, options) => {
        return client
          .path(
            "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
            jobId,
            taskId,
            filePath
          )
          .delete(options);
      },
      getFromTask: (jobId, taskId, filePath, options) => {
        return client
          .path(
            "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
            jobId,
            taskId,
            filePath
          )
          .get(options);
      },
      getPropertiesFromTask: (jobId, taskId, filePath, options) => {
        return client
          .path(
            "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
            jobId,
            taskId,
            filePath
          )
          .head(options);
      },
      deleteFromComputeNode: (poolId, nodeId, filePath, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
            poolId,
            nodeId,
            filePath
          )
          .delete(options);
      },
      getFromComputeNode: (poolId, nodeId, filePath, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
            poolId,
            nodeId,
            filePath
          )
          .get(options);
      },
      getPropertiesFromComputeNode: (poolId, nodeId, filePath, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
            poolId,
            nodeId,
            filePath
          )
          .head(options);
      },
      listFromTask: (jobId, taskId, options) => {
        return client
          .path("/jobs/{jobId}/tasks/{taskId}/files", jobId, taskId)
          .get(options);
      },
      listFromComputeNode: (poolId, nodeId, options) => {
        return client
          .path("/pools/{poolId}/nodes/{nodeId}/files", poolId, nodeId)
          .get(options);
      }
    },
    jobSchedule: {
      exists: (jobScheduleId, options) => {
        return client
          .path("/jobschedules/{jobScheduleId}", jobScheduleId)
          .head(options);
      },
      delete: (jobScheduleId, options) => {
        return client
          .path("/jobschedules/{jobScheduleId}", jobScheduleId)
          .delete(options);
      },
      get: (jobScheduleId, options) => {
        return client
          .path("/jobschedules/{jobScheduleId}", jobScheduleId)
          .get(options);
      },
      patch: (jobScheduleId, options) => {
        return client
          .path("/jobschedules/{jobScheduleId}", jobScheduleId)
          .patch(options);
      },
      update: (jobScheduleId, options) => {
        return client
          .path("/jobschedules/{jobScheduleId}", jobScheduleId)
          .put(options);
      },
      disable: (jobScheduleId, options) => {
        return client
          .path("/jobschedules/{jobScheduleId}/disable", jobScheduleId)
          .post(options);
      },
      enable: (jobScheduleId, options) => {
        return client
          .path("/jobschedules/{jobScheduleId}/enable", jobScheduleId)
          .post(options);
      },
      terminate: (jobScheduleId, options) => {
        return client
          .path("/jobschedules/{jobScheduleId}/terminate", jobScheduleId)
          .post(options);
      },
      add: (options) => {
        return client.path("/jobschedules").post(options);
      },
      list: (options) => {
        return client.path("/jobschedules").get(options);
      }
    },
    task: {
      add: (jobId, options) => {
        return client.path("/jobs/{jobId}/tasks", jobId).post(options);
      },
      list: (jobId, options) => {
        return client.path("/jobs/{jobId}/tasks", jobId).get(options);
      },
      addCollection: (jobId, options) => {
        return client
          .path("/jobs/{jobId}/addtaskcollection", jobId)
          .post(options);
      },
      delete: (jobId, taskId, options) => {
        return client
          .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
          .delete(options);
      },
      get: (jobId, taskId, options) => {
        return client
          .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
          .get(options);
      },
      update: (jobId, taskId, options) => {
        return client
          .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
          .put(options);
      },
      listSubtasks: (jobId, taskId, options) => {
        return client
          .path("/jobs/{jobId}/tasks/{taskId}/subtasksinfo", jobId, taskId)
          .get(options);
      },
      terminate: (jobId, taskId, options) => {
        return client
          .path("/jobs/{jobId}/tasks/{taskId}/terminate", jobId, taskId)
          .post(options);
      },
      reactivate: (jobId, taskId, options) => {
        return client
          .path("/jobs/{jobId}/tasks/{taskId}/reactivate", jobId, taskId)
          .post(options);
      }
    },
    computeNode: {
      addUser: (poolId, nodeId, options) => {
        return client
          .path("/pools/{poolId}/nodes/{nodeId}/users", poolId, nodeId)
          .post(options);
      },
      deleteUser: (poolId, nodeId, userName, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
            poolId,
            nodeId,
            userName
          )
          .delete(options);
      },
      updateUser: (poolId, nodeId, userName, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
            poolId,
            nodeId,
            userName
          )
          .put(options);
      },
      get: (poolId, nodeId, options) => {
        return client
          .path("/pools/{poolId}/nodes/{nodeId}", poolId, nodeId)
          .get(options);
      },
      reboot: (poolId, nodeId, options) => {
        return client
          .path("/pools/{poolId}/nodes/{nodeId}/reboot", poolId, nodeId)
          .post(options);
      },
      reimage: (poolId, nodeId, options) => {
        return client
          .path("/pools/{poolId}/nodes/{nodeId}/reimage", poolId, nodeId)
          .post(options);
      },
      disableScheduling: (poolId, nodeId, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/disablescheduling",
            poolId,
            nodeId
          )
          .post(options);
      },
      enableScheduling: (poolId, nodeId, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/enablescheduling",
            poolId,
            nodeId
          )
          .post(options);
      },
      getRemoteLoginSettings: (poolId, nodeId, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/remoteloginsettings",
            poolId,
            nodeId
          )
          .get(options);
      },
      getRemoteDesktop: (poolId, nodeId, options) => {
        return client
          .path("/pools/{poolId}/nodes/{nodeId}/rdp", poolId, nodeId)
          .get(options);
      },
      uploadBatchServiceLogs: (poolId, nodeId, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs",
            poolId,
            nodeId
          )
          .post(options);
      },
      list: (poolId, options) => {
        return client.path("/pools/{poolId}/nodes", poolId).get(options);
      }
    },
    computeNodeExtension: {
      get: (poolId, nodeId, extensionName, options) => {
        return client
          .path(
            "/pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}",
            poolId,
            nodeId,
            extensionName
          )
          .get(options);
      },
      list: (poolId, nodeId, options) => {
        return client
          .path("/pools/{poolId}/nodes/{nodeId}/extensions", poolId, nodeId)
          .get(options);
      }
    }
  };
}
