import React from "react";
import Asidestyles from "../Foldder-Aside/aside.module.css";
import "../Foldder-Aside/aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider/Slider";
import { SlBasket } from "react-icons/sl";

// import img from "../Foldder-Aside/Aside-Img/Frame 560.png";

// import Carousel from "react-bootstrap/Carousel";
// import Image from "react-bootstrap/Image";

function Aside() {
  return (
    <>
      <div className="container">
        <div className="flex w-full gap-20">
          <aside className={Asidestyles.asideBox}>
            <div className={Asidestyles.allBox}>
              <div className={Asidestyles.asideDiv}>
                <a className={Asidestyles.a} href="#">
                  Woman’s Fashion
                  <span className={Asidestyles.a_icon}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </a>
                <a className={Asidestyles.a} href="#">
                  Men’s Fashion
                  <span className={Asidestyles.a_icon2}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </a>
                <a className={Asidestyles.a} href="#">
                  Electronics
                </a>
                <a className={Asidestyles.a} href="#">
                  Home & Lifestyle
                </a>
                <a className={Asidestyles.a} href="#">
                  Medicine
                </a>
                <a className={Asidestyles.a} href="#">
                  Sports & Outdoor
                </a>
                <a className={Asidestyles.a} href="#">
                  Baby’s & Toys
                </a>
                <a className={Asidestyles.a} href="#">
                  Groceries & Pets
                </a>
                <a className={Asidestyles.a} href="#">
                  Health & Beauty
                </a>
              </div>
              <div className={Asidestyles.Line}></div>
            </div>
          </aside>
          <Slider />
        </div>
        {/* ****************** Mobil*************************** */}
        <div className={Asidestyles.mediaIconAndImput}>
          <FontAwesomeIcon icon={faBars} className={Asidestyles.iconBars} />
          <div className={Asidestyles.inputDivNav} id={Asidestyles.inputDivNav}>
            <input
              className={Asidestyles.inputDivNav_input}
              id={Asidestyles.inputDivNav_input}
              type="text"
              placeholder="What are you looking for?"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className={Asidestyles.searchIcon}
              id={Asidestyles.searchIcon}
            />
          </div>
          <div
            className={Asidestyles.HeartShoppingIcon}
            id={Asidestyles.HeartShoppingIcon}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={Asidestyles.HeartIcon}
              id={Asidestyles.HeartIcon}
            />
            <SlBasket
              className={Asidestyles.ShoppinghIcon}
              id={Asidestyles.ShoppinghIcon}
            />
          </div>
        </div>
        {/* ****************** Mobil*************************** */}
      </div>
    </>
  );
}

export default Aside;
