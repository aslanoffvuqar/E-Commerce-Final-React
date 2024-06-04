import React from "react";
import SectionFourstyles from "./sectionFour.module.css";
import "../Section_four_main/sectionFour.css";
import JBLBass from "./SectionFourMainImge/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import BackgroundJBL from "./SectionFourMainImge/Ellipse 23.png";
import useCountdown from "./useCountdown";
import { useTranslation } from "react-i18next";

function SectionFour() {
  const { t } = useTranslation();


  const initialTime =
    5 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 35 * 1000;
  const { days, hours, minutes, seconds } = useCountdown(initialTime);

  return (
    <div>
      <div className="container">
        <div
          className="w-full bg-black mb-16 flex rounded	"
          style={{ height: "500px" }}
        >
          <div className={SectionFourstyles.allbox}>
            <div className={SectionFourstyles.leftSideBox}>
              <p className={SectionFourstyles.Categories}>{t("Categories")}</p>
              <h1 className={SectionFourstyles.MusicH1}>
                {t("Enhance Your")} <br className={SectionFourstyles.Br} />
                {t("Music Experience")}
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
                  <h1 className={SectionFourstyles.countdownTime}>
                    {String(days).padStart(2, "0")}
                  </h1>
                  <p className={SectionFourstyles.countdownTimeP}>{t("Days")}</p>
                </div>
                <div className={SectionFourstyles.timeRound}>
                  <h1 className={SectionFourstyles.countdownTime}>
                    {String(hours).padStart(2, "0")}
                  </h1>
                  <p className={SectionFourstyles.countdownTimeP}>{t("Hours")}</p>
                </div>
                <div className={SectionFourstyles.timeRound}>
                  <h1 className={SectionFourstyles.countdownTime}>
                    {String(minutes).padStart(2, "0")}
                  </h1>
                  <p className={SectionFourstyles.countdownTimeP}>{t("Minutes")}</p>
                </div>
                <div className={SectionFourstyles.timeRound}>
                  <h1 className={SectionFourstyles.countdownTime}>
                    {String(seconds).padStart(2, "0")}
                  </h1>
                  <p className={SectionFourstyles.countdownTimeP}>{t("Seconds")}</p>
                </div>
              </div>
              <button className={SectionFourstyles.CategoriesButton}>
                {t("Buy Now!")}
              </button>
            </div>
            <div className={SectionFourstyles.rightSideBox}>
              <img className={SectionFourstyles.JBLBass} src={JBLBass} alt="" />
            </div>
          </div>
          <div>
            <img
              className={SectionFourstyles.BackgroundJBL}
              src={BackgroundJBL}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
