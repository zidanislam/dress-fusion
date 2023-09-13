import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";

const StarRating = ({ ratings }) => {
  const topRating = 5;
  const fullStars = Math.floor(ratings);
  let hasHalfStar = ratings % 1 !== 0;
  const stars = [];

  for (let i = 1; i <= topRating; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="star-filled text-yellow-500" />);
    } else if (hasHalfStar) {
      stars.push(<FaStarHalf key={i} className="star-half text-yellow-500" />);
      hasHalfStar = false; // To ensure only one half star is displayed
    } else {
      stars.push(<FaRegStar key={i} className="star-empty text-yellow-500" />);
    }
  }
  return (
    <div className=" flex align-middle gap-1 my-auto">
      <div className="star-rating lg:text-sm text-xs flex my-auto">{stars}</div>
      <p className="text-xs">({ratings})</p>
    </div>
  );
};

export default StarRating;
