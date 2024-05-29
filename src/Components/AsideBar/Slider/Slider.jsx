import React, { useState, useEffect } from "react";
import Sliderstyles from "../Slider/slider.module.css";
import IphoneLogo from "../Slider/imgSlider/Apple_logo.png";
import Iphone14Pro from "../Slider/imgSlider/Iphone14Pro.png";
import Iphone2 from "../Slider/imgSlider/iphoneseri2.png";
import Iphone3 from "../Slider/imgSlider/Iphoneseir3.png";
import Iphone4 from "../Slider/imgSlider/Iphoneseri4.png";
import Iphone5 from "../Slider/imgSlider/Iphoneseri5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const sliderData = [
  {
    logo: IphoneLogo,
    series: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
    image: Iphone14Pro,
  },
  {
    logo: IphoneLogo,
    series: "iPhone 15 Series",
    description: "Up to 5% off Voucher",
    image: Iphone2,
  },
  {
    logo: IphoneLogo,
    series: "iPhone New Series",
    description: "Up to 0% off Voucher",
    image: Iphone3,
  },
  {
    logo: IphoneLogo,
    series: "iPhone 11 Series",
    description: "Up to 40% off Voucher",
    image: Iphone4,
  },
  {
    logo: IphoneLogo,
    series: "iPhone 10 Series",
    description: "Up to 45% off Voucher",
    image: Iphone5,
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Sliderstyles.sliderContainer}>
      <div
        className={Sliderstyles.slider}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div key={index} className={Sliderstyles.slide}>
            <div className={Sliderstyles.textContainer}>
              <div className={Sliderstyles.header}>
                <img src={slide.logo} alt="Logo" />
                <p className={Sliderstyles.series}>{slide.series}</p>
              </div>
              <p className={Sliderstyles.description}>{slide.description}</p>
              <a className={Sliderstyles.shopNow} href="#">
                Shop Now
                <span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={Sliderstyles.shopNowIcon}
                  />
                </span>
              </a>
            </div>
            <div className={Sliderstyles.imageContainer}>
              <img src={slide.image} alt="Slide" />
            </div>
          </div>
        ))}
      </div>
      <div className={Sliderstyles.dotsContainer}>
        {sliderData.map((_, index) => (
          <span
            key={index}
            className={`${Sliderstyles.dot} ${
              index === currentIndex ? Sliderstyles.active : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
