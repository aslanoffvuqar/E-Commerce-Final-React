import React from "react";
import SectionFourstyles from "./sectionFour.module.css";
import "../Section_four_main/sectionFour.css";
import JBLBass from "./SectionFourMainImge/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import BackgroundJBL from "./SectionFourMainImge/Ellipse 23.png";
function SectionFour() {
  return (
    <div>
      <div className="container">
        <div
          className="w-full bg-black mb-16 flex rounded	"
          style={{ height: "500px" }}
        >
          <div className={SectionFourstyles.allbox}>
            <div className={SectionFourstyles.leftSideBox}>
              <p className={SectionFourstyles.Categories}>Categories</p>
              <h1 className={SectionFourstyles.MusicH1}>
                Enhance Your <br className={SectionFourstyles.Br} /> Music
                Experience
              </h1>
              {/*  ***********Mobile************************* */}
              <div className="flex justify-center	">
                <img
                  className={SectionFourstyles.JBLBassMobil}
                  src={JBLBass}
                  alt=""
                />
              </div>
              {/*  ***********Mobile************************* */}

              <div className="flex gap-6 mb-8" id={SectionFourstyles.gapDiv}>
                <div className={SectionFourstyles.timeRound}>
                  <h1 className={SectionFourstyles.countdownTime}>23</h1>
                  <p className={SectionFourstyles.countdownTimeP}>Hours</p>
                </div>
                <div className={SectionFourstyles.timeRound}>
                  <h1 className={SectionFourstyles.countdownTime}>05</h1>
                  <p className={SectionFourstyles.countdownTimeP}>Days</p>
                </div>
                <div className={SectionFourstyles.timeRound}>
                  <h1 className={SectionFourstyles.countdownTime}>59</h1>
                  <p className={SectionFourstyles.countdownTimeP}>Minutes</p>
                </div>
                <div className={SectionFourstyles.timeRound}>
                  <h1 className={SectionFourstyles.countdownTime}>35</h1>
                  <p className={SectionFourstyles.countdownTimeP}>Seconds</p>
                </div>
              </div>
              <button className={SectionFourstyles.CategoriesButton}>
                Buy Now!
              </button>
            </div>
            <div className={SectionFourstyles.rightSideBox}>
              <img className={SectionFourstyles.JBLBass} src={JBLBass} alt="" />
            </div>
          </div>
          <img
            className={SectionFourstyles.BackgroundJBL}
            src={BackgroundJBL}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
