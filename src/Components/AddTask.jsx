import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { handleDataUpdate } from "./Utilis";

function AddTask({
  Data,
  setData,
  toggle,
  setToggle,
  editTodoList,
  seteditTodoList,
  Taskstatus,
  setTaskstatus,
  Colorstate,
  setColorstate,
}) {
  let [todoname, SetTodoname] = useState("");
  let [description, SetDescription] = useState("");
  let taskStatus1 = "Not completed";
  let taskStatus2 = "Completed";
  const Addtodo = () => {
    let id = Data.length ? Data[Data.length - 1].id + 1 : 1;
    let newList = {
      id,
      todoname,
      description,
      taskStatus1,
      taskStatus2,
      Taskstatus,
      Colorstate,
    };

    let newarr = [...Data];
    newarr.push(newList);
    setData(newarr);
    SetTodoname("");
    SetDescription("");
  };

  const saveTodo = () => {
    seteditTodoList(editTodoList);
    let updateData = handleDataUpdate(editTodoList, Data);
    console.log("updated data ", updateData);
    setToggle(true);
  };

  return (
    <>
      <h1 className="text-success">My todo</h1>
      <div className="container py-1 mb-1">
        {toggle ? (
          <Form>
            <Row className="justify-content-center">
              <Col sm={3} className="my-1">
                <Form.Control
                  id="inlineFormInputName"
                  placeholder="Todo name"
                  value={todoname}
                  onChange={(e) => {
                    SetTodoname(e.target.value);
                  }}
                />
              </Col>
              <Col sm={3} className="my-1">
                <InputGroup>
                  <Form.Control
                    id="inlineFormInputGroupUsername"
                    placeholder="Todo Description"
                    value={description}
                    onChange={(e) => {
                      SetDescription(e.target.value);
                    }}
                  />
                </InputGroup>
              </Col>

              <Col sm={3} className="my-1">
                <Button className="bg-success" onClick={Addtodo}>
                  Add Todo
                </Button>
              </Col>
            </Row>
          </Form>
        ) : (
          <Form>
            <Row className="justify-content-center">
              <Col sm={3} className="my-1">
                <Form.Control
                  id="inlineFormInputName"
                  placeholder={editTodoList.todoname}
                  onChange={(e) => {
                    editTodoList.todoname = e.target.value;
                  }}
                />
              </Col>
              <Col sm={3} className="my-1">
                <InputGroup>
                  <Form.Control
                    id="inlineFormInputGroupUsername"
                    placeholder={editTodoList.description}
                    onChange={(e) => {
                      editTodoList.description = e.target.value;
                    }}
                  />
                </InputGroup>
              </Col>

              <Col sm={3} className="my-1">
                <Button className="bg-success" onClick={saveTodo}>
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </div>
    </>
  );
}

export default AddTask;
