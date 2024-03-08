import React from "react";

const Banner = ({ image, children }) => {
  return (
    <section className="banner">
      <div
        className="banner-container"
        style={{ backgroundImage: `url(${image})` }}>
        {children}
      </div>
    </section>
  );
};

export default Banner;
