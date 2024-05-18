import React from "react";
import Salestyles from "./sale.module.css";
import { AiOutlineDollarCircle } from "react-icons/ai";

function Sale() {
  return (
    <div>
      <div className={`group ${Salestyles.SallersBox}`}>
        <div className="w-20 h-20 bg-zinc-400 rounded-full flex justify-center items-center mb-7 transition-colors duration-700">
          <span className="flex justify-center items-center w-14 h-14 bg-black rounded-full group-hover:bg-white transition-colors duration-700">
            <AiOutlineDollarCircle className="text-white w-10 h-10 group-hover:text-black transition-colors duration-700" />
          </span>
        </div>
        <h1 className={`group-hover:text-white transition-colors duration-700 ${Salestyles.DELIVERY}`}>
          25k
        </h1>
        <p className={`${Salestyles.DELIVERYText} group-hover:text-white transition-colors duration-700`}>Anual gross sale in our site</p>
      </div>
    </div>
  );
}

export default Sale;
