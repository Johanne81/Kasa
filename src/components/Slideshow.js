import React, { useState } from "react";
import arrowRight from "../assets/img/arrow-right.png";
import arrowLeft from "../assets/img/arrow-left.png";

const Slideshow = ({ pictures, alt }) => {
  const [index, setIndex] = useState(0);

  //Passer à l'image suivante
  const nextSlide = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  };

  //Passer à l'image précédente
  const prevSlide = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1);
  };

  return (
    <section className="carousel">
      <div className="carousel-inner">
        {pictures.map((picture, pictureIndex) => (
          <div
            key={pictureIndex}
            className={pictureIndex === index ? "slide active" : "slide"}>
            {pictureIndex === index && (
              <img src={picture} alt={alt} className="slideshow-img" />
            )}
          </div>
        ))}
      </div>

      {pictures.length > 1 && ( // Afficher les flèches et le compteur uniquement s'il y a + d'1 image
        <>
          <img
            src={arrowLeft}
            alt="Précédent"
            onClick={prevSlide}
            className="arrow-left"
          />
          <img
            src={arrowRight}
            alt="Suivant"
            onClick={nextSlide}
            className="arrow-right"
          />
          <div className="counter">
            {index + 1}/{pictures.length}
          </div>
        </>
      )}
    </section>
  );
};

export default Slideshow;
