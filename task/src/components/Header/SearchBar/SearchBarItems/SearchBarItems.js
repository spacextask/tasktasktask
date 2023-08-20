import React from "react";
import { NavLink } from "react-router-dom";
import "./SearchBarItems.scss";

const SearchBarItems = (props) => {
    const handleClose = () => {
        props.handleSearchItemClick(true)
    }
  return (
    <div className="search-item">
      <ul>
        <NavLink
          to={props.url}
          onClick={handleClose}
        >
          {props.name}
        </NavLink>
      </ul>
    </div>
  );
};

export default SearchBarItems;
