import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import homeBannerImage from "../assets/img/banner-home.png";
import Card from "../components/Card";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((data) => {
        setProperties(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Banner image={homeBannerImage}>
          <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
        <div className="gallery">
          {isLoading ? (
            <div>Chargement en cours...</div>
          ) : (
            properties.map((property) => (
              <Card
                key={property.id}
                id={property.id}
                title={property.title}
                cover={property.cover}
              />
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
