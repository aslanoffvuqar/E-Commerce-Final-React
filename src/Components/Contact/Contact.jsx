import React from "react";
import Contactstyles from "./contact.module.css";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { SlBasket } from "react-icons/sl";

function Contact() {
  return (
    <div>
      <div className="container">
         {/* ****************** Mobil*************************** */}
         <div className={Contactstyles.mediaIconAndImput}>
          <FontAwesomeIcon icon={faBars} className={Contactstyles.iconBars} />
          <div className={Contactstyles.inputDivNav} id={Contactstyles.inputDivNav}>
            <input
              className={Contactstyles.inputDivNav_input}
              id={Contactstyles.inputDivNav_input}
              type="text"
              placeholder="What are you looking for?"
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
        {/* ****************** Mobil*************************** */}
        <div
          className="flex gap-1 mt-20	mb-20"
          id={Contactstyles.transitionAbout}
        >
          <Link to="/Home" className="text-gray-600	text-sm	font-normal	leading-5	">
            Home /
          </Link>
          <p className="text-sm	font-medium		leading-5	">Contact</p>
        </div>
        <section className="flex gap-8	" id={Contactstyles.mobilSection}>
          <div className={Contactstyles.AllBoxOne}>
            <div className="flex items-center gap-4	 ">
              <span className="flex w-10 h-10 bg-red-500 rounded-full	justify-center items-center		">
                <BsTelephone className="text-white	w-5	h-5	" />
              </span>
              <p className={Contactstyles.callNum}>Call To Us</p>
            </div>
            <p className={Contactstyles.callText}>
              We are available 24/7, 7 days a week.
            </p>
            <p className={Contactstyles.callNumText}>Phone: +8801611112222</p>
            <div className={Contactstyles.line}></div>
            <div className="flex items-center gap-4	 ">
              <span className="flex w-10 h-10 bg-red-500 rounded-full	justify-center items-center		">
                <BsTelephone className="text-white	w-5	h-5	" />
              </span>
              <p className={Contactstyles.callNum}>Call To Us</p>
            </div>
            <p className={Contactstyles.callText}>
              Fill out our form and we will contact <br /> you within 24 hours.
            </p>
            <p className={Contactstyles.Emails}>
              Emails: customer@exclusive.com
            </p>
            <p className={Contactstyles}>Emails: support@exclusive.com</p>
          </div>
          <div className={Contactstyles.AllBoxWwo}>
            <form action="#">
              <div className={Contactstyles.allInput}>
                <div className={Contactstyles.YourName}>
                  <input
                    className={Contactstyles.YourNameInput}
                    type="text"
                    placeholder="Your Name *"
                  />
                </div>
                <div className={Contactstyles.YourName}>
                  <input
                    className={Contactstyles.YourNameInput}
                    type="email"
                    placeholder="Your Email *"
                  />
                </div>
                <div className={Contactstyles.YourName}>
                  <input
                    className={Contactstyles.YourNameInput}
                    type="number"
                    placeholder="Your Phone *"
                  />
                </div>
              </div>
              <div className={Contactstyles.YourMassage}>
                <input
                  className={Contactstyles.YourMassageInput}
                  type="text"
                  placeholder="Your Massage"
                />
              </div>
              <div className="flex justify-end" id={Contactstyles.mobilSend}>
                <button className={Contactstyles.SendButton}>
                  Send Massage
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
