import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  //yhaa calval only name hai state ki
  const [calVal, setCalVal] = useState("");

  //yhan pe evnt ka use jab bbhi koi button click karenge to event humhe bataa dega ki konnsa butoon click hua hai
  // const onButtonClick = (event) => console.log("buttonclicked." + event);

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      {/* props passsing here */}
      <Display displayValue={calVal}></Display>
      {/* butoon container ek method le rhaa hai as a prop or behavier ko parents tak bubble up kar rha hai */}
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
