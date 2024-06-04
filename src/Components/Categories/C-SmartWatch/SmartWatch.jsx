import React from "react";
import SmartWatchstyles from "./smartWatch.module.css";
import { TbDeviceWatchStats } from "react-icons/tb";
import { useTranslation } from "react-i18next";

function SmartWatch() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={SmartWatchstyles.WatchBox}>
        <TbDeviceWatchStats className={SmartWatchstyles.SmartWatch} />
        <p className={SmartWatchstyles.SmartWatchCatogori}>{t("SmartWatch")}</p>
      </div>
    </div>
  );
}

export default SmartWatch;
