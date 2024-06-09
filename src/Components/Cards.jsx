import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState } from "react";
import { findIndexById } from "./Utilis";
import { findEditIndex } from "./Utilis";
import { handleTaskList } from "./Utilis";
import { handleTaskUpdate } from "./Utilis";

function Cards({
  Data,
  setData,
  toggle,
  setToggle,
  editTodoList,
  seteditTodoList,
  statusFilter,
}) {
  let [taskId, settaskId] = useState();
  let [taskList, setTasklist] = useState([]);

  // handling statusUpdate operation
  const statusUpdate = (val) => {
    console.log("clicked dropdown");
    let id = taskId;
    let newArrList = handleTaskList(id, taskId, val);
    for (let i = 0; i < taskList.length; i++) {
      if (newArrList[0].id === taskList[i].id) {
        console.log("duplicate task list");
        taskList.splice(i, 1);
        console.log("deleted duplicate task list");
      }
    }
    let newarr = [...taskList];
    newarr.push(newArrList[0]);
    setTasklist(newarr);
    console.log("updated task list");
    taskUpdate(newarr);
  };

  const taskUpdate = (task) => {
    console.log("Going to validate index for tasklist and data");
    let taskIndex = handleTaskUpdate(task, Data);
    console.log("Data", taskIndex);
    setData(taskIndex);
  };
  // end of statusUpdate operation
  // handling delete operation
  const handledelete = (id) => {
    let index = findIndexById(Data, id);

    if (index !== -1) {
      Data.splice(index, 1);
      setData([...Data]);
    } else {
      console.error("invalid id: " + id);
    }
  };
  // end of handling delete operation

  // handling edit operation
  const handleedit = (id) => {
    let index = findEditIndex(Data, id);

    setToggle((current) => !current);
    seteditTodoList(Data[index]);
    // need to update data column
  };
  // end of handling edit operation

  const handleIndex = (id) => {
    settaskId(id);
  };

  return (
    <>
      {Data.map((e) => {
        if (statusFilter === "All") {
          return (
            <Card
              key={e.id}
              style={{
                width: "18rem",
                margin: "5px",
                backgroundColor: "#1DE9B6",
              }}
            >
              <Card.Body style={{ textAlign: "left" }}>
                <Card.Title>{e.todoname}</Card.Title>
                <Card.Text>{e.description}</Card.Text>
                <Card.Text className="d-sm-inline-flex flex-row">
                  Status :
                </Card.Text>
                &nbsp;
                {/* dropdown */}
                <DropdownButton
                  title={e.Taskstatus}
                  variant={e.Colorstate}
                  className="d-sm-inline-flex flex-row text-success"
                  onSelect={statusUpdate}
                  onClick={() => handleIndex(e.id)}
                >
                  <Dropdown.Item eventKey={e.taskStatus1}>
                    Not completed
                  </Dropdown.Item>
                  <Dropdown.Item eventKey={e.taskStatus2}>
                    Completed
                  </Dropdown.Item>
                </DropdownButton>
                {/* end of dropdown */}
                <div className="container d-sm-inline-flex flex-row justify-content-end">
                  <Button variant="success " onClick={() => handleedit(e.id)}>
                    Edit
                  </Button>
                  &nbsp;&nbsp;
                  <Button variant="danger" onClick={() => handledelete(e.id)}>
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        }
        if (statusFilter === "Completed") {
          if (e.Taskstatus === "Completed") {
            return (
              <Card
                key={e.id}
                style={{
                  width: "18rem",
                  margin: "5px",
                  backgroundColor: "#1DE9B6",
                }}
              >
                <Card.Body style={{ textAlign: "left" }}>
                  <Card.Title>{e.todoname}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>
                  <Card.Text className="d-sm-inline-flex flex-row">
                    Status :
                  </Card.Text>
                  &nbsp;
                  {/* dropdown */}
                  <DropdownButton
                    title={e.Taskstatus}
                    variant={e.Colorstate}
                    className="d-sm-inline-flex flex-row text-success"
                    onSelect={statusUpdate}
                    onClick={() => handleIndex(e.id)}
                  >
                    <Dropdown.Item eventKey={e.taskStatus1}>
                      Not completed
                    </Dropdown.Item>
                    <Dropdown.Item eventKey={e.taskStatus2}>
                      Completed
                    </Dropdown.Item>
                  </DropdownButton>
                  {/* end of dropdown */}
                  <div className="container d-sm-inline-flex flex-row justify-content-end">
                    <Button variant="success " onClick={() => handleedit(e.id)}>
                      Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Button variant="danger" onClick={() => handledelete(e.id)}>
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          }
        }
        if (statusFilter === "Not completed") {
          if (e.Taskstatus === "Not completed") {
            return (
              <Card
                key={e.id}
                style={{
                  width: "18rem",
                  margin: "5px",
                  backgroundColor: "#1DE9B6",
                }}
              >
                <Card.Body style={{ textAlign: "left" }}>
                  <Card.Title>{e.todoname}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>
                  <Card.Text className="d-sm-inline-flex flex-row">
                    Status :
                  </Card.Text>
                  &nbsp;
                  {/* dropdown */}
                  <DropdownButton
                    title={e.Taskstatus}
                    variant={e.Colorstate}
                    className="d-sm-inline-flex flex-row text-success"
                    onSelect={statusUpdate}
                    onClick={() => handleIndex(e.id)}
                  >
                    <Dropdown.Item eventKey={e.taskStatus1}>
                      Not completed
                    </Dropdown.Item>
                    <Dropdown.Item eventKey={e.taskStatus2}>
                      Completed
                    </Dropdown.Item>
                  </DropdownButton>
                  {/* end of dropdown */}
                  <div className="container d-sm-inline-flex flex-row justify-content-end">
                    <Button variant="success " onClick={() => handleedit(e.id)}>
                      Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Button variant="danger" onClick={() => handledelete(e.id)}>
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          }
        }
      })}
    </>
  );
}
export default Cards;
