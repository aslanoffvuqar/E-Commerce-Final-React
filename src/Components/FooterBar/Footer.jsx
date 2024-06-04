import React from "react";
import Footerstyles from "./footer.module.css";
import "../FooterBar/footer.css";
import "../FooterBar/footerMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Qrimg from "../FooterBar/Footer-Imge/Qrcode 1.png";
import googleimg from "../FooterBar/Footer-Imge/GooglePlay.png";
import AppStore from "../FooterBar/Footer-Imge/AppStore.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        <div
          className={Footerstyles.footerBackground}
          id={Footerstyles.footerBackground}
        >
          <div className="container">
            <div className={Footerstyles.allBoxFooter}>
              <div className={Footerstyles.BoxFooter}>
                <h2 className={Footerstyles.Exclusive} responsive="fontSize">
                  {t("Exclusive")}
                </h2>
                <a
                  className={Footerstyles.a}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  {t("Subscribe")}
                </a>
                <a
                  className={Footerstyles.a}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  {t("Get 10% off your first order")}
                </a>
                <div className={Footerstyles.inputDivFooter}>
                  <input
                    type="text"
                    placeholder={t("Enter your email")}
                    className={Footerstyles.inputFooter}
                  />
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className={Footerstyles.faPaperPlane}
                  />
                </div>
              </div>
              <div className={Footerstyles.BoxFooter}>
                <h3 className={Footerstyles.h3} responsive="fontSize">
                  {t("Support")}
                </h3>
                <a
                  className={Footerstyles.a}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  {t("111 Bijoy sarani, Dhaka,")}
                  <br /> {t("DH 1515, Bangladesh.")}
                </a>
                <a
                  className={Footerstyles.a}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  exclusive@gmail.com
                </a>
                <a
                  className={Footerstyles.a}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  +88015-88888-9999
                </a>
              </div>
              <div className={Footerstyles.BoxFooter}>
                <h3 className={Footerstyles.h3_third} responsive="fontSize">
                  {t("Account")}
                </h3>
                <a
                  className={Footerstyles.a_third}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  {t("My Account")}
                </a>
                <div>
                  <a
                    className={Footerstyles.a_third}
                    fontFooterRespons="fontFooterRespons"
                    href="#"
                  >
                    {t("Login")}
                  </a>
                  <span className="text-white	"> / </span>
                  <a
                    className={Footerstyles.a_third}
                    fontFooterRespons="fontFooterRespons"
                    href="#"
                  >
                    {t("Register")}
                  </a>
                </div>
                <a
                  className={Footerstyles.a_third}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  {t("Cart")}
                </a>
                <a
                  className={Footerstyles.a_third}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  {t("Wishlist")}
                </a>
                <a
                  className={Footerstyles.a_third}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  {t("Shop")}
                </a>
              </div>
              <div className={Footerstyles.BoxFooter} Quick_div="Quick_div">
                <h3 className={Footerstyles.h3} responsive="fontSize">
                  {t("Quick Link")}
                </h3>
                <p className={Footerstyles.a}>
                  <a
                    className={Footerstyles.a}
                    fontFooterRespons="fontFooterRespons"
                    href="#"
                  >
                    {t("Privacy Policy")}
                  </a>
                </p>
                <p className={Footerstyles.a}>
                  <a
                    className={Footerstyles.a}
                    fontFooterRespons="fontFooterRespons"
                    href="#"
                  >
                    {t("Terms Of Use")}
                  </a>
                </p>
                <p className={Footerstyles.a}>
                  <a
                    className={Footerstyles.a}
                    fontFooterRespons="fontFooterRespons"
                    href="#"
                  >
                    {t("FAQ")}
                  </a>
                </p>
                <p className={Footerstyles.a}>
                  <a
                    className={Footerstyles.a}
                    fontFooterRespons="fontFooterRespons"
                    href="#"
                  >
                    {t("Contact")}
                  </a>
                </p>
              </div>
              <div
                className={Footerstyles.BoxFooter}
                Download_App="Download_App"
              >
                <h3 className={Footerstyles.h3} responsive="fontSize">
                  {t("Download App")}
                </h3>
                <a
                  className={Footerstyles.Doownload_a}
                  fontFooterRespons="fontFooterRespons"
                  href="#"
                >
                  {t("Save $3 with App New User Only")}
                </a>
                <div className={Footerstyles.allImgFooter}>
                  <img
                    src={Qrimg}
                    alt="burda sekil var"
                    className={Footerstyles.QrImg}
                    id={Footerstyles.QrImg}
                  />
                  <div className={Footerstyles.googleAppImg}>
                    <img
                      src={googleimg}
                      alt=""
                      className={Footerstyles.GooglApp}
                    />
                    <img
                      src={AppStore}
                      alt=""
                      className={Footerstyles.GooglApp}
                    />
                  </div>
                </div>
                <div className={Footerstyles.allIconFooter}>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className={Footerstyles.iconsFa}
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={Footerstyles.iconsTw}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={Footerstyles.iconsIns}
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={Footerstyles.iconsLi}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={Footerstyles.hrAllBox}>
            <hr className={Footerstyles.HrFooter} />
            <div className={Footerstyles.logoFooter}>
              <span className={Footerstyles.logospan}>C</span>
              <p className={Footerstyles.logo_P}>
                {t("Copyright Rimel 2022. All right reserved")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
