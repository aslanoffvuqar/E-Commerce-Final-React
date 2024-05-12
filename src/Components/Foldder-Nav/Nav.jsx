import React from "react";
import styles from "./nav.module.css";
import "../Foldder-Nav/navMedia.css";
import "./nav.css";

import { Link } from "react-router-dom";
import "boxicons";

import Input from "./Folder-Input/Input";
import Favorites from "./Folder-Favorites/Favorites";
import Basket from "./Folder-Basket/Basket";
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
            <Input />
            <div className={styles.HeartShoppingIcon}id={styles.HeartShoppingIcon}>
              <Favorites />
              <Basket />
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
