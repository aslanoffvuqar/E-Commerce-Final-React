import React from "react";
import styles from "./basket.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Basket() {
  return (
    <div>
        <FontAwesomeIcon
          icon={faCartShopping}
          className={styles.ShoppinghIcon}
          id={styles.ShoppinghIcon}
        />
    </div>
  );
}

export default Basket;
