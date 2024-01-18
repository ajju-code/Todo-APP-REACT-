import st from "./Welcome_msg.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo_itemsContext";
const Welcome_msg = ({}) => {
  const Contextobj = useContext(TodoItemsContext);
  const todoItems = Contextobj.todoItems;
  return todoItems.length === 0 && <p className={st.welcome}>Enjoy your Day</p>;
};
export default Welcome_msg;
