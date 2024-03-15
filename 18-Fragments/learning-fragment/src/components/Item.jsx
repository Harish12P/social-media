import styles from "./Item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };
  //array distruccring
  return (
    <li
      className={`${styles["kg-Item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
        // {(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
