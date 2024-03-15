import { useContext } from "react";
import { TodoItemsContext } from "../store/todo_items-store";
import TodoItem from "./TodoItem";
//import styles from "./TodoItems.modules.css"
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  // console.log(`items from context:${todoItemsFromContext}`);
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          //key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
