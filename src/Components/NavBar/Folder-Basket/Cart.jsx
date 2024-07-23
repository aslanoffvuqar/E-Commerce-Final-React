import React from 'react';
import styles from './basket.module.css';
import { useCart } from "../../cartcontext/CartContext";

const Cart = () => {
  const { cartItems, handleQuantityChange, handleDeleteItem } = useCart();

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };
  const subtotal = cartItems.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0);
  const shipping = 0;
  const total = subtotal;

  return (
    <div className={styles.cartContainer}>
      <nav className={styles.breadcrumb}>
        <a href="/userhome">Home</a> / <span>Cart</span>
      </nav>
      <div className={styles.cartTable}>
        <div className={`${styles.cartTr} ${styles.cartHeader}`}>
          <div style={{ width: "182px" }}>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        {cartItems.map(item => (
          <div key={item.id} className={styles.cartTr}>
            <div className={styles.crtImg}>
              <img src={item.imageUrl} alt='Cart' className={styles.cartImg} />
              <div>{item.name}</div>
            </div>
            <div>${item.price}</div>
            <div>
              <select value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}>
                {[1, 2, 3].map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>${calculateSubtotal(item.price, item.quantity)}</div>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <button className={styles.returnButton}>Return To Shop</button>
        <button className={styles.updateButton}>Update Cart</button>
      </div>
      <div className={styles.couponContainer}>
        <input type="text" placeholder="Coupon Code" />
        <button className={styles.couponButton}>Apply Coupon</button>
      </div>
      <div className={styles.crtTotal}>
        <div className={styles.cartTotal}>
          <h4>Cart Total</h4>
          <div className={styles.cartTtl1}>
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
          <div className={styles.cartTtl2}>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className={styles.cartTtl3}>
            <p>Total:</p>
            <p>${total}</p>
          </div>
          <button className={styles.checkoutButton}>Process to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;