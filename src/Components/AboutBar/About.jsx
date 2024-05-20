import React from "react";
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

function About() {
  return (
    <div>
      <div className="container">
        <div className="flex gap-1 mt-20	mb-20" id={Aboutstyles.transitionAbout}>
          <Link to="/Home" className="text-gray-600	text-sm	font-normal	leading-5	">
            Home /
          </Link>
          <p className="text-sm	font-medium		leading-5	">About</p>
        </div>
      </div>
      <div className="	flex justify-between	" id={Aboutstyles.displayColum}>
        <div className="flex ">
          <div className="mt-28	ml-40	">
            <h1 className={Aboutstyles.Story}>Our Story</h1>
            <p className={Aboutstyles.StoryText}>
              Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
              <br />
              makterplace with an active presense in Bangladesh. Supported
              <br /> by wide range of tailored marketing, data and service
              solutions, <br />
              Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
              millioons customers across the region.
            </p>
            <p className={Aboutstyles.StoryTexttow}>
              Exclusive has more than 1 Million products to offer, growing at a{" "}
              <br />
              very fast. Exclusive offers a diverse assotment in categories
              <br />
              ranging from consumer.
            </p>
          </div>
        </div>
        <div className={Aboutstyles.AboutimgSize}>
          <img src={Aboutimg} alt="" />
        </div>
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
            <h1 className={Aboutstyles.name}>Tom Cruise</h1>
            <p className={Aboutstyles.position}>Founder & Chairman</p>
            <div className="flex gap-4" id={Aboutstyles.SosialMedia}>
              <RxTwitterLogo className="w-5	 h-5	" />
              <FaInstagram className="w-5	 h-5	" />
              <RiLinkedinLine className="w-5	 h-5	" />
            </div>
          </div>
          <div className="FounderData">
            <img src={EmmaWatson} alt="" />
            <h1 className={Aboutstyles.name}>Emma Watson</h1>
            <p className={Aboutstyles.position}>Managing Director</p>
            <div className="flex gap-4" id={Aboutstyles.SosialMedia}>
              <RxTwitterLogo className="w-5	 h-5	" />
              <FaInstagram className="w-5	 h-5	" />
              <RiLinkedinLine className="w-5	 h-5	" />
            </div>
          </div>
          <div className="FounderData">
            <img src={WillSmith} alt="" />
            <h1 className={Aboutstyles.name}>Will Smith</h1>
            <p className={Aboutstyles.position}>Product Designer</p>
            <div className="flex gap-4">
              <RxTwitterLogo className="w-5	 h-5	" />
              <FaInstagram className="w-5	 h-5	" />
              <RiLinkedinLine className="w-5	 h-5	" />
            </div>
          </div>
        </section>
      </div>

      <section
        className="flex justify-evenly		mt-40	mb-32	 "
        id={Aboutstyles.sectionBar}
      >
        <div className="flex flex-col	justify-center items-center">
          <div className="w-20	h-20	bg-zinc-400	rounded-full flex		justify-center items-center	mb-7		">
            <span className="flex justify-center items-center	 w-14	h-14 bg-black	rounded-full	">
              <TbTruckDelivery className="text-white	w-10	h-10		" />
            </span>
          </div>
          <h1 className={Aboutstyles.DELIVERY}>FREE AND FAST DELIVERY</h1>
          <p className={Aboutstyles.DELIVERYText}>
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col	justify-center items-center">
          <div className="w-20	h-20	bg-zinc-400	rounded-full flex		justify-center items-center	mb-7		">
            <span className="flex justify-center items-center	 w-14	h-14 bg-black	rounded-full	">
              <RiCustomerService2Line className="text-white	w-10	h-10		" />
            </span>
          </div>
          <h1 className={Aboutstyles.DELIVERY}>24/7 CUSTOMER SERVICE</h1>
          <p className={Aboutstyles.DELIVERYText}>
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="flex flex-col	justify-center items-center">
          <div className="w-20	h-20	bg-zinc-400	rounded-full flex		justify-center items-center	mb-7		">
            <span className="flex justify-center items-center	 w-14	h-14 bg-black	rounded-full	">
              <HiOutlineBadgeCheck className="text-white	w-10	h-10		" />
            </span>
          </div>
          <h1 className={Aboutstyles.DELIVERY}>MONEY BACK GUARANTEE</h1>
          <p className={Aboutstyles.DELIVERYText}>
            We reurn money within 30 days
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
