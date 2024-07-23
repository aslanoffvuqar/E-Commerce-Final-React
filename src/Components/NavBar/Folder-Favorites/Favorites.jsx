import React from "react";
import Favoritesstyles from "./favorites.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Favorites() {
  return (
    <div>
      <Link to="/WhistList">
        <FontAwesomeIcon
          icon={faHeart}
          className={Favoritesstyles.HeartIcon}
          id={Favoritesstyles.HeartIcon}
        />
      </Link>
    </div>
  );
}

export default Favorites;
