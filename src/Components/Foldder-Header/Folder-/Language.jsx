import React from "react";
import styles from "./language.module.css";

function Language() {
  return (
    <div>
      <select className={styles.selectHeader} id={styles.selectHeader}>
        <option value="0">English</option>
      </select>
    </div>
  );
}

export default Language;
