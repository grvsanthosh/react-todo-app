import Dropdown from "react-bootstrap/Dropdown";

function StatusFilter({ statusFilter, setStatusFilter }) {
  return (
    <div className="container d-sm-inline-flex flex-row justify-content-between">
      <h1 className="text-black">My Todos</h1>
      <div className="container d-sm-inline-flex flex-row justify-content-end">
        <h1 className="text-black  d-sm-inline-flex flex-row ">
          Status Filter :
        </h1>
        &nbsp;
        <div className="d-sm-inline-flex flex-row mb-4">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {statusFilter}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setStatusFilter("All");
                }}
              >
                All
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setStatusFilter("Completed");
                }}
              >
                Completed
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setStatusFilter("Not completed");
                }}
              >
                Not completed
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default StatusFilter;
