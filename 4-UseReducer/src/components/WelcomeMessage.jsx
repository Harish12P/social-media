import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo_items-store";
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return <p className={styles.welcome}>Enjoy Your Day</p>;
};
export default WelcomeMessage;
