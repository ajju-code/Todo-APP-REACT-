import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Welcome_msg from "./components/Welcom_msg";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
function App() {
  const [todoitems, settodoitems] = useState([]);

  const handleNewItem = (itemname, itemduedate) => {
    const newTodoitem = [
      ...todoitems,
      {
        name: itemname,
        due_date: itemduedate,
      },
    ];
    settodoitems(newTodoitem);
  };

  const handledelete = (todoitemname) => {
    const newTodoitem = todoitems.filter((item) => item.name !== todoitemname);
    settodoitems(newTodoitem);
  };
  return (
    //  The <> is called fragment that Group Multiple element without any extra DOM Node
    <>
      <center className="todo_container">
        <AppName />
        <AddTodo onNewitem={handleNewItem} />
        {todoitems.length === 0 && <Welcome_msg />}

        <TodoItems
          todoItems={todoitems}
          onDeleteclick={handledelete}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;
