import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "../MainPage";
import ShipmentInformationBlock from "../components/MainContent/ShipmentInformationBlock/ShipmentInformationBlock";

const Router = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        {/* <Route index element={<ShipmentInformationBlock/>} />  */}
        <Route
          path={location.pathname}
          element={<ShipmentInformationBlock />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
