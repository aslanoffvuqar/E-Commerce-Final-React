import React from "react";
import styles from "./nav.module.css";
import "../Foldder-Nav/navMedia.css";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="container">
        <nav className={styles.nav} id="nav">
          <h1>Exclusive</h1>
          <ul className={styles.navBar} id="navBar">
            <li className={styles.navBar_li} id="navBar_li">
              <Link className={styles.navBar_a} id="navBar_a" to="/Home">
                Home
              </Link>
            </li>
            <li className={styles.navBar_li} id="navBar_li">
              <a className={styles.navBar_a} id="navBar_a"  href="#">
                Contact
              </a>
            </li>
            <li className={styles.navBar_li} id="navBar_li">
              <a className={styles.navBar_a} id="navBar_a"  href="#">
                About
              </a>
            </li>
            <li className={styles.navBar_li} id="navBar_li">
              <a className={styles.navBar_a} id="navBar_a"  href="#">
                Sign Up
              </a>
            </li>
          </ul>
          <div className={styles.allInputBox} id="allInputBox">
            <div className={styles.inputDivNav} id="inputDivNav">
              <input
                className={styles.inputDivNav_input} id="inputDivNav_input"
                type="text"
                placeholder="What are you looking for?"
              />
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} id="searchIcon" />
            </div>
            <div className={styles.HeartShoppingIcon} id="HeartShoppingIcon">
              <FontAwesomeIcon icon={faHeart} className={styles.HeartIcon} id="HeartIcon" />
              <FontAwesomeIcon
                icon={faCartShopping}
                className={styles.ShoppinghIcon} id="ShoppinghIcon"
              />
            </div>
          </div>
        </nav>
      </div>

      <hr className={styles.HrFooter} />
    </>
  );
}

export default Nav;
