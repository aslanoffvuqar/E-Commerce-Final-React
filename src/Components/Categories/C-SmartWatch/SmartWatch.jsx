import React from "react";
import SmartWatchstyles from "./smartWatch.module.css";
import { TbDeviceWatchStats } from "react-icons/tb";

function SmartWatch() {
  return (
    <div>
      <div className={SmartWatchstyles.WatchBox}>
        <TbDeviceWatchStats className={SmartWatchstyles.SmartWatch} />
        <p className={SmartWatchstyles.SmartWatchCatogori}>SmartWatch</p>
      </div>
    </div>
  );
}

export default SmartWatch;
