import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ items }) => {
  //yha active use hua background color change karne ke liye
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        //food item ko as a agrgument yha paas kiya gya hai
        <Item
          key={item}
          foodItem={item}
          //yha bought true ish liye use ho rha haoi taki hum buy pe click karre to automatic background color change kre.
          bought={activeItems.includes(item)}
          //Anoynomous fuction like item and evnet
          handleBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
      {/* <li class="list-group-item">Dal</li>
        <li class="list-group-item">ladyfinger</li>
        <li class="list-group-item">green dsalad</li>
        <li class="list-group-item">brokly</li>
        <li class="list-group-item">veg</li> */}
    </ul>
  );
};
export default FoodItems;
