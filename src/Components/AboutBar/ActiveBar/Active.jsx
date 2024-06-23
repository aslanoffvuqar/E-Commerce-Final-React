import React from "react";
import Activestyles from "./active.module.css";
import { CiShop } from "react-icons/ci";
import { useTranslation } from "react-i18next";

function Active() {
  const { t } = useTranslation();

  return (
    <div>
      <div id={Activestyles.services} className={`group ${Activestyles.SallersBox}`}>
        <div  className="w-20 h-20 bg-zinc-400 rounded-full flex justify-center items-center mb-7 transition-colors duration-700">
          <span  className="flex justify-center items-center w-14 h-14 bg-black rounded-full group-hover:bg-white transition-colors duration-700">
            <CiShop id={Activestyles.iconRotate} className="text-white w-10 h-10 group-hover:text-black transition-colors duration-700" />
          </span>
        </div>
        <h1 className={`group-hover:text-white transition-colors duration-700 ${Activestyles.DELIVERY}`}>10.5k </h1>
        <p className={`${Activestyles.DELIVERYText} group-hover:text-white transition-colors duration-700`}>{t("Sallers active our site")}</p>
      </div>
    </div>
  );
}

export default Active;
