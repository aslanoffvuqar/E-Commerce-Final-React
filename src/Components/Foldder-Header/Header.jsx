import React from "react";
import "./header.css";
import Headerstyles from "./header.module.css";
import "../Foldder-Header/headerMedia.css";
import Language from "./Folder-Language/Language";
function header() {
  return (
    <>
      <header >
        <div className={Headerstyles.container}>
          <div className={Headerstyles.headerClass}>
            <div className={Headerstyles.header_P_A}>
              <p className={Headerstyles.headerClass_P}>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <a
                className={Headerstyles.headerSelect_A}
                href="#"
              >
                ShopNow
              </a>
            </div>
          <Language/>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
