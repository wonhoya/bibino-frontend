import React from "react";

import {
  RatingStarFilledIcon,
  RatingStarhalfFilledIcon,
  RatingStarUnfilledIcon,
} from "../assets/svgs/icon";

const getStarRatings = (rate, total, size) => {
  const FullStar = () => <RatingStarFilledIcon size={size} />;
  const HalfStar = () => <RatingStarhalfFilledIcon size={size} />;
  const EmptyStar = () => <RatingStarUnfilledIcon size={size} />;

  const ratingNum = Number(rate);
  const totalNum = Number(total);

  let stars;

  if (Number.isInteger(ratingNum)) {
    stars = Array(totalNum)
      .fill("empty")
      .map((elem, index) => {
        if (index < ratingNum) {
          return "full";
        }

        return elem;
      });
  } else {
    const floorRating = Math.floor(ratingNum);
    stars = Array(totalNum)
      .fill("empty")
      .map((elem, index) => {
        if (index < floorRating) {
          return "full";
        } else if (index === floorRating) {
          return "half";
        } else {
          return elem;
        }
      });
  }

  return stars.map((elem, index) => {
    const key = elem + index;

    switch (elem) {
      case "full":
        return <FullStar key={key} />;
      case "half":
        return <HalfStar key={key} />;
      default:
        return <EmptyStar key={key} />;
    }
  });
};

export default getStarRatings;
