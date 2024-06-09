export const findIndexById = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if (id === array[i].id) {
      return i;
    }
  }
  return -1;
};

export const findEditIndex = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if (id === array[i].id) {
      return i;
    }
  }
  return -1;
};

export const handleTaskList = (id, taskId, array) => {
  let newList = [
    {
      id,
      taskId,
      array,
    },
  ];
  console.log("task list generated", newList);
  return newList;
};

export const handleTaskUpdate = (task, Data) => {
  console.log("processing index for tasklist and data");
  console.log(" length of tasklist : ", task.length);
  console.log(" length of Data : ", Data.length);

  for (let i = 0; i < Data.length; i++) {
    console.log("index loop data : ", i);
    for (let j = 0; j < task.length; j++) {
      console.log("index loop task : ", j);
      if (task[j].id === Data[i].id) {
        Data[i].Taskstatus = task[j].array;

        if (Data[i].Taskstatus === "Completed") {
          Data[i].Colorstate = "success";
        } else {
          Data[i].Colorstate = "danger";
        }
      } else {
        console.log("task, data index did not match");
      }
    }
  }
  return Data;
};

export const handleDataUpdate = (editTodoList, Data) => {
  console.log("processing index for editTodoList and data");
  let val = [editTodoList];
  console.log("val", val);
  console.log("Data", Data);

  for (let i = 0; i < Data.length; i++) {
    console.log("index loop data : ", i);
    for (let j = 0; j < val.length; j++) {
      console.log("index loop editTodoList : ", j);
      if (val[j].id === Data[i].id) {
        Data[i].todoname = val[j].todoname;
        Data[i].description = val[j].description;
      } else {
        console.log("task, data index did not match");
      }
    }
  }
  return Data;
};
