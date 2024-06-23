import React, { useRef ,useState } from "react";
import Contactstyles from "./contact.module.css";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { SlBasket } from "react-icons/sl";
import Navstyles from "../NavBar/nav.module.css"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { useTranslation } from "react-i18next";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const phoneValue = phoneRef.current.value;
    const messageValue = messageRef.current.value;

    const fullData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      message: messageValue,
    };

    console.log(fullData);

    await addDoc(collection(db, "Contact-Messages"), fullData);

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };
// Language

  const { t } = useTranslation();

// Language

// asideBar Mobil
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};
// asideBar Mobil

  return (
    <div>
      <div className="container">
          {/* ****************** Mobil*************************** */}
          <div className={Contactstyles.mediaIconAndImput}>
          <FontAwesomeIcon
            icon={faBars}
            className={Contactstyles.iconBars}
            onClick={toggleSidebar}
          />
          <div className={Contactstyles.inputDivNav} id={Contactstyles.inputDivNav}>
            <input
              className={Contactstyles.inputDivNav_input}
              id={Contactstyles.inputDivNav_input}
              type="text"
              placeholder={t("What are you looking for?")}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className={Contactstyles.searchIcon}
              id={Contactstyles.searchIcon}
            />
          </div>
          <div
            className={Contactstyles.HeartShoppingIcon}
            id={Contactstyles.HeartShoppingIcon}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={Contactstyles.HeartIcon}
              id={Contactstyles.HeartIcon}
            />
            <SlBasket
              className={Contactstyles.ShoppinghIcon}
              id={Contactstyles.ShoppinghIcon}
            />
          </div>
        </div>


        <aside
          className={`${Contactstyles.mobileAsideBox} ${
            isSidebarOpen ? Contactstyles.open : ""
          }`}
        >
          <div className={Contactstyles.asideDiv}>
            <div className="flex w-full justify-between ">
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/Home">
                  {t("Home")}
                </Link>
              </li>
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/Contact">
                  {t("Contact")}
                </Link>
              </li>
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/About">
                  {t("About")}
                </Link>
              </li>
              <li className={Navstyles.navBar_li}>
                <Link className={Navstyles.navBar_a} to="/SignUp">
                  {t("Sign Up")}
                </Link>
              </li>
            </div>
            <div className={Contactstyles.asideDiv}>
              <a className={Contactstyles.a} href="#">
                {t("Woman’s Fashion")}
              </a>
              <a className={Contactstyles.a} href="#">
                {t("Men’s Fashion")}
              </a>
              <a className={Contactstyles.a} href="#">
                {t("Electronics")}
                
              </a>
              <a className={Contactstyles.a} href="#">
                {t("Home & Lifestyle")}
                
              </a>
              <a className={Contactstyles.a} href="#">
                {t("Medicine")}
                
              </a>
              <a className={Contactstyles.a} href="#">
                {t("Sports & Outdoor")}
                
              </a>
              <a className={Contactstyles.a} href="#">
                {t("Baby’s & Toys")}
                
              </a>
              <a className={Contactstyles.a} href="#">
                {t("Groceries & Pets")}
                
              </a>
              <a className={Contactstyles.a} href="#">
                {t("Health & Beauty")}
                
              </a>
            </div>
          </div>
        </aside>
        {/* ****************** Mobil*************************** */}
        
        {/* ****************** Mobil*************************** */}
        <div
          className="flex gap-1 mt-20 mb-20"
          id={Contactstyles.transitionAbout}
        >
          <Link
            to="/Home"
            className="text-gray-600 text-sm font-normal leading-5"
          >
             {t("Home")} /
          </Link>
          <p className="text-sm font-medium leading-5">{t("Contact")}</p>
        </div>
        <section className="flex gap-8" id={Contactstyles.mobilSection}>
          <div className={Contactstyles.AllBoxOne}>
            <div className="flex items-center gap-4">
              <span className="flex w-10 h-10 bg-red-500 rounded-full justify-center items-center">
                <BsTelephone className="text-white w-5 h-5" />
              </span>
              <p className={Contactstyles.callNum}>{t("Call To Us")}</p>
            </div>
            <p className={Contactstyles.callText}>
              {t("We are available 24/7, 7 days a week.")}
            </p>
            <p className={Contactstyles.callNumText}>{t("Phone")} : +8801611112222</p>
            <div className={Contactstyles.line}></div>
            <div className="flex items-center gap-4">
              <span className="flex w-10 h-10 bg-red-500 rounded-full justify-center items-center">
                <BsTelephone className="text-white w-5 h-5" />
              </span>
              <p className={Contactstyles.callNum}>{t("Call To Us")}</p>
            </div>
            <p className={Contactstyles.callText}>
              {t("Fill out our form and we will contact you within 24 hours.")}
            </p>
            <p className={Contactstyles.Emails}>
            {t("Emails")} : customer@exclusive.com
            </p>
            <p className={Contactstyles}>{t("Emails")} : support@exclusive.com</p>
          </div>
          <div className={Contactstyles.AllBoxWwo}>
            <form onSubmit={handleSubmit}>
              <div className={Contactstyles.allInput}>
                <div className={Contactstyles.YourName}>
                  <input
                    className={Contactstyles.YourNameInput}
                    type="text"
                    name="name"
                    ref={nameRef}
                    placeholder={t("Your Name *")}
                  />
                </div>
                <div className={Contactstyles.YourName}>
                  <input
                    className={Contactstyles.YourNameInput}
                    type="email"
                    name="email"
                    ref={emailRef}
                    placeholder={t("Your Email *")}
                  />
                </div>
                <div className={Contactstyles.YourName}>
                  <input
                    className={Contactstyles.YourNameInput}
                    type="number"
                    ref={phoneRef}
                    placeholder={t("Your Phone *")}
                  />
                </div>
              </div>
              <div className={Contactstyles.YourMassage}>
                <input
                  className={Contactstyles.YourMassageInput}
                  type="text"
                  ref={messageRef}
                  placeholder={t("Your Message")}
                />
              </div>
              <div className="flex justify-end" id={Contactstyles.mobilSend}>
                <button type="submit" className={Contactstyles.SendButton}>
                {t("Send Message")}
                </button>
              </div>
            </form>
          </div>
        </section>
         

      </div>
    </div>
  );
}

export default Contact;
