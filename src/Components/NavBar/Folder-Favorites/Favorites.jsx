import React from "react";
import Favoritesstyles from "./favorites.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Favorites() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faHeart}
        className={Favoritesstyles.HeartIcon}
        id={Favoritesstyles.HeartIcon}
      />
    </div>
  );
}

export default Favorites;
