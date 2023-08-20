import React from "react";
import shipments from "../../../../assets/data/shipments.json";
import ShipmentListItem from "./ShipmentListItem/ShipmentListItem";

const shipmentsArray = Object.values(shipments);

const ShipmentList = () => {
  return (
    <div>
      {shipmentsArray[0].map((el) => (
        <ShipmentListItem
          key={el.name}
          url={el.id}
          name={el.name}
          email={el.email}
          boxes={el.boxes}
        />
      ))}
    </div>
  );
};

export default ShipmentList;
