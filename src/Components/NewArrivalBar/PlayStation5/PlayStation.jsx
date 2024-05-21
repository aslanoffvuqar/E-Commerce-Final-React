import React from "react";
import playStation5 from "../NewArrivalBarImge/ps5-slim.png";
import playStationstyles from "./playStation.module.css";
function PlayStation() {
  return (
    <div>
      <div className={playStationstyles.playStationBox}>
        <img className={playStationstyles.playStation}src={playStation5}alt=""/>
        <div className={playStationstyles.PlayStationAbout}>
          <h1 className={playStationstyles.PlayStationText}>PlayStation 5</h1>
          <p className={playStationstyles.PlayStationVersion}>
            Black and White version of the PS5 <br /> coming out on sale.
          </p>
          <a className={playStationstyles.PlayStationShop} href="">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default PlayStation;
