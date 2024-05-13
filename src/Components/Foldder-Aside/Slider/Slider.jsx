import React from "react";
import styles from "../Slider/slider.module.css";
import IphoneLogo from "../Slider/imgSlider/Apple_logo.png";
import Iphone14Pro from "../Slider/imgSlider/Iphone14Pro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Slider() {
  return (
    <div>
      <div className={styles.sliderBackground}>
        <div className={styles.allbox}>
          <div>
            <div className="flex items-center gap-7 pt-20	">
              <img src={IphoneLogo} alt="" />
              <p className={styles.IphoneSeria}>iPhone 14 Series</p>
            </div>
            <p className={styles.iphoneUP}>
              Up to 10% <br /> off Voucher
            </p>
            <a className={styles.Now} href="#">
              Shop Now
              <span>
                <FontAwesomeIcon icon={faArrowRight} className={styles.NowIconRight} />
              </span>
            </a>
          </div>
          <div className="pt-10">
            <img src={Iphone14Pro} alt="" />
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center	">
            <span className={styles.round}></span>
            <span className={styles.round}></span>
            <span className={styles.round}></span>
            <span className={styles.round}></span>
            <span className={styles.round}></span>
        </div>
      </div>
    </div>
  );
}

export default Slider;
