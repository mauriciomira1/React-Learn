import styles from "./styles.module.css";

const CardSection = (props) => {
  return (
    <div {...props} className={`${styles.wrapper} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default CardSection;
