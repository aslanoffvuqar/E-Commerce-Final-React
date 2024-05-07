import React from "react";
import "./header.css";
import styles from "./header.module.css";
import "../Foldder-Header/headerMedia.css";
function header() {
  return (
    <>
      <header className={styles.header} id="header">
        <div className="container" id="container">
          <div className={styles.headerClass} id="headerClass">
            <p className={styles.headerClass_P} id="headerClass_P">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <div className={styles.headerSelect}>
              <a className={styles.headerSelect_A} id="headerSelect_A" href="#">
                ShopNow
              </a>
            </div>
            <select className={styles.selectHeader} id="selectHeader">
              <option value="0">English</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
