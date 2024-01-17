import TodoItem from "./TodoItem";
import sty from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteclick }) => {
  return (
    <>
      <div className={sty.itemsContainer}>
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            todoName={items.name}
            tododate={items.due_date}
            onDeleteclick={onDeleteclick}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
