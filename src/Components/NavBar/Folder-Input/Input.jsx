import React from "react";
import Inputstyles from "./input.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Input() {
  return (
    <div>
      <div>
        <form className={Inputstyles.inputDivNav} action="#">
          <input
            className={Inputstyles.inputDivNav_input}
            type="text"
            placeholder="What are you looking for?"
          />
          <FontAwesomeIcon icon={faSearch} className={Inputstyles.searchIcon} />
        </form>
      </div>
    </div>
  );
}

export default Input;
