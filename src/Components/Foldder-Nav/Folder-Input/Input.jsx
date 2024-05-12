import React from "react";
import styles from "./input.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Input() {
  return (
    <div>
    
      <div >
        <form className={styles.inputDivNav} id={styles.inputDivNav} action="#">
        <input
          className={styles.inputDivNav_input}
          id={styles.inputDivNav_input}
          type="text"
          placeholder="What are you looking for?"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.searchIcon}
          id={styles.searchIcon}
        />
        </form>
      </div>
    </div>
  );
}

export default Input;
