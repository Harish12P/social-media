import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to college",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "like me",
  //     dueDate: "right now",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);
  //[]=initialtodoitems tha

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
    // setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted:${todoItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />

      {/* yha pe best kaam kya hai ki humhae bar nhi karnaa hoga ki dikha na hai ki nhi ye ahr khali hoga too direct dikha degaa ki khali hai  */}
      <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
