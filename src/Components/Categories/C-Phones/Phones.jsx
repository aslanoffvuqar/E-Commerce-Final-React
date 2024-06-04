import React from "react";
import Phonesstyles from "./phones.module.css";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

function Phones() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={Phonesstyles.PhonesBox}>
        <HiMiniDevicePhoneMobile className={Phonesstyles.Phones} />
        <p className={Phonesstyles.PhonesCatogori}>{t("Phones")}</p>
      </div>
    </div>
  );
}

export default Phones;
