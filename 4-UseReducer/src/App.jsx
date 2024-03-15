import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItems from "./components/TodoItems";

import WelcomeMessage from "./components/WelcomeMessage";
import TodoitemsContextProvider from "./store/todo_items-store";

function App() {
  return (
    <TodoitemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoitemsContextProvider>
  );
}

export default App;

//App kaa kaam sirf UI realated kaa hai
