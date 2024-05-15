import React from "react";
import cstegoristyles from "./categories.module.css";

import Phones from "./C-Phones/Phones";
import Computers from "./C-Computers/Computers";
import SmartWatch from "./C-SmartWatch/SmartWatch";
import Camera from "./C-Camera/Camera";
import HeadPhones from "./C-HeadPhones/HeadPhones";
import Gaming from "./C-Gaming/Gaming";

function Categories() {
  return (
    <div>
      <div className="container">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded"> </div>
          <p className={cstegoristyles.logoToday}>Categories</p>
        </div>
        <h1 className={cstegoristyles.BrowseCategory}>Browse By Category</h1>
        <div
          className="flex mt-16	mb-16 justify-between"
          id={cstegoristyles.allBoxCategori}
        >
          <Phones />
          <Computers />
          <SmartWatch />
          <Camera />
          <HeadPhones />
          <Gaming />
        </div>
        {/* **********mobile ************/}
        <div
          className="flex mt-16	mb-16 justify-between"
          id={cstegoristyles.allBoxCategoriMobil}
        >
            <div className="flex justify-between	">
              <Phones />
              <Computers />
            </div>
            <div className="flex justify-between	">
              <SmartWatch />
              <Camera />
            </div>
            <div className="flex justify-between	">
              <HeadPhones />
              <Gaming />
            </div>
        </div>
        {/* **********mobile ************/}

        <hr className={cstegoristyles.HrFooter} />
      </div>
    </div>
  );
}

export default Categories;
