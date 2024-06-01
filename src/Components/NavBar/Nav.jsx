import React from "react";
import { Link, useLocation } from "react-router-dom"; // Добавляем необходимые импорты
import Navstyles from "./nav.module.css"; // Импортируем стили

import Input from "./Folder-Input/Input";
import Favorites from "./Folder-Favorites/Favorites";
import Basket from "./Folder-Basket/Basket";
import Language from "../HeaderBar/Folder-Language/Language";

function Nav() {
  const location = useLocation(); // Используем хук useLocation для получения текущего маршрута

  return (
    <>
      <div className="container" id={Navstyles.container}>
        <nav className={Navstyles.nav}>
          <h1 className={Navstyles.nav_h1}>Exclusive</h1>
          <ul className={Navstyles.navBar}>
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
              <Link className={Navstyles.navBar_a} to="/SignUp">
                Sign Up
              </Link>
            </li>
          </ul>
          <div className={Navstyles.allInputBox}>
            <Input />
            {location.pathname !== "/SignUp" && (
              <div className={Navstyles.HeartShoppingIcon}>
                <Favorites />
                <Basket />
              </div>
            )}
          </div>
          <select className={Navstyles.selectHeader} id={Navstyles.selectHeader}>
            <option value="0">En</option>
          </select>
        </nav>
      </div>
      <hr className={Navstyles.HrFooter} />
    </>
  );
}

export default Nav;
