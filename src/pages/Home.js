import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import homeBannerImage from "../assets/img/banner-home.png";
import Card from "../components/Card";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Banner image={homeBannerImage}>
          <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
        <div className="gallery">
          {properties.map((property) => (
            <Card
              key={property.id}
              title={property.title}
              cover={property.cover}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
