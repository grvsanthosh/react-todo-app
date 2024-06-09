import { useState } from "react";
import AddTask from "./Components/AddTask";
import StatusFilter from "./Components/StatusFilter";
import Cards from "./Components/Cards";

function App() {
  let [Data, setData] = useState([]);
  let [toggle, setToggle] = useState(true);
  let [editTodoList, seteditTodoList] = useState([]);
  let [Taskstatus, setTaskstatus] = useState("Not completed");
  let [Colorstate, setColorstate] = useState("danger");
  let [statusFilter, setStatusFilter] = useState("All");

  return (
    <>
      <header className="bg-light text-center py-5 mb-4">
        <div className="container">
          <div className="row">
            <AddTask
              Data={Data}
              setData={setData}
              toggle={toggle}
              setToggle={setToggle}
              editTodoList={editTodoList}
              seteditTodoList={seteditTodoList}
              Taskstatus={Taskstatus}
              setTaskstatus={setTaskstatus}
              Colorstate={Colorstate}
              setColorstate={setColorstate}
            />
            <StatusFilter
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />

            <Cards
              Data={Data}
              setData={setData}
              toggle={toggle}
              setToggle={setToggle}
              editTodoList={editTodoList}
              seteditTodoList={seteditTodoList}
              Taskstatus={Taskstatus}
              setTaskstatus={setTaskstatus}
              Colorstate={Colorstate}
              setColorstate={setColorstate}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
