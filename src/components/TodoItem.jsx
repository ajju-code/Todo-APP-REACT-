import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/Todo_itemsContext";
function TodoItem1({ todoName, tododate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container ">
      <div className="row myrow">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{tododate} </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger my_button"
            onClick={() => deleteItem(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
