import React, { useState } from "react";
import Asidestyles from "../AsideBar/aside.module.css";
import "../AsideBar/aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "./Slider/Slider";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import Navstyles from "../NavBar/nav.module.css";

function Aside() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="container">
        <div className="flex w-full justify-between">
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
                  <span className={Asidestyles.a_icon}>
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
          <FontAwesomeIcon
            icon={faBars}
            className={Asidestyles.iconBars}
            onClick={toggleSidebar}
          />
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
        <aside
          className={`${Asidestyles.mobileAsideBox} ${isSidebarOpen ? Asidestyles.open : ""}`}
        >
          <div className={Asidestyles.asideDiv}>
            <div className="flex w-full justify-between ">
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/Home">
                  Home
                </Link>
              </li>
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/Contact">
                  Contact
                </Link>
              </li>
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/About">
                  About
                </Link>
              </li>
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/Login">
                  Sign Up
                </Link>
              </li>
            </div>
            <div className={Asidestyles.asideDiv}>
              <a className={Asidestyles.a} href="#">
                Woman’s Fashion
              </a>
              <a className={Asidestyles.a} href="#">
                Men’s Fashion
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
          </div>
        </aside>
      </div>
    </>
  );
}

export default Aside;
