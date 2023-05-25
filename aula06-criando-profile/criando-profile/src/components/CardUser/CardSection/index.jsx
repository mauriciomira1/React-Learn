import styles from "./styles.module.css";

const CardSection = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default CardSection;
