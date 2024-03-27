import React from "react";
import star from "../assets/img/star.png";
import starActive from "../assets/img/star-active.png";

const Stars = ({ rating }) => {
  const scores = [1, 2, 3, 4, 5];

  return (
    <div className="star-ratings">
      {scores.map((score, starIndex) => (
        <img
          key={starIndex}
          className="star"
          src={rating >= score ? starActive : star}
          alt={rating >= score ? "full star" : "empty star"}
        />
      ))}
    </div>
  );
};

export default Stars;
