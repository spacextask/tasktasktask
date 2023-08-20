import React, { useState } from "react";
import "./SearchBar.scss";
import shipments from "../../../assets/data/shipments.json";
import SearchBarItems from "./SearchBarItems/SearchBarItems";

const shipmentsArray = Object.values(shipments);

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchItemClicked, setSearchItemClicked] = useState(false);

  const getCompanyNames = () => {
    let companyNamesArray = [];

    for (let o in shipmentsArray) {
      companyNamesArray.push(shipmentsArray[o]);
    }

    let newObj = companyNamesArray[0].map((item) => item.name);
    let newArr = Object.values(newObj);
    return newArr;
  };

  const compareEntry = (event) => {
    try {
      const companyNames = getCompanyNames();
      let userInput = event.target.value;

      let matches = [];

      if (userInput) {
        matches = companyNames.filter((data) => {
          return data
            .toLocaleLowerCase()
            .startsWith(userInput.toLocaleLowerCase());
        });
        matches = matches.map((data) => {
          return (matches = data);
        });
        setSearchResults(matches);
      }

      return "No matches found";
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchItemClick = () => {
    if (searchItemClicked) {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <form className="form-search">
        <input
          className="input-search"
          id="search-input"
          onChange={compareEntry}
          type="search"
          placeholder="Search"
        />

        {searchResults.map((el) => (
          <SearchBarItems
            key={el.name}
            url={el.id}
            name={el}
            // didn't finish that one
            onClick={handleSearchItemClick}
          />
        ))}
      </form>
    </div>
  );
};

export default SearchBar;
