import styles from "./styles.module.css";

export default function Title(props) {
  return <h1 className={styles.wrapper}>{props.children}</h1>;
}
