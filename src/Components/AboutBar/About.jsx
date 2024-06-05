import React, { useState } from "react";
import Aboutstyles from "./about.module.css";
import Aboutimg from "./AboutImg/portrait-two-african-.png";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Active from "./ActiveBar/Active";
import Mopnthly from "./MopnthlyBar/Mopnthly";
import Customer from "./CustomerBar/Customer";
import Sale from "./SaleBar/Sale";
import TomCruise from "./AboutImg/Tom Cruise.png";
import EmmaWatson from "./AboutImg/Emma Watson.png";
import WillSmith from "./AboutImg/Will Smith.png";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  faChevronRight,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlBasket } from "react-icons/sl";

function About() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        {/* ****************** Mobil*************************** */}
        <div className={Aboutstyles.mediaIconAndImput}>
          <FontAwesomeIcon
            icon={faBars}
            className={Aboutstyles.iconBars}
            onClick={toggleSidebar}
          />
          <div className={Aboutstyles.inputDivNav} id={Aboutstyles.inputDivNav}>
            <input
              className={Aboutstyles.inputDivNav_input}
              id={Aboutstyles.inputDivNav_input}
              type="text"
              placeholder={t("What are you looking for?")}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className={Aboutstyles.searchIcon}
              id={Aboutstyles.searchIcon}
            />
          </div>
          <div
            className={Aboutstyles.HeartShoppingIcon}
            id={Aboutstyles.HeartShoppingIcon}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={Aboutstyles.HeartIcon}
              id={Aboutstyles.HeartIcon}
            />
            <SlBasket
              className={Aboutstyles.ShoppinghIcon}
              id={Aboutstyles.ShoppinghIcon}
            />
          </div>
        </div>


        <aside
          className={`${Aboutstyles.mobileAsideBox} ${
            isSidebarOpen ? Aboutstyles.open : ""
          }`}
        >
          <div className={Aboutstyles.asideDiv}>
            <div className="flex w-full justify-between ">
              <li className={Aboutstyles.navBar_li}>
                <Link className={Aboutstyles.navBar_a} to="/Home">
                  {t("Home")}
                </Link>
              </li>
              <li className={Aboutstyles.navBar_li}>
                <Link className={Aboutstyles.navBar_a} to="/Contact">
                  {t("Contact")}
                </Link>
              </li>
              <li className={Aboutstyles.navBar_li}>
                <Link className={Aboutstyles.navBar_a} to="/About">
                  {t("About")}
                </Link>
              </li>
              <li className={Aboutstyles.navBar_li}>
                <Link className={Aboutstyles.navBar_a} to="/Login">
                  {t("Sign Up")}
                </Link>
              </li>
            </div>
            <div className={Aboutstyles.asideDiv}>
              <a className={Aboutstyles.a} href="#">
                {t("Woman’s Fashion")}
              </a>
              <a className={Aboutstyles.a} href="#">
                {t("Men’s Fashion")}
              </a>
              <a className={Aboutstyles.a} href="#">
                {t("Electronics")}
                
              </a>
              <a className={Aboutstyles.a} href="#">
                {t("Home & Lifestyle")}
                
              </a>
              <a className={Aboutstyles.a} href="#">
                {t("Medicine")}
                
              </a>
              <a className={Aboutstyles.a} href="#">
                {t("Sports & Outdoor")}
                
              </a>
              <a className={Aboutstyles.a} href="#">
                {t("Baby’s & Toys")}
                
              </a>
              <a className={Aboutstyles.a} href="#">
                {t("Groceries & Pets")}
                
              </a>
              <a className={Aboutstyles.a} href="#">
                {t("Health & Beauty")}
                
              </a>
            </div>
          </div>
        </aside>

        {/* ****************** Mobil*************************** */}
        <div className="flex gap-1 mt-20	mb-20" id={Aboutstyles.transitionAbout}>
          <Link to="/Home" className="text-gray-600	text-sm	font-normal	leading-5	">
            {t("Home")} /
          </Link>
          <p className="text-sm	font-medium		leading-5	">{t("About")}</p>
        </div>
      </div>
      <div className="flex" id={Aboutstyles.displayColum}>
        <div className="container">
          <div className={Aboutstyles.allTextBox}>
            <div>
              <h1 className={Aboutstyles.Story}>{t("Our Story")}</h1>
              <p className={Aboutstyles.StoryText}>
                {t(
                  "Launced in 2015, Exclusive is South Asia’s premier online shopping"
                )}
                <br />
                {t(
                  "makterplace with an active presense in Bangladesh. Supported"
                )}
                <br />{" "}
                {t(
                  "by wide range of tailored marketing, data and service solutions,"
                )}{" "}
                <br />
                {t("Exclusive has 10,500 sallers and 300 brands and serves 3")}
                <br />
                {t("millioons customers across the region.")}
              </p>
              <p className={Aboutstyles.StoryTexttow}>
                {t(
                  "Exclusive has more than 1 Million products to offer, growing at a"
                )}
                <br />
                {t(
                  "very fast. Exclusive offers a diverse assotment in categories"
                )}
                <br />
                {t("ranging from consumer.")}
              </p>
            </div>
          </div>
        </div>

        <img className={Aboutstyles.AboutimgSize} src={Aboutimg} alt="" />
      </div>
      <div className="container">
        <section
          className="flex justify-between mt-28	mb-32	 "
          id={Aboutstyles.sectionBar}
        >
          <Active />
          <Mopnthly />
          <Customer />
          <Sale />
        </section>

        <section
          className="flex justify-between	"
          id={Aboutstyles.SectionAllbox}
        >
          <div className="FounderData">
            <img src={TomCruise} alt="" />
            <h1 className={Aboutstyles.name}>{t("Tom Cruise")}</h1>
            <p className={Aboutstyles.position}>{t("Founder & Chairman")}</p>
            <div className="flex gap-4" id={Aboutstyles.SosialMedia}>
              <RxTwitterLogo className="w-5	 h-5	" />
              <FaInstagram className="w-5	 h-5	" />
              <RiLinkedinLine className="w-5	 h-5	" />
            </div>
          </div>
          <div className="FounderData">
            <img src={EmmaWatson} alt="" />
            <h1 className={Aboutstyles.name}>{t("Emma Watson")}</h1>
            <p className={Aboutstyles.position}>{t("Managing Director")}</p>
            <div className="flex gap-4" id={Aboutstyles.SosialMedia}>
              <RxTwitterLogo className="w-5	 h-5	" />
              <FaInstagram className="w-5	 h-5	" />
              <RiLinkedinLine className="w-5	 h-5	" />
            </div>
          </div>
          <div className="FounderData">
            <img src={WillSmith} alt="" />
            <h1 className={Aboutstyles.name}>{t("Will Smith")}</h1>
            <p className={Aboutstyles.position}>{t("Product Designer")}</p>
            <div className="flex gap-4">
              <RxTwitterLogo className="w-5	 h-5	" />
              <FaInstagram className="w-5	 h-5	" />
              <RiLinkedinLine className="w-5	 h-5	" />
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section
          className="flex justify-evenly		mt-28	mb-32	 "
          id={Aboutstyles.sectionBar}
        >
          <div
            className="flex flex-col	justify-center items-center shadow p-12 cursor-pointer "
            id={Aboutstyles.services}
          >
            <div className="w-20	h-20	bg-zinc-400	rounded-full flex		justify-center items-center	mb-7		">
              <span className="flex justify-center items-center	 w-14	h-14 bg-black	rounded-full	">
                <TbTruckDelivery
                  className="text-white	w-10	h-10"
                  id={Aboutstyles.iconRotate}
                />
              </span>
            </div>
            <h1 className={Aboutstyles.DELIVERY}>
              {t("FREE AND FAST DELIVERY")}
            </h1>
            <p className={Aboutstyles.DELIVERYText}>
              {t("Free delivery for all orders over $140")}
            </p>
          </div>
          <div
            className="flex flex-col	justify-center items-center shadow p-12 cursor-pointer"
            id={Aboutstyles.services}
          >
            <div className="w-20	h-20	bg-zinc-400	rounded-full flex		justify-center items-center	mb-7		">
              <span className="flex justify-center items-center	 w-14	h-14 bg-black	rounded-full	">
                <RiCustomerService2Line
                  className="text-white	w-10	h-10		"
                  id={Aboutstyles.iconRotate}
                />
              </span>
            </div>
            <h1 className={Aboutstyles.DELIVERY}>
              {t("24/7 CUSTOMER SERVICE")}
            </h1>
            <p className={Aboutstyles.DELIVERYText}>
              {t("Friendly 24/7 customer support")}
            </p>
          </div>
          <div
            className="flex flex-col	justify-center items-center shadow p-12 cursor-pointer"
            id={Aboutstyles.services}
          >
            <div className="w-20	h-20	bg-zinc-400	rounded-full flex		justify-center items-center	mb-7		">
              <span className="flex justify-center items-center	 w-14	h-14 bg-black	rounded-full	">
                <HiOutlineBadgeCheck
                  className="text-white	w-10	h-10		"
                  id={Aboutstyles.iconRotate}
                />
              </span>
            </div>
            <h1 className={Aboutstyles.DELIVERY}>
              {t("MONEY BACK GUARANTEE")}
            </h1>
            <p className={Aboutstyles.DELIVERYText}>
              {t("We reurn money within 30 days")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
