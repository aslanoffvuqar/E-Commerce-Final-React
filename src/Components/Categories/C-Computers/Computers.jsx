import React from "react";
import Computersstyles from "./computers.module.css";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

function Computers() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={Computersstyles.ComputerBox}>
        <HiOutlineComputerDesktop className={Computersstyles.Computers} />
        <p className={Computersstyles.ComputersCatogori}>{t("Computers")}</p>
      </div>
    </div>
  );
}

export default Computers;
