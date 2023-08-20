import React from "react";
import "./MainContent.scss";
import ShipmentListBlock from "./ShipmentListBlock/ShipmentListBlock";
import ShipmentInformationBlock from "./ShipmentInformationBlock/ShipmentInformationBlock";

const MainContent = () => {
  return <div className="maincontent-container">
    <ShipmentListBlock />
    <ShipmentInformationBlock />
  </div>;
};

export default MainContent;
