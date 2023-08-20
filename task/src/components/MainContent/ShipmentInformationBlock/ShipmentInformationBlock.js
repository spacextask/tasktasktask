import React, { useEffect, useState } from "react";
import "./ShipmentInformationBlock.scss";
import { useSelector } from "react-redux";

const ShipmentInformationBlock = () => {
  let [cargoBaysRequired, setCargoBaysRequired] = useState(0);
  let [initialCompanyBoxes, setInitialCompanyBoxes] = useState("");

  const companyName = useSelector((state) => state.name);
  const companyEmail = useSelector((state) => state.email);
  const companyBoxes = useSelector((state) => state.boxes);

  // Most terrible part, here we go:
  useEffect(() => {
    initialCompanyBoxes = companyBoxes;
    setInitialCompanyBoxes(initialCompanyBoxes);
    inputHandler();
    setCargoBaysRequired(convertNumbersToCargoBays(companyBoxes));
  }, [companyName, companyBoxes, initialCompanyBoxes]);

  const inputHandler = () => {
    try {
      const inputHandler = document.getElementById("input");
      inputHandler.value = inputHandler.defaultValue;
    } catch (error) {
      console.log(error);
    }
  };

  const convertNumbersToCargoBays = (input) => {
    const splitCurrentArray = input.split(/[,]/);
    const newArray = splitCurrentArray.map(parseFloat);
    const sumArray = (arr) => arr.reduce((a, b) => a + Number(b), 0);
    const roundedNumber = Math.ceil(sumArray(newArray, 1));
    return Math.ceil(roundedNumber / 10, 1);
  };

  const calculateCargoBays = (event) => {
    const userInput = event.target.value;

    if (isNaN(convertNumbersToCargoBays(userInput))) {
    } else {
      cargoBaysRequired = convertNumbersToCargoBays(userInput);
      setCargoBaysRequired(cargoBaysRequired);
    }
  };

  return (
    <>
      {companyName ? (
        <div className="shipmentinfo-container">
          <h1>{companyName}</h1>
          <h4>{companyEmail}</h4>
          <h3>CARGO BOXES</h3>
          <input
            onChange={calculateCargoBays}
            type="text"
            id="input"
            defaultValue={initialCompanyBoxes}
          />
          <h2>Number of required cargo bays</h2>
          <label>{cargoBaysRequired}</label>
        </div>
      ) : (
        <div className="shipmentinfo-container"></div>
      )}
    </>
  );
};

export default ShipmentInformationBlock;
