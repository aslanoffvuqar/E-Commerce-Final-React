import React from "react";
import Sliderstyles from "../Slider/slider.module.css";
import IphoneLogo from "../Slider/imgSlider/Apple_logo.png";
import Iphone14Pro from "../Slider/imgSlider/Iphone14Pro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Slider() {
  return (
    <div>
      <div className={Sliderstyles.sliderBackground}>
        <div className={Sliderstyles.allbox}>
          <div>
            <div className="flex items-center gap-7 pt-20	">
              <img src={IphoneLogo} alt="" />
              <p className={Sliderstyles.IphoneSeria}>iPhone 14 Series</p>
            </div>
            <p className={Sliderstyles.iphoneUP}>
              Up to 10% <br /> off Voucher
            </p>
            <a className={Sliderstyles.Now} href="#">
              Shop Now
              <span>
                <FontAwesomeIcon icon={faArrowRight} className={Sliderstyles.NowIconRight} />
              </span>
            </a>
          </div>
          <div className="pt-10">
            <img src={Iphone14Pro} alt="" />
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center	">
            <span className={Sliderstyles.round}></span>
            <span className={Sliderstyles.round}></span>
            <span className={Sliderstyles.round}></span>
            <span className={Sliderstyles.round}></span>
            <span className={Sliderstyles.round}></span>
        </div>
      </div>
    </div>
  );
}

export default Slider;
