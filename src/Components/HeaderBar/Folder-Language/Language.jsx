import React from "react";
import Languagestyles from "./language.module.css";

function Language() {
  return (
    <div>
      <select className={Languagestyles.selectHeader} id={Languagestyles.selectHeader}>
        <option value="0">English</option>
      </select>
    </div>
  );
}

export default Language;
