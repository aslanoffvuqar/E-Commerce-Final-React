import React from "react";
import Camerastyles from "./camera.module.css";
import { IoCameraOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Camera() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={Camerastyles.CameraBox}>
        <IoCameraOutline className={Camerastyles.Camera} />
        <p className={Camerastyles.CameraCatogori}>{t("Camera")}</p>
      </div>
    </div>
  );
}

export default Camera;
