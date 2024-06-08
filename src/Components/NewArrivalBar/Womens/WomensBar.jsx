import React from "react";
import Womensstyles from "./womens.module.css";
import Womens from "../NewArrivalBarImge/women.png";
import { useTranslation } from "react-i18next";

function WomensBar() {
  const { t } = useTranslation();

  return (
    <div>
      <img className={Womensstyles.womensImge} src={Womens} alt="" />

      <div className={Womensstyles.WomensAbout}>
        <h1 className={Womensstyles.WomensText}>{t("Women’s Collections")}</h1>
        <p className={Womensstyles.WomensVersion}>
          {t("Featured woman collections that")} <br /> {t("give you another vibe.")}
        </p>
        <a className={Womensstyles.WomensShop} href="#">
       
          {t("Shop Now")}
        </a>
      </div>
    </div>
  );
}

export default WomensBar;
