import React from "react";
import Phonesstyles from "./phones.module.css";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

function Phones() {
  return (
    <div>
      <div className={Phonesstyles.PhonesBox}>
        <HiMiniDevicePhoneMobile className={Phonesstyles.Phones} />
        <p className={Phonesstyles.PhonesCatogori}>Phones</p>
      </div>
    </div>
  );
}

export default Phones;
