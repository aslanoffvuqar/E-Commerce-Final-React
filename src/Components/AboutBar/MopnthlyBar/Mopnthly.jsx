import React from "react";
import Mopnthlystyles from "./mopnthly.module.css";
import { TbCircleLetterS } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import Activestyles from "../ActiveBar/active.module.css"
function Mopnthly() {
  const { t } = useTranslation();

  return (
    <div>
      <div id={Activestyles.services} className={`group ${Mopnthlystyles.SallersBox}`}>
        <div className="w-20 h-20 bg-zinc-400 rounded-full flex justify-center items-center mb-7 transition-colors duration-700">
          <span className="flex justify-center items-center w-14 h-14 bg-black rounded-full group-hover:bg-white transition-colors duration-700">
            <TbCircleLetterS id={Activestyles.iconRotate} className="text-white w-10 h-10 group-hover:text-black transition-colors duration-700" />
          </span>
        </div>
        <h1 className={`group-hover:text-white transition-colors duration-700 ${Mopnthlystyles.DELIVERY}`}>33k </h1>
        <p className={`${Mopnthlystyles.DELIVERYText} group-hover:text-white transition-colors duration-700`}>{t("Mopnthly Produduct Sale")}</p>
      </div>
    </div>
  );
}

export default Mopnthly;
