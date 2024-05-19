import React from "react";
import Contactstyles from "./contact.module.css";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
function Contact() {
  return (
    <div>
      <div className="container">
        <div
          className="flex gap-1 mt-20	mb-20"
          id={Contactstyles.transitionAbout}
        >
          <Link to="/Home" className="text-gray-600	text-sm	font-normal	leading-5	">
            Home /
          </Link>
          <p className="text-sm	font-medium		leading-5	">Contact</p>
        </div>
        <section>
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
            <p className={Contactstyles}>
              Emails: support@exclusive.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
