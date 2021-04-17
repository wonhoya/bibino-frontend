import React from "react";

import {
  RatingStarFilledIcon,
  RatingStarhalfFilledIcon,
  RatingStarUnfilledIcon,
} from "../assets/svgs/icon";

const getStarRatings = (rate, total, size) => {
  let stars;

  if (Number.isInteger(rate)) {
    stars = Array(total)
      .fill("empty")
      .map((elem, index) => {
        if (index < rate) {
          return "full";
        }

        return elem;
      });
  } else {
    const floorRating = Math.floor(rate);
    stars = Array(total)
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
        return <RatingStarFilledIcon size={size} key={key} />;
      case "half":
        return <RatingStarhalfFilledIcon size={size} key={key} />;
      default:
        return <RatingStarUnfilledIcon size={size} key={key} />;
    }
  });
};

export default getStarRatings;
