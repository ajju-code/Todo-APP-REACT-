import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo_itemsContext";
import sty from "./TodoItems.module.css";

const TodoItems = ({}) => {
  const { todoItems } = useContext(TodoItemsContext);
  console.log(todoItems);

  return (
    <>
      <div className={sty.itemsContainer}>
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            todoName={items.name}
            tododate={items.due_date}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
