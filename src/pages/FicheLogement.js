import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    <div>
      <Header />
      {property && (
        <div>
          <h1>{property.title}</h1>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FicheLogement;
