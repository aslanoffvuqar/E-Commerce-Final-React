import React from "react";
import Header from "../HeaderBar/Header";
import Aside from "../AsideBar/Aside";
import Section_one from "../Section_one_main/Section_one";
import Categories from "../Categories/Categories";
import BestProduct from "../Best_product/BestProduct";
import SectionFour from "../Section_four_main/SectionFour";
import ExploreProduct from "../Explore_product/ExploreProduct";
import NewArrival from "../NewArrivalBar/NewArrival";
import Footer from "../FooterBar/Footer";
import Navstyles from "../NavBar/nav.module.css";
import "../NavBar/navMedia.css";
import UserModule from "./use.module.css";
import { Link } from "react-router-dom";

import Input from "../NavBar/Folder-Input/Input";
import { PiShoppingCart } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { LuUser } from "react-icons/lu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
function UserHome() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    console.log("Changing language to:", e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <Header />
      {/* <Nav/> */}
      <div className="container" id={Navstyles.container}>
        <nav className={Navstyles.nav}>
          <Link className={Navstyles.nav_h1} to="/Home">
            {t("Exclusive")}
          </Link>
          <ul className={Navstyles.navBar}>
            <li className={Navstyles.navBar_li}>
              <Link className={Navstyles.navBar_a} to="/Home">
                {t("home")}
              </Link>
            </li>
            <li className={Navstyles.navBar_li}>
              <Link className={Navstyles.navBar_a} to="/Contact">
                {t("contact")}
              </Link>
            </li>
            <li className={Navstyles.navBar_li}>
              <Link className={Navstyles.navBar_a} to="/About">
                {t("About")}
              </Link>
            </li>
            <li className={Navstyles.navBar_li}>
              <Link className={Navstyles.navBar_a} to="/SignUp">
                {t("Sign Up")}
              </Link>
            </li>
          </ul>
          <div className={UserModule.allInputBox}>
            <Input />
            <div className={Navstyles.HeartShoppingIcon}>
              <FontAwesomeIcon
                icon={faHeart}
                className={UserModule.HeartIcon}
                id={UserModule.HeartIcon}
              />
              <PiShoppingCart
                className={UserModule.ShoppinghIcon}
                id={UserModule.ShoppinghIcon}
              />
              <div className="h-8 w-8 bg-red-600 rounded-full justify-center flex items-center	text-white	">
                <LuUser />
              </div>
            </div>
          </div>
          {/* <Language/> */}
          <select
            className={Navstyles.selectHeader}
            id={Navstyles.selectHeader}
            onChange={handleChangeLanguage}
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="az">Azəbaycan</option>
          </select>
        </nav>
      </div>

      <hr className={Navstyles.HrFooter} />
      <Aside />
      <Section_one />
      <Categories />
      <BestProduct />
      <SectionFour />
      <ExploreProduct />
      <NewArrival />
      <Footer />
    </div>
  );
}

export default UserHome;
