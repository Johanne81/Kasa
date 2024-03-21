import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/img/logo.png";
import logoMobile from "../assets/img/logo-mobile.png";

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        srcSet={`${logoMobile} 767w, ${logo} 1240w`}
        alt="Logo Kasa"
      />
      <Navigation />
    </header>
  );
};

export default Header;
