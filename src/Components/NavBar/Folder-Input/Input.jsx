import React from "react";
import Inputstyles from "./input.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function Input() {
  const { t } = useTranslation();

  return (
    <div>
      <form className={Inputstyles.inputDivNav} action="#">
        <input
          className={Inputstyles.inputDivNav_input}
          type="text"
          placeholder={t("What are you looking for?")}
        />
        <FontAwesomeIcon icon={faSearch} className={Inputstyles.searchIcon} />
      </form>
    </div>
  );
}

export default Input;
