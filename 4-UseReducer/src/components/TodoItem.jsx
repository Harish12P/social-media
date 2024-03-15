import { useContext } from "react";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo_items-store";
function TodoItem({ todoName, todoDate }) {
  // let todoName = "Buy Milk";
  // let todoDate = "4/10/2023";
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            {/* yha delete logo ki command hai */}
            <RiDeleteBin3Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
