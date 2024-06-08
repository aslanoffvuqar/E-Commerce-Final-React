import React from "react";
import playStation5 from "../NewArrivalBarImge/ps5-slim.png";
import playStationstyles from "./playStation.module.css";
import { useTranslation } from "react-i18next";

function PlayStation() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={playStationstyles.playStationBox}>
        <img className={playStationstyles.playStation}src={playStation5}alt=""/>
        <div className={playStationstyles.PlayStationAbout}>
          <h1 className={playStationstyles.PlayStationText}>PlayStation 5</h1>
          <p className={playStationstyles.PlayStationVersion}>
            {t("Black and White version of the PS5")}<br /> {t("coming out on sale.")}
          </p>
          <a className={playStationstyles.PlayStationShop} href="">
            {t("Shop Now")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PlayStation;
