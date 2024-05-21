import React from "react";
import Basketstyles from "./basket.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { PiShoppingCart } from "react-icons/pi";
function Basket() {
  return (
    <div>
      <PiShoppingCart
        className={Basketstyles.ShoppinghIcon}
        id={Basketstyles.ShoppinghIcon}
      />
    </div>
  );
}

export default Basket;
