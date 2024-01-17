import { useState } from "react";

function AddTodo({ onNewitem }) {
  const [todoname, settodoname] = useState();

  const [duedate, setduedate] = useState();

  const handlename = (ev) => {
    settodoname(ev.target.value);
  };
  const handledate = (ev) => {
    setduedate(ev.target.value);
  };
  const handleAddbtn = () => {
    onNewitem(todoname, duedate);
    setduedate("");
    settodoname("");
  };

  return (
    <div className="container text-center">
      <div className="row myrow">
        <div className="col-sm-6">
          <input
            type="text"
            placeholder="Enter Todo Here "
            onChange={handlename}
            value={todoname}
          />
        </div>
        <div className="col-sm-4">
          <input type="date" onChange={handledate} value={duedate} />
        </div>
        <div className="col-sm-2">
          <button
            onClick={() => {
              handleAddbtn();
            }}
            type="button"
            className="btn btn-success my_button"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
