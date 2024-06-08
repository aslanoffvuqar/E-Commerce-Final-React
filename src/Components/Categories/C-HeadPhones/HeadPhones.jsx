import React from "react";
import HeadPhonesstyles from "./headPhones.module.css";
import { FiHeadphones } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function HeadPhones() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={HeadPhonesstyles.HeadphonesBox}>
        <FiHeadphones className={HeadPhonesstyles.HeadPhones} />
        <p className={HeadPhonesstyles.HeadPhonesCatogori}>{t("HeadPhones")}</p>
      </div>
    </div>
  );
}

export default HeadPhones;
