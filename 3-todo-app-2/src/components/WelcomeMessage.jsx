import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = ({ todoItems }) => {
  return !todoItems && <p className={styles.welcome}>Enjoy Your Day</p>;
};
export default WelcomeMessage;
