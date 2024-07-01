import React from "react";
import Basketstyles from "./basket.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";

function Basket() {
  return (
    <div>
      <Link to='/Basket'><PiShoppingCart
        className={Basketstyles.ShoppinghIcon}
        id={Basketstyles.ShoppinghIcon}
      /></Link>

    </div>
  );
}

export default Basket;
