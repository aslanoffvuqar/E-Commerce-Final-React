import React from "react";
import Customerstyles from "./customer.module.css";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import Activestyles from "../ActiveBar/active.module.css"
function Customer() {
  const { t } = useTranslation();

  return (
    <div>
      <div id={Activestyles.services} className={`group ${Customerstyles.SallersBox}`}>
        <div className="w-20 h-20 bg-zinc-400 rounded-full flex justify-center items-center mb-7 transition-colors duration-700">
          <span className="flex justify-center items-center w-14 h-14 bg-black rounded-full group-hover:bg-white transition-colors duration-700">
            <RiShoppingBag4Line id={Activestyles.iconRotate} className="text-white w-10 h-10 group-hover:text-black transition-colors duration-700" />
          </span>
        </div>
        <h1
          className={`group-hover:text-white transition-colors duration-700 ${Customerstyles.DELIVERY}`}
        >
          45.5k
        </h1>
        <p
          className={`${Customerstyles.DELIVERYText} group-hover:text-white transition-colors duration-700`}
        >
          {t("Customer active in our site")}
        </p>
      </div>
    </div>
  );
}

export default Customer;
