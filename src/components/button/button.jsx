import styles from "./button.module.css";
import { Link } from "react-router-dom";

export default function Button({ to, onClick, children }) {
  if (to) {
    return (
      <Link to={to} className={styles.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}