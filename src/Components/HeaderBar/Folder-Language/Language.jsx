import React from "react";
import Languagestyles from "./language.module.css";
import { useTranslation } from 'react-i18next';

function Language() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    console.log("Changing language to:", e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <select 
        className={Languagestyles.selectHeader} 
        id={Languagestyles.selectHeader}
        onChange={handleChangeLanguage}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="az">Azəbaycan</option>
      </select>
    </div>
  );
}

export default Language;
