import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" className="logo-kasa" />
      <Navigation />
    </header>
  );
};

export default Header;
