import React from "react";
import "./ShipmentListBlock.scss";
import ShipmentList from "./ShipmentList/ShipmentList";

const ShipmentListBlock = () => {
  return <div className="shipmentsblock-container">
    <label>SHIPMENT LIST</label>
    <ShipmentList />
  </div>;
};

export default ShipmentListBlock;
