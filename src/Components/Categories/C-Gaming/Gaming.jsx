import React from "react";
import Gamingstyles from "./gaming.module.css";
import { TbDeviceGamepad } from "react-icons/tb";
import { useTranslation } from "react-i18next";

function Gaming() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={Gamingstyles.DeviceGamepadBox}>
        <TbDeviceGamepad className={Gamingstyles.Gaming} />
        <p className={Gamingstyles.GamingCatogori}>{t("Gaming")}</p>
      </div>
    </div>
  );
}

export default Gaming;
