import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import homeBannerImage from "../assets/img/banner-home.png";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner image={homeBannerImage}>
          <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
      </main>
      <Footer />
    </>
  );
};

export default Home;
