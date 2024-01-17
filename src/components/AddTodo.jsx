import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewitem }) {
  const todoName_ele = useRef();
  const todoDate_ele = useRef();

  const handleAddbtn = () => {
    const todoName = todoName_ele.current.value;
    const todoDate = todoDate_ele.current.value;

    todoName_ele.current.value = "";
    todoDate_ele.current.value = "";
    console.log(`${todoName_ele}`);
    onNewitem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <div className="row myrow">
        <div className="col-sm-6">
          <input
            ref={todoName_ele}
            type="text"
            placeholder="Enter Todo Here "
          />
        </div>
        <div className="col-sm-4">
          <input ref={todoDate_ele} type="date" />
        </div>
        <div className="col-sm-2">
          <button
            onClick={() => {
              handleAddbtn();
            }}
            type="button"
            className="btn btn-success my_button"
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
