import React from "react";
import Womensstyles from "./womens.module.css";
import Womens from "../NewArrivalBarImge/women.png";

function WomensBar() {
  return (
    <div>
      <img className={Womensstyles.womensImge} src={Womens} alt="" />

      <div className={Womensstyles.WomensAbout}>
        <h1 className={Womensstyles.WomensText}>Women’s Collections</h1>
        <p className={Womensstyles.WomensVersion}>
          Featured woman collections that <br /> give you another vibe.
        </p>
        <a className={Womensstyles.WomensShop} href="#">
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default WomensBar;
