import React from "react";
import logo from "./img/01.png";

function Hero() {
  return (
    <div className="construct">
      <div className="">
        <img src={logo} alt="" className="logo" />
        <p className="logo-heading">
          Indonesian American <br /> Innovation Foundation
        </p>
      </div>
    </div>
  );
}

export default Hero;
