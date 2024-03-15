import { useRef } from "react";
import { MdAddToQueue } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    //using form ka hai ye
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
    //yha pe jab bhi hum conole me kuch bhi add karenge to ye direct add karega or wo empty hojaaega
  };

  return (
    <div className="container text-center">
      {/* yha pe  div ki jagah form condition use hui change kuch nhi hai console me */}
      <form
        className="row kg-row"
        // {/* Using Form me niche wala handleAddButtonClicked ko yha rakha hai */}
        onSubmit={handleAddButtonClicked}
      >
        <div className="col-6">
          <input
            type="text"
            //yha jo jsx elemt  hai uske liye refernce create kr liya
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            {/* yha pe Add logo i command hai uyue  */}
            <MdAddToQueue></MdAddToQueue>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

//this code is useSatate jo ki ref se badha code tha upar ref ka code hai

// import { useState } from "react";
// import { MdAddToQueue } from "react-icons/md";

// function AddTodo({ onNewItem }) {
//   // const [todoName, setTodoName] = useState("");
//   // const [dueDate, setDueDate] = useState("");
//   // const handleNameChange = (event) => {
//   //   setTodoName(event.target.value);
//   //   noOfUpdates.current += 1;
//   // };
//   // const handleDateChange = (event) => {
//   //   setDueDate(event.target.value);
//   //   console.log(`noOfUpdets are:${noOfUpdates.current}`);
//   // };

//   const handleAddButtonClicked = (event) => {
//     //using form ka hai ye
//     event.preventDefault();

//     onNewItem(todoName, dueDate);
//     //yha pe jab bhi hum conole me kuch bhi add karenge to ye direct add karega or wo empty hojaaega
//     // setDueDate("");
//     // setTodoName("");
//   };

//   return (
//     <div className="container text-center">
//       {/* yha pe  div ki jagah form condition use hui change kuch nhi hai console me */}
//       <form
//         className="row kg-row"
//         // {/* Using Form me niche wala handleAddButtonClicked ko yha rakha hai */}
//         onSubmit={handleAddButtonClicked}
//       >
//         <div className="col-6">
//           <input
//             type="text"
//
//             placeholder="Enter Todo Here"
//             //value =uski default value set karne ka kaam hota hai
//             // value={todoName}
//             // onChange={handleNameChange}
//           ></input>
//         </div>
//         <div className="col-4">
//           <input
//             type="date"
//             ref={dueDateElement}
//             //value={dueDate}

//             //onchange= {handleDateChange} ahat diya hai
//           />
//         </div>
//         <div className="col-2">
//           <button
//             // USing FOrm yha pe agar form me hum type=button ko remove karenge to console me jab deta likhengeb like name and adate to wo ek sec ke liye dikha ke refresh ho jaayega
//             //type="button"
//             className="btn btn-success kg-button"
//             //Using Form use ke liye onclick ko ek baar hataya hai
//             // onClick={handleAddButtonClicked}
//           >
//             {/* yha pe Add logo i command hai uyue  */}
//             <MdAddToQueue></MdAddToQueue>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddTodo;
