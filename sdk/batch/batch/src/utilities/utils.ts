import { BatchGeneratedClient, TaskOutput } from "../generated/"

const MAXODATAFILTER = 500;
const idPrefix = "id eq '";
const idPostfix = '\'';
const orOperator = " or ";
let oDataFilterSB: Array<string> = [];


export function monitorTasks(batchServiceClient: BatchGeneratedClient, tasks: Array<TaskOutput>, targetState: TaskOutput["state"], options = {}) {
  let currentPass: Array<TaskOutput> = [];
  tasks.forEach(task => {
    if (task.state != targetState) {
      currentPass.push(task);
    }
  });

  while (currentPass.length > 0) {
    let taskToInspect = currentPass.pop();
    processTaskInstance(taskToInspect, batchServiceClient);
  }

}

function processTaskInstance(task: TaskOutput, batchServiceClient: BatchGeneratedClient) {
  let processTaskInstance = task;

  while (processTaskInstance != null) {
    let refreshList = false;

    let currentTaskOdataSB: Array<string> = [];
    currentTaskOdataSB.push(idPrefix);
    currentTaskOdataSB.push(task.id);
    currentTaskOdataSB.push(idPostfix);
    if (currentTaskOdataSB.join("").length + oDataFilterSB.join("").length > MAXODATAFILTER) {
      //Call API with OdataFilter
      let getResult = batchServiceClient.path("/jobs/{jobId}/tasks", "foo").get(
        {
          headers: {},
          queryParameters: { $filter: oDataFilterSB.join("") }
        }
      );
    }


  }
}
