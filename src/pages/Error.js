import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Header />
      <main className="error">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className="error-link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Error;
