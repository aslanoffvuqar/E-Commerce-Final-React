import React from "react";
import styles from "./favorites.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Favorites() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faHeart}
        className={styles.HeartIcon}
        id={styles.HeartIcon}
      />
    </div>
  );
}

export default Favorites;
