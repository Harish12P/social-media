import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo_items-store";

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

  //use state 2 array return karte hai
  const [todoItems, setTodoItems] = useState([]);
  //[]=initialtodoitems tha

  const addNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    //Functional Updates
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
    // setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
