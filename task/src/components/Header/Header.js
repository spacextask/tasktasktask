import React from "react";
import "./Header.scss";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="inner">
        <Logo />
      </div>
      <div className="searchbar-container">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
