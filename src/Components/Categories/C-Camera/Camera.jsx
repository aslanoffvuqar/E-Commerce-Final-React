import React from "react";
import Camerastyles from "./camera.module.css";
import { IoCameraOutline } from "react-icons/io5";

function Camera() {
  return (
    <div>
      <div className={Camerastyles.CameraBox}>
        <IoCameraOutline className={Camerastyles.Camera} />
        <p className={Camerastyles.CameraCatogori}>Camera</p>
      </div>
    </div>
  );
}

export default Camera;
