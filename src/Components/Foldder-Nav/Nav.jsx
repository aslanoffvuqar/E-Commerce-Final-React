import React from "react";
import styles from "./nav.module.css";
import "../Foldder-Nav/navMedia.css";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "boxicons";
function Nav() {
  return (
    <>
      <div className="container" id={styles.container}>
        <nav className={styles.nav} id={styles.nav}>
          <h1 className={styles.nav_h1}>Exclusive</h1>
          <ul className={styles.navBar} id={styles.navBar}>
            <li className={styles.navBar_li} id={styles.navBar_li}>
              <Link className={styles.navBar_a} id={styles.navBar_a} to="/Home">
                Home
              </Link>
            </li>
            <li className={styles.navBar_li} id={styles.navBar_li}>
              <a className={styles.navBar_a} id={styles.navBar_a} href="#">
                Contact
              </a>
            </li>
            <li className={styles.navBar_li} id={styles.navBar_li}>
              <a className={styles.navBar_a} id={styles.navBar_a} href="#">
                About
              </a>
            </li>
            <li className={styles.navBar_li} id={styles.navBar_li}>
              <a className={styles.navBar_a} id={styles.navBar_a} href="#">
                Sign Up
              </a>
            </li>
          </ul>
          <div className={styles.allInputBox} id={styles.allInputBox}>
            <div className={styles.inputDivNav} id={styles.inputDivNav}>
              <input
                className={styles.inputDivNav_input}
                id={styles.inputDivNav_input}
                type="text"
                placeholder="What are you looking for?"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className={styles.searchIcon}
                id={styles.searchIcon}
              />
            </div>
            <div
              className={styles.HeartShoppingIcon}
              id={styles.HeartShoppingIcon}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={styles.HeartIcon}
                id={styles.HeartIcon}
              />
              <FontAwesomeIcon
                icon={faCartShopping}
                className={styles.ShoppinghIcon}
                id={styles.ShoppinghIcon}
              />
            </div>
          </div>
          <select className={styles.selectHeader} id={styles.selectHeader}>
              <option value="0">English</option>
            </select>
        </nav>
      </div>

      <hr className={styles.HrFooter} />
    </>
  );
}

export default Nav;
