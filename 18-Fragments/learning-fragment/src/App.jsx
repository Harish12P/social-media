//Fragment or Map or Conditional Rendring sab isme hai
//import React from "react";

import FoodItems from "./components/FoodItems";

import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  //let foodItems = [];
  // let foodItems = ["dal", "lady finger", "green salad", "brokly", "veg"];

  // let textStateArr = useState("Food item enterd by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  //uper wali tino line ko ese bhi likhe skate hai
  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([
    // "salad",
    // "green salad",
    // "lady finger",
  ]);

  // console.log(`Current value of textState:${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      //... mean spread operator ye yha jo bhi current value hai usko add kardega
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value enterd is" + newFoodItem);
    }
    //ishki jagah upar wala likha gya hai taki enter dabane pe value show kare
    // console.log(event);

    //here change texttoshow to settextstate yha ye dubare use re-render kar dega
    // setTextState(event.target.value);
    // textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healty Food</h1>
        <p>{textToShow}</p>

        {/* yha handle on chnage pass kr diya hai  */}
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* yha jo errormessage th apajhle upar sift tha ab yha huaa hai kyu ki event.target.value=(); upar jo hai ushme kuch bhi likhe te hai wo show hota hai other wise ye show krta hain still i am hungry kyu jo array of data hai usko men remove kar diya hai */}
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the list of healty foods that are good for you health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;

//yha pe sirf <> </> se bhi kaam ho skta hai but upar import me react nhi karna

//yha map me list item ko bar bar genrate nhi karna padta upar kuch bhi add karenge wo automatic aajega

//key se yha har ek paas class bhi hai or uski iuud bhi hai key jo hai wo react vertual dom me add kar rhaa hai ye show nhi hota elemnts me

/* conditional rendring-agar yha pe hum if condtion lagate hai to agar item nahin hai humhare paas the will show */
// if (
//   foodItems.length === 0
// ) {
//   return <h3>I am still hungry.</h3>;
// }
