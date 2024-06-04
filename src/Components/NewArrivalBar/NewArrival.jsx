import React from "react";
import NewArrivalstyles from "./newArrival.module.css";
import PlayStation from "./PlayStation5/PlayStation";
import WomensBar from "./Womens/WomensBar";
import Speakers from "./SpeakersBar/Speakers";
import Perfume from "./PerfumeBar/Perfume";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useTranslation } from "react-i18next";

function NewArrival() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded"> </div>
          <p className={NewArrivalstyles.logoToday}>{t("Featured")}</p>
        </div>
        <h1 className={NewArrivalstyles.BrowseCategory}>{t("New Arrival")}</h1>
        <div className="flex gap-8	" id={NewArrivalstyles.NewArrivalBar}>
          <div className={NewArrivalstyles.playStationbackground}>
            <PlayStation />
          </div>
          <div className="leftbox">
            <div className={NewArrivalstyles.womensBackground}>
              <WomensBar />
            </div>
            <div className="flex gap-8	" id={NewArrivalstyles.speakAndperfum}>
              <div className={NewArrivalstyles.speakersBackground}>
                <Speakers />
              </div>

              <div className={NewArrivalstyles.perfumeBackground}>
                <Perfume />
              </div>
            </div>
          </div>
        </div>

        <section
          className="flex justify-evenly		mt-28	mb-32	 "
          id={NewArrivalstyles.sectionBar}
        >
          <div
            className="flex flex-col	justify-center items-center shadow p-12 cursor-pointer "
            id={NewArrivalstyles.services}
          >
            <div className="w-20	h-20	bg-zinc-400	rounded-full flex		justify-center items-center	mb-7		">
              <span className="flex justify-center items-center	 w-14	h-14 bg-black	rounded-full	">
                <TbTruckDelivery
                  className="text-white	w-10	h-10"
                  id={NewArrivalstyles.iconRotate}
                />
              </span>
            </div>
            <h1 className={NewArrivalstyles.DELIVERY}>
              {t("FREE AND FAST DELIVERY")}
            </h1>
            <p className={NewArrivalstyles.DELIVERYText}>
              {t("Free delivery for all orders over $140")}
              
            </p>
          </div>
          <div className="flex flex-col	justify-center items-center shadow p-12 cursor-pointer"id={NewArrivalstyles.services}>
            <div className="w-20	h-20	bg-zinc-400	rounded-full flex		justify-center items-center	mb-7		">
              <span className="flex justify-center items-center	 w-14	h-14 bg-black	rounded-full	">
                <RiCustomerService2Line
                  className="text-white	w-10	h-10		"
                  id={NewArrivalstyles.iconRotate}
                />
              </span>
            </div>
            <h1 className={NewArrivalstyles.DELIVERY}>
            {t("24/7 CUSTOMER SERVICE")}
            </h1>
            <p className={NewArrivalstyles.DELIVERYText}>
            {t("Friendly 24/7 customer support")}
              
            </p>
          </div>
          <div className="flex flex-col	justify-center items-center shadow p-12 cursor-pointer" id={NewArrivalstyles.services}>
            <div className="w-20	h-20	bg-zinc-400	rounded-full flex		justify-center items-center	mb-7		">
              <span className="flex justify-center items-center	 w-14	h-14 bg-black	rounded-full	">
                <HiOutlineBadgeCheck
                  className="text-white	w-10	h-10		"
                  id={NewArrivalstyles.iconRotate}
                />
              </span>
            </div>
            <h1 className={NewArrivalstyles.DELIVERY}> 
            {t("MONEY BACK GUARANTEE")}
            </h1>
            <p className={NewArrivalstyles.DELIVERYText}>
              
            {t("We reurn money within 30 days")}

            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NewArrival;
