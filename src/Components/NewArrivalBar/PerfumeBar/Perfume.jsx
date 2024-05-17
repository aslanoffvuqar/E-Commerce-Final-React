import React from "react";
import Perfumestyles from "./perfume.module.css";
import PerfumeImg from "../NewArrivalBarImge/Gucci.png"
function Perfume() {
  return (
    <div>
      <div className={Perfumestyles.imgBox}>
        <img className={Perfumestyles.PerfumeImg} src={PerfumeImg} alt="" />
      </div>
      <div className={Perfumestyles.PerfumeAbout}>
        <h1 className={Perfumestyles.PerfumeText}>Perfume</h1>
        <p className={Perfumestyles.PerfumeVersion}>
        GUCCI INTENSE OUD EDP
        </p>
        <a className={Perfumestyles.PerfumeShop} href="#">
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default Perfume;
