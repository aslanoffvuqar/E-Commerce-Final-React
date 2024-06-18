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
import { useTranslation } from "react-i18next";

function Aside() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="flex w-full justify-between">
          <aside className={Asidestyles.asideBox}>
            <div className={Asidestyles.allBox}>
              <div className={Asidestyles.asideDiv}>
                <div className={Asidestyles.dropdown}>
                  <a className={Asidestyles.a} href="#">
                    {t("Woman’s Fashion")}
                    <span className={Asidestyles.a_icon}>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </a>
                  <div className={Asidestyles.dropdownContent}>
                  <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    
                  </div>
                </div>
                <div className={Asidestyles.dropdown}>
                  <a className={Asidestyles.a} href="#">
                    {t("Men’s Fashion")}
                    <span className={Asidestyles.a_icon}>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </a>
                  <div className={Asidestyles.dropdownContent}>
                  <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    <div>
                    <h1 className="font-bold	">Clothes</h1>
                      <a href="#">{t("Dresses")}</a>
                      <a href="#">{t("T-shirt")}</a>
                      <a href="#">{t("Shirt")}</a>
                      <a href="#">{t("Jeans")}</a>
                      <a href="#">{t("Trousers")}</a>
                      <a href="#">{t("Blouse")}</a>
                      <a href="#">{t("Jacket")}</a>
                      <a href="#">{t("Skirt")}</a>
                      <a href="#">{t("Jumper")}</a>
                      <a href="#">{t("Big size")}</a>
                      <a href="#">{t("Trench coat")}</a>
                      <a href="#">{t("Raincoat")}</a>
                      <a href="#">{t("Windbreaker")}</a>
                      <a href="#">{t("Sweatshirt")}</a>
                      <a href="#">{t("Coat")}</a>
                      <a href="#">{t("Cardigan")}</a>
                    </div>
                    
                  </div>
                </div>
                <a className={Asidestyles.a} href="#">
                  {t("Electronics")}
                </a>
                <a className={Asidestyles.a} href="#">
                  {t("Home & Lifestyle")}
                </a>
                <a className={Asidestyles.a} href="#">
                  {t("Medicine")}
                </a>
                <a className={Asidestyles.a} href="#">
                  {t("Sports & Outdoor")}
                </a>
                <a className={Asidestyles.a} href="#">
                  {t("Baby’s & Toys")}
                </a>
                <a className={Asidestyles.a} href="#">
                  {t("Groceries & Pets")}
                </a>
                <a className={Asidestyles.a} href="#">
                  {t("Health & Beauty")}
                </a>
              </div>
              <div className={Asidestyles.Line}></div>
            </div>
          </aside>
          <Slider />
        </div>
        {/* ****************** Mobile*************************** */}
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
              placeholder={t("What are you looking for?")}
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
        {/* ****************** Mobile*************************** */}
        <aside
          className={`${Asidestyles.mobileAsideBox} ${
            isSidebarOpen ? Asidestyles.open : ""
          }`}
        >
          <div className={Asidestyles.asideDiv}>
            <div className="flex w-full justify-between ">
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/Home">
                  {t("Home")}
                </Link>
              </li>
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/Contact">
                  {t("Contact")}
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
            </div>
            <div className={Asidestyles.asideDiv}>
              <div className={Asidestyles.dropdown}>
                <a className={Asidestyles.a} href="#">
                  {t("Woman’s Fashion")}
                </a>
                <div className={Asidestyles.dropdownContent}>
                  <div>
                    <a href="#">{t("Dresses")}</a>
                    <a href="#">{t("Tops")}</a>
                    <a href="#">{t("Accessories")}</a>
                  </div>
                </div>
              </div>
              <div className={Asidestyles.dropdown}>
                <a className={Asidestyles.a} href="#">
                  {t("Men’s Fashion")}
                </a>
                <div className={Asidestyles.dropdownContent}>
                  <div>
                    <a href="#">{t("Shirts")}</a>
                    <a href="#">{t("Pants")}</a>
                    <a href="#">{t("Accessories")}</a>
                  </div>
                </div>
              </div>
              <a className={Asidestyles.a} href="#">
                {t("Electronics")}
              </a>
              <a className={Asidestyles.a} href="#">
                {t("Home & Lifestyle")}
              </a>
              <a className={Asidestyles.a} href="#">
                {t("Medicine")}
              </a>
              <a className={Asidestyles.a} href="#">
                {t("Sports & Outdoor")}
              </a>
              <a className={Asidestyles.a} href="#">
                {t("Baby’s & Toys")}
              </a>
              <a className={Asidestyles.a} href="#">
                {t("Groceries & Pets")}
              </a>
              <a className={Asidestyles.a} href="#">
                {t("Health & Beauty")}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Aside;
