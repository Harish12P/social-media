import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    ></input>
  );
};
export default FoodInput;

//yyha console me show karega if i am put ice
//i
//ic
//ice
