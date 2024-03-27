import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Stars from "../components/Stars";

const FicheLogement = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((data) => setProperty(data))
      .catch((fetchError) => {
        console.error("Fetch error: ", fetchError);
        setError(true);
      });
  }, [id]);

  useEffect(() => {
    if (error) {
      navigate("/Error");
    }
  }, [error, navigate]);

  return (
    <>
      <Header />
      <main>
        {property && (
          <>
            <section className="slideshow">
              <Slideshow pictures={property.pictures} alt={property.title} />
            </section>
            <section className="property-information">
              <div className="property-details">
                <h1 className="detail-title">{property.title}</h1>
                <h2 className="detail-location">{property.location}</h2>
                <ul className="detail-tags">
                  {property.tags.map((tag, index) => (
                    <li className="tag" key={index}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="host-details">
                <div className="host">
                  <p>
                    {property.host.name.split(" ")[0]}
                    <br />
                    {property.host.name.split(" ")[1]}
                  </p>
                  <img
                    src={property.host.picture}
                    alt={`Photo de profil de :` + property.host.name}
                  />
                </div>
                <Stars rating={property.rating} />
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default FicheLogement;
