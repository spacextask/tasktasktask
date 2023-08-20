import React from "react";
import "./ShipmentListItem.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import store from "../../../../../reducers/ShipmentReducer";

const ShipmentListItem = (props) => {
  const state = props;

  const dispatch = useDispatch(store);

  const changeShipmentInfo = () => {
    dispatch({
      type: "SWITCH_SHIPMENT_INFO",
      value: [state.name, state.email, state.boxes],
    });
  };

  return (
    <NavLink
      className="item-container"
      to={props.url}
      onClick={changeShipmentInfo}
    >
      {props.name}
    </NavLink>
  );
};

export default ShipmentListItem;
