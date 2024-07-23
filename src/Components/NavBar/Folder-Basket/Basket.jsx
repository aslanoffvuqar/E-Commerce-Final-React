import React from "react";
import Basketstyles from "./basket.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../cartcontext/CartContext";
import { PiShoppingCart } from "react-icons/pi";

function Basket() {
  const { cartCount } = useCart();

  return (
    <div>
      <Link to='/Basket'>
        <div className={Basketstyles.ShoppinghIconContainer}>
          <PiShoppingCart
            className={Basketstyles.ShoppinghIcon}
            id={Basketstyles.ShoppinghIcon}
          />
          {cartCount > 0 && <span className={Basketstyles.cartCount}>{cartCount}</span>}
        </div>
      </Link>
    </div>
  );
}

export default Basket;