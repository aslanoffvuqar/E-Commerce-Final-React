import React from "react";
import Speakersstyles from "./speakers.module.css";
import SpeakersImg from "../NewArrivalBarImge/Frame 707.png";

function Speakers() {
  return (
    <div>
      <div className={Speakersstyles.imgBox}>
        <img className={Speakersstyles.SpeakersImg} src={SpeakersImg} alt="" />
      </div>
      <div className={Speakersstyles.SpeakersAbout}>
        <h1 className={Speakersstyles.SpeakersText}>Speakers</h1>
        <p className={Speakersstyles.SpeakersVersion}>
          Amazon wireless speakers
        </p>
        <a className={Speakersstyles.SpeakersShop} href="#">
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default Speakers;
