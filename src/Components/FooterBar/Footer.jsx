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
function Footer() {
  return (
    <>
      <footer>
        <div className={Footerstyles.footerBackground} id={Footerstyles.footerBackground}>
          <div className="container">
            <div className={Footerstyles.allBoxFooter}>
              <div className={Footerstyles.BoxFooter}>
                <h2 className={Footerstyles.Exclusive} responsive="fontSize">
                  Exclusive
                </h2>
                <h3>
                  <a className={Footerstyles.a} fontFooterRespons="fontFooterRespons" href="#">
                    Subscribe
                  </a>
                </h3>
                <p>
                  <a className={Footerstyles.a} fontFooterRespons="fontFooterRespons" href="#">
                    Get 10% off your first order
                  </a>
                </p>
                <div className={Footerstyles.inputDivFooter}>
                  <input
                    type="text"
                    placeholder="Enter your email"
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
                  Support
                </h3>
                <p>
                  <a className={Footerstyles.a}  fontFooterRespons="fontFooterRespons" href="#">
                    111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
                  </a>
                </p>
                <p>
                  <a className={Footerstyles.a}  fontFooterRespons="fontFooterRespons" href="#">
                    exclusive@gmail.com
                  </a>
                </p>
                <a className={Footerstyles.a} fontFooterRespons="fontFooterRespons" href="#">
                  +88015-88888-9999
                </a>
              </div>
              <div className={Footerstyles.BoxFooter}>
                <h3 className={Footerstyles.h3_third} responsive="fontSize">
                  Account
                </h3>
                <p>
                  <a className={Footerstyles.a_third}  fontFooterRespons="fontFooterRespons" href="#">
                    My Account
                  </a>
                </p>
                <p>
                  <a className={Footerstyles.a_third}  fontFooterRespons="fontFooterRespons" href="#">
                    Login / Register
                  </a>
                </p>
                <p>
                  <a className={Footerstyles.a_third}  fontFooterRespons="fontFooterRespons" href="#">
                    Cart
                  </a>
                </p>
                <p>
                  <a className={Footerstyles.a_third}  fontFooterRespons="fontFooterRespons" href="#">
                    Wishlist
                  </a>
                </p>
                <p>
                  <a className={Footerstyles.a_third}  fontFooterRespons="fontFooterRespons" href="#">
                    Shop
                  </a>
                </p>
              </div>
              <div className={Footerstyles.BoxFooter}Quick_div="Quick_div">
                <h3 className={Footerstyles.h3} responsive="fontSize">
                  Quick Link
                </h3>
                <p className={Footerstyles.a} >
                  <a className={Footerstyles.a}  fontFooterRespons="fontFooterRespons"  href="#">
                    Privacy Policy
                  </a>
                </p>
                <p className={Footerstyles.a} >
                  <a className={Footerstyles.a}  fontFooterRespons="fontFooterRespons"  href="#">
                    Terms Of Use
                  </a>
                </p>
                <p className={Footerstyles.a} >
                  <a className={Footerstyles.a}  fontFooterRespons="fontFooterRespons"  href="#">
                    FAQ
                  </a>
                </p>
                <p className={Footerstyles.a} >
                  <a className={Footerstyles.a}  fontFooterRespons="fontFooterRespons"  href="#">
                    Contact
                  </a>
                </p>
              </div>
              <div className={Footerstyles.BoxFooter} Download_App="Download_App">
                <h3 className={Footerstyles.h3} responsive="fontSize">
                  Download App
                </h3>
                <p>
                  <a className={Footerstyles.Doownload_a} fontFooterRespons="fontFooterRespons" href="#">
                    Save $3 with App New User Only
                  </a>
                </p>
                <div className={Footerstyles.allImgFooter}>
                  <img
                    src={Qrimg}
                    alt="burda sekil var"
                    className={Footerstyles.QrImg}
                    id={Footerstyles.QrImg}
                  />
                  <div className={Footerstyles.googleAppImg}>
                    <img src={googleimg} alt="" className={Footerstyles.GooglApp} />
                    <img src={AppStore} alt="" className={Footerstyles.GooglApp} />
                  </div>
                </div>
                <div className={Footerstyles.allIconFooter}>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className={Footerstyles.icons}
                  />
                  <FontAwesomeIcon icon={faTwitter} className={Footerstyles.icons} />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={Footerstyles.icons}
                  />
                  <FontAwesomeIcon icon={faLinkedin} className={Footerstyles.icons} />
                </div>
              </div>
            </div>
          </div>
          <div className={Footerstyles.hrAllBox}>
          <hr className={Footerstyles.HrFooter} />
          <div className={Footerstyles.logoFooter}>
            <span className={Footerstyles.logospan}>C</span>
            <p className={Footerstyles.logo_P}>
              Copyright Rimel 2022. All right reserved
            </p>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
