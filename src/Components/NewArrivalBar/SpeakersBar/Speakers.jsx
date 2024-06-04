import React from "react";
import Speakersstyles from "./speakers.module.css";
import SpeakersImg from "../NewArrivalBarImge/Frame 707.png";
import { useTranslation } from "react-i18next";

function Speakers() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={Speakersstyles.imgBox}>
        <img className={Speakersstyles.SpeakersImg} src={SpeakersImg} alt="" />
      </div>
      <div className={Speakersstyles.SpeakersAbout}>
        <h1 className={Speakersstyles.SpeakersText}>{t("Speakers")}</h1>
        <p className={Speakersstyles.SpeakersVersion}>
          
          {t("Amazon wireless speakers")}
        </p>
        <a className={Speakersstyles.SpeakersShop} href="#">
          
          {t("Shop Now")}
        </a>
      </div>
    </div>
  );
}

export default Speakers;
