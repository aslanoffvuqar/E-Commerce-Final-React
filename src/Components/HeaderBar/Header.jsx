import React from "react";
import "./header.css";
import Headerstyles from "./header.module.css";
import "../HeaderBar/headerMedia.css";
import Language from "./Folder-Language/Language";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container">
        <div className={Headerstyles.headerClass}>
          <div className={Headerstyles.header_P_A}>
            <p className={Headerstyles.headerClass_P}>
              {t(
                "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
              )}
            </p>
            <a className={Headerstyles.headerSelect_A} href="#">
            {t(
                "ShopNow"
              )}
            </a>
          </div>
          <Language />
        </div>
      </div>
    </header>
  );
}

export default Header;
