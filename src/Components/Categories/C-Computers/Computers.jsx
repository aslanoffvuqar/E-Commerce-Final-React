import React from "react";
import Computersstyles from "./computers.module.css";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

function Computers() {
  return (
    <div>
      <div className={Computersstyles.ComputerBox}>
        <HiOutlineComputerDesktop className={Computersstyles.Computers} />
        <p className={Computersstyles.ComputersCatogori}>Computers</p>
      </div>
    </div>
  );
}

export default Computers;
