import React from "react";
import Gamingstyles from "./gaming.module.css";
import { TbDeviceGamepad } from "react-icons/tb";

function Gaming() {
  return (
    <div>
      <div className={Gamingstyles.DeviceGamepadBox}>
        <TbDeviceGamepad className={Gamingstyles.Gaming} />
        <p className={Gamingstyles.GamingCatogori}>Gaming</p>
      </div>
    </div>
  );
}

export default Gaming;
