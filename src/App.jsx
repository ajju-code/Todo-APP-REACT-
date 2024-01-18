import React, { useState } from "react";
import TodoItems from "./components/TodoItems";
import { TodoItemsContext } from "./store/Todo_itemsContext";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Welcome_msg from "./components/Welcom_msg";

function App() {
  const [todoitems, settodoitems] = useState([]);

  const addNewItems = (itemname, itemduedate) => {
    const newTodoitem = [
      ...todoitems,
      {
        name: itemname,
        due_date: itemduedate,
      },
    ];
    settodoitems(newTodoitem);
  };

  const deleteItem = (todoitemname) => {
    const newTodoitem = todoitems.filter((item) => item.name !== todoitemname);
    settodoitems(newTodoitem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoitems,
        addNewItems: addNewItems,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo_container">
        <AppName />
        <AddTodo />
        <Welcome_msg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
