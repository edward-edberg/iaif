import React from "react";
// import Logo from "./logo.js";
import logo from "./img/01.png";

const UnderConstruction = () => {
  return (
    <div className="construct">
      {/* <h1 className="title">
        Under<br></br>Construction
      </h1>
      <p className="detail">site nearly ready</p> */}
      <div className="">
        <img src={logo} alt="" className="logo" />
        <p className="logo-heading">
          Indonesian American <br /> Innovation Foundation
        </p>
      </div>

      {/* <Logo /> */}
    </div>
  );
};

export default UnderConstruction;
