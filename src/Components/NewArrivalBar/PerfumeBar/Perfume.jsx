import React from "react";
import Perfumestyles from "./perfume.module.css";
import PerfumeImg from "../NewArrivalBarImge/Gucci.png"
import { useTranslation } from "react-i18next";

function Perfume() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={Perfumestyles.imgBox}>
        <img className={Perfumestyles.PerfumeImg} src={PerfumeImg} alt="" />
      </div>
      <div className={Perfumestyles.PerfumeAbout}>
        <h1 className={Perfumestyles.PerfumeText}>{t("Perfume")}</h1>
        <p className={Perfumestyles.PerfumeVersion}>
        
        {t("GUCCI INTENSE OUD EDP")}
        </p>
        <a className={Perfumestyles.PerfumeShop} href="#">
          
          {t("Shop Now")}
        </a>
      </div>
    </div>
  );
}

export default Perfume;
