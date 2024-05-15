import React from "react";
import Basketstyles from "./basket.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { SlBasket } from "react-icons/sl";
function Basket() {
  return (
    <div>
      <SlBasket
        className={Basketstyles.ShoppinghIcon}
        id={Basketstyles.ShoppinghIcon}
      />
    </div>
  );
}

export default Basket;
