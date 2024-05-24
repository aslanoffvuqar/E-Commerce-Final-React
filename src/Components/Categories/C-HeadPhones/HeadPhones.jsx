import React from "react";
import HeadPhonesstyles from "./headPhones.module.css";
import { FiHeadphones } from "react-icons/fi";

function HeadPhones() {
  return (
    <div>
      <div className={HeadPhonesstyles.HeadphonesBox}>
        <FiHeadphones className={HeadPhonesstyles.HeadPhones} />
        <p className={HeadPhonesstyles.HeadPhonesCatogori}>HeadPhones</p>
      </div>
    </div>
  );
}

export default HeadPhones;
