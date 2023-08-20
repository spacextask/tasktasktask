import React from "react";
import "./Logo.scss";
import { ReactComponent as SpaceXLogoSVG } from "../../../assets/pictures/SpaceXLogo.svg";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="svg-container">
        <SpaceXLogoSVG fill="white" />
      </div>
      <a>CARGO PLANNER</a>
    </div>
  );
};

export default Logo;
