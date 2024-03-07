import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Header />
      404
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <p>Retourner sur la page d'accueil</p>
      </NavLink>
      <Footer />
    </div>
  );
};

export default Error;
