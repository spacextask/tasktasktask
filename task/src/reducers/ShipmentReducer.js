import { createStore } from "redux";

export const initialState = {
  id: "",
  name: "",
  email: "",
  boxes: "",
};

const ShipmentReducer = (state = initialState, action) => {
  if (action.type === "SWITCH_SHIPMENT_INFO") {
    // console.log(action.value)
    return {
      name: action.value[0],
      email: action.value[1],
      boxes: action.value[2],
    };
  }

  return state;
};

const store = createStore(ShipmentReducer);

export default store;
